# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/customrecommendations

Create or update custom recommendation over management group scope
```bicep
resource exampleResource 'Microsoft.Security/customRecommendations@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'organization passwords policy'
    cloudProviders: [
      'AWS'
    ]
    displayName: 'Password Policy'
    query: 'RawEntityMetadata | where Environment == \'GCP\' and Identifiers.Type == \'compute.firewalls\' | extend IslogConfigEnabled = tobool(Record.logConfig.enable) | extend HealthStatus = iff(IslogConfigEnabled, \'HEALTHY\', \'UNHEALTHY\')'
    remediationDescription: 'Change password policy to...'
    securityIssue: 'Vulnerability'
    severity: 'Medium'
  }
}
```

Create or update custom recommendation over security connector scope
```bicep
resource exampleResource 'Microsoft.Security/customRecommendations@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'organization passwords policy'
    cloudProviders: [
      'AWS'
    ]
    displayName: 'Password Policy'
    query: 'RawEntityMetadata | where Environment == \'GCP\' and Identifiers.Type == \'compute.firewalls\' | extend IslogConfigEnabled = tobool(Record.logConfig.enable) | extend HealthStatus = iff(IslogConfigEnabled, \'HEALTHY\', \'UNHEALTHY\')'
    remediationDescription: 'Change password policy to...'
    securityIssue: 'Vulnerability'
    severity: 'Medium'
  }
}
```

Create or update custom recommendation over subscription scope
```bicep
resource exampleResource 'Microsoft.Security/customRecommendations@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'organization passwords policy'
    cloudProviders: [
      'AWS'
    ]
    displayName: 'Password Policy'
    query: 'RawEntityMetadata | where Environment == \'GCP\' and Identifiers.Type == \'compute.firewalls\' | extend IslogConfigEnabled = tobool(Record.logConfig.enable) | extend HealthStatus = iff(IslogConfigEnabled, \'HEALTHY\', \'UNHEALTHY\')'
    remediationDescription: 'Change password policy to...'
    securityIssue: 'Vulnerability'
    severity: 'Medium'
  }
}
```

## microsoft.security/securitystandards

Create or update security standard over management group scope
```bicep
resource exampleResource 'Microsoft.Security/securityStandards@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'description of Azure Test Security Standard 1'
    assessments: [
      {
        assessmentKey: '1195afff-c881-495e-9bc5-1486211ae03f'
      }
      {
        assessmentKey: 'dbd0cb49-b563-45e7-9724-889e799fa648'
      }
    ]
    cloudProviders: [
      'GCP'
    ]
    displayName: 'Azure Test Security Standard 1'
    policySetDefinitionId: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Authorization/policySetDefinitions/patchorchestration-applicationversions'
  }
}
```

Create or update security standard over security connector scope
```bicep
resource exampleResource 'Microsoft.Security/securityStandards@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'description of Azure Test Security Standard 1'
    assessments: [
      {
        assessmentKey: '1195afff-c881-495e-9bc5-1486211ae03f'
      }
      {
        assessmentKey: 'dbd0cb49-b563-45e7-9724-889e799fa648'
      }
    ]
    cloudProviders: [
      'GCP'
    ]
    displayName: 'Azure Test Security Standard 1'
  }
}
```

Create or update security standard over subscription scope
```bicep
resource exampleResource 'Microsoft.Security/securityStandards@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'description of Azure Test Security Standard 1'
    assessments: [
      {
        assessmentKey: '1195afff-c881-495e-9bc5-1486211ae03f'
      }
      {
        assessmentKey: 'dbd0cb49-b563-45e7-9724-889e799fa648'
      }
    ]
    cloudProviders: [
      'GCP'
    ]
    displayName: 'Azure Test Security Standard 1'
    policySetDefinitionId: '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/providers/Microsoft.Authorization/policySetDefinitions/patchorchestration-applicationversions'
  }
}
```

## microsoft.security/standardassignments

Put an audit standard assignment
```bicep
resource exampleResource 'Microsoft.Security/standardAssignments@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'Set of policies monitored by Azure Security Center for cross cloud'
    assignedStandard: {
      id: '/providers/Microsoft.Security/securityStandards/1f3afdf9-d0c9-4c3d-847f-89da613e70a8'
    }
    displayName: 'ASC Default'
    effect: 'Audit'
    excludedScopes: [
    ]
  }
}
```

Put exemption standard assignment
```bicep
resource exampleResource 'Microsoft.Security/standardAssignments@2024-08-01' = {
  name: 'example'
  properties: {
    description: 'Exemption description'
    assignedStandard: {
      id: '/providers/Microsoft.Security/securityStandards/1f3afdf9-d0c9-4c3d-847f-89da613e70a8'
    }
    displayName: 'Test exemption'
    effect: 'Exempt'
    exemptionData: {
      assignedAssessment: {
        assessmentKey: '1195afff-c881-495e-9bc5-1486211ae03f'
      }
      exemptionCategory: 'waiver'
    }
    expiresOn: '2022-05-01T19:50:47.083633Z'
  }
}
```
