# Microsoft.Kusto @ 2018-09-07-preview

## Resource Microsoft.Kusto/clusters@2018-09-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): An ETag of the resource created.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): Class representing the Kusto cluster properties.
* **sku**: [AzureSku](#azuresku) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2018-09-07-preview
* **Valid Scope(s)**: ResourceGroup
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
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): Class representing the Kusto event hub connection properties.
* **type**: 'Microsoft.Kusto/clusters/databases/eventhubconnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2018-09-07-preview)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2018-09-07-preview
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' (ReadOnly): The state of the resource.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.

## TrustedExternalTenant
### Properties
* **value**: string: GUID representing an external tenant.

## AzureSku
### Properties
* **capacity**: int: SKU capacity.
* **name**: 'D13_v2' | 'D14_v2' | 'KC16' | 'KC8' | 'KS16' | 'KS8' | 'L16' | 'L8' (Required): SKU name.
* **tier**: 'Standard' (Required): SKU tier.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProperties
### Properties
* **hotCachePeriodInDays**: int: The number of days of data that should be kept in cache for fast queries.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly): The provisioned state of the resource.
* **softDeletePeriodInDays**: int (Required): The number of days data should be kept before it stops being accessible to queries.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly)

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'CSV' | 'JSON' | 'MULTIJSON': The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## DatabasePrincipal
### Properties
* **appId**: string (ReadOnly): Application id - relevant only for application principal type.
* **email**: string (ReadOnly): Database principal email if exists.
* **fqn**: string (ReadOnly): Database principal fully qualified name.
* **name**: string (ReadOnly): Database principal name.
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' (ReadOnly): Database principal role.
* **type**: 'App' | 'Group' | 'User' (ReadOnly): Database principal type.

