# Microsoft.SecurityInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.securityinsights/alertrules

Creates or updates a Fusion alert rule with scenario exclusion pattern.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-01-01-preview' = {
  name: 'example'
  etag: '3d00c3ca-0000-0100-0000-5d42d5010000'
  kind: 'Fusion'
  properties: {
    alertRuleTemplateName: 'f71aba3d-28fb-450b-b192-4e76a83015c8'
    enabled: true
    sourceSettings: [
      {
        enabled: true
        sourceName: 'Anomalies'
        sourceSubTypes: {
        }
      }
      {
        enabled: true
        sourceName: 'Alert providers'
        sourceSubTypes: [
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Active Directory Identity Protection'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Defender'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Defender for IoT'
          }
          {
            enabled: true
            severityFilter: [
              'High'
              'Medium'
              'Low'
              'Informational'
            ]
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft 365 Defender'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Cloud App Security'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Endpoint'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Identity'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Office 365'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Sentinel scheduled analytics rules'
          }
        ]
      }
      {
        enabled: true
        sourceName: 'Raw logs from other sources'
        sourceSubTypes: [
          {
            enabled: true
            severityFilters: {
              filters: {
              }
            }
            sourceSubTypeName: 'Palo Alto Networks'
          }
        ]
      }
    ]
  }
}
```

Creates or updates a Fusion alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-01-01-preview' = {
  name: 'example'
  etag: '3d00c3ca-0000-0100-0000-5d42d5010000'
  kind: 'Fusion'
  properties: {
    alertRuleTemplateName: 'f71aba3d-28fb-450b-b192-4e76a83015c8'
    enabled: true
    sourceSettings: [
      {
        enabled: true
        sourceName: 'Anomalies'
        sourceSubTypes: {
        }
      }
      {
        enabled: true
        sourceName: 'Alert providers'
        sourceSubTypes: [
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Active Directory Identity Protection'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Defender'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Defender for IoT'
          }
          {
            enabled: true
            severityFilter: [
              'High'
              'Medium'
              'Low'
              'Informational'
            ]
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft 365 Defender'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Cloud App Security'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Endpoint'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Identity'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Microsoft Defender for Office 365'
          }
          {
            enabled: true
            severityFilters: {
              filters: [
                {
                  enabled: true
                  severity: 'High'
                }
                {
                  enabled: true
                  severity: 'Medium'
                }
                {
                  enabled: true
                  severity: 'Low'
                }
                {
                  enabled: true
                  severity: 'Informational'
                }
              ]
            }
            sourceSubTypeName: 'Azure Sentinel scheduled analytics rules'
          }
        ]
      }
      {
        enabled: true
        sourceName: 'Raw logs from other sources'
        sourceSubTypes: [
          {
            enabled: true
            severityFilters: {
              filters: {
              }
            }
            sourceSubTypeName: 'Palo Alto Networks'
          }
        ]
      }
    ]
  }
}
```

Creates or updates a MicrosoftSecurityIncidentCreation rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-01-01-preview' = {
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

Creates or updates a Nrt alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'NRT'
  properties: {
    description: ''
    displayName: 'Rule2'
    enabled: true
    eventGroupingSettings: {
      aggregationKind: 'AlertPerResult'
    }
    incidentConfiguration: {
      createIncident: true
      groupingConfiguration: {
        enabled: true
        groupByEntities: [
          'Host'
          'Account'
        ]
        lookbackDuration: 'PT5H'
        matchingMethod: 'Selected'
        reopenClosedIncident: false
      }
    }
    query: 'ProtectionStatus | extend HostCustomEntity = Computer | extend IPCustomEntity = ComputerIP_Hidden'
    severity: 'High'
    suppressionDuration: 'PT1H'
    suppressionEnabled: false
    tactics: [
      'Persistence'
      'LateralMovement'
    ]
    techniques: [
      'T1037'
      'T1021'
    ]
  }
}
```

Creates or updates a Scheduled alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2025-01-01-preview' = {
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
    sentinelEntitiesMappings: [
      {
        columnName: 'Entities'
      }
    ]
    severity: 'High'
    suppressionDuration: 'PT1H'
    suppressionEnabled: false
    tactics: [
      'Persistence'
      'LateralMovement'
    ]
    techniques: [
      'T1037'
      'T1021'
    ]
    triggerOperator: 'GreaterThan'
    triggerThreshold: 0
  }
}
```

