// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { getPathData, PathData } from '../src/pathData';
import { executeCmd, executeSynchronous, defaultLogger, replaceRecursive } from '../src/utils';
import { buildIndex } from '@azure/bicep-types';
import { addAzExtensionConfigurationType } from '../src/index/azExtensionConfiguration';

jest.mock('yargs', () => ({
  __esModule: true,
  default: () => {
    const parser = {
      strict: () => parser,
      option: () => parser,
      parseAsync: async () => ({
        'specs-dir': 'specs',
        'out-dir': 'output',
        'path-prefix': 'dns',
        'logging-level': 'verbose',
        'wait-for-debugger': false,
      }),
    };
    return parser;
  },
}));
jest.mock('yargs/helpers', () => ({ hideBin: () => [] }));
jest.mock('fs', () => ({ existsSync: () => true }));
jest.mock('fs/promises', () => ({
  mkdir: jest.fn(),
  rm: jest.fn(),
  writeFile: jest.fn(),
  readFile: jest.fn().mockResolvedValue(''),
}));
jest.mock('../src/pathData');
jest.mock('../src/utils', () => ({
  executeSynchronous: jest.fn(),
  executeCmd: jest.fn(),
  defaultLogger: { out: jest.fn(), err: jest.fn() },
  getLogger: jest.fn().mockResolvedValue({ out: jest.fn(), err: jest.fn() }),
  logErr: jest.fn(),
  logOut: jest.fn(),
  findRecursive: jest.fn().mockResolvedValue([]),
  replaceRecursive: jest.fn(),
}));
jest.mock('@azure/bicep-types');
jest.mock('../src/index/azExtensionConfiguration');

describe('TypeSpec dependency installation', () => {
  let generate: () => Promise<unknown>;
  const specsDir = path.resolve('specs');
  const pnpmBinary = os.platform() === 'win32' ? 'pnpm.cmd' : 'pnpm';
  const tspBinary = os.platform() === 'win32' ? 'tsp.cmd' : 'tsp';

  beforeAll(() => {
    jest.mocked(executeSynchronous).mockImplementation(callback => {
      generate = callback;
    });
    // Loading the command registers its entry point without running the CLI.
    require('../src/cmd/generate');
  });

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mocked(executeCmd).mockReset().mockResolvedValue();
    jest.mocked(buildIndex).mockReturnValue({ resources: {}, resourceFunctions: {}, namespaceFunctions: [] });
    jest.mocked(addAzExtensionConfigurationType).mockResolvedValue({
      configurationType: { relativePath: 'configuration.json', index: 0 },
      typeFile: { relativePath: 'configuration.json', types: [] },
    });
  });

  it('installs once at the specs root before compiling multiple projects', async () => {
    const projects = [typeSpecProject('Dns'), typeSpecProject('PrivateDns')];
    jest.mocked(getPathData).mockResolvedValue(projects);

    await generate();

    const calls = jest.mocked(executeCmd).mock.calls;
    expect(calls).toHaveLength(3);
    expect(calls[0]).toEqual([defaultLogger, true, specsDir, pnpmBinary, ['install']]);
    for (const [index, project] of projects.entries()) {
      expect(calls[index + 1]).toEqual([
        expect.anything(), true, path.dirname(project.typeSpecConfigPath), tspBinary,
        [
          'compile', path.dirname(project.typeSpecConfigPath),
          expect.stringContaining('--emit='),
          `--output-dir=${project.tmpOutputDir}`,
          '--option', `@azure-tools/typespec-bicep.emitter-output-dir=${project.tmpOutputDir}`,
        ],
      ]);
    }
    expect(replaceRecursive).toHaveBeenCalledTimes(2);
  });

  it('does not install dependencies for AutoRest-only generation', async () => {
    jest.mocked(getPathData).mockResolvedValue([{
      kind: 'autorest',
      readmePath: path.join(specsDir, 'specification', 'compute', 'readme.md'),
      bicepReadmePath: path.join(specsDir, 'specification', 'compute', 'readme.bicep.md'),
      relativeSourcePath: 'compute',
      tmpOutputDir: 'tmp-compute',
      outputDir: 'output-compute',
    }]);

    await generate();

    expect(executeCmd).toHaveBeenCalledTimes(2);
    for (const call of jest.mocked(executeCmd).mock.calls) {
      expect(call[3]).toBe(os.platform() === 'win32' ? 'autorest.cmd' : 'autorest');
    }
  });

  it('stops generation when workspace installation fails', async () => {
    jest.mocked(getPathData).mockResolvedValue([typeSpecProject('Dns')]);
    const error = new Error('pnpm install failed');
    jest.mocked(executeCmd).mockRejectedValueOnce(error);

    await expect(generate()).rejects.toBe(error);

    expect(executeCmd).toHaveBeenCalledTimes(1);
    expect(replaceRecursive).not.toHaveBeenCalled();
    expect(buildIndex).not.toHaveBeenCalled();
  });

  function typeSpecProject(name: string): PathData & { kind: 'typespec' } {
    return {
      kind: 'typespec',
      typeSpecConfigPath: path.join(specsDir, 'specification', 'dns', name, 'tspconfig.yaml'),
      relativeSourcePath: name,
      tmpOutputDir: `tmp-${name}`,
      outputDir: `output-${name}`,
    };
  }
});
