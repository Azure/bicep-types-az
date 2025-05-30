# Microsoft.Databricks
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.databricks/workspaces

Create a workspace which is ready for Customer-Managed Key (CMK) encryption
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
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

Create a workspace with Customer-Managed Key (CMK) encryption for Managed Disks
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    encryption: {
      entities: {
        managedDisk: {
          keySource: 'Microsoft.Keyvault'
          keyVaultProperties: {
            keyName: 'test-cmk-key'
            keyVaultUri: 'https://test-vault-name.vault.azure.net/'
            keyVersion: '00000000000000000000000000000000'
          }
          rotationToLatestKeyVersionEnabled: true
        }
      }
    }
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

Create or update a workspace with Enhanced Security & Compliance Add-On
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    enhancedSecurityCompliance: {
      automaticClusterUpdate: {
        value: 'Enabled'
      }
      complianceSecurityProfile: {
        complianceStandards: [
          'PCI_DSS'
          'HIPAA'
        ]
        value: 'Enabled'
      }
      enhancedSecurityMonitoring: {
        value: 'Enabled'
      }
    }
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

Create or update workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    defaultCatalog: {
      initialName: ''
      initialType: 'UnityCatalog'
    }
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

Create or update workspace with custom parameters
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    defaultCatalog: {
      initialName: ''
      initialType: 'HiveMetastore'
    }
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
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
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
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
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

Update a workspace with Customer-Managed Key (CMK) encryption for Managed Disks
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2023-09-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    encryption: {
      entities: {
        managedDisk: {
          keySource: 'Microsoft.Keyvault'
          keyVaultProperties: {
            keyName: 'test-cmk-key'
            keyVaultUri: 'https://test-vault-name.vault.azure.net/'
            keyVersion: '00000000000000000000000000000000'
          }
          rotationToLatestKeyVersionEnabled: true
        }
      }
    }
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
  tags: {
    mytag1: 'myvalue1'
  }
}
```

## microsoft.databricks/workspaces/privateendpointconnections

Update a private endpoint connection
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces/privateEndpointConnections@2023-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by databricksadmin@contoso.com'
      status: 'Approved'
    }
  }
}
```
