// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Azure.Bicep.Types.Concrete
{
    public class ResourceType : TypeBase
    {
        public string? Name { get; set; }

        public ScopeType? ScopeType { get; set; }
        
        public ITypeReference? Body { get; set; }
    }
}