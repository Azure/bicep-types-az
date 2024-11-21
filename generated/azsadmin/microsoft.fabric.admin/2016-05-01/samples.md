# Microsoft.Fabric.Admin

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
