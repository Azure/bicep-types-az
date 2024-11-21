# SplitIO.Experimentation

## splitio.experimentation/experimentationworkspaces

ExperimentationWorkspacesCreate
```bicep
resource exampleResource 'SplitIO.Experimentation/experimentationWorkspaces@2024-07-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
    }
  }
  location: 'eastus'
  properties: {
    accessPolicy: {
      applicationId: '0c05ca1a-879a-4848-8a39-abfe7238af0a'
      defaultRole: 'ExperimentationDataReader'
    }
    dataSource: {
      logAnalytics: {
        enabled: true
        resourceId: '/subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourceGroups/myResourceGroup/providers/Microsoft.OperationalInsights/workspaces/contosoworkspace'
        storageAccountResourceId: '/subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/contosostorage'
      }
    }
  }
  sku: {
    name: 'split_experimentation_azure_monthly_payg%%Monthly'
  }
  tags: {
  }
}
```
