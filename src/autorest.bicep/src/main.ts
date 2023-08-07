// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, AutorestExtensionHost, startSession } from "@autorest/extension-base";
import { generateTypes } from "./type-generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { writeJson, writeMarkdown } from "bicep-types";
import { getProviderDefinitions } from "./resources";
import { generateSchema } from "./schema-generator";

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
      const types = generateTypes(host, definition);

      const outFolder = `${namespace}/${apiVersion}`.toLowerCase();

      // write types.json
      host.writeFile({ filename: `${outFolder}/types.json`, content: writeJson(types) });

      // writer types.md
      host.writeFile({ filename: `${outFolder}/types.md`, content: writeMarkdown(types, `${namespace} @ ${apiVersion}`) });

      if (session.configuration["arm-schema"]) {
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
