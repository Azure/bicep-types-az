# Microsoft.Kusto @ 2018-09-07-preview

## Resource Microsoft.Kusto/clusters@2018-09-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): An ETag of the resource created.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Class representing the Kusto cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): The SKU of the cluster.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2018-09-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): An ETag of the resource created.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): Class representing the Kusto database properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.
* **type**: 'Microsoft.Kusto/clusters/databases/eventhubconnections' (ReadOnly, DeployTimeConstant): The resource type

## Function addPrincipals (Microsoft.Kusto/clusters/databases@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2018-09-07-preview
* **Input**: [DatabasePrincipalListRequest](#databaseprincipallistrequest)
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## Function checkNameAvailability (Microsoft.Kusto/clusters@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2018-09-07-preview
* **Input**: [DatabaseCheckNameRequest](#databasechecknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## Function checkNameAvailability (Microsoft.Kusto/locations@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/locations
* **ApiVersion**: 2018-09-07-preview
* **Input**: [ClusterCheckNameRequest](#clusterchecknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## Function eventhubConnectionValidation (Microsoft.Kusto/clusters/databases@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2018-09-07-preview
* **Input**: [EventHubConnectionValidation](#eventhubconnectionvalidation)
* **Output**: [EventHubConnectionValidationListResult](#eventhubconnectionvalidationlistresult)

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2018-09-07-preview
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## Function removePrincipals (Microsoft.Kusto/clusters/databases@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2018-09-07-preview
* **Input**: [DatabasePrincipalListRequest](#databaseprincipallistrequest)
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## Function start (Microsoft.Kusto/clusters@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2018-09-07-preview
* **Output**: any

## Function stop (Microsoft.Kusto/clusters@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2018-09-07-preview
* **Output**: any

## AzureSku
### Properties
* **capacity**: int: SKU capacity.
* **name**: 'D13_v2' | 'D14_v2' | 'KC16' | 'KC8' | 'KS16' | 'KS8' | 'L16' | 'L8' | string (Required): SKU name.
* **tier**: 'Standard' | string (Required): SKU tier.

## CheckNameResult
### Properties
* **message**: string: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
* **name**: string: The name that was checked.
* **nameAvailable**: bool: Specifies a Boolean value that indicates if the name is available.

## ClusterCheckNameRequest
### Properties
* **name**: string (Required): Cluster name.
* **type**: 'Microsoft.Kusto/clusters' | 'Microsoft.Kusto/clusters/databases' (Required): The type of resource, Microsoft.Kusto/clusters.

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | string (ReadOnly): The state of the resource.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.

## DatabaseCheckNameRequest
### Properties
* **name**: string (Required): Database name.
* **type**: 'Microsoft.Kusto/clusters' | 'Microsoft.Kusto/clusters/databases' (Required): The type of resource, Microsoft.Kusto/clusters/databases.

## DatabasePrincipal
### Properties
* **appId**: string: Application id - relevant only for application principal type.
* **email**: string: Database principal email if exists.
* **fqn**: string: Database principal fully qualified name.
* **name**: string (Required): Database principal name.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' | string (Required): Database principal role.
* **type**: 'App' | 'Group' | 'User' | string (Required): Database principal type.

## DatabasePrincipalListRequest
### Properties
* **value**: [DatabasePrincipal](#databaseprincipal)[]: The list of Kusto database principals.

## DatabasePrincipalListResult
### Properties
* **value**: [DatabasePrincipal](#databaseprincipal)[]: The list of Kusto database principals.

## DatabaseProperties
### Properties
* **hotCachePeriodInDays**: int: The number of days of data that should be kept in cache for fast queries.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriodInDays**: int (Required): The number of days data should be kept before it stops being accessible to queries.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'CSV' | 'JSON' | 'MULTIJSON' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHubConnectionValidation
### Properties
* **eventhubConnectionName**: string: The name of the event hub connection.
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.

## EventHubConnectionValidationListResult
### Properties
* **value**: [EventHubConnectionValidationResult](#eventhubconnectionvalidationresult)[]: The list of Kusto event hub connection validation errors.

## EventHubConnectionValidationResult
### Properties
* **errorMessage**: string: A message which indicates a problem in event hub connection validation.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustedExternalTenant
### Properties
* **value**: string: GUID representing an external tenant.

