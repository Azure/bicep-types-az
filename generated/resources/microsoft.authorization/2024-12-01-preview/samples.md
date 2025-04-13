# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/policyexemptions

Create or update a policy exemption
```bicep
resource exampleResource 'Microsoft.Authorization/policyExemptions@2024-12-01-preview' = {
  name: 'example'
  properties: {
    description: 'Exempt demo cluster from limit sku'
    displayName: 'Exempt demo cluster'
    exemptionCategory: 'Waiver'
    metadata: {
      reason: 'Temporary exemption for a expensive VM demo'
    }
    policyAssignmentId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyAssignments/CostManagement'
    policyDefinitionReferenceIds: [
      'Limit_Skus'
    ]
  }
}
```

Create or update a policy exemption with resource selectors
```bicep
resource exampleResource 'Microsoft.Authorization/policyExemptions@2024-12-01-preview' = {
  name: 'example'
  properties: {
    description: 'Exempt demo cluster from limit sku'
    assignmentScopeValidation: 'Default'
    displayName: 'Exempt demo cluster'
    exemptionCategory: 'Waiver'
    metadata: {
      reason: 'Temporary exemption for a expensive VM demo'
    }
    policyAssignmentId: '/subscriptions/ae640e6b-ba3e-4256-9d62-2993eecfa6f2/providers/Microsoft.Authorization/policyAssignments/CostManagement'
    policyDefinitionReferenceIds: [
      'Limit_Skus'
    ]
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

## microsoft.authorization/variables

Create or update a variable
```bicep
resource exampleResource 'Microsoft.Authorization/variables@2024-12-01-preview' = {
  name: 'example'
  properties: {
    columns: [
      {
        columnName: 'TestColumn'
      }
    ]
  }
}
```

## microsoft.authorization/variables/values

Create or update a variable value
```bicep
resource exampleResource 'Microsoft.Authorization/variables/values@2024-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    values: [
      {
        columnName: 'StringColumn'
        columnValue: 'SampleValue'
      }
      {
        columnName: 'IntegerColumn'
        columnValue: 10
      }
    ]
  }
}
```
