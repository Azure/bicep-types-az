# Microsoft.DurableTask
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.durabletask/schedulers

Schedulers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers@2024-10-01-preview' = {
  name: 'example'
  location: 'northcentralus'
  properties: {
    ipAllowlist: [
      '10.0.0.0/8'
    ]
    sku: {
      name: 'Dedicated'
    }
  }
  tags: {
    key2138: 'fjaeecgnvqd'
    key7131: 'ryohwcoiccwsnewjigfmijz'
  }
}
```

## microsoft.durabletask/schedulers/taskhubs

TaskHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DurableTask/schedulers/taskHubs@2024-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
