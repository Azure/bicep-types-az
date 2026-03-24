// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getFullyQualifiedType, ProviderDefinition, ResourceDescriptor } from "./resources.js";

/**
 * Generate Bicep sample markdown documentation for a provider definition.
 *
 * This is the TypeSpec equivalent of autorest.bicep's sample-generator.ts.
 * In the TypeSpec world, examples come from `@example` decorators rather
 * than x-ms-examples in Swagger specs. This function generates basic
 * Bicep resource declaration samples based on the resource structure.
 */
export function getSampleMarkdown(definition: ProviderDefinition): string | null {
  let hasSamples = false;
  let mdSamples = `# ${definition.namespace}

> [!NOTE]
> The code samples in this document are generated from TypeSpec definitions.

`;

  const sortedTypes = Object.keys(definition.resourcesByType).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );

  for (const resourceType of sortedTypes) {
    const definitions = definition.resourcesByType[resourceType];
    if (definitions.length === 0) continue;

    const descriptor = definitions[0].descriptor;
    const fqType = getFullyQualifiedType(descriptor);

    hasSamples = true;
    mdSamples += `
## ${resourceType}

### Basic ${fqType} resource
\`\`\`bicep
${generateBasicBicepSample(definition, descriptor)}
\`\`\`
`;
  }

  return hasSamples ? mdSamples : null;
}

/**
 * Generate a basic Bicep resource declaration sample.
 */
function generateBasicBicepSample(
  provider: ProviderDefinition,
  descriptor: ResourceDescriptor,
): string {
  const fqType = getFullyQualifiedType(descriptor);
  let result = `resource exampleResource '${fqType}@${provider.apiVersion}' = {\n`;

  if (descriptor.typeSegments.length > 1) {
    result += `  parent: parentResource\n`;
  }

  result += `  name: 'example'\n`;
  result += `  location: 'eastus'\n`;
  result += `  properties: {\n`;
  result += `    // Add resource-specific properties here\n`;
  result += `  }\n`;
  result += `}`;

  return result;
}
