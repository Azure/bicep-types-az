# Microsoft.DatabaseFleetManager @ 2025-02-01-preview

## Resource Microsoft.DatabaseFleetManager/fleets@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetProperties](#fleetproperties): The fleet properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DatabaseFleetManager/fleets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseFleetManager/fleets/fleetspaces@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetspaceProperties](#fleetspaceproperties): A Fleetspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseFleetManager/fleets/fleetspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseFleetManager/fleets/fleetspaces/databases@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetDatabaseProperties](#fleetdatabaseproperties): Fleet database properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseFleetManager/fleets/fleetspaces/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseFleetManager/fleets/fleetspaces/firewallRules@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FirewallRuleProperties](#firewallruleproperties): A Firewall rule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseFleetManager/fleets/fleetspaces/firewallRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DatabaseFleetManager/fleets/tiers@2025-02-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^.+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FleetTierProperties](#fleettierproperties): A Fleet tier properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DatabaseFleetManager/fleets/tiers' (ReadOnly, DeployTimeConstant): The resource type

## DatabaseIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Client Id of the database identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Principal Id of the database identity.
* **resourceId**: string: Resource Id of the database identity.

## FirewallRuleProperties
### Properties
* **endIpAddress**: string: End IP address.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **startIpAddress**: string: Start IP address.

## FleetDatabaseProperties
### Properties
* **backupRetentionDays**: int (ReadOnly): Backup retention in days.
* **collation**: string: Database collation.
* **connectionString**: string (ReadOnly): Connection string to connect to the database with.
* **createMode**: 'Copy' | 'Default' | 'PointInTimeRestore' | string: Create mode. Available options: Default - Create a database. Copy - Copy the source database (source database name must be specified) PointInTimeRestore - Create a database by restoring source database from a point in time (source database name and restore from time must be specified)
* **databaseSizeGbMax**: int (ReadOnly): Maximum database size in Gb.
* **earliestRestoreTime**: string (ReadOnly): Earliest restore time.
* **identity**: [Identity](#identity): Identity property.
* **latestRestoreTime**: string (ReadOnly): Latest restore time.
* **originalDatabaseId**: string (ReadOnly): Resource identifier for the underlying database resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Database state.
* **recoverable**: bool (ReadOnly): If true, database is recoverable.
* **resourceTags**: [FleetDatabasePropertiesResourceTags](#fleetdatabasepropertiesresourcetags): Additional database properties to be applied as the underlying database resource tags.
* **restoreFromTime**: string: Restore from time when CreateMode is PointInTimeRestore.
* **sourceDatabaseName**: string: Source database name used when CreateMode is Copy or PointInTimeRestore.
* **tierName**: string: Name of the tier this database belongs to.
* **transparentDataEncryption**: [TransparentDataEncryption](#transparentdataencryption): Transparent Data Encryption properties

## FleetDatabasePropertiesResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FleetProperties
### Properties
* **description**: string: Fleet description.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.

## FleetspaceProperties
### Properties
* **capacityMax**: int: Maximum number of vCores database fleet manager is allowed to provision in the fleetspace.
* **mainPrincipal**: [MainPrincipal](#mainprincipal): Main Microsoft Entra ID principal that has admin access to all databases in the fleetspace.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Fleetspace state.

## FleetTierProperties
### Properties
* **capacity**: int: Capacity of provisioned resources in the tier, in units matching the specified service tier, for example vCore for GeneralPurpose.
* **databaseCapacityMax**: int: Maximum allocated capacity per database, in units matching the specified service tier.
* **databaseCapacityMin**: int: Minimum allocated capacity per database, in units matching the specified service tier.
* **databaseSizeGbMax**: int: Maximum database size in Gb.
* **disabled**: bool (ReadOnly): If true, tier is disabled.
* **family**: string: Family of provisioned resources, for example Gen5.
* **highAvailabilityReplicaCount**: int: Number of high availability replicas for databases in this tier.
* **pooled**: bool: If true, databases are pooled.
* **poolNumOfDatabasesMax**: int: Maximum number of databases per pool.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **serverless**: bool: If true, serverless resources are provisioned in the tier.
* **serviceTier**: string: Service tier of provisioned resources. Supported values: GeneralPurpose, Hyperscale.
* **zoneRedundancy**: 'Disabled' | 'Enabled' | string: Enable zone redundancy for all databases in this tier.

## Identity
### Properties
* **federatedClientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The federated client id for the SQL Database. It is used for cross tenant CMK scenario.
* **identityType**: 'None' | 'UserAssigned' | string: Identity type of the main principal.
* **userAssignedIdentities**: [DatabaseIdentity](#databaseidentity)[]: User identity ids

## MainPrincipal
### Properties
* **applicationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Application Id of the main principal.
* **login**: string: Login name of the main principal.
* **objectId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Object Id of the main principal.
* **principalType**: 'Application' | 'User' | string: Principal type of the main principal.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Tenant Id of the main principal.

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

## TransparentDataEncryption
### Properties
* **enableAutoRotation**: bool: Enable key auto rotation
* **keys**: string[]: Additional Keys
* **keyUri**: string: Customer Managed Key (CMK) Uri.

