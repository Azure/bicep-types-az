# Microsoft.Migrate @ 2018-09-01-preview

## Resource Microsoft.Migrate/migrateProjects@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: Gets or sets the eTag for concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets the Azure location in which migrate project is created.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MigrateProjectProperties](#migrateprojectproperties): Class for migrate project properties.
* **tags**: [schemas:57_tags](#schemas57tags): Gets or sets the tags.
* **type**: 'Microsoft.Migrate/migrateProjects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Migrate/migrateProjects/solutions@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Gets or sets the ETAG for optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SolutionProperties](#solutionproperties): Class for solution properties.
* **type**: 'Microsoft.Migrate/migrateProjects/solutions' (ReadOnly, DeployTimeConstant): The resource type

## MigrateProjectProperties
### Properties
* **lastSummaryRefreshedTime**: string (ReadOnly): Gets the last time the project summary was refreshed.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded': Provisioning state of the migrate project. Possible values include: 'Accepted', 'Creating', 'Deleting', 'Failed', 'Moving', 'Succeeded'
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started' (ReadOnly): Gets the refresh summary state. Possible values include: 'Started', 'InProgress', 'Completed', 'Failed'
* **registeredTools**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DatabaseMigrationService' | 'DataMigrationAssistant' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration_Replication' | 'ServerMigration' | 'Turbonomic' | 'Zerto'[]: Gets or sets the list of tools registered with the migrate project.
* **summary**: [Dictionary<string,ProjectSummary>](#dictionarystringprojectsummary) (ReadOnly): Gets the summary of the migrate project.

## Dictionary<string,ProjectSummary>
### Properties
### Additional Properties
* **Additional Properties Type**: [ProjectSummary](#projectsummary)

## ProjectSummary
* **Discriminator**: instanceType
### Base Properties
* **extendedSummary**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the extended summary.
* **lastSummaryRefreshedTime**: string: Gets or sets the time when summary was last refreshed.
* **refreshSummaryState**: 'Completed' | 'Failed' | 'InProgress' | 'Started': Gets or sets the state of refresh summary. Possible values include: 'Started', 'InProgress', 'Completed', 'Failed'
### Databases
#### Properties
* **instanceType**: 'Databases' (Required): Class representing the databases solution summary.

### Servers
#### Properties
* **assessedCount**: int: Gets or sets the count of entities assessed.
* **discoveredCount**: int: Gets or sets the count of entities discovered.
* **instanceType**: 'Servers' (Required): Class representing the servers solution summary.
* **migratedCount**: int: Gets or sets the count of entities migrated.
* **replicatingCount**: int: Gets or sets the count of entities being replicated.
* **testMigratedCount**: int: Gets or sets the count of entities test migrated.


## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Databases
### Properties
* **instanceType**: 'Databases' (Required): Class representing the databases solution summary.

## Servers
### Properties
* **assessedCount**: int: Gets or sets the count of entities assessed.
* **discoveredCount**: int: Gets or sets the count of entities discovered.
* **instanceType**: 'Servers' (Required): Class representing the servers solution summary.
* **migratedCount**: int: Gets or sets the count of entities migrated.
* **replicatingCount**: int: Gets or sets the count of entities being replicated.
* **testMigratedCount**: int: Gets or sets the count of entities test migrated.

## schemas:57_tags
### Properties
* **additionalProperties**: string:

## SolutionProperties
### Properties
* **cleanupState**: 'Completed' | 'Failed' | 'InProgress' | 'None' | 'Started': Gets or sets the cleanup state of the solution. Possible values include: 'None', 'Started', 'InProgress', 'Completed', 'Failed'
* **details**: [SolutionDetails](#solutiondetails): Class representing the details of the solution.
* **goal**: 'Databases' | 'Servers': Gets or sets the goal of the solution. Possible values include: 'Servers', 'Databases'
* **purpose**: 'Assessment' | 'Discovery' | 'Migration': Gets or sets the purpose of the solution. Possible values include: 'Discovery', 'Assessment', 'Migration'
* **status**: 'Active' | 'Inactive': Gets or sets the current status of the solution. Possible values include: 'Inactive', 'Active'
* **summary**: [SolutionSummary](#solutionsummary): The solution summary class.
* **tool**: 'Carbonite' | 'Cloudamize' | 'CorentTech' | 'DatabaseMigrationService' | 'DataMigrationAssistant' | 'ServerAssessment' | 'ServerAssessmentV1' | 'ServerDiscovery' | 'ServerMigration_Replication' | 'ServerMigration' | 'Turbonomic' | 'Zerto': Gets or sets the tool being used in the solution. Possible values include: 'ServerDiscovery', 'ServerAssessment', 'ServerMigration', 'Cloudamize', 'Turbonomic', 'Zerto', 'CorentTech', 'ServerAssessmentV1', 'ServerMigration_Replication', 'Carbonite', 'DataMigrationAssistant', 'DatabaseMigrationService'

## SolutionDetails
### Properties
* **assessmentCount**: int: Gets or sets the count of assessments reported by the solution.
* **extendedDetails**: [Dictionary<string,String>](#dictionarystringstring): Gets or sets the extended details reported by the solution.
* **groupCount**: int: Gets or sets the count of groups reported by the solution.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SolutionSummary
* **Discriminator**: instanceType
### Base Properties
### Databases
#### Properties
* **instanceType**: 'Databases' (Required): Class representing the databases solution summary.

### Servers
#### Properties
* **assessedCount**: int: Gets or sets the count of entities assessed.
* **discoveredCount**: int: Gets or sets the count of entities discovered.
* **instanceType**: 'Servers' (Required): Class representing the servers solution summary.
* **migratedCount**: int: Gets or sets the count of entities migrated.
* **replicatingCount**: int: Gets or sets the count of entities being replicated.
* **testMigratedCount**: int: Gets or sets the count of entities test migrated.


