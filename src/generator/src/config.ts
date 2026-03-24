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
}

export function getConfig(basePath: string): GeneratorConfig {
  return config[basePath.toLowerCase()] || defaultConfig;
}