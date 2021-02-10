# Microsoft.DataBoxEdge @ 2020-09-01

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **kind**: 'AzureDataBoxGateway' | 'AzureModularDataCentre' | 'AzureStackEdge' | 'AzureStackHub' (ReadOnly)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DataBoxEdgeDeviceProperties (ReadOnly)
* **sku**: Sku
* **systemData**: SystemData
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BandwidthScheduleProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/bandwidthSchedules' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: OrderProperties
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/orders' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles' (ReadOnly, DeployTimeConstant)
### CloudEdgeManagement
#### Properties
* **kind**: 'CloudEdgeManagement' (Required)
* **properties**: CloudEdgeManagementRoleProperties

### IOT
#### Properties
* **kind**: 'IOT' (Required)
* **properties**: IoTRoleProperties

### Kubernetes
#### Properties
* **kind**: 'Kubernetes' (Required)
* **properties**: KubernetesRoleProperties

### MEC
#### Properties
* **kind**: 'MEC' (Required)
* **properties**: MECRoleProperties


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/addons' (ReadOnly, DeployTimeConstant)
### ArcForKubernetes
#### Properties
* **kind**: 'ArcForKubernetes' (Required)
* **properties**: ArcAddonProperties (Required)

### IotEdge
#### Properties
* **kind**: 'IotEdge' (Required)
* **properties**: IoTAddonProperties (Required)


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: MonitoringMetricConfigurationProperties (Required)
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/roles/monitoringConfig' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountCredentialProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccountCredentials' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/storageAccounts/containers' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/triggers' (ReadOnly, DeployTimeConstant)
### FileEvent
#### Properties
* **kind**: 'FileEvent' (Required)
* **properties**: FileTriggerProperties (Required)

### PeriodicTimerEvent
#### Properties
* **kind**: 'PeriodicTimerEvent' (Required)
* **properties**: PeriodicTimerProperties (Required)


## Resource Microsoft.DataBoxEdge/dataBoxEdgeDevices/users@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: UserProperties (Required)
* **systemData**: SystemData
* **type**: 'Microsoft.DataBoxEdge/dataBoxEdgeDevices/users' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned'

