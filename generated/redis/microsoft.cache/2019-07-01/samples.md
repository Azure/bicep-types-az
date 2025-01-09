# Microsoft.Cache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cache/redis

RedisCacheCreate
```bicep
resource exampleResource 'Microsoft.Cache/Redis@2019-07-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '10.0.0.5'
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
resource exampleResource 'Microsoft.Cache/Redis/firewallRules@2019-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIP: '10.0.1.4'
    startIP: '10.0.1.1'
  }
}
```

## microsoft.cache/redis/linkedservers

LinkedServer_Create
```bicep
resource exampleResource 'Microsoft.Cache/Redis/linkedServers@2019-07-01' = {
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
resource exampleResource 'Microsoft.Cache/Redis/patchSchedules@2019-07-01' = {
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
