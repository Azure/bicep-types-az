# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries

RegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2021-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    adminUserEnabled: true
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    key: 'value'
  }
}
```

RegistryCreateZoneRedundant
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2021-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    zoneRedundancy: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/privateendpointconnections

PrivateEndpointConnectionCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/privateEndpointConnections@2021-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```

## microsoft.containerregistry/registries/replications

ReplicationCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2021-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  tags: {
    key: 'value'
  }
}
```

ReplicationCreateZoneRedundant
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2021-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    regionEndpointEnabled: true
    zoneRedundancy: 'Enabled'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/webhooks

WebhookCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/webhooks@2021-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    actions: [
      'push'
    ]
    customHeaders: {
      Authorization: '******'
    }
    scope: 'myRepository'
    serviceUri: 'http://myservice.com'
    status: 'enabled'
  }
  tags: {
    key: 'value'
  }
}
```
