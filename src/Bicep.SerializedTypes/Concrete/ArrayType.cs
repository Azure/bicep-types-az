namespace Bicep.SerializedTypes.Concrete
{
    public class ArrayType : TypeBase
    {
        public ITypeReference? ItemType { get; set; }
    }
}