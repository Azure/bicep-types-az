# Microsoft.OperationalInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.operationalinsights/workspaces

WorkspacesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces@2015-11-01-preview' = {
  name: 'example'
  location: 'australiasoutheast'
  properties: {
    retentionInDays: 30
    sku: {
      name: 'PerNode'
    }
  }
  tags: {
    tag1: 'val1'
  }
}
```

## microsoft.operationalinsights/workspaces/datasources

DataSourcesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/dataSources@2015-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'AzureActivityLog'
  properties: {
    LinkedResourceId: '/subscriptions/00000000-0000-0000-0000-00000000000/providers/microsoft.insights/eventtypes/management'
  }
}
```

## microsoft.operationalinsights/workspaces/linkedservices

LinkedServicesCreate
```bicep
resource exampleResource 'Microsoft.OperationalInsights/workspaces/linkedServices@2015-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceId: '/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/mms-eus/providers/Microsoft.Automation/automationAccounts/testAccount'
  }
}
```
