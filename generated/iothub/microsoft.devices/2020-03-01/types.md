# Microsoft.Devices @ 2020-03-01

## Resource Microsoft.Devices/IotHubs@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotHubProperties
* **sku**: IotHubSkuInfo (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/IotHubs/certificates@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **certificate**: string (WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CertificateProperties (ReadOnly)
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Devices/iotHubs/privateEndpointConnections@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: 'Microsoft.Devices/iotHubs/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Function listkeys (Microsoft.Devices/IotHubs@2020-03-01)
* **Resource**: Microsoft.Devices/IotHubs
* **ApiVersion**: 2020-03-01
* **Output**: SharedAccessSignatureAuthorizationRuleListResult

## IotHubProperties
### Properties
* **authorizationPolicies**: SharedAccessSignatureAuthorizationRule[]
* **cloudToDevice**: CloudToDeviceProperties
* **comments**: string
* **enableFileUploadNotifications**: bool
* **eventHubEndpoints**: Dictionary<string,EventHubProperties>
* **features**: 'DeviceManagement' | 'None'
* **hostName**: string (ReadOnly)
* **ipFilterRules**: IpFilterRule[]
* **locations**: IotHubLocationDescription[] (ReadOnly)
* **messagingEndpoints**: Dictionary<string,MessagingEndpointProperties>
* **minTlsVersion**: string
* **privateEndpointConnections**: PrivateEndpointConnection[]
* **provisioningState**: string (ReadOnly)
* **publicNetworkAccess**: 'Disabled' | 'Enabled'
* **routing**: RoutingProperties
* **state**: string (ReadOnly)
* **storageEndpoints**: Dictionary<string,StorageEndpointProperties>

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required)
* **primaryKey**: string
* **rights**: 'DeviceConnect' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite' | 'ServiceConnect, DeviceConnect' | 'ServiceConnect' (Required)
* **secondaryKey**: string

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: string
* **feedback**: FeedbackProperties
* **maxDeliveryCount**: int

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## Dictionary<string,EventHubProperties>
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
* **Additional Properties Type**: MessagingEndpointProperties

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties (Required)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)

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
* **endpoints**: RoutingEndpoints
* **enrichments**: EnrichmentProperties[]
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
* **source**: string (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'Invalid' | 'TwinChangeEvents' (Required)

## Dictionary<string,StorageEndpointProperties>
### Properties
### Additional Properties
* **Additional Properties Type**: StorageEndpointProperties

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

## SharedAccessSignatureAuthorizationRuleListResult
### Properties
* **nextLink**: string (ReadOnly)
* **value**: SharedAccessSignatureAuthorizationRule[] (ReadOnly)

