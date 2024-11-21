# Microsoft.OperationalInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.operationalinsights/clusters

ClustersCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/clusters@2019-08-01-preview' = {
  name: 'example'
  location: 'australiasoutheast'
  properties: {
    keyVaultProperties: {
      keyName: 'aztest2170cert'
      keyVaultUri: 'https://aztest2170.vault.azure.net'
      keyVersion: '654ft6c4e63845cbb50fd6fg51540429'
    }
  }
  sku: {
    name: 'CapacityReservation'
    capacity: 1000
  }
  tags: {
    tag1: 'val1'
  }
}
```

## microsoft.operationalinsights/workspaces/dataexports

DataExportCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/dataExports@2019-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      resourceId: '/subscriptions/192b9f85-a39a-4276-b96d-d5cd351703f9/resourceGroups/OIAutoRest1234/providers/Microsoft.EventHub/namespaces/test'
    }
    tableNames: [
      'Heartbeat'
    ]
  }
}
```

## microsoft.operationalinsights/workspaces/linkedservices

LinkedServicesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/linkedServices@2019-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    writeAccessResourceId: '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.OperationalInsights/automationClusters/testcluster'
  }
}
```

## microsoft.operationalinsights/workspaces/linkedstorageaccounts

LinkedStorageAccountsCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2019-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountIds: [
      '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageA'
      '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Storage/storageAccounts/testStorageB'
    ]
  }
}
```
