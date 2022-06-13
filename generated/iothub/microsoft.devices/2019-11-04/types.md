# Microsoft.Devices @ 2019-11-04

## Resource Microsoft.Devices/IotHubs@2019-11-04
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-04' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotHubProperties](#iothubproperties): IotHub properties
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required): IotHub SKU info
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/IotHubs/certificates@2019-11-04
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-04' (ReadOnly, DeployTimeConstant): The resource api version
* **certificate**: string (WriteOnly): base-64 representation of the X509 leaf certificate .cer file or just .pem file content.
* **etag**: string (ReadOnly): The entity tag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CertificateProperties](#certificateproperties) (ReadOnly): The description of an X509 CA Certificate.
* **type**: 'Microsoft.Devices/IotHubs/certificates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2019-11-04
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-04' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EventHubConsumerGroupInfoProperties](#eventhubconsumergroupinfoproperties) (ReadOnly): The tags.
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listkeys (Microsoft.Devices/IotHubs@2019-11-04)
* **Resource**: Microsoft.Devices/IotHubs
* **ApiVersion**: 2019-11-04
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function listkeys (Microsoft.Devices/IotHubs/IotHubKeys@2019-11-04)
* **Resource**: Microsoft.Devices/IotHubs/IotHubKeys
* **ApiVersion**: 2019-11-04
* **Output**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)

