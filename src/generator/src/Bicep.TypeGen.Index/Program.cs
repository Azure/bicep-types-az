// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using Azure.Bicep.Types;
using Azure.Bicep.Types.Az;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.TypeGen.Index
{
    class Program
    {
        static void Main(string[] args)
        {
            var baseDir = Path.Join(args[0], "types");
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

        private static IReadOnlyDictionary<string, TypeLocation> BuildIndex(string baseDir)
        {
            // Use a consistent sort order so that file system differences don't generate changes
            var typeFiles = Directory.GetFiles(baseDir, "types.json", SearchOption.AllDirectories)
                .Select(typeFile => GetRelativeAssemblyPath(baseDir, typeFile))
                .OrderBy(x => x.relativePath, StringComparer.OrdinalIgnoreCase);

            var typeDictionary = new Dictionary<string, TypeLocation>(StringComparer.OrdinalIgnoreCase);

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

                    if (typeDictionary.ContainsKey(resourceType.Name))
                    {
                        throw new ArgumentException($"Found duplicate resource definition for \"{resourceType.Name}\"");
                    }

                    typeDictionary.Add(resourceType.Name, new TypeLocation
                    {
                        RelativePath = relativePath,
                        Index = index,
                    });
                }
            }

            return typeDictionary;
        }

        public static string BuildSerializedIndex(string baseDir)
        {
            var output = BuildIndex(baseDir);
            
            return JsonSerializer.Serialize(output);
        }
    }
}
