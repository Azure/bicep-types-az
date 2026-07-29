# Microsoft.CloudHealth
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cloudhealth/healthmodels

HealthModels_Create
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
  }
  tags: {
    environment: 'production'
    team: 'online-store'
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
    displayName: 'Default managed identity'
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
    authenticationSetting: 'default-auth'
    discoverRelationships: 'Enabled'
    displayName: 'Discover web apps'
    specification: {
      kind: 'ResourceGraphQuery'
      resourceGraphQuery: 'resources | where type =~ \'microsoft.web/sites\' and resourceGroup =~ \'online-store-rg\' | project id, name, location'
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
        description: 'Orders API is degraded.'
        actionGroupIds: [
          '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/online-store-rg/providers/Microsoft.Insights/actionGroups/online-store-oncall'
        ]
        severity: 'Sev3'
      }
      unhealthy: {
        description: 'Orders API is unhealthy.'
        actionGroupIds: [
          '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/online-store-rg/providers/Microsoft.Insights/actionGroups/online-store-oncall'
        ]
        severity: 'Sev1'
      }
    }
    canvasPosition: {
      x: 360
      y: 240
    }
    displayName: 'Orders API'
    healthObjective: 99.9
    icon: {
      iconName: 'Kubernetes'
    }
    impact: 'Standard'
    signalGroups: {
      azureLogAnalytics: {
        authenticationSetting: 'default-auth'
        logAnalyticsWorkspaceResourceId: '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/online-store-rg/providers/Microsoft.OperationalInsights/workspaces/online-store-law'
        signals: [
          {
            name: 'unhealthy-pods'
            dataUnit: 'Count'
            displayName: 'Unhealthy pods'
            evaluationRules: {
              degradedRule: {
                operator: 'GreaterThan'
                threshold: 0
              }
              unhealthyRule: {
                operator: 'GreaterThan'
                threshold: 2
              }
            }
            queryText: 'KubePodInventory | where TimeGenerated > ago(5m) | where Namespace == \'online-store\' | where PodStatus != \'Running\' | summarize unhealthyPods = dcount(Name)'
            refreshInterval: 'PT5M'
            signalKind: 'LogAnalyticsQuery'
            timeGrain: 'PT5M'
            valueColumnName: 'unhealthyPods'
          }
        ]
      }
      azureMonitorWorkspace: {
        authenticationSetting: 'default-auth'
        azureMonitorWorkspaceResourceId: '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/online-store-rg/providers/Microsoft.Monitor/accounts/online-store-amw'
        signals: [
          {
            name: 'error-rate'
            dataUnit: 'Percent'
            displayName: 'HTTP 5xx error rate'
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
            queryText: 'sum(rate(http_requests_total{job="orders-api", code=~"5.."}[5m])) / sum(rate(http_requests_total{job="orders-api"}[5m])) * 100'
            refreshInterval: 'PT1M'
            signalKind: 'PrometheusMetricsQuery'
            timeGrain: 'PT5M'
          }
          {
            name: 'p95-latency'
            dataUnit: 'MilliSeconds'
            displayName: 'p95 request latency'
            evaluationRules: {
              degradedRule: {
                operator: 'GreaterThan'
                threshold: 300
              }
              unhealthyRule: {
                operator: 'GreaterThan'
                threshold: 800
              }
            }
            queryText: 'histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket{job="orders-api"}[5m]))) * 1000'
            refreshInterval: 'PT1M'
            signalKind: 'PrometheusMetricsQuery'
            timeGrain: 'PT5M'
          }
          {
            name: 'pod-cpu'
            dataUnit: 'Percent'
            displayName: 'Pod CPU utilization'
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
            queryText: 'sum(rate(container_cpu_usage_seconds_total{namespace="online-store", pod=~"orders-api-.*"}[5m])) * 100'
            refreshInterval: 'PT1M'
            signalDefinitionName: 'pod-cpu-usage'
            signalKind: 'PrometheusMetricsQuery'
            timeGrain: 'PT5M'
          }
        ]
      }
      azureResource: {
        authenticationSetting: 'default-auth'
        azureResourceId: '/subscriptions/abcdef12-3456-7890-abcd-ef1234567890/resourceGroups/online-store-rg/providers/Microsoft.ContainerService/managedClusters/online-store-aks'
        azureResourceKind: 'managedClusters'
        signals: [
          {
            name: 'node-cpu'
            aggregationType: 'Average'
            dataUnit: 'Percent'
            displayName: 'Node CPU utilization'
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
            metricName: 'node_cpu_usage_percentage'
            metricNamespace: 'Microsoft.ContainerService/managedClusters'
            refreshInterval: 'PT1M'
            signalKind: 'AzureResourceMetric'
            timeGrain: 'PT5M'
          }
        ]
      }
      dependencies: {
        aggregationType: 'MinHealthy'
        degradedThreshold: 100
        ignoreUnknown: true
        unhealthyThreshold: 50
        unit: 'Percentage'
      }
    }
    tags: {
      environment: 'production'
      team: 'online-store'
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
    childEntityName: 'orders-api'
    displayName: 'Web Frontend depends on Orders API'
    parentEntityName: 'web-frontend'
    tags: {
      environment: 'production'
      team: 'online-store'
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
    aggregationType: 'Average'
    dataUnit: 'Percent'
    displayName: 'SQL CPU utilization'
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
    metricName: 'cpu_percent'
    metricNamespace: 'Microsoft.Sql/servers/databases'
    refreshInterval: 'PT1M'
    signalKind: 'AzureResourceMetric'
    tags: {
      environment: 'production'
      team: 'online-store'
    }
    timeGrain: 'PT5M'
  }
}
```
