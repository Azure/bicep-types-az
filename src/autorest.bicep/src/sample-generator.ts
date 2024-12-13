// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { keys, orderBy } from "lodash";
import { getFullyQualifiedType, ProviderDefinition, PutExample, ResourceDescriptor } from "./resources";

export function getSampleMarkdown(definition: ProviderDefinition) {
  let hasSamples = false;
  let mdSamples = `# ${definition.namespace}
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.

`;

  for (const resourceType of orderBy(keys(definition.resourcesByType), x => x.toLowerCase())) {
    const descriptor = definition.resourcesByType[resourceType][0].descriptor;
    const putExamples = definition.resourcesByType[resourceType].flatMap(x => x.putExamples ?? []);
    if (putExamples.length === 0) {
      continue;
    }

    mdSamples += `
## ${resourceType}
`;
    
    for (const example of orderBy(putExamples, x => x.description.toLowerCase())) {
      const bicepContent = generateBicepSample(definition, descriptor, example);
      if (!bicepContent) {
        continue;
      }

      hasSamples = true;
      mdSamples += `
${example.description}
\`\`\`bicep
${bicepContent}
\`\`\`
`;
    }
  }

  return hasSamples ? mdSamples : null;
}

function generateBicepSample(provider: ProviderDefinition, descriptor: ResourceDescriptor, example: PutExample) {
  if (typeof example.body !== 'object') {
    return;
  }
  
  let result = `resource exampleResource '${getFullyQualifiedType(descriptor)}@${provider.apiVersion}' = {\n`;
  if (descriptor.typeSegments.length > 1) {
    result += `  parent: parentResource \n`;
  }
  result += `  name: 'example'\n`;

  for (const propName in example.body) {
    result += `  ${propName}: ${getBicep(example.body[propName], 1)}\n`;
  }

  result += `}`;

  return result;
}

function getIndent(indent: number) {
  return '  '.repeat(indent);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBicep(value: any, indent: number) {
  if (typeof value === 'string') {
    return getBicepString(value);
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (Array.isArray(value)) {
    let result = `[`;
    for (const item of value) {
      result += `\n${getIndent(indent + 1)}${getBicep(item, indent + 1)}`;
    }
    result += `\n${getIndent(indent)}]`;

    return result;
  }

  if (typeof value === 'object') {
    let result = `{`;
    for (const key in value) {
      const escapedKey = isBicepIdentifier(key) ? key : getBicepString(key);
      result += `\n${getIndent(indent + 1)}${escapedKey}: ${getBicep(value[key], indent + 1)}`;
    }
    result += `\n${getIndent(indent)}}`;

    return result;
  }

  throw new Error(`Unsupported type: ${typeof value}`);
}

function isBicepIdentifier(value: string) {
  return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value);
}

function getBicepString(value: string) {
  const escaped = value
  .replace(/\\/g, "\\\\") // must do this first!
  .replace(/\r/g, "\\r")
  .replace(/\n/g, "\\n")
  .replace(/\t/g, "\\t")
  .replace(/\${/g, "\\${")
  .replace(/'/g, "\\'");
  return `'${escaped}'`;
}