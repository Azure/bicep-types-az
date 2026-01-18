# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/policyassignments

Create or update a policy assignment
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    metadata: {
      assignedBy: 'Special Someone'
    }
    nonComplianceMessages: [
      {
        message: 'Resource names must start with \'DeptA\' and end with \'-LC\'.'
      }
    ]
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

Create or update a policy assignment to enforce policy effect only on enrolled resources during resource creation or update.
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    enforcementMode: 'Enroll'
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

Create or update a policy assignment with a system assigned identity
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    enforcementMode: 'Default'
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

Create or update a policy assignment with a user assigned identity
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/resourceGroups/testResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-identity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    enforcementMode: 'Default'
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

Create or update a policy assignment with multiple non-compliance messages
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    displayName: 'Enforce security policies'
    nonComplianceMessages: [
      {
        message: 'Resources must comply with all internal security policies. See <internal site URL> for more info.'
      }
      {
        message: 'Resource names must start with \'DeptA\' and end with \'-LC\'.'
        policyDefinitionReferenceId: '10420126870854049575'
      }
      {
        message: 'Storage accounts must have firewall rules configured.'
        policyDefinitionReferenceId: '8572513655450389710'
      }
    ]
    policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policySetDefinitions/securityInitiative'
  }
}
```

Create or update a policy assignment with overrides
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Limit the resource location and resource SKU'
    definitionVersion: '1.*.*'
    displayName: 'Limit the resource location and resource SKU'
    metadata: {
      assignedBy: 'Special Someone'
    }
    overrides: [
      {
        kind: 'policyEffect'
        selectors: [
          {
            in: [
              'Limit_Skus'
              'Limit_Locations'
            ]
            kind: 'policyDefinitionReferenceId'
          }
        ]
        value: 'Audit'
      }
      {
        kind: 'definitionVersion'
        selectors: [
          {
            in: [
              'eastUSEuap'
              'centralUSEuap'
            ]
            kind: 'resourceLocation'
          }
        ]
        value: '2.*.*'
      }
    ]
    policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policySetDefinitions/CostManagement'
  }
}
```

Create or update a policy assignment with resource selectors
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Limit the resource location and resource SKU'
    displayName: 'Limit the resource location and resource SKU'
    metadata: {
      assignedBy: 'Special Someone'
    }
    policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policySetDefinitions/CostManagement'
    resourceSelectors: [
      {
        name: 'SDPRegions'
        selectors: [
          {
            in: [
              'eastus2euap'
              'centraluseuap'
            ]
            kind: 'resourceLocation'
          }
        ]
      }
    ]
  }
}
```

Create or update a policy assignment without enforcing policy effect during resource creation or update.
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Force resource names to begin with given DeptA and end with -LC'
    displayName: 'Enforce resource naming rules'
    enforcementMode: 'DoNotEnforce'
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

## microsoft.authorization/policydefinitions

Create or update a policy definition at management group level
```bicep
resource exampleResource 'Microsoft.Authorization/policyDefinitions@2025-03-01' = {
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

## microsoft.authorization/policydefinitions/versions

Create or update a policy definition version at management group level
```bicep
resource exampleResource 'Microsoft.Authorization/policyDefinitions/versions@2025-03-01' = {
  parent: parentResource 
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
    version: '1.2.1'
  }
}
```

## microsoft.authorization/policysetdefinitions

Create or update a policy set definition at management group level
```bicep
resource exampleResource 'Microsoft.Authorization/policySetDefinitions@2025-03-01' = {
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
        policyDefinitionId: '/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1'
        policyDefinitionReferenceId: 'Limit_Skus'
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
        policyDefinitionId: '/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
        policyDefinitionReferenceId: 'Resource_Naming'
      }
    ]
  }
}
```

Create or update a policy set definition with groups at management group level
```bicep
resource exampleResource 'Microsoft.Authorization/policySetDefinitions@2025-03-01' = {
  name: 'example'
  properties: {
    description: 'Policies to enforce low cost storage SKUs'
    displayName: 'Cost Management'
    metadata: {
      category: 'Cost Management'
    }
    policyDefinitionGroups: [
      {
        name: 'CostSaving'
        description: 'Policies designed to control spend within a subscription.'
        displayName: 'Cost Management Policies'
      }
      {
        name: 'Organizational'
        description: 'Policies that help enforce resource organization standards within a subscription.'
        displayName: 'Organizational Policies'
      }
    ]
    policyDefinitions: [
      {
        groupNames: [
          'CostSaving'
        ]
        parameters: {
          listOfAllowedSKUs: {
            value: [
              'Standard_GRS'
              'Standard_LRS'
            ]
          }
        }
        policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1'
        policyDefinitionReferenceId: 'Limit_Skus'
      }
      {
        groupNames: [
          'Organizational'
        ]
        parameters: {
          prefix: {
            value: 'DeptA'
          }
          suffix: {
            value: '-LC'
          }
        }
        policyDefinitionId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
        policyDefinitionReferenceId: 'Resource_Naming'
      }
    ]
  }
}
```

## microsoft.authorization/policysetdefinitions/versions

Create or update a policy set definition version at management group level
```bicep
resource exampleResource 'Microsoft.Authorization/policySetDefinitions/versions@2025-03-01' = {
  parent: parentResource 
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
        policyDefinitionId: '/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/7433c107-6db4-4ad1-b57a-a76dce0154a1'
        policyDefinitionReferenceId: 'Limit_Skus'
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
        policyDefinitionId: '/providers/Microsoft.Management/managementgroups/MyManagementGroup/providers/Microsoft.Authorization/policyDefinitions/ResourceNaming'
        policyDefinitionReferenceId: 'Resource_Naming'
      }
    ]
    version: '1.2.1'
  }
}
```
