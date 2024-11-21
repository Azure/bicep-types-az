# Microsoft.OperationalInsights

## microsoft.operationalinsights/workspaces

WorkspacesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces@2021-12-01-preview' = {
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

## microsoft.operationalinsights/workspaces/tables

TablesUpsert
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/tables@2021-12-01-preview' = {
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
