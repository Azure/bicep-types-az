# Microsoft.AppPlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.appplatform/spring

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2021-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
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

Services_CreateOrUpdate_VNetInjection
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring@2021-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    networkProfile: {
      appNetworkResourceGroup: 'my-app-network-rg'
      appSubnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/apps'
      serviceCidr: '10.8.0.0/16,10.244.0.0/16,10.245.0.1/16'
      serviceRuntimeNetworkResourceGroup: 'my-service-runtime-network-rg'
      serviceRuntimeSubnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVirtualNetwork/subnets/serviceRuntime'
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

## microsoft.appplatform/spring/apps

Apps_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
  }
  location: 'eastus'
  properties: {
    activeDeploymentName: 'mydeployment1'
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
    fqdn: 'myapp.mydomain.com'
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
  }
}
```

## microsoft.appplatform/spring/apps/bindings

Bindings_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/bindings@2021-09-01-preview' = {
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
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/deployments@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentSettings: {
      environmentVariables: {
        env: 'test'
      }
      jvmOptions: '-Xms1G -Xmx3G'
      resourceRequests: {
        cpu: '1000m'
        memory: '3Gi'
      }
      runtimeVersion: 'Java_8'
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
}
```

Deployments_CreateOrUpdate_CustomContainer
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/deployments@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentSettings: {
      environmentVariables: {
        env: 'test'
      }
      resourceRequests: {
        cpu: '1000m'
        memory: '3Gi'
      }
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
        server: 'myacr.azurecr.io'
      }
    }
  }
}
```

## microsoft.appplatform/spring/apps/domains

CustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/apps/domains@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certName: 'mycert'
    thumbprint: '934367bf1c97033f877db0f15cb1b586957d3133'
  }
}
```

## microsoft.appplatform/spring/certificates

Certificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/certificates@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'KeyVaultCertificate'
    certVersion: '08a219d06d874795a96db47e06fbb01e'
    keyVaultCertName: 'mycert'
    vaultUri: 'https://myvault.vault.azure.net'
  }
}
```

## microsoft.appplatform/spring/configservers

ConfigServers_UpdatePut
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/configServers@2021-09-01-preview' = {
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

## microsoft.appplatform/spring/monitoringsettings

MonitoringSettings_UpdatePut
```bicep
resource exampleResource 'Microsoft.AppPlatform/Spring/monitoringSettings@2021-09-01-preview' = {
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
resource exampleResource 'Microsoft.AppPlatform/Spring/storages@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accountKey: 'account-key-of-storage-account'
    accountName: 'storage-account-name'
    storageType: 'StorageAccount'
  }
}
```
