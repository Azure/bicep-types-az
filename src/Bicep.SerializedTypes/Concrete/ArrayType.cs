// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Bicep.SerializedTypes.Concrete
{
    public class ArrayType : TypeBase
    {
        public ITypeReference? ItemType { get; set; }
    }
}