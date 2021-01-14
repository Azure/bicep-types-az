// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Azure.Bicep.Types.Az;

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

            foreach (var kvp in indexedTypes.Tenant)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }

            foreach (var kvp in indexedTypes.ManagementGroup)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }

            foreach (var kvp in indexedTypes.Subscription)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }

            foreach (var kvp in indexedTypes.ResourceGroup)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }

            foreach (var kvp in indexedTypes.Extension)
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }
        }
    }
}