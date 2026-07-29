# Microsoft.DBforPostgreSQL @ 2022-05-01-preview

## Resource Microsoft.DBforPostgreSQL/flexibleServers/migrations@2022-05-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MigrationResourceProperties](#migrationresourceproperties): Migration resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DBforPostgreSQL/flexibleServers/migrations' (ReadOnly, DeployTimeConstant): The resource type

## Function checkMigrationNameAvailability (Microsoft.DBforPostgreSQL/flexibleServers@2022-05-01-preview)
* **Resource**: Microsoft.DBforPostgreSQL/flexibleServers
* **ApiVersion**: 2022-05-01-preview
* **Input**: [MigrationNameAvailabilityResource](#migrationnameavailabilityresource)
* **Output**: [MigrationNameAvailabilityResource](#migrationnameavailabilityresource)

## AdminCredentials
### Properties
* **sourceServerPassword**: string {sensitive} (Required, WriteOnly)
* **targetServerPassword**: string {sensitive} (Required, WriteOnly)

## DBServerMetadata
### Properties
* **location**: string
* **sku**: [ServerSku](#serversku): Sku information related properties of a server.
* **storageMB**: int
* **version**: string

## MigrationNameAvailabilityResource
### Properties
* **message**: string (ReadOnly): Migration name availability message.
* **name**: string (Required): The resource name to verify.
* **nameAvailable**: bool (ReadOnly): Indicates whether the resource name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string (ReadOnly): Migration name availability reason
* **type**: string (Required): The type of the resource.

## MigrationResourceProperties
### Properties
* **cancel**: bool: To trigger cancel for entire migration we need to send this flag as true
* **currentStatus**: [MigrationStatus](#migrationstatus) (ReadOnly): Migration status.
* **dBsToCancelMigrationOn**: string[]: When you want to trigger cancel for specific databases send triggerCutover flag as true and database names in this array
* **dBsToMigrate**: string[] {maxLength: 50}
* **dBsToTiggerCutoverOn**: string[]: When you want to trigger cutover for specific databases send triggerCutover flag as true and database names in this array
* **migrationDetailsLevel**: 'Default' | 'Full' | 'Summary' | string (ReadOnly): Migration details level.
* **migrationId**: string (ReadOnly)
* **migrationMode**: 'Offline' | 'Online' | string: There are two types of migration modes Online and Offline
* **migrationWindowStartTimeInUtc**: string
* **overwriteDBsInTarget**: bool
* **secretParameters**: [MigrationSecretParameters](#migrationsecretparameters): Migration secret parameters.
* **setupLogicalReplicationOnSourceDBIfNeeded**: bool
* **sourceDBServerFullyQualifiedDomainName**: string
* **sourceDBServerMetadata**: [DBServerMetadata](#dbservermetadata) (ReadOnly): Database server metadata.
* **sourceDBServerResourceId**: string
* **startDataMigration**: bool
* **targetDBServerFullyQualifiedDomainName**: string
* **targetDBServerMetadata**: [DBServerMetadata](#dbservermetadata) (ReadOnly): Database server metadata.
* **targetDBServerResourceId**: string (ReadOnly)
* **triggerCutover**: bool: To trigger cutover for entire migration we need to send this flag as true

## MigrationSecretParameters
### Properties
* **adminCredentials**: [AdminCredentials](#admincredentials) (Required): Server admin credentials.

## MigrationStatus
### Properties
* **currentSubStateDetails**: [MigrationSubStateDetails](#migrationsubstatedetails) (ReadOnly): Migration sub state details.
* **error**: string (ReadOnly)
* **state**: 'Canceled' | 'Failed' | 'InProgress' | 'Succeeded' | 'WaitingForUserAction' | string (ReadOnly): Migration state.

## MigrationSubStateDetails
### Properties
* **currentSubState**: 'Completed' | 'CompletingMigration' | 'MigratingData' | 'PerformingPreRequisiteSteps' | 'WaitingForCutoverTrigger' | 'WaitingForDBsToMigrateSpecification' | 'WaitingForDataMigrationScheduling' | 'WaitingForDataMigrationWindow' | 'WaitingForLogicalReplicationSetupRequestOnSourceDB' | 'WaitingForTargetDBOverwriteConfirmation' | string (ReadOnly): Migration sub state.

## ServerSku
### Properties
* **name**: string (Required): The name of the sku, typically, tier + family + cores, e.g. Standard_D4s_v3.
* **tier**: 'Burstable' | 'GeneralPurpose' | 'MemoryOptimized' | string (Required): The tier of the particular SKU, e.g. Burstable.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

