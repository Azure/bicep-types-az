# Microsoft.RecoveryServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.recoveryservices/vaults/backupfabrics/backupprotectionintent

Create or Update Azure Vm Protection Intent
```bicep
resource exampleResource 'Microsoft.RecoveryServices/vaults/backupFabrics/backupProtectionIntent@2017-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policyId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myRG/providers/Microsoft.RecoveryServices/vaults/myVault/backupPolicies/myPolicy'
    protectionIntentItemType: 'AzureResourceItem'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/chamsrgtest/providers/Microsoft.Compute/virtualMachines/chamscandel'
  }
}
```
