// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core.Model;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public record ResourceListActionDefinition(
        ResourceDescriptor Descriptor,
        Method DeclaringMethod,
        string ActionName
    );
}