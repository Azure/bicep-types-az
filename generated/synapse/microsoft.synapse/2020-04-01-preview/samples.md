# Microsoft.Synapse

## microsoft.synapse/workspaces/sqlpools

Creates a sqlpool.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlPools@2020-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  sku: {
    name: 'DW1000f'
    tier: 'Synapse'
  }
  tags: {
    tag1: 'val1'
  }
}
```

## microsoft.synapse/workspaces/sqldatabases

Creates a sqldatabase.
```bicep
resource exampleResource 'Microsoft.Synapse/workspaces/sqlDatabases@2020-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    dataRetention: {
      dropRetentionPeriod: 'P3D'
      retentionPeriod: 'PT0S'
    }
    storageRedundancy: 'Geo'
  }
  tags: {
    tag1: 'val1'
  }
}
```
