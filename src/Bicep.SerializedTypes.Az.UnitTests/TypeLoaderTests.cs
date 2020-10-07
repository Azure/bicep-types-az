// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Bicep.SerializedTypes.Az;

namespace Bicep.SerializedTypes.Az.UnitTests
{
    [TestClass]
    public class TypeLoaderTests
    {
        [TestMethod]
        public void TypeLoader_can_load_all_types_without_throwing()
        {
            foreach (var (providerNamespace, apiVersion) in TypeLoader.ListAvailableProviders())
            {
                var types = TypeLoader.LoadTypes(providerNamespace, apiVersion);
            }
        }
    }
}