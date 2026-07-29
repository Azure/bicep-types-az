# Microsoft.AzureArcData
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurearcdata/datacontrollers

Create or update a Data Controller.
```bicep
resource exampleResource 'Microsoft.AzureArcData/dataControllers@2021-11-01' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.ExtendedLocation/customLocations/arclocation'
    type: 'CustomLocation'
  }
  location: 'northeurope'
  properties: {
    basicLoginInformation: {
      password: '********'
      username: 'username'
    }
    clusterId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s'
    extensionId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s/providers/Microsoft.KubernetesConfiguration/extensions/extension'
    infrastructure: 'onpremises'
    logAnalyticsWorkspaceConfig: {
      primaryKey: '********'
      workspaceId: '00000000-1111-2222-3333-444444444444'
    }
    logsDashboardCredential: {
      password: '********'
      username: 'username'
    }
    metricsDashboardCredential: {
      password: '********'
      username: 'username'
    }
    onPremiseProperty: {
      id: '12345678-1234-1234-ab12-1a2b3c4d5e6f'
      publicSigningKey: 'publicOnPremSigningKey'
    }
    uploadServicePrincipal: {
      authority: 'https://login.microsoftonline.com/'
      clientId: '00000000-1111-2222-3333-444444444444'
      clientSecret: '********'
      tenantId: '00000000-1111-2222-3333-444444444444'
    }
    uploadWatermark: {
      logs: '2020-01-01T17:18:19.1234567Z'
      metrics: '2020-01-01T17:18:19.1234567Z'
      usages: '2020-01-01T17:18:19.1234567Z'
    }
  }
  tags: {
    mytag: 'myval'
  }
}
```

## microsoft.azurearcdata/sqlmanagedinstances

Create or update a SQL Managed Instance
```bicep
resource exampleResource 'Microsoft.AzureArcData/sqlManagedInstances@2021-11-01' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.ExtendedLocation/customLocations/arclocation'
    type: 'CustomLocation'
  }
  location: 'northeurope'
  properties: {
    admin: 'Admin user'
    basicLoginInformation: {
      password: '********'
      username: 'username'
    }
    clusterId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s'
    endTime: 'Instance end time'
    extensionId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s/providers/Microsoft.KubernetesConfiguration/extensions/extension'
    k8sRaw: {
      additionalProperty: 1234
      spec: {
        replicas: 1
        scheduling: {
          default: {
            resources: {
              limits: {
                additionalProperty: 'additionalValue'
                cpu: '1'
                memory: '8Gi'
              }
              requests: {
                additionalProperty: 'additionalValue'
                cpu: '1'
                memory: '8Gi'
              }
            }
          }
        }
      }
    }
    licenseType: 'LicenseIncluded'
    startTime: 'Instance start time'
  }
  sku: {
    name: 'vCore'
    dev: true
    tier: 'GeneralPurpose'
  }
  tags: {
    mytag: 'myval'
  }
}
```

## microsoft.azurearcdata/sqlserverinstances

Updates a SQL Server Instance tags.
```bicep
resource exampleResource 'Microsoft.AzureArcData/sqlServerInstances@2021-11-01' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    azureDefenderStatus: 'Protected'
    azureDefenderStatusLastUpdated: '2020-01-02T17:18:19.1234567Z'
    collation: 'collation'
    containerResourceId: 'Arc Machine Name'
    currentVersion: '2008 R2'
    edition: 'Developer'
    instanceName: 'name of instance'
    licenseType: 'Free'
    patchLevel: 'patchlevel'
    productId: 'sql id'
    status: 'Connected'
    tcpDynamicPorts: '1433'
    tcpStaticPorts: '1433'
    vCore: '4'
    version: 'SQL Server 2017'
  }
  tags: {
    mytag: 'myval'
  }
}
```
