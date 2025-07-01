# Microsoft.SecurityInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.securityinsights/alertrules

Creates or updates a Fusion alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-06-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Scheduled'
  properties: {
    description: 'An example for a scheduled rule'
    alertDetailsOverride: {
      alertDescriptionFormat: 'Suspicious activity was made by {{ComputerIP}}'
      alertDisplayNameFormat: 'Alert from {{Computer}}'
      alertDynamicProperties: [
        {
          alertProperty: 'ProductComponentName'
          value: 'ProductComponentNameCustomColumn'
        }
        {
          alertProperty: 'ProductName'
          value: 'ProductNameCustomColumn'
        }
        {
          alertProperty: 'AlertLink'
          value: 'Link'
        }
      ]
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules/actions@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/bookmarks@2025-06-01' = {
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

## microsoft.securityinsights/contentpackages

Install a package to the workspace.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/contentPackages@2025-06-01' = {
  name: 'example'
  properties: {
    contentId: 'str.azure-sentinel-solution-str'
    contentKind: 'Solution'
    contentProductId: 'str.azure-sentinel-solution-str-sl-igl6jawr4gwmu'
    displayName: 'str'
    version: '2.0.0'
  }
  tags: {
    tag1: 'str'
  }
}
```

## microsoft.securityinsights/contenttemplates

Get a template.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/contentTemplates@2025-06-01' = {
  name: 'example'
  properties: {
    author: {
      name: 'Microsoft'
      email: 'support@microsoft.com'
    }
    contentId: '8365ebfe-a381-45b7-ad08-7d818070e11f'
    contentKind: 'AnalyticsRule'
    contentProductId: 'str.azure-sentinel-solution-str-ar-cbfe4fndz66bi'
    displayName: 'API Protection workbook template'
    mainTemplate: {
      '$schema': 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#'
      contentVersion: '1.0.1'
      resources: [
        {
          name: '8365ebfe-a381-45b7-ad08-7d818070e11f'
          type: 'Microsoft.SecurityInsights/AlertRuleTemplates'
          apiVersion: '2022-04-01-preview'
          kind: 'Scheduled'
          location: '[parameters(\'workspace-location\')]'
          properties: {
            description: 'Creates an incident when a large number of Critical/High severity CrowdStrike Falcon sensor detections is triggered by a single user'
            displayName: 'Critical or High Severity Detections by User'
            enabled: false
            query: '...'
            queryFrequency: 'PT1H'
            queryPeriod: 'PT1H'
            severity: 'High'
            status: 'Available'
            suppressionDuration: 'PT1H'
            suppressionEnabled: false
            triggerOperator: 'GreaterThan'
            triggerThreshold: 0
          }
        }
        {
          name: '[concat(parameters(\'workspace\'),\'/Microsoft.SecurityInsights/\',concat(\'AnalyticsRule-\', last(split([resourceId(\'Microsoft.SecurityInsights/AlertRuleTemplates\', 8365ebfe-a381-45b7-ad08-7d818070e11f)],\'/\'))))]'
          type: 'Microsoft.OperationalInsights/workspaces/providers/metadata'
          apiVersion: '2022-01-01-preview'
          properties: {
            description: 'CrowdStrike Falcon Endpoint Protection Analytics Rule 1'
            author: {
              name: 'Microsoft'
              email: 'support@microsoft.com'
            }
            contentId: '4465ebde-b381-45f7-ad08-7d818070a11c'
            kind: 'AnalyticsRule'
            parentId: '[resourceId(\'Microsoft.SecurityInsights/AlertRuleTemplates\', 8365ebfe-a381-45b7-ad08-7d818070e11f)]'
            source: {
              name: 'str'
              kind: 'Solution'
              sourceId: 'str.azure-sentinel-solution-str'
            }
            support: {
              name: 'Microsoft Corporation'
              email: 'support@microsoft.com'
              link: 'https://support.microsoft.com/'
              tier: 'Microsoft'
            }
            version: '1.0.0'
          }
        }
      ]
    }
    packageId: 'str.azure-sentinel-solution-str'
    packageKind: 'Solution'
    packageName: 'str'
    packageVersion: '1.0.0'
    source: {
      name: 'str'
      kind: 'Solution'
      sourceId: 'str.azure-sentinel-solution-str'
    }
    support: {
      name: 'Microsoft Corporation'
      email: 'support@microsoft.com'
      link: 'https://support.microsoft.com/'
      tier: 'Microsoft'
    }
    version: '1.0.1'
  }
  tags: {
    tag1: 'str'
  }
}
```

## microsoft.securityinsights/dataconnectordefinitions

Create data connector definition
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectorDefinitions@2025-06-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Customizable'
  properties: {
    connectorUiConfig: {
      availability: {
        isPreview: false
        status: 1
      }
      connectivityCriteria: [
        {
          type: 'IsConnectedQuery'
          value: [
            'GitHubAuditLogPolling_CL \n | summarize LastLogReceived = max(TimeGenerated)\n | project IsConnected = LastLogReceived > ago(30d)'
          ]
        }
      ]
      dataTypes: [
        {
          name: 'GitHubAuditLogPolling_CL'
          lastDataReceivedQuery: 'GitHubAuditLogPolling_CL \n            | summarize Time = max(TimeGenerated)\n            | where isnotempty(Time)'
        }
      ]
      descriptionMarkdown: 'The GitHub audit log connector provides the capability to ingest GitHub logs into Azure Sentinel. By connecting GitHub audit logs into Azure Sentinel, you can view this data in workbooks, use it to create custom alerts, and improve your investigation process.'
      graphQueries: [
        {
          baseQuery: 'GitHubAuditLogPolling_CL'
          legend: 'GitHub audit log events'
          metricName: 'Total events received'
        }
      ]
      instructionSteps: [
        {
          description: 'Enable GitHub audit Logs. \n Follow [this](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create or find your personal key'
          instructions: [
            {
              type: 'OAuthForm'
              parameters: {
                clientIdLabel: 'Client ID'
                clientSecretLabel: 'Client Secret'
                connectButtonLabel: 'Connect'
                disconnectButtonLabel: 'Disconnect'
              }
            }
          ]
          title: 'Connect GitHub Enterprise Audit Log to Azure Sentinel'
        }
      ]
      permissions: {
        customs: [
          {
            name: 'GitHub API personal token Key'
            description: 'You need access to GitHub personal token, the key should have \'admin:org\' scope'
          }
        ]
        resourceProvider: [
          {
            permissionsDisplayText: 'read and write permissions are required.'
            provider: 'Microsoft.OperationalInsights/workspaces'
            providerDisplayName: 'Workspace'
            requiredPermissions: {
              action: false
              delete: false
              read: false
              write: true
            }
            scope: 'Workspace'
          }
        ]
      }
      publisher: 'GitHub'
      title: 'GitHub Enterprise Audit Log'
    }
  }
}
```

## microsoft.securityinsights/dataconnectors

Creates or updates a MicrosoftThreatIntelligence data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-06-01' = {
  name: 'example'
  kind: 'MicrosoftThreatIntelligence'
  properties: {
    dataTypes: {
      microsoftEmergingThreatFeed: {
        lookbackPeriod: '2024-11-01T00:00:00Z'
        state: 'Enabled'
      }
    }
    tenantId: '06b3ccb8-1384-4bcc-aec7-852f6d57161b'
  }
}
```

