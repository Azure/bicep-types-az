# Microsoft.SecurityInsights

## microsoft.securityinsights/alertrules

Creates or updates a Fusion alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2020-01-01' = {
  name: 'example'
  etag: '3d00c3ca-0000-0100-0000-5d42d5010000'
  kind: 'Fusion'
  properties: {
    alertRuleTemplateName: 'f71aba3d-28fb-450b-b192-4e76a83015c8'
    enabled: true
  }
}
```

Creates or updates a MicrosoftSecurityIncidentCreation rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2020-01-01' = {
  name: 'example'
  etag: '"260097e0-0000-0d00-0000-5d6fa88f0000"'
  kind: 'MicrosoftSecurityIncidentCreation'
  properties: {
    displayName: 'testing displayname'
    enabled: true
    productFilter: 'Microsoft Cloud App Security'
  }
}
```

Creates or updates a Scheduled alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2020-01-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Scheduled'
  properties: {
    description: ''
    displayName: 'Rule2'
    enabled: true
    query: 'ProtectionStatus | extend HostCustomEntity = Computer | extend IPCustomEntity = ComputerIP_Hidden'
    queryFrequency: 'PT1H'
    queryPeriod: 'P2DT1H30M'
    severity: 'High'
    suppressionDuration: 'PT1H'
    suppressionEnabled: false
    tactics: [
      'Persistence'
      'LateralMovement'
    ]
    triggerOperator: 'GreaterThan'
    triggerThreshold: 0
  }
}
```

## microsoft.securityinsights/alertrules/actions

Creates or updates an action of alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules/actions@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    logicAppResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.Logic/workflows/MyAlerts'
    triggerUri: 'https://prod-31.northcentralus.logic.azure.com:443/workflows/cd3765391efd48549fd7681ded1d48d7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=signature'
  }
}
```

## microsoft.securityinsights/bookmarks

Creates or updates a bookmark.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/bookmarks@2020-01-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    created: '2019-01-01T13:15:30Z'
    createdBy: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
    displayName: 'My bookmark'
    labels: [
      'Tag1'
      'Tag2'
    ]
    notes: 'Found a suspicious activity'
    query: 'SecurityEvent | where TimeGenerated > ago(1d) and TimeGenerated < ago(2d)'
    queryResult: 'Security Event query result'
    updated: '2019-01-01T13:15:30Z'
    updatedBy: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
  }
}
```

## microsoft.securityinsights/dataconnectors

Creates or updates an Office365 data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2020-01-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Office365'
  properties: {
    dataTypes: {
      exchange: {
        state: 'Enabled'
      }
      sharePoint: {
        state: 'Enabled'
      }
      teams: {
        state: 'Enabled'
      }
    }
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates an Threat Intelligence Platform data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2020-01-01' = {
  name: 'example'
  kind: 'ThreatIntelligence'
  properties: {
    dataTypes: {
      indicators: {
        state: 'Enabled'
      }
    }
    tenantId: '06b3ccb8-1384-4bcc-aec7-852f6d57161b'
    tipLookbackPeriod: '2020-01-01T13:00:30.123Z'
  }
}
```

## microsoft.securityinsights/incidents

Creates or updates an incident.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents@2020-01-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a demo incident'
    classification: 'FalsePositive'
    classificationComment: 'Not a malicious activity'
    classificationReason: 'IncorrectAlertLogic'
    firstActivityTimeUtc: '2019-01-01T13:00:30Z'
    lastActivityTimeUtc: '2019-01-01T13:05:30Z'
    owner: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
    severity: 'High'
    status: 'Closed'
    title: 'My incident'
  }
}
```

## microsoft.securityinsights/incidents/comments

Creates an incident comment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    message: 'Some message'
  }
}
```
