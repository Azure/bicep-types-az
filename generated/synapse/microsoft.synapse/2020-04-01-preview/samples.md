# Microsoft.Synapse
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
