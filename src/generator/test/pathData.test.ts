// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { mkdir, mkdtemp, rm, writeFile } from 'fs/promises';
import { getPathData } from '../src/pathData';

describe('getPathData', () => {
  let inputBaseDir: string;
  let specsPath: string;
  let tmpOutputPath: string;
  let outputBaseDir: string;

  beforeEach(async () => {
    inputBaseDir = await mkdtemp(path.join(os.tmpdir(), 'path-data-test-'));
    specsPath = path.join(inputBaseDir, 'specification');
    tmpOutputPath = path.join(inputBaseDir, 'tmp');
    outputBaseDir = path.join(inputBaseDir, 'output');
    await mkdir(specsPath, { recursive: true });
  });

  afterEach(async () => {
    await rm(inputBaseDir, { recursive: true, force: true });
  });

  it('returns one TypeSpec entry per config and ignores readmes for enabled base paths', async () => {
    const firstConfig = await createTypeSpecProject('dns/resource-manager/Microsoft.Network/Dns');
    const secondConfig = await createTypeSpecProject('dns/resource-manager/Microsoft.Network/PrivateDns');
    await createFile('dns/resource-manager/readme.md');
    await createFile('dns/resource-manager/Orphan/tspconfig.yaml');

    const result = await getPathData(specsPath, undefined, inputBaseDir, tmpOutputPath, outputBaseDir);

    expect(result).toEqual([
      {
        kind: 'typespec',
        typeSpecConfigPath: firstConfig,
        relativeSourcePath: path.relative(inputBaseDir, firstConfig),
        tmpOutputDir: `${tmpOutputPath}/dns_0`,
        outputDir: `${outputBaseDir}/_tsp/dns`,
      },
      {
        kind: 'typespec',
        typeSpecConfigPath: secondConfig,
        relativeSourcePath: path.relative(inputBaseDir, secondConfig),
        tmpOutputDir: `${tmpOutputPath}/dns_1`,
        outputDir: `${outputBaseDir}/_tsp/dns`,
      },
    ]);
  });

  it('returns resource-manager readmes with deterministic suffixes for AutoRest base paths', async () => {
    const firstReadme = await createFile('compute/resource-manager/readme.md');
    const secondReadme = await createFile('compute/secondary/resource-manager/readme.md');
    await createTypeSpecProject('compute/resource-manager/Microsoft.Compute');

    const result = await getPathData(specsPath, undefined, inputBaseDir, tmpOutputPath, outputBaseDir);

    expect(result.map(entry => entry.kind)).toEqual(['autorest', 'autorest']);
    expect(result.map(entry => entry.relativeSourcePath)).toEqual([
      path.relative(inputBaseDir, firstReadme),
      path.relative(inputBaseDir, secondReadme),
    ]);
    expect(result.map(entry => entry.outputDir)).toEqual([
      `${outputBaseDir}/compute_0`,
      `${outputBaseDir}/compute_1`,
    ]);
  });

  it('filters base paths case-insensitively and rejects an unmatched prefix', async () => {
    await createTypeSpecProject('dns/resource-manager/Microsoft.Network/Dns');
    await createFile('compute/resource-manager/readme.md');

    const result = await getPathData(specsPath, 'DNS', inputBaseDir, tmpOutputPath, outputBaseDir);

    expect(result).toHaveLength(1);
    expect(result[0].kind).toBe('typespec');
    await expect(getPathData(specsPath, 'missing', inputBaseDir, tmpOutputPath, outputBaseDir))
      .rejects.toBe(`Unable to find specs in folder ${inputBaseDir}`);
  });

  async function createTypeSpecProject(relativeDir: string): Promise<string> {
    const configPath = await createFile(`${relativeDir}/tspconfig.yaml`);
    await createFile(`${relativeDir}/main.tsp`);
    return configPath;
  }

  async function createFile(relativePath: string): Promise<string> {
    const filePath = path.join(specsPath, relativePath);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, '');
    return filePath;
  }
});
