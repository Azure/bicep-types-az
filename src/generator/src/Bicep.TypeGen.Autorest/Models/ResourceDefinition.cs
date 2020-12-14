// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core.Model;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public record ResourceDefinition(
        ResourceDescriptor Descriptor,
        Method DeclaringMethod,
        Method? GetMethod
    )
    {
        public ResourceType? Type { get; set; }
    }
}