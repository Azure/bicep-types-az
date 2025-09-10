# Microsoft.MySQLDiscovery @ 2024-09-30-preview

## Resource Microsoft.MySQLDiscovery/MySQLSites@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [ExtendedLocation](#extendedlocation) (Required): The extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MySQLSiteProperties](#mysqlsiteproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.MySQLDiscovery/MySQLSites' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MySQLDiscovery/MySQLSites/errorSummaries@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ErrorSummariesProperties](#errorsummariesproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [ErrorSummaryTags](#errorsummarytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.MySQLDiscovery/MySQLSites/errorSummaries' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MySQLDiscovery/MySQLSites/MySQLServers@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MySQLServerProperties](#mysqlserverproperties) (Required): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [MySQLServerTags](#mysqlservertags): Resource tags
* **type**: 'Microsoft.MySQLDiscovery/MySQLSites/MySQLServers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MySQLDiscovery/MySQLSites/summaries@2024-09-30-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SummariesProperties](#summariesproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SummaryTags](#summarytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.MySQLDiscovery/MySQLSites/summaries' (ReadOnly, DeployTimeConstant): The resource type

## Error
### Properties
* **code**: string: The error code.
* **id**: string: The error ID.
* **message**: string: The detailed error message.
* **possibleCause**: string: The error possible cause.
* **recommendedAction**: string: Gets description of the checkpoint.
* **runAsAccountId**: string: The account ID used to login.
* **severity**: string: Gets description of the severity.
* **summaryMessage**: string: The summarized error message.
* **updatedTimeStamp**: string: Time when this error was last updated.

## ErrorSummariesProperties
### Properties
* **affectedObjectsCount**: int: The number of affected objects.
* **errors**: [Error](#error)[]: The list of errors.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string: Gets or sets the provisioning state.

## ErrorSummaryTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ExtendedLocation
### Properties
* **name**: string: The extended location name.
* **type**: string: The extended location type.

## MySQLServerProperties
### Properties
* **edition**: 'Community' | 'Enterprise' | string: mysql server edition.
* **errors**: [Error](#error)[]: The list of errors.
* **hostIp**: string[]: The Server IP/host name.
* **hostName**: string (Required): The Server IP/host name.
* **labels**: [MySQLServerPropertiesLabels](#mysqlserverpropertieslabels): Resource labels.
* **machineId**: string: discovery Machine Id
* **mysqlVersion**: string: The mysql server version.
* **numberOfDatabase**: int: The number of database.
* **portNumber**: string (Required): MySQL Server port number
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string: Gets or sets the provisioning state.
* **supportEndIn**: string: Time when mysql version support end.
* **supportStatus**: 'Extended' | 'Mainstream' | 'OutOfSupport' | string: mysql version support status.

## MySQLServerPropertiesLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MySQLServerTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MySQLSiteProperties
### Properties
* **masterSiteId**: string (Required): The mapped master Site Id.
* **migrateProjectId**: string (Required): The mapped migrate project Id.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string: Gets or sets the provisioning state.

## SummariesProperties
### Properties
* **discoveredServers**: int: The number of discovered server.
* **errors**: [Error](#error)[]: The list of errors.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string: Gets or sets the provisioning state.

## SummaryTags
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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

