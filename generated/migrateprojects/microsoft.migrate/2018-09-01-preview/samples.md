# Microsoft.Migrate

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
