// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import path from "path";
import { rm } from "fs/promises";
import { readFile } from "fs/promises";
import { describe, it, expect } from "vitest";
import {
  defaultLogger,
  isBaselineRecordEnabled,
  runTypeSpecEmitter,
  compareDirectories,
} from "./utils";

const outputBaseDir = path.resolve(`${__dirname}/generated`);

// Add any new spec paths under ./specs to this list
const specs = ["basic", "firewalls", "edge-cases"];

describe("integration tests (bicep types)", () => {
  for (const spec of specs) {
    it(spec, async () => {
      const tspMainFile = path.join(__dirname, `specs/${spec}/main.tsp`);
      const outputDir = `${outputBaseDir}/bicep/${spec}`;

      if (isBaselineRecordEnabled()) {
        await rm(outputDir, { recursive: true, force: true });
        await runTypeSpecEmitter(defaultLogger, tspMainFile, outputDir);
      } else {
        const stagingOutputDir = path.join(__dirname, `temp/${spec}`);
        await rm(stagingOutputDir, { recursive: true, force: true });

        await runTypeSpecEmitter(defaultLogger, tspMainFile, stagingOutputDir);

        const compareResult = await compareDirectories(
          stagingOutputDir,
          outputDir,
        );

        // Assert that the generated files match the baseline files which have been checked in.
        // Set BASELINE_RECORD=true to run the tests in record mode and overwrite baselines.
        if (compareResult.differences > 0) {
          console.error("Differences found:");
          for (const detail of compareResult.details) {
            console.error(`  ${detail}`);
          }
        }
        expect(compareResult.differences).toBe(0);
      }
    });
  }
});

describe("scope validation tests", () => {
  it("should generate modern scope properties (readableScopes/writableScopes)", async () => {
    // Find the generated types.json for Test.Rp1
    const typesJsonPath = path.join(
      outputBaseDir,
      "bicep/basic/@azure-tools/typespec-bicep/test.rp1/2021-10-31/types.json",
    );

    let typesContent: string;
    try {
      typesContent = await readFile(typesJsonPath, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        console.warn(
          "Generated types.json not found. Run tests with BASELINE_RECORD=true first.",
        );
        return;
      }
      throw error;
    }

    const typesData = JSON.parse(typesContent);
    const resourceTypes = typesData.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.$type === "ResourceType",
    );

    expect(resourceTypes.length).toBeGreaterThan(0);

    for (const resourceType of resourceTypes) {
      // Verify modern scope properties exist
      expect(resourceType).toHaveProperty("readableScopes");
      expect(resourceType).toHaveProperty("writableScopes");

      // Verify legacy properties are not present
      expect(resourceType).not.toHaveProperty("scopeType");
      expect(resourceType).not.toHaveProperty("readOnlyScopes");
      expect(resourceType).not.toHaveProperty("flags");

      // Verify scope values are numeric (ScopeType enum values)
      expect(typeof resourceType.readableScopes).toBe("number");
      expect(typeof resourceType.writableScopes).toBe("number");

      // Verify scope values are valid (not negative)
      expect(resourceType.readableScopes).toBeGreaterThanOrEqual(0);
      expect(resourceType.writableScopes).toBeGreaterThanOrEqual(0);
    }
  });

  it("should handle specific scope scenarios correctly", async () => {
    const typesJsonPath = path.join(
      outputBaseDir,
      "bicep/basic/@azure-tools/typespec-bicep/test.rp1/2021-10-31/types.json",
    );

    let typesContent: string;
    try {
      typesContent = await readFile(typesJsonPath, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        console.warn(
          "Generated types.json not found. Run tests with BASELINE_RECORD=true first.",
        );
        return;
      }
      throw error;
    }

    const typesData = JSON.parse(typesContent);
    const resourceTypes = typesData.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.$type === "ResourceType",
    );

    // GET + PUT (Read Write) Resource at ResourceGroup scope
    const testType1 = resourceTypes.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rt: any) => rt.name === "Test.Rp1/testType1@2021-10-31",
    );
    if (testType1) {
      expect(testType1.readableScopes).toBe(8); // ScopeType.ResourceGroup
      expect(testType1.writableScopes).toBe(8); // ScopeType.ResourceGroup
    }

    // GET Only (Read Only) Resource
    const readOnlyType = resourceTypes.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rt: any) => rt.name === "Test.Rp1/readOnlyTestType@2021-10-31",
    );
    if (readOnlyType) {
      expect(readOnlyType.readableScopes).toBe(8); // ScopeType.ResourceGroup
      expect(readOnlyType.writableScopes).toBe(0); // ScopeType.None
    }

    // PUT Only (Write Only) Resource
    const writeOnlyType = resourceTypes.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rt: any) => rt.name === "Test.Rp1/writeOnlyTestType@2021-10-31",
    );
    if (writeOnlyType) {
      expect(writeOnlyType.readableScopes).toBe(0); // ScopeType.None
      expect(writeOnlyType.writableScopes).toBe(8); // ScopeType.ResourceGroup
    }

    // Tenant Scope Resource
    const tenantScopeType = resourceTypes.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rt: any) => rt.name === "Test.Rp1/tenantScopeType@2021-10-31",
    );
    if (tenantScopeType) {
      expect(tenantScopeType.readableScopes).toBe(1); // ScopeType.Tenant
      expect(tenantScopeType.writableScopes).toBe(1); // ScopeType.Tenant
    }

    // Subscription Scope Resource
    const subscriptionScopeType = resourceTypes.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (rt: any) => rt.name === "Test.Rp1/subscriptionScopeType@2021-10-31",
    );
    if (subscriptionScopeType) {
      expect(subscriptionScopeType.readableScopes).toBe(4); // ScopeType.Subscription
      expect(subscriptionScopeType.writableScopes).toBe(4); // ScopeType.Subscription
    }
  });

  it("should validate types.md contains modern scope documentation", async () => {
    const typesMdPath = path.join(
      outputBaseDir,
      "bicep/basic/@azure-tools/typespec-bicep/test.rp1/2021-10-31/types.md",
    );

    let typesContent: string;
    try {
      typesContent = await readFile(typesMdPath, "utf8");
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        console.warn(
          "Generated types.md not found. Run tests with BASELINE_RECORD=true first.",
        );
        return;
      }
      throw error;
    }

    // Verify modern scope format is used
    expect(typesContent).toMatch(/\* \*\*Readable Scope\(s\)\*\*:/);
    expect(typesContent).toMatch(/\* \*\*Writable Scope\(s\)\*\*:/);

    // Verify legacy scope format is not used
    expect(typesContent).not.toMatch(/\* \*\*Valid Scope\(s\)\*\*:/);
  });
});