Creates or updates a PremiumMicrosoftDefenderForThreatIntelligence data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-06-01' = {
  name: 'example'
  kind: 'PremiumMicrosoftDefenderForThreatIntelligence'
  properties: {
    dataTypes: {
      connector: {
        state: 'Enabled'
      }
    }
    lookbackPeriod: '1970-01-01T00:00:00.000Z'
    tenantId: 'e4afb3c4-813b-4e68-b6de-e5360866e798'
  }
}
```

Creates or updates an Office365 data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2025-06-01' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents/relations@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/incidents/tasks

IncidentTasks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/tasks@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Task description'
    status: 'New'
    title: 'Task title'
  }
}
```

## microsoft.securityinsights/metadata

Create/update full metadata.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/metadata@2025-06-01' = {
  name: 'example'
  properties: {
    author: {
      name: 'User Name'
      email: 'email@microsoft.com'
    }
    categories: {
      domains: [
        'Application'
        'Security – Insider Threat'
      ]
      verticals: [
        'Healthcare'
      ]
    }
    contentId: 'c00ee137-7475-47c8-9cce-ec6f0f1bedd0'
    contentSchemaVersion: '2.0'
    customVersion: '1.0'
    dependencies: {
      criteria: [
        {
          criteria: [
            {
              name: 'Microsoft Defender for Endpoint'
              contentId: '045d06d0-ee72-4794-aba4-cf5646e4c756'
              kind: 'DataConnector'
            }
            {
              contentId: 'dbfcb2cc-d782-40ef-8d94-fe7af58a6f2d'
              kind: 'DataConnector'
            }
            {
              contentId: 'de4dca9b-eb37-47d6-a56f-b8b06b261593'
              kind: 'DataConnector'
              version: '2.0'
            }
          ]
          operator: 'OR'
        }
        {
          contentId: '31ee11cc-9989-4de8-b176-5e0ef5c4dbab'
          kind: 'Playbook'
          version: '1.0'
        }
        {
          contentId: '21ba424a-9438-4444-953a-7059539a7a1b'
          kind: 'Parser'
        }
      ]
      operator: 'AND'
    }
    firstPublishDate: '2021-05-18'
    kind: 'AnalyticsRule'
    lastPublishDate: '2021-05-18'
    parentId: '/subscriptions/2e1dc338-d04d-4443-b721-037eff4fdcac/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/ruleName'
    previewImages: [
      'firstImage.png'
      'secondImage.jpeg'
    ]
    previewImagesDark: [
      'firstImageDark.png'
      'secondImageDark.jpeg'
    ]
    providers: [
      'Amazon'
      'Microsoft'
    ]
    source: {
      name: 'Contoso Solution 1.0'
      kind: 'Solution'
      sourceId: 'b688a130-76f4-4a07-bf57-762222a3cadf'
    }
    support: {
      name: 'Microsoft'
      email: 'support@microsoft.com'
      link: 'https://support.microsoft.com/'
      tier: 'Partner'
    }
    threatAnalysisTactics: [
      'reconnaissance'
      'commandandcontrol'
    ]
    threatAnalysisTechniques: [
      'T1548'
      'T1548.001'
    ]
    version: '1.0.0.0'
  }
}
```

Create/update minimal metadata.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/metadata@2025-06-01' = {
  name: 'example'
  properties: {
    contentId: 'c00ee137-7475-47c8-9cce-ec6f0f1bedd0'
    kind: 'AnalyticsRule'
    parentId: '/subscriptions/2e1dc338-d04d-4443-b721-037eff4fdcac/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/ruleName'
  }
}
```

