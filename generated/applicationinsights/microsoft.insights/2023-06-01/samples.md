# Microsoft.Insights

## microsoft.insights/workbooks

WorkbookAdd
```bicep
resource exampleResource 'Microsoft.Insights/workbooks@2023-06-01' = {
  name: 'example'
  kind: 'shared'
  location: 'westus'
  properties: {
    description: 'Sample workbook'
    category: 'workbook'
    displayName: 'Sample workbook'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":"{"json":"## New workbook\\r\\n---\\r\\n\\r\\nWelcome to your new workbook.  This area will display text formatted as markdown.\\r\\n\\r\\n\\r\\nWe\'ve included a basic analytics query to get you started. Use the `Edit` button below each section to configure it or add more sections."}","halfWidth":null,"conditionalVisibility":null},{"type":3,"content":"{"version":"KqlItem/1.0","query":"union withsource=TableName *\\n| summarize Count=count() by TableName\\n| render barchart","showQuery":false,"size":1,"aggregation":0,"showAnnotations":false}","halfWidth":null,"conditionalVisibility":null}],"isLocked":false}'
  }
  tags: {
    TagSample01: 'sample01'
    TagSample02: 'sample02'
  }
}
```

WorkbookManagedAdd
```bicep
resource exampleResource 'Microsoft.Insights/workbooks@2023-06-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/my-resource-group/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myid: {
      }
    }
  }
  kind: 'shared'
  location: 'westus'
  properties: {
    description: 'Sample workbook'
    category: 'workbook'
    displayName: 'Sample workbook'
    serializedData: '{"version":"Notebook/1.0","items":[{"type":1,"content":{"json":"test"},"name":"text - 0"}],"isLocked":false,"fallbackResourceIds":["/subscriptions/00000000-0000-0000-0000-00000000/resourceGroups/my-resource-group"]}'
    storageUri: '/subscriptions/6b643656-33eb-422f-aee8-3ac145d124af/resourceGroups/my-resource-group/providers/Microsoft.Storage/storageAccounts/mystorage/blobServices/default/containers/mycontainer'
    version: 'Notebook/1.0'
  }
}
```
