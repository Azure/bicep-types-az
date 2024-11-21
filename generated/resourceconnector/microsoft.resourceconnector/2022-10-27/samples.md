# Microsoft.ResourceConnector

## microsoft.resourceconnector/appliances

Create/Update Appliance
```bicep
resource exampleResource 'Microsoft.ResourceConnector/appliances@2022-10-27' = {
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