## microsoft.securityinsights/alertrules/actions

Creates or updates an action of alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules/actions@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/bookmarks@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    created: '2021-09-01T13:15:30Z'
    createdBy: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
    displayName: 'My bookmark'
    entityMappings: [
      {
        entityType: 'Account'
        fieldMappings: [
          {
            identifier: 'Fullname'
            value: 'johndoe@microsoft.com'
          }
        ]
      }
    ]
    labels: [
      'Tag1'
      'Tag2'
    ]
    notes: 'Found a suspicious activity'
    query: 'SecurityEvent | where TimeGenerated > ago(1d) and TimeGenerated < ago(2d)'
    queryResult: 'Security Event query result'
    tactics: [
      'Execution'
    ]
    techniques: [
      'T1609'
    ]
    updated: '2021-09-01T13:15:30Z'
    updatedBy: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
  }
}
```

## microsoft.securityinsights/bookmarks/relations

Creates or updates a bookmark relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/bookmarks/relations@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/incidents/afbd324f-6c48-459c-8710-8d1e1cd03812'
  }
}
```

## microsoft.securityinsights/contentpackages

Install a package to the workspace.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/contentPackages@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/contentTemplates@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/dataConnectorDefinitions@2025-01-01-preview' = {
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

Creates or updates a APIPolling data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  kind: 'APIPolling'
  properties: {
    connectorUiConfig: {
      availability: {
        isPreview: true
        status: 1
      }
      connectivityCriteria: [
        {
          type: 'SentinelKindsV2'
          value: [
          ]
        }
      ]
      dataTypes: [
        {
          name: '{{graphQueriesTableName}}'
          lastDataReceivedQuery: '{{graphQueriesTableName}}\n            | summarize Time = max(TimeGenerated)\n            | where isnotempty(Time)'
        }
      ]
      descriptionMarkdown: 'The GitHub audit log connector provides the capability to ingest GitHub logs into Azure Sentinel. By connecting GitHub audit logs into Azure Sentinel, you can view this data in workbooks, use it to create custom alerts, and improve your investigation process.'
      graphQueries: [
        {
          baseQuery: '{{graphQueriesTableName}}'
          legend: 'GitHub audit log events'
          metricName: 'Total events received'
        }
      ]
      graphQueriesTableName: 'GitHubAuditLogPolling_CL'
      instructionSteps: [
        {
          description: 'Enable GitHub audit Logs. \n Follow [this](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) to create or find your personal key'
          instructions: [
            {
              type: 'APIKey'
              parameters: {
                enable: 'true'
                userRequestPlaceHoldersInput: [
                  {
                    displayText: 'Organization Name'
                    placeHolderName: '{{placeHolder1}}'
                    placeHolderValue: ''
                    requestObjectKey: 'apiEndpoint'
                  }
                ]
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
              delete: true
              read: true
              write: true
            }
            scope: 'Workspace'
          }
        ]
      }
      publisher: 'GitHub'
      sampleQueries: [
        {
          description: 'All logs'
          query: '{{graphQueriesTableName}}\n | take 10 <change>'
        }
      ]
      title: 'GitHub Enterprise Audit Log'
    }
    pollingConfig: {
      auth: {
        apiKeyIdentifier: 'token'
        apiKeyName: 'Authorization'
        authType: 'APIKey'
      }
      paging: {
        pageSizeParaName: 'per_page'
        pagingType: 'LinkHeader'
      }
      response: {
        eventsJsonPaths: [
          '$'
        ]
      }
      request: {
        apiEndpoint: 'https://api.github.com/organizations/{{placeHolder1}}/audit-log'
        headers: {
          Accept: 'application/json'
          'User-Agent': 'Scuba'
        }
        httpMethod: 'Get'
        queryParameters: {
          phrase: 'created:{_QueryWindowStartTime}..{_QueryWindowEndTime}'
        }
        queryTimeFormat: 'yyyy-MM-ddTHH:mm:ssZ'
        queryWindowInMin: 15
        rateLimitQps: 50
        retryCount: 2
        timeoutInSeconds: 60
      }
    }
  }
}
```

Creates or updates a Dynamics365 data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Dynamics365'
  properties: {
    dataTypes: {
      dynamics365CdsActivities: {
        state: 'Enabled'
      }
    }
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates a GCP data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  kind: 'GCP'
  properties: {
    auth: {
      type: 'GCP'
      projectNumber: '123456789012'
      serviceAccountEmail: 'sentinel-service-account@project-id.iam.gserviceaccount.com'
      workloadIdentityProviderId: 'sentinel-identity-provider'
    }
    connectorDefinitionName: 'GcpConnector'
    dcrConfig: {
      dataCollectionEndpoint: 'https://microsoft-sentinel-datacollectionendpoint-123m.westeurope-1.ingest.monitor.azure.com'
      dataCollectionRuleImmutableId: 'dcr-de21b053bd5a44beb99a256c9db85023'
      streamName: 'SENTINEL_GCP_AUDIT_LOGS'
    }
    request: {
      projectId: 'project-id'
      subscriptionNames: [
        'sentinel-subscription'
      ]
    }
  }
}
```

