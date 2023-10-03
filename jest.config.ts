// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

module.exports = async () => {
  return {
    preset: 'ts-jest',
    verbose: true,
    testMatch: ["<rootDir>/scripts/github-actions/**/*.test.ts"],
  };
};
