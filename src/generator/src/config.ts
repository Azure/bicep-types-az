// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

interface GeneratorConfig {
  /**
   * When true, the generator invokes only the TypeSpec emitter for a given base path. Existing
   * AutoRest output is retained as a fallback for types TypeSpec does not emit.
   */
  useTypeSpec: Record<string, boolean>;
}

const config: GeneratorConfig = {
  useTypeSpec: {
    dns: true,
    'cosmos-db': true,
  }
}

export function isTypeSpecEnabled(basePath: string): boolean {
  const firstBasePath = basePath.split('/')[0].toLowerCase();
  return config.useTypeSpec[firstBasePath] ?? false;
}