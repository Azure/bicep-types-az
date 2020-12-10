// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Processors
{
    public class TypeMarkdownWriter
    {
        private readonly StringBuilder output;
        private readonly TypeBase[] types;
        private HashSet<TypeBase> pendingWriteSet;
        private Queue<TypeBase> pendingWriteTypes;

        public TypeMarkdownWriter(TypeBase[] types)
        {
            this.output = new StringBuilder();
            this.types = types;
            this.pendingWriteSet = new HashSet<TypeBase>();
            this.pendingWriteTypes = new Queue<TypeBase>();
        }

        private static string GetTypeName(ITypeReference typeReference)
            => typeReference.Type switch {
                BuiltInType type => type.Kind.ToString().ToLowerInvariant(),
                ObjectType type => type.Name,
                ArrayType type => $"{GetTypeName(type.ItemType)}[]",
                ResourceType type => type.Name,
                UnionType type => string.Join(" | ", type.Elements.Select(GetTypeName).OrderBy(x => x)),
                StringLiteralType type => $"'{type.Value}'",
                DiscriminatedObjectType type => type.Name,
                _ => throw new ArgumentException(),
            };

        private void WriteHeading(int nesting, string message)
            => output.AppendLine($"{new String('#', nesting)} {message}");

        private void WriteTypeProperty(string name, ObjectProperty property)
        {
            var flagsString = property.Flags != ObjectPropertyFlags.None ? $" ({property.Flags.ToString()})" : "";
            WriteBullet(name, $"{GetTypeName(property.Type)}{flagsString}");
        }

        private void WriteBullet(string key, string value)
            => output.AppendLine($"* **{key}**: {value}");

        private void WriteNewLine()
            => output.AppendLine();

        private void EnqueuePendingWrite(TypeBase type)
        {
            if (pendingWriteSet.Contains(type))
            {
                return;
            }

            pendingWriteSet.Add(type);
            pendingWriteTypes.Enqueue(type);

            switch (type)
            {
                case ArrayType arrayType:
                    EnqueuePendingWrite(arrayType.ItemType.Type);
                    return;
                case ObjectType objectType:
                    if (objectType.Properties != null)
                    {
                        foreach (var property in objectType.Properties.OrderBy(x => x.Key))
                        {
                            EnqueuePendingWrite(property.Value.Type.Type);
                        }
                    }
                    if (objectType.AdditionalProperties != null)
                    {
                        EnqueuePendingWrite(objectType.AdditionalProperties.Type);
                    }
                    return;
                case DiscriminatedObjectType discriminatedObjectType:
                    foreach (var property in discriminatedObjectType.BaseProperties.OrderBy(x => x.Key))
                    {
                        EnqueuePendingWrite(property.Value.Type.Type);
                    }
                    foreach (var element in discriminatedObjectType.Elements.OrderBy(x => x.Key))
                    {
                        EnqueuePendingWrite(element.Value.Type);
                    }
                    return;
            }
        }

        public string Write(string providerNamespace, string apiVersion)
        {
            WriteHeading(1, $"{providerNamespace} @ {apiVersion}");
            WriteNewLine();

            foreach (var resourceType in types.OfType<ResourceType>().OrderBy(x => x.Name))
            {
                EnqueuePendingWrite(resourceType.Body.Type);
            }

            while (pendingWriteTypes.Any())
            {
                var type = pendingWriteTypes.Dequeue();

                WriteComplexType(type, 2);
            }

            return output.ToString();
        }

        private void WriteComplexType(TypeBase type, int nesting)
        {
            if (type is ObjectType objectType)
            {
                WriteHeading(nesting, objectType.Name);
                
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
            }

            if (type is DiscriminatedObjectType discriminatedObjectType)
            {
                WriteHeading(nesting, discriminatedObjectType.Name);

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
                    WriteComplexType(element.Value.Type, nesting + 1);
                }

                WriteNewLine();
                return;
            }
        }
    }
}