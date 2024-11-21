# Microsoft.Help

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
