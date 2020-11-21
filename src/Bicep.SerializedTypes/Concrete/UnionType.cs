// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Azure.Bicep.Types.Concrete
{
    public class UnionType : TypeBase
    {
        public ITypeReference[]? Elements { get; set; }
    }
}