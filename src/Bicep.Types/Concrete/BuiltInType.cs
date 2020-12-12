// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Azure.Bicep.Types.Concrete
{
    public enum BuiltInTypeKind
    {
        Any = 1,
        Null = 2,
        Bool = 3,
        Int = 4,
        String = 5,
        Object = 6,
        Array = 7,
        ResourceRef = 8,
    }

    public class BuiltInType : TypeBase
    {
        public BuiltInType(BuiltInTypeKind kind)
        {
            Kind = kind;
        }

        public BuiltInTypeKind Kind { get; set; }
    }
}