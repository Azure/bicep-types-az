# Microsoft.StorageDiscovery
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagediscovery/storagediscoveryworkspaces

Create or Update a StorageDiscoveryWorkspace
```bicep
resource exampleResource 'Microsoft.StorageDiscovery/storageDiscoveryWorkspaces@2025-09-01' = {
  name: 'example'
  location: 'westeurope'
  properties: {
    description: 'Sample Storage Discovery Workspace'
    scopes: [
      {
        displayName: 'Sample-Collection'
        resourceTypes: [
          '/subscriptions/b79cb3ba-745e-5d9a-8903-4a02327a7e09/resourceGroups/sample-rg/providers/Microsoft.Storage/storageAccounts/sample-storageAccount'
        ]
        tagKeysOnly: [
          'filterTag1'
          'filterTag2'
        ]
        tags: {
          filterTag3: 'value3'
          filterTag4: 'value4'
        }
      }
      {
        displayName: 'Sample-Collection-2'
        resourceTypes: [
          '/subscriptions/b79cb3ba-745e-5d9a-8903-4a02327a7e09/resourceGroups/sample-rg/providers/Microsoft.Storage/storageAccounts/sample-storageAccount'
        ]
        tagKeysOnly: [
          'filterTag5'
        ]
        tags: {
          filterTag6: 'value6'
        }
      }
    ]
    workspaceRoots: [
      '/subscriptions/b79cb3ba-745e-5d9a-8903-4a02327a7e09'
    ]
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```
