# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries

RegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2017-03-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    adminUserEnabled: true
    storageAccount: {
      name: 'mystorageaccount'
      accessKey: '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
    }
  }
  sku: {
    name: 'Basic'
  }
  tags: {
    key: 'value'
  }
}
```
