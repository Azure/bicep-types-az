// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;

namespace Azure.Bicep.TypeGen.Autorest.Plugin
{
    public sealed class BicepTypesPlugin : Plugin<IGeneratorSettings, CodeModelTransformer<CodeModel>, BicepTypesCodeGenerator, CodeNamer, CodeModel>
    {
    }
}