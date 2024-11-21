# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2017-08-15' = {
  name: 'example'
}
```

## microsoft.netapp/netappaccounts/capacitypools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2017-08-15' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2017-08-15' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2017-08-15' = {
  parent: parentResource 
  name: 'example'
}
```
