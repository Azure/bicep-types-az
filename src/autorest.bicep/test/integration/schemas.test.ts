// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { mkdir, writeFile } from 'fs/promises';
import { extensionDir, isBaselineRecordEnabled } from './utils';
import { describe, it, expect, jest } from '@jest/globals';
import { readFile } from 'fs/promises';
import { DiffStringOptions, diffString } from 'json-diff';
import { existsSync } from 'fs';

describe('schema comparisons', () => {
  // bump timeout - autorest can take a while to run
  jest.setTimeout(60000);

  const generatedBasePath = path.resolve(extensionDir, `../../generated`);

  const tests = [
    { originalPath: '2022-05-01/Microsoft.Network.FrontDoor.json', basePath: 'frontdoor', },
    { originalPath: '2022-11-01/Microsoft.Compute.json', basePath: 'compute', },
    { originalPath: '2022-11-01/Microsoft.KeyVault.json', basePath: 'keyvault', },
    { originalPath: '2022-09-01/Microsoft.Storage.json', basePath: 'storage', },
    { originalPath: '2023-01-31/Microsoft.ManagedIdentity.json', basePath: 'msi', },
    { originalPath: '2018-06-01/Microsoft.DataFactory.json', basePath: 'datafactory', },
    { originalPath: '2016-06-01/Microsoft.Logic.json', basePath: 'logic', },
    { originalPath: '2022-08-01-preview/Microsoft.Sql.json', basePath: 'sql', },
    { originalPath: '2023-01-01/Microsoft.Insights.json', basePath: 'monitor', },
    { originalPath: '2023-01-01-preview/Microsoft.ContainerRegistry.json', basePath: 'containerregistry', },
    { originalPath: '2022-08-08/Microsoft.Automation.json', basePath: 'automation', },
    { originalPath: '2022-10-01-preview/Microsoft.ServiceBus.json', basePath: 'servicebus', },
    { originalPath: '2021-12-01-preview/Microsoft.OperationalInsights.json', basePath: 'operationalinsights', },
    { originalPath: '2022-09-30-preview/Microsoft.RecoveryServices.json', basePath: 'recoveryservices', },
    { originalPath: '2022-11-15/Microsoft.DocumentDB.json', basePath: 'cosmos-db', },
    { originalPath: '2023-02-01-preview/Microsoft.MachineLearningServices.json', basePath: 'machinelearningservices', },
    { originalPath: '2023-01-01/Microsoft.Media.json', basePath: 'mediaservices', },
    { originalPath: '2022-10-01-preview/Microsoft.EventHub.json', basePath: 'eventhub', },
    { originalPath: '2021-06-01/Microsoft.Synapse.json', basePath: 'synapse', },
    { originalPath: '2022-01-31-preview/Microsoft.ManagedIdentity.json', basePath: 'msi', },
    { originalPath: '2021-06-01/Microsoft.Cdn.json', basePath: 'cdn', }
  ];

  const diffDir = `${__dirname}/schemas/diffs`;
  const diffSourceDir = `${__dirname}/schemas/diffs-source`;
  for (const { originalPath, basePath } of tests) {
    it(originalPath, async () => {
      const originalSchemaPath = path.join(diffSourceDir, originalPath);
      const original = JSON.parse(await readFile(originalSchemaPath, { encoding: 'utf-8' }));

      const namespace = original['title'].toLowerCase();
      const apiVersion = originalPath.split('/')[0].toLowerCase();
  
      const generatedSchemaPath = path.join(generatedBasePath, basePath, namespace, apiVersion, 'schema.json');
      const generated = JSON.parse(await readFile(generatedSchemaPath, { encoding: 'utf-8' }));

      const diffOptions: DiffStringOptions = { sort: true, color: false, excludeKeys: ['description'] };
      const diff = diffString(original, generated, diffOptions);
      const diffFile = `${diffDir}/${namespace}_${apiVersion}_diff.txt`;

      const savedValue = existsSync(diffFile) ? await readFile(diffFile, { encoding: 'utf-8' }) : null;
      if (isBaselineRecordEnabled()) {
        await mkdir(diffDir, { recursive: true });
        await writeFile(`${diffDir}/${namespace}_${apiVersion}_diff.txt`, diff);
      }

      expect(diff).toBe(savedValue);
    });
  }
});