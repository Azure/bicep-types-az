import os from 'os';
import path from 'path';
import { createWriteStream, existsSync } from 'fs';
import { readdir, stat, rmdir, mkdir, rm, writeFile, readFile, copyFile } from 'fs/promises';
import { series } from 'async';
import { spawn } from 'child_process';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import yargs from 'yargs';
import { groupBy, keys, orderBy, sortBy, Dictionary } from 'lodash';
import { TypeBaseKind } from '../types';
import * as markdown from '@ts-common/commonmark-to-markdown'
import * as yaml from 'js-yaml'

interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

const defaultLogger: ILogger = {
  out: data => process.stdout.write(data),
  err: data => process.stderr.write(data),
}

const extensionDir = path.resolve(`${__dirname}/../`);
const autorestDll = path.resolve(`${extensionDir}/src/Bicep.TypeGen.Autorest/bin/net5.0/Bicep.TypeGen.Autorest.dll`);
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
const defaultOutDir = path.resolve(`${extensionDir}/../../generated`);

const args = yargs
  .strict()
  .option('specs-dir', { type: 'string', demandOption: true, desc: 'Path to the azure-rest-api-specs dir' })
  .option('out-dir', { type: 'string', default: defaultOutDir, desc: 'Output path for generated files' })
  .option('single-path', { type: 'string', default: undefined, desc: 'Only regenerate under a specific file path - e.g. "compute"' })
  .option('verbose', { type: 'boolean', default: false, desc: 'Enable autorest verbose logging' })
  .option('wait-for-debugger', { type: 'boolean', default: false, desc: 'Wait for a C# debugger to be attached before running the Autorest extension' })
  .argv;

executeSynchronous(async () => {
  const inputBaseDir = path.resolve(args['specs-dir']);
  const outputBaseDir = path.resolve(args['out-dir']);
  const verbose = args['verbose'];
  const waitForDebugger = args['wait-for-debugger'];
  const singlePath = args['single-path'];

  if (!existsSync(autorestDll)) {
    throw `Unable to find ${autorestDll}. Did you forget to run dotnet build?`;
  }

  // find all readme paths in the azure-rest-api-specs repo
  const specsPath = path.join(inputBaseDir, 'specification');
  const readmePaths = await findReadmePaths(specsPath);
  if (readmePaths.length === 0) {
    throw `Unable to find rest-api-specs in folder ${inputBaseDir}`;
  }

  const tmpOutputPath = `${os.tmpdir()}/_bcp_${new Date().getTime()}`;
  await rmdir(tmpOutputPath, { recursive: true });

  // this file is deliberately gitignored as it'll be overwritten when using --single-path
  // it's used to generate the git commit message
  const summaryLogger = await getLogger(`${outputBaseDir}/summary.log`);

  // use consistent sorting to make log changes easier to review
  for (const readmePath of readmePaths.sort(lowerCaseCompare)) {
    const basePath = path.relative(specsPath, readmePath).split(path.sep)[0].toLowerCase();
    const outputDir = `${tmpOutputPath}/${basePath}`;

    if (singlePath && lowerCaseCompare(singlePath, basePath) !== 0) {
      continue;
    }

    // remove all previously-generated files
    await rmdir(outputDir, { recursive: true });
    await mkdir(outputDir, { recursive: true });
    const logger = await getLogger(`${outputDir}/log.out`);

    try {
      await buildConfiguration(logger, readmePath);
      await generateSchema(logger, readmePath, outputDir, verbose, waitForDebugger);

      await copyRecursive(outputDir, `${outputBaseDir}/${basePath}`);
    } catch (e) {
      logErr(logger, e);

      logErr(summaryLogger, `Failed to generate types for path '${basePath}'`);
    }

    // clean up temp dir
    await rmdir(outputDir, { recursive: true });
  }

  // build the type index
  await buildTypeIndex(defaultLogger, outputBaseDir);
});

