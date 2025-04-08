# Microsoft.Workloads
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.workloads/monitors

Create a SAP monitor
```bicep
resource exampleResource 'Microsoft.Workloads/monitors@2024-02-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    appLocation: 'westus'
    appServicePlanConfiguration: {
      capacity: 1
      tier: 'ElasticPremium'
    }
    logAnalyticsWorkspaceArmId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace'
    managedResourceGroupConfiguration: {
      name: 'myManagedRg'
    }
    monitorSubnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
    routingPreference: 'RouteAll'
  }
  tags: {
    key: 'value'
  }
}
```

Create a SAP monitor with system assigned identity
```bicep
resource exampleResource 'Microsoft.Workloads/monitors@2024-02-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    appLocation: 'westus'
    appServicePlanConfiguration: {
      capacity: 1
      tier: 'ElasticPremium'
    }
    logAnalyticsWorkspaceArmId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace'
    managedResourceGroupConfiguration: {
      name: 'myManagedRg'
    }
    monitorSubnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
    routingPreference: 'RouteAll'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.workloads/monitors/alerts

Creates an Alert
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/alerts@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alertRuleProperties: {
      actionGroups: [
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.insights/actiongroups/actiongroup1'
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.insights/actiongroups/actiongroup2'
      ]
      alertQueryParameters: [
        {
          name: 'providerInstance'
          value: ''
        }
        {
          name: 'workType'
          value: ''
        }
      ]
      autoMitigate: 'Disable'
      dimension: 'cpu'
      evaluationFrequency: 5
      failingPeriodsOperator: 'GreaterThan'
      failingPeriodsToAlert: 3
      muteActionsDuration: 0
      severity: 3
      status: 'Enabled'
      threshold: 80
      thresholdOperator: 'GreaterThan'
      windowSize: 15
    }
    providerNames: [
      'hana-provider-1'
      'hana-provider-2'
    ]
    providerType: 'SapHana'
    templateName: 'saphana-cpu-memory-health'
  }
}
```

## microsoft.workloads/monitors/providerinstances

Create a Db2 provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Db2'
      sapSid: 'SID'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a Db2 provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Db2'
      sapSid: 'SID'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a MsSqlServer provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbPassword: '****'
      dbPasswordUri: ''
      dbPort: '5912'
      dbUsername: 'user'
      hostname: 'hostname'
      providerType: 'MsSqlServer'
      sapSid: 'sid'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a MsSqlServer provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbPassword: '****'
      dbPasswordUri: ''
      dbPort: '5912'
      dbUsername: 'user'
      hostname: 'hostname'
      providerType: 'MsSqlServer'
      sapSid: 'sid'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a Oracle provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Oracle'
      sapSid: 'SID'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a OS provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusOS'
      sapSid: 'SID'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a OS provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusOS'
      sapSid: 'SID'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a PrometheusHaCluster provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      clusterName: 'clusterName'
      hostname: 'hostname'
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusHaCluster'
      sid: 'sid'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a PrometheusHaCluster provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      clusterName: 'clusterName'
      hostname: 'hostname'
      prometheusUrl: 'http://192.168.0.0:9090/metrics'
      providerType: 'PrometheusHaCluster'
      sid: 'sid'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a SAP monitor Hana provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'db'
      dbPassword: '****'
      dbPasswordUri: ''
      dbUsername: 'user'
      hostname: 'name'
      instanceNumber: '00'
      providerType: 'SapHana'
      sapSid: 'SID'
      sqlPort: '0000'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslHostNameInCertificate: 'xyz.domain.com'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a SAP monitor Hana provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'db'
      dbPassword: '****'
      dbPasswordUri: ''
      dbUsername: 'user'
      hostname: 'name'
      instanceNumber: '00'
      providerType: 'SapHana'
      sapSid: 'SID'
      sqlPort: '0000'
      sslHostNameInCertificate: 'xyz.domain.com'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a SAP monitor NetWeaver provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      providerType: 'SapNetWeaver'
      sapClientId: '111'
      sapHostFileEntries: [
        '127.0.0.1 name fqdn'
      ]
      sapHostname: 'name'
      sapInstanceNr: '00'
      sapPassword: '****'
      sapPasswordUri: ''
      sapPortNumber: '1234'
      sapSid: 'SID'
      sapUsername: 'username'
      sslCertificateUri: 'https://storageaccount.blob.core.windows.net/containername/filename'
      sslPreference: 'ServerCertificate'
    }
  }
}
```

Create a SAP monitor NetWeaver provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      providerType: 'SapNetWeaver'
      sapClientId: '111'
      sapHostFileEntries: [
        '127.0.0.1 name fqdn'
      ]
      sapHostname: 'name'
      sapInstanceNr: '00'
      sapPassword: '****'
      sapPasswordUri: ''
      sapPortNumber: '1234'
      sapSid: 'SID'
      sapUsername: 'username'
      sslPreference: 'RootCertificate'
    }
  }
}
```

Create a SAP monitor Oracle provider with Root Certificate
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    providerSettings: {
      dbName: 'dbName'
      dbPassword: 'password'
      dbPasswordUri: ''
      dbPort: 'dbPort'
      dbUsername: 'username'
      hostname: 'hostname'
      providerType: 'Oracle'
      sapSid: 'SID'
      sslPreference: 'RootCertificate'
    }
  }
}
```

## microsoft.workloads/monitors/saplandscapemonitor

Create SAP landscape monitor
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/sapLandscapeMonitor@2024-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    grouping: {
      landscape: [
        {
          name: 'Prod'
          topSid: [
            'SID1'
            'SID2'
          ]
        }
      ]
      sapApplication: [
        {
          name: 'ERP1'
          topSid: [
            'SID1'
            'SID2'
          ]
        }
      ]
    }
    topMetricsThresholds: [
      {
        name: 'Instance Availability'
        green: 90
        red: 50
        yellow: 75
      }
    ]
  }
}
```
