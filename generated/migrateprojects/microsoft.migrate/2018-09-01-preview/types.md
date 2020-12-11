# Microsoft.Migrate @ 2018-09-01-preview

## Resource Microsoft.Migrate/migrateProjects@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MigrateProjectProperties
* **tags**: schemas:57_tags
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Migrate/migrateProjects/solutions@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SolutionProperties
* **type**: 'Microsoft.Migrate/migrateProjects/solutions' (ReadOnly, DeployTimeConstant)

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded'
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' (ReadOnly)
* **registeredTools**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DatabaseMigrationService' | 'DataMigrationAssistant' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration_Replication' | 'ServerMigration' | 'Turbonomic' | 'Zerto'[]
* **summary**: Dictionary<string,ProjectSummary> (ReadOnly)

## Dictionary<string,ProjectSummary>
### Additional Properties
* **Additional Properties Type**: ProjectSummary

## ProjectSummary
* **Discriminator**: instanceType
### Base Properties
* **extendedSummary**: Dictionary<string,String>
* **lastSummaryRefreshedTime**: string
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started'
### Databases
#### Properties
* **instanceType**: 'Databases' (Required)

### Servers
#### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int


## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Databases
### Properties
* **instanceType**: 'Databases' (Required)

## Servers
### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int

## schemas:57_tags
### Properties
* **additionalProperties**: string

## SolutionProperties
### Properties
* **cleanupState**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Started'
* **details**: SolutionDetails
* **goal**: 'Databases' | 'Servers'
* **purpose**: 'Assessment' | 'Discovery' | 'Migration'
* **status**: 'Active' | 'Inactive'
* **summary**: SolutionSummary
* **tool**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DatabaseMigrationService' | 'DataMigrationAssistant' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration_Replication' | 'ServerMigration' | 'Turbonomic' | 'Zerto'

## SolutionDetails
### Properties
* **assessmentCount**: int
* **extendedDetails**: Dictionary<string,String>
* **groupCount**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SolutionSummary
* **Discriminator**: instanceType
### Base Properties
### Databases
#### Properties
* **instanceType**: 'Databases' (Required)

### Servers
#### Properties
* **assessedCount**: int
* **discoveredCount**: int
* **instanceType**: 'Servers' (Required)
* **migratedCount**: int
* **replicatingCount**: int
* **testMigratedCount**: int


