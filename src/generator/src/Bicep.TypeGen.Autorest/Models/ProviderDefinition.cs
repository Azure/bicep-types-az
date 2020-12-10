// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using AutoRest.Core.Model;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public class ProviderDefinition
    {
        public string Namespace { get; set; }

        public string ApiVersion { get; set; }

        public CodeModel Model { get; set; }

        public IList<ResourceDefinition> ResourceDefinitions { get; } = new List<ResourceDefinition>();
    }
}