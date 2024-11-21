# Microsoft.Kusto

## microsoft.kusto/clusters

KustoClustersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters@2021-01-01' = {
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

## microsoft.kusto/clusters/principalassignments

KustoClusterPrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/principalAssignments@2021-01-01' = {
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

## microsoft.kusto/clusters/databases

Kusto ReadOnly database update
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'ReadOnlyFollowing'
  location: 'westus'
  properties: {
    hotCachePeriod: 'P1D'
  }
}
```

Kusto ReadWrite database create or update
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    softDeletePeriod: 'P1D'
  }
}
```

## microsoft.kusto/clusters/databases/principalassignments

KustoDatabasePrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/principalAssignments@2021-01-01' = {
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

## microsoft.kusto/clusters/databases/scripts

KustoScriptsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/scripts@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    continueOnErrors: true
    forceUpdateTag: '2bcf3c21-ffd1-4444-b9dd-e52e00ee53fe'
    scriptUrl: 'https://mysa.blob.core.windows.net/container/script.txt'
    scriptUrlSasToken: '?sv=2019-02-02&st=2019-04-29T22%3A18%3A26Z&se=2019-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=********************************'
  }
}
```

## microsoft.kusto/clusters/attacheddatabaseconfigurations

AttachedDatabaseConfigurationsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    clusterResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Kusto/Clusters/KustoClusterLeader'
    databaseName: 'kustodatabase'
    defaultPrincipalsModificationKind: 'Union'
    tableLevelSharingProperties: {
      externalTablesToExclude: [
        'ExternalTable2'
      ]
      externalTablesToInclude: [
        'ExternalTable1'
      ]
      materializedViewsToExclude: [
        'MaterializedViewTable2'
      ]
      materializedViewsToInclude: [
        'MaterializedViewTable1'
      ]
      tablesToExclude: [
        'Table2'
      ]
      tablesToInclude: [
        'Table1'
      ]
    }
  }
}
```

## microsoft.kusto/clusters/databases/dataconnections

KustoDataConnectionsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/dataConnections@2021-01-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'EventHub'
  location: 'westus'
  properties: {
    consumerGroup: 'testConsumerGroup1'
    eventHubResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest1'
    managedIdentityResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1'
  }
}
```
