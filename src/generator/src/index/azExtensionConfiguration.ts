// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { mkdir, writeFile } from 'fs/promises';
import {
  CrossFileTypeReference,
  ObjectTypePropertyFlags,
  TypeFactory,
  TypeFile,
  writeTypesJson,
} from 'bicep-types';

export async function addAzExtensionConfigurationType(
  baseDir: string,
  resourceMap: Record<string, CrossFileTypeReference>): Promise<{ configurationType: CrossFileTypeReference; typeFile: TypeFile }> {
  const providerNamespaces = getProviderNamespaces(resourceMap);
  const extensionTypesRelativePath = 'extensions/az/types.json';
  const extensionTypesPath = path.join(baseDir, extensionTypesRelativePath);
  const extensionTypes = createAzExtensionConfigurationTypes(providerNamespaces);

  await mkdir(path.dirname(extensionTypesPath), { recursive: true });
  await writeFile(extensionTypesPath, writeTypesJson(extensionTypes.types));

  return {
    configurationType: new CrossFileTypeReference(extensionTypesRelativePath, extensionTypes.configurationTypeIndex),
    typeFile: {
      relativePath: extensionTypesRelativePath,
      types: extensionTypes.types,
    },
  };
}

function getProviderNamespaces(resourceMap: Record<string, CrossFileTypeReference>): string[] {
  const providers = new Map<string, string>();

  for (const resourceKey of Object.keys(resourceMap)) {
    const provider = resourceKey.split('/')[0];
    const normalizedProvider = provider.toLowerCase();
    const existingProvider = providers.get(normalizedProvider);

    // Remove duplicates ignoring case while keeping a deterministic canonical value.
    if (!existingProvider || provider < existingProvider) {
      providers.set(normalizedProvider, provider);
    }
  }

  return Array.from(providers.values()).sort();
}

function createAzExtensionConfigurationTypes(providerNamespaces: string[]) {
  const factory = new TypeFactory();
  const providerLiteralTypes = providerNamespaces.map(provider => factory.addStringLiteralType(provider));
  const providerValueType = providerLiteralTypes.length > 0
    ? factory.addUnionType(providerLiteralTypes)
    : factory.addStringType();
  const providersArrayType = factory.addArrayType(providerValueType);
  const configurationType = factory.addObjectType('configuration', {
    providers: {
      type: providersArrayType,
      flags: ObjectTypePropertyFlags.None,
      description: 'The Azure provider namespaces to register for the az extension.',
    },
  });

  return {
    types: factory.types,
    configurationTypeIndex: configurationType.index,
  };
}
