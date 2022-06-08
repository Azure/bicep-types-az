# Microsoft.Devices @ 2016-02-03

## Resource Microsoft.Devices/IotHubs@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IotHubProperties](#iothubproperties): The properties of an IoT hub.
* **resourcegroup**: string (Required): The name of the resource group that contains the IoT hub. A resource group name uniquely identifies the resource group within the subscription.
* **sku**: [IotHubSkuInfo](#iothubskuinfo) (Required): Information about the SKU of the IoT hub.
* **subscriptionid**: string (Required): The subscription identifier.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.Devices/IotHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2016-02-03
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-02-03' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **tags**: [EventHubConsumerGroupInfoTags](#eventhubconsumergroupinfotags) (ReadOnly): The tags.
* **type**: 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups' (ReadOnly, DeployTimeConstant): The resource type

## Function listkeys (Microsoft.Devices/IotHubs@2016-02-03)
* **Resource**: Microsoft.Devices/IotHubs
* **ApiVersion**: 2016-02-03
* **Output**: [SharedAccessSignatureAuthorizationRuleListResult](#sharedaccesssignatureauthorizationrulelistresult)

## Function listkeys (Microsoft.Devices/IotHubs/IotHubKeys@2016-02-03)
* **Resource**: Microsoft.Devices/IotHubs/IotHubKeys
* **ApiVersion**: 2016-02-03
* **Output**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)

## CloudToDeviceProperties
### Properties
* **defaultTtlAsIso8601**: string: The default time to live for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **feedback**: [FeedbackProperties](#feedbackproperties): The properties of the feedback queue for cloud-to-device messages.
* **maxDeliveryCount**: int: The max delivery count for cloud-to-device messages in the device queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

## EventHubConsumerGroupInfoTags
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

## FeedbackProperties
### Properties
* **lockDurationAsIso8601**: string: The lock duration for the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **maxDeliveryCount**: int: The number of times the IoT hub attempts to deliver a message on the feedback queue. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.
* **ttlAsIso8601**: string: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging#cloud-to-device-messages.

## IotHubProperties
### Properties
* **authorizationPolicies**: [SharedAccessSignatureAuthorizationRule](#sharedaccesssignatureauthorizationrule)[]: The shared access policies you can use to secure a connection to the IoT hub.
* **cloudToDevice**: [CloudToDeviceProperties](#cloudtodeviceproperties): The IoT hub cloud-to-device messaging properties.
* **comments**: string: Comments.
* **enableFileUploadNotifications**: bool: If True, file upload notifications are enabled.
* **eventHubEndpoints**: [IotHubPropertiesEventHubEndpoints](#iothubpropertieseventhubendpoints): The Event Hub-compatible endpoint properties. The possible keys to this dictionary are events and operationsMonitoringEvents. Both of these keys have to be present in the dictionary while making create or update calls for the IoT hub.
* **features**: 'DeviceManagement' | 'None' | string: The capabilities and features enabled for the IoT hub.
* **hostName**: string (ReadOnly): The name of the host.
* **ipFilterRules**: [IpFilterRule](#ipfilterrule)[]: The IP filter rules.
* **messagingEndpoints**: [IotHubPropertiesMessagingEndpoints](#iothubpropertiesmessagingendpoints): The messaging endpoint properties for the file upload notification queue.
* **operationsMonitoringProperties**: [OperationsMonitoringProperties](#operationsmonitoringproperties): The operations monitoring properties for the IoT hub. The possible keys to the dictionary are Connections, DeviceTelemetry, C2DCommands, DeviceIdentityOperations, FileUploadOperations.
* **provisioningState**: string (ReadOnly): The provisioning state.
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
* **capacity**: int (Required): The number of provisioned IoT Hub units. See: https://docs.microsoft.com/azure/azure-subscription-service-limits#iot-hub-limits.
* **name**: 'F1' | 'S1' | 'S2' | 'S3' | string (Required): The name of the SKU.
* **tier**: 'Free' | 'Standard' (ReadOnly): The billing tier for the IoT hub.

## IpFilterRule
### Properties
* **action**: 'Accept' | 'Reject' (Required): The desired action for requests captured by this rule.
* **filterName**: string (Required): The name of the IP filter rule.
* **ipMask**: string (Required): A string that contains the IP address range in CIDR notation for the rule.

## MessagingEndpointProperties
### Properties
* **lockDurationAsIso8601**: string: The lock duration. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.
* **maxDeliveryCount**: int: The number of times the IoT hub attempts to deliver a message. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.
* **ttlAsIso8601**: string: The period of time for which a message is available to consume before it is expired by the IoT hub. See: https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-file-upload.

## OperationsMonitoringProperties
### Properties
* **events**: [OperationsMonitoringPropertiesEvents](#operationsmonitoringpropertiesevents): Dictionary of <OperationMonitoringLevel>

## OperationsMonitoringPropertiesEvents
### Properties
### Additional Properties
* **Additional Properties Type**: 'Error' | 'Error, Information' | 'Information' | 'None' | string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

