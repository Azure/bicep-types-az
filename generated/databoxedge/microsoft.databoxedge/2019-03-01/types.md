# Microsoft.DataBoxEdge @ 2019-03-01

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: The etag for the devices.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the device. This is a supported and registered Azure geographical region (for example, West US, East US, or Southeast Asia). The geographical region of a device cannot be changed once it is created, but if an identical geographical region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DataBoxEdgeDeviceProperties](#databoxedgedeviceproperties): The properties of the Data Box Edge/Gateway device.
* **sku**: [Sku](#sku): The SKU type.
* **tags**: [DataBoxEdgeDeviceTags](#databoxedgedevicetags): The list of tags that describe the device. These tags can be used to view and group this device (across resource groups).
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Properties of alert.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BandwidthScheduleProperties](#bandwidthscheduleproperties) (Required): The properties of the bandwidth schedule.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSettingsProperties](#networksettingsproperties) (ReadOnly): The properties of network settings of a device.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/networkSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [OrderProperties](#orderproperties): The order properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2019-03-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant): The resource type

### IoTRole
#### Properties
* **kind**: 'IOT' (Required): Role type.
* **properties**: [IoTRoleProperties](#iotroleproperties): Properties specific to IoT role.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareProperties](#shareproperties) (Required): The share properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required): The storage account credential properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2019-03-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant): The resource type

### FileEventTrigger
#### Properties
* **kind**: 'FileEvent' (Required): Trigger Kind.
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required): File trigger properties.

### PeriodicTimerEventTrigger
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required): Trigger Kind.
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required): Periodic timer trigger properties.


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateSummaryProperties](#updatesummaryproperties) (ReadOnly): The device update information summary.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/updateSummary' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserProperties](#userproperties) (Required): The storage account credential properties.
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant): The resource type

## Address
### Properties
* **addressLine1**: string (Required): The address line1.
* **addressLine2**: string: The address line2.
* **addressLine3**: string: The address line3.
* **city**: string (Required): The city name.
* **country**: string (Required): The country name.
* **postalCode**: string (Required): The postal code.
* **state**: string (Required): The state name.

## AlertErrorDetails
### Properties
* **errorCode**: string (ReadOnly): Error code.
* **errorMessage**: string (ReadOnly): Error Message.
* **occurrences**: int (ReadOnly): Number of occurrences.