Creates or updates a GenericUI data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  kind: 'GenericUI'
  properties: {
    connectorUiConfig: {
      availability: {
        isPreview: true
        status: 1
      }
      connectivityCriteria: [
        {
          type: 'IsConnectedQuery'
          value: [
            '{{graphQueriesTableName}}\n            | summarize LastLogReceived = max(TimeGenerated)\n            | project IsConnected = LastLogReceived > ago(30d)'
          ]
        }
      ]
      dataTypes: [
        {
          name: '{{graphQueriesTableName}}'
          lastDataReceivedQuery: '{{graphQueriesTableName}}\n            | summarize Time = max(TimeGenerated)\n            | where isnotempty(Time)'
        }
      ]
      descriptionMarkdown: 'The [Qualys Vulnerability Management (VM)](https://www.qualys.com/apps/vulnerability-management/) data connector provides the capability to ingest vulnerability host detection data into Azure Sentinel through the Qualys API. The connector provides visibility into host detection data from vulerability scans. This connector provides Azure Sentinel the capability to view dashboards, create custom alerts, and improve investigation '
      graphQueries: [
        {
          baseQuery: '{{graphQueriesTableName}}'
          legend: '{{graphQueriesTableName}}'
          metricName: 'Total data received'
        }
      ]
      graphQueriesTableName: 'QualysHostDetection_CL'
      instructionSteps: [
        {
          description: '>**NOTE:** This connector uses Azure Functions to connect to Qualys VM to pull its logs into Azure Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.'
          title: ''
        }
        {
          description: '>**(Optional Step)** Securely store workspace and API authorization key(s) or token(s) in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.'
          title: ''
        }
        {
          description: '**STEP 1 - Configuration steps for the Qualys VM API**\n\n1. Log into the Qualys Vulnerability Management console with an administrator account, select the **Users** tab and the **Users** subtab. \n2. Click on the **New** drop-down menu and select **Users..**\n3. Create a username and password for the API account. \n4. In the **User Roles** tab, ensure the account role is set to **Manager** and access is allowed to **GUI** and **API**\n4. Log out of the administrator account and log into the console with the new API credentials for validation, then log out of the API account. \n5. Log back into the console using an administrator account and modify the API accounts User Roles, removing access to **GUI**. \n6. Save all changes.'
          title: ''
        }
        {
          description: '**STEP 2 - Choose ONE from the following two deployment options to deploy the connector and the associated Azure Function**\n\n>**IMPORTANT:** Before deploying the Qualys VM connector, have the Workspace ID and Workspace Primary Key (can be copied from the following), as well as the Qualys VM API Authorization Key(s), readily available.'
          instructions: [
            {
              type: 'CopyableLabel'
              parameters: {
                fillWith: [
                  'WorkspaceId'
                ]
                label: 'Workspace ID'
              }
            }
            {
              type: 'CopyableLabel'
              parameters: {
                fillWith: [
                  'PrimaryKey'
                ]
                label: 'Primary Key'
              }
            }
          ]
          title: ''
        }
        {
          description: 'Use this method for automated deployment of the Qualys VM connector using an ARM Tempate.\n\n1. Click the **Deploy to Azure** button below. \n\n\t[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinelqualysvmazuredeploy)\n2. Select the preferred **Subscription**, **Resource Group** and **Location**. \n3. Enter the **Workspace ID**, **Workspace Key**, **API Username**, **API Password** , update the **URI**, and any additional URI **Filter Parameters** (each filter should be separated by an "&" symbol, no spaces.) \n> - Enter the URI that corresponds to your region. The complete list of API Server URLs can be [found here](https://www.qualys.com/docs/qualys-api-vmpc-user-guide.pdf#G4.735348) -- There is no need to add a time suffix to the URI, the Function App will dynamically append the Time Value to the URI in the proper format. \n - The default **Time Interval** is set to pull the last five (5) minutes of data. If the time interval needs to be modified, it is recommended to change the Function App Timer Trigger accordingly (in the function.json file, post deployment) to prevent overlapping data ingestion. \n> - Note: If using Azure Key Vault secrets for any of the values above, use the`@Microsoft.KeyVault(SecretUri={Security Identifier})`schema in place of the string values. Refer to [Key Vault references documentation](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) for further details. \n4. Mark the checkbox labeled **I agree to the terms and conditions stated above**. \n5. Click **Purchase** to deploy.'
          title: 'Option 1 - Azure Resource Manager (ARM) Template'
        }
        {
          description: 'Use the following step-by-step instructions to deploy the Quayls VM connector manually with Azure Functions.'
          title: 'Option 2 - Manual Deployment of Azure Functions'
        }
        {
          description: '**1. Create a Function App**\n\n1.  From the Azure Portal, navigate to [Function App](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp), and select **+ Add**.\n2. In the **Basics** tab, ensure Runtime stack is set to **Powershell Core**. \n3. In the **Hosting** tab, ensure the **Consumption (Serverless)** plan type is selected.\n4. Make other preferrable configuration changes, if needed, then click **Create**.'
          title: ''
        }
        {
          description: '**2. Import Function App Code**\n\n1. In the newly created Function App, select **Functions** on the left pane and click **+ New Function**.\n2. Select **Timer Trigger**.\n3. Enter a unique Function **Name** and leave the default cron schedule of every 5 minutes, then click **Create**.\n5. Click on **Code + Test** on the left pane. \n6. Copy the [Function App Code](https://aka.ms/sentinelqualysvmazurefunctioncode) and paste into the Function App `run.ps1` editor.\n7. Click **Save**.'
          title: ''
        }
        {
          description: '**3. Configure the Function App**\n\n1. In the Function App, select the Function App Name and select **Configuration**.\n2. In the **Application settings** tab, select **+ New application setting**.\n3. Add each of the following seven (7) application settings individually, with their respective string values (case-sensitive): \n\t\tapiUsername\n\t\tapiPassword\n\t\tworkspaceID\n\t\tworkspaceKey\n\t\turi\n\t\tfilterParameters\n\t\ttimeInterval\n> - Enter the URI that corresponds to your region. The complete list of API Server URLs can be [found here](https://www.qualys.com/docs/qualys-api-vmpc-user-guide.pdf#G4.735348). The `uri` value must follow the following schema: `https://<API Server>/api/2.0/fo/asset/host/vm/detection/?action=list&vm_processed_after=` -- There is no need to add a time suffix to the URI, the Function App will dynamically append the Time Value to the URI in the proper format.\n> - Add any additional filter parameters, for the `filterParameters` variable, that need to be appended to the URI. Each parameter should be seperated by an "&" symbol and should not include any spaces.\n> - Set the `timeInterval` (in minutes) to the value of `5` to correspond to the Timer Trigger of every `5` minutes. If the time interval needs to be modified, it is recommended to change the Function App Timer Trigger accordingly to prevent overlapping data ingestion.\n> - Note: If using Azure Key Vault, use the`@Microsoft.KeyVault(SecretUri={Security Identifier})`schema in place of the string values. Refer to [Key Vault references documentation](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) for further details.\n4. Once all application settings have been entered, click **Save**.'
          title: ''
        }
        {
          description: '**4. Configure the host.json**.\n\nDue to the potentially large amount of Qualys host detection data being ingested, it can cause the execution time to surpass the default Function App timeout of five (5) minutes. Increase the default timeout duration to the maximum of ten (10) minutes, under the Consumption Plan, to allow more time for the Function App to execute.\n\n1. In the Function App, select the Function App Name and select the **App Service Editor** blade.\n2. Click **Go** to open the editor, then select the **host.json** file under the **wwwroot** directory.\n3. Add the line `"functionTimeout": "00:10:00",` above the `managedDependancy` line \n4. Ensure **SAVED** appears on the top right corner of the editor, then exit the editor.\n\n> NOTE: If a longer timeout duration is required, consider upgrading to an [App Service Plan](https://docs.microsoft.com/azure/azure-functions/functions-scale#timeout)'
          title: ''
        }
      ]
      permissions: {
        customs: [
          {
            name: 'Microsoft.Web/sites permissions'
            description: 'Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).'
          }
          {
            name: 'Qualys API Key'
            description: 'A Qualys VM API username and password is required. [See the documentation to learn more about Qualys VM API](https://www.qualys.com/docs/qualys-api-vmpc-user-guide.pdf).'
          }
        ]
        resourceProvider: [
          {
            permissionsDisplayText: 'read and write permissions on the workspace are required.'
            provider: 'Microsoft.OperationalInsights/workspaces'
            providerDisplayName: 'Workspace'
            requiredPermissions: {
              delete: true
              read: true
              write: true
            }
            scope: 'Workspace'
          }
          {
            permissionsDisplayText: 'read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).'
            provider: 'Microsoft.OperationalInsights/workspaces/sharedKeys'
            providerDisplayName: 'Keys'
            requiredPermissions: {
              action: true
            }
            scope: 'Workspace'
          }
        ]
      }
      publisher: 'Qualys'
      sampleQueries: [
        {
          description: 'Top 10 Vulerabilities detected'
          query: '{{graphQueriesTableName}}\n | mv-expand todynamic(Detections_s)\n | extend Vulnerability = tostring(Detections_s.Results)\n | summarize count() by Vulnerability\n | top 10 by count_'
        }
      ]
      title: 'Qualys Vulnerability Management (CCP DEMO)'
    }
  }
}
```

Creates or updates a Microsoft Threat Intelligence data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  kind: 'MicrosoftThreatIntelligence'
  properties: {
    dataTypes: {
      microsoftEmergingThreatFeed: {
        lookbackPeriod: '1970-01-01T00:00:00.000Z'
        state: 'Enabled'
      }
    }
    tenantId: '06b3ccb8-1384-4bcc-aec7-852f6d57161b'
  }
}
```

