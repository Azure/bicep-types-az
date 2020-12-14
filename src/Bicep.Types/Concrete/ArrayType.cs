// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Azure.Bicep.Types.Concrete
{
    public class ArrayType : TypeBase
    {
        public ArrayType(ITypeReference itemType)
        {
            ItemType = itemType;
        }

        public ITypeReference ItemType { get; set; }
    }
}