// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { readFile, readdir, stat, rm, mkdir, writeFile } from "fs/promises";
import path from "path";
import { compile, NodeHost } from "@typespec/compiler";

export const extensionDir = path.resolve(`${__dirname}/../../`);

export interface ILogger {
  out: (data: string) => void;
  err: (data: string) => void;
}

export const defaultLogger: ILogger = {
  out: (data) => process.stdout.write(data),
  err: (data) => process.stderr.write(data),
};

/**
 * Recursively find files matching a filter function.
 */
export async function findRecursive(
  basePath: string,
  filter: (name: string) => boolean,
): Promise<string[]> {
  let results: string[] = [];

  for (const subPathName of await readdir(basePath)) {
    const subPath = path.resolve(`${basePath}/${subPathName}`);
    const fileStat = await stat(subPath);

    if (fileStat.isDirectory()) {
      results = results.concat(await findRecursive(subPath, filter));
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

/**
 * Compare two directories recursively for content equality.
 * Returns the number of differences found.
 */
export async function compareDirectories(
  dir1: string,
  dir2: string,
): Promise<{ differences: number; details: string[] }> {
  const details: string[] = [];
  let differences = 0;

  async function getRelativeFiles(dir: string): Promise<string[]> {
    try {
      const files = await findRecursive(dir, () => true);
      return files.map((f) => path.relative(dir, f));
    } catch {
      return [];
    }
  }

  const files1 = new Set(await getRelativeFiles(dir1));
  const files2 = new Set(await getRelativeFiles(dir2));

  // Files only in dir1
  for (const f of files1) {
    if (!files2.has(f)) {
      differences++;
      details.push(`Only in ${dir1}: ${f}`);
    }
  }

  // Files only in dir2
  for (const f of files2) {
    if (!files1.has(f)) {
      differences++;
      details.push(`Only in ${dir2}: ${f}`);
    }
  }

  // Compare content of shared files
  for (const f of files1) {
    if (files2.has(f)) {
      const content1 = await readFile(path.join(dir1, f), "utf-8");
      const content2 = await readFile(path.join(dir2, f), "utf-8");
      if (content1 !== content2) {
        differences++;
        details.push(`Content differs: ${f}`);
      }
    }
  }

  return { differences, details };
}

/**
 * Compile a TypeSpec file using the emitter and write output to a directory.
 *
 * This is the TypeSpec equivalent of autorest.bicep's `runAutorest` function.
 */
export async function runTypeSpecEmitter(
  logger: ILogger,
  tspMainFile: string,
  outputDir: string,
  armSchema: boolean = false,
): Promise<void> {
  const emitterPath = extensionDir;

  logger.out(`Compiling ${tspMainFile} -> ${outputDir}\n`);

  await mkdir(outputDir, { recursive: true });

  const program = await compile(NodeHost, tspMainFile, {
    noEmit: false,
    emit: [emitterPath],
    options: {
      [emitterPath]: {
        "arm-schema": armSchema,
      },
    },
    outputDir,
  });

  if (program.hasError()) {
    const diagnostics = program.diagnostics
      .filter((d) => d.severity === "error")
      .map(
        (d) => {
          const loc = d.target && "file" in d.target ? ` at ${(d.target as any).file?.path}` : "";
          return `${d.code}: ${typeof d.message === "string" ? d.message : d.message}${loc}`;
        },
      )
      .join("\n");
    throw new Error(`TypeSpec compilation failed:\n${diagnostics}`);
  }

  // Log warnings
  for (const diag of program.diagnostics) {
    if (diag.severity === "warning") {
      logger.err(
        `Warning: ${diag.code}: ${typeof diag.message === "string" ? diag.message : diag.message}\n`,
      );
    }
  }
}

/**
 * Check if baseline recording mode is enabled.
 */
export function isBaselineRecordEnabled(): boolean {
  return process.env["BASELINE_RECORD"]?.toLowerCase() === "true";
}
