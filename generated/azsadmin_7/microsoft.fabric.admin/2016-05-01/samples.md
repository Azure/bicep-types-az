# Microsoft.Fabric.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fabric.admin/fabriclocations/ippools

Create an IP pool.  Once created an IP pool cannot be deleted.
```bicep
resource exampleResource 'Microsoft.Fabric.Admin/fabricLocations/ipPools@2016-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '192.168.1.254'
    startIpAddress: '192.168.1.1'
  }
}
```