Creates or updates a MicrosoftThreatProtection data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'MicrosoftThreatProtection'
  properties: {
    dataTypes: {
      alerts: {
        state: 'Enabled'
      }
      incidents: {
        state: 'Disabled'
      }
    }
    filteredProviders: {
      alerts: [
        'microsoftDefenderForCloudApps'
      ]
    }
    tenantId: '178265c4-3136-4ff6-8ed1-b5b62b4cb5f5'
  }
}
```

Creates or updates a PurviewAudit data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'PurviewAudit'
  properties: {
    connectorDefinitionName: 'PowerAutomate'
    dataTypes: {
      logs: {
        state: 'Enabled'
      }
    }
    dcrConfig: {
      dataCollectionEndpoint: 'https://microsoft-sentinel-datacollectionendpoint-123m.westeurope-1.ingest.monitor.azure.com'
      dataCollectionRuleImmutableId: 'dcr-de21b053bd5a44beb99a256c9db85023'
      streamName: 'OFFICEPOWERAUTOMATE_RESTAPI'
    }
    sourceType: 'MicrosoftFlow'
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates a Threat Intelligence Taxii data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: 'd12423f6-a60b-4ca5-88c0-feb1a182d0f0'
  kind: 'ThreatIntelligenceTaxii'
  properties: {
    collectionId: '135'
    dataTypes: {
      taxiiClient: {
        state: 'Enabled'
      }
    }
    friendlyName: 'testTaxii'
    password: '--'
    pollingFrequency: 'OnceADay'
    taxiiLookbackPeriod: '2020-01-01T13:00:30.123Z'
    taxiiServer: 'https://limo.anomali.com/api/v1/taxii2/feeds'
    tenantId: '06b3ccb8-1384-4bcc-aec7-852f6d57161b'
    userName: '--'
    workspaceId: 'dd124572-4962-4495-9bd2-9dade12314b4'
  }
}
```

