// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace Bicep.SerializedTypes.Concrete
{
    public class ResourceFunctionType : TypeBase
    {
        public string? Name { get; set; }
        
        public ITypeReference? Resource { get; set; }
        
        public ITypeReference? Output { get; set; }
    }
}