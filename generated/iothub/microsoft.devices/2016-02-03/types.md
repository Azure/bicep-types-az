# Microsoft.Devices @ 2016-02-03

## Resource Microsoft.Devices/IotHubs@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IotHubProperties](#iothubproperties)
* **resourcegroup**: string (Required)
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required)
* **subscriptionid**: string (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **tags**: [EventHubConsumerGroupInfoTags](#eventhubconsumergroupinfotags) (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant)

## IotHubProperties
### Properties
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[]
* **cloudToDevice**: [CloudToDeviceProperties](#cloudtodeviceproperties)
* **comments**: string
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: [IotHubPropertiesEventHubEndpoints](#iothubpropertieseventhubendpoints)
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]
* **messagingEndpoints**: [IotHubPropertiesMessagingEndpoints](#iothubpropertiesmessagingendpoints)
* **operationsMonitoringProperties**: [OperationsMonitoringProperties](#operationsmonitoringproperties)
* **provisioningState**: string (ReadOnly)
* **storageEndpoints**: [IotHubPropertiesStorageEndpoints](#iothubpropertiesstorageendpoints)

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'RegistryRead' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryWrite' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'ServiceConnect' | 'ServiceConnect, DeviceConnect' (Required)
* **secondaryKey**: string

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: string
* **feedback**: [FeedbackProperties](#feedbackproperties)
* **maxDeliveryCount**: int

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## IotHubPropertiesEventHubEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [EventHubProperties](#eventhubproperties)

## EventHubProperties
### Properties
* **endpoint**: string (ReadOnly)
* **partitionCount**: int
* **partitionIds**: string[] (ReadOnly)
* **path**: string (ReadOnly)
* **retentionTimeInDays**: int

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required)
* **filterName**: string (Required)
* **ipMask**: string (Required)

## IotHubPropertiesMessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpointProperties](#messagingendpointproperties)

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## OperationsMonitoringProperties
### Properties
* **events**: [OperationsMonitoringPropertiesEvents](#operationsmonitoringpropertiesevents)

## OperationsMonitoringPropertiesEvents
### Properties
### Additional Properties
* **Additional Properties Type**: 'Error' | 'Error, Information' | 'Information' | 'None'

## IotHubPropertiesStorageEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [StorageEndpointProperties](#storageendpointproperties)

## StorageEndpointProperties
### Properties
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **sasTtlAsIso8601**: string

## IotHubSkuInfo
### Properties
* **capacity**: int (Required)
* **name**: 'F1' | 'S1' | 'S2' | 'S3' (Required)
* **tier**: 'Free' | 'Standard' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventHubConsumerGroupInfoTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

