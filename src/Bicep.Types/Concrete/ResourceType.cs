// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;

namespace Azure.Bicep.Types.Concrete
{
    public class ResourceType : TypeBase
    {
        public string? Name { get; set; }
        
        public ITypeReference? Body { get; set; }
    }
}