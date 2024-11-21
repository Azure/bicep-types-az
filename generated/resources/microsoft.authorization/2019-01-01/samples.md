# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/policyassignments

Create or update a policy assignment
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2019-01-01' = {
  name: 'example'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    metadata: {
      assignedBy: 'Special Someone'
    }
    parameters: {
      prefix: {
        value: 'DeptA'
      }
      suffix: {
        value: '-LC'
      }
    }
    policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
  }
}
```

Create or update a policy assignment with a managed identity
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2019-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    metadata: {
      assignedBy: 'Foo Bar'
    }
    parameters: {
      prefix: {
        value: 'DeptA'
      }
      suffix: {
        value: '-LC'
      }
    }
    policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
  }
}
```

## microsoft.authorization/policydefinitions

Create or update a policy definition
```bicep
resource exampleResource 'Microsoft.Authorization/policyDefinitions@2019-01-01' = {
  name: 'example'
  properties: {
    description: 'Force resource names to begin with given \'prefix\' and/or end with given \'suffix\''
    displayName: 'Enforce resource naming convention'
    metadata: {
      category: 'Naming'
    }
    mode: 'All'
    parameters: {
      prefix: {
        type: 'String'
        metadata: {
          description: 'Resource name prefix'
          displayName: 'Prefix'
        }
      }
      suffix: {
        type: 'String'
        metadata: {
          description: 'Resource name suffix'
          displayName: 'Suffix'
        }
      }
    }
    policyRule: {
      if: {
        not: {
          field: 'name'
          like: '[concat(parameters(\'prefix\'), \'*\', parameters(\'suffix\'))]'
        }
      }
      then: {
        effect: 'deny'
      }
    }
  }
}
```

## microsoft.authorization/policysetdefinitions

Create or update a policy set definition
```bicep
resource exampleResource 'Microsoft.Authorization/policySetDefinitions@2019-01-01' = {
  name: 'example'
  properties: {
    description: 'Policies to enforce low cost storage SKUs'
    displayName: 'Cost Management'
    metadata: {
      category: 'Cost Management'
    }
    policyDefinitions: [
      {
        parameters: {
          listOfAllowedSKUs: {
            value: [
              'Standard_GRS'
              'Standard_LRS'
            ]
          }
        }
        policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1'
      }
      {
        parameters: {
          prefix: {
            value: 'DeptA'
          }
          suffix: {
            value: '-LC'
          }
        }
        policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
      }
    ]
  }
}
```
