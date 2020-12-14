// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Azure.Bicep.Types.Concrete
{
    public class ResourceType : TypeBase
    {
        public ResourceType(string name, ScopeType scopeType, ITypeReference body)
        {
            Name = name;
            ScopeType = scopeType;
            Body = body;
        }

        public string Name { get; set; }

        public ScopeType ScopeType { get; set; }

        public ITypeReference Body { get; set; }
    }
}