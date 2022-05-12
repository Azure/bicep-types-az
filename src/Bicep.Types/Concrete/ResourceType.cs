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
        WriteOnly = 1 << 1,
        Async = 1 << 2,
    }

    public class ResourceType : TypeBase
    {
        public ResourceType(string name, ScopeType scopeType, ITypeReference body, ResourceFlags flags)
        {
            Name = name;
            ScopeType = scopeType;
            Body = body;
            Flags = flags;
        }

        public string Name { get; set; }

        public ScopeType ScopeType { get; set; }

        public ITypeReference Body { get; set; }

        public ResourceFlags Flags { get; set; }
    }
}
