# Microsoft.Blueprint
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.blueprint/blueprintassignments

Assignment
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprintAssignments@2017-11-11-preview' = {
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

## microsoft.blueprint/blueprints

Blueprint
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints@2017-11-11-preview' = {
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

ARMTemplateArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview' = {
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

PolicyAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview' = {
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

RoleAssignmentArtifact
```bicep
resource exampleResource 'Microsoft.Blueprint/blueprints/artifacts@2017-11-11-preview' = {
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
