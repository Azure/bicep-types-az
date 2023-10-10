// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { v4 as uuidv4 } from "uuid";
import { expectFileExists, pathToCachedBrModuleFile } from "./fs";
import path from "path";
import { invokingBicepCommand } from "./command";
import { pathToExampleFile } from "./fs";
import { EnvironmentOverrides } from "./types";

// The modules published from live tests to our test ACR instances need to be periodically
// purged. ACR purge tasks support wildcards but only on tags. This means that we have to have
// predictable repository names in our tests. This class simplifies this logic.
export class BicepRegistryReferenceBuilder {
  readonly tagSuffix: string;

  constructor(readonly registry: string, readonly testArea: string) {
    this.tagSuffix = uuidv4().split('-')[0];
  }

  public getBicepReferenceWithAlias(
    alias: string,
    name: string,
    tagPrefix: string
  ): string {
    const tag = this.getTag(tagPrefix);
    return `br/${alias}:${name}:${tag}`;
  }

  public getTag(tagPrefix: string) {
    return `${tagPrefix}-${this.tagSuffix}`;
  }
}

export function expectBrModuleStructure(...pathNames: string[]): void {
  const moduleFiles = ["lock", "main.json", "manifest", "metadata"];
  const directoryPath = pathToCachedBrModuleFile(...pathNames);

  moduleFiles.forEach((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    expectFileExists(filePath);
  });
}

export function publishModule(
  environmentOverrides: EnvironmentOverrides,
  moduleReference: string,
  ...examplePathNames: string[]
): void {
  const storagePath = pathToExampleFile(...examplePathNames);
  invokingBicepCommand("publish", storagePath, "--target", moduleReference)
    .withEnvironmentOverrides(environmentOverrides)
    .shouldSucceed();
}
