# Microsoft.Kusto @ 2019-01-21

## Resource Microsoft.Kusto/clusters@2019-01-21
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterProperties](#clusterproperties): The cluster properties.
* **sku**: [AzureSku](#azuresku) (Required): The SKU of the cluster.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases@2019-01-21
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DatabaseProperties](#databaseproperties): The database properties.
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-01-21
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant): The resource type

### EventGridDataConnection
#### Properties
* **kind**: 'EventGrid' (Required): Kind of the endpoint for the data connection
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): The properties of the Event Grid data connection.

### EventHubDataConnection
#### Properties
* **kind**: 'EventHub' (Required): Kind of the endpoint for the data connection
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): The Event Hub data connection properties to validate.


## Function addPrincipals (Microsoft.Kusto/clusters/databases@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-01-21
* **Input**: [DatabasePrincipalListRequest](#databaseprincipallistrequest)
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## Function checkNameAvailability (Microsoft.Kusto/clusters@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters
* **ApiVersion**: 2019-01-21
* **Input**: [DatabaseCheckNameRequest](#databasechecknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## Function checkNameAvailability (Microsoft.Kusto/locations@2019-01-21)
* **Resource**: Microsoft.Kusto/locations
* **ApiVersion**: 2019-01-21
* **Input**: [ClusterCheckNameRequest](#clusterchecknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## Function checkNameAvailability (Microsoft.Kusto/clusters/databases@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-01-21
* **Input**: [DataConnectionCheckNameRequest](#dataconnectionchecknamerequest)
* **Output**: [CheckNameResult](#checknameresult)

## Function dataConnectionValidation (Microsoft.Kusto/clusters/databases@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-01-21
* **Input**: [DataConnectionValidation](#dataconnectionvalidation)
* **Output**: [DataConnectionValidationListResult](#dataconnectionvalidationlistresult)

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-01-21
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## Function removePrincipals (Microsoft.Kusto/clusters/databases@2019-01-21)
* **Resource**: Microsoft.Kusto/clusters/databases
* **ApiVersion**: 2019-01-21
* **Input**: [DatabasePrincipalListRequest](#databaseprincipallistrequest)
* **Output**: [DatabasePrincipalListResult](#databaseprincipallistresult)

## AzureSku
### Properties
* **capacity**: int: The number of instances of the cluster.
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' | string (Required): SKU name.
* **tier**: 'Basic' | 'Standard' | string (Required): SKU tier.

## CheckNameResult
### Properties
* **message**: string: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
* **name**: string: The name that was checked.
* **nameAvailable**: bool: Specifies a Boolean value that indicates if the name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: Message providing the reason why the given name is invalid.

## ClusterCheckNameRequest
### Properties
* **name**: string (Required): Cluster name.
* **type**: 'Microsoft.Kusto/clusters' | 'Microsoft.Kusto/clusters/databases' | 'Microsoft.Kusto/clusters/databases/dataConnections' (Required): The type of resource, Microsoft.Kusto/clusters.

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly): The cluster data ingestion URI.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' | string (ReadOnly): The state of the resource.
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]: The cluster's external tenants.
* **uri**: string (ReadOnly): The cluster URI.

## DatabaseCheckNameRequest
### Properties
* **name**: string (Required): Database name.
* **type**: 'Microsoft.Kusto/clusters' | 'Microsoft.Kusto/clusters/databases' | 'Microsoft.Kusto/clusters/databases/dataConnections' (Required): The type of resource, Microsoft.Kusto/clusters/databases.

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
* **hotCachePeriod**: string: The time the data that should be kept in cache for fast queries in TimeSpan.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' | string (ReadOnly): The provisioned state of the resource.
* **softDeletePeriod**: string: The time the data should be kept before it stops being accessible to queries in TimeSpan.
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly): The statistics of the database.

## DatabaseStatistics
### Properties
* **size**: int: The database size - the total size of compressed data and index in bytes.

## DataConnection
* **Discriminator**: kind

### Base Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **location**: string: Resource location.
* **name**: string (ReadOnly): The name of the resource
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

### EventGridDataConnection
#### Properties
* **kind**: 'EventGrid' (Required): Kind of the endpoint for the data connection
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties): The properties of the Event Grid data connection.

### EventHubDataConnection
#### Properties
* **kind**: 'EventHub' (Required): Kind of the endpoint for the data connection
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties): The Event Hub data connection properties to validate.


## DataConnectionCheckNameRequest
### Properties
* **name**: string (Required): Data Connection name.
* **type**: 'Microsoft.Kusto/clusters' | 'Microsoft.Kusto/clusters/databases' | 'Microsoft.Kusto/clusters/databases/dataConnections' (Required): The type of resource, Microsoft.Kusto/clusters/databases/dataConnections.

## DataConnectionValidation
### Properties
* **dataConnectionName**: string: The name of the data connection.
* **properties**: [DataConnection](#dataconnection): The data connection properties to validate.

## DataConnectionValidationListResult
### Properties
* **value**: [DataConnectionValidationResult](#dataconnectionvalidationresult)[]: The list of Kusto data connection validation errors.

## DataConnectionValidationResult
### Properties
* **errorMessage**: string: A message which indicates a problem in data connection validation.

## EventGridConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TXT' | string (Required): The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID where the event grid is configured to send events.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **storageAccountResourceId**: string (Required): The resource ID of the storage account where the data resides.
* **tableName**: string (Required): The table where the data should be ingested. Optionally the table information can be added to each message.

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required): The event hub consumer group.
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TXT' | string: The data format of the message. Optionally the data format can be added to each message.
* **eventHubResourceId**: string (Required): The resource ID of the event hub to be used to create a data connection.
* **mappingRuleName**: string: The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message.
* **tableName**: string: The table where the data should be ingested. Optionally the table information can be added to each message.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrustedExternalTenant
### Properties
* **value**: string: GUID representing an external tenant.

