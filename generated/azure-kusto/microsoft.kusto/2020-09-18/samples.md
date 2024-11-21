# Microsoft.Kusto
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kusto/clusters

KustoClustersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters@2020-09-18' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    enableDoubleEncryption: false
    enablePurge: true
    enableStreamingIngest: true
  }
  sku: {
    name: 'Standard_L8s'
    capacity: 2
    tier: 'Standard'
  }
}
```

## microsoft.kusto/clusters/attacheddatabaseconfigurations

AttachedDatabaseConfigurationsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2020-09-18' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    clusterResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Kusto/Clusters/KustoClusterLeader'
    databaseName: 'kustodatabase'
    defaultPrincipalsModificationKind: 'Union'
  }
}
```

## microsoft.kusto/clusters/databases

KustoDatabasesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases@2020-09-18' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    softDeletePeriod: 'P1D'
  }
}
```

## microsoft.kusto/clusters/databases/dataconnections

KustoDataConnectionsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/dataConnections@2020-09-18' = {
  parent: parentResource 
  name: 'example'
  kind: 'EventHub'
  location: 'westus'
  properties: {
    consumerGroup: 'testConsumerGroup1'
    eventHubResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest1'
  }
}
```

## microsoft.kusto/clusters/databases/principalassignments

KustoDatabasePrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/principalAssignments@2020-09-18' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '87654321-1234-1234-1234-123456789123'
    principalType: 'App'
    role: 'Admin'
    tenantId: '12345678-1234-1234-1234-123456789123'
  }
}
```

## microsoft.kusto/clusters/principalassignments

KustoClusterPrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/principalAssignments@2020-09-18' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: '87654321-1234-1234-1234-123456789123'
    principalType: 'App'
    role: 'AllDatabasesAdmin'
    tenantId: '12345678-1234-1234-1234-123456789123'
  }
}
```
