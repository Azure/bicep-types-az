# Microsoft.Devices @ 2020-08-01

## Resource Microsoft.Devices/IotHubs@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IotHubProperties](#iothubproperties)
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties)
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [EventHubConsumerGroupName](#eventhubconsumergroupname)
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/iotHubs/privateEndpointConnections@2020-08-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-08-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: 'Microsoft.Devices/iotHubs/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

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
* **locations**: [IotHubLocationDescription](#iothublocationdescription)[] (ReadOnly)
* **messagingEndpoints**: [IotHubPropertiesMessagingEndpoints](#iothubpropertiesmessagingendpoints)
* **minTlsVersion**: string
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
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

## IotHubLocationDescription
### Properties
* **location**: string
* **role**: 'primary' | 'secondary'

## IotHubPropertiesMessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpointProperties](#messagingendpointproperties)

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string (Required)
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (Required)

## RoutingProperties
### Properties
* **endpoints**: [RoutingEndpoints](#routingendpoints)
* **enrichments**: [EnrichmentProperties](#enrichmentproperties)[]
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
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusQueueEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingServiceBusTopicEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string
* **endpointUri**: string
* **entityPath**: string
* **id**: string
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## RoutingStorageContainerProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **batchFrequencyInSeconds**: int
* **connectionString**: string
* **containerName**: string (Required)
* **encoding**: 'Avro' | 'AvroDeflate' | 'JSON'
* **endpointUri**: string
* **fileNameFormat**: string
* **id**: string
* **maxChunkSizeInBytes**: int
* **name**: string (Required)
* **resourceGroup**: string
* **subscriptionId**: string

## EnrichmentProperties
### Properties
* **endpointNames**: string[] (Required)
* **key**: string (Required)
* **value**: string (Required)

## FallbackRouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'Invalid' | 'TwinChangeEvents' (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'Invalid' | 'TwinChangeEvents' (Required)

## IotHubPropertiesStorageEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [StorageEndpointProperties](#storageendpointproperties)

## StorageEndpointProperties
### Properties
* **authenticationType**: 'identityBased' | 'keyBased'
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **sasTtlAsIso8601**: string

## IotHubSkuInfo
### Properties
* **capacity**: int
* **name**: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3' (Required)
* **tier**: 'Basic' | 'Free' | 'Standard' (ReadOnly)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **certificate**: string
* **created**: string (ReadOnly)
* **expiry**: string (ReadOnly)
* **isVerified**: bool (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **updated**: string (ReadOnly)

## EventHubConsumerGroupName
### Properties
* **name**: string (WriteOnly)

