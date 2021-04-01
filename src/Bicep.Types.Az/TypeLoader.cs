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
        private readonly ZipArchive zipArchive;

        public TypeLoader()
        {
            var zipArchiveStream = typeof(TypeLoader).Assembly.GetManifestResourceStream("generated_types.zip");
            this.zipArchive = new ZipArchive(zipArchiveStream);
        }

        private const string TypeContainerName = "types.json";
        private const string TypeIndexResourceName = "index.json";

        private static string GetTypeContainerResourceName(string providerNamespace, string apiVersion)
            => $"{providerNamespace}/{apiVersion}/{TypeContainerName}".ToLowerInvariant();

        public string? GetContentAtPath(string? path)
        {
            if (path is null ||
                zipArchive.GetEntry(path) is not {} streamEntry)
            {
                return null;
            }

            using (var fileStream = streamEntry.Open())
            using (var streamReader = new StreamReader(fileStream))
            {
                return streamReader.ReadToEnd();
            }
        }

        public IEnumerable<TypeBase> LoadTypes(string providerNamespace, string apiVersion)
        {
            var streamName = GetTypeContainerResourceName(providerNamespace, apiVersion);
            var content = GetContentAtPath(streamName);

            if (content is null)
            {
                return Enumerable.Empty<TypeBase>();
            }

            return TypeSerializer.Deserialize(content);
        }

        public ResourceType LoadResourceType(TypeLocation typeLocation)
        {
            var content = GetContentAtPath(typeLocation.RelativePath);
            if (content is null)
            {
                throw new ArgumentException($"Unable to locate type \"{typeLocation.RelativePath}\" resource");
            }

            var types = TypeSerializer.Deserialize(content);

            if (typeLocation.Index is not int intIndex ||
                types[intIndex] is not ResourceType resourceType)
            {
                throw new ArgumentException($"Unable to locate resource type at index {typeLocation.Index} in \"{typeLocation.RelativePath}\" resource");
            }

            return resourceType;
        }

        public TypeIndex GetIndexedTypes()
        {
            var content = GetContentAtPath(TypeIndexResourceName);
            if (content is null)
            {
                throw new ArgumentException("Unable to locate type index resource");
            }

            return TypeIndexer.DeserializeIndex(content);
        }
    }
}