## CertificateProperties
### Properties
* **certificate**: string (ReadOnly): The certificate content
* **created**: string (ReadOnly): The certificate's create date and time.
* **expiry**: string (ReadOnly): The certificate's expiration date and time.
* **isVerified**: bool (ReadOnly): Determines whether certificate has been verified.
* **subject**: string (ReadOnly): The certificate's subject name.
* **thumbprint**: string (ReadOnly): The certificate's thumbprint.
* **updated**: string (ReadOnly): The certificate's last update date and time.

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: string: The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **feedback**: [FeedbackProperties](#feedbackproperties): The properties of the feedback queue for cloud-to-device messages.
* **maxDeliveryCount**: int: The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

## EnrichmentProperties
### Properties
* **endpointNames**: string[] (Required): The list of endpoints for which the enrichment is applied to the message.
* **key**: string (Required): The key or name for the enrichment property.
* **value**: string (Required): The value for the enrichment property.

## EventHubConsumerGroupInfoProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventHubProperties
### Properties
* **endpoint**: string (ReadOnly): The Event Hub-compatible endpoint.
* **partitionCount**: int: The number of partitions for receiving device-to-cloud messages in the Event Hub-compatible endpoint. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages.
* **partitionIds**: string[] (ReadOnly): The partition ids in the Event Hub-compatible endpoint.
* **path**: string (ReadOnly): The Event Hub-compatible name.
* **retentionTimeInDays**: int: The retention time for device-to-cloud messages in days. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#device-to-cloud-messages

## FallbackRouteProperties
### Properties
* **condition**: string: The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
* **endpointNames**: string[] (Required): The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed.
* **isEnabled**: bool (Required): Used to specify whether the fallback route is enabled.
* **name**: string: The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'Invalid' | 'TwinChangeEvents' | string (Required): The source to which the routing rule is to be applied to. For example, DeviceMessages

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: string: The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **maxDeliveryCount**: int: The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **ttlAsIso8601**: string: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

## IotHubLocationDescription
### Properties
* **location**: string: The name of the Azure region
* **role**: 'primary' | 'secondary' | string: The role of the region, can be either primary or secondary. The primary region is where the IoT hub is currently provisioned. The secondary region is the Azure disaster recovery (DR) paired region and also the region where the IoT hub can failover to.

## IotHubProperties
### Properties
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[]: The shared access policies you can use to secure a connection to the IoT hub.
* **cloudToDevice**: [CloudToDeviceProperties](#cloudtodeviceproperties): The IoT hub cloud-to-device messaging properties.
* **comments**: string: IoT hub comments.
* **enableFileUploadNotifications**: bool: If True, file upload notifications are enabled.
* **eventHubEndpoints**: [IotHubPropertiesEventHubEndpoints](#iothubpropertieseventhubendpoints): The Event Hub-compatible endpoint properties. The only possible keys to this dictionary is events. This key has to be present in the dictionary while making create or update calls for the IoT hub.
* **features**: 'DeviceManagement' | 'None' | string: The capabilities and features enabled for the IoT hub.
* **hostName**: string (ReadOnly): The name of the host.
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]: The IP filter rules.
* **locations**: [IotHubLocationDescription](#iothublocationdescription)[] (ReadOnly): Primary and secondary location for iot hub
* **messagingEndpoints**: [IotHubPropertiesMessagingEndpoints](#iothubpropertiesmessagingendpoints): The messaging endpoint properties for the file upload notification queue.
* **provisioningState**: string (ReadOnly): The provisioning state.
* **routing**: [RoutingProperties](#routingproperties): The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging
* **state**: string (ReadOnly): The hub state.
* **storageEndpoints**: [IotHubPropertiesStorageEndpoints](#iothubpropertiesstorageendpoints): The list of Azure Storage endpoints where you can upload files. Currently you can configure only one Azure Storage account and that MUST have its key as $default. Specifying more than one storage account causes an error to be thrown. Not specifying a value for this property when the enableFileUploadNotifications property is set to True, causes an error to be thrown.

## IotHubPropertiesEventHubEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [EventHubProperties](#eventhubproperties)

## IotHubPropertiesMessagingEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [MessagingEndpointProperties](#messagingendpointproperties)

## IotHubPropertiesStorageEndpoints
### Properties
### Additional Properties
* **Additional Properties Type**: [StorageEndpointProperties](#storageendpointproperties)

## IotHubSkuInfo
### Properties
* **capacity**: int: The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
* **name**: 'B1' | 'B2' | 'B3' | 'F1' | 'S1' | 'S2' | 'S3' | string (Required): The name of the SKU.
* **tier**: 'Basic' | 'Free' | 'Standard' (ReadOnly): The billing tier for the IoT hub.

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required): The desired action for requests captured by this rule.
* **filterName**: string (Required): The name of the IP filter rule.
* **ipMask**: string (Required): A string that contains the IP address range in CIDR notation for the rule.

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string: The lock duration. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
* **maxDeliveryCount**: int: The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.
* **ttlAsIso8601**: string: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RouteProperties
### Properties
* **condition**: string: The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, see: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language
* **endpointNames**: string[] (Required): The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed.
* **isEnabled**: bool (Required): Used to specify whether a route is enabled.
* **name**: string (Required): The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters, and must be unique.
* **source**: 'DeviceJobLifecycleEvents' | 'DeviceLifecycleEvents' | 'DeviceMessages' | 'Invalid' | 'TwinChangeEvents' | string (Required): The source that the routing rule is to be applied to, such as DeviceMessages.

## RoutingEndpoints
### Properties
* **eventHubs**: [RoutingEventHubProperties](#routingeventhubproperties)[]: The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint.
* **serviceBusQueues**: [RoutingServiceBusQueueEndpointProperties](#routingservicebusqueueendpointproperties)[]: The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules.
* **serviceBusTopics**: [RoutingServiceBusTopicEndpointProperties](#routingservicebustopicendpointproperties)[]: The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules.
* **storageContainers**: [RoutingStorageContainerProperties](#routingstoragecontainerproperties)[]: The list of storage container endpoints that IoT hub routes messages to, based on the routing rules.

## RoutingEventHubProperties
### Properties
* **connectionString**: string (Required): The connection string of the event hub endpoint.
* **name**: string (Required): The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
* **resourceGroup**: string: The name of the resource group of the event hub endpoint.
* **subscriptionId**: string: The subscription identifier of the event hub endpoint.

## RoutingProperties
### Properties
* **endpoints**: [RoutingEndpoints](#routingendpoints): The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.
* **enrichments**: [EnrichmentProperties](#enrichmentproperties)[]: The list of user-provided enrichments that the IoT hub applies to messages to be delivered to built-in and custom endpoints. See: https://aka.ms/telemetryoneventgrid
* **fallbackRoute**: [FallbackRouteProperties](#fallbackrouteproperties): The properties of the route that is used as a fall-back route when none of the conditions specified in the 'routes' section are met. This is an optional parameter. When this property is not set, the messages which do not meet any of the conditions specified in the 'routes' section get routed to the built-in eventhub endpoint.
* **routes**: [RouteProperties](#routeproperties)[]: The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs.

## RoutingServiceBusQueueEndpointProperties
### Properties
* **connectionString**: string (Required): The connection string of the service bus queue endpoint.
* **name**: string (Required): The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name.
* **resourceGroup**: string: The name of the resource group of the service bus queue endpoint.
* **subscriptionId**: string: The subscription identifier of the service bus queue endpoint.

## RoutingServiceBusTopicEndpointProperties
### Properties
* **connectionString**: string (Required): The connection string of the service bus topic endpoint.
* **name**: string (Required): The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name.
* **resourceGroup**: string: The name of the resource group of the service bus topic endpoint.
* **subscriptionId**: string: The subscription identifier of the service bus topic endpoint.

## RoutingStorageContainerProperties
### Properties
* **batchFrequencyInSeconds**: int: Time interval at which blobs are written to storage. Value should be between 60 and 720 seconds. Default value is 300 seconds.
* **connectionString**: string (Required): The connection string of the storage account.
* **containerName**: string (Required): The name of storage container in the storage account.
* **encoding**: 'Avro' | 'AvroDeflate' | 'JSON' | string: Encoding that is used to serialize messages to blobs. Supported values are 'avro', 'avrodeflate', and 'JSON'. Default value is 'avro'.
* **fileNameFormat**: string: File name format for the blob. Default format is {iothub}/{partition}/{YYYY}/{MM}/{DD}/{HH}/{mm}. All parameters are mandatory but can be reordered.
* **maxChunkSizeInBytes**: int: Maximum number of bytes for each blob written to storage. Value should be between 10485760(10MB) and 524288000(500MB). Default value is 314572800(300MB).
* **name**: string (Required): The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.
* **resourceGroup**: string: The name of the resource group of the storage account.
* **subscriptionId**: string: The subscription identifier of the storage account.

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required): The name of the shared access policy.
* **primaryKey**: string: The primary key.
* **rights**: 'DeviceConnect' | 'RegistryRead' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryWrite' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'ServiceConnect' | 'ServiceConnect, DeviceConnect' (Required): The permissions assigned to the shared access policy.
* **secondaryKey**: string: The secondary key.

## SharedAccessSignatureAuthorizationRule
### Properties
* **keyName**: string (Required): The name of the shared access policy.
* **primaryKey**: string: The primary key.
* **rights**: 'DeviceConnect' | 'RegistryRead' | 'RegistryRead, DeviceConnect' | 'RegistryRead, RegistryWrite' | 'RegistryRead, RegistryWrite, DeviceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect' | 'RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect' | 'RegistryRead, ServiceConnect' | 'RegistryRead, ServiceConnect, DeviceConnect' | 'RegistryWrite' | 'RegistryWrite, DeviceConnect' | 'RegistryWrite, ServiceConnect' | 'RegistryWrite, ServiceConnect, DeviceConnect' | 'ServiceConnect' | 'ServiceConnect, DeviceConnect' (Required): The permissions assigned to the shared access policy.
* **secondaryKey**: string: The secondary key.

## SharedAccessSignatureAuthorizationRuleListResult
### Properties
* **nextLink**: string (ReadOnly): The next link.
* **value**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[] (ReadOnly): The list of shared access policies.

## StorageEndpointProperties
### Properties
* **connectionString**: string (Required): The connection string for the Azure Storage account to which files are uploaded.
* **containerName**: string (Required): The name of the root container where you upload files. The container need not exist but should be creatable using the connectionString specified.
* **sasTtlAsIso8601**: string: The period of time for which the SAS URI generated by IoT Hub for file upload is valid. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-file-upload#file-upload-notification-configuration-options.

