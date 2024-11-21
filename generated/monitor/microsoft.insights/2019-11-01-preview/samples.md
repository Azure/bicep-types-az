# Microsoft.Insights

## microsoft.insights/datacollectionruleassociations

Create or update association
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRuleAssociations@2019-11-01-preview' = {
  name: 'example'
  properties: {
    dataCollectionRuleId: '/subscriptions/703362b3-f278-4e4b-9179-c76eaf41ffc2/resourceGroups/myResourceGroup/providers/Microsoft.Insights/dataCollectionRules/myCollectionRule'
  }
}
```

## microsoft.insights/datacollectionrules

Create or update data collection rule
```bicep
resource exampleResource 'Microsoft.Insights/dataCollectionRules@2019-11-01-preview' = {
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
