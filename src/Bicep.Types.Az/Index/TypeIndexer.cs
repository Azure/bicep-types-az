// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.Az.Index
{
    public static class TypeIndexer
    {
        public static IndexedTypes DeserializeIndex(string content)
        {
            return JsonSerializer.Deserialize<IndexedTypes>(content) ?? throw new JsonException("Failed to deserialize index");
        }
    }
}