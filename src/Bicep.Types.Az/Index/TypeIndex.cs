// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;

namespace Azure.Bicep.Types.Az.Index
{
    public class TypeIndex
    {
        public TypeIndex(
            IReadOnlyDictionary<string, TypeLocation> types,
            IReadOnlyDictionary<string, IReadOnlyList<TypeLocation>> functions)
        {
            Types = types;
            Functions = functions;
        }

        public IReadOnlyDictionary<string, TypeLocation> Types { get; }

        public IReadOnlyDictionary<string, IReadOnlyList<TypeLocation>> Functions { get; }
    }
}