# Microsoft.CloudHealth
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cloudhealth/healthmodels

HealthModels_Create
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/4980D7D5-4E07-47AD-AD34-E76C6BC9F061/resourceGroups/rgopenapi/providers/Microsoft.ManagedIdentity/userAssignedIdentities/ua1': {
      }
    }
  }
  location: 'eastus2'
  properties: {
    discovery: {
      addRecommendedSignals: 'Enabled'
      identity: 'SystemAssigned'
      scope: '/providers/Microsoft.Management/serviceGroups/myServiceGroup'
    }
  }
  tags: {
    key2961: 'hbljozzkqrpcthsjtfkyozpwyx'
  }
}
```

## microsoft.cloudhealth/healthmodels/authenticationsettings

AuthenticationSettings_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/authenticationsettings@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationKind: 'ManagedIdentity'
    displayName: 'myDisplayName'
    managedIdentityName: 'SystemAssigned'
  }
}
```

## microsoft.cloudhealth/healthmodels/discoveryrules

DiscoveryRules_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/discoveryrules@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addRecommendedSignals: 'Enabled'
    authenticationSetting: 'authSetting1'
    discoverRelationships: 'Enabled'
    displayName: 'myDisplayName'
    specification: {
      kind: 'ResourceGraphQuery'
      resourceGraphQuery: 'resources | where subscriptionId == \'7ddfffd7-9b32-40df-1234-828cbd55d6f4\' | where resourceGroup == \'my-rg\''
    }
  }
}
```

## microsoft.cloudhealth/healthmodels/entities

Entities_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/entities@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alerts: {
      degraded: {
        description: 'Alert description'
        actionGroupIds: [
          '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Insights/actionGroups/myactiongroup'
        ]
        severity: 'Sev4'
      }
      unhealthy: {
        description: 'Alert description'
        actionGroupIds: [
          '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.Insights/actionGroups/myactiongroup'
        ]
        severity: 'Sev1'
      }
    }
    canvasPosition: {
      x: 14
      y: 13
    }
    displayName: 'My entity'
    healthObjective: 62
    icon: {
      customData: 'rcitntvapruccrhtxmkqjphbxunkz'
      iconName: 'Custom'
    }
    impact: 'Standard'
    signalGroups: {
      azureLogAnalytics: {
        authenticationSetting: 'auth123'
        logAnalyticsWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.OperationalInsights/workspaces/myworkspace'
        signals: [
          {
            name: 'uniqueSignalName2'
            dataUnit: 'my unit'
            displayName: 'Test LA signal'
            evaluationRules: {
              degradedRule: {
                operator: 'GreaterThan'
                threshold: 1
              }
              unhealthyRule: {
                operator: 'GreaterThan'
                threshold: 5
              }
            }
            queryText: 'print 1'
            refreshInterval: 'PT1M'
            signalDefinitionName: {
            }
            signalKind: 'LogAnalyticsQuery'
            timeGrain: 'PT30M'
            valueColumnName: 'result'
          }
        ]
      }
      azureMonitorWorkspace: {
        authenticationSetting: 'auth123'
        azureMonitorWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.OperationalInsights/workspaces/myworkspace'
        signals: [
          {
            name: 'pod-cpu-usage'
            dataUnit: 'Percent'
            displayName: 'Pod CPU Usage'
            evaluationRules: {
              degradedRule: {
                operator: 'GreaterThan'
                threshold: 70
              }
              unhealthyRule: {
                operator: 'GreaterThan'
                threshold: 90
              }
            }
            queryText: 'rate(container_cpu_usage_seconds_total{pod=~"my-app-.*"}[5m]) * 100'
            refreshInterval: 'PT1M'
            signalDefinitionName: 'PodCpuUsageDefinition'
            signalKind: 'PrometheusMetricsQuery'
            timeGrain: 'PT5M'
          }
        ]
      }
      azureResource: {
        authenticationSetting: 'auth123'
        azureResourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1'
        azureResourceKind: 'functionapp'
        signals: [
          {
            name: 'uniqueSignalName1'
            aggregationType: 'None'
            dataUnit: 'Count'
            dimension: 'nodename'
            dimensionFilter: 'node1'
            displayName: 'CPU usage'
            evaluationRules: {
              degradedRule: {
                operator: 'LowerThan'
                threshold: 10
              }
              unhealthyRule: {
                operator: 'LowerThan'
                threshold: 1
              }
            }
            metricName: 'cpuusage'
            metricNamespace: 'microsoft.compute/virtualMachines'
            refreshInterval: 'PT1M'
            signalDefinitionName: 'sigdef1'
            signalKind: 'AzureResourceMetric'
            timeGrain: 'PT1M'
          }
        ]
      }
      dependencies: {
        aggregationType: 'Thresholds'
        degradedThreshold: '3'
        unhealthyThreshold: '50%'
      }
    }
    tags: {
      key1376: 'sample tag'
    }
  }
}
```

## microsoft.cloudhealth/healthmodels/relationships

Relationships_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/relationships@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    childEntityName: 'Entity2'
    displayName: 'My relationship'
    parentEntityName: 'Entity1'
    tags: {
      key9681: 'ixfvzsfnpvkkbrce'
    }
  }
}
```

## microsoft.cloudhealth/healthmodels/signaldefinitions

SignalDefinitions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/signaldefinitions@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aggregationType: 'None'
    dataUnit: 'byte'
    dimension: 'nodename'
    dimensionFilter: 'node1'
    displayName: 'cpu usage'
    evaluationRules: {
      degradedRule: {
        operator: 'LowerThan'
        threshold: 65
      }
      unhealthyRule: {
        operator: 'LowerThan'
        threshold: 60
      }
    }
    metricName: 'cpuusage'
    metricNamespace: 'microsoft.compute/virtualMachines'
    refreshInterval: 'PT1M'
    signalKind: 'AzureResourceMetric'
    tags: {
      key4788: 'ixfvzsfnpvkkbrce'
    }
    timeGrain: 'PT1M'
  }
}
```
