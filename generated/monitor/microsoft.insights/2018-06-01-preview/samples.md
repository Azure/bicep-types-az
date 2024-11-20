# microsoft.insights

## microsoft.insights/guestdiagnosticsettingsassociation

Create or update an guest diagnostic settings association
```bicep
resource exampleResource 'microsoft.insights/guestDiagnosticSettingsAssociation@2018-06-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    guestDiagnosticSettingsName: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/Default-Association-ResourceGroup/providers/providers/microsoft.insights/guestDiagnosticSettings/vmSettingForSecurity'
  }
  tags: {
  }
}
```

## microsoft.insights/guestdiagnosticsettings

Create or update a guest diagnostic settings
```bicep
resource exampleResource 'microsoft.insights/guestDiagnosticSettings@2018-06-01-preview' = {
  name: 'example'
  location: 'Global'
  properties: {
    dataSources: [
      {
        configuration: {
          perfCounters: [
            {
              name: '\\Process(_Total)\\%Processor Time'
              samplingPeriod: 'PT1M'
            }
            {
              name: '\\Process(_Total)\\Working Set'
              samplingPeriod: 'PT1M'
            }
          ]
        }
        kind: 'PerformanceCounter'
        sinks: [
          {
            kind: 'LogAnalytics'
          }
        ]
      }
      {
        configuration: {
          providers: [
            {
              name: 'AuditLog'
              filter: 'filter exp'
              id: 1
            }
            {
              name: 'TraceLog'
              id: 2
            }
          ]
        }
        kind: 'ETWProviders'
        sinks: [
          {
            kind: 'LogAnalytics'
          }
        ]
      }
      {
        configuration: {
          eventLogs: [
            {
              filter: 'SourceName == Xyz AND EventId = "100" AND  $Xpath/Column="DCName" = "CatWoman"'
              logName: 'Application'
            }
            {
              filter: 'SourceName == Xyz AND EventId = "100" AND  $Xpath/Column="DCName" = "BatMan"'
              logName: 'Application'
            }
          ]
        }
        kind: 'WindowsEventLogs'
        sinks: [
          {
            kind: 'LogAnalytics'
          }
        ]
      }
    ]
    osType: 'Windows'
  }
  tags: {
  }
}
```
