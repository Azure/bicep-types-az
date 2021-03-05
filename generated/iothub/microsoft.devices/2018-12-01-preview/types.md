# Microsoft.Devices @ 2018-12-01-preview

## Resource Microsoft.Devices/IotHubs@2018-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-12-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotHubProperties
* **sku**: IotHubSkuInfo (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2018-12-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-12-01-preview' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## IotHubProperties
### Properties
* **authorizationPolicies**: SharedAccessSignatureAuthorizationRule[]
* **cloudToDevice**: CloudToDeviceProperties
* **comments**: string
* **deviceStreams**: IotHubPropertiesDeviceStreams
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: IotHubPropertiesEventHubEndpoints
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: IpFilterRule[]
* **locations**: IotHubLocationDescription[]
* **messagingEndpoints**: IotHubPropertiesMessagingEndpoints
* **provisioningState**: string (ReadOnly)
* **routing**: RoutingProperties
* **state**: string (ReadOnly)
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

## IotHubPropertiesDeviceStreams
### Properties
* **streamingEndpoints**: string[]

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

## IotHubLocationDescription
### Properties
* **location**: string
* **role**: 'primary' | 'secondary'

## IotHubPropertiesMessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: MessagingEndpointProperties

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: any
* **maxDeliveryCount**: int
* **ttlAsIso8601**: any

## RoutingProperties
### Properties
* **endpoints**: RoutingEndpoints
* **fallbackRoute**: FallbackRouteProperties
* **routes**: RouteProperties[]

## RoutingEndpoints
### Properties
* **eventHubs**: RoutingEventHubProperties[]
* **serviceBusQueues**: RoutingServiceBusQueueEndpointProperties[]
* **serviceBusTopics**: RoutingServiceBusTopicEndpointProperties[]
* **storageContainers**: RoutingStorageContainerProperties[]

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
* **Additional Properties Type**: StorageEndpointProperties

## StorageEndpointProperties
### Properties
* **connectionString**: string (Required)
* **containerName**: string (Required)
* **sasTtlAsIso8601**: any

## IotHubSkuInfo
### Properties
* **capacity**: int
* **name**: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3' (Required)

## ResourceTags
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

