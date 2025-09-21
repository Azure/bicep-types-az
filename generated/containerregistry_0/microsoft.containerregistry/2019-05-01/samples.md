# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries

RegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2019-05-01' = {
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

## microsoft.containerregistry/registries/replications

ReplicationCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2019-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/webhooks

WebhookCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/webhooks@2019-05-01' = {
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
