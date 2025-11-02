# Microsoft.Databricks
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.databricks/accessconnectors

Create an Azure Databricks Access Connector with SystemAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
}
```

Create an Azure Databricks Access Connector with UserAssigned Identity
```bicep
resource exampleResource 'Microsoft.Databricks/accessConnectors@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
}
```

## microsoft.databricks/workspaces

Create a workspace which is ready for Customer-Managed Key (CMK) encryption
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Hybrid'
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
    parameters: {
      prepareEncryption: {
        value: true
      }
    }
  }
  sku: {
    name: 'premium'
  }
}
```

Create a workspace with Customer-Managed Key (CMK) encryption for Managed Disks
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Hybrid'
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
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
  }
  sku: {
    name: 'premium'
  }
}
```

Create or update a workspace with Enhanced Security & Compliance Add-On
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    computeMode: 'Hybrid'
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
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
  }
  sku: {
    name: 'premium'
  }
}
```

Create or update serverless workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Serverless'
  }
  sku: {
    name: 'premium'
  }
}
```

Create or update workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    accessConnector: {
      id: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/adbrg/providers/Microsoft.Databricks/accessConnectors/myAccessConnector'
      identityType: 'SystemAssigned'
    }
    computeMode: 'Hybrid'
    defaultCatalog: {
      initialName: ''
      initialType: 'UnityCatalog'
    }
    defaultStorageFirewall: 'Enabled'
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
  }
  sku: {
    name: 'premium'
  }
}
```

Create or update workspace with custom parameters
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    accessConnector: {
      id: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/adbrg/providers/Microsoft.Databricks/accessConnectors/myAccessConnector'
      identityType: 'UserAssigned'
      userAssignedIdentityId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
    }
    computeMode: 'Hybrid'
    defaultCatalog: {
      initialName: ''
      initialType: 'HiveMetastore'
    }
    defaultStorageFirewall: 'Enabled'
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
    parameters: {
      customPrivateSubnetName: {
        value: 'myPrivateSubnet'
      }
      customPublicSubnetName: {
        value: 'myPublicSubnet'
      }
      customVirtualNetworkId: {
        value: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/myNetwork'
      }
    }
  }
  sku: {
    name: 'premium'
  }
}
```

Enable Customer-Managed Key (CMK) encryption on a workspace which is prepared for encryption
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Hybrid'
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
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
  sku: {
    name: 'premium'
  }
}
```

Revert Customer-Managed Key (CMK) encryption to Microsoft Managed Keys encryption on a workspace
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Hybrid'
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
    parameters: {
      encryption: {
        value: {
          keySource: 'Default'
        }
      }
    }
  }
  sku: {
    name: 'premium'
  }
}
```

Update a workspace with Customer-Managed Key (CMK) encryption for Managed Disks
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces@2025-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeMode: 'Hybrid'
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
    managedResourceGroupId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myManagedRG'
  }
  sku: {
    name: 'premium'
  }
  tags: {
    mytag1: 'myvalue1'
  }
}
```

## microsoft.databricks/workspaces/privateendpointconnections

Update a private endpoint connection
```bicep
resource exampleResource 'Microsoft.Databricks/workspaces/privateEndpointConnections@2025-10-01-preview' = {
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