## DataBoxEdgeDeviceProperties
### Properties
* **configuredRoleTypes**: 'ASA' | 'CloudEdgeManagement' | 'Cognitive' | 'Functions' | 'IOT' | 'Kubernetes' | 'MEC'[] (ReadOnly)
* **culture**: string (ReadOnly)
* **dataBoxEdgeDeviceStatus**: 'Disconnected' | 'Maintenance' | 'NeedsAttention' | 'Offline' | 'Online' | 'PartiallyDisconnected' | 'ReadyToSetup'
* **description**: string (ReadOnly)
* **deviceHcsVersion**: string (ReadOnly)
* **deviceLocalCapacity**: int (ReadOnly)
* **deviceModel**: string (ReadOnly)
* **deviceSoftwareVersion**: string (ReadOnly)
* **deviceType**: 'DataBoxEdgeDevice' (ReadOnly)
* **edgeProfile**: EdgeProfile (ReadOnly)
* **friendlyName**: string (ReadOnly)
* **modelDescription**: string (ReadOnly)
* **nodeCount**: int (ReadOnly)
* **resourceMoveDetails**: ResourceMoveDetails (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **timeZone**: string (ReadOnly)

## EdgeProfile
### Properties
* **subscription**: EdgeProfileSubscription

## EdgeProfileSubscription
### Properties
* **id**: string
* **properties**: SubscriptionProperties
* **registrationDate**: string
* **registrationId**: string
* **state**: 'Deleted' | 'Registered' | 'Suspended' | 'Unregistered' | 'Warned'
* **subscriptionId**: string

## SubscriptionProperties
### Properties
* **locationPlacementId**: string
* **quotaId**: string
* **registeredFeatures**: SubscriptionRegisteredFeatures[]
* **serializedDetails**: string
* **tenantId**: string

## SubscriptionRegisteredFeatures
### Properties
* **name**: string
* **state**: string

## ResourceMoveDetails
### Properties
* **operationInProgress**: 'None' | 'ResourceMoveFailed' | 'ResourceMoveInProgress'
* **operationInProgressLockTimeoutInUTC**: string

## Sku
### Properties
* **name**: 'Edge' | 'EdgeMR_Mini' | 'EdgeP_Base' | 'EdgeP_High' | 'EdgePR_Base_UPS' | 'EdgePR_Base' | 'Gateway' | 'GPU' | 'RCA_Large' | 'RCA_Small' | 'RDC' | 'TCA_Large' | 'TCA_Small' | 'TDC' | 'TEA_1Node_Heater' | 'TEA_1Node_UPS_Heater' | 'TEA_1Node_UPS' | 'TEA_1Node' | 'TEA_4Node_Heater' | 'TEA_4Node_UPS_Heater' | 'TMA'
* **tier**: 'Standard'

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## Dictionary<string,String>
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
* **contactInformation**: ContactDetails (Required)
* **currentStatus**: OrderStatus (ReadOnly)
* **deliveryTrackingInfo**: TrackingInfo[] (ReadOnly)
* **orderHistory**: OrderStatus[] (ReadOnly)
* **returnTrackingInfo**: TrackingInfo[] (ReadOnly)
* **serialNumber**: string (ReadOnly)
* **shipmentType**: 'NotApplicable' | 'SelfPickup' | 'ShippedToCustomer'
* **shippingAddress**: Address

## ContactDetails
### Properties
* **companyName**: string (Required)
* **contactPerson**: string (Required)
* **emailList**: string[] (Required)
* **phone**: string (Required)

## OrderStatus
### Properties
* **additionalOrderDetails**: Dictionary<string,String> (ReadOnly)
* **comments**: string
* **status**: 'Arriving' | 'AwaitingDrop' | 'AwaitingFulfilment' | 'AwaitingPickup' | 'AwaitingPreparation' | 'AwaitingReturnShipment' | 'AwaitingShipment' | 'CollectedAtMicrosoft' | 'Declined' | 'Delivered' | 'LostDevice' | 'PickupCompleted' | 'ReplacementRequested' | 'ReturnInitiated' | 'Shipped' | 'ShippedBack' | 'Untracked' (Required)
* **trackingInformation**: TrackingInfo (ReadOnly)
* **updateDateTime**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackingInfo
### Properties
* **carrierName**: string
* **serialNumber**: string
* **trackingId**: string
* **trackingUrl**: string

## Address
### Properties
* **addressLine1**: string
* **addressLine2**: string
* **addressLine3**: string
* **city**: string
* **country**: string (Required)
* **postalCode**: string
* **state**: string

## CloudEdgeManagement
### Properties
* **kind**: 'CloudEdgeManagement' (Required)
* **properties**: CloudEdgeManagementRoleProperties

## CloudEdgeManagementRoleProperties
### Properties
* **edgeProfile**: EdgeProfile (ReadOnly)
* **localManagementStatus**: 'Disabled' | 'Enabled' (ReadOnly)
* **roleStatus**: 'Disabled' | 'Enabled' (Required)

## IOT
### Properties
* **kind**: 'IOT' (Required)
* **properties**: IoTRoleProperties

## IoTRoleProperties
### Properties
* **computeResource**: ComputeResource
* **hostPlatform**: 'Linux' | 'Windows' (Required)
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly)
* **ioTDeviceDetails**: IoTDeviceInfo (Required)
* **ioTEdgeAgentInfo**: IoTEdgeAgentInfo
* **ioTEdgeDeviceDetails**: IoTDeviceInfo (Required)
* **roleStatus**: 'Disabled' | 'Enabled' (Required)
* **shareMappings**: MountPointMap[]

## ComputeResource
### Properties
* **memoryInGB**: int (Required)
* **processorCount**: int (Required)

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

## IoTEdgeAgentInfo
### Properties
* **imageName**: string (Required)
* **imageRepository**: ImageRepositoryCredential
* **tag**: string (Required)

## ImageRepositoryCredential
### Properties
* **imageRepositoryUrl**: string (Required)
* **password**: AsymmetricEncryptedSecret
* **userName**: string (Required)

## MountPointMap
### Properties
* **mountPoint**: string (ReadOnly)
* **mountType**: 'HostPath' | 'Volume' (ReadOnly)
* **roleId**: string (ReadOnly)
* **roleType**: 'ASA' | 'CloudEdgeManagement' | 'Cognitive' | 'Functions' | 'IOT' | 'Kubernetes' | 'MEC' (ReadOnly)
* **shareId**: string (Required)

## Kubernetes
### Properties
* **kind**: 'Kubernetes' (Required)
* **properties**: KubernetesRoleProperties

## KubernetesRoleProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (Required)
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly)
* **kubernetesClusterInfo**: KubernetesClusterInfo (Required)
* **kubernetesRoleResources**: KubernetesRoleResources (Required)
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly)
* **roleStatus**: 'Disabled' | 'Enabled' (Required)

## KubernetesClusterInfo
### Properties
* **etcdInfo**: EtcdInfo (ReadOnly)
* **nodes**: NodeInfo[] (ReadOnly)
* **version**: string (Required)

## EtcdInfo
### Properties
* **type**: string (ReadOnly)
* **version**: string (ReadOnly)

