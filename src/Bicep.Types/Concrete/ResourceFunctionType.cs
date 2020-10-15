// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Azure.Bicep.Types.Concrete
{
    public class ResourceFunctionType : TypeBase
    {
        public ResourceFunctionType(string name, ITypeReference resource, ITypeReference output, ITypeReference? input)
        {
            Name = name;
            Resource = resource;
            Output = output;
            Input = input;
        }

        public string Name { get; set; }
        
        public ITypeReference Resource { get; set; }
        
        public ITypeReference Output { get; set; }

        public ITypeReference? Input { get; set; }
    }
}