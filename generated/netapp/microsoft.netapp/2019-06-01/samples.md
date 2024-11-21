# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2019-06-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/capacitypools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    serviceLevel: 'Premium'
    size: 4398046511104
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    creationToken: 'my-unique-file-path'
    serviceLevel: 'Premium'
    subnetId: '/subscriptions/9760acf5-4638-11e7-9bdb-020073ca7778/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
    usageThreshold: 107374182400
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2019-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```
