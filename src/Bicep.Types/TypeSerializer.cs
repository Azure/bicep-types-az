// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using Azure.Bicep.Types.Concrete;
using Azure.Bicep.Types.Serialization;

namespace Azure.Bicep.Types
{
    public static class TypeSerializer
    {
        public static string Serialize(TypeBase[] types)
        {
            var factory = new TypeFactory(types);

            var serializeOptions = new JsonSerializerOptions
            {
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
            };
            serializeOptions.Converters.Add(new TypeBaseConverter(factory));

            return JsonSerializer.Serialize(types, serializeOptions);
        }

        public static TypeBase[] Deserialize(string content)
        {
            var factory = new TypeFactory(Enumerable.Empty<TypeBase>());

            var serializeOptions = new JsonSerializerOptions
            {
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
            };
            serializeOptions.Converters.Add(new TypeBaseConverter(factory));

            var types = JsonSerializer.Deserialize<TypeBase[]>(content, serializeOptions) ?? throw new JsonException("Failed to deserialize content");

            factory.Hydrate(types);

            return types;
        }
    }
}