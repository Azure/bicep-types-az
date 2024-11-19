// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, AutorestExtensionHost, startSession } from "@autorest/extension-base";
import { generateTypes } from "./type-generator";
import { generateSchema } from "./schema-generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { writeTypesJson, writeMarkdown } from "bicep-types";
import { getProviderDefinitions } from "./resources";
import { getSampleMarkdown } from "./sample-generator";

export async function processRequest(host: AutorestExtensionHost) {
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );
    const start = Date.now();

    for (const definition of getProviderDefinitions(session.model, host)) {
      const { namespace, apiVersion } = definition;

      const outFolder = `${namespace}/${apiVersion}`.toLowerCase();

      if (!session.configuration["arm-schema"]) {
        const types = generateTypes(host, definition);

        // write samples.md
        host.writeFile({ filename: `${outFolder}/samples.md`, content: getSampleMarkdown(definition) });
  
        // write types.json
        host.writeFile({ filename: `${outFolder}/types.json`, content: writeTypesJson(types) });
  
        // write types.md
        host.writeFile({ filename: `${outFolder}/types.md`, content: writeMarkdown(types, `${namespace} @ ${apiVersion}`) });  
      } else {
        const schema = generateSchema(host, definition);

        // write schema.json
        host.writeFile({ filename: `${outFolder}/schema.json`, content: JSON.stringify(schema, null, 2) });
      }
    }

    session.info(`autorest.bicep took ${Date.now() - start}ms`);
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.add("bicep", processRequest);
  await pluginHost.run();
}

// eslint-disable-next-line jest/require-hook
main();
