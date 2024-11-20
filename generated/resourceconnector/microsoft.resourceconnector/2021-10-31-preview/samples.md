# Microsoft.ResourceConnector

## microsoft.resourceconnector/appliances

Create/Update Appliance
```bicep
resource exampleResource 'Microsoft.ResourceConnector/appliances@2021-10-31-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    distro: 'AKSEdge'
    infrastructureConfig: {
      provider: 'VMWare'
    }
  }
}
```
