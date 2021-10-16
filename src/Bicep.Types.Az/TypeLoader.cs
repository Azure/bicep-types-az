// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using Azure.Bicep.Types.Az.Index;
using Azure.Bicep.Types.Concrete;

namespace Azure.Bicep.Types.Az
{
    public class TypeLoader : ITypeLoader
    {
        private const string TypeContainerName = "types.json";
        private const string TypeIndexResourceName = "index.json";

        private TypeBase LoadType(TypeLocation typeLocation)
        {
            var content = GetContentAtPath(typeLocation.RelativePath);

            var types = TypeSerializer.Deserialize(content);

            return types[typeLocation.Index];
        }

        public ResourceType LoadResourceType(TypeLocation typeLocation)
        {
            if (LoadType(typeLocation) is not ResourceType resourceType)
            {
                throw new ArgumentException($"Unable to locate resource type at index {typeLocation.Index} in \"{typeLocation.RelativePath}\" resource");
            }

            return resourceType;
        }

        public ResourceFunctionType LoadResourceFunctionType(TypeLocation typeLocation)
        {
            if (LoadType(typeLocation) is not ResourceFunctionType resourceFunctionType)
            {
                throw new ArgumentException($"Unable to locate resource function type at index {typeLocation.Index} in \"{typeLocation.RelativePath}\" resource");
            }

            return resourceFunctionType;
        }

        public string GetContentAtPath(string? path)
        {
            _ = path ?? throw new ArgumentNullException(nameof(path));

            var fileStream = typeof(TypeLoader).Assembly.GetManifestResourceStream($"{path}.deflated");
            if (fileStream is null)
            {
                throw new ArgumentException($"Unable to locate manifest resource at path {path}", nameof(path));
            }

            using (fileStream)
            using (var decompressStream = new DeflateStream(fileStream, CompressionMode.Decompress))
            using (var streamReader = new StreamReader(decompressStream))
            {
                return streamReader.ReadToEnd();
            }
        }

        public TypeIndex GetIndexedTypes()
        {
            var content = GetContentAtPath(TypeIndexResourceName);

            return TypeIndexer.DeserializeIndex(content);
        }
    }
}