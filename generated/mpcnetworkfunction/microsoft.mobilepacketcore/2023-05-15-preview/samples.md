# Microsoft.MobilePacketCore

## microsoft.mobilepacketcore/networkfunctions

NetworkFunctions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.MobilePacketCore/networkFunctions@2023-05-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    capacity: 100000
    deploymentNotes: 'string'
    networkFunctionAdministrativeState: 'Commissioned'
    networkFunctionType: 'SMF'
    sku: 'NexusProduction'
    userDescription: 'string'
  }
}
```
