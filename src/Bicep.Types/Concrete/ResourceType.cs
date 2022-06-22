// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;

namespace Azure.Bicep.Types.Concrete
{
    [Flags]
    public enum ResourceFlags
    {
        None = 0,
        ReadOnly = 1 << 0,
    }

    public class ResourceType : TypeBase
    {
        public ResourceType(string name, ScopeType scopeType, ScopeType? readOnlyScopes, ITypeReference body, ResourceFlags flags)
        {
            Name = name;
            ScopeType = scopeType;
            ReadOnlyScopes = readOnlyScopes;
            Body = body;
            Flags = flags;
        }

        public string Name { get; set; }

        public ScopeType ScopeType { get; set; }

        public ScopeType? ReadOnlyScopes { get; set; }

        public ITypeReference Body { get; set; }

        public ResourceFlags Flags { get; set; }
    }
}
