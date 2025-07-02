# Microsoft.DocumentDB
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.documentdb/mongoclusters

Creates a Mongo Cluster resource from a point in time restore
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2025-04-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    createMode: 'PointInTimeRestore'
    restoreParameters: {
      pointInTimeUTC: '2023-01-13T20:07:35Z'
      sourceResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestResourceGroup/providers/Microsoft.DocumentDB/mongoClusters/myOtherMongoCluster'
    }
  }
}
```

Creates a new Mongo Cluster resource with Premium SSDv2 storage.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2025-04-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    administrator: {
      password: 'password'
      userName: 'mongoAdmin'
    }
    authConfig: {
      allowedModes: [
        'NativeAuth'
      ]
    }
    compute: {
      tier: 'M30'
    }
    highAvailability: {
      targetMode: 'ZoneRedundantPreferred'
    }
    serverVersion: '5.0'
    sharding: {
      shardCount: 1
    }
    storage: {
      type: 'PremiumSSDv2'
      iops: 3000
      sizeGb: 32
      throughput: 125
    }
  }
}
```

Creates a new Mongo Cluster resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2025-04-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    administrator: {
      password: 'password'
      userName: 'mongoAdmin'
    }
    authConfig: {
      allowedModes: [
        'NativeAuth'
      ]
    }
    compute: {
      tier: 'M30'
    }
    highAvailability: {
      targetMode: 'ZoneRedundantPreferred'
    }
    serverVersion: '5.0'
    sharding: {
      shardCount: 1
    }
    storage: {
      sizeGb: 128
    }
  }
}
```

Creates a replica Mongo Cluster resource from a source resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2025-04-01-preview' = {
  name: 'example'
  location: 'centralus'
  properties: {
    createMode: 'GeoReplica'
    replicaParameters: {
      sourceLocation: 'eastus'
      sourceResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestResourceGroup/providers/Microsoft.DocumentDB/mongoClusters/mySourceMongoCluster'
    }
  }
}
```

## microsoft.documentdb/mongoclusters/firewallrules

Creates a firewall rule on a Mongo Cluster resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters/firewallRules@2025-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.documentdb/mongoclusters/privateendpointconnections

Approves a private endpoint connection on a Mongo Cluster resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters/privateEndpointConnections@2025-04-01-preview' = {
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

## microsoft.documentdb/mongoclusters/users

Creates a user on a Mongo Cluster resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters/users@2025-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    identityProvider: {
      type: 'MicrosoftEntraID'
      properties: {
        principalType: 'user'
      }
    }
    roles: [
      {
        db: 'admin'
        role: 'dbOwner'
      }
    ]
  }
}
```
