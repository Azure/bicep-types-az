// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public enum ScopeType
    {
        Unknown = 0,
        Tenant,
        Subcription,
        ResourceGroup,
        ManagementGroup,
        Extension,
    }
}