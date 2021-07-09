# Microsoft.DataBoxEdge @ 2020-05-01-preview

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag for the devices.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataBoxEdgeDeviceProperties](#databoxedgedeviceproperties): The properties of the Data Box Edge/Gateway device.
* **sku**: [Sku](#sku): The SKU type.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BandwidthScheduleProperties](#bandwidthscheduleproperties) (Required): The properties of the bandwidth schedule.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties): Order properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant): The resource type
### IOT
#### Properties
* **kind**: 'IOT' (Required): Compute role.
* **properties**: [IoTRoleProperties](#iotroleproperties): IoT role properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareProperties](#shareproperties) (Required): The share properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required): The storage account credential properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountProperties](#storageaccountproperties) (Required): The storage account properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerProperties](#containerproperties) (Required): The container properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant): The resource type
### FileEvent
#### Properties
* **kind**: 'FileEvent' (Required): Trigger details.
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required): File trigger properties.

### PeriodicTimerEvent
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required): Trigger details.
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required): Periodic timer trigger properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): The user properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant): The resource type

## DataBoxEdgeDeviceProperties
### Properties
* **configuredRoleTypes**: 'ASA' | 'Cognitive' | 'Functions' | 'IOT'[] (ReadOnly): Type of compute roles configured.
* **culture**: string (ReadOnly): The Data Box Edge/Gateway device culture.
* **dataBoxEdgeDeviceStatus**: 'Disconnected' | 'Maintenance' | 'NeedsAttention' | 'Offline' | 'Online' | 'PartiallyDisconnected' | 'ReadyToSetup': The status of the Data Box Edge/Gateway device.
* **description**: string: The Description of the Data Box Edge/Gateway device.
* **deviceHcsVersion**: string (ReadOnly): The device software version number of the device (eg: 1.2.18105.6).
* **deviceLocalCapacity**: int (ReadOnly): The Data Box Edge/Gateway device local capacity in MB.
* **deviceModel**: string (ReadOnly): The Data Box Edge/Gateway device model.
* **deviceSoftwareVersion**: string (ReadOnly): The Data Box Edge/Gateway device software version.
* **deviceType**: 'DataBoxEdgeDevice' (ReadOnly): The type of the Data Box Edge/Gateway device.
* **friendlyName**: string: The Data Box Edge/Gateway device name.
* **modelDescription**: string: The description of the Data Box Edge/Gateway device model.
* **nodeCount**: int (ReadOnly): The number of nodes in the cluster.
* **serialNumber**: string (ReadOnly): The Serial Number of Data Box Edge/Gateway device.
* **timeZone**: string (ReadOnly): The Data Box Edge/Gateway device timezone.

## Sku
### Properties
* **name**: 'Edge' | 'Gateway' | 'GPU' | 'TCA_Large' | 'TCA_Small' | 'TDC' | 'TEA_1Node_Heater' | 'TEA_1Node_UPS_Heater' | 'TEA_1Node_UPS' | 'TEA_1Node' | 'TEA_4Node_Heater' | 'TEA_4Node_UPS_Heater' | 'TMA': SKU name.
* **tier**: 'Standard': The SKU tier. This is based on the SKU name.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BandwidthScheduleProperties
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required): The days of the week when this schedule is applicable.
* **rateInMbps**: int (Required): The bandwidth rate in Mbps.
* **start**: string (Required): The start time of the schedule in UTC.
* **stop**: string (Required): The stop time of the schedule in UTC.

