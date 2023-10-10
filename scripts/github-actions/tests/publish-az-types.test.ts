// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { writeFileSync, readFileSync, unlinkSync, mkdirSync } from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { expect } from '@jest/globals';
import * as core from '@actions/core';

import { defaultLogger, executeCmd } from './utils/common';
import { invokingBicepCommand } from "./utils/command";
import { BicepRegistryReferenceBuilder } from "./utils/br";
import publishTypeProviderPackage from '../publish-az-types.js';


function mockErrorHandler(error: string | Error) {
  if (error instanceof Error) {
    defaultLogger.err(error.message + '\n');
  } else {
    defaultLogger.err(error + '\n');
  }
}

jest.mock('@actions/core', () => ({
  info: jest.fn((msg: string) => defaultLogger.out(msg + '\n')),
  error: jest.fn(mockErrorHandler),
  setFailed: jest.fn(mockErrorHandler),
}));

const mockedCore = core as jest.Mocked<typeof core>;

describe('e2e tests', () => {
  // Make sure the dependencies are installed
  beforeAll(() => {
    const dependencies = [
      { command: 'oras', args: ['version'] },
      { command: 'az', args: ['bicep', 'version'] },
    ];

    dependencies.forEach(({ command, args }) => {
      const child = spawnSync(command, args);
      expect(child.status).toBe(0);
    });
  });


  const timeoutInMilliseconds = 10 * 1000; // 10 seconds
  describe('A package published using publishTypeProviderPackage', () => {
    const registryUri = "biceptestdf.azurecr.io";
    const builder = new BicepRegistryReferenceBuilder(
      registryUri,
      "types_package_e2e_test"
    );
    const tag = builder.getTag("0.0.0-test");
    const ociReference = `${registryUri}/bicep/providers/az:${tag}`;

    beforeAll(async () => {
      await publishTypeProviderPackage({
        require: require,
        core: mockedCore,
        typesDir: path.join(__dirname, "./../../../generated"),
        registryFqdn: registryUri,
        tags: tag,
      });
    }, timeoutInMilliseconds);

    it('should conform to the manifest specs', async () => {
      // Fetch the manifest (assuming a mechanism to do this, e.g., using a tool or API)
      const manifestStr = await getManifestFromLocalRegistry(ociReference);
      const manifestJson = JSON.parse(manifestStr);
      expect(manifestJson.schemaVersion).toEqual(2);
      expect(manifestJson.mediaType).toEqual('application/vnd.oci.image.manifest.v1+json');
      expect(manifestJson.artifactType).toEqual('application/vnd.ms.bicep.provider.artifact');
      expect(manifestJson.config.mediaType).toEqual('application/vnd.ms.bicep.provider.config.v1+json');
      expect(manifestJson.config.size).toEqual(2);
      expect(manifestJson.layers[0].mediaType).toEqual('application/vnd.ms.bicep.provider.layer.v1.tar+gzip');
    });

    it("should be used to build a bicep file successfully", () => {
      // Make sure the tmp directory exists
      const tmpDir = path.join(__dirname, "tmp");
      mkdirSync(tmpDir, { recursive: true });

      const bicepFile = `
    import 'az@${tag}' as az
    param location string = 'eastus'

    resource sa 'Microsoft.Storage/storageAccounts@2023-01-01' = {
      name: 'test'
      location: location
      kind: 'StorageV2'
      sku: {
        name: 'Standard_LRS'
      }
    }`;
      writeFileSync(path.join(__dirname, "tmp", "main.bicep"), bicepFile);
      const bicepConfig = `
    {
      "experimentalFeaturesEnabled": {
          "extensibility": true,
          "dynamicTypeLoading": true
      }
    }`;
      writeFileSync(path.join(__dirname, "tmp", "bicepconfig.json"), bicepConfig);

      const bicepFilePath = path.join(__dirname, "tmp", "main.bicep");
      invokingBicepCommand("build", bicepFilePath)
        .withEnvironmentOverrides({
          "__EXPERIMENTAL_BICEP_REGISTRY_FQDN": registryUri,
        })
        .shouldSucceed()
    });
  });
});

async function getManifestFromLocalRegistry(artifactRef: any): Promise<string> {
  // Pull the file using ORAS.
  const outputPath = `${__dirname}/gotManifest.txt`;
  let orasParams = [
    "manifest",
    "fetch",
    artifactRef,
    "--output", outputPath,
    "--pretty"
  ];
  await executeCmd(defaultLogger, true, __dirname, "oras", orasParams);
  const fileContents = readFileSync(outputPath, "utf8");
  try {
    unlinkSync(`${__dirname}/gotManifest.txt`);
  } catch (e: any) {
    defaultLogger.err(`Failed to delete manifest file: ${e.message}`);
  }
  return fileContents;
};
