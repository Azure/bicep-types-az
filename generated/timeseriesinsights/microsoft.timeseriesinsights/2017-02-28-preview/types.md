# Microsoft.TimeSeriesInsights @ 2017-02-28-preview

## Resource Microsoft.TimeSeriesInsights/environments@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
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

## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessPolicyResourceProperties (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
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

### Microsoft.IotHub
#### Properties
* **kind**: 'Microsoft.IotHub' (Required)
* **properties**: IoTHubEventSourceResourceProperties (ReadOnly)

### Microsoft.IoTHub
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: IoTHubEventSourceCreationProperties (Required, WriteOnly)


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2017-02-28-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-02-28-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReferenceDataSetCreationProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant)

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

## AccessPolicyResourceProperties
### Properties
* **description**: string
* **principalObjectId**: string
* **roles**: 'Contributor' | 'Reader'[]

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

