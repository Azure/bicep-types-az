// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EmitContext } from "@typespec/compiler";
import { writeTypesJson, writeMarkdown } from "bicep-types";
import { BicepEmitterOptions, $lib } from "./lib.js";
import { getProviderDefinitions } from "./resources.js";
import { generateTypes } from "./type-generator.js";
import { join } from "path";
import { mkdirSync, writeFileSync } from "fs";

export { $lib } from "./lib.js";

/**
 * TypeSpec emitter entry point.
 *
 * This is the equivalent of autorest.bicep's `processRequest` function,
 * but takes a TypeSpec EmitContext instead of an AutorestExtensionHost.
 *
 * It extracts ARM resource definitions from the TypeSpec program,
 * generates Bicep type definitions (or ARM schema), and writes
 * the output files to the emitter output directory.
 */
export async function $onEmit(
  context: EmitContext<BicepEmitterOptions>,
): Promise<void> {
  if (context.program.compilerOptions.noEmit || context.program.hasError()) {
    return;
  }

  const start = Date.now();
  const program = context.program;
  const outputDir = context.emitterOutputDir;
  const options = context.options;

  const providerDefinitions = getProviderDefinitions(context);

  if (providerDefinitions.length === 0) {
    $lib.reportDiagnostic(program, {
      code: "no-arm-resources",
      target: program.getGlobalNamespaceType(),
    });
    return;
  }

  for (const definition of providerDefinitions) {
    const { namespace, apiVersion } = definition;
    const outFolder = join(
      outputDir,
      `${namespace}/${apiVersion}`.toLowerCase(),
    );

    // Ensure output directory exists
    mkdirSync(outFolder, { recursive: true });

    if (!options["arm-schema"]) {
      // Bicep type output mode
      const types = generateTypes(program, definition);

      // Write types.json
      writeFileSync(
        join(outFolder, "types.json"),
        writeTypesJson(types),
        "utf-8",
      );

      // Write types.md
      writeFileSync(
        join(outFolder, "types.md"),
        writeMarkdown(types, `${namespace} @ ${apiVersion}`),
        "utf-8",
      );
    }
    // ARM schema mode could be added here in the future
  }

  program.trace(
    "typespec-bicep",
    `typespec-bicep took ${Date.now() - start}ms`,
  );
}
