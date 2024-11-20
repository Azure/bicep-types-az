# Microsoft.OperationalInsights

## microsoft.operationalinsights/clusters

ClustersCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/clusters@2021-06-01' = {
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
resource exampleResource 'Microsoft.OperationalInsights/workspaces@2021-06-01' = {
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
