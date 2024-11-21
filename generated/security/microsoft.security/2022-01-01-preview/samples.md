# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/assessments/governanceassignments

Create Governance assignment
```bicep
resource exampleResource 'Microsoft.Security/assessments/governanceAssignments@2022-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    additionalData: {
      ticketLink: 'https://snow.com'
      ticketNumber: 123123
      ticketStatus: 'Active'
    }
    governanceEmailNotification: {
      disableManagerEmailNotification: false
      disableOwnerEmailNotification: false
    }
    isGracePeriod: true
    owner: 'user@contoso.com'
    remediationDueDate: '2022-01-07T13:00:00.0000000Z'
    remediationEta: {
      eta: '2022-01-08T13:00:00.0000000Z'
      justification: 'Justification of ETA'
    }
  }
}
```

## microsoft.security/governancerules

Create or update governance rule over management group scope
```bicep
resource exampleResource 'Microsoft.Security/governanceRules@2022-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'A rule for a management group'
    conditionSets: [
      {
        conditions: [
          {
            operator: 'In'
            property: '$.AssessmentKey'
            value: '["b1cd27e0-4ecc-4246-939f-49c426d9d72f", "fe83f80b-073d-4ccf-93d9-6797eb870201"]'
          }
        ]
      }
    ]
    displayName: 'Management group rule'
    excludedScopes: [
      '/subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23'
    ]
    governanceEmailNotification: {
      disableManagerEmailNotification: true
      disableOwnerEmailNotification: false
    }
    isDisabled: false
    isGracePeriod: true
    ownerSource: {
      type: 'Manually'
      value: 'user@contoso.com'
    }
    remediationTimeframe: '7.00:00:00'
    rulePriority: 200
    ruleType: 'Integrated'
    sourceResourceType: 'Assessments'
  }
}
```

Create or update governance rule over security connector scope
```bicep
resource exampleResource 'Microsoft.Security/governanceRules@2022-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'A rule on critical GCP recommendations'
    conditionSets: [
      {
        conditions: [
          {
            operator: 'In'
            property: '$.AssessmentKey'
            value: '["b1cd27e0-4ecc-4246-939f-49c426d9d72f", "fe83f80b-073d-4ccf-93d9-6797eb870201"]'
          }
        ]
      }
    ]
    displayName: 'GCP Admin\'s rule'
    governanceEmailNotification: {
      disableManagerEmailNotification: true
      disableOwnerEmailNotification: false
    }
    isDisabled: false
    isGracePeriod: true
    ownerSource: {
      type: 'Manually'
      value: 'user@contoso.com'
    }
    remediationTimeframe: '7.00:00:00'
    rulePriority: 200
    ruleType: 'Integrated'
    sourceResourceType: 'Assessments'
  }
}
```

Create or update governance rule over subscription scope
```bicep
resource exampleResource 'Microsoft.Security/governanceRules@2022-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'A rule for critical recommendations'
    conditionSets: [
      {
        conditions: [
          {
            operator: 'In'
            property: '$.AssessmentKey'
            value: '["b1cd27e0-4ecc-4246-939f-49c426d9d72f", "fe83f80b-073d-4ccf-93d9-6797eb870201"]'
          }
        ]
      }
    ]
    displayName: 'Admin\'s rule'
    governanceEmailNotification: {
      disableManagerEmailNotification: false
      disableOwnerEmailNotification: false
    }
    isDisabled: false
    isGracePeriod: true
    ownerSource: {
      type: 'Manually'
      value: 'user@contoso.com'
    }
    remediationTimeframe: '7.00:00:00'
    rulePriority: 200
    ruleType: 'Integrated'
    sourceResourceType: 'Assessments'
  }
}
```
