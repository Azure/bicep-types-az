# Microsoft.OperationalInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.operationalinsights/workspaces/savedsearches

SavedSearchCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/savedSearches@2015-03-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    category: 'Saved Search Test Category'
    displayName: 'Create or Update Saved Search Test'
    query: 'Heartbeat | summarize Count() by Computer'
    tags: [
      {
        name: 'Group'
        value: 'Computer'
      }
    ]
    version: 2
  }
}
```

## microsoft.operationalinsights/workspaces/storageinsightconfigs

StorageInsightsCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2015-03-20' = {
  parent: parentResource 
  name: 'example'
  properties: {
    containers: [
      'wad-iis-logfiles'
    ]
    storageAccount: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000005/resourcegroups/OIAutoRest6987/providers/microsoft.storage/storageaccounts/AzTestFakeSA9945'
      key: '1234'
    }
    tables: [
      'WADWindowsEventLogsTable'
      'LinuxSyslogVer2v0'
    ]
  }
}
```
