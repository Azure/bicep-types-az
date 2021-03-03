// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutoRestExtension,
  Host,
  startSession
} from "@autorest/extension-base";
import { generate } from "./generator";
import { CodeModel, codeModelSchema } from "@autorest/codemodel";

export async function processRequest(host: Host) {
  try {
    const session = await startSession<CodeModel>(
      host,
      undefined,
      codeModelSchema
    );
    const start = Date.now();
    await generate(session.model, host);
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
