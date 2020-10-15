// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using AutoRest.Core.Model;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public record ProviderDefinition(
        string Namespace,
        string ApiVersion,
        CodeModel Model)
    {
        public IList<ResourceDefinition> ResourceDefinitions { get; } = new List<ResourceDefinition>();

        public IList<ResourceListActionDefinition> ResourceListActions { get; } = new List<ResourceListActionDefinition>();
    }
}