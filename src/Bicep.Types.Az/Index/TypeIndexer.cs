// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Azure.Bicep.Types.Az.Index
{
    public static class TypeIndexer
    {
        private static readonly JsonSerializerOptions SerializeOptions = new JsonSerializerOptions
        {
            DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        };

        public static TypeIndex DeserializeIndex(string content)
        {
            return JsonSerializer.Deserialize<TypeIndex>(content, SerializeOptions) ?? throw new JsonException("Failed to deserialize index");
        }

        public static TypeIndex DeserializeIndex(Stream contentStream)
        {
            return JsonSerializer.Deserialize<TypeIndex>(contentStream, SerializeOptions) ?? throw new JsonException("Failed to deserialize index");
        }
    }
}