## AlertProperties
### Properties
* **alertType**: string (ReadOnly): Alert type.
* **appearedAtDateTime**: string (ReadOnly): UTC time when the alert appeared.
* **detailedInformation**: [AlertPropertiesDetailedInformation](#alertpropertiesdetailedinformation) (ReadOnly): Alert details.
* **errorDetails**: [AlertErrorDetails](#alerterrordetails) (ReadOnly): Error details of the alert.
* **recommendation**: string (ReadOnly): Alert recommendation.
* **severity**: 'Critical' | 'Informational' | 'Warning' | string (ReadOnly): Severity of the alert.
* **title**: string (ReadOnly): Alert title.

## AlertPropertiesDetailedInformation
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' | string (Required): The algorithm used to encrypt "Value".
* **encryptionCertThumbprint**: string: Thumbprint certificate used to encrypt \"Value\". If the value is unencrypted, it will be null.
* **value**: string (Required): The value of the secret.

## Authentication
### Properties
* **symmetricKey**: [SymmetricKey](#symmetrickey): Symmetric key for authentication.

## AzureContainerInfo
### Properties
* **containerName**: string (Required): Container name (Based on the data format specified, this represents the name of Azure Files/Page blob/Block blob).
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' | string (Required): Storage format used for the file represented by the share.
* **storageAccountCredentialId**: string (Required): ID of the storage account credential used to access storage.

## BandwidthScheduleProperties
### Properties
* **days**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[] (Required): The days of the week when this schedule is applicable.
* **rateInMbps**: int (Required): The bandwidth rate in Mbps.
* **start**: string (Required): The start time of the schedule in UTC.
* **stop**: string (Required): The stop time of the schedule in UTC.

## ClientAccessRight
### Properties
* **accessPermission**: 'NoAccess' | 'ReadOnly' | 'ReadWrite' | string (Required): Type of access to be allowed for the client.
* **client**: string (Required): IP of the client.

## ContactDetails
### Properties
* **companyName**: string (Required): The name of the company.
* **contactPerson**: string (Required): The contact person name.
* **emailList**: string[] (Required): The email list.
* **phone**: string (Required): The phone number.

## DataBoxEdgeDeviceProperties
### Properties
* **configuredRoleTypes**: ('ASA' | 'Cognitive' | 'Functions' | 'IOT' | string)[] (ReadOnly): Type of compute roles configured.
* **culture**: string (ReadOnly): The Data Box Edge/Gateway device culture.
* **dataBoxEdgeDeviceStatus**: 'Disconnected' | 'NeedsAttention' | 'Offline' | 'Online' | 'PartiallyDisconnected' | 'ReadyToSetup' | string: The status of the Data Box Edge/Gateway device.
* **description**: string: The Description of the Data Box Edge/Gateway device.
* **deviceHcsVersion**: string (ReadOnly): The device software version number of the device (eg: 1.2.18105.6).
* **deviceLocalCapacity**: int (ReadOnly): The Data Box Edge/Gateway device local capacity in MB.
* **deviceModel**: string (ReadOnly): The Data Box Edge/Gateway device model.
* **deviceSoftwareVersion**: string (ReadOnly): The Data Box Edge/Gateway device software version.
* **deviceType**: 'DataBoxEdgeDevice' | string (ReadOnly): The type of the Data Box Edge/Gateway device.
* **friendlyName**: string: The Data Box Edge/Gateway device name.
* **modelDescription**: string: The description of the Data Box Edge/Gateway device model.
* **serialNumber**: string (ReadOnly): The Serial Number of Data Box Edge/Gateway device.
* **timeZone**: string (ReadOnly): The Data Box Edge/Gateway device timezone.

## DataBoxEdgeDeviceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## FileSourceInfo
### Properties
* **shareId**: string (Required): File share ID.

## FileTriggerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Role sink info.
* **sourceInfo**: [FileSourceInfo](#filesourceinfo) (Required): File event source details.

## IoTDeviceInfo
### Properties
* **authentication**: [Authentication](#authentication): IoT device authentication info.
* **deviceId**: string (Required): ID of the IoT device/edge device.
* **ioTHostHub**: string (Required): Host name for the IoT hub associated to the device.

## IoTRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' | string (Required): Host OS supported by the IoT role.
* **ioTDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): IoT device metadata to which data box edge device needs to be connected.
* **ioTEdgeDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required): IoT edge device to which the IoT role needs to be configured.
* **roleStatus**: 'Disabled' | 'Enabled' | string (Required): Role status.
* **shareMappings**: [MountPointMap](#mountpointmap)[]: Mount points of shares in role(s).

## Ipv4Config
### Properties
* **gateway**: string (ReadOnly): The IPv4 gateway of the network adapter.
* **ipAddress**: string (ReadOnly): The IPv4 address of the network adapter.
* **subnet**: string (ReadOnly): The IPv4 subnet of the network adapter.

## Ipv6Config
### Properties
* **gateway**: string (ReadOnly): The IPv6 gateway of the network adapter.
* **ipAddress**: string (ReadOnly): The IPv6 address of the network adapter.
* **prefixLength**: int (ReadOnly): The IPv6 prefix of the network adapter.

## MountPointMap
### Properties
* **mountPoint**: string (ReadOnly): Mount point for the share.
* **roleId**: string (ReadOnly): ID of the role to which share is mounted.
* **roleType**: 'ASA' | 'Cognitive' | 'Functions' | 'IOT' | string (ReadOnly): Role type.
* **shareId**: string (Required): ID of the share mounted to the role VM.

## NetworkAdapter
### Properties
* **adapterId**: string (ReadOnly): Instance ID of network adapter.
* **adapterPosition**: [NetworkAdapterPosition](#networkadapterposition) (ReadOnly): Hardware position of network adapter.
* **dhcpStatus**: 'Disabled' | 'Enabled' | string: Value indicating whether this adapter has DHCP enabled.
* **dnsServers**: string[] (ReadOnly): The list of DNS Servers of the device.
* **index**: int (ReadOnly): Logical index of the adapter.
* **ipv4Configuration**: [Ipv4Config](#ipv4config) (ReadOnly): The IPv4 configuration of the network adapter.
* **ipv6Configuration**: [Ipv6Config](#ipv6config) (ReadOnly): The IPv6 configuration of the network adapter.
* **ipv6LinkLocalAddress**: string (ReadOnly): The IPv6 local address.
* **label**: string (ReadOnly): Hardware label for the adapter.
* **linkSpeed**: int (ReadOnly): Link speed.
* **macAddress**: string (ReadOnly): MAC address.
* **networkAdapterName**: string (ReadOnly): Network adapter name.
* **nodeId**: string (ReadOnly): Node ID of the network adapter.
* **rdmaStatus**: 'Capable' | 'Incapable' | string: Value indicating whether this adapter is RDMA capable.
* **status**: 'Active' | 'Inactive' | string (ReadOnly): Value indicating whether this adapter is valid.

## NetworkAdapterPosition
### Properties
* **networkGroup**: 'NonRDMA' | 'None' | 'RDMA' | string (ReadOnly): The network group.
* **port**: int (ReadOnly): The port.

## NetworkSettingsProperties
### Properties
* **networkAdapters**: [NetworkAdapter](#networkadapter)[] (ReadOnly): The network adapter list on the device.

## OrderProperties
### Properties
* **contactInformation**: [ContactDetails](#contactdetails) (Required): The contact details.
* **currentStatus**: [OrderStatus](#orderstatus): Current status of the order.
* **deliveryTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package delivered to the customer whether it has an original or a replacement device.
* **orderHistory**: [OrderStatus](#orderstatus)[] (ReadOnly): List of status changes in the order.
* **returnTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly): Tracking information for the package returned from the customer whether it has an original or a replacement device.
* **serialNumber**: string (ReadOnly): Serial number of the device.
* **shippingAddress**: [Address](#address) (Required): The shipping address.

## OrderStatus
### Properties
* **comments**: string: Comments related to this status change.
* **status**: 'Arriving' | 'AwaitingFulfilment' | 'AwaitingPreparation' | 'AwaitingReturnShipment' | 'AwaitingShipment' | 'CollectedAtMicrosoft' | 'Declined' | 'Delivered' | 'LostDevice' | 'ReplacementRequested' | 'ReturnInitiated' | 'Shipped' | 'ShippedBack' | 'Untracked' | string (Required): Status of the order as per the allowed status types.
* **updateDateTime**: string (ReadOnly): Time of status update.

## PeriodicTimerProperties
### Properties
* **customContextTag**: string: A custom context tag typically used to correlate the trigger against its usage. For example, if a periodic timer trigger is intended for certain specific IoT modules in the device, the tag can be the name or the image URL of the module.
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required): Role Sink information.
* **sourceInfo**: [PeriodicTimerSourceInfo](#periodictimersourceinfo) (Required): Periodic timer details.

## PeriodicTimerSourceInfo
### Properties
* **schedule**: string (Required): Periodic frequency at which timer event needs to be raised. Supports daily, hourly, minutes, and seconds.
* **startTime**: string (Required): The time of the day that results in a valid trigger. Schedule is computed with reference to the time specified up to seconds. If timezone is not specified the time will considered to be in device timezone. The value will always be returned as UTC time.
* **topic**: string: Topic where periodic events are published to IoT device.

## RefreshDetails
### Properties
* **errorManifestFile**: string: Indicates the relative path of the error xml for the last refresh job on this particular share, if any. This could be a failed job or a successful job.
* **inProgressRefreshJobId**: string: If a refresh share job is currently in progress on this share, this field indicates the ARM resource ID of that job. The field is empty if no job is in progress.
* **lastCompletedRefreshJobTimeInUTC**: string: Indicates the completed time for the last refresh job on this particular share, if any.This could be a failed job or a successful job.
* **lastJob**: string: Indicates the id of the last refresh job on this particular share,if any. This could be a failed job or a successful job.

## RoleSinkInfo
### Properties
* **roleId**: string (Required): Compute role ID.

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' | string (Required): Type of access to be allowed on the share for this user.
* **shareId**: string (Required): The share ID.

## ShareProperties
### Properties
* **accessProtocol**: 'NFS' | 'SMB' | string (Required): Access protocol to be used by the share.
* **azureContainerInfo**: [AzureContainerInfo](#azurecontainerinfo): Azure container mapping for the share.
* **clientAccessRights**: [ClientAccessRight](#clientaccessright)[]: List of IP addresses and corresponding access rights on the share(required for NFS protocol).
* **dataPolicy**: 'Cloud' | 'Local' | string: Data policy of the share.
* **description**: string: Description for the share.
* **monitoringStatus**: 'Disabled' | 'Enabled' | string (Required): Current monitoring status of the share.
* **refreshDetails**: [RefreshDetails](#refreshdetails): Details of the refresh job on this share.
* **shareMappings**: [MountPointMap](#mountpointmap)[] (ReadOnly): Share mount point to the role.
* **shareStatus**: 'Offline' | 'Online' | string (Required): Current status of the share.
* **userAccessRights**: [UserAccessRight](#useraccessright)[]: Mapping of users and corresponding access rights on the share (required for SMB protocol).

## Sku
### Properties
* **name**: 'Edge' | 'Gateway' | string: SKU name.
* **tier**: 'Standard' | string: The SKU tier. This is based on the SKU name.

## StorageAccountCredentialProperties
### Properties
* **accountKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Encrypted storage key.
* **accountType**: 'BlobStorage' | 'GeneralPurposeStorage' | string (Required): Type of storage accessed on the storage account.
* **alias**: string (Required): Alias for the storage account.
* **blobDomainName**: string: Blob end point for private clouds.
* **connectionString**: string: Connection string for the storage account. Use this string if username and account key are not specified.
* **sslStatus**: 'Disabled' | 'Enabled' | string (Required): Signifies whether SSL needs to be enabled or not.
* **userName**: string: Username for the storage account.

## SymmetricKey
### Properties
* **connectionString**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): Connection string based on the symmetric key.

## TrackingInfo
### Properties
* **carrierName**: string: Name of the carrier used in the delivery.
* **serialNumber**: string: Serial number of the device being tracked.
* **trackingId**: string: Tracking ID of the shipment.
* **trackingUrl**: string: Tracking URL of the shipment.

## UpdateSummaryProperties
### Properties
* **deviceLastScannedDateTime**: string: The last time when a scan was done on the device.
* **deviceVersionNumber**: string: The current version of the device in format: 1.2.17312.13.",
* **friendlyDeviceVersionName**: string: The current version of the device in text format.
* **inProgressDownloadJobId**: string (ReadOnly): The job ID of the download job in progress.
* **inProgressDownloadJobStartedDateTime**: string (ReadOnly): The time when the currently running download (if any) started.
* **inProgressInstallJobId**: string (ReadOnly): The job ID of the install job in progress.
* **inProgressInstallJobStartedDateTime**: string (ReadOnly): The time when the currently running install (if any) started.
* **lastCompletedDownloadJobDateTime**: string (ReadOnly): The time when the last Download job was completed (success/cancelled/failed) on the appliance.
* **lastCompletedInstallJobDateTime**: string (ReadOnly): The time when the last Install job was completed (success/cancelled/failed) on the appliance.
* **lastCompletedScanJobDateTime**: string: The time when the last scan job was completed (success/cancelled/failed) on the appliance.
* **ongoingUpdateOperation**: 'Download' | 'Install' | 'None' | 'Scan' | string (ReadOnly): The current update operation.
* **rebootBehavior**: 'NeverReboots' | 'RequestReboot' | 'RequiresReboot' | string (ReadOnly): Indicates if updates are available and at least one of the updates needs a reboot.
* **totalNumberOfUpdatesAvailable**: int (ReadOnly): The number of updates available for the current device version as per the last device scan.
* **totalNumberOfUpdatesPendingDownload**: int (ReadOnly): The total number of items pending download.
* **totalNumberOfUpdatesPendingInstall**: int (ReadOnly): The total number of items pending install.
* **totalUpdateSizeInBytes**: int (ReadOnly): The total size of updates available for download in bytes.
* **updateTitles**: string[] (ReadOnly): The list of updates available for install.

## UserAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' | string (Required): Type of access to be allowed for the user.
* **userId**: string (Required): User ID (already existing in the device).

## UserProperties
### Properties
* **encryptedPassword**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret): The password details.
* **shareAccessRights**: [ShareAccessRight](#shareaccessright)[]: List of shares that the user has rights on. This field should not be specified during user creation.

