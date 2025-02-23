# Microsoft.Storage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storage/storageaccounts

NfsV3AccountCreate
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  kind: 'BlockBlobStorage'
  location: 'eastus'
  properties: {
    enableExtendedGroups: true
    isHnsEnabled: true
    isNfsV3Enabled: true
    networkAcls: {
      bypass: 'AzureServices'
      defaultAction: 'Allow'
      ipRules: [
      ]
      virtualNetworkRules: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.Network/virtualNetworks/net123/subnets/subnet12'
        }
      ]
    }
    supportsHttpsTrafficOnly: false
  }
  sku: {
    name: 'Premium_LRS'
  }
}
```

StorageAccountCreate
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    defaultToOAuthAuthentication: false
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    isSftpEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateAllowedCopyScopeToAAD
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    allowedCopyScope: 'AAD'
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateAllowedCopyScopeToPrivateLink
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    allowedCopyScope: 'PrivateLink'
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateDisallowPublicNetworkAccess
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    publicNetworkAccess: 'Disabled'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateDnsEndpointTypeToAzureDnsZone
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    defaultToOAuthAuthentication: false
    dnsEndpointType: 'AzureDnsZone'
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    isSftpEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateDnsEndpointTypeToStandard
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    defaultToOAuthAuthentication: false
    dnsEndpointType: 'Standard'
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    isSftpEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateEnablePublicNetworkAccess
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    allowBlobPublicAccess: false
    allowSharedKeyAccess: true
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    isHnsEnabled: true
    keyPolicy: {
      keyExpirationPeriodInDays: 20
    }
    minimumTlsVersion: 'TLS1_2'
    publicNetworkAccess: 'Enabled'
    routingPreference: {
      publishInternetEndpoints: true
      publishMicrosoftEndpoints: true
      routingChoice: 'MicrosoftRouting'
    }
    sasPolicy: {
      expirationAction: 'Log'
      sasExpirationPeriod: '1.15:59:59'
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreatePremiumBlockBlobStorage
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  kind: 'BlockBlobStorage'
  location: 'eastus'
  properties: {
    allowSharedKeyAccess: true
    encryption: {
      keySource: 'Microsoft.Storage'
      requireInfrastructureEncryption: false
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
    minimumTlsVersion: 'TLS1_2'
  }
  sku: {
    name: 'Premium_LRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

StorageAccountCreateUserAssignedEncryptionIdentityWithCMK
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}': {
      }
    }
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    encryption: {
      identity: {
        userAssignedIdentity: '/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}'
      }
      keySource: 'Microsoft.Keyvault'
      keyvaultproperties: {
        keyname: 'wrappingKey'
        keyvaulturi: 'https://myvault8569.vault.azure.net'
        keyversion: ''
      }
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
  }
  sku: {
    name: 'Standard_LRS'
  }
}
```

StorageAccountCreateUserAssignedIdentityWithFederatedIdentityClientId.
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}': {
      }
    }
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    encryption: {
      identity: {
        federatedIdentityClientId: 'f83c6b1b-4d34-47e4-bb34-9d83df58b540'
        userAssignedIdentity: '/subscriptions/{subscription-id}/resourceGroups/res9101/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{managed-identity-name}'
      }
      keySource: 'Microsoft.Keyvault'
      keyvaultproperties: {
        keyname: 'wrappingKey'
        keyvaulturi: 'https://myvault8569.vault.azure.net'
        keyversion: ''
      }
      services: {
        blob: {
          enabled: true
          keyType: 'Account'
        }
        file: {
          enabled: true
          keyType: 'Account'
        }
      }
    }
  }
  sku: {
    name: 'Standard_LRS'
  }
}
```

StorageAccountCreateWithImmutabilityPolicy
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2024-01-01' = {
  name: 'example'
  extendedLocation: {
    name: 'losangeles001'
    type: 'EdgeZone'
  }
  kind: 'Storage'
  location: 'eastus'
  properties: {
    immutableStorageWithVersioning: {
      enabled: true
      immutabilityPolicy: {
        allowProtectedAppendWrites: true
        immutabilityPeriodSinceCreationInDays: 15
        state: 'Unlocked'
      }
    }
  }
  sku: {
    name: 'Standard_GRS'
  }
}
```

## microsoft.storage/storageaccounts/blobservices

