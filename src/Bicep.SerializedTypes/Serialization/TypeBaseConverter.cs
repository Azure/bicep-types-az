// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using Bicep.SerializedTypes.Concrete;

namespace Bicep.SerializedTypes.Serialization
{
    public class TypeBaseConverter : JsonConverter<TypeBase>
    {
        private readonly JsonSerializerOptions serializerOptions;

        public TypeBaseConverter(TypeFactory factory)
        {
            serializerOptions = new JsonSerializerOptions
            {
                IgnoreNullValues = true,
            };
            serializerOptions.Converters.Add(new TypeReferenceConverter(factory));
        }

        public override bool CanConvert(Type typeToConvert) =>
            typeof(TypeBase).IsAssignableFrom(typeToConvert);

        private enum TypeBaseKind
        {
            BuiltInType = 1,
            ObjectType = 2,
            ArrayType = 3,
            ResourceType = 4,
            UnionType = 5,
            StringLiteralType = 6,
            DiscriminatedObjectType = 7,
        }

        public override TypeBase Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            if (reader.TokenType != JsonTokenType.StartObject)
            {
                throw new JsonException();
            }

            reader.Read();
            if (reader.TokenType != JsonTokenType.PropertyName)
            {
                throw new JsonException();
            }

            var propertyName = reader.GetString();
            if (!int.TryParse(propertyName, out var propertyInt))
            {
                throw new JsonException();
            }

            TypeBase type = (TypeBaseKind)propertyInt switch {
                TypeBaseKind.BuiltInType => JsonSerializer.Deserialize<BuiltInType>(ref reader, serializerOptions),
                TypeBaseKind.ObjectType => JsonSerializer.Deserialize<ObjectType>(ref reader, serializerOptions),
                TypeBaseKind.ArrayType => JsonSerializer.Deserialize<ArrayType>(ref reader, serializerOptions),
                TypeBaseKind.ResourceType => JsonSerializer.Deserialize<ResourceType>(ref reader, serializerOptions),
                TypeBaseKind.UnionType => JsonSerializer.Deserialize<UnionType>(ref reader, serializerOptions),
                TypeBaseKind.StringLiteralType => JsonSerializer.Deserialize<StringLiteralType>(ref reader, serializerOptions),
                TypeBaseKind.DiscriminatedObjectType => JsonSerializer.Deserialize<DiscriminatedObjectType>(ref reader, serializerOptions),
                _ => throw new JsonException(),
            };

            if (reader.TokenType != JsonTokenType.EndObject)
            {
                throw new JsonException();
            }

            reader.Read();

            return type;
        }

        public override void Write(Utf8JsonWriter writer, TypeBase value, JsonSerializerOptions options)
        {
            writer.WriteStartObject();

            var propertyEnum = value switch {
                BuiltInType _ => TypeBaseKind.BuiltInType,
                ObjectType _ => TypeBaseKind.ObjectType,
                ArrayType _ => TypeBaseKind.ArrayType,
                ResourceType _ => TypeBaseKind.ResourceType,
                UnionType _ => TypeBaseKind.UnionType,
                StringLiteralType _ => TypeBaseKind.StringLiteralType,
                DiscriminatedObjectType _ => TypeBaseKind.DiscriminatedObjectType,
                _ => throw new JsonException(),
            };

            writer.WritePropertyName(((int)propertyEnum).ToString());

            switch (value)
            {
                case BuiltInType builtInType:
                    JsonSerializer.Serialize(writer, builtInType, serializerOptions);
                    break;
                case ObjectType objectType:
                    JsonSerializer.Serialize(writer, objectType, serializerOptions);
                    break;
                case ArrayType arrayType:
                    JsonSerializer.Serialize(writer, arrayType, serializerOptions);
                    break;
                case ResourceType resourceType:
                    JsonSerializer.Serialize(writer, resourceType, serializerOptions);
                    break;
                case UnionType unionType:
                    JsonSerializer.Serialize(writer, unionType, serializerOptions);
                    break;
                case StringLiteralType stringLiteralType:
                    JsonSerializer.Serialize(writer, stringLiteralType, serializerOptions);
                    break;
                case DiscriminatedObjectType discriminatedObjectType:
                    JsonSerializer.Serialize(writer, discriminatedObjectType, serializerOptions);
                    break;
                default:
                    throw new JsonException();
            }

            writer.WriteEndObject();
        }
    }
}