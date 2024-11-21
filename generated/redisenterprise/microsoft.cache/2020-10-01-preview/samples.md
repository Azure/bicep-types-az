# Microsoft.Cache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cache/redisenterprise

RedisEnterpriseCreate
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise@2020-10-01-preview' = {
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
resource exampleResource 'Microsoft.Cache/redisEnterprise/databases@2020-10-01-preview' = {
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
    port: 10000
  }
}
```

## microsoft.cache/redisenterprise/privateendpointconnections

RedisEnterprisePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Cache/redisEnterprise/privateEndpointConnections@2020-10-01-preview' = {
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
