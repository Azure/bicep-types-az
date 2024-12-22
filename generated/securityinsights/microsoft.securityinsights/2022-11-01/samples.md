# Microsoft.SecurityInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.securityinsights/alertrules

Creates or updates a Fusion alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2022-11-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Scheduled'
  properties: {
    description: 'An example for a scheduled rule'
    alertDetailsOverride: {
      alertDescriptionFormat: 'Suspicious activity was made by {{ComputerIP}}'
      alertDisplayNameFormat: 'Alert from {{Computer}}'
    }
    customDetails: {
      OperatingSystemName: 'OSName'
      OperatingSystemType: 'OSType'
    }
    displayName: 'My scheduled rule'
    enabled: true
    entityMappings: [
      {
        entityType: 'Host'
        fieldMappings: [
          {
            columnName: 'Computer'
            identifier: 'FullName'
          }
        ]
      }
      {
        entityType: 'IP'
        fieldMappings: [
          {
            columnName: 'ComputerIP'
            identifier: 'Address'
          }
        ]
      }
    ]
    eventGroupingSettings: {
      aggregationKind: 'AlertPerResult'
    }
    incidentConfiguration: {
      createIncident: true
      groupingConfiguration: {
        enabled: true
        groupByAlertDetails: [
          'DisplayName'
        ]
        groupByCustomDetails: [
          'OperatingSystemType'
          'OperatingSystemName'
        ]
        groupByEntities: [
          'Host'
        ]
        lookbackDuration: 'PT5H'
        matchingMethod: 'Selected'
        reopenClosedIncident: false
      }
    }
    query: 'Heartbeat'
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules/actions@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/bookmarks@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2022-11-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents@2022-11-01' = {
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

Creates or updates an incident comment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    message: 'Some message'
  }
}
```

## microsoft.securityinsights/incidents/relations

Creates or updates an incident relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/relations@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/onboardingstates

Create Sentinel onboarding state
```bicep
resource exampleResource 'Microsoft.SecurityInsights/onboardingStates@2022-11-01' = {
  name: 'example'
  properties: {
    customerManagedKey: false
  }
}
```

## microsoft.securityinsights/securitymlanalyticssettings

Creates or updates a Anomaly Security ML Analytics Settings.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/securityMLAnalyticsSettings@2022-11-01' = {
  name: 'example'
  etag: '"260090e2-0000-0d00-0000-5d6fb8670000"'
  kind: 'Anomaly'
  properties: {
    description: 'When account logs from a source region that has rarely been logged in from during the last 14 days, an anomaly is triggered.'
    anomalySettingsVersion: 0
    anomalyVersion: '1.0.5'
    customizableObservations: {
      multiSelectObservations: {
      }
      prioritizeExcludeObservations: {
      }
      singleSelectObservations: [
        {
          name: 'Device vendor'
          description: 'Select device vendor of network connection logs from CommonSecurityLog'
          rerun: 'RerunAlways'
          sequenceNumber: 1
          supportedValues: [
            'Palo Alto Networks'
            'Fortinet'
            'Check Point'
          ]
          supportedValuesKql: {
          }
          value: [
            'Palo Alto Networks'
          ]
          valuesKql: {
          }
        }
      ]
      singleValueObservations: {
      }
      thresholdObservations: [
        {
          name: 'Daily data transfer threshold in MB'
          description: 'Suppress anomalies when daily data transfered (in MB) per hour is less than the chosen value'
          maximum: '100'
          minimum: '1'
          rerun: 'RerunAlways'
          sequenceNumber: 1
          value: '25'
        }
        {
          name: 'Number of standard deviations'
          description: 'Triggers anomalies when number of standard deviations is greater than the chosen value'
          maximum: '10'
          minimum: '2'
          rerun: 'RerunAlways'
          sequenceNumber: 2
          value: '3'
        }
      ]
    }
    displayName: 'Login from unusual region'
    enabled: true
    frequency: 'PT1H'
    isDefaultSettings: true
    requiredDataConnectors: [
      {
        connectorId: 'AWS'
        dataTypes: [
          'AWSCloudTrail'
        ]
      }
    ]
    settingsDefinitionId: 'f209187f-1d17-4431-94af-c141bf5f23db'
    settingsStatus: 'Production'
    tactics: [
      'Exfiltration'
      'CommandAndControl'
    ]
    techniques: [
      'T1037'
      'T1021'
    ]
  }
}
```

## microsoft.securityinsights/watchlists

Create or update a watchlist and bulk creates watchlist items.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2022-11-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    contentType: 'text/csv'
    displayName: 'High Value Assets Watchlist'
    itemsSearchKey: 'header1'
    numberOfLinesToSkip: 1
    provider: 'Microsoft'
    rawContent: 'This line will be skipped\nheader1,header2\nvalue1,value2'
    source: 'Local file'
  }
}
```

Create or update a watchlist.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2022-11-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    displayName: 'High Value Assets Watchlist'
    itemsSearchKey: 'header1'
    provider: 'Microsoft'
    source: 'Local file'
  }
}
```

## microsoft.securityinsights/watchlists/watchlistitems

Create or update a watchlist item.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists/watchlistItems@2022-11-01' = {
  parent: parentResource 
  name: 'example'
  etag: '0300bf09-0000-0000-0000-5c37296e0000'
  properties: {
    itemsKeyValue: {
      'Business tier': '10.0.2.0/24'
      'Data tier': '10.0.2.0/24'
      'Gateway subnet': '10.0.255.224/27'
      'Private DMZ in': '10.0.0.0/27'
      'Public DMZ out': '10.0.0.96/27'
      'Web Tier': '10.0.1.0/24'
    }
  }
}
```
