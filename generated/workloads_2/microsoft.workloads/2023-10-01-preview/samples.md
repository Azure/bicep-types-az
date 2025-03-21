# Microsoft.Workloads
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.workloads/sapdiscoverysites

Create resource for Import based input.
```bicep
resource exampleResource 'Microsoft.Workloads/sapDiscoverySites@2023-10-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    masterSiteId: 'MasterSiteIdResourceId'
    migrateProjectId: 'MigrateProjectId'
  }
  tags: {
    property1: 'value1'
    property2: 'value2'
  }
}
```

## microsoft.workloads/sapdiscoverysites/sapinstances

Creates the SAP Instance resource.
```bicep
resource exampleResource 'Microsoft.Workloads/sapDiscoverySites/sapInstances@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
  }
  tags: {
    property1: 'value1'
    property2: 'value2'
  }
}
```

## microsoft.workloads/sapdiscoverysites/sapinstances/serverinstances

Creates the Server Instance resource.
```bicep
resource exampleResource 'Microsoft.Workloads/sapDiscoverySites/sapInstances/serverInstances@2023-10-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```
