# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/policyassignments

Put a policy assignment
```bicep
resource exampleResource 'Microsoft.Authorization/policyAssignments@2017-06-01-preview' = {
  name: 'example'
  properties: {
    description: 'Policies required to minimize the risk of accidental cost overruns'
    displayName: 'Storage Cost Management'
    metadata: {
      category: 'Cost Management'
    }
    notScopes: [
      '/subscriptions/subId/resourcegroups/testingResourceGroup'
    ]
    parameters: {
      allowedSkus: {
        type: 'Array'
      }
    }
    policyDefinitionId: '/subscriptions/subId/providers/Microsoft.Authorization/policyDefinitions/storageSkus'
  }
  sku: {
    name: 'A0'
    tier: 'Free'
  }
}
```

## microsoft.authorization/policysetdefinitions

Put a policy set definition
```bicep
resource exampleResource 'Microsoft.Authorization/policySetDefinitions@2017-06-01-preview' = {
  name: 'example'
  properties: {
    description: 'Policies required to minimize the risk of accidental cost overruns'
    displayName: 'VM and Storage Cost Management'
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
        policyDefinitionId: '/subscriptions/subId/providers/Microsoft.Authorization/policyDefinitions/storageSkus'
      }
    ]
  }
}
```
