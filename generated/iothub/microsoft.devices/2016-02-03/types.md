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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant)

## IotHubProperties
### Properties
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[]
* **cloudToDevice**: [CloudToDeviceProperties](#cloudtodeviceproperties)
* **comments**: string
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: [Dictionary<string,EventHubProperties>](#dictionarystringeventhubproperties)
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]
* **messagingEndpoints**: [Dictionary<string,MessagingEndpointProperties>](#dictionarystringmessagingendpointproperties)
* **operationsMonitoringProperties**: [OperationsMonitoringProperties](#operationsmonitoringproperties)
* **provisioningState**: string (ReadOnly)
* **storageEndpoints**: [Dictionary<string,StorageEndpointProperties>](#dictionarystringstorageendpointproperties)

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite' | 'ServiceConnect, DeviceConnect' | 'ServiceConnect' (Required)
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

## Dictionary<string,EventHubProperties>
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

## Dictionary<string,MessagingEndpointProperties>
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
* **events**: [Dictionary<string,OperationMonitoringLevel>](#dictionarystringoperationmonitoringlevel)

## Dictionary<string,OperationMonitoringLevel>
### Properties
### Additional Properties
* **Additional Properties Type**: 'Error, Information' | 'Error' | 'Information' | 'None'

## Dictionary<string,StorageEndpointProperties>
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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

