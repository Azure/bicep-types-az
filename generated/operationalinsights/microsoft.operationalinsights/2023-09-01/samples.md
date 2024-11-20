# Microsoft.OperationalInsights

## microsoft.operationalinsights/clusters

ClustersCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/clusters@2023-09-01' = {
  name: 'example'
  location: 'australiasoutheast'
  sku: {
    name: 'CapacityReservation'
    capacity: 1000
  }
  tags: {
    tag1: 'val1'
  }
}
```

## microsoft.operationalinsights/workspaces/dataexports

DataExportCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/dataExports@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      resourceId: '/subscriptions/192b9f85-a39a-4276-b96d-d5cd351703f9/resourceGroups/OIAutoRest1234/providers/Microsoft.EventHub/namespaces/test'
    }
    tableNames: [
      'Heartbeat'
    ]
  }
}
```

## microsoft.operationalinsights/workspaces/datasources

DataSourcesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/dataSources@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'AzureActivityLog'
  properties: {
    LinkedResourceId: '/subscriptions/00000000-0000-0000-0000-00000000000/providers/microsoft.insights/eventtypes/management'
  }
}
```

## microsoft.operationalinsights/workspaces/linkedservices

LinkedServicesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/linkedServices@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    writeAccessResourceId: '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.OperationalInsights/clusters/testcluster'
  }
}
```

## microsoft.operationalinsights/workspaces/linkedstorageaccounts

LinkedStorageAccountsCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountIds: [
      '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageA'
      '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageB'
    ]
  }
}
```

## microsoft.operationalinsights/workspaces/savedsearches

SavedSearchCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/savedSearches@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    category: 'Saved Search Test Category'
    displayName: 'Create or Update Saved Search Test'
    functionAlias: 'heartbeat_func'
    functionParameters: 'a:int=1'
    query: 'Heartbeat | summarize Count() by Computer | take a'
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
resource exampleResource 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2023-09-01' = {
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

## microsoft.operationalinsights/workspaces/tables

TablesUpsert
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/tables@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    schema: {
      name: 'AzureNetworkFlow'
      columns: [
        {
          name: 'MyNewColumn'
          type: 'guid'
        }
      ]
    }
    retentionInDays: 45
    totalRetentionInDays: 70
  }
}
```

## microsoft.operationalinsights/workspaces

WorkspacesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces@2023-09-01' = {
  name: 'example'
  location: 'australiasoutheast'
  properties: {
    retentionInDays: 30
    sku: {
      name: 'PerGB2018'
    }
  }
  tags: {
    tag1: 'val1'
  }
}
```
