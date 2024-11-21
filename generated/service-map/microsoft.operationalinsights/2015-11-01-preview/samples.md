# Microsoft.OperationalInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.operationalinsights/workspaces/features/machinegroups

SMMachineGroupsUpdatePut
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/features/machineGroups@2015-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  etag: '8cd3a8a1-4b1f-43fc-ae3c-b2c092561444'
  kind: 'machineGroup'
  properties: {
    count: 1
    displayName: 'Foo'
    machines: [
      {
        id: '/subscriptions/63BE4E24-FDF0-4E9C-9342-6A5D5A359722/resourceGroups/rg-sm/providers/Microsoft.OperationalInsights/workspaces/D6F79F14-E563-469B-84B5-9286D2803B2F/machines/m-0fe4b501-7ac9-41d7-a4e1-1591a0789519'
        kind: 'ref:machinewithhints'
      }
    ]
  }
}
```