describe("output structure tests", () => {
  it("should generate expected basic output files", async () => {
    const baseDir = path.join(
      outputBaseDir,
      "bicep/basic/@azure-tools/typespec-bicep/test.rp1/2021-10-31",
    );

    let exists = true;
    try {
      await readFile(path.join(baseDir, "types.json"), "utf-8");
    } catch {
      exists = false;
    }

    if (!exists) {
      console.warn(
        "Generated files not found. Run tests with BASELINE_RECORD=true first.",
      );
      return;
    }

    // types.json should exist and be valid JSON
    const typesJson = await readFile(
      path.join(baseDir, "types.json"),
      "utf-8",
    );
    const parsed = JSON.parse(typesJson);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBeGreaterThan(0);

    // types.md should exist and have content
    const typesMd = await readFile(path.join(baseDir, "types.md"), "utf-8");
    expect(typesMd.length).toBeGreaterThan(0);
    expect(typesMd).toContain("Test.Rp1");
  });

  it("should generate expected firewalls output files", async () => {
    const baseDir = path.join(
      outputBaseDir,
      "bicep/firewalls/@azure-tools/typespec-bicep/microsoft.network/2021-08-01",
    );

    let exists = true;
    try {
      await readFile(path.join(baseDir, "types.json"), "utf-8");
    } catch {
      exists = false;
    }

    if (!exists) {
      console.warn(
        "Generated firewalls files not found. Run tests with BASELINE_RECORD=true first.",
      );
      return;
    }

    // types.json should exist and be valid JSON
    const typesJson = await readFile(
      path.join(baseDir, "types.json"),
      "utf-8",
    );
    const parsed = JSON.parse(typesJson);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed.length).toBeGreaterThan(0);

    // types.md should exist and have content
    const typesMd = await readFile(path.join(baseDir, "types.md"), "utf-8");
    expect(typesMd.length).toBeGreaterThan(0);
    expect(typesMd).toContain("Microsoft.Network");

    // Should have firewall and firewall policy resource types
    const resourceTypes = parsed.filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => item.$type === "ResourceType",
    );
    expect(resourceTypes.length).toBeGreaterThanOrEqual(2);
  });
});
