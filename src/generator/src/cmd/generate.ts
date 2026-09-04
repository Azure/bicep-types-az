// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { existsSync } from 'fs';
import { mkdir, rm, writeFile, readFile } from 'fs/promises';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'
import * as markdown from '@ts-common/commonmark-to-markdown'
import * as yaml from 'js-yaml'
import { TypeFile, TypeSettings, buildIndex, writeIndexJson, writeIndexMarkdown, readTypesJson } from 'bicep-types';
import { executeSynchronous, getLogger, logErr, logOut, ILogger, defaultLogger, executeCmd, findRecursive, replaceRecursive } from '../utils';
import { addAzExtensionConfigurationType } from '../index/azExtensionConfiguration';
import { getPathData } from '../pathData';

const rootDir = `${__dirname}/../../../../`;

const extensionDir = path.resolve(`${rootDir}/src/autorest.bicep/`);
const typespecBicepDir = path.resolve(`${rootDir}/src/typespec-bicep/`);
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
const tspBinary = os.platform() === 'win32' ? 'tsp.cmd' : 'tsp';
const defaultOutDir = path.resolve(`${rootDir}/generated`);

const argsConfig = yargs(hideBin(process.argv))
  .strict()
  .option('specs-dir', { type: 'string', demandOption: true, desc: 'Path to the specs dir' })
  .option('out-dir', { type: 'string', default: defaultOutDir, desc: 'Output path for generated files' })
  .option('path-prefix', { type: 'string', default: undefined, desc: 'Only regenerate under a specific top-level path - e.g. "dns"' })
  .option('logging-level', { type: 'string', default: 'warning', choices: ['debug', 'verbose', 'information', 'warning', 'error', 'fatal'] })
  .option('wait-for-debugger', { type: 'boolean', default: false, desc: 'Wait for a C# debugger to be attached before running the Autorest extension' });

executeSynchronous(async () => {
  const args = await argsConfig.parseAsync();
  const inputBaseDir = path.resolve(args['specs-dir']);
  const outputBaseDir = path.resolve(args['out-dir']);
  const logLevel = args['logging-level'];
  const waitForDebugger = args['wait-for-debugger'];
  const pathPrefix = args['path-prefix'];

  const specsPath = path.join(inputBaseDir, 'specification');
  const tmpOutputPath = `${os.tmpdir()}/_bcp_${new Date().getTime()}`;
  await rm(tmpOutputPath, { recursive: true, force: true, });

  // this file is deliberately gitignored as it'll be overwritten when using --path-prefix
  // it's used to generate the git commit message
  await mkdir(outputBaseDir, { recursive: true });
  const summaryLogger = await getLogger(`${outputBaseDir}/summary.log`);
  const pathData = await getPathData(specsPath, pathPrefix, inputBaseDir, tmpOutputPath, outputBaseDir);
  if (pathData.some(entry => entry.kind === 'autorest') && !existsSync(`${extensionDir}/dist`)) {
    throw `Unable to find ${extensionDir}/dist. Did you forget to run 'npm run build'?`;
  }

  for (const entry of pathData) {
    const { relativeSourcePath, tmpOutputDir, outputDir } = entry;
    await rm(tmpOutputDir, { recursive: true, force: true, });
    await mkdir(tmpOutputDir, { recursive: true });
    const logger = await getLogger(`${tmpOutputDir}/log.out`);

    try {
      logger.out(`Generating types for '${relativeSourcePath}'\n`);

      if (entry.kind === 'typespec') {
        const projectDir = path.dirname(entry.typeSpecConfigPath);
        const relativeProject = path.relative(inputBaseDir, projectDir);
        logger.out(`Running TypeSpec emitter for '${relativeProject}'\n`);
        await runTypeSpec(logger, projectDir, tmpOutputDir, isVerboseLoggingLevel(logLevel));

        await replaceRecursive(tmpOutputDir, outputDir);
      } else {
        await generateAutorestConfig(logger, entry.readmePath, entry.bicepReadmePath);
        await runAutorest(logger, entry.readmePath, tmpOutputDir, logLevel, waitForDebugger);

        await replaceRecursive(tmpOutputDir, outputDir);
      }
    } catch (err) {
      logErr(logger, err);
      logOut(summaryLogger,
`<details>
  <summary>Failed to generate types for '${relativeSourcePath}'</summary>

\`\`\`
${err}
\`\`\`
</details>
`);
    }

    await rm(tmpOutputDir, { recursive: true, force: true, });
    if (entry.kind === 'autorest') {
      await clearAutorestTempDir(logger, logLevel, waitForDebugger);
      await rm(entry.bicepReadmePath, { force: true });
    }
  }

  await buildTypeIndex(defaultLogger, outputBaseDir);

  if (!pathPrefix) {
    const shouldRebuildTypeIndex = await clearStaleTypeFolders(defaultLogger, outputBaseDir, pathData.map(x => x.outputDir));
    if (shouldRebuildTypeIndex) {
      await buildTypeIndex(defaultLogger, outputBaseDir);
    }
  }
});

