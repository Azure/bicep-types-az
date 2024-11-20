# Microsoft.Databricks

## microsoft.databricks/workspaces

Create a workspace which is ready for Customer-Managed Key (CMK) encryption
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
    parameters: {
      prepareEncryption: {
        value: true
      }
    }
  }
}
```

Create or update workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

Create or update workspace with custom parameters
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
    parameters: {
      customPrivateSubnetName: {
        value: 'myPrivateSubnet'
      }
      customPublicSubnetName: {
        value: 'myPublicSubnet'
      }
      customVirtualNetworkId: {
        value: '/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/myNetwork'
      }
    }
  }
}
```

Enable Customer-Managed Key (CMK) encryption on a workspace which is prepared for encryption
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
    parameters: {
      encryption: {
        value: {
          KeyName: 'myKeyName'
          keySource: 'Microsoft.Keyvault'
          keyvaulturi: 'https://myKeyVault.vault.azure.net/'
          keyversion: '00000000000000000000000000000000'
        }
      }
      prepareEncryption: {
        value: true
      }
    }
  }
}
```

Revert Customer-Managed Key (CMK) encryption to Microsoft Managed Keys encryption on a workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
    parameters: {
      encryption: {
        value: {
          keySource: 'Default'
        }
      }
    }
  }
}
```
