# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/myworkbooks

WorkbookAdd
```bicep
resource exampleResource 'Microsoft.Insights/myWorkbooks@2021-03-08' = {
  name: 'example'
  name: 'deadb33f-8bee-4d3b-a059-9be8dac93960'
  id: 'c0deea5e-3344-40f2-96f8-6f8e1c3b5722'
  kind: 'user'
  location: 'west us'
  properties: {
    category: 'workbook'
    displayName: 'Blah Blah Blah'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":"{"json":"## New workbook\\r\\n---\\r\\n\\r\\nWelcome to your new workbook.  This area will display text formatted as markdown.\\r\\n\\r\\n\\r\\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections."}","halfWidth":null,"conditionalVisibility":null},{"type":3,"content":"{"version":"KqlItem/1.0","query":"union withsource=TableName *\\n| summarize Count=count() by TableName\\n| render barchart","showQuery":false,"size":1,"aggregation":0,"showAnnotations":false}","halfWidth":null,"conditionalVisibility":null}],"isLocked":false}'
    sourceId: '/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/MyGroup/providers/Microsoft.Web/sites/MyTestApp-CodeLens'
  }
  tags: [
    'TagSample01'
    'TagSample02'
  ]
}
```

## microsoft.insights/workbooks

WorkbookAdd
```bicep
resource exampleResource 'Microsoft.Insights/workbooks@2021-03-08' = {
  name: 'example'
  name: 'Blah Blah Blah'
  id: 'c0deea5e-3344-40f2-96f8-6f8e1c3b5722'
  kind: 'shared'
  location: 'west us'
  properties: {
    description: 'Sample workbook'
    category: 'workbook'
    displayName: 'tttt'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":"{"json":"## New workbook\\r\\n---\\r\\n\\r\\nWelcome to your new workbook.  This area will display text formatted as markdown.\\r\\n\\r\\n\\r\\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections."}","halfWidth":null,"conditionalVisibility":null},{"type":3,"content":"{"version":"KqlItem/1.0","query":"union withsource=TableName *\\n| summarize Count=count() by TableName\\n| render barchart","showQuery":false,"size":1,"aggregation":0,"showAnnotations":false}","halfWidth":null,"conditionalVisibility":null}],"isLocked":false}'
  }
  tags: [
    'TagSample01'
    'TagSample02'
  ]
}
```

WorkbookManagedAdd
```bicep
resource exampleResource 'Microsoft.Insights/workbooks@2021-03-08' = {
  name: 'example'
  name: 'e378d137-1243-4256-b5c4-ad2a937cae79'
  etag: '"4a00f78d-0000-0700-0000-5f8f616c1000"'
  id: '/subscriptions/00000000-0000-0000-0000-00000000/resourcegroups/MyGroup/providers/Microsoft.Insights/workbooks/e378d137-1243-4256-b5c4-ad2a937cae79'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
    }
  }
  kind: 'shared'
  location: 'westus'
  properties: {
    description: 'Sample workbook'
    category: 'workbook'
    displayName: 'tttt'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":{"json":"test"},"name":"text - 0"}],"isLocked":false,"fallbackResourceIds":["/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/MyGroup"]}'
    storageUri: '/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/MyGroup/providers/Microsoft.Storage/storageAccounts/testStorage/blobServices/default/containers/testContainer'
    tags: [
    ]
    version: 'Notebook/1.0'
  }
  tags: {
    hidden-title: 'tttt'
  }
}
```
