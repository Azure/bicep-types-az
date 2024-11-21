# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/backupfabrics/protectioncontainers

RegisterAzure Storage ProtectionContainers
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/protectionContainers@2016-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backupManagementType: 'AzureWorkload'
    containerType: 'VMAppContainer'
    friendlyName: 'testSQL'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testRG/providers/Microsoft.Compute/virtualMachines/testSQL'
  }
}
```

## microsoft.recoveryservices/vaults/backupstorageconfig

Update Vault Storage Configuration
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupstorageconfig@2016-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageType: 'LocallyRedundant'
    storageTypeState: 'Unlocked'
  }
}
```
