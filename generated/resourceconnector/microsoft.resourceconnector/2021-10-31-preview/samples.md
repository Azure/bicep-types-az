# Microsoft.ResourceConnector
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
