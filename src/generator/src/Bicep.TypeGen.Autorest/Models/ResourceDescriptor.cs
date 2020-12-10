// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core.Model;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Azure.Bicep.TypeGen.Autorest.Models
{
    [DebuggerDisplay("{FullyQualifiedType}@{ApiVersion} ({ScopeType})")]
    public class ResourceDescriptor
    {
        public ScopeType ScopeType { get; set; }

        public string ProviderNamespace { get; set; }

        public IReadOnlyList<string> ResourceTypeSegments { get; set; }

        public string ApiVersion { get; set; }

        public bool HasVariableName { get; set; }

        public XmsMetadata XmsMetadata { get; set; }

        public string FullyQualifiedType => FormatFullyQualifiedType(ProviderNamespace, ResourceTypeSegments);

        public bool IsRootType => ResourceTypeSegments.Count == 1;

        public static string FormatFullyQualifiedType(string providerNamespace, IEnumerable<string> resourceTypeSegments)
            => $"{providerNamespace}/{FormatUnqualifiedType(resourceTypeSegments)}";

        public static string FormatUnqualifiedType(IEnumerable<string> resourceTypeSegments)
            => string.Join('/', resourceTypeSegments);

        public static IEqualityComparer<ResourceDescriptor> Comparer { get; }
            = new EqualityComparer();

        private class EqualityComparer : IEqualityComparer<ResourceDescriptor>
        {
            public bool Equals(ResourceDescriptor x, ResourceDescriptor y)
                => x.ScopeType == y.ScopeType &&
                    StringComparer.OrdinalIgnoreCase.Equals(x.FullyQualifiedType, y.FullyQualifiedType) &&
                    StringComparer.OrdinalIgnoreCase.Equals(x.ApiVersion, y.ApiVersion) &&
                    x.HasVariableName == y.HasVariableName;

            public int GetHashCode(ResourceDescriptor obj)
                => obj.ScopeType.GetHashCode() ^
                    StringComparer.OrdinalIgnoreCase.GetHashCode(obj.FullyQualifiedType) ^
                    StringComparer.OrdinalIgnoreCase.GetHashCode(obj.ApiVersion) ^
                    obj.HasVariableName.GetHashCode();
        }
    }
}