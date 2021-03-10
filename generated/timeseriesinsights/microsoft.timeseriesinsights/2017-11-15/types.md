# Microsoft.TimeSeriesInsights @ 2017-11-15

## Resource Microsoft.TimeSeriesInsights/environments@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EnvironmentCreationProperties](#environmentcreationproperties) (Required)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccessPolicyResourceProperties](#accesspolicyresourceproperties) (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2017-11-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant)
### Microsoft.EventHub
#### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required)

### Microsoft.IotHub
#### Properties
* **kind**: 'Microsoft.IotHub' (Required)
* **properties**: [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties) (ReadOnly)

### Microsoft.IoTHub
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required, WriteOnly)


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2017-11-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-11-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReferenceDataSetCreationProperties](#referencedatasetcreationproperties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant)

## EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **dataRetentionTime**: string (Required)
* **partitionKeyProperties**: [PartitionKeyProperty](#partitionkeyproperty)[]
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly)
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData'

## PartitionKeyProperty
### Properties
* **name**: string
* **type**: 'String'

## EnvironmentStatus
### Properties
* **ingress**: [IngressEnvironmentStatus](#ingressenvironmentstatus) (ReadOnly)

## IngressEnvironmentStatus
### Properties
* **state**: 'Disabled' | 'Paused' | 'Ready' | 'Running' | 'Unknown' (ReadOnly)
* **stateDetails**: [EnvironmentStateDetails](#environmentstatedetails) (ReadOnly)

## EnvironmentStateDetails
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## Sku
### Properties
* **capacity**: int (Required)
* **name**: 'S1' | 'S2' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccessPolicyResourceProperties
### Properties
* **description**: string
* **principalObjectId**: string
* **roles**: 'Contributor' | 'Reader'[]

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.EventHub
### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required)

## EventHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required)
* **creationTime**: string (ReadOnly)
* **eventHubName**: string (Required)
* **eventSourceResourceId**: string (Required)
* **keyName**: string (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **serviceBusNamespace**: string (Required)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string

## Microsoft.IotHub
### Properties
* **kind**: 'Microsoft.IotHub' (Required)
* **properties**: [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties) (ReadOnly)

## IoTHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **eventSourceResourceId**: string (ReadOnly)
* **iotHubName**: string (ReadOnly)
* **keyName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **timestampPropertyName**: string (ReadOnly)

## Microsoft.IoTHub
### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required, WriteOnly)

## IoTHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly, WriteOnly)
* **eventSourceResourceId**: string (Required, WriteOnly)
* **iotHubName**: string (Required, WriteOnly)
* **keyName**: string (Required, WriteOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (WriteOnly)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string (WriteOnly)

## ReferenceDataSetCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataStringComparisonBehavior**: 'Ordinal' | 'OrdinalIgnoreCase'
* **keyProperties**: [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)[] (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ReferenceDataSetKeyProperty
### Properties
* **name**: string
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

