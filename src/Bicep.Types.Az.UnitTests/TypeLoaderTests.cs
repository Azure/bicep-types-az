// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Azure.Bicep.Types.Az;
using FluentAssertions;
using System.Linq;

namespace Azure.Bicep.Types.Az.UnitTests
{
    [TestClass]
    public class TypeLoaderTests
    {
        [TestMethod]
        public void TypeLoader_can_load_all_types_without_throwing()
        {
            var typeLoader = new TypeLoader();
            var indexedTypes = typeLoader.GetIndexedTypes();

            foreach (var kvp in indexedTypes.Types)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }

            foreach (var (resourceType, functionsByApiVersion) in indexedTypes.Functions)
            {
                foreach (var (apiVersion, functions) in functionsByApiVersion)
                {
                    foreach (var functionLocation in functions)
                    {
                        var resourceFunctionType = typeLoader.LoadResourceFunctionType(functionLocation);
                    }
                }
            }
        }

        [TestMethod]
        public void TypeLoader_type_keys_are_insensitively_unique()
        {
            var typeLoader = new TypeLoader();
            var indexedTypes = typeLoader.GetIndexedTypes();

            indexedTypes.Types.Keys.Select(x => x.ToLowerInvariant()).Should().OnlyHaveUniqueItems();
            indexedTypes.Functions.Keys.Select(x => x.ToLowerInvariant()).Should().OnlyHaveUniqueItems();
            foreach (var functionsByApiVersion in indexedTypes.Functions.Values)
            {
                functionsByApiVersion.Keys.Select(x => x.ToLowerInvariant()).Should().OnlyHaveUniqueItems();
            }
        }
    }
}