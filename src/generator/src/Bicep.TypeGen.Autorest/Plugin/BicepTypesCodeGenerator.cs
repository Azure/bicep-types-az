// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities.Collections;
using Azure.Bicep.Types;
using Azure.Bicep.TypeGen.Autorest.Processors;

namespace Azure.Bicep.TypeGen.Autorest.Plugin
{
    public class BicepTypesCodeGenerator : CodeGenerator
    {
        public BicepTypesCodeGenerator()
        {
        }

        public override string ImplementationFileExtension => ".json";

        public override string UsageInstructions => $"Your Bicep type definitions can be found in the specified `output-folder`.";

        public override async Task Generate(CodeModel serviceClient)
        {
            var apiVersions = serviceClient.Methods
                .SelectMany(method => method.XMsMetadata.apiVersions)
                .Concat(new [] { serviceClient.ApiVersion })
                .Where(each => each != null)
                .Distinct().ToArray();

            foreach(var version in apiVersions)
            { 
                var results = CodeModelProcessor.GenerateTypes(serviceClient, version);

                foreach (var result in results)
                {
                    var generatedTypes = result.TypeFactory.GetTypes();

                    var typesJson = TypeSerializer.Serialize(generatedTypes);
                    await Write(typesJson, Path.Combine("types", result.ProviderNamespace.ToLowerInvariant(), result.ApiVersion.ToLowerInvariant(), "types.json"), false);

                    var typesMarkdown = new TypeMarkdownWriter(generatedTypes).Write(result.ProviderNamespace, result.ApiVersion);
                    await Write(typesMarkdown, Path.Combine("docs", result.ProviderNamespace.ToLowerInvariant(), result.ApiVersion.ToLowerInvariant(), "types.md"), false);
                }
            }
        }
    }
}