Creates or updates an MicrosoftPurviewInformationProtection data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'MicrosoftPurviewInformationProtection'
  properties: {
    dataTypes: {
      logs: {
        state: 'Enabled'
      }
    }
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates an Office PowerBI data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'OfficePowerBI'
  properties: {
    dataTypes: {
      logs: {
        state: 'Enabled'
      }
    }
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates an Office365 data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
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

Creates or updates an Office365 Project data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Office365Project'
  properties: {
    dataTypes: {
      logs: {
        state: 'Enabled'
      }
    }
    tenantId: '2070ecc9-b4d5-4ae4-adaa-936fa1954fa8'
  }
}
```

Creates or updates an Threat Intelligence Platform data connector
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2025-01-01-preview' = {
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

## microsoft.securityinsights/entityqueries

Creates or updates an Activity entity query.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/entityQueries@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Activity'
  properties: {
    description: 'Account deleted on host'
    content: 'On \'{{Computer}}\' the account \'{{TargetAccount}}\' was deleted by \'{{AddedBy}}\''
    enabled: true
    entitiesFilter: {
      Host_OsFamily: [
        'Windows'
      ]
    }
    inputEntityType: 'Host'
    queryDefinitions: {
      query: 'let GetAccountActions = (v_Host_Name:string, v_Host_NTDomain:string, v_Host_DnsDomain:string, v_Host_AzureID:string, v_Host_OMSAgentID:string){\nSecurityEvent\n| where EventID in (4725, 4726, 4767, 4720, 4722, 4723, 4724)\n// parsing for Host to handle variety of conventions coming from data\n| extend Host_HostName = case(\nComputer has \'@\', tostring(split(Computer, \'@\')[0]),\nComputer has \'\\\\\', tostring(split(Computer, \'\\\\\')[1]),\nComputer has \'.\', tostring(split(Computer, \'.\')[0]),\nComputer\n)\n| extend Host_NTDomain = case(\nComputer has \'\\\\\', tostring(split(Computer, \'\\\\\')[0]), \nComputer has \'.\', tostring(split(Computer, \'.\')[-2]), \nComputer\n)\n| extend Host_DnsDomain = case(\nComputer has \'\\\\\', tostring(split(Computer, \'\\\\\')[0]), \nComputer has \'.\', strcat_array(array_slice(split(Computer,\'.\'),-2,-1),\'.\'), \nComputer\n)\n| where (Host_HostName =~ v_Host_Name and Host_NTDomain =~ v_Host_NTDomain) \nor (Host_HostName =~ v_Host_Name and Host_DnsDomain =~ v_Host_DnsDomain) \nor v_Host_AzureID =~ _ResourceId \nor v_Host_OMSAgentID == SourceComputerId\n| project TimeGenerated, EventID, Activity, Computer, TargetAccount, TargetUserName, TargetDomainName, TargetSid, SubjectUserName, SubjectUserSid, _ResourceId, SourceComputerId\n| extend AddedBy = SubjectUserName\n// Future support for Activities\n| extend timestamp = TimeGenerated, HostCustomEntity = Computer, AccountCustomEntity = TargetAccount\n};\nGetAccountActions(\'{{Host_HostName}}\', \'{{Host_NTDomain}}\', \'{{Host_DnsDomain}}\', \'{{Host_AzureID}}\', \'{{Host_OMSAgentID}}\')\n \n| where EventID == 4726 '
    }
    requiredInputFieldsSets: [
      [
        'Host_HostName'
        'Host_NTDomain'
      ]
      [
        'Host_HostName'
        'Host_DnsDomain'
      ]
      [
        'Host_AzureID'
      ]
      [
        'Host_OMSAgentID'
      ]
    ]
    templateName: {
    }
    title: 'An account was deleted on this host'
  }
}
```

## microsoft.securityinsights/fileimports

Create a file import.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/fileImports@2025-01-01-preview' = {
  name: 'example'
  properties: {
    contentType: 'StixIndicator'
    importFile: {
      fileFormat: 'JSON'
      fileName: 'myFile.json'
      fileSize: 4653
    }
    ingestionMode: 'IngestAnyValidRecords'
    source: 'mySource'
  }
}
```

## microsoft.securityinsights/hunts

Creates or updates a hunt.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/hunts@2025-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'Log4J Hunt Description'
    attackTactics: [
      'Reconnaissance'
    ]
    attackTechniques: [
      'T1595'
    ]
    displayName: 'Log4J new hunt'
    hypothesisStatus: 'Unknown'
    labels: [
      'Label1'
      'Label2'
    ]
    owner: {
      objectId: '873b5263-5d34-4149-b356-ad341b01e123'
    }
    status: 'New'
  }
}
```

