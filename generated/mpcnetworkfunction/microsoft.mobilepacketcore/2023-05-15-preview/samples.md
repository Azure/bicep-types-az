# Microsoft.MobilePacketCore
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
