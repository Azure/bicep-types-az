# Microsoft.VMwareCloudSimple
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.vmwarecloudsimple/dedicatedcloudservices

CreateDedicatedCloudService
```bicep
resource exampleResource 'Microsoft.VMwareCloudSimple/dedicatedCloudServices@2019-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    gatewaySubnet: '10.0.0.0'
  }
}
```
