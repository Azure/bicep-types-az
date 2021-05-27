// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Text.Json;

namespace Azure.Bicep.Types.Az.Index
{
    public static class TypeIndexer
    {
        public static TypeIndex DeserializeIndex(string content)
        {
            return JsonSerializer.Deserialize<TypeIndex>(content) ?? throw new JsonException("Failed to deserialize index");
        }
    }
}