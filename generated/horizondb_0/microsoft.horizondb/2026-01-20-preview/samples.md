# Microsoft.HorizonDb
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.horizondb/clusters

Create or update a HorizonDb cluster
```bicep
resource exampleResource 'Microsoft.HorizonDb/clusters@2026-01-20-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    createMode: 'Create'
    replicaCount: 2
    sourceClusterResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/examplesourceresourcegroup/providers/Microsoft.HorizonDb/clusters/examplesourcecluster'
    vCores: 4
    version: '17'
    zonePlacementPolicy: 'Strict'
  }
  tags: {
    env: 'dev'
  }
}
```

## microsoft.horizondb/clusters/pools/firewallrules

Create or update a HorizonDb firewall rule
```bicep
resource exampleResource 'Microsoft.HorizonDb/clusters/pools/firewallRules@2026-01-20-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Allow access from corporate network'
    endIpAddress: '10.0.0.10'
    startIpAddress: '10.0.0.1'
  }
}
```

## microsoft.horizondb/clusters/pools/replicas

Create or update a HorizonDb replica
```bicep
resource exampleResource 'Microsoft.HorizonDb/clusters/pools/replicas@2026-01-20-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    availabilityZone: '1'
    role: 'Read'
  }
}
```

## microsoft.horizondb/parametergroups

Create or update a HorizonDb parameter group
```bicep
resource exampleResource 'Microsoft.HorizonDb/parameterGroups@2026-01-20-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    description: 'Parameter group for high-throughput workloads'
    applyImmediately: true
    parameters: [
      {
        name: 'max_connections'
        value: '200'
      }
      {
        name: 'log_min_error_statement'
        value: 'error'
      }
      {
        name: 'shared_buffers'
        value: '2000'
      }
    ]
    pgVersion: 17
  }
  tags: {
    env: 'dev'
    team: 'data-platform'
  }
}
```
