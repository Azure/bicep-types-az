# Microsoft.Blueprint
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.blueprint/blueprintassignments

Assignment with system-assigned managed identity at management group scope
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    description: 'enforce pre-defined simpleBlueprint to this XXXXXXXX subscription.'
    blueprintId: '/providers/Microsoft.Management/managementGroups/ContosoOnlineGroup/providers/Microsoft.Blueprint/blueprints/simpleBlueprint'
    parameters: {
      costCenter: {
        value: 'Contoso/Online/Shopping/Production'
      }
      owners: {
        value: [
          'johnDoe@contoso.com'
          'johnsteam@contoso.com'
        ]
      }
      storageAccountType: {
        value: 'Standard_LRS'
      }
    }
    resourceGroups: {
      storageRG: {
        name: 'defaultRG'
        location: 'eastus'
      }
    }
    scope: 'subscriptions/00000000-0000-0000-0000-000000000000'
  }
}
```

Assignment with system-assigned managed identity at subscription scope
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    description: 'enforce pre-defined simpleBlueprint to this XXXXXXXX subscription.'
    blueprintId: '/providers/Microsoft.Management/managementGroups/ContosoOnlineGroup/providers/Microsoft.Blueprint/blueprints/simpleBlueprint'
    parameters: {
      costCenter: {
        value: 'Contoso/Online/Shopping/Production'
      }
      owners: {
        value: [
          'johnDoe@contoso.com'
          'johnsteam@contoso.com'
        ]
      }
      storageAccountType: {
        value: 'Standard_LRS'
      }
    }
    resourceGroups: {
      storageRG: {
        name: 'defaultRG'
        location: 'eastus'
      }
    }
  }
}
```

Assignment with user-assigned managed identity at management group scope
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resource-group/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'enforce pre-defined simpleBlueprint to this XXXXXXXX subscription.'
    blueprintId: '/providers/Microsoft.Management/managementGroups/ContosoOnlineGroup/providers/Microsoft.Blueprint/blueprints/simpleBlueprint'
    parameters: {
      costCenter: {
        value: 'Contoso/Online/Shopping/Production'
      }
      owners: {
        value: [
          'johnDoe@contoso.com'
          'johnsteam@contoso.com'
        ]
      }
      storageAccountType: {
        value: 'Standard_LRS'
      }
    }
    resourceGroups: {
      storageRG: {
        name: 'defaultRG'
        location: 'eastus'
      }
    }
    scope: 'subscriptions/00000000-0000-0000-0000-000000000000'
  }
}
```

Assignment with user-assigned managed identity at subscription scope
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprintAssignments@2018-11-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resource-group/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'enforce pre-defined simpleBlueprint to this XXXXXXXX subscription.'
    blueprintId: '/providers/Microsoft.Management/managementGroups/ContosoOnlineGroup/providers/Microsoft.Blueprint/blueprints/simpleBlueprint'
    parameters: {
      costCenter: {
        value: 'Contoso/Online/Shopping/Production'
      }
      owners: {
        value: [
          'johnDoe@contoso.com'
          'johnsteam@contoso.com'
        ]
      }
      storageAccountType: {
        value: 'Standard_LRS'
      }
    }
    resourceGroups: {
      storageRG: {
        name: 'defaultRG'
        location: 'eastus'
      }
    }
  }
}
```

## microsoft.blueprint/blueprints

ManagementGroupBlueprint
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints@2018-11-01-preview' = {
  name: 'example'
  properties: {
    description: 'blueprint contains all artifact kinds {\'template\', \'rbac\', \'policy\'}'
    parameters: {
      costCenter: {
        type: 'string'
        metadata: {
          displayName: 'force cost center tag for all resources under given subscription.'
        }
      }
      owners: {
        type: 'array'
        metadata: {
          displayName: 'assign owners to subscription along with blueprint assignment.'
        }
      }
      storageAccountType: {
        type: 'string'
        metadata: {
          displayName: 'storage account type.'
        }
      }
    }
    resourceGroups: {
      storageRG: {
        metadata: {
          description: 'Contains storageAccounts that collect all shoebox logs.'
          displayName: 'storage resource group'
        }
      }
    }
    targetScope: 'subscription'
  }
}
```

ResourceGroupWithTags
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints@2018-11-01-preview' = {
  name: 'example'
  properties: {
    description: 'An example blueprint containing an RG with two tags.'
    resourceGroups: {
      myRGName: {
        name: 'myRGName'
        location: 'westus'
        metadata: {
          displayName: 'My Resource Group'
        }
        tags: {
          costcenter: '123456'
          nameOnlyTag: ''
        }
      }
    }
    targetScope: 'subscription'
  }
}
```

