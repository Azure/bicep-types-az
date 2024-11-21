# Microsoft.Cache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cache/redis

RedisCacheCreate
```bicep
resource exampleResource 'Microsoft.Cache/redis@2021-06-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      maxmemory-policy: 'allkeys-lru'
    }
    redisVersion: '4'
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/subid/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.cache/redis/firewallrules

RedisCacheFirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.Cache/redis/firewallRules@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIP: '192.168.1.4'
    startIP: '192.168.1.1'
  }
}
```

## microsoft.cache/redis/linkedservers

LinkedServer_Create
```bicep
resource exampleResource 'Microsoft.Cache/redis/linkedServers@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedRedisCacheId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Cache/Redis/cache2'
    linkedRedisCacheLocation: 'West US'
    serverRole: 'Secondary'
  }
}
```

## microsoft.cache/redis/patchschedules

RedisCachePatchSchedulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Cache/redis/patchSchedules@2021-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scheduleEntries: [
      {
        dayOfWeek: 'Monday'
        maintenanceWindow: 'PT5H'
        startHourUtc: 12
      }
      {
        dayOfWeek: 'Tuesday'
        startHourUtc: 12
      }
    ]
  }
}
```

## microsoft.cache/redis/privateendpointconnections

RedisCachePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Cache/redis/privateEndpointConnections@2021-06-01' = {
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