## microsoft.securityinsights/hunts/comments

Creates or updates a hunt comment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/hunts/comments@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    message: 'This is a test comment.'
  }
}
```

## microsoft.securityinsights/hunts/relations

Creates or updates a hunt relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/hunts/relations@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    labels: [
      'Test Label'
    ]
    relatedResourceId: '/subscriptions/bd794837-4d29-4647-9105-6339bfdb4e6a/resourceGroups/mms-eus/providers/Microsoft.OperationalInsights/workspaces/avdvirint/providers/Microsoft.SecurityInsights/Bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/incidents

Incidents_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a demo incident'
    classification: 'FalsePositive'
    classificationComment: 'Not a malicious activity'
    classificationReason: 'InaccurateData'
    firstActivityTimeUtc: '2019-01-01T13:00:30Z'
    lastActivityTimeUtc: '2019-01-01T13:05:30Z'
    owner: {
      assignedTo: {
      }
      email: {
      }
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
      ownerType: {
      }
      userPrincipalName: {
      }
    }
    severity: 'High'
    status: 'Closed'
    title: 'My incident'
  }
}
```

## microsoft.securityinsights/incidents/comments

IncidentComments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents/relations@2025-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalIinsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/incidents/tasks

IncidentTasks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SecurityInsights/incidents/tasks@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/metadata@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/metadata@2025-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/onboardingStates@2025-01-01-preview' = {
  name: 'example'
  properties: {
    customerManagedKey: false
  }
}
```

## microsoft.securityinsights/securitymlanalyticssettings

Creates or updates a Anomaly Security ML Analytics Settings.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/securityMLAnalyticsSettings@2025-01-01-preview' = {
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

## microsoft.securityinsights/settings

Update EyesOn settings.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/settings@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'EyesOn'
  properties: {
  }
}
```

