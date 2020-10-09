// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;
using Bicep.SerializedTypes.Concrete;

namespace Bicep.SerializedTypes.Az
{
    public interface ITypeLoader
    {
        IEnumerable<TypeBase> LoadTypes(string providerNamespace, string apiVersion);

        ResourceType LoadResourceType(TypeLocation location);

        IReadOnlyDictionary<string, TypeLocation> ListAllAvailableTypes();
    }
}