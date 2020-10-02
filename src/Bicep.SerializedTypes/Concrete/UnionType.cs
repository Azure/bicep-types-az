// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Bicep.SerializedTypes.Concrete
{
    public class UnionType : TypeBase
    {
        public ITypeReference[]? Elements { get; set; }
    }
}