# Microsoft.Dashboard

## microsoft.dashboard/grafana

Grafana_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana@2023-09-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    apiKey: 'Enabled'
    deterministicOutboundIP: 'Enabled'
    enterpriseConfigurations: {
      marketplaceAutoRenew: 'Enabled'
      marketplacePlanId: 'myPlanId'
    }
    grafanaConfigurations: {
      smtp: {
        enabled: true
        fromAddress: 'test@sendemail.com'
        fromName: 'emailsender'
        host: 'smtp.sendemail.com:587'
        password: '<password>'
        skipVerify: true
        startTLSPolicy: 'OpportunisticStartTLS'
        user: 'username'
      }
    }
    grafanaIntegrations: {
      azureMonitorWorkspaceIntegrations: [
        {
          azureMonitorWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace'
        }
      ]
    }
    grafanaMajorVersion: '9'
    grafanaPlugins: {
      sample-plugin-id: {
      }
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

## microsoft.dashboard/grafana/managedprivateendpoints

ManagedPrivateEndpoint_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana/managedPrivateEndpoints@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    groupIds: [
      'grafana'
    ]
    privateLinkResourceId: '/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-000000000000/resourceGroups/xx-rg/providers/Microsoft.Kusto/Clusters/sampleKustoResource'
    privateLinkResourceRegion: 'West US'
    privateLinkServiceUrl: 'my-self-hosted-influxdb.westus.mydomain.com'
    requestMessage: 'Example Request Message'
  }
}
```
