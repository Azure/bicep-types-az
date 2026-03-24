// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface GeneratorConfig {
  additionalFiles?: string[];
  /**
   * When true, the generator will additionally invoke the TypeSpec emitter
   * (typespec-bicep) for spec folders that contain TypeSpec definitions
   * (tspconfig.yaml + main.tsp). TypeSpec output is merged alongside
   * the AutoRest output.
   */
  useTypeSpec?: boolean;
}

const defaultConfig: GeneratorConfig = {};

const config: Record<string, GeneratorConfig> = {
  'keyvault': {
    additionalFiles: [
      'Microsoft.KeyVault/stable/2016-10-01/secrets.json',
      'Microsoft.KeyVault/stable/2018-02-14/secrets.json',
      'Microsoft.KeyVault/preview/2018-02-14-preview/secrets.json',
      'Microsoft.KeyVault/stable/2019-09-01/secrets.json',
    ],
  }
}

export function getConfig(basePath: string): GeneratorConfig {
  return config[basePath.toLowerCase()] || defaultConfig;
}