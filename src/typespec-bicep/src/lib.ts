// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createTypeSpecLibrary, JSONSchemaType, paramMessage } from "@typespec/compiler";

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
        default: "No ARM resource types were found in the TypeSpec program. Ensure you are using @azure-tools/typespec-azure-resource-manager decorators.",
      },
    },
    "missing-provider-namespace": {
      severity: "warning",
      messages: {
        default: paramMessage`Skipping ARM resource '${"resource"}': could not determine its provider namespace (@armProviderNamespace).`,
      },
    },
    "missing-api-version": {
      severity: "warning",
      messages: {
        default: paramMessage`Skipping ARM resource '${"resource"}': could not determine its API version. Ensure the resource's namespace declares a 'Versions' enum.`,
      },
    },
    "no-resource-scopes": {
      severity: "warning",
      messages: {
        default: paramMessage`Skipping ARM resource '${"resource"}': could not determine any readable or writable scopes from its operations or routes.`,
      },
    },
    "unmapped-type-segments": {
      severity: "warning",
      messages: {
        default: paramMessage`Skipping a route for ARM resource '${"resource"}': could not resolve any resource type segments from its path.`,
      },
    },
    "emitter-warning": {
      severity: "warning",
      messages: {
        default: paramMessage`${"message"}`,
      },
    },
  },
  emitter: {
    options: BicepEmitterOptionsSchema,
  },
} as const;

export const $lib = createTypeSpecLibrary(libDef);
