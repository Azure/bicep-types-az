# Microsoft.DataBoxEdge @ 2019-07-01

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DataBoxEdgeDeviceProperties](#databoxedgedeviceproperties)
* **sku**: [Sku](#sku)
* **tags**: [DataBoxEdgeDeviceTags](#databoxedgedevicetags)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BandwidthScheduleProperties](#bandwidthscheduleproperties) (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [OrderProperties](#orderproperties)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2019-07-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant)
### IoTRole
#### Properties
* **kind**: 'IOT' (Required)
* **properties**: [IoTRoleProperties](#iotroleproperties)


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ShareProperties](#shareproperties) (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountCredentialProperties](#storageaccountcredentialproperties) (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2019-07-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant)
### FileEventTrigger
#### Properties
* **kind**: 'FileEvent' (Required)
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required)

### PeriodicTimerEventTrigger
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required)
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required)


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2019-07-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [UserProperties](#userproperties) (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant)

## DataBoxEdgeDeviceProperties
### Properties
* **configuredRoleTypes**: 'ASA' | 'Cognitive' | 'Functions' | 'IOT'[] (ReadOnly)
* **culture**: string (ReadOnly)
* **dataBoxEdgeDeviceStatus**: 'Disconnected' | 'Maintenance' | 'NeedsAttention' | 'Offline' | 'Online' | 'PartiallyDisconnected' | 'ReadyToSetup'
* **description**: string
* **deviceHcsVersion**: string (ReadOnly)
* **deviceLocalCapacity**: int (ReadOnly)
* **deviceModel**: string (ReadOnly)
* **deviceSoftwareVersion**: string (ReadOnly)
* **deviceType**: 'DataBoxEdgeDevice' (ReadOnly)
* **friendlyName**: string
* **modelDescription**: string
* **nodeCount**: int (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **timeZone**: string (ReadOnly)

## Sku
### Properties
* **name**: 'Edge' | 'Gateway'
* **tier**: 'Standard'

## DataBoxEdgeDeviceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BandwidthScheduleProperties
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required)
* **rateInMbps**: int (Required)
* **start**: string (Required)
* **stop**: string (Required)

## OrderProperties
### Properties
* **contactInformation**: [ContactDetails](#contactdetails) (Required)
* **currentStatus**: [OrderStatus](#orderstatus)
* **deliveryTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly)
* **orderHistory**: [OrderStatus](#orderstatus)[] (ReadOnly)
* **returnTrackingInfo**: [TrackingInfo](#trackinginfo)[] (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **shippingAddress**: [Address](#address) (Required)

## ContactDetails
### Properties
* **companyName**: string (Required)
* **contactPerson**: string (Required)
* **emailList**: string[] (Required)
* **phone**: string (Required)

## OrderStatus
### Properties
* **comments**: string
* **status**: 'Arriving' | 'AwaitingFulfilment' | 'AwaitingPreparation' | 'AwaitingReturnShipment' | 'AwaitingShipment' | 'CollectedAtMicrosoft' | 'Declined' | 'Delivered' | 'LostDevice' | 'ReplacementRequested' | 'ReturnInitiated' | 'Shipped' | 'ShippedBack' | 'Untracked' (Required)
* **updateDateTime**: string (ReadOnly)

## TrackingInfo
### Properties
* **carrierName**: string
* **serialNumber**: string
* **trackingId**: string
* **trackingUrl**: string

## Address
### Properties
* **addressLine1**: string (Required)
* **addressLine2**: string
* **addressLine3**: string
* **city**: string (Required)
* **country**: string (Required)
* **postalCode**: string (Required)
* **state**: string (Required)

## IoTRole
### Properties
* **kind**: 'IOT' (Required)
* **properties**: [IoTRoleProperties](#iotroleproperties)

## IoTRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (Required)
* **ioTDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required)
* **ioTEdgeDeviceDetails**: [IoTDeviceInfo](#iotdeviceinfo) (Required)
* **roleStatus**: 'Disabled' | 'Enabled' (Required)
* **shareMappings**: [MountPointMap](#mountpointmap)[]

## IoTDeviceInfo
### Properties
* **authentication**: [Authentication](#authentication)
* **deviceId**: string (Required)
* **ioTHostHub**: string (Required)
* **ioTHostHubId**: string

## Authentication
### Properties
* **symmetricKey**: [SymmetricKey](#symmetrickey)

## SymmetricKey
### Properties
* **connectionString**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)

## AsymmetricEncryptedSecret
### Properties
* **encryptionAlgorithm**: 'AES256' | 'None' | 'RSAES_PKCS1_v_1_5' (Required)
* **encryptionCertThumbprint**: string
* **value**: string (Required)

## MountPointMap
### Properties
* **mountPoint**: string (ReadOnly)
* **roleId**: string (ReadOnly)
* **roleType**: 'ASA' | 'Cognitive' | 'Functions' | 'IOT' (ReadOnly)
* **shareId**: string (Required)

## ShareProperties
### Properties
* **accessProtocol**: 'NFS' | 'SMB' (Required)
* **azureContainerInfo**: [AzureContainerInfo](#azurecontainerinfo)
* **clientAccessRights**: [ClientAccessRight](#clientaccessright)[]
* **dataPolicy**: 'Cloud' | 'Local'
* **description**: string
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **refreshDetails**: [RefreshDetails](#refreshdetails)
* **shareMappings**: [MountPointMap](#mountpointmap)[] (ReadOnly)
* **shareStatus**: 'NeedsAttention' | 'OK' | 'Offline' | 'Unknown' | 'Updating' (Required)
* **userAccessRights**: [UserAccessRight](#useraccessright)[]

## AzureContainerInfo
### Properties
* **containerName**: string (Required)
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required)
* **storageAccountCredentialId**: string (Required)

## ClientAccessRight
### Properties
* **accessPermission**: 'NoAccess' | 'ReadOnly' | 'ReadWrite' (Required)
* **client**: string (Required)

## RefreshDetails
### Properties
* **errorManifestFile**: string
* **inProgressRefreshJobId**: string
* **lastCompletedRefreshJobTimeInUTC**: string
* **lastJob**: string

## UserAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required)
* **userId**: string (Required)

## StorageAccountCredentialProperties
### Properties
* **accountKey**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
* **accountType**: 'BlobStorage' | 'GeneralPurposeStorage' (Required)
* **alias**: string (Required)
* **blobDomainName**: string
* **connectionString**: string
* **sslStatus**: 'Disabled' | 'Enabled' (Required)
* **storageAccountId**: string
* **userName**: string

## FileEventTrigger
### Properties
* **kind**: 'FileEvent' (Required)
* **properties**: [FileTriggerProperties](#filetriggerproperties) (Required)

## FileTriggerProperties
### Properties
* **customContextTag**: string
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required)
* **sourceInfo**: [FileSourceInfo](#filesourceinfo) (Required)

## RoleSinkInfo
### Properties
* **roleId**: string (Required)

## FileSourceInfo
### Properties
* **shareId**: string (Required)

## PeriodicTimerEventTrigger
### Properties
* **kind**: 'PeriodicTimerEvent' (Required)
* **properties**: [PeriodicTimerProperties](#periodictimerproperties) (Required)

## PeriodicTimerProperties
### Properties
* **customContextTag**: string
* **sinkInfo**: [RoleSinkInfo](#rolesinkinfo) (Required)
* **sourceInfo**: [PeriodicTimerSourceInfo](#periodictimersourceinfo) (Required)

## PeriodicTimerSourceInfo
### Properties
* **schedule**: string (Required)
* **startTime**: string (Required)
* **topic**: string

## UserProperties
### Properties
* **encryptedPassword**: [AsymmetricEncryptedSecret](#asymmetricencryptedsecret)
* **shareAccessRights**: [ShareAccessRight](#shareaccessright)[]

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required)
* **shareId**: string (Required)

