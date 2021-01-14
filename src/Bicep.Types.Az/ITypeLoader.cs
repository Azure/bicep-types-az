// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;
using Azure.Bicep.Types.Az.Index;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.Az
{
    public interface ITypeLoader
    {
        IEnumerable<TypeBase> LoadTypes(string providerNamespace, string apiVersion);

        ResourceType LoadResourceType(TypeLocation location);

        IndexedTypes GetIndexedTypes();
    }
}