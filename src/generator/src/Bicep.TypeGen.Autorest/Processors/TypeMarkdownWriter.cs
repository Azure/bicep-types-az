// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Processors
{
    public class TypeMarkdownWriter
    {
        private class OrderedTypes : IEnumerable<TypeBase>
        {
            public OrderedTypes(IEnumerable<TypeBase> types)
            {
                typesSet = new(types);
                typesList = new(types);
            }

            private readonly HashSet<TypeBase> typesSet;
            private readonly List<TypeBase> typesList;

            public void Add(TypeBase type)
            {
                if (typesSet.Contains(type))
                {
                    return;
                }

                typesSet.Add(type);
                typesList.Add(type);
            }

            public bool Contains(TypeBase type) => typesSet.Contains(type);

            public IEnumerator<TypeBase> GetEnumerator() => typesList.GetEnumerator();

            IEnumerator IEnumerable.GetEnumerator() => typesList.GetEnumerator();
        }

        private readonly StringBuilder output;
        private readonly TypeBase[] types;

        public TypeMarkdownWriter(TypeBase[] types)
        {
            this.output = new StringBuilder();
            this.types = types;
        }

        private static string GetTypeName(ITypeReference typeReference)
            => typeReference.Type switch
            {
                BuiltInType type => type.Kind.ToString().ToLowerInvariant(),
                ObjectType type => GenerateAnchorLink(type.Name),
                ArrayType type => $"{GetTypeName(type.ItemType)}[]",
                ResourceType type => type.Name,
                UnionType type => string.Join(" | ", type.Elements.Select(GetTypeName).OrderBy(x => x)),
                StringLiteralType type => $"'{type.Value}'",
                DiscriminatedObjectType type => GenerateAnchorLink(type.Name),
                _ => throw new ArgumentException(),
            };
        
        private static string GenerateAnchorLink(string name)
            => $"[{name}](#{Regex.Replace(name, "[^a-zA-Z0-9-]", "").ToLowerInvariant()})";

        private void WriteHeading(int nesting, string message)
            => output.AppendLine($"{new String('#', nesting)} {message}");

        private void WriteTypeProperty(string name, ObjectProperty property)
        {
            var flagsString = property.Flags != ObjectPropertyFlags.None ? $" ({property.Flags})" : "";
            WriteBullet(name, $"{GetTypeName(property.Type)}{flagsString}");
        }

        private void WriteBullet(string key, string value)
            => output.AppendLine($"* **{key}**: {value}");

        private void WriteNewLine()
            => output.AppendLine();

        private static void FindTypesToWrite(OrderedTypes typesToWrite, ITypeReference typeReference)
        {
            void addToOrderedTypes(ITypeReference typeReference)
            {
                // this is needed to avoid circular type references causing stack overflows
                if (!typesToWrite.Contains(typeReference.Type))
                {
                    typesToWrite.Add(typeReference.Type);
                    FindTypesToWrite(typesToWrite, typeReference);
                }
            }

            switch (typeReference.Type)
            {
                case ArrayType arrayType:
                    addToOrderedTypes(arrayType.ItemType);
                    return;
                case ObjectType objectType:
                    if (objectType.Properties != null)
                    {
                        foreach (var property in objectType.Properties.OrderBy(x => x.Key))
                        {
                            addToOrderedTypes(property.Value.Type);
                        }
                    }
                    if (objectType.AdditionalProperties != null)
                    {
                        addToOrderedTypes(objectType.AdditionalProperties);
                    }
                    return;
                case DiscriminatedObjectType discriminatedObjectType:
                    foreach (var property in discriminatedObjectType.BaseProperties.OrderBy(x => x.Key))
                    {
                        addToOrderedTypes(property.Value.Type);
                    }
                    foreach (var element in discriminatedObjectType.Elements.OrderBy(x => x.Key))
                    {
                        addToOrderedTypes(element.Value);
                    }
                    return;
            }
        }

        public string Write(string providerNamespace, string apiVersion)
        {
            WriteHeading(1, $"{providerNamespace} @ {apiVersion}");
            WriteNewLine();

            var resourceTypes = types.OfType<ResourceType>().OrderBy(x => x.Name.Split("@")[0], StringComparer.OrdinalIgnoreCase).ToList();
            var typesToWrite = new OrderedTypes(resourceTypes);
            foreach (var resourceType in resourceTypes)
            {
                FindTypesToWrite(typesToWrite, resourceType.Body);
            }

            foreach (var type in typesToWrite)
            {
                WriteComplexType(type, 2, true);
            }

            return output.ToString();
        }

        private void WriteComplexType(TypeBase type, int nesting, bool includeHeader)
        {
            switch (type)
            {
                case ResourceType resourceType:
                    WriteHeading(nesting, $"Resource {resourceType.Name}");
                    WriteBullet("Valid Scope(s)", $"{resourceType.ScopeType}");
                    WriteComplexType(resourceType.Body.Type, nesting, false);
                    return;
                case ObjectType objectType:
                    if (includeHeader)
                    {
                        WriteHeading(nesting, objectType.Name);
                    }

                    if (objectType.Properties != null)
                    {
                        WriteHeading(nesting + 1, "Properties");
                        foreach (var property in objectType.Properties.OrderBy(x => x.Key))
                        {
                            WriteTypeProperty(property.Key, property.Value);
                        }
                    }

                    if (objectType.AdditionalProperties != null)
                    {
                        WriteHeading(nesting + 1, "Additional Properties");
                        WriteBullet("Additional Properties Type", GetTypeName(objectType.AdditionalProperties));
                    }

                    WriteNewLine();
                    return;
                case DiscriminatedObjectType discriminatedObjectType:
                    if (includeHeader)
                    {
                        WriteHeading(nesting, discriminatedObjectType.Name);
                    }

                    WriteBullet("Discriminator", discriminatedObjectType.Discriminator);

                    if (discriminatedObjectType.BaseProperties != null)
                    {
                        WriteHeading(nesting + 1, "Base Properties");
                        foreach (var property in discriminatedObjectType.BaseProperties.OrderBy(x => x.Key))
                        {
                            WriteTypeProperty(property.Key, property.Value);
                        }
                    }

                    foreach (var element in discriminatedObjectType.Elements.OrderBy(x => x.Key))
                    {
                        WriteComplexType(element.Value.Type, nesting + 1, true);
                    }

                    WriteNewLine();
                    return;
            }
        }
    }
}