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
            foreach (var kvp in typeLoader.ListAllAvailableTypes())
            {
                var resourceType = typeLoader.LoadResourceType(kvp.Value);
            }
        }
    }
}