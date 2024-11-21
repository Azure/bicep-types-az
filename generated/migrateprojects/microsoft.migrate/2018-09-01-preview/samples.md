# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/migrateprojects

MigrateProjects_Put
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects@2018-09-01-preview' = {
  name: 'example'
  eTag: '"b701c73a-0000-0000-0000-59c12ff00000"'
  location: 'Southeast Asia'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.migrate/migrateprojects/solutions

Solutions_Put
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/solutions@2018-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    goal: 'Databases'
    purpose: 'Assessment'
    tool: 'DataMigrationAssistant'
  }
}
```