SubscriptionBlueprint
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints@2018-11-01-preview' = {
  name: 'example'
  properties: {
    description: 'blueprint contains all artifact kinds {\'template\', \'rbac\', \'policy\'}'
    parameters: {
      costCenter: {
        type: 'string'
        metadata: {
          displayName: 'force cost center tag for all resources under given subscription.'
        }
      }
      owners: {
        type: 'array'
        metadata: {
          displayName: 'assign owners to subscription along with blueprint assignment.'
        }
      }
      storageAccountType: {
        type: 'string'
        metadata: {
          displayName: 'storage account type.'
        }
      }
    }
    resourceGroups: {
      storageRG: {
        metadata: {
          description: 'Contains storageAccounts that collect all shoebox logs.'
          displayName: 'storage resource group'
        }
      }
    }
    targetScope: 'subscription'
  }
}
```

## microsoft.blueprint/blueprints/artifacts

MG-ARMTemplateArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'template'
  properties: {
    parameters: {
      storageAccountType: {
        value: '[parameters(\'storageAccountType\')]'
      }
    }
    resourceGroup: 'storageRG'
    template: {
      contentVersion: '1.0.0.0'
      outputs: {
        storageAccountName: {
          type: 'string'
          value: '[variables(\'storageAccountName\')]'
        }
      }
      parameters: {
        storageAccountType: {
          type: 'string'
          allowedValues: [
            'Standard_LRS'
            'Standard_GRS'
            'Standard_ZRS'
            'Premium_LRS'
          ]
          defaultValue: 'Standard_LRS'
          metadata: {
            description: 'Storage Account type'
          }
        }
      }
      resources: [
        {
          name: '[variables(\'storageAccountName\')]'
          type: 'Microsoft.Storage/storageAccounts'
          apiVersion: '2016-01-01'
          kind: 'Storage'
          location: '[resourceGroup().location]'
          properties: {
          }
          sku: {
            name: '[parameters(\'storageAccountType\')]'
          }
        }
      ]
      variables: {
        storageAccountName: '[concat(uniquestring(resourceGroup().id), \'standardsa\')]'
      }
    }
  }
}
```

MG-PolicyAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'policyAssignment'
  properties: {
    displayName: 'force costCenter tag on all resources'
    parameters: {
      tagName: {
        value: 'costCenter'
      }
      tagValue: {
        value: '[parameter(\'costCenter\')]'
      }
    }
    policyDefinitionId: '/providers/Microsoft.Authorization/policyDefinitions/1e30110a-5ceb-460c-a204-c1c3969c6d62'
  }
}
```

MG-RoleAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'roleAssignment'
  properties: {
    displayName: 'enforce owners of given subscription'
    principalIds: '[parameters(\'owners\')]'
    roleDefinitionId: '/providers/Microsoft.Authorization/roleDefinitions/acdd72a7-3385-48ef-bd42-f606fba81ae7'
  }
}
```

Sub-ARMTemplateArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'template'
  properties: {
    parameters: {
      storageAccountType: {
        value: '[parameters(\'storageAccountType\')]'
      }
    }
    resourceGroup: 'storageRG'
    template: {
      contentVersion: '1.0.0.0'
      outputs: {
        storageAccountName: {
          type: 'string'
          value: '[variables(\'storageAccountName\')]'
        }
      }
      parameters: {
        storageAccountType: {
          type: 'string'
          allowedValues: [
            'Standard_LRS'
            'Standard_GRS'
            'Standard_ZRS'
            'Premium_LRS'
          ]
          defaultValue: 'Standard_LRS'
          metadata: {
            description: 'Storage Account type'
          }
        }
      }
      resources: [
        {
          name: '[variables(\'storageAccountName\')]'
          type: 'Microsoft.Storage/storageAccounts'
          apiVersion: '2016-01-01'
          kind: 'Storage'
          location: '[resourceGroup().location]'
          properties: {
          }
          sku: {
            name: '[parameters(\'storageAccountType\')]'
          }
        }
      ]
      variables: {
        storageAccountName: '[concat(uniquestring(resourceGroup().id), \'standardsa\')]'
      }
    }
  }
}
```

Sub-PolicyAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'policyAssignment'
  properties: {
    displayName: 'force costCenter tag on all resources'
    parameters: {
      tagName: {
        value: 'costCenter'
      }
      tagValue: {
        value: '[parameter(\'costCenter\')]'
      }
    }
    policyDefinitionId: '/providers/Microsoft.Authorization/policyDefinitions/1e30110a-5ceb-460c-a204-c1c3969c6d62'
  }
}
```

Sub-RoleAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2018-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'roleAssignment'
  properties: {
    displayName: 'enforce owners of given subscription'
    principalIds: '[parameters(\'owners\')]'
    roleDefinitionId: '/providers/Microsoft.Authorization/roleDefinitions/acdd72a7-3385-48ef-bd42-f606fba81ae7'
  }
}
```