function normalizeJsonPath(jsonPath: string) {
  // eslint-disable-next-line no-useless-escape
  return path.normalize(jsonPath).replace(/[\\\/]/g, '/');
}

async function generateAutorestConfig(logger: ILogger, readmePath: string, bicepReadmePath: string) {
  // We expect a path format convention of <provider>/(any/number/of/intervening/folders)/<yyyy>-<mm>-<dd>(|-preview)/<filename>.json
  // This information is used to generate individual tags in the generated autorest configuration
  // eslint-disable-next-line no-useless-escape
  const pathRegex = /^(\$\(this-folder\)\/|)([^\/]+)(?:\/[^\/]+)*\/(\d{4}-\d{2}-\d{2}(|-preview))\/.*\.json$/i;

  const readmeContents = await readFile(readmePath, { encoding: 'utf8' });
  const readmeMarkdown = markdown.parse(readmeContents);

  const inputFiles = new Set<string>([]);
  // we need to look for all autorest configuration elements containing input files, and collect that list of files. These will look like (e.g.):
  // ```yaml $(tag) == 'someTag'
  // input-file:
  // - path/to/file.json
  // - path/to/other_file.json
  // ```
  for (const node of markdown.iterate(readmeMarkdown.markDown)) {
    // We're only interested in yaml code blocks
    if (node.type !== 'code_block' || !node.info || !node.literal ||
      !node.info.trim().startsWith('yaml')) {
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const yamlData = yaml.load(node.literal) as any;
    if (yamlData) {
      // input-file may be a single string or an array of strings
      const inputFile = yamlData['input-file'];
      if (typeof inputFile === 'string') {
        inputFiles.add(inputFile);
      } else if (inputFile instanceof Array) {
        for (const i of inputFile) {
          inputFiles.add(i);
        }
      }
    }
  }

  const filesByTag: Record<string, string[]> = {};
  for (const file of inputFiles) {
    const normalizedFile = normalizeJsonPath(file);
    const match = pathRegex.exec(normalizedFile);
    if (match) {
      // Generate a unique tag. We can't process all of the different API versions in one autorest pass
      // because there are constraints on naming uniqueness (e.g. naming of definitions), so we want to pass over
      // each API version separately.
      const tagName = `${match[2].toLowerCase()}-${match[3].toLowerCase()}`;
      if (!filesByTag[tagName]) {
        filesByTag[tagName] = [];
      }

      filesByTag[tagName].push(normalizedFile);
    } else {
      logOut(logger, `WARNING: Unable to parse swagger path "${file}"`);
    }
  }

  let generatedContent = `##Bicep

### Bicep multi-api
\`\`\`yaml $(bicep) && $(multiapi)
${yaml.dump({ 'batch': Object.keys(filesByTag).map(tag => ({ 'tag': tag })) }, { lineWidth: 1000 })}
\`\`\`
`;

  for (const tag of Object.keys(filesByTag)) {
    generatedContent += `### Tag: ${tag} and bicep
\`\`\`yaml $(tag) == '${tag}' && $(bicep)
${yaml.dump({ 'input-file': filesByTag[tag] }, { lineWidth: 1000})}
\`\`\`
`;
  }

  await writeFile(bicepReadmePath, generatedContent);
}

async function runAutorest(logger: ILogger, readme: string, outputBaseDir: string, logLevel: string, waitForDebugger: boolean) {
  let autoRestParams = [
    `--use=@autorest/modelerfour`,
    `--use=${extensionDir}`,
    '--bicep',
    `--output-folder=${outputBaseDir}`,
    `--level=${logLevel}`,
    `--multiapi`,
    '--title=none',
    // This is necessary to avoid failures such as "ERROR: Semantic violation: Discriminator must be a required property." blocking type generation.
    // In an ideal world, we'd raise issues in https://github.com/Azure/azure-rest-api-specs and force RP teams to fix them, but this isn't very practical
    // as new validations are added continuously, and there's often quite a lag before teams will fix them - we don't want to be blocked by this in generating types.
    `--skip-semantics-validation`,
    readme,
  ];

  autoRestParams = applyCommonAutoRestParameters(autoRestParams, logLevel, waitForDebugger);

  return await executeCmd(logger, isVerboseLoggingLevel(logLevel), __dirname, autorestBinary, autoRestParams);
}

async function clearAutorestTempDir(logger: ILogger, logLevel: string, waitForDebugger: boolean) {
  const autoRestParams = applyCommonAutoRestParameters(['--clear-temp', '--allow-no-input'], logLevel, waitForDebugger);

  return await executeCmd(logger, isVerboseLoggingLevel(logLevel), __dirname, autorestBinary, autoRestParams);
}

function applyCommonAutoRestParameters(autoRestParams: string[], logLevel: string, waitForDebugger: boolean) {
  autoRestParams = autoRestParams.concat([`--level=${logLevel}`])

  if (waitForDebugger) {
    autoRestParams = autoRestParams.concat([
      `--bicep.debugger`,
    ]);
  }

  return autoRestParams;
}

async function clearStaleTypeFolders(logger: ILogger, outputBaseDir: string, outputDirs: string[]) {
  const typesPaths = await findRecursive(outputBaseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });

  const typesBasePaths = typesPaths.map(p => path.relative(outputBaseDir, p).split(path.sep)[0].toLowerCase());
  const generatedBasePaths = outputDirs.map(p => path.relative(outputBaseDir, p).split(path.sep)[0].toLowerCase());

  const staleBasePaths = typesBasePaths
    .filter(p => !generatedBasePaths.includes(p))
    .filter((value, index, array) => array.indexOf(value) === index);

  if (staleBasePaths.length > 0) {
    logOut(logger, `Found the following type folders which have no corresponding readme: '${staleBasePaths.join("', '")}'. Cleaning them up.`);
  }

  for (const basePath of staleBasePaths) {
    await rm(`${outputBaseDir}/${basePath}`, { recursive: true, force: true, });
  }

  return staleBasePaths.length > 0;
}

