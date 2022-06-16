# Microsoft.TimeSeriesInsights @ 2021-03-31-preview

## Resource Microsoft.TimeSeriesInsights/environments@2021-03-31-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **sku**: [Sku](#sku) (Required): The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant): The resource type
### Gen1EnvironmentCreateOrUpdateParametersOrGen1EnvironmentResource
#### Properties
* **kind**: 'Gen1' (Required): The kind of the environment.
* **properties**: [Gen1EnvironmentCreationPropertiesOrGen1EnvironmentResourceProperties](#gen1environmentcreationpropertiesorgen1environmentresourceproperties) (Required): Properties used to create a Gen1 environment.

### Gen2EnvironmentCreateOrUpdateParametersOrGen2EnvironmentResource
#### Properties
* **kind**: 'Gen2' (Required): The kind of the environment.
* **properties**: [Gen2EnvironmentCreationPropertiesOrGen2EnvironmentResourceProperties](#gen2environmentcreationpropertiesorgen2environmentresourceproperties) (Required): Properties used to create a Gen2 environment.


## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyResourceProperties](#accesspolicyresourceproperties) (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2021-03-31-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **localTimestamp**: [LocalTimestamp](#localtimestamp) (WriteOnly): An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant): The resource type
### EventHubEventSourceCreateOrUpdateParametersOrEventHubEventSourceResource
#### Properties
* **kind**: 'Microsoft.EventHub' (Required): The kind of the event source.
* **properties**: [EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties](#eventhubeventsourcecreationpropertiesoreventhubeventsourceresourceproperties) (Required): Properties of the EventHub event source that are required on create or update requests.

### IoTHubEventSourceCreateOrUpdateParametersOrIoTHubEventSourceResource
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required): The kind of the event source.
* **properties**: [IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties](#iothubeventsourcecreationpropertiesoriothubeventsourceresourceproperties) (Required): Properties of the IoTHub event source that are required on create or update requests.


## Resource Microsoft.TimeSeriesInsights/environments/privateEndpointConnections@2021-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.TimeSeriesInsights/environments/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-03-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties](#referencedatasetcreationpropertiesorreferencedatasetresourceproperties) (Required): Properties used to create a reference data set.
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant): The resource type

## AccessPolicyResourceProperties
### Properties
* **description**: string: An description of the access policy.
* **principalObjectId**: string: The objectId of the principal in Azure Active Directory.
* **roles**: 'Contributor' | 'Reader' | string[]: The list of roles the principal is assigned on the environment.

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EnvironmentStateDetails
### Properties
* **code**: string: Contains the code that represents the reason of an environment being in a particular state. Can be used to programmatically handle specific cases.
* **message**: string: A message that describes the state in detail.

## EnvironmentStatus
### Properties
* **ingress**: [IngressEnvironmentStatus](#ingressenvironmentstatus) (ReadOnly): An object that represents the status of ingress on an environment.
* **warmStorage**: [WarmStorageEnvironmentStatus](#warmstorageenvironmentstatus) (ReadOnly): An object that represents the status of warm storage on an environment.

## EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (Required): The name of the event hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventHubName**: string (Required): The name of the event hub.
* **eventSourceResourceId**: string (Required): The resource id of the event source in Azure Resource Manager.
* **ingressStartAt**: [IngressStartAtProperties](#ingressstartatproperties): An object that contains the details about the starting point in time to ingest events.
* **keyName**: string (Required): The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
* **localTimestamp**: [LocalTimestamp](#localtimestamp): An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **serviceBusNamespace**: string (Required): The name of the service bus that contains the event hub.
* **sharedAccessKey**: string (Required, WriteOnly): The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
* **timestampPropertyName**: string: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## Gen1EnvironmentCreationPropertiesOrGen1EnvironmentResourceProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataAccessFqdn**: string (ReadOnly): The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataAccessId**: string (ReadOnly): An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataRetentionTime**: string (Required): ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
* **partitionKeyProperties**: [TimeSeriesIdProperty](#timeseriesidproperty)[]: The list of event properties which will be used to partition data in the environment. Currently, only a single partition key property is supported.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly): An object that represents the status of the environment, and its internal state in the Time Series Insights service.
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData' | string: The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.

## Gen2EnvironmentCreationPropertiesOrGen2EnvironmentResourceProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataAccessFqdn**: string (ReadOnly): The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataAccessId**: string (ReadOnly): An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections to the environment.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: 'disabled' | 'enabled' | string: This value can be set to 'enabled' to avoid breaking changes on existing customer resources and templates. If set to 'disabled', traffic over public interface is not allowed, and private endpoint connections would be the exclusive access method.
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly): An object that represents the status of the environment, and its internal state in the Time Series Insights service.
* **storageConfiguration**: [Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput](#gen2storageconfigurationinputorgen2storageconfigurationoutput) (Required): The storage configuration provides the connection details that allows the Time Series Insights service to connect to the customer storage account that is used to store the environment's data.
* **timeSeriesIdProperties**: [TimeSeriesIdProperty](#timeseriesidproperty)[] (Required): The list of event properties which will be used to define the environment's time series id.
* **warmStoreConfiguration**: [WarmStoreConfigurationProperties](#warmstoreconfigurationproperties): The warm store configuration provides the details to create a warm store cache that will retain a copy of the environment's data available for faster query.

## Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput
### Properties
* **accountName**: string (Required): The name of the storage account that will hold the environment's Gen2 data.
* **managementKey**: string (Required, WriteOnly): The value of the management key that grants the Time Series Insights service write access to the storage account. This property is not shown in environment responses.

## IngressEnvironmentStatus
### Properties
* **state**: 'Disabled' | 'Paused' | 'Ready' | 'Running' | 'Unknown' | string: This string represents the state of ingress operations on an environment. It can be "Disabled", "Ready", "Running", "Paused" or "Unknown"
* **stateDetails**: [EnvironmentStateDetails](#environmentstatedetails) (ReadOnly): An object that contains the details about an environment's state.

## IngressStartAtProperties
### Properties
* **time**: string: ISO8601 UTC datetime with seconds precision (milliseconds are optional), specifying the date and time that will be the starting point for Events to be consumed.
* **type**: 'CustomEnqueuedTime' | 'EarliestAvailable' | 'EventSourceCreationTime' | string: The type of the ingressStartAt, It can be "EarliestAvailable", "EventSourceCreationTime", "CustomEnqueuedTime".

## IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (Required): The name of the iot hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventSourceResourceId**: string (Required): The resource id of the event source in Azure Resource Manager.
* **ingressStartAt**: [IngressStartAtProperties](#ingressstartatproperties): An object that contains the details about the starting point in time to ingest events.
* **iotHubName**: string (Required): The name of the iot hub.
* **keyName**: string (Required): The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
* **localTimestamp**: [LocalTimestamp](#localtimestamp): An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **sharedAccessKey**: string (Required, WriteOnly): The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
* **timestampPropertyName**: string: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## LocalTimestamp
### Properties
* **format**: 'Embedded' | string: An enum that represents the format of the local timestamp property that needs to be set.
* **timeZoneOffset**: [LocalTimestampTimeZoneOffset](#localtimestamptimezoneoffset): An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.

## LocalTimestampTimeZoneOffset
### Properties
* **propertyName**: string: The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The provisioning state of the private endpoint connection resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the private endpoint connection.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataStringComparisonBehavior**: 'Ordinal' | 'OrdinalIgnoreCase' | string: The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
* **keyProperties**: [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)[] (Required): The list of key properties for the reference data set.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## ReferenceDataSetKeyProperty
### Properties
* **name**: string: The name of the key property.
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String' | string: The type of the key property.

## Sku
### Properties
* **capacity**: int (Required): The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
* **name**: 'L1' | 'P1' | 'S1' | 'S2' | string (Required): The name of this SKU.

## TimeSeriesIdProperty
### Properties
* **name**: string: The name of the property.
* **type**: 'String' | string: The type of the property.

## WarmStorageEnvironmentStatus
### Properties
* **propertiesUsage**: [WarmStoragePropertiesUsage](#warmstoragepropertiesusage) (ReadOnly): An object that contains the status of warm storage properties usage.

## WarmStoragePropertiesUsage
### Properties
* **state**: 'Error' | 'Ok' | 'Unknown' | string: This string represents the state of warm storage properties usage. It can be "Ok", "Error", "Unknown".
* **stateDetails**: [WarmStoragePropertiesUsageStateDetails](#warmstoragepropertiesusagestatedetails) (ReadOnly): An object that contains the details about warm storage properties usage state.

## WarmStoragePropertiesUsageStateDetails
### Properties
* **currentCount**: int: A value that represents the number of properties used by the environment for S1/S2 SKU and number of properties used by Warm Store for PAYG SKU
* **maxCount**: int: A value that represents the maximum number of properties used allowed by the environment for S1/S2 SKU and maximum number of properties allowed by Warm Store for PAYG SKU.

## WarmStoreConfigurationProperties
### Properties
* **dataRetention**: string (Required): ISO8601 timespan specifying the number of days the environment's events will be available for query from the warm store.

