# Microsoft.HybridConnectivity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
