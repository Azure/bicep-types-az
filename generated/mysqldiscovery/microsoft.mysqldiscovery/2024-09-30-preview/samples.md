# Microsoft.MySQLDiscovery
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mysqldiscovery/mysqlsites

MySQLSites_Create
```bicep
resource exampleResource 'Microsoft.MySQLDiscovery/MySQLSites@2024-09-30-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso'
    type: 'customLocation'
  }
  location: 'East US'
  properties: {
    masterSiteId: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.OffAzure/MasterSites/xxx'
    migrateProjectId: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourcegroups/demoRG/providers/microsoft.migrate/migrateprojects/xxx'
  }
}
```

## microsoft.mysqldiscovery/mysqlsites/mysqlservers

MySQLServers_Create
```bicep
resource exampleResource 'Microsoft.MySQLDiscovery/MySQLSites/MySQLServers@2024-09-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    hostIp: [
      '127.0.0.1'
      '127.0.0.2'
    ]
    hostName: 'test.mysql.server'
    machineId: '/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourcegroups/demoRG/providers/Microsoft.OffAzure/serverSites/xxx/machines/xxx'
    mysqlVersion: '8.0'
    numberOfDatabase: 16
    portNumber: '3306'
    supportStatus: 'Mainstream'
  }
}
```
