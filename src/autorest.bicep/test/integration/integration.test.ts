// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { rm } from 'fs/promises';
import { compare } from 'dir-compare';
import { defaultLogger, generateSchema, isBaselineRecordEnabled } from './utils';
import { describe, it, expect, jest } from '@jest/globals';

describe('integration tests', () => {
  // add any new spec paths under ./specs to this list
  const specs = [
    `basic`
  ]

  // bump timeout - autorest can take a while to run
  jest.setTimeout(60000);

  const outputBaseDir = `${__dirname}/generated`;

  for (const spec of specs) {
    it(spec, async () => {
      const readmePath = path.join(__dirname, `specs/${spec}/resource-manager/README.md`);
      const outputDir = `${outputBaseDir}/${spec}`;

      if (isBaselineRecordEnabled()) {
        await rm(outputDir, { recursive: true, force: true, });
        await generateSchema(defaultLogger, readmePath, outputDir, true, false, false);
      } else {
        const stagingOutputDir = `${__dirname}/temp/${spec}`;
        await rm(stagingOutputDir, { recursive: true, force: true, });
  
        await generateSchema(defaultLogger, readmePath, stagingOutputDir, true, false, false);
  
        const compareResult = await compare(stagingOutputDir, outputDir, { compareContent: true });

        // Assert that the generated files match the baseline files which have been checked in.
        // Set 'record' to true to run the tests in record mode and overwrite baselines.
        expect(compareResult.differences).toBe(0);
      }
    });
  }
});