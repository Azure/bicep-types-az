# Microsoft.Devices @ 2017-01-19

## Resource Microsoft.Devices/IotHubs@2017-01-19
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-01-19' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IotHubProperties
* **resourcegroup**: string (Required)
* **sku**: IotHubSkuInfo (Required)
* **subscriptionid**: string (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant)

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
* **messagingEndpoints**: Dictionary<string,MessagingEndpointProperties>
* **operationsMonitoringProperties**: OperationsMonitoringProperties
* **provisioningState**: string (ReadOnly)
* **routing**: RoutingProperties
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

## Dictionary<string,MessagingEndpointProperties>
### Additional Properties
* **Additional Properties Type**: MessagingEndpointProperties

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string
* **maxDeliveryCount**: int
* **ttlAsIso8601**: string

## OperationsMonitoringProperties
### Properties
* **events**: Dictionary<string,OperationMonitoringLevel>

## Dictionary<string,OperationMonitoringLevel>
### Additional Properties
* **Additional Properties Type**: 'Error, Information' | 'Error' | 'Information' | 'None'

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

## FallbackRouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **source**: string (Required)

## RouteProperties
### Properties
* **condition**: string
* **endpointNames**: string[] (Required)
* **isEnabled**: bool (Required)
* **name**: string (Required)
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'TwinChangeEvents' (Required)

## Dictionary<string,StorageEndpointProperties>
### Additional Properties
* **Additional Properties Type**: StorageEndpointProperties

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
### Additional Properties
* **Additional Properties Type**: string

