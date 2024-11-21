# Microsoft.OperationalInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
