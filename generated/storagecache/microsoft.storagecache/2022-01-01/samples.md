# Microsoft.StorageCache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagecache/caches

Caches_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageCache/caches@2022-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1: {
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
resource exampleResource 'Microsoft.StorageCache/caches@2022-01-01' = {
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
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2022-01-01' = {
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
      usageModel: 'READ_HEAVY_INFREQ'
    }
    targetType: 'nfs3'
  }
}
```

StorageTargets_CreateOrUpdate_BlobNfs
```bicep
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2022-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    blobNfs: {
      target: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Storage/storageAccounts/blofnfs/blobServices/default/containers/blobnfs'
      usageModel: 'WRITE_WORKLOAD_15'
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
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2022-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    nfs3: {
      target: '10.0.44.44'
      usageModel: 'READ_HEAVY_INFREQ'
    }
    targetType: 'nfs3'
  }
}
```
