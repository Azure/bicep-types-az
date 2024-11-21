# Microsoft.DataMigration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datamigration/databasemigrations

Create or Update Database Migration resource with Maximum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/databaseMigrations@2021-10-30-preview' = {
  name: 'example'
  properties: {
    backupConfiguration: {
      sourceLocation: {
        fileShare: {
          path: 'C:\\aaa\\bbb\\ccc'
          password: 'placeholder'
          username: 'name'
        }
      }
      targetLocation: {
        accountKey: 'abcd'
        storageAccountResourceId: 'account.database.windows.net'
      }
    }
    kind: 'SqlMi'
    migrationService: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/sqlMigrationServices/testagent'
    offlineConfiguration: {
      lastBackupName: 'last_backup_file_name'
      offline: true
    }
    scope: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Sql/managedInstances/instance'
    sourceDatabaseName: 'aaa'
    sourceSqlConnection: {
      authentication: 'WindowsAuthentication'
      dataSource: 'aaa'
      encryptConnection: true
      password: 'placeholder'
      trustServerCertificate: true
      userName: 'bbb'
    }
  }
}
```

Create or Update Database Migration resource with Minimum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/databaseMigrations@2021-10-30-preview' = {
  name: 'example'
  properties: {
    backupConfiguration: {
      sourceLocation: {
        fileShare: {
          path: 'C:\\aaa\\bbb\\ccc'
          password: 'placeholder'
          username: 'name'
        }
      }
      targetLocation: {
        accountKey: 'abcd'
        storageAccountResourceId: 'account.database.windows.net'
      }
    }
    kind: 'SqlMi'
    migrationService: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/sqlMigrationServices/testagent'
    offlineConfiguration: {
      lastBackupName: 'last_backup_file_name'
      offline: true
    }
    scope: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Sql/managedInstances/instance'
    sourceDatabaseName: 'aaa'
    sourceSqlConnection: {
      authentication: 'WindowsAuthentication'
      dataSource: 'aaa'
      encryptConnection: true
      password: 'placeholder'
      trustServerCertificate: true
      userName: 'bbb'
    }
  }
}
```

## microsoft.datamigration/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services@2021-10-30-preview' = {
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

## microsoft.datamigration/services/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/projects@2021-10-30-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southcentralus'
  properties: {
    sourcePlatform: 'SQL'
    targetPlatform: 'SQLDB'
  }
}
```

## microsoft.datamigration/services/projects/files

Files_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/projects/files@2021-10-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    filePath: 'DmsSdkFilePath/DmsSdkFile.sql'
  }
}
```

## microsoft.datamigration/services/projects/tasks

Tasks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/projects/tasks@2021-10-30-preview' = {
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

## microsoft.datamigration/services/servicetasks

Tasks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services/serviceTasks@2021-10-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    input: {
      serverVersion: 'NA'
    }
    taskType: 'Service.Check.OCI'
  }
}
```

## microsoft.datamigration/sqlmigrationservices

Create or Update SQL Migration Service with maximum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/sqlMigrationServices@2021-10-30-preview' = {
  name: 'example'
  location: 'northeurope'
}
```

Create or Update SQL Migration Service with minimum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/sqlMigrationServices@2021-10-30-preview' = {
  name: 'example'
  location: 'northeurope'
}
```
