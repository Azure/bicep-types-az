# Microsoft.Migrate @ 2018-09-01-preview

## Resource Microsoft.Migrate/migrateProjects@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Gets or sets the eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the Azure location in which migrate project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateProjectProperties](#migrateprojectproperties): Gets or sets the nested properties.
* **tags**: [MigrateProjectTags](#migrateprojecttags): Gets or sets the tags.
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/solutions@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the ETAG for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): Gets or sets the properties of the solution.
* **type**: 'Microsoft.Migrate/migrateProjects/solutions' (ReadOnly, DeployTimeConstant): The resource type

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly): Gets the last time the project summary was refreshed.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string: Provisioning state of the migrate project.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string (ReadOnly): Gets the refresh summary state.
* **registeredTools**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration' | 'ServerMigration_Replication' | 'Turbonomic' | 'Zerto' | string[]: Gets or sets the list of tools registered with the migrate project.
* **summary**: [MigrateProjectPropertiesSummary](#migrateprojectpropertiessummary) (ReadOnly): Gets the summary of the migrate project.

## MigrateProjectPropertiesSummary
### Properties
### Additional Properties
* **Additional Properties Type**: [ProjectSummary](#projectsummary)

## MigrateProjectTags
### Properties
* **additionalProperties**: string

## ProjectSummary
* **Discriminator**: instanceType

### Base Properties
* **extendedSummary**: [ProjectSummaryExtendedSummary](#projectsummaryextendedsummary): Gets or sets the extended summary.
* **lastSummaryRefreshedTime**: string: Gets or sets the time when summary was last refreshed.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' | string: Gets or sets the state of refresh summary.

### DatabaseProjectSummary
#### Properties
* **instanceType**: 'Databases' (Required): Gets the Instance type.

### ServersProjectSummary
#### Properties
* **assessedCount**: int: Gets or sets the count of entities assessed.
* **discoveredCount**: int: Gets or sets the count of entities discovered.
* **instanceType**: 'Servers' (Required): Gets the Instance type.
* **migratedCount**: int: Gets or sets the count of entities migrated.
* **replicatingCount**: int: Gets or sets the count of entities being replicated.
* **testMigratedCount**: int: Gets or sets the count of entities test migrated.


## ProjectSummaryExtendedSummary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionDetails
### Properties
* **assessmentCount**: int: Gets or sets the count of assessments reported by the solution.
* **extendedDetails**: [SolutionDetailsExtendedDetails](#solutiondetailsextendeddetails): Gets or sets the extended details reported by the solution.
* **groupCount**: int: Gets or sets the count of groups reported by the solution.

## SolutionDetailsExtendedDetails
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionProperties
### Properties
* **cleanupState**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Started' | string: Gets or sets the cleanup state of the solution.
* **details**: [SolutionDetails](#solutiondetails): Gets or sets the details of the solution.
* **goal**: 'Databases' | 'Servers' | string: Gets or sets the goal of the solution.
* **purpose**: 'Assessment' | 'Discovery' | 'Migration' | string: Gets or sets the purpose of the solution.
* **status**: 'Active' | 'Inactive' | string: Gets or sets the current status of the solution.
* **summary**: [SolutionSummary](#solutionsummary): Gets or sets the summary of the solution.
* **tool**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DataMigrationAssistant' | 'DatabaseMigrationService' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration' | 'ServerMigration_Replication' | 'Turbonomic' | 'Zerto' | string: Gets or sets the tool being used in the solution.

## SolutionSummary
* **Discriminator**: instanceType

### Base Properties

### DatabasesSolutionSummary
#### Properties
* **databaseInstancesAssessedCount**: int: Gets or sets the count of database instances assessed.
* **databasesAssessedCount**: int: Gets or sets the count of databases assessed.
* **instanceType**: 'Databases' (Required): Gets the Instance type.
* **migrationReadyCount**: int: Gets or sets the count of databases ready for migration.

### ServersSolutionSummary
#### Properties
* **assessedCount**: int: Gets or sets the count of servers assessed.
* **discoveredCount**: int: Gets or sets the count of servers discovered.
* **instanceType**: 'Servers' (Required): Gets the Instance type.
* **migratedCount**: int: Gets or sets the count of servers migrated.
* **replicatingCount**: int: Gets or sets the count of servers being replicated.
* **testMigratedCount**: int: Gets or sets the count of servers test migrated.


