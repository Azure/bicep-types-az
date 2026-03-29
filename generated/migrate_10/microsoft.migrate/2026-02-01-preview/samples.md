# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/migrateprojects/migrationentities

MigrationEntities_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/migrationEntities@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessedEntityArmId: 'k'
    associatedAssessmentId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/assessmentprojects/myAssessmentProject/assessments/myAssessment'
    associatedInventoryResourceId: 'z'
    associatedMigrationEntityGroupIds: [
      '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/migrateProjects/MyMigrateProject/migrationEntityGroups/group1'
    ]
    associatedWaveId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/migrateProjects/MyMigrateProject/waves/wave1'
    inventoryDisplayName: 'aje'
    migrationPath: 'qyurpnfpqtukcrnfihrmqf'
    migrationSpecificProperties: {
      instanceType: 'MigrationSpecificPropertiesBase'
    }
    migrationStrategy: 'None'
    migrationTool: 'qqintxdthhddwkdhygom'
    partnerResourceArmId: 'a'
    target: 'anenonptqbrzszgdlfypqltgifinq'
    targetAzureResourceArmId: 'veaa'
  }
}
```

## microsoft.migrate/migrateprojects/migrationentitygroups

MigrationEntityGroups_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/migrationEntityGroups@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    applicationDisplayName: 'mwp'
    applicationId: 'xjovxgurinimcoikyvov'
    associatedAssessmentId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/assessmentprojects/myAssessmentProject/assessments/myAssessment'
    associatedWaveIds: [
      '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/migrateProjects/MyMigrateProject/waves/wave1'
    ]
    migrationPath: 'yq'
  }
}
```

## microsoft.migrate/migrateprojects/tasks

Tasks_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/tasks@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'tomulgdavwoaev'
    displayName: 'rbxtqbeapvifcdgmlqmgsibudjd'
    scope: 'Wave'
    scopeId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/MyResourceGroup/providers/Microsoft.Migrate/migrateProjects/MyMigrateProject/waves/wave1'
    stage: 'suwwllyupuonhzwrsl'
    status: 'txxrst'
    taskType: 'UserDefined'
  }
}
```

## microsoft.migrate/migrateprojects/waves

Waves_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/waves@2026-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'xajbtsvcadsmuttrdphivryx'
    arg: {
      query: 'wivfwbmo'
    }
    displayName: 'gbrjctlozlwfftuzxov'
    plannedCompletionDate: '2026-02-12T12:54:26.848Z'
    plannedStartDate: '2026-02-12T12:54:26.848Z'
  }
}
```
