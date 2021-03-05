# Microsoft.TimeSeriesInsights @ 2020-05-15

## Resource Microsoft.TimeSeriesInsights/environments@2020-05-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku (Required)
* **tags**: CreateOrUpdateTrackedResourcePropertiesTags
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant)
### Gen1EnvironmentCreateOrUpdateParameters
#### Properties
* **kind**: 'Gen1' (Required)
* **properties**: Gen1EnvironmentCreationProperties (Required)

### Gen2EnvironmentCreateOrUpdateParameters
#### Properties
* **kind**: 'Gen2' (Required)
* **properties**: Gen2EnvironmentCreationProperties (Required)


## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2020-05-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccessPolicyResourceProperties (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2020-05-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **localTimestamp**: LocalTimestamp (WriteOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: CreateOrUpdateTrackedResourcePropertiesTags
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant)
### EventHubEventSourceCreateOrUpdateParameters
#### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: EventHubEventSourceCreationProperties (Required)

### IoTHubEventSourceCreateOrUpdateParameters
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: IoTHubEventSourceCreationProperties (Required)


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2020-05-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ReferenceDataSetCreationProperties (Required)
* **tags**: CreateOrUpdateTrackedResourcePropertiesTags
* **type**: 'Microsoft.TimeSeriesInsights/environments/referenceDataSets' (ReadOnly, DeployTimeConstant)

## Sku
### Properties
* **capacity**: int (Required)
* **name**: 'L1' | 'P1' | 'S1' | 'S2' (Required)

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Gen1EnvironmentCreateOrUpdateParameters
### Properties
* **kind**: 'Gen1' (Required)
* **properties**: Gen1EnvironmentCreationProperties (Required)

## Gen1EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **dataRetentionTime**: any (Required)
* **partitionKeyProperties**: TimeSeriesIdProperty[]
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: EnvironmentStatus (ReadOnly)
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData'

## TimeSeriesIdProperty
### Properties
* **name**: string
* **type**: 'String'

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

## Gen2EnvironmentCreateOrUpdateParameters
### Properties
* **kind**: 'Gen2' (Required)
* **properties**: Gen2EnvironmentCreationProperties (Required)

## Gen2EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: EnvironmentStatus (ReadOnly)
* **storageConfiguration**: Gen2StorageConfigurationInput (Required)
* **timeSeriesIdProperties**: TimeSeriesIdProperty[] (Required)
* **warmStoreConfiguration**: WarmStoreConfigurationProperties

## Gen2StorageConfigurationInput
### Properties
* **accountName**: string (Required)
* **managementKey**: string (Required, WriteOnly)

## WarmStoreConfigurationProperties
### Properties
* **dataRetention**: any (Required)

## AccessPolicyResourceProperties
### Properties
* **description**: string
* **principalObjectId**: string
* **roles**: 'Contributor' | 'Reader'[]

## LocalTimestamp
### Properties
* **format**: 'Embedded' (WriteOnly)
* **timeZoneOffset**: LocalTimestampTimeZoneOffset (WriteOnly)

## LocalTimestampTimeZoneOffset
### Properties
* **propertyName**: string (WriteOnly)

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventHubEventSourceCreateOrUpdateParameters
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

## IoTHubEventSourceCreateOrUpdateParameters
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
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **sharedAccessKey**: string (Required, WriteOnly)
* **timestampPropertyName**: string

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

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

