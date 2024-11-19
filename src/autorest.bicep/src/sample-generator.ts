// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { keys } from 'lodash';
import { getFullyQualifiedType, ProviderDefinition, PutExample, ResourceDescriptor } from "./resources";

export function getSampleMarkdown(definition: ProviderDefinition) {
  let mdSamples = `
# ${definition.namespace}
`;

  for (const resourceType of keys(definition.resourcesByType)) {
    const descriptor = definition.resourcesByType[resourceType][0].descriptor;
    const putExamples = definition.resourcesByType[resourceType].flatMap(x => x.putExamples ?? []);
    if (putExamples.length === 0) {
      continue;
    }

    mdSamples += `
## ${resourceType}
`;
    
    for (const example of putExamples) {
      const bicepContent = generateBicepSample(definition, descriptor, example);
      if (!bicepContent) {
        continue;
      }

      mdSamples += `
${example.description}
\`\`\`bicep
${bicepContent}
\`\`\`
`;
    }
  }

  return mdSamples;
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

  for (const propName of keys(example.body)) {
    result += `  ${propName}: ${getBicep(example.body[propName], 1)}\n`;
  }

  result += `}`;

  return result;
}

function getIndent(indent: number) {
  return '  '.repeat(indent);
}

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
    for (const key of keys(value)) {
      result += `\n${getIndent(indent + 1)}${key}: ${getBicep(value[key], indent + 1)}`;
    }
    result += `\n${getIndent(indent)}}`;

    return result;
  }

  throw new Error(`Unsupported type: ${typeof value}`);
}

function getBicepString(value: string) {
  const escaped = value
  .replace("\\", "\\\\") // must do this first!
  .replace("\r", "\\r")
  .replace("\n", "\\n")
  .replace("\t", "\\t")
  .replace("${", "\\${")
  .replace("'", "\\'");
  return `'${escaped}'`;
}