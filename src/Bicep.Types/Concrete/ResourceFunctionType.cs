// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Azure.Bicep.Types.Concrete
{
    public class ResourceFunctionType : TypeBase
    {
        public ResourceFunctionType(string name, string resourceType, string apiVersion, ITypeReference output, ITypeReference? input)
        {
            Name = name;
            ResourceType = resourceType;
            ApiVersion = apiVersion;
            Output = output;
            Input = input;
        }

        public string Name { get; set; }
        
        public string ResourceType { get; set; }
        
        public string ApiVersion { get; set; }
        
        public ITypeReference Output { get; set; }

        public ITypeReference? Input { get; set; }
    }
}