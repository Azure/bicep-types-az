# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/securityconnectors/devops

CreateOrUpdate_DevOpsConfigurations_OnboardCurrentAndFuture
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2024-05-15-preview' = {
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
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2024-05-15-preview' = {
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
resource exampleResource 'Microsoft.Security/securityConnectors/devops@2024-05-15-preview' = {
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
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs@2024-05-15-preview' = {
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
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects@2024-05-15-preview' = {
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
resource exampleResource 'Microsoft.Security/securityConnectors/devops/azureDevOpsOrgs/projects/repos@2024-05-15-preview' = {
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

## microsoft.security/securityconnectors/devops/policyassignments

CreateOrUpdate_DevOpsPolicyAssignments
```bicep
resource exampleResource 'Microsoft.Security/securityConnectors/devops/policyAssignments@2024-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    descendantBehavior: 'Override'
    policy: {
      policyId: '00000000-0000-0000-0000-000000000000'
      policyName: 'myDevOpsPolicy'
      policyType: 'Pipeline'
      policyVersion: '1.0'
    }
    resourceId: '/subscriptions/0806e1cd-cfda-4ff8-b99c-2b0af42cffd3/resourcegroups/myRg/providers/Microsoft.Security/securityConnectors/mySecurityConnectorName/devops/default/azureDevOpsOrgs/Contoso'
  }
}
```
