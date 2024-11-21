# Microsoft.Network

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
