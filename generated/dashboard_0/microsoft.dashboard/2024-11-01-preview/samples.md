# Microsoft.Dashboard
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dashboard/dashboards

Dashboard_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/dashboards@2024-11-01-preview' = {
  name: 'example'
  location: 'West US'
  tags: {
    Environment: 'Dev'
  }
}
```

## microsoft.dashboard/grafana

Grafana_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana@2024-11-01-preview' = {
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
      security: {
        csrfAlwaysCheck: false
      }
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
      snapshots: {
        externalEnabled: true
      }
      unifiedAlertingScreenshots: {
        captureEnabled: false
      }
      users: {
        editorsCanAdmin: true
        viewersCanEdit: true
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
      'sample-plugin-id': {
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

## microsoft.dashboard/grafana/integrationfabrics

IntegrationFabrics_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana/integrationFabrics@2024-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    dataSourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Monitor/accounts/myAmw'
    scenarios: [
      'scenario1'
      'scenario2'
    ]
    targetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerService/managedClusters/myAks'
  }
}
```

## microsoft.dashboard/grafana/managedprivateendpoints

ManagedPrivateEndpoint_Create
```bicep
resource exampleResource 'Microsoft.Dashboard/grafana/managedPrivateEndpoints@2024-11-01-preview' = {
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