## microsoft.securityinsights/onboardingstates

Create Sentinel onboarding state
```bicep
resource exampleResource 'Microsoft.SecurityInsights/onboardingStates@2025-06-01' = {
  name: 'example'
  properties: {
    customerManagedKey: false
  }
}
```

## microsoft.securityinsights/securitymlanalyticssettings

Creates or updates a Anomaly Security ML Analytics Settings.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/securityMLAnalyticsSettings@2025-06-01' = {
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

## microsoft.securityinsights/sourcecontrols

Creates or updates a source control.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/sourcecontrols@2025-06-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a source control'
    contentTypes: [
      'AnalyticRules'
      'Workbook'
    ]
    displayName: 'My Source Control'
    repoType: 'Github'
    repository: {
      branch: 'master'
      displayUrl: 'https://github.com/user/repo'
      url: 'https://github.com/user/repo'
    }
    repositoryAccess: {
      clientId: '54b3c2c0-1f48-4a1c-af9f-6399c3240b73'
      code: '939fd7c6caf754f4f41f'
      kind: 'OAuth'
      state: 'state'
    }
  }
}
```

## microsoft.securityinsights/watchlists

Create or update a watchlist and bulk creates watchlist items.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2025-06-01' = {
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
    source: 'watchlist.csv'
    sourceType: 'Local'
  }
}
```

Create or update a watchlist.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2025-06-01' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    displayName: 'High Value Assets Watchlist'
    itemsSearchKey: 'header1'
    provider: 'Microsoft'
    source: 'watchlist.csv'
    sourceType: 'Local'
  }
}
```

## microsoft.securityinsights/watchlists/watchlistitems

Create or update a watchlist item.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists/watchlistItems@2025-06-01' = {
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