## OrderProperties
### Properties
* **contactInformation**: [ContactDetails](#contactdetails) (Required): Contains all the contact details of the customer.
* **currentStatus**: [OrderStatus](#orderstatus): Represents a single status change.
* **deliveryTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package delivered to the customer whether it has an original or a replacement device.
* **orderHistory**: [OrderStatus](#orderstatus)[] (ReadOnly): List of status changes in the order.
* **returnTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package returned from the customer whether it has an original or a replacement device.
* **serialNumber**: string (ReadOnly): Serial number of the device.
* **shippingAddress**: [Address](#address) (Required): The shipping address of the customer.

## ContactDetails
### Properties
* **companyName**: string (Required): The name of the company.
* **contactPerson**: string (Required): The contact person name.
* **emailList**: string[] (Required): The email list.
* **phone**: string (Required): The phone number.

## OrderStatus
### Properties
* **additionalOrderDetails**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Dictionary to hold generic information which is not stored
by the already existing properties
* **comments**: string: Comments related to this status change.
* **status**: 'Arriving' | 'AwaitingFulfilment' | 'AwaitingPreparation' | 'AwaitingReturnShipment' | 'AwaitingShipment' | 'CollectedAtMicrosoft' | 'Declined' | 'Delivered' | 'LostDevice' | 'ReplacementRequested' | 'ReturnInitiated' | 'Shipped' | 'ShippedBack' | 'Untracked' (Required): Status of the order as per the allowed status types.
* **updateDateTime**: string (ReadOnly): Time of status update.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackingInfo
### Properties
* **carrierName**: string: Name of the carrier used in the delivery.
* **serialNumber**: string: Serial number of the device being tracked.
* **trackingId**: string: Tracking ID of the shipment.
* **trackingUrl**: string: Tracking URL of the shipment.

## Address
### Properties
* **addressLine1**: string (Required): The address line1.
* **addressLine2**: string: The address line2.
* **addressLine3**: string: The address line3.
* **city**: string (Required): The city name.
* **country**: string (Required): The country name.
* **postalCode**: string (Required): The postal code.
* **state**: string (Required): The state name.

## IOT
### Properties
* **kind**: 'IOT' (Required): Compute role.
* **properties**: [IoTRoleProperties](#iotroleproperties): IoT role properties.

## IoTRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (Required): Host OS supported by the IoT role.
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly): Platform where the Iot runtime is hosted.
* **ioTDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **ioTEdgeAgentInfo**: [IoTEdgeAgentInfo](#iotedgeagentinfo): IoT edge agent details is optional, this will be used for download system Agent module while bootstrapping IoT Role if specified.
* **ioTEdgeDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): Metadata of IoT device/IoT Edge device to be configured.
* **roleStatus**: 'Disabled' | 'Enabled' (Required): Role status.
* **shareMappings**: [MountPointMap](#mountpointmap)[]: Mount points of shares in role(s).

## IoTDeviceInfo
### Properties
* **authentication**: [Authentication](#authentication): Authentication mechanism for IoT devices.
* **deviceId**: string (Required): ID of the IoT device/edge device.
* **ioTHostHub**: string (Required): Host name for the IoT hub associated to the device.
* **ioTHostHubId**: string: Id for the IoT hub associated to the device.

## Authentication
### Properties
* **symmetricKey**: [SymmetricKey](#symmetrickey): Symmetric key for authentication.

## SymmetricKey
### Properties
* **connectionString**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required): The algorithm used to encrypt "Value".
* **encryptionCertThumbprint**: string: Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
* **value**: string (Required): The value of the secret.

## IoTEdgeAgentInfo
### Properties
* **imageName**: string (Required): Name of the IoT edge agent image.
* **imageRepository**: [ImageRepositoryCredential](#imagerepositorycredential): Image repository credential.
* **tag**: string (Required): Image Tag.

## ImageRepositoryCredential
### Properties
* **imageRepositoryUrl**: string (Required): Image repository url (e.g.: mcr.microsoft.com).
* **password**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **userName**: string (Required): Repository user name.

## MountPointMap
### Properties
* **mountPoint**: string (ReadOnly): Mount point for the share.
* **mountType**: 'HostPath' | 'Volume' (ReadOnly): Mounting type.
* **roleId**: string (ReadOnly): ID of the role to which share is mounted.
* **roleType**: 'ASA' | 'Cognitive' | 'Functions' | 'IOT' (ReadOnly): Role type.
* **shareId**: string (Required): ID of the share mounted to the role VM.

## ShareProperties
### Properties
* **accessProtocol**: 'NFS' | 'SMB' (Required): Access protocol to be used by the share.
* **azureContainerInfo**: [AzureContainerInfo](#azurecontainerinfo): Azure container mapping of the endpoint.
* **clientAccessRights**: [ClientAccessRight](#clientaccessright)[]: List of IP addresses and corresponding access rights on the share(required for NFS protocol).
* **dataPolicy**: 'Cloud' | 'Local': Data policy of the share.
* **description**: string: Description for the share.
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required): Current monitoring status of the share.
* **refreshDetails**: [RefreshDetails](#refreshdetails): Fields for tracking refresh job on the share or container.
* **shareMappings**: [MountPointMap](#mountpointmap)[] (ReadOnly): Share mount point to the role.
* **shareStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating' (Required): Current status of the share.
* **userAccessRights**: [UserAccessRight](#useraccessright)[]: Mapping of users and corresponding access rights on the share (required for SMB protocol).

## AzureContainerInfo
### Properties
* **containerName**: string (Required): Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required): Storage format used for the file represented by the share.
* **storageAccountCredentialId**: string (Required): ID of the storage account credential used to access storage.

## ClientAccessRight
### Properties
* **accessPermission**: 'NoAccess' | 'ReadOnly' | 'ReadWrite' (Required): Type of access to be allowed for the client.
* **client**: string (Required): IP of the client.

## RefreshDetails
### Properties
* **errorManifestFile**: string: Indicates the relative path of the error xml for the last refresh job on this particular share or container, if any. This could be a failed job or a successful job.
* **inProgressRefreshJobId**: string: If a refresh job is currently in progress on this share or container, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
* **lastCompletedRefreshJobTimeInUTC**: string: Indicates the completed time for the last refresh job on this particular share or container, if any.This could be a failed job or a successful job.
* **lastJob**: string: Indicates the id of the last refresh job on this particular share or container,if any. This could be a failed job or a successful job.

## UserAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required): Type of access to be allowed for the user.
* **userId**: string (Required): User ID (already existing in the device).

## StorageAccountCredentialProperties
### Properties
* **accountKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **accountType**: 'BlobStorage' | 'GeneralPurposeStorage' (Required): Type of storage accessed on the storage account.
* **alias**: string (Required): Alias for the storage account.
* **blobDomainName**: string: Blob end point for private clouds.
* **connectionString**: string: Connection string for the storage account. Use this string if username and account key are not specified.
* **sslStatus**: 'Disabled' | 'Enabled' (Required): Signifies whether SSL needs to be enabled or not.
* **storageAccountId**: string: Id of the storage account.
* **userName**: string: Username for the storage account.

## StorageAccountProperties
### Properties
* **blobEndpoint**: string (ReadOnly): BlobEndpoint of Storage Account
* **containerCount**: int (ReadOnly): The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
* **dataPolicy**: 'Cloud' | 'Local': Data policy of the storage Account.
* **description**: string: Description for the storage Account.
* **storageAccountCredentialId**: string: Storage Account Credential Id
* **storageAccountStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating': Current status of the storage account.

## ContainerProperties
### Properties
* **containerStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating' (ReadOnly): Current status of the container.
* **createdDateTime**: string (ReadOnly): The UTC time when container got created.
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required): DataFormat for Container.
* **refreshDetails**: [RefreshDetails](#refreshdetails) (ReadOnly): Fields for tracking refresh job on the share or container.

## FileEvent
### Properties
* **kind**: 'FileEvent' (Required): Trigger details.
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required): File trigger properties.

## FileTriggerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Compute role against which events will be raised.
* **sourceInfo**: [FileSourceInfo](#filesourceinfo) (Required): File source details.

## RoleSinkInfo
### Properties
* **roleId**: string (Required): Compute role ID.

## FileSourceInfo
### Properties
* **shareId**: string (Required): File share ID.

## PeriodicTimerEvent
### Properties
* **kind**: 'PeriodicTimerEvent' (Required): Trigger details.
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required): Periodic timer trigger properties.

## PeriodicTimerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Compute role against which events will be raised.
* **sourceInfo**: [PeriodicTimerSourceInfo](#periodictimersourceinfo) (Required): Periodic timer event source.

## PeriodicTimerSourceInfo
### Properties
* **schedule**: string (Required): Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
* **startTime**: string (Required): The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified upto seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
* **topic**: string: Topic where periodic events are published to IoT device.

## UserProperties
### Properties
* **encryptedPassword**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Represent the secrets intended for encryption with asymmetric key pair.
* **shareAccessRights**: [ShareAccessRight](#shareaccessright)[] (ReadOnly): List of shares that the user has rights on. This field should not be specified during user creation.
* **userType**: 'ARM' | 'LocalManagement' | 'Share' (Required): Type of the user.

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required): Type of access to be allowed on the share for this user.
* **shareId**: string (Required): The share ID.

