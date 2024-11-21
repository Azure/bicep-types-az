# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/securityconnectors/devops

CreateOrUpdate_DevOpsConfigurations_OnboardCurrentAndFuture
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorization: {
      code: '00000000000000000000'
    }
    autoDiscovery: 'Enabled'
  }
}
```

CreateOrUpdate_DevOpsConfigurations_OnboardCurrentOnly
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorization: {
      code: '00000000000000000000'
    }
    autoDiscovery: 'Disabled'
  }
}
```

CreateOrUpdate_DevOpsConfigurations_OnboardSelected
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorization: {
      code: '00000000000000000000'
    }
    autoDiscovery: 'Disabled'
    topLevelInventoryList: [
      'org1'
      'org2'
    ]
  }
}
```

## microsoft.security/securityconnectors/devops/azuredevopsorgs

CreateOrUpdate_AzureDevOpsOrgs
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    actionableRemediation: {
      state: 'Enabled'
    }
    onboardingState: 'NotApplicable'
  }
}
```

## microsoft.security/securityconnectors/devops/azuredevopsorgs/projects

CreateOrUpdate_AzureDevOpsProjects
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    actionableRemediation: {
      state: 'Enabled'
    }
    onboardingState: 'NotApplicable'
  }
}
```

## microsoft.security/securityconnectors/devops/azuredevopsorgs/projects/repos

CreateOrUpdate_AzureDevOpsRepos
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    actionableRemediation: {
      state: 'Enabled'
    }
    onboardingState: 'NotApplicable'
  }
}
```
