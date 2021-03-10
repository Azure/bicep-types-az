# Microsoft.TimeSeriesInsights @ 2020-05-15

## Resource Microsoft.TimeSeriesInsights/environments@2020-05-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: [Sku](#sku) (Required)
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags)
* **type**: 'Microsoft.TimeSeriesInsights/environments' (ReadOnly, DeployTimeConstant)
### Gen1EnvironmentCreateOrUpdateParameters
#### Properties
* **kind**: 'Gen1' (Required)
* **properties**: [Gen1EnvironmentCreationProperties](#gen1environmentcreationproperties) (Required)

### Gen2EnvironmentCreateOrUpdateParameters
#### Properties
* **kind**: 'Gen2' (Required)
* **properties**: [Gen2EnvironmentCreationProperties](#gen2environmentcreationproperties) (Required)


## Resource Microsoft.TimeSeriesInsights/environments/accessPolicies@2020-05-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccessPolicyResourceProperties](#accesspolicyresourceproperties) (Required)
* **type**: 'Microsoft.TimeSeriesInsights/environments/accessPolicies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.TimeSeriesInsights/environments/eventSources@2020-05-15
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **localTimestamp**: [LocalTimestamp](#localtimestamp) (WriteOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags)
* **type**: 'Microsoft.TimeSeriesInsights/environments/eventSources' (ReadOnly, DeployTimeConstant)
### EventHubEventSourceCreateOrUpdateParameters
#### Properties
* **kind**: 'Microsoft.EventHub' (Required)
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required)

### IoTHubEventSourceCreateOrUpdateParameters
#### Properties
* **kind**: 'Microsoft.IoTHub' (Required)
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required)


## Resource Microsoft.TimeSeriesInsights/environments/referenceDataSets@2020-05-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ReferenceDataSetCreationProperties](#referencedatasetcreationproperties) (Required)
* **tags**: [CreateOrUpdateTrackedResourcePropertiesTags](#createorupdatetrackedresourcepropertiestags)
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
* **properties**: [Gen1EnvironmentCreationProperties](#gen1environmentcreationproperties) (Required)

## Gen1EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **dataRetentionTime**: string (Required)
* **partitionKeyProperties**: [TimeSeriesIdProperty](#timeseriesidproperty)[]
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly)
* **storageLimitExceededBehavior**: 'PauseIngress' | 'PurgeOldData'

## TimeSeriesIdProperty
### Properties
* **name**: string
* **type**: 'String'

## EnvironmentStatus
### Properties
* **ingress**: [IngressEnvironmentStatus](#ingressenvironmentstatus) (ReadOnly)
* **warmStorage**: [WarmStorageEnvironmentStatus](#warmstorageenvironmentstatus) (ReadOnly)

## IngressEnvironmentStatus
### Properties
* **state**: 'Disabled' | 'Paused' | 'Ready' | 'Running' | 'Unknown' (ReadOnly)
* **stateDetails**: [EnvironmentStateDetails](#environmentstatedetails) (ReadOnly)

## EnvironmentStateDetails
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## WarmStorageEnvironmentStatus
### Properties
* **propertiesUsage**: [WarmStoragePropertiesUsage](#warmstoragepropertiesusage) (ReadOnly)

## WarmStoragePropertiesUsage
### Properties
* **state**: 'Error' | 'Ok' | 'Unknown' (ReadOnly)
* **stateDetails**: [WarmStoragePropertiesUsageStateDetails](#warmstoragepropertiesusagestatedetails) (ReadOnly)

## WarmStoragePropertiesUsageStateDetails
### Properties
* **currentCount**: int (ReadOnly)
* **maxCount**: int (ReadOnly)

## Gen2EnvironmentCreateOrUpdateParameters
### Properties
* **kind**: 'Gen2' (Required)
* **properties**: [Gen2EnvironmentCreationProperties](#gen2environmentcreationproperties) (Required)

## Gen2EnvironmentCreationProperties
### Properties
* **creationTime**: string (ReadOnly)
* **dataAccessFqdn**: string (ReadOnly)
* **dataAccessId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: [EnvironmentStatus](#environmentstatus) (ReadOnly)
* **storageConfiguration**: [Gen2StorageConfigurationInput](#gen2storageconfigurationinput) (Required)
* **timeSeriesIdProperties**: [TimeSeriesIdProperty](#timeseriesidproperty)[] (Required)
* **warmStoreConfiguration**: [WarmStoreConfigurationProperties](#warmstoreconfigurationproperties)

## Gen2StorageConfigurationInput
### Properties
* **accountName**: string (Required)
* **managementKey**: string (Required, WriteOnly)

## WarmStoreConfigurationProperties
### Properties
* **dataRetention**: string (Required)

## AccessPolicyResourceProperties
### Properties
* **description**: string
* **principalObjectId**: string
* **roles**: 'Contributor' | 'Reader'[]

## LocalTimestamp
### Properties
* **format**: 'Embedded' (WriteOnly)
* **timeZoneOffset**: [LocalTimestampTimeZoneOffset](#localtimestamptimezoneoffset) (WriteOnly)

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
* **properties**: [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties) (Required)

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
* **properties**: [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties) (Required)

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
* **keyProperties**: [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)[] (Required)
* **provisioningState**: 'Accepted' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)

## ReferenceDataSetKeyProperty
### Properties
* **name**: string
* **type**: 'Bool' | 'DateTime' | 'Double' | 'String'

## CreateOrUpdateTrackedResourcePropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

