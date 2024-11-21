# Microsoft.NetApp

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
