# Microsoft.DataMigration
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datamigration/databasemigrations

Create Mongo to CosmosDb Mongo(RU) Database Migration resource with Maximum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/databaseMigrations@2025-09-01-preview' = {
  name: 'example'
  properties: {
    collectionList: [
      {
        sourceCollection: 'sourceCol1'
        sourceDatabase: 'sourceDb1'
        targetCollection: 'targetCol1'
        targetDatabase: 'targetDb1'
      }
      {
        sourceCollection: 'sourceCol2'
        sourceDatabase: 'sourceDb2'
        targetCollection: 'sourceCol2'
        targetDatabase: 'sourceDb2'
      }
    ]
    kind: 'MongoToCosmosDbMongo'
    migrationService: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/MigrationServices/testMigrationService'
    scope: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DocumentDB/mongoClusters/targetCosmosDbClusterName'
    sourceMongoConnection: {
      host: 'abc.mongodb.com'
      password: 'placeholder'
      port: 88
      useSsl: true
      userName: 'abc'
    }
    targetMongoConnection: {
      host: 'xyz.mongocluster.cosmos.azure.com'
      password: 'placeholder'
      port: 10255
      useSsl: true
      userName: 'def'
    }
  }
}
```

Create Mongo to CosmosDb Mongo(RU) Database Migration resource with Minimum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/databaseMigrations@2025-09-01-preview' = {
  name: 'example'
  properties: {
    collectionList: [
      {
        sourceCollection: 'sourceCol1'
        sourceDatabase: 'sourceDb1'
        targetCollection: 'targetCol1'
        targetDatabase: 'targetDb1'
      }
      {
        sourceCollection: 'sourceCol2'
        sourceDatabase: 'sourceDb2'
      }
    ]
    kind: 'MongoToCosmosDbMongo'
    migrationService: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DataMigration/MigrationServices/testMigrationService'
    scope: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.DocumentDB/mongoClusters/targetCosmosDbClusterName'
    sourceMongoConnection: {
      host: 'abc.mongodb.com'
      password: 'placeholder'
      port: 88
      useSsl: true
      userName: 'abc'
    }
    targetMongoConnection: {
      connectionString: 'placeholder'
    }
  }
}
```

## microsoft.datamigration/migrationservices

Create or Update Migration Service with maximum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/migrationServices@2025-09-01-preview' = {
  name: 'example'
  location: 'northeurope'
}
```

Create or Update Migration Service with minimum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/migrationServices@2025-09-01-preview' = {
  name: 'example'
  location: 'northeurope'
}
```

## microsoft.datamigration/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DataMigration/services@2025-09-01-preview' = {
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
resource exampleResource 'Microsoft.DataMigration/services/projects@2025-09-01-preview' = {
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
resource exampleResource 'Microsoft.DataMigration/services/projects/files@2025-09-01-preview' = {
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
resource exampleResource 'Microsoft.DataMigration/services/projects/tasks@2025-09-01-preview' = {
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
resource exampleResource 'Microsoft.DataMigration/services/serviceTasks@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    input: {
      sourceConnectionInfo: {
        type: 'MySqlConnectionInfo'
        port: 3306
        serverName: 'localhost'
      }
    }
    taskType: 'ConnectToSource.MySql'
  }
}
```

## microsoft.datamigration/sqlmigrationservices

Create or Update SQL Migration Service with maximum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/sqlMigrationServices@2025-09-01-preview' = {
  name: 'example'
  location: 'northeurope'
}
```

Create or Update SQL Migration Service with minimum parameters.
```bicep
resource exampleResource 'Microsoft.DataMigration/sqlMigrationServices@2025-09-01-preview' = {
  name: 'example'
  location: 'northeurope'
}
```