BlobServicesPutAllowPermanentDelete
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deleteRetentionPolicy: {
      allowPermanentDelete: true
      days: 300
      enabled: true
    }
    isVersioningEnabled: true
  }
}
```

BlobServicesPutLastAccessTimeBasedTracking
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    lastAccessTimeTrackingPolicy: {
      name: 'AccessTimeTracking'
      blobType: [
        'blockBlob'
      ]
      enable: true
      trackingGranularityInDays: 1
    }
  }
}
```

PutBlobServices
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    changeFeed: {
      enabled: true
      retentionInDays: 7
    }
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          allowedMethods: [
            'GET'
            'HEAD'
            'POST'
            'OPTIONS'
            'MERGE'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.contoso.com'
            'http://www.fabrikam.com'
          ]
          exposedHeaders: [
            'x-ms-meta-*'
          ]
          maxAgeInSeconds: 100
        }
        {
          allowedHeaders: [
            '*'
          ]
          allowedMethods: [
            'GET'
          ]
          allowedOrigins: [
            '*'
          ]
          exposedHeaders: [
            '*'
          ]
          maxAgeInSeconds: 2
        }
        {
          allowedHeaders: [
            'x-ms-meta-12345675754564*'
          ]
          allowedMethods: [
            'GET'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.abc23.com'
            'https://www.fabrikam.com/*'
          ]
          exposedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x -ms-meta-target*'
          ]
          maxAgeInSeconds: 2000
        }
      ]
    }
    defaultServiceVersion: '2017-07-29'
    deleteRetentionPolicy: {
      days: 300
      enabled: true
    }
    isVersioningEnabled: true
  }
}
```

## microsoft.storage/storageaccounts/blobservices/containers

PutContainers
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

PutContainerWithDefaultEncryptionScope
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultEncryptionScope: 'encryptionscope185'
    denyEncryptionScopeOverride: true
  }
}
```

PutContainerWithObjectLevelWorm
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    immutableStorageWithVersioning: {
      enabled: true
    }
  }
}
```

## microsoft.storage/storageaccounts/blobservices/containers/immutabilitypolicies

CreateOrUpdateImmutabilityPolicy
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowProtectedAppendWrites: true
    immutabilityPeriodSinceCreationInDays: 3
  }
}
```

CreateOrUpdateImmutabilityPolicyWithAllowProtectedAppendWritesAll
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowProtectedAppendWritesAll: true
    immutabilityPeriodSinceCreationInDays: 3
  }
}
```

## microsoft.storage/storageaccounts/encryptionscopes

StorageAccountPutEncryptionScope
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/encryptionScopes@2024-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

StorageAccountPutEncryptionScopeWithInfrastructureEncryption
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/encryptionScopes@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    requireInfrastructureEncryption: true
  }
}
```

## microsoft.storage/storageaccounts/fileservices

PutFileServices
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          allowedMethods: [
            'GET'
            'HEAD'
            'POST'
            'OPTIONS'
            'MERGE'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.contoso.com'
            'http://www.fabrikam.com'
          ]
          exposedHeaders: [
            'x-ms-meta-*'
          ]
          maxAgeInSeconds: 100
        }
        {
          allowedHeaders: [
            '*'
          ]
          allowedMethods: [
            'GET'
          ]
          allowedOrigins: [
            '*'
          ]
          exposedHeaders: [
            '*'
          ]
          maxAgeInSeconds: 2
        }
        {
          allowedHeaders: [
            'x-ms-meta-12345675754564*'
          ]
          allowedMethods: [
            'GET'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.abc23.com'
            'https://www.fabrikam.com/*'
          ]
          exposedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          maxAgeInSeconds: 2000
        }
      ]
    }
  }
}
```

PutFileServices_EnableSecureSmbFeatures
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    protocolSettings: {
      smb: {
        authenticationMethods: 'NTLMv2;Kerberos'
        channelEncryption: 'AES-128-CCM;AES-128-GCM;AES-256-GCM'
        kerberosTicketEncryption: 'RC4-HMAC;AES-256'
        versions: 'SMB2.1;SMB3.0;SMB3.1.1'
      }
    }
  }
}
```

PutFileServices_EnableSMBMultichannel
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    protocolSettings: {
      smb: {
        multichannel: {
          enabled: true
        }
      }
    }
  }
}
```

## microsoft.storage/storageaccounts/fileservices/shares

Create NFS Shares
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledProtocols: 'NFS'
  }
}
```

