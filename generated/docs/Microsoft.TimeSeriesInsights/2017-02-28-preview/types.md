# Microsoft.TimeSeriesInsights @ 2017-02-28-preview

## Microsoft.TimeSeriesInsights/environments/accessPolicies
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessPolicyResourceProperties (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant)

## AccessPolicyResourceProperties
### Properties
* **description**: string
* **principalObjectId**: string
* **roles**: 'Contributor' | 'Reader'[]

## Microsoft.TimeSeriesInsights/environments/eventSources
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant)
### Microsoft.EventHub
#### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: EventHubEventSourceCreationProperties (Required)

### Microsoft.IoTHub
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: IoTHubEventSourceCreationProperties (Required, WriteOnly)

### Microsoft.IotHub
#### Properties
* **kind**: 'Microsoft.IotHub' (Required)
* **properties**: IoTHubEventSourceResourceProperties (ReadOnly)


## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.EventHub
### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: EventHubEventSourceCreationProperties (Required)

## EventHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required)
* **creationTime**: string (ReadOnly)
* **eventHubName**: string (Required)
* **eventSourceResourceId**: string (Required)
* **keyName**: string (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **serviceBusNamespace**: string (Required)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string

## Microsoft.IoTHub
### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: IoTHubEventSourceCreationProperties (Required, WriteOnly)

## IoTHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required, WriteOnly)
* **creationTime**: string (ReadOnly, WriteOnly)
* **eventSourceResourceId**: string (Required, WriteOnly)
* **iotHubName**: string (Required, WriteOnly)
* **keyName**: string (Required, WriteOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly, WriteOnly)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string (WriteOnly)

## Microsoft.IotHub
### Properties
* **kind**: 'Microsoft.IotHub' (Required)
* **properties**: IoTHubEventSourceResourceProperties (ReadOnly)

## IoTHubEventSourceResourceProperties
### Properties
* **consumerGroupName**: string (ReadOnly)
* **creationTime**: string (ReadOnly)
* **eventSourceResourceId**: string (ReadOnly)
* **iotHubName**: string (ReadOnly)
* **keyName**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **timestampPropertyName**: string (ReadOnly)

## Microsoft.TimeSeriesInsights/environments/referenceDataSets
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReferenceDataSetCreationProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant)

## ReferenceDataSetCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **keyProperties**: ReferenceDataSetKeyProperty[] (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ReferenceDataSetKeyProperty
### Properties
* **name**: string
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.TimeSeriesInsights/environments
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: EnvironmentCreationProperties (Required)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant)

## EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **dataRetentionTime**: string (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData'

## Sku
### Properties
* **capacity**: int (Required)
* **name**: 'S1' | 'S2' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

