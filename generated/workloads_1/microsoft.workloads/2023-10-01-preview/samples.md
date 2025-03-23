# Microsoft.Workloads
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.workloads/monitors/providerinstances

Create a Db2 provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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

Create a OS provider
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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
resource exampleResource 'Microsoft.Workloads/monitors/providerInstances@2023-10-01-preview' = {
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

## microsoft.workloads/monitors/saplandscapemonitor

Create for SAP Landscape monitor Dashboard
```bicep
resource exampleResource 'Microsoft.Workloads/monitors/sapLandscapeMonitor@2023-10-01-preview' = {
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