PutShares
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

PutShares with Access Tier
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessTier: 'Hot'
  }
}
```

PutShares with Paid Bursting
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fileSharePaidBursting: {
      paidBurstingEnabled: true
      paidBurstingMaxBandwidthMibps: 10340
      paidBurstingMaxIops: 102400
    }
  }
}
```

PutSharesProvisionedV2
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    provisionedBandwidthMibps: 200
    provisionedIops: 5000
    shareQuota: 100
  }
}
```

## microsoft.storage/storageaccounts/inventorypolicies

StorageAccountSetBlobInventoryPolicy
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/inventoryPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      type: 'Inventory'
      enabled: true
      rules: [
        {
          name: 'inventoryPolicyRule1'
          definition: {
            format: 'Csv'
            filters: {
              blobTypes: [
                'blockBlob'
                'appendBlob'
                'pageBlob'
              ]
              creationTime: {
                lastNDays: 1000
              }
              includeBlobVersions: true
              includeSnapshots: true
              prefixMatch: [
                'inventoryprefix1'
                'inventoryprefix2'
              ]
            }
            objectType: 'Blob'
            schedule: 'Daily'
            schemaFields: [
              'Name'
              'Creation-Time'
              'Last-Modified'
              'Content-Length'
              'Content-MD5'
              'BlobType'
              'AccessTier'
              'AccessTierChangeTime'
              'Snapshot'
              'VersionId'
              'IsCurrentVersion'
              'Metadata'
            ]
          }
          destination: 'container1'
          enabled: true
        }
        {
          name: 'inventoryPolicyRule2'
          definition: {
            format: 'Parquet'
            objectType: 'Container'
            schedule: 'Weekly'
            schemaFields: [
              'Name'
              'Last-Modified'
              'Metadata'
              'LeaseStatus'
              'LeaseState'
              'LeaseDuration'
              'PublicAccess'
              'HasImmutabilityPolicy'
              'HasLegalHold'
            ]
          }
          destination: 'container2'
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetBlobInventoryPolicyIncludeDeleteAndNewSchemaForHnsAccount
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/inventoryPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      type: 'Inventory'
      enabled: true
      rules: [
        {
          name: 'inventoryPolicyRule1'
          definition: {
            format: 'Csv'
            filters: {
              blobTypes: [
                'blockBlob'
                'appendBlob'
                'pageBlob'
              ]
              excludePrefix: [
                'excludeprefix1'
                'excludeprefix2'
              ]
              includeBlobVersions: true
              includeDeleted: true
              includeSnapshots: true
              prefixMatch: [
                'inventoryprefix1'
                'inventoryprefix2'
              ]
            }
            objectType: 'Blob'
            schedule: 'Daily'
            schemaFields: [
              'Name'
              'Creation-Time'
              'Last-Modified'
              'Content-Length'
              'Content-MD5'
              'BlobType'
              'AccessTier'
              'AccessTierChangeTime'
              'Snapshot'
              'VersionId'
              'IsCurrentVersion'
              'ContentType'
              'ContentEncoding'
              'ContentLanguage'
              'ContentCRC64'
              'CacheControl'
              'Metadata'
              'DeletionId'
              'Deleted'
              'DeletedTime'
              'RemainingRetentionDays'
            ]
          }
          destination: 'container1'
          enabled: true
        }
        {
          name: 'inventoryPolicyRule2'
          definition: {
            format: 'Parquet'
            objectType: 'Container'
            schedule: 'Weekly'
            schemaFields: [
              'Name'
              'Last-Modified'
              'Metadata'
              'LeaseStatus'
              'LeaseState'
              'LeaseDuration'
              'PublicAccess'
              'HasImmutabilityPolicy'
              'HasLegalHold'
              'Etag'
              'DefaultEncryptionScope'
              'DenyEncryptionScopeOverride'
              'ImmutableStorageWithVersioningEnabled'
              'Deleted'
              'Version'
              'DeletedTime'
              'RemainingRetentionDays'
            ]
          }
          destination: 'container2'
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetBlobInventoryPolicyIncludeDeleteAndNewSchemaForNonHnsAccount
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/inventoryPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      type: 'Inventory'
      enabled: true
      rules: [
        {
          name: 'inventoryPolicyRule1'
          definition: {
            format: 'Csv'
            filters: {
              blobTypes: [
                'blockBlob'
                'appendBlob'
                'pageBlob'
              ]
              excludePrefix: [
                'excludeprefix1'
                'excludeprefix2'
              ]
              includeBlobVersions: true
              includeDeleted: true
              includeSnapshots: true
              prefixMatch: [
                'inventoryprefix1'
                'inventoryprefix2'
              ]
            }
            objectType: 'Blob'
            schedule: 'Daily'
            schemaFields: [
              'Name'
              'Creation-Time'
              'Last-Modified'
              'Content-Length'
              'Content-MD5'
              'BlobType'
              'AccessTier'
              'AccessTierChangeTime'
              'Snapshot'
              'VersionId'
              'IsCurrentVersion'
              'Tags'
              'ContentType'
              'ContentEncoding'
              'ContentLanguage'
              'ContentCRC64'
              'CacheControl'
              'Metadata'
              'Deleted'
              'RemainingRetentionDays'
            ]
          }
          destination: 'container1'
          enabled: true
        }
        {
          name: 'inventoryPolicyRule2'
          definition: {
            format: 'Parquet'
            objectType: 'Container'
            schedule: 'Weekly'
            schemaFields: [
              'Name'
              'Last-Modified'
              'Metadata'
              'LeaseStatus'
              'LeaseState'
              'LeaseDuration'
              'PublicAccess'
              'HasImmutabilityPolicy'
              'HasLegalHold'
              'Etag'
              'DefaultEncryptionScope'
              'DenyEncryptionScopeOverride'
              'ImmutableStorageWithVersioningEnabled'
              'Deleted'
              'Version'
              'DeletedTime'
              'RemainingRetentionDays'
            ]
          }
          destination: 'container2'
          enabled: true
        }
      ]
    }
  }
}
```

