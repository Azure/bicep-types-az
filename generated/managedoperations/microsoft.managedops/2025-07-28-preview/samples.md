# Microsoft.ManagedOps
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managedops/managedops

ManagedOps_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ManagedOps/managedOps@2025-07-28-preview' = {
  name: 'example'
  properties: {
    desiredConfiguration: {
      azureMonitorInsights: {
        azureMonitorWorkspaceId: '/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/myResourceGroup/providers/Microsoft.Monitor/accounts/example'
      }
      changeTrackingAndInventory: {
        logAnalyticsWorkspaceId: '/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/myResourceGroup/providers/Microsoft.OperationalInsights/workspaces/00000000-0000-0000-0000-000000000000-Default'
      }
      userAssignedManagedIdentityId: '/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myManagedIdentity'
    }
  }
}
```
