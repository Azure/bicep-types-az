# Microsoft.Devices @ 2018-01-22

## Resource Microsoft.Devices/IotHubs@2018-01-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-22' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IotHubProperties](#iothubproperties)
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2018-01-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-22' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2018-01-22
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-01-22' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventHubConsumerGroupInfoProperties](#eventhubconsumergroupinfoproperties) (ReadOnly)
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
* **routing**: [RoutingProperties](#routingproperties)
* **state**: string (ReadOnly)
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

## RoutingProperties
### Properties
* **endpoints**: [RoutingEndpoints](#routingendpoints)
* **fallbackRoute**: [FallbackRouteProperties](#fallbackrouteproperties)
* **routes**: [RouteProperties](#routeproperties)[]

## RoutingEndpoints
### Properties
* **eventHubs**: [RoutingEventHubProperties](#routingeventhubproperties)[]
* **serviceBusQueues**: [RoutingServiceBusQueueEndpointProperties](#routingservicebusqueueendpointproperties)[]
* **serviceBusTopics**: [RoutingServiceBusTopicEndpointProperties](#routingservicebustopicendpointproperties)[]
* **storageContainers**: [RoutingStorageContainerProperties](#routingstoragecontainerproperties)[]

## RoutingEventHubProperties
### Properties
* **connectionString**: string (Required)
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusQueueEndpointProperties
### Properties
* **connectionString**: string (Required)
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusTopicEndpointProperties
### Properties
* **connectionString**: string (Required)
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingStorageContainerProperties
### Properties
* **batchFrequencyInSeconds**: int
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **encoding**: string
* **fileNameFormat**: string
* **maxChunkSizeInBytes**: int
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## FallbackRouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'TwinChangeEvents' (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'TwinChangeEvents' (Required)

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
* **capacity**: int
* **name**: 'F1' | 'S1' | 'S2' | 'S3' (Required)
* **tier**: 'Free' | 'Standard' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **created**: string (ReadOnly)
* **expiry**: string (ReadOnly)
* **isVerified**: bool (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **updated**: string (ReadOnly)

## EventHubConsumerGroupInfoProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

