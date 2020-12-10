// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core.Model;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public class ResourceDefinition
    {
        public ResourceDescriptor Descriptor { get; set; }

        public Method DeclaringMethod { get; set; }

        public Method GetMethod { get; set; }

        public ResourceType Type { get; set; }
    }
}