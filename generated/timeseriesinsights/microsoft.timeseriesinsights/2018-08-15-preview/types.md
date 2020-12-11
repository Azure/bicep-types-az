# Microsoft.TimeSeriesInsights @ 2018-08-15-preview

## Microsoft.TimeSeriesInsights/environments
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-08-15-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant)
### LongTerm
#### Properties
* **kind**: 'LongTerm' (Required)
* **properties**: LongTermEnvironmentCreationProperties (Required)

### Standard
#### Properties
* **kind**: 'Standard' (Required)
* **properties**: StandardEnvironmentCreationProperties (Required)


## Sku
### Properties
* **capacity**: int (Required)
* **name**: 'L1' | 'P1' | 'S1' | 'S2' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## LongTerm
### Properties
* **kind**: 'LongTerm' (Required)
* **properties**: LongTermEnvironmentCreationProperties (Required)

## LongTermEnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: EnvironmentStatus (ReadOnly)
* **storageConfiguration**: LongTermStorageConfigurationInput (Required)
* **timeSeriesIdProperties**: TimeSeriesIdProperty[] (Required)
* **warmStoreConfiguration**: WarmStoreConfigurationProperties

## EnvironmentStatus
### Properties
* **ingress**: IngressEnvironmentStatus (ReadOnly)
* **warmStorage**: WarmStorageEnvironmentStatus (ReadOnly)

## IngressEnvironmentStatus
### Properties
* **state**: 'Disabled' | 'Paused' | 'Ready' | 'Running' | 'Unknown' (ReadOnly)
* **stateDetails**: EnvironmentStateDetails (ReadOnly)

## EnvironmentStateDetails
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## WarmStorageEnvironmentStatus
### Properties
* **propertiesUsage**: WarmStoragePropertiesUsage (ReadOnly)

## WarmStoragePropertiesUsage
### Properties
* **state**: 'Error' | 'Ok' | 'Unknown' (ReadOnly)
* **stateDetails**: WarmStoragePropertiesUsageStateDetails (ReadOnly)

## WarmStoragePropertiesUsageStateDetails
### Properties
* **currentCount**: int (ReadOnly)
* **maxCount**: int (ReadOnly)

## LongTermStorageConfigurationInput
### Properties
* **accountName**: string (Required)
* **managementKey**: string (Required, WriteOnly)

## TimeSeriesIdProperty
### Properties
* **name**: string
* **type**: 'String'

## WarmStoreConfigurationProperties
### Properties
* **dataRetention**: string (Required)

## Standard
### Properties
* **kind**: 'Standard' (Required)
* **properties**: StandardEnvironmentCreationProperties (Required)

## StandardEnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **dataRetentionTime**: string (Required)
* **partitionKeyProperties**: TimeSeriesIdProperty[]
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: EnvironmentStatus (ReadOnly)
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData'

## Microsoft.TimeSeriesInsights/environments/accessPolicies
### Properties
* **apiVersion**: '2018-08-15-preview' (ReadOnly, DeployTimeConstant)
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
* **apiVersion**: '2018-08-15-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **localTimestamp**: LocalTimestamp (WriteOnly)
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
* **properties**: IoTHubEventSourceCreationProperties (Required)


## LocalTimestamp
### Properties
* **format**: 'Embedded' (WriteOnly)
* **timeZoneOffset**: schemas:54_timeZoneOffset (WriteOnly)

## schemas:54_timeZoneOffset
### Properties
* **propertyName**: string (WriteOnly)

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
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **serviceBusNamespace**: string (Required)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string

## Microsoft.IoTHub
### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: IoTHubEventSourceCreationProperties (Required)

## IoTHubEventSourceCreationProperties
### Properties
* **consumerGroupName**: string (Required)
* **creationTime**: string (ReadOnly)
* **eventSourceResourceId**: string (Required)
* **iotHubName**: string (Required)
* **keyName**: string (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating'
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string

## Microsoft.TimeSeriesInsights/environments/referenceDataSets
### Properties
* **apiVersion**: '2018-08-15-preview' (ReadOnly, DeployTimeConstant)
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
* **dataStringComparisonBehavior**: 'Ordinal' | 'OrdinalIgnoreCase'
* **keyProperties**: ReferenceDataSetKeyProperty[] (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ReferenceDataSetKeyProperty
### Properties
* **name**: string
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

