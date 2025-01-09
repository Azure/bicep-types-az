# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/datacollectionendpoints

Create a data collection endpoint
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionEndpoints@2023-03-11' = {
  name: 'example'
  location: 'eastus'
  properties: {
    networkAcls: {
      publicNetworkAccess: 'Enabled'
    }
  }
}
```

Update a data collection endpoint
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionEndpoints@2023-03-11' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
  tags: {
    tag1: 'A'
    tag2: 'B'
    tag3: 'C'
  }
}
```

## microsoft.insights/datacollectionruleassociations

Create or update association
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRuleAssociations@2023-03-11' = {
  name: 'example'
  properties: {
    dataCollectionRuleId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Insights/dataCollectionRules/myCollectionRule'
  }
}
```

Create or update association with a data collection endpoint
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRuleAssociations@2023-03-11' = {
  name: 'example'
  properties: {
    dataCollectionEndpointId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Insights/dataCollectionEndpoints/myCollectionEndpoint'
  }
}
```

## microsoft.insights/datacollectionrules

Create or update an agent settings configuration
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRules@2023-03-11' = {
  name: 'example'
  kind: 'AgentSettings'
  location: 'eastus'
  properties: {
    description: 'An agent settings configuration'
    agentSettings: {
      logs: [
        {
          name: 'MaxDiskQuotaInMB'
          value: '5000'
        }
        {
          name: 'UseTimeReceivedForForwardedEvents'
          value: '1'
        }
      ]
    }
  }
}
```

Create or update data collection rule
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRules@2023-03-11' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dataFlows: [
      {
        destinations: [
          'centralWorkspace'
        ]
        streams: [
          'Microsoft-Perf'
          'Microsoft-Syslog'
          'Microsoft-WindowsEvent'
        ]
      }
    ]
    dataSources: {
      performanceCounters: [
        {
          name: 'cloudTeamCoreCounters'
          counterSpecifiers: [
            '\\Processor(_Total)\\% Processor Time'
            '\\Memory\\Committed Bytes'
            '\\LogicalDisk(_Total)\\Free Megabytes'
            '\\PhysicalDisk(_Total)\\Avg. Disk Queue Length'
          ]
          samplingFrequencyInSeconds: 15
          streams: [
            'Microsoft-Perf'
          ]
        }
        {
          name: 'appTeamExtraCounters'
          counterSpecifiers: [
            '\\Process(_Total)\\Thread Count'
          ]
          samplingFrequencyInSeconds: 30
          streams: [
            'Microsoft-Perf'
          ]
        }
      ]
      syslog: [
        {
          name: 'cronSyslog'
          facilityNames: [
            'cron'
          ]
          logLevels: [
            'Debug'
            'Critical'
            'Emergency'
          ]
          streams: [
            'Microsoft-Syslog'
          ]
        }
        {
          name: 'syslogBase'
          facilityNames: [
            'syslog'
          ]
          logLevels: [
            'Alert'
            'Critical'
            'Emergency'
          ]
          streams: [
            'Microsoft-Syslog'
          ]
        }
      ]
      windowsEventLogs: [
        {
          name: 'cloudSecurityTeamEvents'
          streams: [
            'Microsoft-WindowsEvent'
          ]
          xPathQueries: [
            'Security!'
          ]
        }
        {
          name: 'appTeam1AppEvents'
          streams: [
            'Microsoft-WindowsEvent'
          ]
          xPathQueries: [
            'System![System[(Level = 1 or Level = 2 or Level = 3)]]'
            'Application!*[System[(Level = 1 or Level = 2 or Level = 3)]]'
          ]
        }
      ]
    }
    destinations: {
      logAnalytics: [
        {
          name: 'centralWorkspace'
          workspaceResourceId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.OperationalInsights/workspaces/centralTeamWorkspace'
        }
      ]
    }
  }
}
```

Create or update data collection rule with embedded ingestion endpoints
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRules@2023-03-11' = {
  name: 'example'
  kind: ' Direct'
  location: 'eastus'
  properties: {
    description: 'A Direct Ingestion Rule with builtin ingestion fqdns'
    dataFlows: [
      {
        destinations: [
          'myworkspace'
        ]
        outputStream: 'Custom-LOGS1_CL'
        streams: [
          'Custom-LOGS1_CL'
        ]
        transformKql: 'source | extend jsonContext = parse_json(AdditionalContext) | project TimeGenerated = Time, Computer, AdditionalContext = jsonContext, CounterName=tostring(jsonContext.CounterName), CounterValue=toreal(jsonContext.CounterValue)'
      }
    ]
    destinations: {
      logAnalytics: [
        {
          name: 'centralWorkspace'
          workspaceResourceId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.OperationalInsights/workspaces/centralTeamWorkspace'
        }
      ]
    }
    streamDeclarations: {
      'Custom-LOGS1_CL': {
        columns: [
          {
            name: 'Time'
            type: 'datetime'
          }
          {
            name: 'Computer'
            type: 'string'
          }
          {
            name: 'AdditionalContext'
            type: 'string'
          }
          {
            name: 'CounterName'
            type: 'string'
          }
          {
            name: 'CounterValue'
            type: 'real'
          }
        ]
      }
    }
  }
}
```

Create or update data collection rule with enrichment
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRules@2023-03-11' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'A rule showcasing ingestion time enrichment'
    dataCollectionEndpointId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Insights/dataCollectionEndpoints/myDataCollectionEndpoint'
    dataFlows: [
      {
        destinations: [
          'centralWorkspace'
        ]
        outputStream: 'Custom-LOGS1_CL'
        streams: [
          'Custom-TabularDataABC'
        ]
        transformKql: 'source | extend LookupData = lookup_string_am(\'mytextdatastore\', Message) | project TimeGenerated, Message, AdditionalContext = LookupData.Message'
      }
    ]
    dataSources: {
      logFiles: [
        {
          name: 'myTabularLogDataSource'
          format: 'text'
          filePatterns: [
            'C:\\JavaLogs\\*\\*.log'
          ]
          settings: {
            text: {
              recordStartTimestampFormat: 'ISO 8601'
            }
          }
          streams: [
            'Custom-TabularDataABC'
          ]
        }
      ]
    }
    destinations: {
      logAnalytics: [
        {
          name: 'centralWorkspace'
          workspaceResourceId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.OperationalInsights/workspaces/centralTeamWorkspace'
        }
      ]
    }
    references: {
      enrichmentData: {
        storageBlobs: [
          {
            name: 'mytextdatastore'
            blobUrl: 'https://myenrichmentstorage.blob.core.windows.net/enrichment'
            lookupType: 'String'
            resourceId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourcegroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myenrichmentstorage'
          }
        ]
      }
    }
    streamDeclarations: {
      'Custom-TabularDataABC': {
        columns: [
          {
            name: 'TimeGenerated'
            type: 'datetime'
          }
          {
            name: 'Message'
            type: 'string'
          }
          {
            name: 'AdditionalContext'
            type: 'string'
          }
        ]
      }
    }
  }
}
```
