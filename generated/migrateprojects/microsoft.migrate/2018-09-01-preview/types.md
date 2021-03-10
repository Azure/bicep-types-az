# Microsoft.Migrate @ 2018-09-01-preview

## Resource Microsoft.Migrate/migrateProjects@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MigrateProjectProperties](#migrateprojectproperties)
* **tags**: [MigrateProjectTags](#migrateprojecttags)
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/migrateProjects/solutions@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SolutionProperties](#solutionproperties)
* **type**: 'Microsoft.Migrate/migrateProjects/solutions' (ReadOnly, DeployTimeConstant)

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded'
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' (ReadOnly)
* **registeredTools**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration' | 'ServerMigration_Replication' | 'Turbonomic' | 'Zerto'[]
* **summary**: [MigrateProjectPropertiesSummary](#migrateprojectpropertiessummary) (ReadOnly)

## MigrateProjectPropertiesSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [ProjectSummary](#projectsummary)

## ProjectSummary
* **Discriminator**: instanceType

### Base Properties
* **extendedSummary**: [ProjectSummaryExtendedSummary](#projectsummaryextendedsummary)
* **lastSummaryRefreshedTime**: string
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started'
### DatabaseProjectSummary
#### Properties
* **instanceType**: 'Databases' (Required)

### ServersProjectSummary
#### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int


## ProjectSummaryExtendedSummary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProjectSummary
### Properties
* **instanceType**: 'Databases' (Required)

## ServersProjectSummary
### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int

## MigrateProjectTags
### Properties
* **additionalProperties**: string

## SolutionProperties
### Properties
* **cleanupState**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Started'
* **details**: [SolutionDetails](#solutiondetails)
* **goal**: 'Databases' | 'Servers'
* **purpose**: 'Assessment' | 'Discovery' | 'Migration'
* **status**: 'Active' | 'Inactive'
* **summary**: [SolutionSummary](#solutionsummary)
* **tool**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration' | 'ServerMigration_Replication' | 'Turbonomic' | 'Zerto'

## SolutionDetails
### Properties
* **assessmentCount**: int
* **extendedDetails**: [SolutionDetailsExtendedDetails](#solutiondetailsextendeddetails)
* **groupCount**: int

## SolutionDetailsExtendedDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionSummary
* **Discriminator**: instanceType

### Base Properties
### DatabasesSolutionSummary
#### Properties
* **databaseInstancesAssessedCount**: int
* **databasesAssessedCount**: int
* **instanceType**: 'Databases' (Required)
* **migrationReadyCount**: int

### ServersSolutionSummary
#### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int


## DatabasesSolutionSummary
### Properties
* **databaseInstancesAssessedCount**: int
* **databasesAssessedCount**: int
* **instanceType**: 'Databases' (Required)
* **migrationReadyCount**: int

## ServersSolutionSummary
### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int

