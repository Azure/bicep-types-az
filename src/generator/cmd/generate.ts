import os from 'os';
import path from 'path';
import { createWriteStream, existsSync, rmSync } from 'fs';
import { readdir, stat, rmdir, mkdir } from 'fs/promises';
import { series } from 'async';
import { spawn } from 'child_process';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import yargs from 'yargs';

const args = yargs
  .option('specs-dir', { type: 'string', demandOption: true, desc: 'Path to the azure-rest-api-specs dir' })
  .option('out-dir', { type: 'string', demandOption: true, desc: 'Output path for generated files' })
  .option('log-file', { type: 'string', demandOption: true, desc: 'Output file for logging' })
  .option('verbose', { type: 'boolean', default: false, desc: 'Enable autorest verbose logging' })
  .option('wait-for-debugger', { type: 'boolean', default: false, desc: 'Wait for a C# debugger to be attached before running the Autorest extension' })
  .argv;

const extensionDir = path.resolve(`${__dirname}/../`);
const autorestDll = path.resolve(`${extensionDir}/src/Bicep.TypeGen.Autorest/bin/net5.0/Bicep.TypeGen.Autorest.dll`);
const indexBuilderDll = path.resolve(`${extensionDir}/src/Bicep.TypeGen.Index/bin/net5.0/Bicep.TypeGen.Index.dll`);
const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
const { writeOut, writeErr } = getLoggers(args['log-file']);

executeSynchronous(async () => {
  const inputBaseDir = path.resolve(args['specs-dir']);
  const outputBaseDir = path.resolve(args['out-dir']);
  const verbose = args['verbose'];
  const waitForDebugger = args['wait-for-debugger'];

  if (!existsSync(autorestDll)) {
    throw `Unable to find ${autorestDll}. Did you forget to run dotnet build?`;
  }

  if (!existsSync(indexBuilderDll)) {
    throw `Unable to find ${indexBuilderDll}. Did you forget to run dotnet build?`;
  }

  // remove all previously-generated files
  await rmdir(outputBaseDir, { recursive: true });
  await mkdir(outputBaseDir);
 
  // find all readme paths in the azure-rest-api-specs repo
  const readmePaths = await findReadmePaths(inputBaseDir);
  if (readmePaths.length === 0) {
    throw `Unable to find rest-api-specs in folder ${inputBaseDir}`;
  }

  // use consistent sorting to make log changes easier to review
  for (const path of readmePaths.sort(lowerCaseCompare)) {
    try {
      await generateSchema(path, outputBaseDir, verbose, waitForDebugger);
    } catch (e) {
      writeOut(e);
    }
  }

  // build the type index
  await executeCmd(
    __dirname,
    'dotnet',
    [indexBuilderDll, outputBaseDir]);
});

async function generateSchema(readme: string, outputBaseDir: string, verbose: boolean, waitForDebugger: boolean) {
  const debug = false; // change to true for debugging
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
      `--azureresourceschema.debugger=true`,
    ]);
  }

  return await executeCmd(__dirname, autorestBinary, autoRestParams);
}

async function findReadmePaths(inputBaseDir: string) {
  const specsPath = path.join(inputBaseDir, 'specification');

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

function executeCmd(cwd: string, cmd: string, args: string[]) : Promise<number> {
  return new Promise((resolve, reject) => {
    writeOut('');
    writeOut(chalk.green(`Executing: ${cmd} ${args.join(' ')}`));

    const child = spawn(cmd, args, {
      cwd: cwd,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => writeOut(chalk.grey(data.toString())));
    child.stderr.on('data', data => writeErr(chalk.red(data.toString())));

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

function getLoggers(logFilePath: string): { writeOut: (data: string) => void, writeErr: (data: string) => void } {
  rmSync(logFilePath, { force: true });
  const logFileStream = createWriteStream(logFilePath, { flags: 'a' });

  return {
    writeOut: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
    writeErr: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(stripAnsi(data));
    },
  };
}