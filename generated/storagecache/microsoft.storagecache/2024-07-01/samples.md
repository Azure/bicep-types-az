# Microsoft.StorageCache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagecache/amlfilesystems

amlFilesystems_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/amlFilesystems@2024-07-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'eastus'
  properties: {
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: 'https://examplekv.vault.azure.net/keys/kvk/3540a47df75541378d3518c6a4bdf5af'
        sourceVault: {
          id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk'
        }
      }
    }
    filesystemSubnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/fsSub'
    hsm: {
      settings: {
        container: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Storage/storageAccounts/storageaccountname/blobServices/default/containers/containername'
        importPrefixesInitial: [
          '/'
        ]
        loggingContainer: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Storage/storageAccounts/storageaccountname/blobServices/default/containers/loggingcontainername'
      }
    }
    maintenanceWindow: {
      dayOfWeek: 'Friday'
      timeOfDayUTC: '22:00'
    }
    rootSquashSettings: {
      mode: 'All'
      noSquashNidLists: '10.0.0.[5-6]@tcp;10.0.1.2@tcp'
      squashGID: 99
      squashUID: 99
    }
    storageCapacityTiB: 16
  }
  sku: {
    name: 'AMLFS-Durable-Premium-250'
  }
  tags: {
    Dept: 'ContosoAds'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.storagecache/amlfilesystems/autoexportjobs

autoExportJobs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/amlFilesystems/autoExportJobs@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    autoExportPrefixes: [
      '/'
    ]
  }
  tags: {
    Dept: 'ContosoAds'
  }
}
```

## microsoft.storagecache/amlfilesystems/importjobs

importJobs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/amlFilesystems/importJobs@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    conflictResolutionMode: 'OverwriteAlways'
    importPrefixes: [
      '/'
    ]
    maximumErrors: 0
  }
  tags: {
    Dept: 'ContosoAds'
  }
}
```

## microsoft.storagecache/caches

Caches_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/caches@2024-07-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'westus'
  properties: {
    cacheSizeGB: 3072
    directoryServicesSettings: {
      activeDirectory: {
        cacheNetBiosName: 'contosoSmb'
        credentials: {
          password: '<password>'
          username: 'consotoAdmin'
        }
        domainName: 'contosoAd.contoso.local'
        domainNetBiosName: 'contosoAd'
        primaryDnsIpAddress: '192.0.2.10'
        secondaryDnsIpAddress: '192.0.2.11'
      }
      usernameDownload: {
        credentials: {
          bindDn: 'cn=ldapadmin,dc=contosoad,dc=contoso,dc=local'
          bindPassword: '<bindPassword>'
        }
        extendedGroups: true
        ldapBaseDN: 'dc=contosoad,dc=contoso,dc=local'
        ldapServer: '192.0.2.12'
        usernameSource: 'LDAP'
      }
    }
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: 'https://keyvault-cmk.vault.azure.net/keys/key2047/test'
        sourceVault: {
          id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk'
        }
      }
    }
    securitySettings: {
      accessPolicies: [
        {
          name: 'default'
          accessRules: [
            {
              access: 'rw'
              rootSquash: false
              scope: 'default'
              submountAccess: true
              suid: false
            }
          ]
        }
      ]
    }
    subnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1'
    upgradeSettings: {
      scheduledTime: '2022-04-26T18:25:43.511Z'
      upgradeScheduleEnabled: true
    }
  }
  sku: {
    name: 'Standard_2G'
  }
  tags: {
    Dept: 'Contoso'
  }
}
```

Caches_CreateOrUpdate_ldap_only
```bicep
resource exampleResource 'Microsoft.StorageCache/caches@2024-07-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    cacheSizeGB: 3072
    directoryServicesSettings: {
      usernameDownload: {
        credentials: {
          bindDn: 'cn=ldapadmin,dc=contosoad,dc=contoso,dc=local'
          bindPassword: '<bindPassword>'
        }
        extendedGroups: true
        ldapBaseDN: 'dc=contosoad,dc=contoso,dc=local'
        ldapServer: '192.0.2.12'
        usernameSource: 'LDAP'
      }
    }
    encryptionSettings: {
      keyEncryptionKey: {
        keyUrl: 'https://keyvault-cmk.vault.azure.net/keys/key2048/test'
        sourceVault: {
          id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.KeyVault/vaults/keyvault-cmk'
        }
      }
    }
    securitySettings: {
      accessPolicies: [
        {
          name: 'default'
          accessRules: [
            {
              access: 'rw'
              rootSquash: false
              scope: 'default'
              submountAccess: true
              suid: false
            }
          ]
        }
      ]
    }
    subnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1'
    upgradeSettings: {
      scheduledTime: '2022-04-26T18:25:43.511Z'
      upgradeScheduleEnabled: true
    }
  }
  sku: {
    name: 'Standard_2G'
  }
  tags: {
    Dept: 'Contoso'
  }
}
```

## microsoft.storagecache/caches/storagetargets

StorageTargets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    junctions: [
      {
        namespacePath: '/path/on/cache'
        nfsAccessPolicy: 'default'
        nfsExport: 'exp1'
        targetPath: '/path/on/exp1'
      }
      {
        namespacePath: '/path2/on/cache'
        nfsAccessPolicy: 'rootSquash'
        nfsExport: 'exp2'
        targetPath: '/path2/on/exp2'
      }
    ]
    nfs3: {
      target: '10.0.44.44'
      usageModel: 'READ_ONLY'
      verificationTimer: 30
    }
    targetType: 'nfs3'
  }
}
```

StorageTargets_CreateOrUpdate_BlobNfs
```bicep
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    blobNfs: {
      target: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Storage/storageAccounts/blofnfs/blobServices/default/containers/blobnfs'
      usageModel: 'READ_WRITE'
      verificationTimer: 28800
      writeBackTimer: 3600
    }
    junctions: [
      {
        namespacePath: '/blobnfs'
      }
    ]
    targetType: 'blobNfs'
  }
}
```

StorageTargets_CreateOrUpdate_NoJunctions
```bicep
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2024-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    nfs3: {
      target: '10.0.44.44'
      usageModel: 'READ_ONLY'
      verificationTimer: 30
    }
    targetType: 'nfs3'
  }
}
```
