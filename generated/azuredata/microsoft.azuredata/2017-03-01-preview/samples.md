# Microsoft.AzureData
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azuredata/sqlserverregistrations

Creates or updates a SQL Server registration.
```bicep
resource exampleResource 'Microsoft.AzureData/sqlServerRegistrations@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
  }
  tags: {
    mytag: 'myval'
  }
}
```

## microsoft.azuredata/sqlserverregistrations/sqlservers

Creates or updates a SQL Server in a Registration group.
```bicep
resource exampleResource 'Microsoft.AzureData/sqlServerRegistrations/sqlServers@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    cores: 8
    edition: 'Latin'
    propertyBag: ''
    registrationID: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.AzureData/SqlServerRegistrations/testsqlregistration'
    version: '2008'
  }
}
```
