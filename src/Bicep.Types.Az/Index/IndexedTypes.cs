// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;

namespace Azure.Bicep.Types.Az.Index
{
    public class IndexedTypes
    {
        public IndexedTypes(
            IReadOnlyDictionary<string, TypeLocation> tenant,
            IReadOnlyDictionary<string, TypeLocation> managementGroup,
            IReadOnlyDictionary<string, TypeLocation> subscription,
            IReadOnlyDictionary<string, TypeLocation> resourceGroup,
            IReadOnlyDictionary<string, TypeLocation> extension)
        {
            Tenant = tenant;
            ManagementGroup = managementGroup;
            Subscription = subscription;
            ResourceGroup = resourceGroup;
            Extension = extension;
        }

        public IReadOnlyDictionary<string, TypeLocation> Tenant { get; }

        public IReadOnlyDictionary<string, TypeLocation> ManagementGroup { get; }

        public IReadOnlyDictionary<string, TypeLocation> Subscription { get; }

        public IReadOnlyDictionary<string, TypeLocation> ResourceGroup { get; }

        public IReadOnlyDictionary<string, TypeLocation> Extension { get; }
    }
}