## NodeInfo
### Properties
* **ipConfiguration**: KubernetesIPConfiguration[]
* **name**: string (ReadOnly)
* **type**: 'Invalid' | 'Master' | 'Worker' (ReadOnly)

## KubernetesIPConfiguration
### Properties
* **ipAddress**: string
* **port**: string (ReadOnly)

## KubernetesRoleResources
### Properties
* **compute**: KubernetesRoleCompute (Required)
* **network**: KubernetesRoleNetwork (ReadOnly)
* **storage**: KubernetesRoleStorage

## KubernetesRoleCompute
### Properties
* **memoryInBytes**: int (ReadOnly)
* **processorCount**: int (ReadOnly)
* **vmProfile**: string (Required)

## KubernetesRoleNetwork
### Properties
* **cniConfig**: CniConfig (ReadOnly)
* **loadBalancerConfig**: LoadBalancerConfig (ReadOnly)

## CniConfig
### Properties
* **podSubnet**: string (ReadOnly)
* **serviceSubnet**: string (ReadOnly)
* **type**: string (ReadOnly)
* **version**: string (ReadOnly)

## LoadBalancerConfig
### Properties
* **type**: string (ReadOnly)
* **version**: string (ReadOnly)

## KubernetesRoleStorage
### Properties
* **endpoints**: MountPointMap[]
* **storageClasses**: KubernetesRoleStorageClassInfo[] (ReadOnly)

## KubernetesRoleStorageClassInfo
### Properties
* **name**: string (ReadOnly)
* **posixCompliant**: 'Disabled' | 'Enabled' | 'Invalid' (ReadOnly)
* **type**: string (ReadOnly)

## MEC
### Properties
* **kind**: 'MEC' (Required)
* **properties**: MECRoleProperties

## MECRoleProperties
### Properties
* **connectionString**: AsymmetricEncryptedSecret
* **roleStatus**: 'Disabled' | 'Enabled' (Required)

## ArcForKubernetes
### Properties
* **kind**: 'ArcForKubernetes' (Required)
* **properties**: ArcAddonProperties (Required)

## ArcAddonProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (ReadOnly)
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly)
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly)
* **resourceGroupName**: string (Required)
* **resourceLocation**: string (Required)
* **resourceName**: string (Required)
* **subscriptionId**: string (Required)
* **version**: string (ReadOnly)

## IotEdge
### Properties
* **kind**: 'IotEdge' (Required)
* **properties**: IoTAddonProperties (Required)

## IoTAddonProperties
### Properties
* **hostPlatform**: 'Linux' | 'Windows' (ReadOnly)
* **hostPlatformType**: 'KubernetesCluster' | 'LinuxVM' (ReadOnly)
* **ioTDeviceDetails**: IoTDeviceInfo (Required)
* **ioTEdgeDeviceDetails**: IoTDeviceInfo (Required)
* **provisioningState**: 'Created' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Reconfiguring' | 'Updating' (ReadOnly)
* **version**: string (ReadOnly)

## MonitoringMetricConfigurationProperties
### Properties
* **metricConfigurations**: MetricConfiguration[] (Required)

## MetricConfiguration
### Properties
* **counterSets**: MetricCounterSet[] (Required)
* **mdmAccount**: string
* **metricNameSpace**: string
* **resourceId**: string (Required)

## MetricCounterSet
### Properties
* **counters**: MetricCounter[] (Required)

## MetricCounter
### Properties
* **additionalDimensions**: MetricDimension[]
* **dimensionFilter**: MetricDimension[]
* **instance**: string
* **name**: string (Required)

## MetricDimension
### Properties
* **sourceName**: string (Required)
* **sourceType**: string (Required)

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

## StorageAccountProperties
### Properties
* **blobEndpoint**: string (ReadOnly)
* **containerCount**: int (ReadOnly)
* **dataPolicy**: 'Cloud' | 'Local' (Required)
* **description**: string
* **storageAccountCredentialId**: string
* **storageAccountStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating'

## ContainerProperties
### Properties
* **containerStatus**: 'NeedsAttention' | 'Offline' | 'OK' | 'Unknown' | 'Updating' (ReadOnly)
* **createdDateTime**: string (ReadOnly)
* **dataFormat**: 'AzureFile' | 'BlockBlob' | 'PageBlob' (Required)
* **refreshDetails**: RefreshDetails (ReadOnly)

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

## UserProperties
### Properties
* **encryptedPassword**: AsymmetricEncryptedSecret
* **shareAccessRights**: ShareAccessRight[] (ReadOnly)
* **userType**: 'ARM' | 'LocalManagement' | 'Share'

## ShareAccessRight
### Properties
* **accessType**: 'Change' | 'Custom' | 'Read' (Required)
* **shareId**: string (Required)

