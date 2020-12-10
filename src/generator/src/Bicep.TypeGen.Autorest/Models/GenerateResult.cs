// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;
using System.Collections.Immutable;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public class GenerateResult
    {
        public GenerateResult(string providerNamespace, string apiVersion, TypeFactory typeFactory, IEnumerable<ResourceDescriptor> resourceDescriptors)
        {
            ProviderNamespace = providerNamespace;
            ApiVersion = apiVersion;
            TypeFactory = typeFactory;
            ResourceDescriptors = resourceDescriptors.ToImmutableArray();
        }

        public string ProviderNamespace { get; }
        public string ApiVersion { get; }
        public TypeFactory TypeFactory { get; }
        public ImmutableArray<ResourceDescriptor> ResourceDescriptors { get; }
    }
}