## microsoft.storage/storageaccounts/localusers

CreateLocalUser
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/localUsers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowAclAuthorization: true
    groupId: 2000
    hasSshPassword: true
    homeDirectory: 'homedirectory'
    permissionScopes: [
      {
        permissions: 'rwd'
        resourceName: 'share1'
        service: 'file'
      }
      {
        permissions: 'rw'
        resourceName: 'share2'
        service: 'file'
      }
    ]
    sshAuthorizedKeys: [
      {
        description: 'key name'
        key: 'ssh-rsa keykeykeykeykey='
      }
    ]
  }
}
```

CreateNFSv3EnabledLocalUser
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/localUsers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    extendedGroups: [
      1001
      1005
      2005
    ]
    isNFSv3Enabled: true
  }
}
```

UpdateLocalUser
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/localUsers@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowAclAuthorization: false
    extendedGroups: [
      1001
      1005
      2005
    ]
    groupId: 3000
    hasSharedKey: false
    hasSshKey: false
    hasSshPassword: false
    homeDirectory: 'homedirectory2'
    isNFSv3Enabled: true
  }
}
```

## microsoft.storage/storageaccounts/managementpolicies

StorageAccountSetManagementPolicies
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterModificationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
        {
          name: 'olcmtest2'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterModificationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
            }
            filters: {
              blobIndexMatch: [
                {
                  name: 'tag1'
                  op: '=='
                  value: 'val1'
                }
                {
                  name: 'tag2'
                  op: '=='
                  value: 'val2'
                }
              ]
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer2'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicy_BaseBlobDaysAfterCreationActions
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterCreationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterCreationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicy_LastAccessTimeBasedBlobActions
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterLastAccessTimeGreaterThan: 1000
                }
                enableAutoTierToHotFromCool: true
                tierToArchive: {
                  daysAfterLastAccessTimeGreaterThan: 90
                }
                tierToCool: {
                  daysAfterLastAccessTimeGreaterThan: 30
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicy_LastTierChangeTimeActions
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterLastTierChangeGreaterThan: 120
                  daysAfterModificationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                tierToArchive: {
                  daysAfterCreationGreaterThan: 30
                  daysAfterLastTierChangeGreaterThan: 90
                }
              }
              version: {
                tierToArchive: {
                  daysAfterCreationGreaterThan: 30
                  daysAfterLastTierChangeGreaterThan: 90
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicyColdTierActions
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterModificationGreaterThan: 90
                }
                tierToCold: {
                  daysAfterModificationGreaterThan: 30
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 30
                }
                tierToCold: {
                  daysAfterCreationGreaterThan: 30
                }
              }
              version: {
                delete: {
                  daysAfterCreationGreaterThan: 30
                }
                tierToCold: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicyForBlockAndAppendBlobs
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 90
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 90
                }
              }
              version: {
                delete: {
                  daysAfterCreationGreaterThan: 90
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
                'appendBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicyHotTierActions
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                tierToHot: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                tierToHot: {
                  daysAfterCreationGreaterThan: 30
                }
              }
              version: {
                tierToHot: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

StorageAccountSetManagementPolicyWithSnapshotAndVersion
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/managementPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    policy: {
      rules: [
        {
          name: 'olcmtest1'
          type: 'Lifecycle'
          definition: {
            actions: {
              baseBlob: {
                delete: {
                  daysAfterModificationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterModificationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterModificationGreaterThan: 30
                }
              }
              snapshot: {
                delete: {
                  daysAfterCreationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterCreationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterCreationGreaterThan: 30
                }
              }
              version: {
                delete: {
                  daysAfterCreationGreaterThan: 1000
                }
                tierToArchive: {
                  daysAfterCreationGreaterThan: 90
                }
                tierToCool: {
                  daysAfterCreationGreaterThan: 30
                }
              }
            }
            filters: {
              blobTypes: [
                'blockBlob'
              ]
              prefixMatch: [
                'olcmtestcontainer1'
              ]
            }
          }
          enabled: true
        }
      ]
    }
  }
}
```

