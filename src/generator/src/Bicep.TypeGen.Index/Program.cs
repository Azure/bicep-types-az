// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Azure.Bicep.Types;
using Azure.Bicep.Types.Az;
using Azure.Bicep.Types.Az.Index;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Index
{
    class Program
    {
        static void Main(string[] args)
        {
            var baseDir = args[0];
            var indexContent = BuildSerializedIndex(baseDir);
            var indexPath = Path.Combine(baseDir, "index.json");

            File.WriteAllText(indexPath, indexContent);
        }
        
        private static (TypeBase type, int index) GetTypeWithIndex(TypeBase type, int index)
            => (type, index);

        private static (string originalPath, string relativePath) GetRelativeAssemblyPath(string baseDir, string typeFile)
        {
            var relativePath = Path.GetFullPath(typeFile).Substring(Path.GetFullPath(baseDir).Length + 1)
                .Replace(Path.DirectorySeparatorChar, '/')
                .ToLowerInvariant();

            return (typeFile, relativePath);
        }

        private static IndexedTypes BuildIndex(string baseDir)
        {
            // Use a consistent sort order so that file system differences don't generate changes
            var typeFiles = Directory.GetFiles(baseDir, "types.json", SearchOption.AllDirectories)
                .Select(typeFile => GetRelativeAssemblyPath(baseDir, typeFile))
                .OrderBy(x => x.relativePath, StringComparer.OrdinalIgnoreCase);

            var tenant = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);
            var managementGroup = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);
            var subscription = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);
            var resourceGroup = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);
            var extension = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);

            foreach (var (originalPath, relativePath) in typeFiles)
            {
                var content = File.ReadAllText(originalPath);
                var indexedTypes = TypeSerializer.Deserialize(content).Select(GetTypeWithIndex);

                foreach (var (type, index) in indexedTypes.OrderBy(x => x.index))
                {
                    if (!(type is ResourceType resourceType))
                    {
                        continue;
                    }

                    if (resourceType.Name == null)
                    {
                        throw new ArgumentException($"Found resource with null resource name");
                    }

                    var typeLocation = new TypeLocation
                    {
                        RelativePath = relativePath,
                        Index = index,
                    };

                    if (resourceType.ScopeType == ScopeType.Unknown || resourceType.ScopeType.HasFlag(ScopeType.Tenant))
                    {
                        tenant[resourceType.Name] = typeLocation;
                    }

                    if (resourceType.ScopeType == ScopeType.Unknown || resourceType.ScopeType.HasFlag(ScopeType.ManagementGroup))
                    {
                        managementGroup[resourceType.Name] = typeLocation;
                    }

                    if (resourceType.ScopeType == ScopeType.Unknown || resourceType.ScopeType.HasFlag(ScopeType.Subscription))
                    {
                        subscription[resourceType.Name] = typeLocation;
                    }

                    if (resourceType.ScopeType == ScopeType.Unknown || resourceType.ScopeType.HasFlag(ScopeType.ResourceGroup))
                    {
                        resourceGroup[resourceType.Name] = typeLocation;
                    }

                    if (resourceType.ScopeType == ScopeType.Unknown || resourceType.ScopeType.HasFlag(ScopeType.Extension))
                    {
                        extension[resourceType.Name] = typeLocation;
                    }
                }
            }

            return new IndexedTypes(
                tenant,
                managementGroup,
                subscription,
                resourceGroup,
                extension);
        }

        public static string BuildSerializedIndex(string baseDir)
        {
            var output = BuildIndex(baseDir);
            
            return JsonSerializer.Serialize(output);
        }
    }
}
