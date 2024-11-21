# Microsoft.SecurityInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.securityinsights/alertrules

Creates or updates a Fusion alert rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules@2019-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'Scheduled'
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
        entitiesMatchingMethod: 'Custom'
        groupByEntities: [
          'Host'
          'Account'
        ]
        lookbackDuration: 'PT5H'
        reopenClosedIncident: false
      }
    }
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
resource exampleResource 'Microsoft.SecurityInsights/alertRules/actions@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    logicAppResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.Logic/workflows/MyAlerts'
    triggerUri: 'https://prod-31.northcentralus.logic.azure.com:443/workflows/cd3765391efd48549fd7681ded1d48d7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=signature'
  }
}
```

## microsoft.securityinsights/automationrules

Creates or updates an automation rule.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/automationRules@2019-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    actions: [
      {
        actionConfiguration: {
          severity: 'High'
        }
        actionType: 'ModifyProperties'
        order: 1
      }
      {
        actionConfiguration: {
          logicAppResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.Logic/workflows/IncidentPlaybook'
          tenantId: 'ee48efaf-50c6-411b-9345-b2bdc3eb4abc'
        }
        actionType: 'RunPlaybook'
        order: 2
      }
    ]
    displayName: 'High severity incidents escalation'
    order: 1
    triggeringLogic: {
      conditions: [
        {
          conditionProperties: {
            operator: 'Contains'
            propertyName: 'IncidentRelatedAnalyticRuleIds'
            propertyValues: [
              '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/fab3d2d4-747f-46a7-8ef0-9c0be8112bf7'
              '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/alertRules/8deb8303-e94d-46ff-96e0-5fd94b33df1a'
            ]
          }
          conditionType: 'Property'
        }
      ]
      isEnabled: true
      triggersOn: 'Incidents'
      triggersWhen: 'Created'
    }
  }
}
```

## microsoft.securityinsights/bookmarks

Creates or updates a bookmark.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/bookmarks@2019-01-01-preview' = {
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

## microsoft.securityinsights/bookmarks/relations

Creates or updates a bookmark relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/bookmarks/relations@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/incidents/afbd324f-6c48-459c-8710-8d1e1cd03812'
  }
}
```

## microsoft.securityinsights/cases

Creates or updates a case.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/cases@2019-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'This is a demo case'
    closeReason: 'Resolved'
    endTimeUtc: '2019-01-01T13:05:30Z'
    labels: [
      'Tag1'
      'Tag2'
    ]
    owner: {
      objectId: '2046feea-040d-4a46-9e2b-91c2941bfa70'
    }
    severity: 'High'
    startTimeUtc: '2019-01-01T13:00:30Z'
    status: 'Closed'
    title: 'My case'
  }
}
```

## microsoft.securityinsights/cases/comments

Creates or updates a case comment.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/cases/comments@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    message: 'Some message'
  }
}
```

## microsoft.securityinsights/cases/relations

Creates or updates a case relation.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/cases/relations@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    sourceRelationNode: {
      relationNodeId: 'afbd324f-6c48-459c-8710-8d1e1cd03812'
    }
    targetRelationNode: {
      relationNodeId: '2216d0e1-91e3-4902-89fd-d2df8c535096'
    }
  }
}
```

## microsoft.securityinsights/dataconnectors

Creates or updates a Dynamics365 data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview' = {
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

Creates or updates a Threat Intelligence Taxii data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview' = {
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

Creates or updates an Office365 data connector.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/dataConnectors@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents/comments@2019-01-01-preview' = {
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
resource exampleResource 'Microsoft.SecurityInsights/incidents/relations@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relatedResourceId: '/subscriptions/d0cfe6b2-9ac0-4464-9919-dccaee2e48c0/resourceGroups/myRg/providers/Microsoft.OperationalInsights/workspaces/myWorkspace/providers/Microsoft.SecurityInsights/bookmarks/2216d0e1-91e3-4902-89fd-d2df8c535096'
  }
}
```

## microsoft.securityinsights/settings

Update EyesOn settings.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/settings@2019-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  kind: 'EyesOn'
  properties: {
  }
}
```

## microsoft.securityinsights/watchlists

Creates a watchlist.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists@2019-01-01-preview' = {
  name: 'example'
  etag: '"0300bf09-0000-0000-0000-5c37296e0000"'
  properties: {
    description: 'Watchlist from CSV content'
    contentType: 'text/csv'
    displayName: 'High Value Assets Watchlist'
    numberOfLinesToSkip: 1
    provider: 'Microsoft'
    rawContent: 'This line will be skipped\nheader1,header2\nvalue1,value2'
    source: 'Local file'
  }
}
```

## microsoft.securityinsights/watchlists/watchlistitems

Creates or updates a watchlist item.
```bicep
resource exampleResource 'Microsoft.SecurityInsights/watchlists/watchlistItems@2019-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  etag: '0300bf09-0000-0000-0000-5c37296e0000'
  properties: {
    itemsKeyValue: {
      Business tier: '10.0.2.0/24'
      Data tier: '10.0.2.0/24'
      Gateway subnet: '10.0.255.224/27'
      Private DMZ in: '10.0.0.0/27'
      Public DMZ out: '10.0.0.96/27'
      Web Tier: '10.0.1.0/24'
    }
  }
}
```
