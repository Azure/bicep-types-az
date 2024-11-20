# Microsoft.VMwareCloudSimple

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
