# Microsoft.Cache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cache/redis

RedisCacheCreate
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
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
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
  }
  zones: [
    '1'
  ]
}
```

RedisCacheCreateAutomaticZonalAllocationPolicy
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
    zonalAllocationPolicy: 'Automatic'
  }
}
```

RedisCacheCreateDefaultVersion
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
  }
  zones: [
    '1'
  ]
}
```

RedisCacheCreateLatestVersion
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    redisVersion: 'Latest'
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
  }
  zones: [
    '1'
  ]
}
```

RedisCacheCreateNoZonesZonalAllocationPolicy
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
    zonalAllocationPolicy: 'NoZones'
  }
}
```

RedisCacheCreateUserDefinedZonalAllocationPolicy
```bicep
resource exampleResource 'Microsoft.Cache/redis@2024-11-01' = {
  name: 'example'
  location: 'East US'
  properties: {
    enableNonSslPort: true
    minimumTlsVersion: '1.2'
    redisConfiguration: {
      'maxmemory-policy': 'allkeys-lru'
    }
    redisVersion: 'Latest'
    replicasPerPrimary: 2
    shardCount: 2
    sku: {
      name: 'Premium'
      capacity: 1
      family: 'P'
    }
    staticIP: '192.168.0.5'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/network1/subnets/subnet1'
    zonalAllocationPolicy: 'UserDefined'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.cache/redis/accesspolicies

RedisCacheAccessPolicyCreateUpdate
```bicep
resource exampleResource 'Microsoft.Cache/redis/accessPolicies@2024-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    permissions: '+get +hget'
  }
}
```

## microsoft.cache/redis/accesspolicyassignments

RedisCacheAccessPolicyAssignmentCreateUpdate
```bicep
resource exampleResource 'Microsoft.Cache/redis/accessPolicyAssignments@2024-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessPolicyName: 'accessPolicy1'
    objectId: '6497c918-11ad-41e7-1b0f-7c518a87d0b0'
    objectIdAlias: 'TestAADAppRedis'
  }
}
```

## microsoft.cache/redis/firewallrules

RedisCacheFirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.Cache/redis/firewallRules@2024-11-01' = {
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
resource exampleResource 'Microsoft.Cache/redis/linkedServers@2024-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedRedisCacheId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Cache/Redis/cache2'
    linkedRedisCacheLocation: 'West US'
    serverRole: 'Secondary'
  }
}
```

## microsoft.cache/redis/patchschedules

RedisCachePatchSchedulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Cache/redis/patchSchedules@2024-11-01' = {
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
resource exampleResource 'Microsoft.Cache/redis/privateEndpointConnections@2024-11-01' = {
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
