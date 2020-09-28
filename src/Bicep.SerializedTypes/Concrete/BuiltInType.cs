namespace Bicep.SerializedTypes.Concrete
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
        public BuiltInTypeKind? Kind { get; set; }
    }
}