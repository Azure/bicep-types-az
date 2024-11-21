# Microsoft.AzureData

## microsoft.azuredata/sqlserverregistrations

Creates or updates a SQL Server registration.
```bicep
resource exampleResource 'Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview' = {
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
resource exampleResource 'Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview' = {
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
