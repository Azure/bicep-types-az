# Microsoft.DataBoxEdge @ 2019-07-01

## Microsoft.DataBoxEdge/dataBoxEdgeDevices
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataBoxEdgeDeviceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant)

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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BandwidthScheduleProperties (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant)

## BandwidthScheduleProperties
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required)
* **rateInMbps**: int (Required)
* **start**: string (Required)
* **stop**: string (Required)

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OrderProperties
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant)

## OrderProperties
### Properties
* **contactInformation**: ContactDetails (Required)
* **currentStatus**: OrderStatus
* **deliveryTrackingInfo**: TrackingInfo[] (ReadOnly)
* **orderHistory**: OrderStatus[] (ReadOnly)
* **returnTrackingInfo**: TrackingInfo[] (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **shippingAddress**: Address (Required)

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

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant)
### IOT
#### Properties
* **kind**: 'IOT' (Required)
* **properties**: IoTRoleProperties


## IOT
### Properties
* **kind**: 'IOT' (Required)
* **properties**: IoTRoleProperties

## IoTRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (Required)
* **ioTDeviceDetails**: IoTDeviceInfo (Required)
* **ioTEdgeDeviceDetails**: IoTDeviceInfo (Required)
* **roleStatus**: 'Disabled' | 'Enabled' (Required)
* **shareMappings**: MountPointMap[]

## IoTDeviceInfo
### Properties
* **authentication**: Authentication
* **deviceId**: string (Required)
* **ioTHostHub**: string (Required)
* **ioTHostHubId**: string

## Authentication
### Properties
* **symmetricKey**: SymmetricKey

## SymmetricKey
### Properties
* **connectionString**: AsymmetricEncryptedSecret

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

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareProperties (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant)

## ShareProperties
### Properties
* **accessProtocol**: 'NFS' | 'SMB' (Required)
* **azureContainerInfo**: AzureContainerInfo
* **clientAccessRights**: ClientAccessRight[]
* **dataPolicy**: 'Cloud' | 'Local'
* **description**: string
* **monitoringStatus**: 'Disabled' | 'Enabled' (Required)
* **refreshDetails**: RefreshDetails
* **shareMappings**: MountPointMap[] (ReadOnly)
* **shareStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating' (Required)
* **userAccessRights**: UserAccessRight[]

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

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountCredentialProperties (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## StorageAccountCredentialProperties
### Properties
* **accountKey**: AsymmetricEncryptedSecret
* **accountType**: 'BlobStorage' | 'GeneralPurposeStorage' (Required)
* **alias**: string (Required)
* **blobDomainName**: string
* **connectionString**: string
* **sslStatus**: 'Disabled' | 'Enabled' (Required)
* **storageAccountId**: string
* **userName**: string

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant)
### FileEvent
#### Properties
* **kind**: 'FileEvent' (Required)
* **properties**: FileTriggerProperties (Required)

### PeriodicTimerEvent
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required)
* **properties**: PeriodicTimerProperties (Required)


## FileEvent
### Properties
* **kind**: 'FileEvent' (Required)
* **properties**: FileTriggerProperties (Required)

## FileTriggerProperties
### Properties
* **customContextTag**: string
* **sinkInfo**: RoleSinkInfo (Required)
* **sourceInfo**: FileSourceInfo (Required)

## RoleSinkInfo
### Properties
* **roleId**: string (Required)

## FileSourceInfo
### Properties
* **shareId**: string (Required)

## PeriodicTimerEvent
### Properties
* **kind**: 'PeriodicTimerEvent' (Required)
* **properties**: PeriodicTimerProperties (Required)

## PeriodicTimerProperties
### Properties
* **customContextTag**: string
* **sinkInfo**: RoleSinkInfo (Required)
* **sourceInfo**: PeriodicTimerSourceInfo (Required)

## PeriodicTimerSourceInfo
### Properties
* **schedule**: string (Required)
* **startTime**: string (Required)
* **topic**: string

## Microsoft.DataBoxEdge/dataBoxEdgeDevices/users
### Properties
* **apiVersion**: '2019-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserProperties (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant)

## UserProperties
### Properties
* **encryptedPassword**: AsymmetricEncryptedSecret
* **shareAccessRights**: ShareAccessRight[]

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required)
* **shareId**: string (Required)

