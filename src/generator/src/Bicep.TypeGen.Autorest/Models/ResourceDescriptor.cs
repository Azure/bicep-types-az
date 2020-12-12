// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    [DebuggerDisplay("{FullyQualifiedType}@{ApiVersion} ({ScopeType})")]
    public record ResourceDescriptor(
        ScopeType ScopeType,
        string ProviderNamespace,
        IReadOnlyList<string> ResourceTypeSegments,
        string ApiVersion,
        string ConstantName,
        XmsMetadata XmsMetadata
    )
    {
        public string FullyQualifiedType => FormatFullyQualifiedType(ProviderNamespace, ResourceTypeSegments);

        public bool IsRootType => ResourceTypeSegments.Count == 1;

        public static string FormatFullyQualifiedType(string providerNamespace, IEnumerable<string> resourceTypeSegments)
            => $"{providerNamespace}/{FormatUnqualifiedType(resourceTypeSegments)}";

        public static string FormatUnqualifiedType(IEnumerable<string> resourceTypeSegments)
            => string.Join('/', resourceTypeSegments);
    }
}