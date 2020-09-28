using System;
using System.Collections.Generic;

namespace Bicep.SerializedTypes.Concrete
{
    public class ObjectType : TypeBase
    {
        public string? Name { get; set; }

        public IDictionary<string, ObjectProperty>? Properties { get; set; }

        public ITypeReference? AdditionalProperties { get; set; }
    }

    [Flags]
    public enum ObjectPropertyFlags
    {
        None = 0,

        Required = 1 << 0,

        ReadOnly = 1 << 1,

        WriteOnly = 1 << 2,

        DeployTimeConstant = 1 << 3,
    }

    public class ObjectProperty
    {
        public ITypeReference? Type { get; set; }

        public ObjectPropertyFlags Flags { get; set; }
    }
}