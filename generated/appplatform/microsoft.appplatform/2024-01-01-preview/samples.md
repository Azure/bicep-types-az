# Microsoft.AppPlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.appplatform/spring

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2024-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    maintenanceScheduleConfiguration: {
      day: 'Sunday'
      frequency: 'Weekly'
      hour: 10
    }
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
  tags: {
    key1: 'value1'
  }
}
```

Services_CreateOrUpdate_Consumption
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2024-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    managedEnvironmentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.App/managedEnvironments/myenvironment'
  }
  sku: {
    name: 'S0'
    tier: 'StandardGen2'
  }
  tags: {
    key1: 'value1'
  }
}
```

Services_CreateOrUpdate_Enterprise
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2024-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    marketplaceResource: {
      plan: 'tanzu-asc-ent-mtr'
      product: 'azure-spring-cloud-vmware-tanzu-2'
      publisher: 'vmware-inc'
    }
  }
  sku: {
    name: 'E0'
    tier: 'Enterprise'
  }
  tags: {
    key1: 'value1'
  }
}
```

Services_CreateOrUpdate_VNetInjection
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2024-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    networkProfile: {
      appNetworkResourceGroup: 'my-app-network-rg'
      appSubnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/apps'
      ingressConfig: {
        readTimeoutInSeconds: 300
      }
      serviceCidr: '10.8.0.0/16,10.244.0.0/16,10.245.0.1/16'
      serviceRuntimeNetworkResourceGroup: 'my-service-runtime-network-rg'
      serviceRuntimeSubnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/serviceRuntime'
    }
    vnetAddons: {
      dataPlanePublicEndpoint: true
      logStreamPublicEndpoint: true
    }
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.appplatform/spring/apiportals

ApiPortals_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apiPortals@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apiTryOutEnabledState: 'Enabled'
    gatewayIds: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/gateways/default'
    ]
    public: true
  }
  sku: {
    name: 'E0'
    capacity: 2
    tier: 'Enterprise'
  }
}
```

## microsoft.appplatform/spring/apiportals/domains

ApiPortalCustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apiPortals/domains@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    thumbprint: '*'
  }
}
```

## microsoft.appplatform/spring/apms

Apms_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apms@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'ApplicationInsights'
    properties: {
      any-string: 'any-string'
      sampling-rate: '12.0'
    }
    secrets: {
      connection-string: 'XXXXXXXXXXXXXXXXX=XXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXXXXX=XXXXXXXXXXXXXXXXXXX'
    }
  }
}
```

## microsoft.appplatform/spring/applicationaccelerators

ApplicationAccelerators_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/applicationAccelerators@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
  sku: {
    name: 'E0'
    capacity: 2
    tier: 'Enterprise'
  }
}
```

## microsoft.appplatform/spring/applicationaccelerators/customizedaccelerators

CustomizedAccelerators_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'acc-desc'
    acceleratorTags: [
      'tag-a'
      'tag-b'
    ]
    displayName: 'acc-name'
    gitRepository: {
      authSetting: {
        authType: 'SSH'
        hostKey: 'git-auth-hostkey'
        hostKeyAlgorithm: 'git-auth-algorithm'
        privateKey: 'git-auth-privatekey'
      }
      branch: 'git-branch'
      commit: '12345'
      gitTag: 'git-tag'
      intervalInSeconds: 70
      url: 'git-url'
    }
    iconUrl: 'acc-icon'
  }
  sku: {
    name: 'E0'
    capacity: 2
    tier: 'Enterprise'
  }
}
```

## microsoft.appplatform/spring/applicationliveviews

ApplicationLiveViews_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/applicationLiveViews@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.appplatform/spring/apps

Apps_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    principalId: {
    }
    tenantId: {
    }
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/samplegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
        clientId: {
        }
        principalId: {
        }
      }
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/samplegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
        clientId: {
        }
        principalId: {
        }
      }
    }
  }
  location: 'eastus'
  properties: {
    addonConfigs: {
      ApplicationConfigurationService: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/configurationServices/myacs'
      }
      ServiceRegistry: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/serviceRegistries/myServiceRegistry'
      }
    }
    customPersistentDisks: [
      {
        customPersistentDiskProperties: {
          type: 'AzureFileVolume'
          enableSubPath: true
          mountOptions: [
            'uid=0'
            'gid=0'
            'dir_mode=0777'
            'file_mode=0777'
          ]
          mountPath: '/mypath1/mypath2'
          shareName: 'myFileShare'
        }
        storageId: 'myASCStorageID'
      }
    ]
    enableEndToEndTLS: false
    httpsOnly: false
    loadedCertificates: [
      {
        loadTrustStore: false
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert1'
      }
      {
        loadTrustStore: true
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert2'
      }
    ]
    persistentDisk: {
      mountPath: '/mypersistentdisk'
      sizeInGB: 2
    }
    public: true
    temporaryDisk: {
      mountPath: '/mytemporarydisk'
      sizeInGB: 2
    }
    testEndpointAuthState: 'Enabled'
    workloadProfileName: 'dedicated1'
  }
}
```

Apps_CreateOrUpdate_VNetInjection
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    principalId: {
    }
    tenantId: {
    }
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/samplegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
        clientId: {
        }
        principalId: {
        }
      }
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/samplegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
        clientId: {
        }
        principalId: {
        }
      }
    }
  }
  location: 'eastus'
  properties: {
    addonConfigs: {
      ApplicationConfigurationService: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/configurationServices/myacs'
      }
      ServiceRegistry: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/serviceRegistries/myServiceRegistry'
      }
    }
    customPersistentDisks: [
      {
        customPersistentDiskProperties: {
          type: 'AzureFileVolume'
          mountOptions: [
            'uid=0'
            'gid=0'
            'dir_mode=0777'
            'file_mode=0777'
          ]
          mountPath: '/mypath1/mypath2'
          shareName: 'myFileShare'
        }
        storageId: 'myASCStorageID'
      }
    ]
    enableEndToEndTLS: false
    httpsOnly: false
    loadedCertificates: [
      {
        loadTrustStore: false
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert1'
      }
      {
        loadTrustStore: true
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert2'
      }
    ]
    persistentDisk: {
      mountPath: '/mypersistentdisk'
      sizeInGB: 2
    }
    public: true
    temporaryDisk: {
      mountPath: '/mytemporarydisk'
      sizeInGB: 2
    }
    testEndpointAuthState: 'Enabled'
    vnetAddons: {
      publicEndpoint: true
    }
  }
}
```

