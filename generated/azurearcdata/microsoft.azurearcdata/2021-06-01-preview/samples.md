# Microsoft.AzureArcData

## microsoft.azurearcdata/sqlmanagedinstances

Create or update a SQL Managed Instance
```bicep
resource exampleResource 'Microsoft.AzureArcData/sqlManagedInstances@2021-06-01-preview' = {
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
    endTime: 'Instance end time'
    startTime: 'Instance start time'
  }
  sku: {
    name: 'default'
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
resource exampleResource 'Microsoft.AzureArcData/sqlServerInstances@2021-06-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
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

## microsoft.azurearcdata/postgresinstances

Create or update a Postgres Instance.
```bicep
resource exampleResource 'Microsoft.AzureArcData/postgresInstances@2021-06-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.ExtendedLocation/customLocations/arclocation'
    type: 'CustomLocation'
  }
  location: 'eastus'
  properties: {
    admin: 'admin'
    basicLoginInformation: {
      password: '********'
      username: 'username'
    }
    dataControllerId: 'dataControllerId'
    k8sRaw: {
      apiVersion: 'apiVersion'
      kind: 'postgresql-12'
      metadata: {
        name: 'pg1'
        creationTimestamp: '2020-08-25T14:55:10Z'
        generation: 1
        namespace: 'test'
        resourceVersion: '527780'
        selfLink: '/apis/arcdata.microsoft.com/v1alpha1/namespaces/test/postgresql-12s/pg1'
        uid: '1111aaaa-ffff-ffff-ffff-99999aaaaaaa'
      }
      spec: {
        backups: {
          deltaMinutes: 3
          fullMinutes: 10
          tiers: [
            {
              retention: {
                maximums: [
                  '6'
                  '512MB'
                ]
                minimums: [
                  '3'
                ]
              }
              storage: {
                volumeSize: '1Gi'
              }
            }
          ]
        }
        engine: {
          extensions: [
            {
              name: 'citus'
            }
          ]
        }
        scale: {
          shards: 3
        }
        scheduling: {
          default: {
            resources: {
              requests: {
                memory: '256Mi'
              }
            }
          }
        }
        service: {
          type: 'NodePort'
        }
        storage: {
          data: {
            className: 'local-storage'
            size: '5Gi'
          }
          logs: {
            className: 'local-storage'
            size: '5Gi'
          }
        }
      }
      status: {
        externalEndpoint: {
        }
        readyPods: '4/4'
        state: 'Ready'
      }
    }
  }
  sku: {
    name: 'default'
    dev: true
    tier: 'Hyperscale'
  }
}
```

## microsoft.azurearcdata/datacontrollers

Create or update a Data Controller.
```bicep
resource exampleResource 'Microsoft.AzureArcData/dataControllers@2021-06-01-preview' = {
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
    logAnalyticsWorkspaceConfig: {
      primaryKey: '********'
      workspaceId: '00000000-1111-2222-3333-444444444444'
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
