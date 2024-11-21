# Microsoft.Help
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.help/simplifiedsolutions

Solution_Create
```bicep
resource exampleResource 'Microsoft.Help/simplifiedSolutions@2024-03-01-preview' = {
  name: 'example'
  properties: {
    parameters: {
      resourceUri: 'subscriptions/mySubscription/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-rp'
    }
    solutionId: 'sampleSolutionId'
  }
}
```

## microsoft.help/solutions

Solution_Create
```bicep
resource exampleResource 'Microsoft.Help/solutions@2024-03-01-preview' = {
  name: 'example'
  properties: {
    parameters: {
      resourceUri: 'subscriptions/mySubscription/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-rp'
    }
    triggerCriteria: [
      {
        name: 'SolutionId'
        value: 'SolutionId1'
      }
    ]
  }
}
```

## microsoft.help/troubleshooters

Troubleshooters_Create
```bicep
resource exampleResource 'Microsoft.Help/troubleshooters@2024-03-01-preview' = {
  name: 'example'
  properties: {
    parameters: {
      ResourceURI: 'subscriptions/mySubscription/resourcegroups/myresourceGroup/providers/Microsoft.KeyVault/vaults/test-keyvault-rp'
    }
    solutionId: 'SampleTroubleshooterSolutionId'
  }
}
```
