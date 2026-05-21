// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface GeneratorConfig {
  additionalFiles: string[];
}

const defaultConfig: GeneratorConfig = {
  additionalFiles: [],
}

const config: Record<string, GeneratorConfig> = {
}

export function getConfig(basePath: string): GeneratorConfig {
  return config[basePath.toLowerCase()] || defaultConfig;
}