## microsoft.storage/storageaccounts/objectreplicationpolicies

StorageAccountCreateObjectReplicationPolicyOnDestination
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/objectReplicationPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationAccount: 'dst112'
    metrics: {
      enabled: true
    }
    rules: [
      {
        destinationContainer: 'dcont139'
        filters: {
          prefixMatch: [
            'blobA'
            'blobB'
          ]
        }
        sourceContainer: 'scont139'
      }
    ]
    sourceAccount: 'src1122'
  }
}
```

StorageAccountCreateObjectReplicationPolicyOnSource
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/objectReplicationPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationAccount: 'dst112'
    metrics: {
      enabled: true
    }
    rules: [
      {
        destinationContainer: 'dcont139'
        filters: {
          minCreationTime: '2020-02-19T16:05:00Z'
          prefixMatch: [
            'blobA'
            'blobB'
          ]
        }
        ruleId: 'd5d18a48-8801-4554-aeaa-74faf65f5ef9'
        sourceContainer: 'scont139'
      }
    ]
    sourceAccount: 'src1122'
  }
}
```

StorageAccountUpdateObjectReplicationPolicyOnDestination
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/objectReplicationPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationAccount: 'dst112'
    metrics: {
      enabled: true
    }
    rules: [
      {
        destinationContainer: 'dcont139'
        filters: {
          prefixMatch: [
            'blobA'
            'blobB'
          ]
        }
        ruleId: 'd5d18a48-8801-4554-aeaa-74faf65f5ef9'
        sourceContainer: 'scont139'
      }
      {
        destinationContainer: 'dcont179'
        sourceContainer: 'scont179'
      }
    ]
    sourceAccount: 'src1122'
  }
}
```

StorageAccountUpdateObjectReplicationPolicyOnSource
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/objectReplicationPolicies@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destinationAccount: 'dst112'
    metrics: {
      enabled: true
    }
    rules: [
      {
        destinationContainer: 'dcont139'
        filters: {
          prefixMatch: [
            'blobA'
            'blobB'
          ]
        }
        ruleId: 'd5d18a48-8801-4554-aeaa-74faf65f5ef9'
        sourceContainer: 'scont139'
      }
      {
        destinationContainer: 'dcont179'
        ruleId: 'cfbb4bc2-8b60-429f-b05a-d1e0942b33b2'
        sourceContainer: 'scont179'
      }
    ]
    sourceAccount: 'src1122'
  }
}
```

## microsoft.storage/storageaccounts/privateendpointconnections

StorageAccountPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/privateEndpointConnections@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.storage/storageaccounts/queueservices

