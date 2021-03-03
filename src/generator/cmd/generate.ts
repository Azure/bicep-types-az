import os from 'os';
import path from 'path';
import { createWriteStream, existsSync } from 'fs';
import { readdir, stat, rmdir, mkdir, rm } from 'fs/promises';
import { series } from 'async';
import { spawn } from 'child_process';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import yargs from 'yargs';

interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

const defaultLogger: ILogger = {
  out: data => process.stdout.write(data),
  err: data => process.stderr.write(data),
}

const extensionDir = path.resolve(`${__dirname}/../../autorest.bicep/`);
const indexBuilderDll = path.resolve(`${__dirname}/../src/Bicep.TypeGen.Index/bin/net5.0/Bicep.TypeGen.Index.dll`);
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
const defaultOutDir = path.resolve(`${__dirname}/../../../generated`);

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

  if (!existsSync(indexBuilderDll)) {
    throw `Unable to find ${indexBuilderDll}. Did you forget to run 'dotnet build'?`;
  }

  if (!existsSync(`${extensionDir}/dist`)) {
    throw `Unable to find ${extensionDir}/dist. Did you forget to run 'npm run build'?`;
  }

  // find all readme paths in the azure-rest-api-specs repo
  const specsPath = path.join(inputBaseDir, 'specification');
  const readmePaths = await findReadmePaths(specsPath);
  if (readmePaths.length === 0) {
    throw `Unable to find rest-api-specs in folder ${inputBaseDir}`;
  }

  // use consistent sorting to make log changes easier to review
  for (const readmePath of readmePaths.sort(lowerCaseCompare)) {
    const basePath = path.relative(specsPath, readmePath).split(path.sep)[0].toLowerCase();
    const outputDir = `${outputBaseDir}/${basePath}`;

    if (singlePath && lowerCaseCompare(singlePath, basePath) !== 0) {
      continue;
    }

    // remove all previously-generated files
    await rmdir(outputDir, { recursive: true });
    await mkdir(outputDir, { recursive: true });
    const logger = await getLogger(`${outputDir}/log.out`);

    try {
      await generateSchema(logger, readmePath, outputDir, verbose, waitForDebugger);
    } catch (e) {
      logErr(logger, e);
    }
  }

  // build the type index
  await executeCmd(
    defaultLogger,
    __dirname,
    'dotnet',
    [indexBuilderDll, outputBaseDir]);
});

async function generateSchema(logger: ILogger, readme: string, outputBaseDir: string, verbose: boolean, waitForDebugger: boolean) {
  let autoRestParams = [
    `--use=${extensionDir}`,
    '--azureresourceschema',
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
      `--azureresourceschema.debugger`,
    ]);
  }

  return await executeCmd(logger, __dirname, autorestBinary, autoRestParams);
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

function executeCmd(logger: ILogger, cwd: string, cmd: string, args: string[]) : Promise<number> {
  return new Promise((resolve, reject) => {
    logOut(logger, '');
    logOut(logger, chalk.green(`Executing: ${cmd} ${args.join(' ')}`));

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