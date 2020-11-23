// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.Serialization
{
    public interface ITypeReferenceResolver
    {
        int GetIndex(TypeBase type);

        ITypeReference GetTypeReference(int index);
    }
}