## microsoft.appplatform/spring/apps/bindings

Bindings_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/bindings@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bindingParameters: {
      apiType: 'SQL'
      databaseName: 'db1'
    }
    createdAt: {
    }
    generatedProperties: {
    }
    key: 'xxxx'
    resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.DocumentDB/databaseAccounts/my-cosmosdb-1'
    updatedAt: {
    }
  }
}
```

## microsoft.appplatform/spring/apps/deployments

Deployments_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/deployments@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentSettings: {
      addonConfigs: {
        ApplicationConfigurationService: {
          patterns: [
            'mypattern'
          ]
        }
      }
      apms: [
        {
          resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/apms/myappinsights'
        }
      ]
      environmentVariables: {
        env: 'test'
      }
      livenessProbe: {
        disableProbe: false
        failureThreshold: 3
        initialDelaySeconds: 30
        periodSeconds: 10
        probeAction: {
          type: 'HTTPGetAction'
          path: '/health'
          scheme: 'HTTP'
        }
      }
      readinessProbe: {
        disableProbe: false
        failureThreshold: 3
        initialDelaySeconds: 30
        periodSeconds: 10
        probeAction: {
          type: 'HTTPGetAction'
          path: '/health'
          scheme: 'HTTP'
        }
      }
      resourceRequests: {
        cpu: '1000m'
        memory: '3Gi'
      }
      startupProbe: {
      }
      terminationGracePeriodSeconds: 30
    }
    instances: {
    }
    source: {
      type: 'Source'
      artifactSelector: 'sub-module-1'
      relativePath: 'resources/a172cedcae47474b615c54d510a5d84a8dea3032e958587430b413538be3f333-2019082605-e3095339-1723-44b7-8b5e-31b1003978bc'
      version: '1.0'
    }
  }
  sku: {
    name: 'S0'
    capacity: 1
    tier: 'Standard'
  }
}
```

Deployments_CreateOrUpdate_CustomContainer
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/deployments@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentSettings: {
      environmentVariables: {
        env: 'test'
      }
      livenessProbe: {
        disableProbe: false
        failureThreshold: 3
        initialDelaySeconds: 30
        periodSeconds: 10
        probeAction: {
          type: 'HTTPGetAction'
          path: '/health'
          scheme: 'HTTP'
        }
      }
      readinessProbe: {
        disableProbe: false
        failureThreshold: 3
        initialDelaySeconds: 30
        periodSeconds: 10
        probeAction: {
          type: 'HTTPGetAction'
          path: '/health'
          scheme: 'HTTP'
        }
      }
      resourceRequests: {
        cpu: '1000m'
        memory: '3Gi'
      }
      startupProbe: {
      }
      terminationGracePeriodSeconds: 30
    }
    instances: {
    }
    source: {
      type: 'Container'
      customContainer: {
        args: [
          '-c'
          'while true; do echo hello; sleep 10;done'
        ]
        command: [
          '/bin/sh'
        ]
        containerImage: 'myContainerImage:v1'
        imageRegistryCredential: {
          password: 'myPassword'
          username: 'myUsername'
        }
        languageFramework: 'springboot'
        server: 'myacr.azurecr.io'
      }
    }
  }
}
```

## microsoft.appplatform/spring/apps/domains

CustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/domains@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certName: 'mycert'
    thumbprint: '934367bf1c97033f877db0f15cb1b586957d3133'
  }
}
```

## microsoft.appplatform/spring/buildservices

BuildService_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/buildServices@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    containerRegistry: 'subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/containerRegistrys/default'
  }
}
```

## microsoft.appplatform/spring/buildservices/agentpools

BuildServiceAgentPool_UpdatePut
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/buildServices/agentPools@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    poolSize: {
      name: 'S3'
    }
  }
}
```

