# Microsoft.TimeSeriesInsights @ 2017-02-28-preview

## Resource Microsoft.TimeSeriesInsights/environments@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnvironmentCreationProperties](#environmentcreationproperties) (Required): Properties used to create an environment.
* **sku**: [Sku](#sku) (Required): The sku determines the capacity of the environment, the SLA (in queries-per-minute and total capacity), and the billing rate.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccessPolicyResourceProperties](#accesspolicyresourceproperties) (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant): The resource type
### Microsoft.EventHub
#### Properties
* **kind**: 'Microsoft.EventHub' (Required): Parameters supplied to the Create or Update Event Source operation for an EventHub event source.
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required): Properties of the EventHub event source that are required on create or update requests.

### Microsoft.IotHub
#### Properties
* **kind**: 'Microsoft.IotHub' (Required): An event source that receives its data from an Azure IoTHub.
* **properties**: [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties) (ReadOnly): Properties of the IoTHub event source resource.

### Microsoft.IoTHub
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required): Parameters supplied to the Create or Update Event Source operation for an IoTHub event source.
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required, WriteOnly): Properties of the IoTHub event source that are required on create or update requests.


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ReferenceDataSetCreationProperties](#referencedatasetcreationproperties) (Required): Properties used to create a reference data set.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Key-value pairs of additional properties for the resource.
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant): The resource type

## EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **dataAccessFqdn**: string (ReadOnly): The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataAccessId**: string (ReadOnly): An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
* **dataRetentionTime**: string (Required): ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData': The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.

## Sku
### Properties
* **capacity**: int (Required): The capacity of the sku. This value can be changed to support scale out of environments after they have been created.
* **name**: 'S1' | 'S2' (Required): The name of this SKU.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessPolicyResourceProperties
### Properties
* **description**: string: An description of the access policy.
* **principalObjectId**: string: The objectId of the principal in Azure Active Directory.
* **roles**: 'Contributor' | 'Reader'[]: The list of roles the principal is assigned on the environment.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.EventHub
### Properties
* **kind**: 'Microsoft.EventHub' (Required): Parameters supplied to the Create or Update Event Source operation for an EventHub event source.
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required): Properties of the EventHub event source that are required on create or update requests.

## EventHubEventSourceCreationProperties
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

## Microsoft.IotHub
### Properties
* **kind**: 'Microsoft.IotHub' (Required): An event source that receives its data from an Azure IoTHub.
* **properties**: [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties) (ReadOnly): Properties of the IoTHub event source resource.

## IoTHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (ReadOnly): The name of the iot hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly): The time the resource was created.
* **eventSourceResourceId**: string (ReadOnly): The resource id of the event source in Azure Resource Manager.
* **iotHubName**: string (ReadOnly): The name of the iot hub.
* **keyName**: string (ReadOnly): The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.
* **timestampPropertyName**: string (ReadOnly): The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## Microsoft.IoTHub
### Properties
* **kind**: 'Microsoft.IoTHub' (Required): Parameters supplied to the Create or Update Event Source operation for an IoTHub event source.
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required, WriteOnly): Properties of the IoTHub event source that are required on create or update requests.

## IoTHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required, WriteOnly): The name of the iot hub's consumer group that holds the partitions from which events will be read.
* **creationTime**: string (ReadOnly, WriteOnly): The time the resource was created.
* **eventSourceResourceId**: string (Required, WriteOnly): The resource id of the event source in Azure Resource Manager.
* **iotHubName**: string (Required, WriteOnly): The name of the iot hub.
* **keyName**: string (Required, WriteOnly): The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly, WriteOnly): Provisioning state of the resource.
* **sharedAccessKey**: string (Required, WriteOnly): The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
* **timestampPropertyName**: string (WriteOnly): The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

## ReferenceDataSetCreationProperties
### Properties
* **creationTime**: string (ReadOnly): The time the resource was created.
* **keyProperties**: [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)[] (Required): The list of key properties for the reference data set.
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning state of the resource.

## ReferenceDataSetKeyProperty
### Properties
* **name**: string: The name of the key property.
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String': The type of the key property.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

