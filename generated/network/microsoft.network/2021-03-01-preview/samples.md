# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/networksecurityperimeters

Put Network Security Perimeter
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview' = {
  name: 'example'
  properties: {
    description: 'Description of TestNetworkSecurityPerimeter'
    displayName: 'TestNetworkSecurityPerimeter'
  }
}
```
