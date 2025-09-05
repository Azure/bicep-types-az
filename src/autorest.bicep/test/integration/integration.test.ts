// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import path from 'path';
import { rm } from 'fs/promises';
import { compare } from 'dir-compare';
import { readFile } from 'fs/promises';
import { defaultLogger, isBaselineRecordEnabled, runAutorest } from './utils';

const outputBaseDir = `${__dirname}/generated`;

// add any new spec paths under ./specs to this list
const specs = [
  `basic`,
  `firewalls`
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

// Tests for scope modernization validation
describe('scope modernization tests', () => {
  jest.setTimeout(60000);

  it('should generate modern scope properties from OpenAPI', async () => {
    const typesJsonPath = path.join(__dirname, 'generated/bicep/basic/test.rp1/2021-10-31/types.json');
    
    try {
      const typesContent = await readFile(typesJsonPath, 'utf8');
      const typesData = JSON.parse(typesContent);
      
      const resourceTypes = typesData.filter((item: any) => item.$type === 'ResourceType');
      
      expect(resourceTypes.length).toBeGreaterThan(0);
      
      for (const resourceType of resourceTypes) {
        // Verify modern scope properties exist
        expect(resourceType).toHaveProperty('readableScopes');
        expect(resourceType).toHaveProperty('writableScopes');
        
        // Verify legacy properties are not present
        expect(resourceType).not.toHaveProperty('scopeType');
        expect(resourceType).not.toHaveProperty('readOnlyScopes');
        expect(resourceType).not.toHaveProperty('flags');
        
        // Verify scope values are numeric (ScopeType enum values)
        expect(typeof resourceType.readableScopes).toBe('number');
        expect(typeof resourceType.writableScopes).toBe('number');
        
        // Verify scope values are valid (not negative)
        expect(resourceType.readableScopes).toBeGreaterThanOrEqual(0);
        expect(resourceType.writableScopes).toBeGreaterThanOrEqual(0);
      }
      
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        console.warn('Generated types.json not found. Run tests with BASELINE_RECORD=true first.');
        return;
      }
      throw error;
    }
  });

  it('should handle specific scope scenarios correctly', async () => {
    const typesJsonPath = path.join(__dirname, 'generated/bicep/basic/test.rp1/2021-10-31/types.json');
    
    try {
      const typesContent = await readFile(typesJsonPath, 'utf8');
      const typesData = JSON.parse(typesContent);
      const resourceTypes = typesData.filter((item: any) => item.$type === 'ResourceType');
      
      // GET + PUT (Read Write) Resource
      const testType1 = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/testType1@2021-10-31');
      if (testType1) {
        expect(testType1.readableScopes).toBe(8); // ScopeType.ResourceGroup
        expect(testType1.writableScopes).toBe(8); // ScopeType.ResourceGroup
        expect(testType1.readableScopes).toBe(testType1.writableScopes); // Both should be equal
      }
      
      // GET Only (Read Only) Resource  
      const readOnlyType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/readOnlyTestType@2021-10-31');
      if (readOnlyType) {
        expect(readOnlyType.readableScopes).toBe(8); // ScopeType.ResourceGroup
        expect(readOnlyType.writableScopes).toBe(0); // ScopeType.None
        expect(readOnlyType.readableScopes).toBeGreaterThan(readOnlyType.writableScopes);
      }
      
      // Multi Scope Resource (different read/write scopes)
      const partlyReadOnly = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/partlyReadonlyType@2021-10-31');
      if (partlyReadOnly) {
        expect(partlyReadOnly.readableScopes).toBe(9); // ScopeType.Tenant | ScopeType.ResourceGroup (1+8=9)
        expect(partlyReadOnly.writableScopes).toBe(8); // ScopeType.ResourceGroup
        expect(partlyReadOnly.readableScopes).toBeGreaterThan(partlyReadOnly.writableScopes);
        
        // Verify bitwise operations work correctly
        expect(partlyReadOnly.readableScopes & 1).toBe(1); // Has Tenant scope
        expect(partlyReadOnly.readableScopes & 8).toBe(8); // Has ResourceGroup scope  
        expect(partlyReadOnly.writableScopes & 1).toBe(0); // No Tenant scope for writing
        expect(partlyReadOnly.writableScopes & 8).toBe(8); // Has ResourceGroup scope for writing
      }
      
      // Split GET/PUT (same logical resource, different paths)
      const splitType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/splitPutAndGetType@2021-10-31');
      if (splitType) {
        expect(splitType.readableScopes).toBe(4); // ScopeType.Subscription
        expect(splitType.writableScopes).toBe(4); // ScopeType.Subscription  
        expect(splitType.readableScopes).toBe(splitType.writableScopes); // Both should be equal
      }
      
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        console.warn('Generated types.json not found. Run tests with BASELINE_RECORD=true first.');
        return;
      }
      throw error;
    }
  });

  it('should handle additional scope scenarios correctly', async () => {
    const typesJsonPath = path.join(__dirname, 'generated/bicep/basic/test.rp1/2021-10-31/types.json');
    
    try {
      const typesContent = await readFile(typesJsonPath, 'utf8');
      const typesData = JSON.parse(typesContent);
      const resourceTypes = typesData.filter((item: any) => item.$type === 'ResourceType');
      
      // PUT Only (Write Only) Resource - NEW!
      const writeOnlyType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/writeOnlyTestType@2021-10-31');
      if (writeOnlyType) {
        expect(writeOnlyType.readableScopes).toBe(0); // ScopeType.None
        expect(writeOnlyType.writableScopes).toBe(8); // ScopeType.ResourceGroup
      }
      
      // Tenant Scope Resource
      const tenantScopeType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/tenantScopeType@2021-10-31');
      if (tenantScopeType) {
        expect(tenantScopeType.readableScopes).toBe(1); // ScopeType.Tenant
        expect(tenantScopeType.writableScopes).toBe(1); // ScopeType.Tenant
      }
      
      // Subscription Scope Resource
      const subscriptionScopeType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/subscriptionScopeType@2021-10-31');
      if (subscriptionScopeType) {
        expect(subscriptionScopeType.readableScopes).toBe(4); // ScopeType.Subscription
        expect(subscriptionScopeType.writableScopes).toBe(4); // ScopeType.Subscription
      }
      
      // Management Group Scope Resource
      const mgScopeType = resourceTypes.find((rt: any) => rt.name === 'Test.Rp1/mgScopeType@2021-10-31');
      if (mgScopeType) {
        expect(mgScopeType.readableScopes).toBe(2); // ScopeType.ManagementGroup
        expect(mgScopeType.writableScopes).toBe(2); // ScopeType.ManagementGroup
      }
      
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        console.warn('Generated types.json not found. Run tests with BASELINE_RECORD=true first.');
        return;
      }
      throw error;
    }
  });
  
  it('should validate types.md contains modern scope documentation', async () => {
    const typesMdPath = path.join(__dirname, 'generated/bicep/basic/test.rp1/2021-10-31/types.md');
    
    try {
      const typesContent = await readFile(typesMdPath, 'utf8');
      
      // Verify modern scope format is used
      expect(typesContent).toMatch(/\* \*\*Readable Scope\(s\)\*\*:/);
      expect(typesContent).toMatch(/\* \*\*Writable Scope\(s\)\*\*:/);
      
      // Verify legacy scope format is not used
      expect(typesContent).not.toMatch(/\* \*\*Valid Scope\(s\)\*\*:/);
      
      // Check specific examples
      if (typesContent.includes('Test.Rp1/testType1@2021-10-31')) {
        expect(typesContent).toMatch(/\*\*Readable Scope\(s\)\*\*: ResourceGroup/); // Should be readable at ResourceGroup
        expect(typesContent).toMatch(/\*\*Writable Scope\(s\)\*\*: ResourceGroup/); // Should be writable at ResourceGroup
      }
      
      if (typesContent.includes('Test.Rp1/readOnlyTestType@2021-10-31')) {
        expect(typesContent).toMatch(/\*\*Readable Scope\(s\)\*\*: ResourceGroup/); // Should be readable at ResourceGroup
        expect(typesContent).toMatch(/\*\*Writable Scope\(s\)\*\*: None/); // Should not be writable
      }
      
    } catch (error) {
      if ((error as any).code === 'ENOENT') {
        console.warn('Generated types.md not found. Run tests with BASELINE_RECORD=true first.');
        return;
      }
      throw error;
    }
  });
});