async function buildTypeIndex(logger: ILogger, baseDir: string) {
  const typesPaths = await findRecursive(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });

  const typeFiles: TypeFile[] = [];
  for (const typePath of typesPaths) {
    const content = await readFile(typePath, { encoding: 'utf8' });
    typeFiles.push({
      relativePath: path.relative(baseDir, typePath).replace(/\\/g, '/'),
      types: readTypesJson(content),
    });
  }

  const preliminaryIndex = await buildIndex(typeFiles, (log: string) => logOut(logger, log));
  const { configurationType, typeFile } = await addAzExtensionConfigurationType(baseDir, preliminaryIndex.resources);
  const indexTypeFiles = [...typeFiles, typeFile];
  const settings: TypeSettings = {
    name: 'AzureResourceManager',
    version: '1.0',
    isSingleton: true,
    configurationType,
  };

  const indexContent = await buildIndex(indexTypeFiles, (log: string) => logOut(logger, log), settings);

  await writeFile(`${baseDir}/index.json`, writeIndexJson(indexContent));
  await writeFile(`${baseDir}/index.md`, writeIndexMarkdown(indexContent));
}

function isVerboseLoggingLevel(logLevel: string) {
  switch (logLevel.toLowerCase()) {
    case 'debug':
    case 'verbose':
      return true;
    default:
      return false;
  }
}

/**
 * Invokes the TypeSpec compiler with the typespec-bicep emitter for a
 * given TypeSpec project directory.
 */
async function runTypeSpec(logger: ILogger, projectDir: string, outputDir: string, verbose: boolean): Promise<void> {
  if (!existsSync(`${typespecBicepDir}/dist`)) {
    throw `Unable to find ${typespecBicepDir}/dist. Did you forget to build typespec-bicep?`;
  }

  // Install TypeSpec project dependencies before compiling
  await executeCmd(logger, verbose, projectDir, tspBinary, ['install']);

  const tspArgs = [
    'compile',
    projectDir,
    `--emit=${typespecBicepDir}`,
    `--output-dir=${outputDir}`,
    '--option', `@azure-tools/typespec-bicep.emitter-output-dir=${outputDir}`,
  ];

  return await executeCmd(logger, verbose, projectDir, tspBinary, tspArgs);
}
