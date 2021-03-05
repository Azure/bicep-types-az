# Microsoft.Devices @ 2016-02-03

## Resource Microsoft.Devices/IotHubs@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotHubProperties
* **resourcegroup**: string (Required)
* **sku**: IotHubSkuInfo (Required)
* **subscriptionid**: string (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## IotHubProperties
### Properties
* **authorizationPolicies**: SharedAccessSignatureAuthorizationRule[]
* **cloudToDevice**: CloudToDeviceProperties
* **comments**: string
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: IotHubPropertiesEventHubEndpoints
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: IpFilterRule[]
* **messagingEndpoints**: IotHubPropertiesMessagingEndpoints
* **operationsMonitoringProperties**: OperationsMonitoringProperties
* **provisioningState**: string (ReadOnly)
* **storageEndpoints**: IotHubPropertiesStorageEndpoints

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **secondaryKey**: string

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: any
* **feedback**: FeedbackProperties
* **maxDeliveryCount**: int

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: any
* **maxDeliveryCount**: int
* **ttlAsIso8601**: any

## IotHubPropertiesEventHubEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: EventHubProperties

## EventHubProperties
### Properties
* **endpoint**: string (ReadOnly)
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **path**: string (ReadOnly)
* **retentionTimeInDays**: int

## IpFilterRule
### Properties
* **filterName**: string (Required)
* **ipMask**: string (Required)

## IotHubPropertiesMessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: MessagingEndpointProperties

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: any
* **maxDeliveryCount**: int
* **ttlAsIso8601**: any

## OperationsMonitoringProperties
### Properties
* **events**: OperationsMonitoringPropertiesEvents

## OperationsMonitoringPropertiesEvents
### Properties
### Additional Properties
* **Additional Properties Type**: 'Error' | 'Error, Information' | 'Information' | 'None'

## IotHubPropertiesStorageEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: StorageEndpointProperties

## StorageEndpointProperties
### Properties
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **sasTtlAsIso8601**: any

## IotHubSkuInfo
### Properties
* **capacity**: int (Required)
* **name**: 'F1' | 'S1' | 'S2' | 'S3' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

