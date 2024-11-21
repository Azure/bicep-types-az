# Microsoft.HybridConnectivity

## microsoft.hybridconnectivity/solutionconfigurations

SolutionConfigurations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.HybridConnectivity/solutionConfigurations@2024-12-01' = {
  name: 'example'
  properties: {
    solutionSettings: {
    }
    solutionType: 'nmtqllkyohwtsthxaimsye'
  }
}
```

## microsoft.hybridconnectivity/publiccloudconnectors

PublicCloudConnectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.HybridConnectivity/publicCloudConnectors@2024-12-01' = {
  name: 'example'
  location: 'jpiglusfxynfcewcjwvvnn'
  properties: {
    awsCloudProfile: {
      accountId: 'snbnuxckevyqpm'
      excludedAccounts: [
        'rwgqpukglvbqmogqcliqolucp'
      ]
      isOrganizationalAccount: true
    }
    hostType: 'AWS'
  }
  tags: {
  }
}
```
