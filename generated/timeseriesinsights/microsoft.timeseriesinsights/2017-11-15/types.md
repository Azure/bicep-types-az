# Microsoft.TimeSeriesInsights @ 2017-11-15

## Resource Microsoft.TimeSeriesInsights/environments@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentCreationPropertiesOrEnvironmentResourceProperties](#environmentcreationpropertiesorenvironmentresourceproperties) (Required): Properties used to create an environment.
* **sku**: [Sku](#sku) (Required): The sku determines the capacity of the environment, the SLA (in queries-per-minute and total capacity), and the billing rate.
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyResourceProperties](#accesspolicyresourceproperties) (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2017-11-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant): The resource type
### EventHubEventSourceCreateOrUpdateParametersOrEventHubEventSourceResource
#### Properties
* **kind**: 'Microsoft.EventHub' (Required): The kind of the event source.
* **properties**: [EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties](#eventhubeventsourcecreationpropertiesoreventhubeventsourceresourceproperties) (Required): Properties of the EventHub event source that are required on create or update requests.

### IoTHubEventSourceCreateOrUpdateParameters
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required): The kind of the event source.
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required, WriteOnly): Properties of the IoTHub event source that are required on create or update requests.

### IoTHubEventSourceResource
#### Properties
* **kind**: 'Microsoft.IotHub' (Required): The kind of the event source.
* **properties**: [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties) (ReadOnly): Properties of the IoTHub event source resource.


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant): The resource api version
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
* **roles**: 'Contributor' | 'Reader'[]: The list of roles the principal is assigned on the environment.

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

## EnvironmentCreationPropertiesOrEnvironmentResourceProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataAccessFqdn**: string (ReadOnly): The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataAccessId**: string (ReadOnly): An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataRetentionTime**: string (Required): ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
* **partitionKeyProperties**: [PartitionKeyProperty](#partitionkeyproperty)[]: The list of partition keys according to which the data in the environment will be ordered.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly): An object that represents the status of the environment, and its internal state in the Time Series Insights service.
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData': The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.

## EnvironmentStateDetails
### Properties
* **code**: string: Contains the code that represents the reason of an environment being in a particular state. Can be used to programmatically handle specific cases.
* **message**: string: A message that describes the state in detail.

## EnvironmentStatus
### Properties
* **ingress**: [IngressEnvironmentStatus](#ingressenvironmentstatus) (ReadOnly): An object that represents the status of ingress on an environment.

## EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (Required): The name of the event hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventHubName**: string (Required): The name of the event hub.
* **eventSourceResourceId**: string (Required): The resource id of the event source in Azure Resource Manager.
* **keyName**: string (Required): The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **serviceBusNamespace**: string (Required): The name of the service bus that contains the event hub.
* **sharedAccessKey**: string (Required, WriteOnly): The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
* **timestampPropertyName**: string: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## IngressEnvironmentStatus
### Properties
* **state**: 'Disabled' | 'Paused' | 'Ready' | 'Running' | 'Unknown': This string represents the state of ingress operations on an environment. It can be "Disabled", "Ready", "Running", "Paused" or "Unknown"
* **stateDetails**: [EnvironmentStateDetails](#environmentstatedetails) (ReadOnly): An object that contains the details about an environment's state.

## IoTHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required): The name of the iot hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventSourceResourceId**: string (Required): The resource id of the event source in Azure Resource Manager.
* **iotHubName**: string (Required): The name of the iot hub.
* **keyName**: string (Required): The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **sharedAccessKey**: string (Required): The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
* **timestampPropertyName**: string: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## IoTHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (Required): The name of the iot hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventSourceResourceId**: string (Required): The resource id of the event source in Azure Resource Manager.
* **iotHubName**: string (Required): The name of the iot hub.
* **keyName**: string (Required): The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **timestampPropertyName**: string: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## PartitionKeyProperty
### Properties
* **name**: string: The name of the property.
* **type**: 'String' | string: The type of the property.

## ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataStringComparisonBehavior**: 'Ordinal' | 'OrdinalIgnoreCase': The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
* **keyProperties**: [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)[] (Required): The list of key properties for the reference data set.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.

## ReferenceDataSetKeyProperty
### Properties
* **name**: string: The name of the key property.
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String': The type of the key property.

## Sku
### Properties
* **capacity**: int (Required): The capacity of the sku. This value can be changed to support scale out of environments after they have been created.
* **name**: 'S1' | 'S2' (Required): The name of this SKU.

