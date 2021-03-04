// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AutoRestExtension, Host, startSession } from "@autorest/extension-base";
import { generateTypes } from "./generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";
import { writeJson } from './writers/json';
import { writeMarkdown } from "./writers/markdown";

export async function processRequest(host: Host) {
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );
    const start = Date.now();

    for (const { provider, apiVersion, types } of generateTypes(session.model, host)) {
      const outFolder = `${provider}/${apiVersion}`.toLowerCase();

      // write types.json
      host.WriteFile(`${outFolder}/types.json`, writeJson(types));

      // writer types.md
      host.WriteFile(`${outFolder}/types.md`, writeMarkdown(provider, apiVersion, types));
    }

    session.log(`Autorest.AzureResourceSchema took ${Date.now() - start}ms`, "");
  } catch (err) {
    console.error("An error was encountered while handling a request:", err);
    throw err;
  }
}

async function main() {
  const pluginHost = new AutoRestExtension();
  pluginHost.Add("azureresourceschema", processRequest);
  await pluginHost.Run();
}

main();
