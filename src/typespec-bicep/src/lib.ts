// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTypeSpecLibrary, JSONSchemaType } from "@typespec/compiler";

export type BicepEmitterOptions = Record<string, never>;

const BicepEmitterOptionsSchema: JSONSchemaType<BicepEmitterOptions> = {
  type: "object",
  additionalProperties: false,
  properties: {},
  required: [],
};

const libDef = {
  name: "@azure-tools/typespec-bicep",
  diagnostics: {
    "no-arm-resources": {
      severity: "warning",
      messages: {
        default:
          "No ARM resource types were found in the TypeSpec program. Ensure you are using @azure-tools/typespec-azure-resource-manager decorators.",
      },
    },
    "unsupported-type": {
      severity: "warning",
      messages: {
        default: "Unsupported type encountered; defaulting to 'any'.",
      },
    },
    "missing-resource-name": {
      severity: "warning",
      messages: {
        default:
          "Could not determine resource name type; skipping resource.",
      },
    },
    "resource-processing-error": {
      severity: "error",
      messages: {
        default: "An error occurred while processing a resource type.",
      },
    },
  },
  emitter: {
    options: BicepEmitterOptionsSchema,
  },
} as const;

export const $lib = createTypeSpecLibrary(libDef);
export const { reportDiagnostic } = $lib;
