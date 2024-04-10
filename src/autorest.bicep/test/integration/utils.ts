// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { createWriteStream } from 'fs';
import { readdir, stat, mkdir, rm, copyFile } from 'fs/promises';
import { spawn } from 'child_process';
import colors from 'colors';

export const extensionDir = path.resolve(`${__dirname}/../../`);

export interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

export const defaultLogger: ILogger = {
  out: data => process.stdout.write(data),
  err: data => process.stderr.write(data),
}

export async function copyRecursive(sourceBasePath: string, destinationBasePath: string): Promise<void> {
  for (const filePath of await findRecursive(sourceBasePath, () => true)) {
    const destinationPath = path.join(destinationBasePath, path.relative(sourceBasePath, filePath));

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await copyFile(filePath, destinationPath);
  }
}

export async function findRecursive(basePath: string, filter: (name: string) => boolean): Promise<string[]> {
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

export function executeCmd(logger: ILogger, verbose: boolean, cwd: string, cmd: string, args: string[]) : Promise<void> {
  return new Promise((resolve, reject) => {
    if (verbose) {
      logOut(logger, colors.green(`Executing: ${cmd} ${args.join(' ')}`));
    }

    const child = spawn(cmd, args, {
      cwd: cwd,
      windowsHide: true,
      shell: true,
    });

    child.stdout.on('data', data => logger.out(colors.grey(data.toString())));
    child.stderr.on('data', data => {
      const message = data.toString();
      logger.err(colors.red(message));
      if (message.indexOf('FATAL ERROR') > -1 && message.indexOf('Allocation failed - JavaScript heap out of memory') > -1) {
        reject('Child process has run out of memory');
      }
    });

    child.on('error', err => {
      reject(err);
    });
    child.on('exit', code => {
      if (code !== 0) {
        reject(`Exited with code ${code}`);
      } else {
        resolve();
      }
    });
  });
}

export function lowerCaseCompare(a: string, b: string) {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  if (aLower === bLower) {
    return 0;
  }

  return aLower < bLower ? -1 : 1;
}

export function logOut(logger: ILogger, line: string) {
  logger.out(`${line}\n`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logErr(logger: ILogger, line: any) {
  logger.err(`${line}\n`);
}

export async function getLogger(logFilePath: string): Promise<ILogger> {
  await rm(logFilePath, { force: true });
  const logFileStream = createWriteStream(logFilePath, { flags: 'a' });

  return {
    out: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(colors.stripColors(data));
    },
    err: (data: string) => {
      process.stdout.write(data);
      logFileStream.write(colors.stripColors(data));
    },
  };
}

export async function runAutorest(logger: ILogger, readme: string, outputBaseDir: string, armSchema: boolean, verbose: boolean, waitForDebugger: boolean) {
  let autoRestParams = [
    `--use=@autorest/modelerfour`,
    `--use=${extensionDir}`,
    '--bicep',
    `--output-folder=${outputBaseDir}`,
    `--multiapi`,
    '--title=none',
    // This is necessary to avoid failures such as "ERROR: Semantic violation: Discriminator must be a required property." blocking type generation.
    // In an ideal world, we'd raise issues in https://github.com/Azure/azure-rest-api-specs and force RP teams to fix them, but this isn't very practical
    // as new validations are added continuously, and there's often quite a lag before teams will fix them - we don't want to be blocked by this in generating types. 
    `--skip-semantics-validation`,
    readme,
  ];

  if (armSchema) {
    autoRestParams = autoRestParams.concat([
      `--arm-schema=true`,
    ]);
  }

  if (verbose) {
    autoRestParams = autoRestParams.concat([
      `--debug`,
      `--verbose`,
    ]);
  }

  if (waitForDebugger) {
    autoRestParams = autoRestParams.concat([
      `--bicep.debugger`,
    ]);
  }

  const autorestBinary = os.platform() === 'win32' ? 'autorest.cmd' : 'autorest';
  return await executeCmd(logger, verbose, __dirname, autorestBinary, autoRestParams);
}

export function isBaselineRecordEnabled() {
  // set to true to overwrite baselines
  return process.env['BASELINE_RECORD']?.toLowerCase() === 'true';
}