## microsoft.appplatform/spring/buildservices/builders

BuildServiceBuilder_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/buildServices/builders@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    buildpackGroups: [
      {
        name: 'mix'
        buildpacks: [
          {
            id: 'tanzu-buildpacks/java-azure'
          }
        ]
      }
    ]
    stack: {
      id: 'io.buildpacks.stacks.bionic'
      version: 'base'
    }
  }
}
```

## microsoft.appplatform/spring/buildservices/builders/buildpackbindings

BuildpackBinding_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/buildServices/builders/buildpackBindings@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bindingType: 'ApplicationInsights'
    launchProperties: {
      properties: {
        abc: 'def'
        any-string: 'any-string'
        sampling-rate: '12.0'
      }
      secrets: {
        connection-string: 'XXXXXXXXXXXXXXXXX=XXXXXXXXXXXXX-XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXXXXX=XXXXXXXXXXXXXXXXXXX'
      }
    }
  }
}
```

## microsoft.appplatform/spring/buildservices/builds

BuildService_CreateOrUpdateBuild
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/buildServices/builds@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    agentPool: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/buildServices/default/agentPools/default'
    apms: [
      {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/apms/myappinsights'
      }
    ]
    builder: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/buildServices/default/builders/default'
    certificates: [
      {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert1'
      }
      {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/certificates/mycert2'
      }
    ]
    env: {
      environmentVariable: 'test'
    }
    relativePath: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855-20210601-3ed9f4a2-986b-4bbd-b833-a42dccb2f777'
    resourceRequests: {
      cpu: '1'
      memory: '2Gi'
    }
  }
}
```

## microsoft.appplatform/spring/certificates

Certificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/certificates@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'KeyVaultCertificate'
    autoSync: 'Enabled'
    certVersion: '08a219d06d874795a96db47e06fbb01e'
    keyVaultCertName: 'mycert'
    vaultUri: 'https://myvault.vault.azure.net'
  }
}
```

## microsoft.appplatform/spring/configservers

ConfigServers_UpdatePut
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/configServers@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configServer: {
      gitProperty: {
        label: 'master'
        searchPaths: [
          '/'
        ]
        uri: 'https://github.com/fake-user/fake-repository.git'
      }
    }
  }
}
```

ConfigServers_UpdatePut_Consumption
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/configServers@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    configServer: {
      gitProperty: {
        label: 'master'
        searchPaths: [
          '/'
        ]
        uri: 'https://github.com/fake-user/fake-repository.git'
      }
    }
    enabledState: 'Enabled'
  }
}
```

## microsoft.appplatform/spring/configurationservices

ConfigurationServices_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/configurationServices@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    settings: {
      gitProperty: {
        repositories: [
          {
            name: 'fake'
            label: 'master'
            patterns: [
              'app/dev'
            ]
            uri: 'https://github.com/fake-user/fake-repository'
          }
        ]
      }
      refreshIntervalInSeconds: 60
    }
  }
}
```

## microsoft.appplatform/spring/containerregistries

ContainerRegistries_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/containerRegistries@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      type: 'BasicAuth'
      password: 'myPassword'
      server: 'myServer'
      username: 'myUsername'
    }
  }
}
```

## microsoft.appplatform/spring/eurekaservers

EurekaServers_UpdatePut_Consumption
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/eurekaServers@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledState: 'Enabled'
  }
}
```

## microsoft.appplatform/spring/gateways

Gateways_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/gateways@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    apms: [
      {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/apms/myappinsights'
      }
    ]
    public: true
    resourceRequests: {
      cpu: '1'
      memory: '1G'
    }
    responseCacheProperties: {
      responseCacheType: 'LocalCachePerRoute'
      size: '5MB'
      timeToLive: '300s'
    }
  }
  sku: {
    name: 'E0'
    capacity: 2
    tier: 'Enterprise'
  }
}
```

## microsoft.appplatform/spring/gateways/domains

GatewayCustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/gateways/domains@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    thumbprint: '*'
  }
}
```

## microsoft.appplatform/spring/gateways/routeconfigs

GatewayRouteConfigs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/gateways/routeConfigs@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    appResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.AppPlatform/Spring/myservice/apps/myApp'
    openApi: {
      uri: 'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json'
    }
    routes: [
      {
        filters: [
          'StripPrefix=2'
          'RateLimit=1,1s'
        ]
        predicates: [
          'Path=/api5/customer/**'
        ]
        ssoEnabled: true
        title: 'myApp route config'
      }
    ]
    protocol: 'HTTPS'
  }
}
```

## microsoft.appplatform/spring/monitoringsettings

MonitoringSettings_UpdatePut
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/monitoringSettings@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    appInsightsInstrumentationKey: '00000000-0000-0000-0000-000000000000'
    appInsightsSamplingRate: 10
    traceEnabled: true
  }
}
```

## microsoft.appplatform/spring/storages

Storages_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/storages@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accountKey: 'account-key-of-storage-account'
    accountName: 'storage-account-name'
    storageType: 'StorageAccount'
  }
}
```
