// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Bicep.SerializedTypes.Concrete;

namespace Bicep.SerializedTypes.Az
{
    public static class TypeLoader
    {
        private const string typeContainerName = "types.json";

        private static string GetTypeContainerResourceName(string providerNamespace, string apiVersion)
            => $"{providerNamespace}/{apiVersion}/{typeContainerName}".ToLowerInvariant();

        public static IEnumerable<TypeBase> LoadTypes(string providerNamespace, string apiVersion)
        {
            var streamName = GetTypeContainerResourceName(providerNamespace, apiVersion);
            var fileStream = typeof(TypeLoader).Assembly.GetManifestResourceStream(streamName);

            if (fileStream == null)
            {
                return Enumerable.Empty<TypeBase>();
            }

            using (fileStream)
            using (var streamReader = new StreamReader(fileStream))
            {
                var content = streamReader.ReadToEnd();

                return TypeSerializer.Deserialize(content);
            }
        }

        public static IEnumerable<(string providerNamespace, string apiVersion)> ListAvailableProviders()
        {
            foreach (var fileName in typeof(TypeLoader).Assembly.GetManifestResourceNames())
            {
                var splitPath = fileName.Split('/');
                if (splitPath.Length != 3 || splitPath[2] != typeContainerName)
                {
                    throw new InvalidOperationException($"Found unexpected manifest file {fileName}");
                }

                yield return (splitPath[0], splitPath[1]);                
            }
        }
    }
}