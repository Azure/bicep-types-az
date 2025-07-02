# Microsoft.CloudHealth
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cloudhealth/healthmodels

HealthModels_Create
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels@2025-05-01-preview' = {
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
resource exampleResource 'Microsoft.CloudHealth/healthmodels/authenticationsettings@2025-05-01-preview' = {
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
resource exampleResource 'Microsoft.CloudHealth/healthmodels/discoveryrules@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addRecommendedSignals: 'Enabled'
    authenticationSetting: 'authSetting1'
    discoverRelationships: 'Enabled'
    displayName: 'myDisplayName'
    resourceGraphQuery: 'resources | where subscriptionId == \'7ddfffd7-9b32-40df-1234-828cbd55d6f4\' | where resourceGroup == \'my-rg\''
  }
}
```

## microsoft.cloudhealth/healthmodels/entities

Entities_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/entities@2025-05-01-preview' = {
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
    labels: {
      key1376: 'ixfvzsfnpvkkbrce'
    }
    signals: {
      azureLogAnalytics: {
        authenticationSetting: 'B3P1X3e-FZtZ-4Ak-2VLHGQ-4m4-05DE-XNW5zW3P-46XY-DC3SSX'
        logAnalyticsWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.OperationalInsights/workspaces/myworkspace'
        signalAssignments: [
          {
            signalDefinitions: [
              'B3P1X3e-FZtZ-4Ak-2VLHGQ-4m4-05DE-XNW5zW3P-46XY-DC3SSX'
            ]
          }
        ]
      }
      azureMonitorWorkspace: {
        authenticationSetting: 'B3P1X3e-FZtZ-4Ak-2VLHGQ-4m4-05DE-XNW5zW3P-46XY-DC3SSX'
        azureMonitorWorkspaceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg/providers/Microsoft.OperationalInsights/workspaces/myworkspace'
        signalAssignments: [
          {
            signalDefinitions: [
              'sigdef2'
            ]
          }
          {
            signalDefinitions: [
              'sigdef3'
            ]
          }
        ]
      }
      azureResource: {
        authenticationSetting: 'B3P1X3e-FZtZ-4Ak-2VLHGQ-4m4-05DE-XNW5zW3P-46XY-DC3SSX'
        azureResourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1'
        signalAssignments: [
          {
            signalDefinitions: [
              'sigdef1'
            ]
          }
        ]
      }
      dependencies: {
        aggregationType: 'WorstOf'
      }
    }
  }
}
```

## microsoft.cloudhealth/healthmodels/relationships

Relationships_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/relationships@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    childEntityName: 'Entity2'
    displayName: 'My relationship'
    labels: {
      key9681: 'ixfvzsfnpvkkbrce'
    }
    parentEntityName: 'Entity1'
  }
}
```

## microsoft.cloudhealth/healthmodels/signaldefinitions

SignalDefinitions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.CloudHealth/healthmodels/signaldefinitions@2025-05-01-preview' = {
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
        threshold: '65'
      }
      unhealthyRule: {
        operator: 'LowerThan'
        threshold: '60'
      }
    }
    labels: {
      key4788: 'ixfvzsfnpvkkbrce'
    }
    metricName: 'cpuusage'
    metricNamespace: 'microsoft.compute/virtualMachines'
    refreshInterval: 'PT1M'
    signalKind: 'AzureResourceMetric'
    timeGrain: 'PT1M'
  }
}
```
