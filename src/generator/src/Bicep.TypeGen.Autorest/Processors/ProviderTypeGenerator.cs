// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using AutoRest.Core.Model;
using Azure.Bicep.Types.Concrete;
using Azure.Bicep.TypeGen.Autorest.Models;

namespace Azure.Bicep.TypeGen.Autorest.Processors
{
    public class ProviderTypeGenerator
    {
        private readonly TypeFactory factory;
        private readonly IReadOnlyDictionary<BuiltInTypeKind, BuiltInType> builtInTypes;
        private readonly TypeBase apiVersionType;
        private readonly TypeBase dependsOnType;
        private readonly CodeModel codeModel;
        private readonly ProviderDefinition definition;
        private readonly IDictionary<string, TypeBase> namedDefinitions;

        public static GenerateResult Generate(CodeModel codeModel, ProviderDefinition definition)
        {
            var generator = new ProviderTypeGenerator(codeModel, definition);

            return generator.Process();
        }

        private ProviderTypeGenerator(CodeModel codeModel, ProviderDefinition definition)
        {
            factory = new TypeFactory(Enumerable.Empty<TypeBase>());
            this.builtInTypes = new Dictionary<BuiltInTypeKind, BuiltInType>
            {
                [BuiltInTypeKind.Any] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Any)),
                [BuiltInTypeKind.Null] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Null)),
                [BuiltInTypeKind.Bool] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Bool)),
                [BuiltInTypeKind.Int] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Int)),
                [BuiltInTypeKind.String] = factory.Create(() => new BuiltInType(BuiltInTypeKind.String)),
                [BuiltInTypeKind.Object] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Object)),
                [BuiltInTypeKind.Array] = factory.Create(() => new BuiltInType(BuiltInTypeKind.Array)),
                [BuiltInTypeKind.ResourceRef] = factory.Create(() => new BuiltInType(BuiltInTypeKind.ResourceRef)),
            };
            this.apiVersionType = factory.Create(() => new StringLiteralType(definition.ApiVersion));
            this.dependsOnType = factory.Create(() => new ArrayType(factory.GetReference(builtInTypes[BuiltInTypeKind.ResourceRef])));
            this.codeModel = codeModel;
            this.definition = definition;
            this.namedDefinitions = new Dictionary<string, TypeBase>();
        }

        private ObjectProperty CreateObjectProperty(TypeBase type, ObjectPropertyFlags flags)
            => new ObjectProperty(factory.GetReference(type), flags);

        private Dictionary<string, ObjectProperty> GetStandardizedResourceProperties(ResourceDescriptor resourceDescriptor, TypeBase resourceName)
        {
            var type = factory.Create(() => new StringLiteralType(resourceDescriptor.FullyQualifiedType));

            return new Dictionary<string, ObjectProperty>(StringComparer.OrdinalIgnoreCase)
            {
                ["id"] = CreateObjectProperty(builtInTypes[BuiltInTypeKind.String], ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant),
                ["name"] = CreateObjectProperty(resourceName, ObjectPropertyFlags.Required | ObjectPropertyFlags.DeployTimeConstant),
                ["type"] = CreateObjectProperty(type, ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant),
                ["apiVersion"] = CreateObjectProperty(apiVersionType, ObjectPropertyFlags.ReadOnly | ObjectPropertyFlags.DeployTimeConstant),
                ["dependsOn"] = CreateObjectProperty(dependsOnType, ObjectPropertyFlags.WriteOnly),
            };
        }

        private static ScopeType MergeScopes(ScopeType scopeA, ScopeType scopeB)
        {
            if (scopeA == ScopeType.Unknown || scopeB == ScopeType.Unknown)
            {
                return ScopeType.Unknown;
            }

            return scopeA | scopeB;
        }

        private static IReadOnlyList<ResourceDefinition> CollapseDefinitionScopes(IEnumerable<ResourceDefinition> definitions)
        {
            var definitionsByName = new Dictionary<string, ResourceDefinition>(StringComparer.OrdinalIgnoreCase);
            foreach (var definition in definitions)
            {
                var name = definition.Descriptor.ConstantName ?? "";

                if (definitionsByName.TryGetValue(name, out var existingDefinition))
                {
                    var mergedDescriptor = existingDefinition.Descriptor with { ScopeType = MergeScopes(existingDefinition.Descriptor.ScopeType, definition.Descriptor.ScopeType) };
                    
                    definitionsByName[name] = existingDefinition with { Descriptor = mergedDescriptor };
                }
                else
                {
                    definitionsByName[name] = definition;
                }
            }

            return definitionsByName.Values.ToList();
        }

        private GenerateResult Process()
        {
            var definitionsByDescriptor = definition.ResourceDefinitions
                .ToLookup(x => x.Descriptor.FullyQualifiedType)
                .ToDictionary(x => x.Key, x => CollapseDefinitionScopes(x));

            foreach (var (fullyQualifiedType, definitions) in definitionsByDescriptor)
            {
                if (definitions.Count > 1)
                {
                    CodeModelProcessor.LogWarning($"Skipping resource type {fullyQualifiedType} under path '{definitions[0].DeclaringMethod.Url}': Found multiple definitions for the same type");
                    continue;
                }

                var resource = definitions.Single();
                var descriptor = resource.Descriptor;

                var putBody = resource.DeclaringMethod.Body?.ModelType as CompositeType;
                var getBody = (resource.GetMethod?.Responses.GetValueOrDefault(HttpStatusCode.OK)?.Body as CompositeType) ?? 
                    (resource.GetMethod?.DefaultResponse?.Body as CompositeType) ??
                    putBody;

                var (success, failureReason, resourceName) = ParseNameSchema(resource, definition);
                if (!success)
                {
                    CodeModelProcessor.LogWarning($"Skipping resource type {fullyQualifiedType} under path '{resource.DeclaringMethod.Url}': {failureReason}");
                    continue;
                }

                if (putBody == null)
                {
                    CodeModelProcessor.LogWarning($"Skipping resource type {fullyQualifiedType} under path '{resource.DeclaringMethod.Url}': No resource body defined");
                    continue;
                }

                var resourceProperties = GetStandardizedResourceProperties(resource.Descriptor, resourceName!);
                var resourceDefinition = CreateObject(descriptor.FullyQualifiedType, putBody, resourceProperties);

                resource.Type = factory.Create(() => new ResourceType(
                    $"{descriptor.FullyQualifiedType}@{descriptor.ApiVersion}",
                    descriptor.ScopeType,
                    factory.GetReference(resourceDefinition)
                ));

                foreach (var (propertyName, putProperty, getProperty) in GetCompositeTypeProperties(putBody, getBody, true))
                {
                    if (resourceProperties.ContainsKey(propertyName))
                    {
                        continue;
                    }

                    var propertyDefinition = ParseType(putProperty?.ModelType, getProperty?.ModelType);
                    if (propertyDefinition != null)
                    {
                        var flags = ParsePropertyFlags(putProperty, getProperty);
                        resourceProperties[propertyName] = CreateObjectProperty(propertyDefinition, flags);
                    }
                }

                if (resourceDefinition is DiscriminatedObjectType discriminatedObjectType)
                {
                    HandlePolymorphicType(discriminatedObjectType, putBody, getBody);
                }
            }

            return new GenerateResult(
                definition.Namespace,
                definition.ApiVersion,
                factory,
                definition.ResourceDefinitions.Select(x => x.Descriptor).ToList());
        }

        private (bool success, string failureReason, TypeBase? name) ParseNameSchema(ResourceDefinition resource, ProviderDefinition providerDefinition)
        {
            var finalProvidersMatch = CodeModelProcessor.parentScopePrefix.Match(resource.DeclaringMethod.Url);
            var routingScope = resource.DeclaringMethod.Url.Substring(finalProvidersMatch.Length);

            // get the resource name parameter, e.g. {fooName}
            var resNameParam = routingScope.Substring(routingScope.LastIndexOf('/') + 1);

            if (CodeModelProcessor.IsPathVariable(resNameParam))
            {
                // strip the enclosing braces
                resNameParam = CodeModelProcessor.TrimParamBraces(resNameParam);

                // look up the type
                var param = resource.DeclaringMethod.Parameters.FirstOrDefault(p => p.SerializedName == resNameParam);

                if (param == null)
                {
                    return (false, $"Unable to locate parameter with name '{resNameParam}'", null);
                }

                var nameType = ParseType(param.ModelType, param.ModelType);

                return (true, string.Empty, nameType);
            }

            if (!resNameParam.All(c => char.IsLetterOrDigit(c)))
            {
                return (false, $"Unable to process non-alphanumeric name '{resNameParam}'", null);
            }

            // Resource name is a constant
            return (true, string.Empty, CreateConstantResourceName(resource.Descriptor, resNameParam));
        }

        private ObjectPropertyFlags ParsePropertyFlags(Property? putProperty, Property? getProperty)
        {
            var flags = ObjectPropertyFlags.None;

            if (putProperty != null && putProperty.IsRequired)
            {
                flags |= ObjectPropertyFlags.Required;
            }

            if (putProperty == null || putProperty.IsReadOnly)
            {
                flags |= ObjectPropertyFlags.ReadOnly;
            }

            if (getProperty == null)
            {
                flags |= ObjectPropertyFlags.WriteOnly;
            }

            return flags;
        }

        private TypeBase ParseType(IModelType? putType, IModelType? getType)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);

            // A schema that matches a JSON object with specific properties, such as
            // { "name": { "type": "string" }, "age": { "type": "number" } }
            if (combinedType is CompositeType)
            {
                return ParseCompositeType(putType as CompositeType, getType as CompositeType, true);
            } 
            // A schema that matches a "dictionary" JSON object, such as
            // { "additionalProperties": { "type": "string" } }
            if (combinedType is DictionaryType)
            {
                return ParseDictionaryType(putType as DictionaryType, getType as DictionaryType);
            }
            // A schema that matches a single value from a given set of values, such as
            // { "enum": [ "a", "b" ] }
            if (combinedType is EnumType)
            {
                return ParseEnumType(putType as EnumType, getType as EnumType);
            }
            // A schema that matches simple values, such as { "type": "number" }
            if (combinedType is PrimaryType)
            {
                return ParsePrimaryType(putType as PrimaryType, getType as PrimaryType);
            }
            // A schema that matches an array of values, such as
            // { "items": { "type": "number" } }
            if (combinedType is SequenceType)
            {
                return ParseSequenceType(putType as SequenceType, getType as SequenceType);
            }
            // A schema that matches anything
            if (combinedType is MultiType)
            {
                return builtInTypes[BuiltInTypeKind.Any];
            }

            Debug.Fail("Unrecognized property type: " + combinedType.GetType());
            return null;
        }

        private TypeBase CreateObject(string definitionName, CompositeType compositeType, Dictionary<string, ObjectProperty> properties)
        {
            if (compositeType.IsPolymorphic && compositeType.BasePolymorphicDiscriminator != null)
            {
                return factory.Create(() => new DiscriminatedObjectType(
                    name: definitionName,
                    discriminator: compositeType.BasePolymorphicDiscriminator,
                    baseProperties: properties,
                    elements: new Dictionary<string, ITypeReference>()));
            }

            return factory.Create(() => new ObjectType(definitionName, properties, null));
        }

        private IEnumerable<(string name, Property? putProperty, Property? getProperty)> GetCompositeTypeProperties(CompositeType? putType, CompositeType? getType, bool includeBaseModelTypeProperties)
        {
            var putProperties = ((includeBaseModelTypeProperties ? putType?.ComposedProperties : putType?.Properties) ?? Enumerable.Empty<Property>())
                .Where(p => p.Flavor == PropertyFlavor.Regular && p.SerializedName != null)
                .ToDictionary(p => p.SerializedName, StringComparer.OrdinalIgnoreCase);

            var getProperties = ((includeBaseModelTypeProperties ? getType?.ComposedProperties : getType?.Properties) ?? Enumerable.Empty<Property>())
                .Where(p => p.Flavor == PropertyFlavor.Regular && p.SerializedName != null)
                .ToDictionary(p => p.SerializedName, StringComparer.OrdinalIgnoreCase);

            foreach (var propertyName in putProperties.Keys.Concat(getProperties.Keys.Where(x => !putProperties.ContainsKey(x))))
            {
                putProperties.TryGetValue(propertyName, out var putProperty);
                getProperties.TryGetValue(propertyName, out var getProperty);

                yield return (propertyName, putProperty, getProperty);
            }
        }

        private (DictionaryType? putProperty, DictionaryType? getProperty) GetCompositeTypeAdditionalProperties(CompositeType? putType, CompositeType? getType, bool includeBaseModelTypeProperties)
        {
            var putAdditionalProperty = ((includeBaseModelTypeProperties ? putType?.ComposedProperties : putType?.Properties) ?? Enumerable.Empty<Property>())
                .Where(p => p.Flavor == PropertyFlavor.AdditionalProperties)
                .FirstOrDefault();
            var getAdditionalProperty = ((includeBaseModelTypeProperties ? getType?.ComposedProperties : getType?.Properties) ?? Enumerable.Empty<Property>())
                .Where(p => p.Flavor == PropertyFlavor.AdditionalProperties)
                .FirstOrDefault();

            return (putAdditionalProperty?.ModelType as DictionaryType, getAdditionalProperty?.ModelType as DictionaryType);
        }

        private TypeBase ParseCompositeType(CompositeType? putType, CompositeType? getType, bool includeBaseModelTypeProperties)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);
            var definitionName = combinedType.SerializedName;

            if (!namedDefinitions.ContainsKey(definitionName))
            {
                var definitionProperties = new Dictionary<string, ObjectProperty>();
                var definition = CreateObject(definitionName, combinedType, definitionProperties);

                // This definition must be added to the definition map before we start parsing
                // its properties because its properties may recursively reference back to this
                // definition.
                namedDefinitions.Add(definitionName, definition);

                foreach (var (propertyName, putProperty, getProperty) in GetCompositeTypeProperties(putType, getType, includeBaseModelTypeProperties))
                {
                    var propertyDefinition = ParseType(putProperty?.ModelType, getProperty?.ModelType);
                    if (propertyDefinition != null)
                    {
                        var flags = ParsePropertyFlags(putProperty, getProperty);
                        definitionProperties[propertyName] = CreateObjectProperty(propertyDefinition, flags);
                    }
                }

                var (putAdditionalType, getAdditionalType) = GetCompositeTypeAdditionalProperties(putType, getType, includeBaseModelTypeProperties);
                if ((putAdditionalType ?? getAdditionalType) != null && definition is ObjectType definitionObjectType)
                {
                    var additionalPropertiesType = ParseType(putAdditionalType?.ValueType, getAdditionalType?.ValueType);
                    definitionObjectType.AdditionalProperties = factory.GetReference(additionalPropertiesType);
                }

                if (definition is DiscriminatedObjectType discriminatedObjectType)
                {
                    HandlePolymorphicType(discriminatedObjectType, putType, getType);
                }
            }

            return namedDefinitions[definitionName];
        }

        private TypeBase ParseDictionaryType(DictionaryType? putType, DictionaryType? getType)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);
            var additionalPropertiesType = ParseType(putType?.ValueType, getType?.ValueType);

            return factory.Create(() => new ObjectType(
                name: combinedType.DeclarationName,
                properties: new Dictionary<string, ObjectProperty>(),
                additionalProperties: factory.GetReference(additionalPropertiesType)));
        }

        private StringLiteralType GetDiscriminatorType(CompositeType? putType, CompositeType? getType)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);

            if (!(combinedType.Extensions.TryGetValue("x-ms-discriminator-value", out var ext) && ext is string discriminator && !string.IsNullOrEmpty(discriminator)))
            {
                // autorest.common sets the SerializedName property to the swagger discriminator
                discriminator = combinedType.SerializedName;
            }

            return factory.Create(() => new StringLiteralType(discriminator));
        }

        private void HandlePolymorphicType(DiscriminatedObjectType discriminatedObjectType, CompositeType? putType, CompositeType? getType)
        {
            var putSubTypes = (putType != null ? codeModel.ModelTypes.Where(type => type.BaseModelType == putType) : Enumerable.Empty<CompositeType>())
                .ToDictionary(x => x.SerializedName);
            var getSubTypes = (getType != null ? codeModel.ModelTypes.Where(type => type.BaseModelType == getType) : Enumerable.Empty<CompositeType>())
                .ToDictionary(x => x.SerializedName);

            foreach (var subTypeName in putSubTypes.Keys.Concat(getSubTypes.Keys.Where(x => !putSubTypes.ContainsKey(x))))
            {
                putSubTypes.TryGetValue(subTypeName, out var putSubType);
                getSubTypes.TryGetValue(subTypeName, out var getSubType);

                // Sub-types are never referenced directly in the Swagger
                // discriminator scenario, so they wouldn't be added to the
                // produced resource schema. By calling ParseCompositeType() on the
                // sub-type we add the sub-type to the resource schema.
                var polymorphicType = ParseCompositeType(putSubType, getSubType, false);

                if (namedDefinitions[subTypeName] is ObjectType objectType)
                {
                    var discriminatorEnum = GetDiscriminatorType(putSubType, getSubType);
                    objectType.Properties[discriminatedObjectType.Discriminator] = new ObjectProperty(
                        type: factory.GetReference(discriminatorEnum),
                        flags: ObjectPropertyFlags.Required
                    );
                }

                discriminatedObjectType.Elements[subTypeName] = factory.GetReference(polymorphicType);
            }
        }

        private TypeBase ParseEnumType(EnumType? putType, EnumType? getType)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);
            var enumTypes = new List<TypeBase>();

            foreach (var enumValue in combinedType.Values)
            {
                var stringLiteralType = factory.Create(() => new StringLiteralType(enumValue.SerializedName));
                enumTypes.Add(stringLiteralType);
            }

            if (enumTypes.Count == 1)
            {
                return enumTypes.Single();
            }

            return factory.Create(() => new UnionType(enumTypes.Select(x => factory.GetReference(x)).ToArray()));
        }

        private TypeBase ParsePrimaryType(PrimaryType? putType, PrimaryType? getType)
        {
            var combinedType = CombineAndThrowIfNull(putType, getType);

            switch (combinedType.KnownPrimaryType)
            {
                case KnownPrimaryType.Boolean:
                    return builtInTypes[BuiltInTypeKind.Bool];
                case KnownPrimaryType.Int:
                case KnownPrimaryType.Long:
                case KnownPrimaryType.UnixTime:
                case KnownPrimaryType.Double:
                case KnownPrimaryType.Decimal:
                    return builtInTypes[BuiltInTypeKind.Int];
                case KnownPrimaryType.Object:
                    return builtInTypes[BuiltInTypeKind.Any];
                case KnownPrimaryType.ByteArray:
                    return builtInTypes[BuiltInTypeKind.Array];
                case KnownPrimaryType.Base64Url:
                case KnownPrimaryType.Date:
                case KnownPrimaryType.DateTime:
                case KnownPrimaryType.String:
                case KnownPrimaryType.TimeSpan:
                case KnownPrimaryType.Uuid:
                case KnownPrimaryType.DateTimeRfc1123:
                    return builtInTypes[BuiltInTypeKind.String];
                default:
                    Debug.Assert(false, "Unrecognized known property type: " + combinedType.KnownPrimaryType);
                    return builtInTypes[BuiltInTypeKind.Any];
            }
        }

        private TypeBase CreateConstantResourceName(ResourceDescriptor descriptor, string nameValue)
        {
            if (descriptor.IsRootType)
            {
                return factory.Create(() => new StringLiteralType(nameValue));
            }

            return builtInTypes[BuiltInTypeKind.String];
        }

        private TypeBase ParseSequenceType(SequenceType? putType, SequenceType? getType)
        {
            var itemType = ParseType(putType?.ElementType, getType?.ElementType);

            if (itemType == null)
            {
                return builtInTypes[BuiltInTypeKind.Array];
            }

            return factory.Create(() => new ArrayType(factory.GetReference(itemType)));
        }

        private static T CombineAndThrowIfNull<T>(T? putType, T? getType)
            => putType ?? getType ?? throw new ArgumentNullException($"Unable to find PUT or GET type for {typeof(T)}");
    }
}