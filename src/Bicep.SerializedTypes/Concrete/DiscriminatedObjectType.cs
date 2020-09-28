using System.Collections.Generic;

namespace Bicep.SerializedTypes.Concrete
{
    public class DiscriminatedObjectType : TypeBase
    {
        public string? Name { get; set; }

        public string? Discriminator { get; set; }

        public IDictionary<string, ObjectProperty>? BaseProperties { get; set; }

        public IDictionary<string, ITypeReference>? Elements { get; set; }
    }
}