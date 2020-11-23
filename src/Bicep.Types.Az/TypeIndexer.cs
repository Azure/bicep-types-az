// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.Az
{
    public static class TypeIndexer
    {
        public static IReadOnlyDictionary<string, TypeLocation> DeserializeIndex(string content)
        {
            return JsonSerializer.Deserialize<Dictionary<string, TypeLocation>>(content) ?? throw new JsonException("Failed to deserialize index");
        }
    }
}