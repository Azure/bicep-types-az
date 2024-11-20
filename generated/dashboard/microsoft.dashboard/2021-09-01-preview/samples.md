# Microsoft.Dashboard

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
