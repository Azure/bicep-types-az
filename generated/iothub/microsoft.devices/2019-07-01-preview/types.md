# Microsoft.Devices @ 2019-07-01-preview

## Resource Microsoft.Devices/IotHubs@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IotHubProperties](#iothubproperties)
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2019-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant)

## IotHubProperties
### Properties
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[]
* **cloudToDevice**: [CloudToDeviceProperties](#cloudtodeviceproperties)
* **comments**: string
* **deviceStreams**: [schemas:8_deviceStreams](#schemas8devicestreams)
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: [Dictionary<string,EventHubProperties>](#dictionarystringeventhubproperties)
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]
* **locations**: [IotHubLocationDescription](#iothublocationdescription)[] (ReadOnly)
* **messagingEndpoints**: [Dictionary<string,MessagingEndpointProperties>](#dictionarystringmessagingendpointproperties)
* **provisioningState**: string (ReadOnly)
* **routing**: [RoutingProperties](#routingproperties)
* **state**: string (ReadOnly)
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

## schemas:8_deviceStreams
### Properties
* **streamingEndpoints**: string[]

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

## IotHubLocationDescription
### Properties
* **location**: string
* **role**: 'primary' | 'secondary'

## Dictionary<string,MessagingEndpointProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpointProperties](#messagingendpointproperties)

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

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
* **encoding**: 'Avro' | 'AvroDeflate' | 'JSON'
* **fileNameFormat**: string
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
* **source**: string (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'DigitalTwinChangeEvents' | 'Invalid' | 'TwinChangeEvents' (Required)

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
* **capacity**: int
* **name**: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3' (Required)
* **tier**: 'Basic' | 'Free' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CertificateProperties
### Properties
* **certificate**: string (ReadOnly)
* **created**: string (ReadOnly)
* **expiry**: string (ReadOnly)
* **isVerified**: bool (ReadOnly)
* **subject**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **updated**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

