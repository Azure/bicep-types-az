# Microsoft.Dashboard
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dashboard/grafana

Grafana_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana@2021-09-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    provisioningState: 'Accepted'
    zoneRedundancy: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    Environment: 'Dev'
  }
}
```