async function buildConfiguration(logger: ILogger, readme: string) {
  const pathRegex = /(microsoft\.\w+)[\\\/]\S*[\\\/](\d{4}-\d{2}-\d{2}(|-preview))[\\\/]/i;
  const readmeContents = await readFile(readme, { encoding: 'utf8' });
  const readmeMarkdown = markdown.parse(readmeContents);

  const inputFiles = new Set<string>();
  for (const codeBlock of markdown.iterate(readmeMarkdown.markDown)) {
    if (codeBlock.type === 'code_block' && codeBlock?.info?.startsWith('yaml') && codeBlock.literal !== null) {
      const yamlBlock = yaml.load(codeBlock.literal) as any;
      if (yamlBlock) {
        const inputFile = yamlBlock['input-file'];
        if (typeof inputFile === 'string') {
          inputFiles.add(inputFile);
        } else if (inputFile instanceof Array) {
          for (const i of inputFile) {
            inputFiles.add(i);
          }
        }
      }
    }
  }

  const filesByTag: Dictionary<string[]> = {};
  for (const file of inputFiles) {
    const match = pathRegex.exec(file);
    if (match) {
      const tagName = `${match[1].toLowerCase()}-${match[2].toLowerCase()}`;
      if (!filesByTag[tagName]) {
        filesByTag[tagName] = [];
      }

      filesByTag[tagName].push(file);
    }
  }

  let generatedContent = `##Bicep

### Bicep multi-api
\`\`\` yaml $(bicep) && $(multiapi)
${yaml.dump({ 'batch': Object.keys(filesByTag).map(tag => ({ 'tag': tag })) }, { lineWidth: 1000 })}
\`\`\`
`;

  for (const tag of Object.keys(filesByTag)) {
    generatedContent += `### Tag: ${tag} and bicep
\`\`\` yaml $(tag) == '${tag}' && $(bicep)
${yaml.dump({ 'input-file': filesByTag[tag] }, { lineWidth: 1000})}
\`\`\`
`;

    await writeFile(
      `${path.dirname(readme)}/readme.bicep.md`,
      generatedContent);
  }
}

async function generateSchema(logger: ILogger, readme: string, outputBaseDir: string, verbose: boolean, waitForDebugger: boolean) {
  let autoRestParams = [
    `--use=${extensionDir}`,
    '--bicep',
    `--output-folder=${outputBaseDir}`,
    `--multiapi`,
    readme,
  ];

  if (verbose) {
    autoRestParams = autoRestParams.concat([
      `--debug`,
      `--verbose`,
    ]);
  }

  if (waitForDebugger) {
    autoRestParams = autoRestParams.concat([
      `--bicep.debugger=true`,
    ]);
  }

  return await executeCmd(logger, verbose, __dirname, autorestBinary, autoRestParams);
}

async function findReadmePaths(specsPath: string) {
  return await findRecursive(specsPath, filePath => {
    if (path.basename(filePath) !== 'readme.md') {
      return false;
    }

    return filePath
      .split(path.sep)
      .some(parent => parent == 'resource-manager');
  });
}

async function copyRecursive(sourceBasePath: string, destinationBasePath: string): Promise<void> {
  for (const filePath of await findRecursive(sourceBasePath, _ => true)) {
    const destinationPath = path.join(destinationBasePath, path.relative(sourceBasePath, filePath));

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await copyFile(filePath, destinationPath);
  }
}

async function findRecursive(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
  let results: string[] = [];

  for (const subPathName of await readdir(basePath)) {
    const subPath = path.resolve(`${basePath}/${subPathName}`);

    const fileStat = await stat(subPath);
    if (fileStat.isDirectory()) {
      const pathResults = await findRecursive(subPath, filter);
      results = results.concat(pathResults);
      continue;
    }

    if (!fileStat.isFile()) {
      continue;
    }

    if (!filter(subPath)) {
      continue;
    }

    results.push(subPath);
  }

  return results;
}

