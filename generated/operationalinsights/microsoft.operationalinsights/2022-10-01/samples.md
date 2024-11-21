# Microsoft.OperationalInsights

## microsoft.operationalinsights/clusters

ClustersCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/clusters@2022-10-01' = {
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

## microsoft.operationalinsights/workspaces

WorkspacesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
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
resource exampleResource 'Microsoft.OperationalInsights/workspaces/tables@2022-10-01' = {
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
