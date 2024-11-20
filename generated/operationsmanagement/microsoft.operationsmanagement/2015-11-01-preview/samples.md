# Microsoft.OperationsManagement

## microsoft.operationsmanagement/solutions

SolutionCreate
```bicep
resource exampleResource 'Microsoft.OperationsManagement/solutions@2015-11-01-preview' = {
  name: 'example'
  location: 'East US'
  plan: {
    name: 'name1'
    product: 'product1'
    promotionCode: 'promocode1'
    publisher: 'publisher1'
  }
  properties: {
    containedResources: [
      '/subscriptions/sub2/resourceGroups/rg2/providers/provider1/resources/resource1'
      '/subscriptions/sub2/resourceGroups/rg2/providers/provider2/resources/resource2'
    ]
    referencedResources: [
      '/subscriptions/sub2/resourceGroups/rg2/providers/provider1/resources/resource2'
      '/subscriptions/sub2/resourceGroups/rg2/providers/provider2/resources/resource3'
    ]
    workspaceResourceId: '/subscriptions/sub2/resourceGroups/rg2/providers/Microsoft.OperationalInsights/workspaces/ws1'
  }
}
```

## microsoft.operationsmanagement/managementassociations

SolutionCreate
```bicep
resource exampleResource 'Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    applicationId: '/subscriptions/sub1/resourcegroups/rg1/providers/Microsoft.Appliance/Appliances/appliance1'
  }
}
```

## microsoft.operationsmanagement/managementconfigurations

ManagementConfigurationCreate
```bicep
resource exampleResource 'Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview' = {
  name: 'example'
  location: 'East US'
}
```
