// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import os from 'os';
import path from 'path';
import { mkdtemp, readFile, rm } from 'fs/promises';
import { CrossFileTypeReference, TypeBaseKind, ObjectType, StringLiteralType, readTypesJson } from 'bicep-types';
import { addAzExtensionConfigurationType } from '../../src/index/azExtensionConfiguration';

describe('addAzExtensionConfigurationType', () => {
  let tmpDir: string;

  beforeEach(async () => {
    tmpDir = await mkdtemp(path.join(os.tmpdir(), 'az-ext-test-'));
  });

  afterEach(async () => {
    await rm(tmpDir, { recursive: true, force: true });
  });

  it('writes extensions/az/types.json under baseDir', async () => {
    const resourceMap = buildResourceMap(['Microsoft.Storage/storageAccounts@2023-01-01']);

    await addAzExtensionConfigurationType(tmpDir, resourceMap);

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    expect(content).toBeTruthy();
  });

  it('returns a CrossFileTypeReference pointing at extensions/az/types.json', async () => {
    const resourceMap = buildResourceMap(['Microsoft.Storage/storageAccounts@2023-01-01']);

    const result = await addAzExtensionConfigurationType(tmpDir, resourceMap);

    expect(result.configurationType).toBeInstanceOf(CrossFileTypeReference);
    expect(result.configurationType.relativePath).toBe('extensions/az/types.json');
  });

  it('returns a TypeFile for extensions/az/types.json', async () => {
    const resourceMap = buildResourceMap(['Microsoft.Storage/storageAccounts@2023-01-01']);

    const result = await addAzExtensionConfigurationType(tmpDir, resourceMap);

    expect(result.typeFile.relativePath).toBe('extensions/az/types.json');
    expect(result.typeFile.types).toHaveLength(4);
  });

  it('extracts unique provider namespaces from the resource map', async () => {
    const resourceMap = buildResourceMap([
      'Microsoft.Storage/storageAccounts@2023-01-01',
      'Microsoft.Storage/blobServices@2023-01-01', // same provider, different type
      'Microsoft.Compute/virtualMachines@2023-03-01',
    ]);

    await addAzExtensionConfigurationType(tmpDir, resourceMap);

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    const types = readTypesJson(content);
    const stringLiterals = types
      .filter((t): t is StringLiteralType => t.type === TypeBaseKind.StringLiteralType)
      .map(t => t.value);

    expect(stringLiterals).toContain('Microsoft.Compute');
    expect(stringLiterals).toContain('Microsoft.Storage');
    expect(stringLiterals.filter(v => v === 'Microsoft.Storage')).toHaveLength(1);
  });

  it('deduplicates provider namespaces ignoring case and keeps the best canonical casing', async () => {
    const resourceMap = buildResourceMap([
      'microsoft.compute/virtualMachines@2023-03-01',
      'microsoft.Compute/virtualMachineScaleSets@2023-03-01',
      'Microsoft.Compute/disks@2023-03-01',
    ]);

    await addAzExtensionConfigurationType(tmpDir, resourceMap);

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    const types = readTypesJson(content);
    const stringLiterals = types
      .filter((t): t is StringLiteralType => t.type === TypeBaseKind.StringLiteralType)
      .map(t => t.value);

    expect(stringLiterals.filter(v => v.toLowerCase() === 'microsoft.compute')).toEqual(['Microsoft.Compute']);
  });

  it('sorts provider namespaces alphabetically', async () => {
    const resourceMap = buildResourceMap([
      'Microsoft.Storage/storageAccounts@2023-01-01',
      'Microsoft.Compute/virtualMachines@2023-03-01',
      'Microsoft.Authorization/roleAssignments@2022-01-01',
    ]);

    await addAzExtensionConfigurationType(tmpDir, resourceMap);

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    const types = readTypesJson(content);
    const stringLiterals = types
      .filter((t): t is StringLiteralType => t.type === TypeBaseKind.StringLiteralType)
      .map(t => t.value);

    expect(stringLiterals).toEqual([...stringLiterals].sort());
  });

  it('produces an ObjectType named "configuration" with a "providers" property', async () => {
    const resourceMap = buildResourceMap(['Microsoft.Storage/storageAccounts@2023-01-01']);

    await addAzExtensionConfigurationType(tmpDir, resourceMap);

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    const types = readTypesJson(content);
    const configObj = types.find(
      (t): t is ObjectType => t.type === TypeBaseKind.ObjectType && (t as ObjectType).name === 'configuration'
    );

    expect(configObj).toBeDefined();
    expect(configObj?.properties).toHaveProperty('providers');
  });

  it('handles an empty resource map by using a plain string type for providers', async () => {
    await addAzExtensionConfigurationType(tmpDir, {});

    const content = await readFile(path.join(tmpDir, 'extensions/az/types.json'), 'utf8');
    const types = readTypesJson(content);

    // With no providers there should be no StringLiteralType entries
    const stringLiterals = types.filter(t => t.type === TypeBaseKind.StringLiteralType);
    expect(stringLiterals).toHaveLength(0);

    // There should still be a configuration ObjectType
    const configObj = types.find(
      (t): t is ObjectType => t.type === TypeBaseKind.ObjectType && (t as ObjectType).name === 'configuration'
    );
    expect(configObj).toBeDefined();
  });
});

function buildResourceMap(resourceKeys: string[]): Record<string, CrossFileTypeReference> {
  return Object.fromEntries(
    resourceKeys.map(key => [key, new CrossFileTypeReference('dummy/types.json', 0)])
  );
}
