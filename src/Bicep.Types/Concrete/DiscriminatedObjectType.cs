// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;

namespace Azure.Bicep.Types.Concrete
{
    public class DiscriminatedObjectType : TypeBase
    {
        public DiscriminatedObjectType(string name, string discriminator, IDictionary<string, ObjectProperty> baseProperties, IDictionary<string, ITypeReference> elements)
        {
            Name = name;
            Discriminator = discriminator;
            BaseProperties = baseProperties;
            Elements = elements;
        }

        public string Name { get; set; }

        public string Discriminator { get; set; }

        public IDictionary<string, ObjectProperty> BaseProperties { get; set; }

        public IDictionary<string, ITypeReference> Elements { get; set; }
    }
}