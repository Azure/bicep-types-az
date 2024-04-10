// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { rm } from 'fs/promises';
import { compare } from 'dir-compare';
import { defaultLogger, isBaselineRecordEnabled, runAutorest } from './utils';

const outputBaseDir = `${__dirname}/generated`;

// add any new spec paths under ./specs to this list
const specs = [
  `basic`
]

for (const armSchema of [false, true]) {
  describe(`integration tests (arm-schema: ${armSchema})`, () => {
    // bump timeout - autorest can take a while to run
    jest.setTimeout(60000);

    for (const spec of specs) {
      it(spec, async () => {
        const readmePath = path.join(__dirname, `specs/${spec}/resource-manager/README.md`);
        const childDir = armSchema ? 'arm-schema' : 'bicep';
        const outputDir = `${outputBaseDir}/${childDir}/${spec}`;
  
        if (isBaselineRecordEnabled()) {
          await rm(outputDir, { recursive: true, force: true, });
          await runAutorest(defaultLogger, readmePath, outputDir, armSchema, false, false);
        } else {
          const stagingOutputDir = `${__dirname}/temp/${spec}`;
          await rm(stagingOutputDir, { recursive: true, force: true, });
  
          await runAutorest(defaultLogger, readmePath, stagingOutputDir, armSchema, false, false);
  
          const compareResult = await compare(stagingOutputDir, outputDir, { compareContent: true });
  
          // Assert that the generated files match the baseline files which have been checked in.
          // Set 'record' to true to run the tests in record mode and overwrite baselines.
          expect(compareResult.differences).toBe(0);
        }
      });
    }
  });
}