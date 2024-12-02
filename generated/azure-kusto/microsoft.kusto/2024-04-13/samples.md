# Microsoft.Kusto
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.kusto/clusters

KustoClustersCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters@2024-04-13' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    allowedIpRangeList: [
      '0.0.0.0/0'
    ]
    enableAutoStop: true
    enableDoubleEncryption: false
    enablePurge: true
    enableStreamingIngest: true
    languageExtensions: {
      value: [
        {
          languageExtensionImageName: 'Python3_10_8'
          languageExtensionName: 'PYTHON'
        }
        {
          languageExtensionImageName: 'R'
          languageExtensionName: 'R'
        }
      ]
    }
    publicIPType: 'DualStack'
    publicNetworkAccess: 'Enabled'
  }
  sku: {
    name: 'Standard_L16as_v3'
    capacity: 2
    tier: 'Standard'
  }
}
```

## microsoft.kusto/clusters/attacheddatabaseconfigurations

AttachedDatabaseConfigurationsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    clusterResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Kusto/Clusters/kustoCluster2'
    databaseName: 'kustodatabase'
    databaseNameOverride: 'overridekustodatabase'
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

## microsoft.kusto/clusters/databases

Kusto ReadOnly database update
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases@2024-04-13' = {
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
resource exampleResource 'Microsoft.Kusto/clusters/databases@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  kind: 'ReadWrite'
  location: 'westus'
  properties: {
    softDeletePeriod: 'P1D'
  }
}
```

## microsoft.kusto/clusters/databases/dataconnections

KustoDataConnectionsCosmosDbCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/dataConnections@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  kind: 'CosmosDb'
  location: 'westus'
  properties: {
    cosmosDbAccountResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.DocumentDb/databaseAccounts/cosmosDbAccountTest1'
    cosmosDbContainer: 'cosmosDbContainerTest'
    cosmosDbDatabase: 'cosmosDbDatabaseTest'
    managedIdentityResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1'
    mappingRuleName: 'TestMapping'
    retrievalStartDate: '2022-07-29T12:00:00.6554616Z'
    tableName: 'TestTable'
  }
}
```

KustoDataConnectionsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/dataConnections@2024-04-13' = {
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

KustoDataConnectionsEventGridCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/dataConnections@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  kind: 'EventGrid'
  location: 'westus'
  properties: {
    blobStorageEventType: 'Microsoft.Storage.BlobCreated'
    consumerGroup: '$Default'
    dataFormat: 'MULTIJSON'
    databaseRouting: 'Single'
    eventGridResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount/providers/Microsoft.EventGrid/eventSubscriptions/eventSubscriptionTest'
    eventHubResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.EventHub/namespaces/eventhubTestns1/eventhubs/eventhubTest2'
    ignoreFirstRecord: false
    managedIdentityResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/managedidentityTest1'
    mappingRuleName: 'TestMapping'
    storageAccountResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/teststorageaccount'
    tableName: 'TestTable'
  }
}
```

## microsoft.kusto/clusters/databases/principalassignments

KustoDatabasePrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/databases/principalAssignments@2024-04-13' = {
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
resource exampleResource 'Microsoft.Kusto/clusters/databases/scripts@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    continueOnErrors: true
    forceUpdateTag: '2bcf3c21-ffd1-4444-b9dd-e52e00ee53fe'
    principalPermissionsAction: 'RemovePermissionOnScriptCompletion'
    scriptLevel: 'Database'
    scriptUrl: 'https://mysa.blob.core.windows.net/container/script.txt'
    scriptUrlSasToken: '?sv=2019-02-02&st=2019-04-29T22%3A18%3A26Z&se=2019-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=********************************'
  }
}
```

## microsoft.kusto/clusters/managedprivateendpoints

KustoManagedPrivateEndpointsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/managedPrivateEndpoints@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'blob'
    privateLinkResourceId: '/subscriptions/12345678-1234-1234-1234-123456789098/resourceGroups/kustorptest/providers/Microsoft.Storage/storageAccounts/storageAccountTest'
    requestMessage: 'Please Approve.'
  }
}
```

## microsoft.kusto/clusters/principalassignments

KustoClusterPrincipalAssignmentsCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/principalAssignments@2024-04-13' = {
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

## microsoft.kusto/clusters/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/privateEndpointConnections@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.kusto/clusters/sandboxcustomimages

KustoSandboxCustomImagesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/sandboxCustomImages@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    languageVersion: '3.10.8'
    requirementsFileContent: 'Requests'
    language: 'Python'
  }
}
```

KustoSandboxCustomImagesCreateOrUpdateWithCustomBaseImage
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/sandboxCustomImages@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    baseImageName: 'customImage1'
    requirementsFileContent: 'Requests'
    language: 'Python'
  }
}
```

KustoSandboxCustomImagesCreateOrUpdateWithManagedBaseImage
```bicep
resource exampleResource 'Microsoft.Kusto/clusters/sandboxCustomImages@2024-04-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    baseImageName: 'Python3_10_8'
    requirementsFileContent: 'Requests'
    language: 'Python'
  }
}
```