QueueServicesPut
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/queueServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          allowedMethods: [
            'GET'
            'HEAD'
            'POST'
            'OPTIONS'
            'MERGE'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.contoso.com'
            'http://www.fabrikam.com'
          ]
          exposedHeaders: [
            'x-ms-meta-*'
          ]
          maxAgeInSeconds: 100
        }
        {
          allowedHeaders: [
            '*'
          ]
          allowedMethods: [
            'GET'
          ]
          allowedOrigins: [
            '*'
          ]
          exposedHeaders: [
            '*'
          ]
          maxAgeInSeconds: 2
        }
        {
          allowedHeaders: [
            'x-ms-meta-12345675754564*'
          ]
          allowedMethods: [
            'GET'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.abc23.com'
            'https://www.fabrikam.com/*'
          ]
          exposedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          maxAgeInSeconds: 2000
        }
      ]
    }
  }
}
```

## microsoft.storage/storageaccounts/queueservices/queues

QueueOperationPut
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/queueServices/queues@2024-01-01' = {
  parent: parentResource 
  name: 'example'
}
```

QueueOperationPutWithMetadata
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/queueServices/queues@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      sample1: 'meta1'
      sample2: 'meta2'
    }
  }
}
```

## microsoft.storage/storageaccounts/storagetaskassignments

PutStorageTaskAssignment
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/storageTaskAssignments@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'My Storage task assignment'
    enabled: true
    executionContext: {
      target: {
        excludePrefix: [
        ]
        prefix: [
          'prefix1'
          'prefix2'
        ]
      }
      trigger: {
        type: 'RunOnce'
        parameters: {
          startOn: '2022-11-15T21:52:47.8145095Z'
        }
      }
    }
    report: {
      prefix: 'container1'
    }
    taskId: '/subscriptions/1f31ba14-ce16-4281-b9b4-3e78da6e1616/resourceGroups/res4228/providers/Microsoft.StorageActions/storageTasks/mytask1'
  }
}
```

PutStorageTaskAssignmentRequiredProperties
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/storageTaskAssignments@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'My Storage task assignment'
    enabled: true
    executionContext: {
      trigger: {
        type: 'RunOnce'
        parameters: {
          startOn: '2022-11-15T21:52:47.8145095Z'
        }
      }
    }
    report: {
      prefix: 'container1'
    }
    taskId: '/subscriptions/1f31ba14-ce16-4281-b9b4-3e78da6e1616/resourceGroups/res4228/providers/Microsoft.StorageActions/storageTasks/mytask1'
  }
}
```

## microsoft.storage/storageaccounts/tableservices

TableServicesPut
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/tableServices@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cors: {
      corsRules: [
        {
          allowedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          allowedMethods: [
            'GET'
            'HEAD'
            'POST'
            'OPTIONS'
            'MERGE'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.contoso.com'
            'http://www.fabrikam.com'
          ]
          exposedHeaders: [
            'x-ms-meta-*'
          ]
          maxAgeInSeconds: 100
        }
        {
          allowedHeaders: [
            '*'
          ]
          allowedMethods: [
            'GET'
          ]
          allowedOrigins: [
            '*'
          ]
          exposedHeaders: [
            '*'
          ]
          maxAgeInSeconds: 2
        }
        {
          allowedHeaders: [
            'x-ms-meta-12345675754564*'
          ]
          allowedMethods: [
            'GET'
            'PUT'
          ]
          allowedOrigins: [
            'http://www.abc23.com'
            'https://www.fabrikam.com/*'
          ]
          exposedHeaders: [
            'x-ms-meta-abc'
            'x-ms-meta-data*'
            'x-ms-meta-target*'
          ]
          maxAgeInSeconds: 2000
        }
      ]
    }
  }
}
```

## microsoft.storage/storageaccounts/tableservices/tables

TableOperationPutOrPatchAcls
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/tableServices/tables@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    signedIdentifiers: [
      {
        accessPolicy: {
          expiryTime: '2022-03-20T08:49:37.0000000Z'
          permission: 'raud'
          startTime: '2022-03-17T08:49:37.0000000Z'
        }
        id: 'MTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTI'
      }
      {
        accessPolicy: {
          expiryTime: '2022-03-20T08:49:37.0000000Z'
          permission: 'rad'
          startTime: '2022-03-17T08:49:37.0000000Z'
        }
        id: 'PTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjM0NTY3ODklMTI'
      }
    ]
  }
}
```
