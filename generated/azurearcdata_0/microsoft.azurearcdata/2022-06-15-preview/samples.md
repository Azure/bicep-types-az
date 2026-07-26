# Microsoft.AzureArcData
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurearcdata/datacontrollers

Create or update a Data Controller.
```bicep
resource exampleResource 'Microsoft.AzureArcData/dataControllers@2022-06-15-preview' = {
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

## microsoft.azurearcdata/datacontrollers/activedirectoryconnectors

Create or update an Active Directory connector instance.
```bicep
resource exampleResource 'Microsoft.AzureArcData/dataControllers/activeDirectoryConnectors@2022-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    spec: {
      activeDirectory: {
        domainControllers: {
          primaryDomainController: {
            hostname: 'dc1.contoso.local'
          }
          secondaryDomainControllers: [
            {
              hostname: 'dc2.contoso.local'
            }
            {
              hostname: 'dc3.contoso.local'
            }
          ]
        }
        realm: 'CONTOSO.LOCAL'
        serviceAccountProvisioning: 'manual'
      }
      dns: {
        nameserverIPAddresses: [
          '11.11.111.111'
          '22.22.222.222'
        ]
        preferK8sDnsForPtrLookups: false
        replicas: 1
      }
    }
  }
}
```

## microsoft.azurearcdata/postgresinstances

Create or update a Postgres Instance.
```bicep
resource exampleResource 'Microsoft.AzureArcData/postgresInstances@2022-06-15-preview' = {
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

## microsoft.azurearcdata/sqlmanagedinstances

Create or update a SQL Managed Instance
```bicep
resource exampleResource 'Microsoft.AzureArcData/sqlManagedInstances@2022-06-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.ExtendedLocation/customLocations/arclocation'
    type: 'CustomLocation'
  }
  location: 'northeurope'
  properties: {
    activeDirectoryInformation: {
      keytabInformation: {
        keytab: '********'
      }
    }
    admin: 'Admin user'
    basicLoginInformation: {
      password: '********'
      username: 'username'
    }
    clusterId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s'
    endTime: 'Instance end time'
    extensionId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Kubernetes/connectedClusters/connectedk8s/providers/Microsoft.KubernetesConfiguration/extensions/extension'
    k8sRaw: {
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
resource exampleResource 'Microsoft.AzureArcData/sqlServerInstances@2022-06-15-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    azureDefenderStatus: 'Protected'
    azureDefenderStatusLastUpdated: '2020-01-02T17:18:19.1234567Z'
    collation: 'collation'
    containerResourceId: 'Resource id of hosting Arc Machine'
    cores: '4'
    currentVersion: '2012'
    edition: 'Developer'
    hostType: 'Physical Server'
    instanceName: 'name of instance'
    licenseType: 'Free'
    patchLevel: 'patchlevel'
    productId: 'sql id'
    status: 'Registered'
    tcpDynamicPorts: '1433'
    tcpStaticPorts: '1433'
    vCore: '4'
    version: 'SQL Server 2012'
  }
  tags: {
    mytag: 'myval'
  }
}
```

## microsoft.azurearcdata/sqlserverinstances/databases

Create a Arc Sql Server database.
```bicep
resource exampleResource 'Microsoft.AzureArcData/sqlServerInstances/databases@2022-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    backupInformation: {
      lastFullBackup: '2022-05-05T16:26:33.883Z'
      lastLogBackup: '2022-05-10T16:26:33.883Z'
    }
    collationName: 'SQL_Latin1_General_CP1_CI_AS'
    compatibilityLevel: 150
    databaseCreationDate: '2022-04-05T16:26:33.883Z'
    databaseOptions: {
      isAutoCloseOn: true
      isAutoCreateStatsOn: true
      isAutoShrinkOn: true
      isAutoUpdateStatsOn: true
      isEncrypted: true
      isMemoryOptimizationEnabled: true
      isRemoteDataArchiveEnabled: true
      isTrustworthyOn: true
    }
    isReadOnly: true
    recoveryMode: 'Full'
    sizeMB: 150
    spaceAvailableMB: 100
    state: 'Online'
  }
  tags: {
    mytag: 'myval'
  }
}
```
