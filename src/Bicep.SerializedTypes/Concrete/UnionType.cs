namespace Bicep.SerializedTypes.Concrete
{
    public class UnionType : TypeBase
    {
        public ITypeReference[]? Elements { get; set; }
    }
}