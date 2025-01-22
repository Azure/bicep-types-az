# Microsoft.DatabaseWatcher
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.databasewatcher/watchers

Watchers_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers@2025-01-02' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2'
  properties: {
    datastore: {
      adxClusterResourceId: '/subscriptions/49e0fbd3-75e8-44e7-96fd-5b64d9ad818d/resourceGroups/apiTest/providers/Microsoft.Kusto/clusters/apiTestKusto'
      kustoClusterDisplayName: 'kustoUri-adx'
      kustoClusterUri: 'https://kustouri-adx.eastus.kusto.windows.net'
      kustoDataIngestionUri: 'https://ingest-kustouri-adx.eastus.kusto.windows.net'
      kustoDatabaseName: 'kustoDatabaseName1'
      kustoManagementUrl: 'https://portal.azure.com/'
      kustoOfferingType: 'adx'
    }
    defaultAlertRuleIdentityResourceId: '/subscriptions/469DD77C-C8DB-47B7-B9E1-72D29F8C878B/resourceGroups/rgWatcher/providers/Microsoft.ManagedIdentity/userAssignedIdentities/3pmtest'
    status: 'Starting'
  }
  tags: {
  }
}
```

## microsoft.databasewatcher/watchers/alertruleresources

AlertRuleResources_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers/alertRuleResources@2025-01-02' = {
  parent: parentResource 
  name: 'example'
  properties: {
    alertRuleResourceId: '/subscriptions/469DD77C-C8DB-47B7-B9E1-72D29F8C878Be/resourceGroups/rgWatcher/providers/microsoft.insights/scheduledqueryrules/alerts-demo'
    alertRuleTemplateId: 'someTemplateId'
    alertRuleTemplateVersion: '1.0'
    createdWithProperties: 'CreatedWithActionGroup'
    creationTime: '2024-07-25T15:38:47.798Z'
  }
}
```

## microsoft.databasewatcher/watchers/sharedprivatelinkresources

SharedPrivateLinkResources_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources@2025-01-02' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dnsZone: 'ec3ae9d410ba'
    groupId: 'vault'
    privateLinkResourceId: '/subscriptions/49e0fbd3-75e8-44e7-96fd-5b64d9ad818d/resourceGroups/apiTest-ddat4p/providers/Microsoft.KeyVault/vaults/kvmo3ej9ih'
    requestMessage: 'request message'
    status: 'Pending'
  }
}
```

## microsoft.databasewatcher/watchers/targets

Targets_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers/targets@2025-01-02' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionServerName: 'sqlServero1ihe2'
    sqlDbResourceId: '/subscriptions/49e0fbd3-75e8-44e7-96fd-5b64d9ad818d/resourceGroups/apiTest-ddat4p/providers/Microsoft.Sql/servers/m1/databases/m2'
    targetAuthenticationType: 'Aad'
    targetType: 'SqlDb'
  }
}
```
