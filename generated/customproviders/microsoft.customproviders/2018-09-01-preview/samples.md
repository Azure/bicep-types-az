# Microsoft.CustomProviders

## microsoft.customproviders/resourceproviders

Create or update the custom resource provider
```bicep
resource exampleResource 'Microsoft.CustomProviders/resourceProviders@2018-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    actions: [
      {
        name: 'TestAction'
        endpoint: 'https://mytestendpoint/'
        routingType: 'Proxy'
      }
    ]
    resourceTypes: [
      {
        name: 'TestResource'
        endpoint: 'https://mytestendpoint2/'
        routingType: 'Proxy,Cache'
      }
    ]
  }
}
```

## microsoft.customproviders/associations

Create or update an association
```bicep
resource exampleResource 'Microsoft.CustomProviders/associations@2018-09-01-preview' = {
  name: 'example'
  properties: {
    targetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/appRG/providers/Microsoft.Solutions/applications/applicationName'
  }
}
```
