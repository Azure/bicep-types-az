# Microsoft.Cache

## microsoft.cache/redisenterprise

RedisEnterpriseCreate
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise@2023-07-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    minimumTlsVersion: '1.2'
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
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2023-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientProtocol: 'Encrypted'
    clusteringPolicy: 'EnterpriseCluster'
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

RedisEnterpriseDatabasesCreate With Active Geo Replication
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2023-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientProtocol: 'Encrypted'
    clusteringPolicy: 'EnterpriseCluster'
    evictionPolicy: 'NoEviction'
    geoReplication: {
      groupNickname: 'groupName'
      linkedDatabases: [
        {
          id: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.Cache/redisEnterprise/cache1/databases/default'
        }
        {
          id: '/subscriptions/subid2/resourceGroups/rg2/providers/Microsoft.Cache/redisEnterprise/cache2/databases/default'
        }
      ]
    }
    port: 10000
  }
}
```

## microsoft.cache/redisenterprise/privateendpointconnections

RedisEnterprisePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/privateEndpointConnections@2023-07-01' = {
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
