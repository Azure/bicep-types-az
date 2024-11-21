# Microsoft.PowerBI

## microsoft.powerbi/privatelinkservicesforpowerbi

Creates or updates private link service resource
```bicep
resource exampleResource 'Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01' = {
  name: 'example'
  location: 'global'
  properties: {
    tenantId: 'ac2bc297-8a3e-46f3-972d-87c2b4ae6e2f'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.powerbi/privatelinkservicesforpowerbi/privateendpointconnections

Updates status of private endpoint connection
```bicep
resource exampleResource 'Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/a0020869-4d28-422a-89f4-c2413130d73c/resourceGroups/resourceGroup/providers/Microsoft.Network/privateEndpoints/myPrivateEndpointName'
    }
    privateLinkServiceConnectionState: {
      description: ''
      actionsRequired: 'None'
      status: 'Approved '
    }
  }
}
```
