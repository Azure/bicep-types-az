# Microsoft.Cache

## microsoft.cache/redis

RedisCacheCreate
```bicep
resource exampleResource 'Microsoft.Cache/Redis@2017-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    enableNonSslPort: true
    redisConfiguration: {
      maxmemory-policy: 'allkeys-lru'
    }
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
resource exampleResource 'Microsoft.Cache/Redis/firewallRules@2017-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIP: '192.168.1.4'
    startIP: '192.168.1.1'
  }
}
```

## microsoft.cache/redis/patchschedules

RedisCachePatchSchedulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Cache/Redis/patchSchedules@2017-10-01' = {
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

## microsoft.cache/redis/linkedservers

LinkedServer_Create
```bicep
resource exampleResource 'Microsoft.Cache/Redis/linkedServers@2017-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedRedisCacheId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Cache/Redis/cache2'
    linkedRedisCacheLocation: 'West US'
    serverRole: 'Secondary'
  }
}
```
