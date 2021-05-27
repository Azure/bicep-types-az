// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.Collections.Generic;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    public record GenerateResult(
        string ProviderNamespace,
        string ApiVersion,
        TypeFactory TypeFactory);
}