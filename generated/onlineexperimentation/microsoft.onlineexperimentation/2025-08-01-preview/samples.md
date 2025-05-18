# Microsoft.OnlineExperimentation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.onlineexperimentation/workspaces

Create or update an OnlineExperimentationWorkspace with Free sku and customer managed key.
```bicep
resource exampleResource 'Microsoft.OnlineExperimentation/workspaces@2025-08-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
    }
  }
  location: 'eastus2'
  properties: {
    appConfigurationResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.AppConfiguration/configurationStores/appconfig9871'
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyIdentity: {
          identityType: 'UserAssignedIdentity'
          userAssignedIdentityResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1'
        }
        keyEncryptionKeyUrl: 'https://contosovault.vault.azure.net/keys/contosokek'
      }
    }
    logAnalyticsWorkspaceResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.OperationalInsights/workspaces/log9871'
    logsExporterStorageAccountResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.Storage/storageAccounts/sto9871'
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'F0'
  }
  tags: {
    newKey: 'newVal'
  }
}
```

Create or update an OnlineExperimentationWorkspace with Free sku.
```bicep
resource exampleResource 'Microsoft.OnlineExperimentation/workspaces@2025-08-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
    }
  }
  location: 'eastus2'
  properties: {
    appConfigurationResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.AppConfiguration/configurationStores/appconfig9871'
    logAnalyticsWorkspaceResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.OperationalInsights/workspaces/log9871'
    logsExporterStorageAccountResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.Storage/storageAccounts/sto9871'
  }
  sku: {
    name: 'F0'
  }
  tags: {
    newKey: 'newVal'
  }
}
```

Create or update an OnlineExperimentationWorkspace with public network access disabled.
```bicep
resource exampleResource 'Microsoft.OnlineExperimentation/workspaces@2025-08-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
    }
  }
  location: 'eastus2'
  properties: {
    appConfigurationResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.AppConfiguration/configurationStores/appconfig9871'
    logAnalyticsWorkspaceResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.OperationalInsights/workspaces/log9871'
    logsExporterStorageAccountResourceId: '/subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/res9871/providers/Microsoft.Storage/storageAccounts/sto9871'
    publicNetworkAccess: 'Disabled'
  }
  sku: {
    name: 'S0'
  }
  tags: {
    newKey: 'newVal'
  }
}
```

## microsoft.onlineexperimentation/workspaces/privateendpointconnections

Updates the Private Endpoint Connection.
```bicep
resource exampleResource 'Microsoft.OnlineExperimentation/workspaces/privateEndpointConnections@2025-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'y'
      actionsRequired: 'afwbq'
      status: 'Approved'
    }
  }
}
```
