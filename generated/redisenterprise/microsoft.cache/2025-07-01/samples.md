# Microsoft.Cache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cache/redisenterprise

RedisEnterpriseCreate
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise@2025-07-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/your-subscription/resourceGroups/your-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/your-identity': {
      }
    }
  }
  location: 'West US'
  properties: {
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyIdentity: {
          identityType: 'userAssignedIdentity'
          userAssignedIdentityResourceId: '/subscriptions/your-subscription/resourceGroups/your-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/your-identity'
        }
        keyEncryptionKeyUrl: 'https://your-kv.vault.azure.net/keys/your-key/your-key-version'
      }
    }
    minimumTlsVersion: '1.2'
    publicNetworkAccess: 'Disabled'
  }
  sku: {
    name: 'EnterpriseFlash_F300'
    capacity: 3
  }
  tags: {
    tag1: 'value1'
  }
  zones: [
    '1'
    '2'
    '3'
  ]
}
```

## microsoft.cache/redisenterprise/databases

RedisEnterpriseDatabasesCreate
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessKeysAuthentication: 'Enabled'
    clientProtocol: 'Encrypted'
    clusteringPolicy: 'EnterpriseCluster'
    deferUpgrade: 'NotDeferred'
    evictionPolicy: 'AllKeysLRU'
    modules: [
      {
        name: 'RedisBloom'
        args: 'ERROR_RATE 0.00 INITIAL_SIZE 400'
      }
      {
        name: 'RedisTimeSeries'
        args: 'RETENTION_POLICY 20'
      }
      {
        name: 'RediSearch'
      }
    ]
    persistence: {
      aofEnabled: true
      aofFrequency: '1s'
    }
    port: 10000
  }
}
```

RedisEnterpriseDatabasesCreate No Cluster Cache
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientProtocol: 'Encrypted'
    clusteringPolicy: 'NoCluster'
    evictionPolicy: 'NoEviction'
    port: 10000
  }
}
```

RedisEnterpriseDatabasesCreate With Active Geo Replication
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessKeysAuthentication: 'Enabled'
    clientProtocol: 'Encrypted'
    clusteringPolicy: 'EnterpriseCluster'
    evictionPolicy: 'NoEviction'
    geoReplication: {
      groupNickname: 'groupName'
      linkedDatabases: [
        {
          id: '/subscriptions/e7b5a9d2-6b6a-4d2f-9143-20d9a10f5b8f/resourceGroups/rg1/providers/Microsoft.Cache/redisEnterprise/cache1/databases/default'
        }
        {
          id: '/subscriptions/e7b5a9d2-6b6a-4d2f-9143-20d9a10f5b8e/resourceGroups/rg2/providers/Microsoft.Cache/redisEnterprise/cache2/databases/default'
        }
      ]
    }
    port: 10000
  }
}
```

## microsoft.cache/redisenterprise/databases/accesspolicyassignments

RedisEnterpriseAccessPolicyAssignmentCreateUpdate
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases/accessPolicyAssignments@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessPolicyName: 'default'
    user: {
      objectId: '6497c918-11ad-41e7-1b0f-7c518a87d0b0'
    }
  }
}
```

## microsoft.cache/redisenterprise/privateendpointconnections

RedisEnterprisePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/privateEndpointConnections@2025-07-01' = {
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
