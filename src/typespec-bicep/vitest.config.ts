// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    testTimeout: 60000,
  },
});
