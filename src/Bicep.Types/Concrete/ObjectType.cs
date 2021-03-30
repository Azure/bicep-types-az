// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;

namespace Azure.Bicep.Types.Concrete
{
    public class ObjectType : TypeBase
    {
        public ObjectType(string name, IDictionary<string, ObjectProperty> properties, ITypeReference? additionalProperties)
        {
            Name = name;
            Properties = properties;
            AdditionalProperties = additionalProperties;
        }

        public string Name { get; set; }

        public IDictionary<string, ObjectProperty> Properties { get; set; }

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
        public ObjectProperty(ITypeReference type, ObjectPropertyFlags flags, string? description)
        {
            Type = type;
            Flags = flags;
            Description = description;
        }

        public ITypeReference Type { get; set; }

        public ObjectPropertyFlags Flags { get; set; }

        public string? Description { get; }
    }
}