# Microsoft.OffAzureSpringBoot
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.offazurespringboot/springbootsites

springbootsites_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites@2023-01-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: 'rywvpbfsqovhlfirtwisugsdsfsgf'
    type: 'lvsb'
  }
  location: 'tgobtvxktootwhhvjtsmpddvlqlrq'
  properties: {
    masterSiteId: 'xsoimrgshsactearljwuljmi'
    migrateProjectId: 'wwuattybgco'
  }
  tags: {
    key3558: 'xeuhtglamqzj'
  }
}
```

springbootsites_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites@2023-01-01-preview' = {
  name: 'example'
  location: 'tgobtvxktootwhhvjtsmpddvlqlrq'
}
```

## microsoft.offazurespringboot/springbootsites/springbootservers

springbootservers_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootservers@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    errors: [
    ]
    fqdnAndIpAddressList: [
    ]
    machineArmId: 'fvfkiapbqsprnbzczdfmuryknrna'
    port: 10
    server: 'thhuxocfyqpeluqcgnypi'
    springBootApps: 17
    totalApps: 5
  }
}
```

springbootservers_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.OffAzureSpringBoot/springbootsites/springbootservers@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```
