# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/backupstorageconfig

Update Vault Storage Configuration
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupstorageconfig@2023-01-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageType: 'LocallyRedundant'
    storageTypeState: 'Unlocked'
  }
}
```
