# Microsoft.DocumentDB

## microsoft.documentdb/mongoclusters

Creates a Mongo Cluster resource from a point in time restore
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2024-06-01-preview' = {
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

Creates a new Mongo Cluster resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2024-06-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    administratorLogin: 'mongoAdmin'
    administratorLoginPassword: 'password'
    nodeGroupSpecs: [
      {
        diskSizeGB: 128
        enableHa: true
        kind: 'Shard'
        nodeCount: 1
        sku: 'M30'
      }
    ]
    serverVersion: '5.0'
  }
}
```

Creates a replica Mongo Cluster resource from a source resource.
```bicep
resource exampleResource 'Microsoft.DocumentDB/mongoClusters@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.DocumentDB/mongoClusters/firewallRules@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.DocumentDB/mongoClusters/privateEndpointConnections@2024-06-01-preview' = {
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
