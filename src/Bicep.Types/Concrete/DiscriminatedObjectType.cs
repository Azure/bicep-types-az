// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;

namespace Azure.Bicep.Types.Concrete
{
    public class DiscriminatedObjectType : TypeBase
    {
        public string? Name { get; set; }

        public string? Discriminator { get; set; }

        public IDictionary<string, ObjectProperty>? BaseProperties { get; set; }

        public IDictionary<string, ITypeReference>? Elements { get; set; }
    }
}