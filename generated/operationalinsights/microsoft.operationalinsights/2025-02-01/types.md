# Microsoft.OperationalInsights @ 2025-02-01

## Resource Microsoft.OperationalInsights/clusters@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Resource's identity.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Log Analytics cluster properties.
* **sku**: [ClusterSku](#clustersku): The sku properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/queryPacks@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogAnalyticsQueryPackProperties](#loganalyticsquerypackproperties) (Required): Properties that define a Log Analytics QueryPack resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/queryPacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/queryPacks/queries@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogAnalyticsQueryPackQueryProperties](#loganalyticsquerypackqueryproperties): Properties that define an Log Analytics QueryPack-Query resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.OperationalInsights/queryPacks/queries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataExports@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [DataExportProperties](#dataexportproperties): data export properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataExports' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the data source.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'ApplicationInsights' | 'AzureActivityLog' | 'AzureAuditLog' | 'ChangeTrackingContentLocation' | 'ChangeTrackingCustomPath' | 'ChangeTrackingDataTypeConfiguration' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingLinuxPath' | 'ChangeTrackingPath' | 'ChangeTrackingRegistry' | 'ChangeTrackingServices' | 'CustomLog' | 'CustomLogCollection' | 'DnsAnalytics' | 'GenericDataSource' | 'IISLogs' | 'ImportComputerGroup' | 'Itsm' | 'LinuxChangeTrackingPath' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'NetworkMonitoring' | 'Office365' | 'SecurityCenterSecurityWindowsBaselineConfiguration' | 'SecurityEventCollectionConfiguration' | 'SecurityInsightsSecurityEventCollectionConfiguration' | 'SecurityWindowsBaselineConfiguration' | 'SqlDataClassification' | 'WindowsEvent' | 'WindowsPerformanceCounter' | 'WindowsTelemetry' | string (Required): The kind of the DataSource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): The data source properties in raw json format, each kind of data source have it's own schema.
* **tags**: [DataSourceTags](#datasourcetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): The properties of the linked service.
* **tags**: [LinkedServiceTags](#linkedservicetags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedStorageAccounts@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedStorageAccountsProperties](#linkedstorageaccountsproperties) (Required): Linked storage accounts properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedStorageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/networkSecurityPerimeterConfigurations@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 512, pattern: "^.*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterConfigurationProperties](#networksecurityperimeterconfigurationproperties) (ReadOnly): Network security configuration properties.
* **type**: 'Microsoft.OperationalInsights/workspaces/networkSecurityPerimeterConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/savedSearches@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The ETag of the saved search. To override an existing saved search, use "*" or specify the current Etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SavedSearchProperties](#savedsearchproperties) (Required): The properties of the saved search.
* **type**: 'Microsoft.OperationalInsights/workspaces/savedSearches' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/storageInsightConfigs@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the storage insight.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageInsightProperties](#storageinsightproperties): Storage insight properties.
* **tags**: [StorageInsightTags](#storageinsighttags): Resource tags.
* **type**: 'Microsoft.OperationalInsights/workspaces/storageInsightConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/tables@2025-02-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-02-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 4, maxLength: 63, pattern: "^[A-Za-z0-9-_]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TableProperties](#tableproperties): Table's properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.OperationalInsights/workspaces/tables' (ReadOnly, DeployTimeConstant): The resource type

## AccessRule
### Properties
* **name**: string: Name of the access rule
* **properties**: [AccessRuleProperties](#accessruleproperties): Properties of Access Rule

## AccessRuleProperties
### Properties
* **addressPrefixes**: string[]: Address prefixes in the CIDR format for inbound rules
* **direction**: 'Inbound' | 'Outbound' | string: Direction of Access Rule
* **emailAddresses**: string[]: Email addresses for outbound rules
* **fullyQualifiedDomainNames**: string[]: Fully qualified domain names (FQDN) for outbound rules
* **networkSecurityPerimeters**: [NetworkSecurityPerimeter](#networksecurityperimeter)[]: Network security perimeters for inbound rules
* **phoneNumbers**: string[]: Phone numbers for outbound rules
* **subscriptions**: [AccessRulePropertiesSubscriptionsItem](#accessrulepropertiessubscriptionsitem)[]: Subscriptions for inbound rules

## AccessRulePropertiesSubscriptionsItem
### Properties
* **id**: string: The fully qualified Azure resource ID of the subscription e.g. ('/subscriptions/00000000-0000-0000-0000-000000000000')

## AssociatedWorkspace
### Properties
* **associateDate**: string (ReadOnly): The time of workspace association.
* **resourceId**: string (ReadOnly): Associated workspace arm resource id, in the form of: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}.
* **workspaceId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): Associated workspace immutable id.
* **workspaceName**: string (ReadOnly): Associated workspace resource name.

## CapacityReservationProperties
### Properties
* **lastSkuUpdate**: string (ReadOnly): The last time Sku was updated.
* **minCapacity**: int (ReadOnly): Minimum CapacityReservation value in Gigabytes.

## ClusterProperties
### Properties
* **associatedWorkspaces**: [AssociatedWorkspace](#associatedworkspace)[]: The list of Log Analytics workspaces associated with the cluster
* **billingType**: 'Cluster' | 'Workspaces' | string: The cluster's billing type.
* **capacityReservationProperties**: [CapacityReservationProperties](#capacityreservationproperties): Additional properties for capacity reservation
* **clusterId**: string (ReadOnly): The ID associated with the cluster.
* **createdDate**: string (ReadOnly): The cluster creation time
* **isAvailabilityZonesEnabled**: bool: Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.
* **isDoubleEncryptionEnabled**: bool: Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The associated key properties.
* **lastModifiedDate**: string (ReadOnly): The last time the cluster was updated.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cluster.
* **replication**: [ClusterReplicationProperties](#clusterreplicationproperties): Cluster's replication properties.

## ClusterReplicationProperties
### Properties
* **createdDate**: string (ReadOnly): The cluster's replication creation time
* **enabled**: bool: Specifies whether the replication is enabled or not. When true the cluster is replicate to the specified location.
* **isAvailabilityZonesEnabled**: bool: Should enable AvailabilityZones for the given replicated cluster
* **lastModifiedDate**: string (ReadOnly): The last time the cluster's replication was updated.
* **location**: string: The secondary location of the replication. If replication is being enabled, enabled must be provided.
* **provisioningState**: 'Canceled' | 'DisableRequested' | 'Disabling' | 'EnableRequested' | 'Enabling' | 'Failed' | 'RollbackRequested' | 'RollingBack' | 'Succeeded' | string (ReadOnly): The provisioning state of the cluster replication.

## ClusterSku
### Properties
* **capacity**: int: The capacity reservation level in Gigabytes for this cluster.
* **name**: 'CapacityReservation' | string: The SKU (tier) of a cluster.

## Column
### Properties
* **dataTypeHint**: 'armPath' | 'guid' | 'ip' | 'uri' | string: Column data type logical hint.
* **description**: string: Column description.
* **displayName**: string: Column display name.
* **isDefaultDisplay**: bool (ReadOnly): Is displayed by default.
* **isHidden**: bool (ReadOnly): Is column hidden.
* **name**: string: Column name.
* **type**: 'boolean' | 'dateTime' | 'dynamic' | 'guid' | 'int' | 'long' | 'real' | 'string' | string: Column data type.

## DataExportProperties
### Properties
* **createdDate**: string: The latest data export rule modification time.
* **dataExportId**: string: The data export rule ID.
* **destination**: [Destination](#destination): destination properties.
* **enable**: bool: Active when enabled.
* **lastModifiedDate**: string: Date and time when the export was last modified.
* **tableNames**: string[] (Required): An array of tables to export, for example: [“Heartbeat, SecurityEvent”].

## DataSourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Destination
### Properties
* **metaData**: [DestinationMetaData](#destinationmetadata): destination meta data.
* **resourceId**: string (Required): The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
* **type**: 'EventHub' | 'StorageAccount' | string (ReadOnly): The type of the destination resource

## DestinationMetaData
### Properties
* **eventHubName**: string: Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## KeyVaultProperties
### Properties
* **keyName**: string: The name of the key associated with the Log Analytics cluster.
* **keyRsaSize**: int: Selected key minimum required size.
* **keyVaultUri**: string: The Key Vault uri which holds they key associated with the Log Analytics cluster.
* **keyVersion**: string: The version of the key associated with the Log Analytics cluster.

## LinkedServiceProperties
### Properties
* **provisioningState**: 'Deleting' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string: The provisioning state of the linked service.
* **resourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access
* **writeAccessResourceId**: string: The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access

## LinkedServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedStorageAccountsProperties
### Properties
* **dataSourceType**: 'Alerts' | 'AzureWatson' | 'CustomLogs' | 'Ingestion' | 'Query' (ReadOnly): Linked storage accounts type.
* **storageAccountIds**: string[]: Linked storage accounts resources ids.

## LogAnalyticsQueryPackProperties
### Properties
* **provisioningState**: string (ReadOnly): Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **queryPackId**: string (ReadOnly): The unique ID of your application. This field cannot be changed.
* **timeCreated**: string (ReadOnly): Creation Date for the Log Analytics QueryPack, in ISO 8601 format.
* **timeModified**: string (ReadOnly): Last modified date of the Log Analytics QueryPack, in ISO 8601 format.

## LogAnalyticsQueryPackQueryProperties
### Properties
* **author**: string (ReadOnly): Object Id of user creating the query.
* **body**: string (Required): Body of the query.
* **description**: string: Description of the query.
* **displayName**: string (Required): Unique display name for your query within the Query Pack.
* **id**: string (ReadOnly): The unique ID of your application. This field cannot be changed.
* **properties**: any: Additional properties that can be set for the query.
* **related**: [LogAnalyticsQueryPackQueryPropertiesRelated](#loganalyticsquerypackquerypropertiesrelated): The related metadata items for the function.
* **tags**: [LogAnalyticsQueryPackQueryPropertiesTags](#loganalyticsquerypackquerypropertiestags): Tags associated with the query.
* **timeCreated**: string (ReadOnly): Creation Date for the Log Analytics Query, in ISO 8601 format.
* **timeModified**: string (ReadOnly): Last modified date of the Log Analytics Query, in ISO 8601 format.

## LogAnalyticsQueryPackQueryPropertiesRelated
### Properties
* **categories**: string[]: The related categories for the function.
* **resourceTypes**: string[]: The related resource types for the function.
* **solutions**: string[]: The related Log Analytics solutions for the function.

## LogAnalyticsQueryPackQueryPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## NetworkSecurityPerimeter
### Properties
* **id**: string: Fully qualified Azure resource ID of the NSP resource
* **location**: string: Location of the network security perimeter
* **perimeterGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Universal unique ID (UUID) of the network security perimeter

## NetworkSecurityPerimeterConfigurationProperties
### Properties
* **networkSecurityPerimeter**: [NetworkSecurityPerimeter](#networksecurityperimeter): Information about a network security perimeter (NSP)
* **profile**: [NetworkSecurityProfile](#networksecurityprofile): Network security perimeter configuration profile
* **provisioningIssues**: [ProvisioningIssue](#provisioningissue)[] (ReadOnly): List of provisioning issues, if any
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of a network security perimeter configuration that is being created or updated.
* **resourceAssociation**: [ResourceAssociation](#resourceassociation): Information about resource association

## NetworkSecurityProfile
### Properties
* **accessRules**: [AccessRule](#accessrule)[]: List of Access Rules
* **accessRulesVersion**: int: Current access rules version
* **diagnosticSettingsVersion**: int: Current diagnostic settings version
* **enabledLogCategories**: string[]: List of log categories that are enabled
* **name**: string: Name of the profile

## PrivateLinkScopedResource
### Properties
* **resourceId**: string: The full resource Id of the private link scope resource.
* **scopeId**: string: The private link scope unique Identifier.

## ProvisioningIssue
### Properties
* **name**: string (ReadOnly): Name of the issue
* **properties**: [ProvisioningIssueProperties](#provisioningissueproperties) (ReadOnly): Details of a provisioning issue for a network security perimeter (NSP) configuration. Resource providers should generate separate provisioning issue elements for each separate issue detected, and include a meaningful and distinctive description, as well as any appropriate suggestedResourceIds and suggestedAccessRules

## ProvisioningIssueProperties
### Properties
* **description**: string (ReadOnly): Description of the issue
* **issueType**: 'ConfigurationPropagationFailure' | 'MissingIdentityConfiguration' | 'MissingPerimeterConfiguration' | 'Unknown' | string (ReadOnly): Type of issue
* **severity**: 'Error' | 'Warning' | string (ReadOnly): Severity of the issue.
* **suggestedAccessRules**: [AccessRule](#accessrule)[] (ReadOnly): Access rules that can be added to the network security profile (NSP) to remediate the issue.
* **suggestedResourceIds**: string[] (ReadOnly): Fully qualified resource IDs of suggested resources that can be associated to the network security perimeter (NSP) to remediate the issue.

## ResourceAssociation
### Properties
* **accessMode**: 'Audit' | 'Enforced' | 'Learning' | string: Access mode of the resource association
* **name**: string: Name of the resource association

## RestoredLogs
### Properties
* **azureAsyncOperationId**: string (ReadOnly): Search results table async operation id.
* **endRestoreTime**: string: The timestamp to end the restore by (UTC).
* **sourceTable**: string: The table to restore data from.
* **startRestoreTime**: string: The timestamp to start the restore from (UTC).

## ResultStatistics
### Properties
* **ingestedRecords**: int (ReadOnly): The number of rows that were returned by the search job.
* **progress**: int (ReadOnly): Search job completion percentage.
* **scannedGb**: int (ReadOnly): Search job: Amount of scanned data.

## SavedSearchProperties
### Properties
* **category**: string (Required): The category of the saved search. This helps the user to find a saved search faster.
* **displayName**: string (Required): Saved search display name.
* **functionAlias**: string: The function alias if query serves as a function.
* **functionParameters**: string: The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions.
* **query**: string (Required): The query expression for the saved search.
* **tags**: [Tag](#tag)[]: The tags attached to the saved search.
* **version**: int: The version number of the query language. The current version is 2 and is the default.

## Schema
### Properties
* **categories**: string[] (ReadOnly): Table category.
* **columns**: [Column](#column)[]: A list of table custom columns.
* **description**: string: Table description.
* **displayName**: string: Table display name.
* **labels**: string[] (ReadOnly): Table labels.
* **name**: string: Table name.
* **solutions**: string[] (ReadOnly): List of solutions the table is affiliated with
* **source**: 'customer' | 'microsoft' | string (ReadOnly): Table's creator.
* **standardColumns**: [Column](#column)[] (ReadOnly): A list of table standard columns.
* **tableSubType**: 'Any' | 'Classic' | 'DataCollectionRuleBased' | string (ReadOnly): The subtype describes what APIs can be used to interact with the table, and what features are available against it.
* **tableType**: 'CustomLog' | 'Microsoft' | 'RestoredLogs' | 'SearchResults' | string (ReadOnly): Table's creator.

## SearchResults
### Properties
* **azureAsyncOperationId**: string (ReadOnly): Search results table async operation id.
* **description**: string: Search job Description.
* **endSearchTime**: string: The timestamp to end the search by (UTC)
* **limit**: int: Limit the search job to return up to specified number of rows.
* **query**: string: Search job query.
* **sourceTable**: string (ReadOnly): The table used in the search job.
* **startSearchTime**: string: The timestamp to start the search from (UTC)

## StorageAccount
### Properties
* **id**: string (Required): The Azure Resource Manager ID of the storage account resource.
* **key**: string (Required): The storage account key.

## StorageInsightProperties
### Properties
* **containers**: string[]: The names of the blob containers that the workspace should read
* **status**: [StorageInsightStatus](#storageinsightstatus) (ReadOnly): The status of the storage insight
* **storageAccount**: [StorageAccount](#storageaccount) (Required): The storage account connection details
* **tables**: string[]: The names of the Azure tables that the workspace should read

## StorageInsightStatus
### Properties
* **description**: string: Description of the state of the storage insight.
* **state**: 'ERROR' | 'OK' | string (Required): The state of the storage insight connection to the workspace

## StorageInsightTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TableProperties
### Properties
* **archiveRetentionInDays**: int (ReadOnly): The table data archive retention in days. Calculated as (totalRetentionInDays-retentionInDays)
* **lastPlanModifiedDate**: string (ReadOnly): The timestamp that table plan was last modified (UTC).
* **plan**: 'Analytics' | 'Basic' | string: Instruct the system how to handle and charge the logs ingested to this table.
* **provisioningState**: 'Deleting' | 'InProgress' | 'Succeeded' | 'Updating' | string (ReadOnly): Table's current provisioning state. If set to 'updating', indicates a resource lock due to ongoing operation, forbidding any update to the table until the ongoing operation is concluded.
* **restoredLogs**: [RestoredLogs](#restoredlogs): Parameters of the restore operation that initiated this table.
* **resultStatistics**: [ResultStatistics](#resultstatistics) (ReadOnly): Search job execution statistics.
* **retentionInDays**: int {minValue: 4, maxValue: 730}: The table retention in days, between 4 and 730. Setting this property to -1 will default to the workspace retention.
* **retentionInDaysAsDefault**: bool (ReadOnly): True - Value originates from workspace retention in days, False - Customer specific.
* **schema**: [Schema](#schema): Table schema.
* **searchResults**: [SearchResults](#searchresults): Parameters of the search job that initiated this table.
* **totalRetentionInDays**: int {minValue: 4, maxValue: 4383}: The table total retention in days, between 4 and 4383. Setting this property to -1 will default to table retention.
* **totalRetentionInDaysAsDefault**: bool (ReadOnly): True - Value originates from retention in days, False - Customer specific.

## Tag
### Properties
* **name**: string (Required): The tag name.
* **value**: string (Required): The tag value.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## WorkspaceCapping
### Properties
* **dailyQuotaGb**: int: The workspace daily quota for ingestion.
* **dataIngestionStatus**: 'ApproachingQuota' | 'ForceOff' | 'ForceOn' | 'OverQuota' | 'RespectQuota' | 'SubscriptionSuspended' | string (ReadOnly): The status of data ingestion for this workspace.
* **quotaNextResetTime**: string (ReadOnly): The time when the quota will be rest.

## WorkspaceFailoverProperties
### Properties
* **lastModifiedDate**: string (ReadOnly): The last time when the failover state was updated.
* **state**: 'Activating' | 'Active' | 'Deactivating' | 'Failed' | 'Inactive' | string (ReadOnly): The failover state of the replication.

## WorkspaceFeatures
### Properties
* **clusterResourceId**: string: Dedicated LA cluster resourceId that is linked to the workspaces.
* **disableLocalAuth**: bool: Disable Non-AAD based Auth.
* **enableDataExport**: bool: Flag that indicate if data should be exported.
* **enableLogAccessUsingOnlyResourcePermissions**: bool: Flag that indicate which permission to use - resource or workspace or both.
* **immediatePurgeDataOn30Days**: bool: Flag that describes if we want to remove the data after 30 days.
* **unifiedSentinelBillingOnly**: bool (ReadOnly): An indication if the specify workspace is limited to sentinel's unified billing model only.
### Additional Properties
* **Additional Properties Type**: any

## WorkspaceProperties
### Properties
* **createdDate**: string (ReadOnly): Workspace creation date.
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **defaultDataCollectionRuleResourceId**: string: The resource ID of the default Data Collection Rule to use for this workspace. Expected format is - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dcrName}.
* **failover**: [WorkspaceFailoverProperties](#workspacefailoverproperties): workspace failover properties.
* **features**: [WorkspaceFeatures](#workspacefeatures): Workspace features.
* **forceCmkForQuery**: bool: Indicates whether customer managed storage is mandatory for query management.
* **modifiedDate**: string (ReadOnly): Workspace modification date.
* **privateLinkScopedResources**: [PrivateLinkScopedResource](#privatelinkscopedresource)[] (ReadOnly): List of linked private link scope resources.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the workspace.
* **publicNetworkAccessForIngestion**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics ingestion.
* **publicNetworkAccessForQuery**: 'Disabled' | 'Enabled' | string: The network access type for accessing Log Analytics query.
* **replication**: [WorkspaceReplicationProperties](#workspacereplicationproperties): workspace replication properties.
* **retentionInDays**: int: The workspace data retention in days. Allowed values are per pricing plan. See pricing tiers documentation for details.
* **sku**: [WorkspaceSku](#workspacesku): The SKU of the workspace.
* **workspaceCapping**: [WorkspaceCapping](#workspacecapping): The daily volume cap for ingestion.

## WorkspaceReplicationProperties
### Properties
* **createdDate**: string (ReadOnly): The last time when the replication was enabled.
* **enabled**: bool: Specifies whether the replication is enabled or not. When true, workspace configuration and data is replicated to the specified location. If replication is been enabled, location must be provided.
* **lastModifiedDate**: string (ReadOnly): The last time when the replication was updated.
* **location**: string: The location of the replication.
* **provisioningState**: 'Canceled' | 'DisableRequested' | 'Disabling' | 'EnableRequested' | 'Enabling' | 'Failed' | 'RollbackRequested' | 'RollingBack' | 'Succeeded' | string (ReadOnly): The provisioning state of the replication.

## WorkspaceSku
### Properties
* **capacityReservationLevel**: int: The capacity reservation level in GB for this workspace, when CapacityReservation sku is selected.
* **lastSkuUpdate**: string (ReadOnly): The last time when the sku was updated.
* **name**: 'CapacityReservation' | 'Free' | 'LACluster' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' | string (Required): The name of the SKU.

