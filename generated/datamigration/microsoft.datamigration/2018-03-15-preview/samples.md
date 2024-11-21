# Microsoft.DataMigration

## microsoft.datamigration/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services@2018-03-15-preview' = {
  name: 'example'
  location: 'southcentralus'
  properties: {
    virtualSubnetId: '/subscriptions/fc04246f-04c5-437e-ac5e-206a19e7193f/resourceGroups/DmsSdkTestNetwork/providers/Microsoft.Network/virtualNetworks/DmsSdkTestNetwork/subnets/default'
  }
  sku: {
    name: 'Basic_1vCore'
  }
}
```

## microsoft.datamigration/services/projects/tasks

Tasks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/projects/tasks@2018-03-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    input: {
      targetConnectionInfo: {
        type: 'SqlConnectionInfo'
        authentication: 'SqlAuthentication'
        dataSource: 'ssma-test-server.database.windows.net'
        encryptConnection: true
        password: 'testpassword'
        trustServerCertificate: true
        userName: 'testuser'
      }
    }
    taskType: 'ConnectToTarget.SqlDb'
  }
}
```

## microsoft.datamigration/services/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/projects@2018-03-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southcentralus'
  properties: {
    sourcePlatform: 'SQL'
    targetPlatform: 'SQLDB'
  }
}
```
