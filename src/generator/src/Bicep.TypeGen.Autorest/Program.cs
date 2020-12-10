// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Extensibility;
using AutoRest.Core.Model;
using AutoRest.Core.Parsing;
using AutoRest.Core.Utilities;
using Microsoft.Perks.JsonRPC;
using Azure.Bicep.TypeGen.Autorest.Plugin;
using IAnyPlugin = AutoRest.Core.Extensibility.IPlugin<AutoRest.Core.Extensibility.IGeneratorSettings, AutoRest.Core.IModelSerializer<AutoRest.Core.Model.CodeModel>, AutoRest.Core.ITransformer<AutoRest.Core.Model.CodeModel>, AutoRest.Core.CodeGenerator, AutoRest.Core.CodeNamer, AutoRest.Core.Model.CodeModel>;

namespace Azure.Bicep.TypeGen.Autorest
{
    public static class ExtensionsLoader
    {
        public static IAnyPlugin GetPlugin(string name)
        {
            switch (name)
            {
                case "AzureResourceSchema": return new BicepTypesPlugin();
            }
            throw new Exception("Unknown plugin: " + name);
        }
    }

    public class Program : NewPlugin
    {
        private static IEnumerable<string> PluginNames = new []{ "azureresourceschema", "imodeler2" };

        public static int Main(string[] args )
        {
            if(args != null && args.Length > 0 && args[0] == "--server") {
                var connection = new Connection(Console.OpenStandardOutput(), Console.OpenStandardInput());
                connection.Dispatch<IEnumerable<string>>("GetPluginNames", () => Task.FromResult(PluginNames));
                
                connection.Dispatch<string, string, bool>("Process", (plugin, sessionId) => {
                    if( plugin == "imodeler2") {
                        return  new  AutoRest.Modeler.ModelerPlugin(connection, plugin, sessionId).Process();
                    } 
                    return new Program(connection, plugin, sessionId).Process();
                });
                 
                connection.DispatchNotification("Shutdown", connection.Stop);

                // wait for something to do.
                connection.GetAwaiter().GetResult();

                Console.Error.WriteLine("Shutting Down");
                return 0;
            }
            Console.WriteLine("This is not an entry point.");
            Console.WriteLine("Please invoke this extension through AutoRest.");
            return 1;
        }

        public Program(Connection connection, string plugin, string sessionId) : base(connection, plugin, sessionId) { }

        private T GetXmsCodeGenSetting<T>(CodeModel codeModel, string name)
        {
            try
            {
                return (T)Convert.ChangeType(
                    codeModel.CodeGenExtensions[name], 
                    typeof(T).GenericTypeArguments.Length == 0 ? typeof(T) : typeof(T).GenericTypeArguments[0] // un-nullable
                );
            }
            catch
            {
                return default(T);
            }
        }

        protected override async Task<bool> ProcessInternal()
        {
            var files = await ListInputs();
            if (files.Length != 1)
            {
                throw new Exception($"Generator received incorrect number of inputs: {files.Length} : {string.Join(",", files)}");
            }
            var modelAsJson = (await ReadFile(files[0])).EnsureYamlIsJson();

            // build settings
            
            new Settings
            {
                Host = this
            };

            // process
            var plugin = new BicepTypesPlugin();
            
            using (plugin.Activate())
            {
                var codeModel = plugin.Serializer.Load(modelAsJson);
                codeModel = plugin.Transformer.TransformCodeModel(codeModel);
                await plugin.CodeGenerator.Generate(codeModel);
            }

            // write out files
            var outFS = Settings.Instance.FileSystemOutput;
            var outFiles = outFS.GetFiles("", "*", System.IO.SearchOption.AllDirectories);
            foreach (var outFile in outFiles)
            {
                WriteFile(outFile, outFS.ReadAllText(outFile), null);
            }

            return true;
        }
    }
}