function executeCmd(logger: ILogger, verbose: boolean, cwd: string, cmd: string, args: string[]) : Promise<number> {
  return new Promise((resolve, reject) => {
    if (verbose) {
      logOut(logger, chalk.green(`Executing: ${cmd} ${args.join(' ')}`));
    }

    const child = spawn(cmd, args, {
      cwd: cwd,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => logger.out(chalk.grey(data.toString())));
    child.stderr.on('data', data => logger.err(chalk.red(data.toString())));

    child.on('error', err => {
      reject(err);
    });
    child.on('exit', code => {
      if (code !== 0) {
        reject(`Exited with code ${code}`);
      }
      resolve(code ? code : 0);
    });
  });
}

function executeSynchronous<T>(asyncFunc: () => Promise<T>) {
  series(
    [asyncFunc],
    (error, _) => {
      if (error) {
        throw error;
      }
    });
}

function lowerCaseCompare(a: string, b: string) {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower === bLower) {
    return 0;
  }

  return aLower < bLower ? -1 : 1;
}

function logOut(logger: ILogger, line: string) {
  logger.out(`${line}\n`);
}

function logErr(logger: ILogger, line: string) {
  logger.err(`${line}\n`);
}

async function getLogger(logFilePath: string): Promise<ILogger> {
  await rm(logFilePath, { force: true });
  const logFileStream = createWriteStream(logFilePath, { flags: 'a' });

  return {
    out: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
    err: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
  };
}

async function buildTypeIndex(logger: ILogger, baseDir: string) {
  const indexContent = await buildIndex(logger, baseDir);

  await writeFile(
    `${baseDir}/index.json`,
    JSON.stringify(indexContent, null, 0));

  await writeFile(
    `${baseDir}/index.md`,
    generateIndexMarkdown(indexContent));
}

interface TypeIndex {
  Types: Dictionary<TypeIndexEntry>;
}

interface TypeIndexEntry {
  RelativePath: string;
  Index: number;
}

function generateIndexMarkdown(index: TypeIndex) {
  let markdown = '# Bicep Types\n';

  const byProvider = groupBy(keys(index.Types), x => x.split('/')[0].toLowerCase());
  for (const namespace of sortBy(keys(byProvider), x => x.toLowerCase())) {
    markdown += `## ${namespace}\n`;

    const byResourceType = groupBy(byProvider[namespace], x => x.split('@')[0].toLowerCase());
    for (const resourceType of sortBy(keys(byResourceType), x => x.toLowerCase())) {
      markdown += `### ${resourceType}\n`;

      for (const typeString of sortBy(byResourceType[resourceType], x => x.toLowerCase())) {
        const version = typeString.split('@')[1];
        const jsonPath = index.Types[typeString].RelativePath;
        const anchor = `resource-${typeString.replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`

        markdown += `* [${version}](${path.dirname(jsonPath)}/types.md#${anchor})\n`;
      }

      markdown += '\n';
    }
  }

  return markdown;
}

async function buildIndex(logger: ILogger, baseDir: string): Promise<TypeIndex> {
  const typeFiles = await findRecursive(baseDir, filePath => {
    return path.basename(filePath) === 'types.json';
  });
  
  const resourceTypes = new Set<string>();
  const typeDictionary: Dictionary<TypeIndexEntry> = {};

  // Use a consistent sort order so that file system differences don't generate changes
  for (const typeFilePath of orderBy(typeFiles, f => f.toLowerCase(), 'asc')) {
    const content = await readFile(typeFilePath, { encoding: 'utf8' });

    const types = JSON.parse(content) as any[];
    for (const type of types) {
      const resource = type[TypeBaseKind.ResourceType];
      if (!resource) {
        continue;
      }

      if (resourceTypes.has(resource.Name.toLowerCase())) {
        logger.out(`WARNING: Found duplicate type \"${resource.Name}\"\n`);
        continue;
      }
      resourceTypes.add(resource.Name.toLowerCase());

      typeDictionary[resource.Name] = {
        RelativePath: path.relative(baseDir, typeFilePath),
        Index: types.indexOf(type),
      };
    }
  }

  return {
    Types: typeDictionary,
  }
}