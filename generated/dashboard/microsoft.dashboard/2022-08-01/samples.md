# Microsoft.Dashboard

## microsoft.dashboard/grafana

Grafana_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana@2022-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    apiKey: 'Enabled'
    deterministicOutboundIP: 'Enabled'
    grafanaIntegrations: {
      azureMonitorWorkspaceIntegrations: [
        {
          azureMonitorWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace'
        }
      ]
    }
    publicNetworkAccess: 'Enabled'
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