## microsoft.securityinsights/sourcecontrols

Creates or updates a source control.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/sourcecontrols@2025-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a source control'
    contentTypes: [
      'AnalyticsRule'
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

Creates or updates a watchlist and bulk creates watchlist items.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2025-01-01-preview' = {
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

Creates or updates a watchlist.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2025-01-01-preview' = {
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

Creates or updates a watchlist item.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists/watchlistItems@2025-01-01-preview' = {
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

## microsoft.securityinsights/workspacemanagerassignments

Creates or updates a workspace manager assignment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/workspaceManagerAssignments@2025-01-01-preview' = {
  name: 'example'
  properties: {
    items: [
      {
        resourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspac-es/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/microsoftSecurityIncidentCreationRuleExampleOne'
      }
      {
        resourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspac-es/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/microsoftSecurityIncidentCreationRuleExampleTwo'
      }
    ]
    targetResourceName: '37207a7a-3b8a-438f-a559-c7df400e1b96'
  }
}
```

## microsoft.securityinsights/workspacemanagerconfigurations

Create or Update a workspace manager Configuration
```bicep
resource exampleResource 'Microsoft.SecurityInsights/workspaceManagerConfigurations@2025-01-01-preview' = {
  name: 'example'
  properties: {
    mode: 'Enabled'
  }
}
```

## microsoft.securityinsights/workspacemanagergroups

Creates or updates a workspace manager group.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/workspaceManagerGroups@2025-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'Group of all financial and banking institutions'
    displayName: 'Banks'
    memberResourceNames: [
      'afbd324f-6c48-459c-8710-8d1e1cd03812'
      'f5fa104e-c0e3-4747-9182-d342dc048a9e'
    ]
  }
}
```

## microsoft.securityinsights/workspacemanagermembers

Create or Update a workspace manager member
```bicep
resource exampleResource 'Microsoft.SecurityInsights/workspaceManagerMembers@2025-01-01-preview' = {
  name: 'example'
  properties: {
    targetWorkspaceResourceId: '/subscriptions/7aef9d48-814f-45ad-b644-b0343316e174/resourceGroups/otherRg/providers/Microsoft.OperationalInsights/workspaces/Example_Workspace'
    targetWorkspaceTenantId: 'f676d436-8d16-42db-81b7-ab578e110ccd'
  }
}
```
