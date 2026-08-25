# PureStorage.Block @ 2026-03-01-preview

## Resource PureStorage.Block/reservations@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 127, pattern: "^[a-zA-Z0-9\-_]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PureStorage.Block/reservations' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 127, pattern: "^[a-zA-Z0-9\-_]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StoragePoolProperties](#storagepoolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PureStorage.Block/storagePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsStorageContainers@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsStorageContainerProperties](#avsstoragecontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsStorageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsStorageContainers/volumes@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsStorageContainers/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsVms@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsVmProperties](#avsvmproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsVms' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsVms/avsVmVolumes@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsVms/avsVmVolumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/volumeGroups@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 2, maxLength: 40, pattern: "^[A-Za-z][A-Za-z0-9-]{0,38}[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeGroupProperties](#volumegroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PureStorage.Block/storagePools/volumeGroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/volumeGroups/volumes@2026-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 2, pattern: "^[A-Za-z][A-Za-z0-9-]*[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureVolumeProperties](#azurevolumeproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/volumeGroups/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Function disableAvsConnection (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Output**: any

## Function enableAvsConnection (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Input**: [StoragePoolEnableAvsConnectionPost](#storagepoolenableavsconnectionpost)
* **Output**: any

## Function finalizeAvsConnection (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Input**: [StoragePoolFinalizeAvsConnectionPost](#storagepoolfinalizeavsconnectionpost)
* **Output**: any

## Function getAvsConnection (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Output**: [AvsConnection](#avsconnection)

## Function getAvsStatus (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Output**: [AvsStatus](#avsstatus)

## Function getBillingReport (PureStorage.Block/reservations@2026-03-01-preview)
* **Resource**: PureStorage.Block/reservations
* **ApiVersion**: 2026-03-01-preview
* **Output**: [ReservationBillingUsageReport](#reservationbillingusagereport)

## Function getBillingStatus (PureStorage.Block/reservations@2026-03-01-preview)
* **Resource**: PureStorage.Block/reservations
* **ApiVersion**: 2026-03-01-preview
* **Output**: [ReservationBillingStatus](#reservationbillingstatus)

## Function getHealthStatus (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Output**: [HealthResponse](#healthresponse)

## Function getResourceLimits (PureStorage.Block/reservations@2026-03-01-preview)
* **Resource**: PureStorage.Block/reservations
* **ApiVersion**: 2026-03-01-preview
* **Output**: [LimitDetails](#limitdetails)

## Function getStatus (PureStorage.Block/storagePools/volumeGroups@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools/volumeGroups
* **ApiVersion**: 2026-03-01-preview
* **Output**: [VolumeGroupStatus](#volumegroupstatus)

## Function latestLinkedSaaS (PureStorage.Block/reservations@2026-03-01-preview)
* **Resource**: PureStorage.Block/reservations
* **ApiVersion**: 2026-03-01-preview
* **Output**: [LatestLinkedSaaSResponse](#latestlinkedsaasresponse)

## Function linkSaaS (PureStorage.Block/reservations@2026-03-01-preview)
* **Resource**: PureStorage.Block/reservations
* **ApiVersion**: 2026-03-01-preview
* **Input**: [LinkSaaSRequest](#linksaasrequest)
* **Output**: [Reservation](#reservation)

## Function listConnectionParameters (PureStorage.Block/storagePools/volumeGroups@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools/volumeGroups
* **ApiVersion**: 2026-03-01-preview
* **Output**: [ConnectionParametersResponse](#connectionparametersresponse)

## Function repairAvsConnection (PureStorage.Block/storagePools@2026-03-01-preview)
* **Resource**: PureStorage.Block/storagePools
* **ApiVersion**: 2026-03-01-preview
* **Output**: any

## Alert
### Properties
* **level**: 'error' | 'info' | 'warning' | string (Required): Severity level
* **message**: string (Required): A short description of the alert

## AvsConnection
### Properties
* **serviceInitializationCompleted**: bool (Required): Indicates whether service initialization is complete
* **serviceInitializationHandle**: [ServiceInitializationHandle](#serviceinitializationhandle): Explicit service account credentials
* **serviceInitializationHandleEnc**: string: Encoded service account credentials alongside connection information

## AvsDiskDetails
### Properties
* **avsStorageContainerResourceId**: string (Required): Azure resource ID of the AVS storage container containing this disk/volume
* **avsVmInternalId**: string (Required): VMware ID assigned to the disk/volume
* **avsVmName**: string (Required): Name of the AVS VM connected to this disk/volume
* **avsVmResourceId**: string (Required): Azure resource ID of the AVS VM connected to this disk/volume
* **diskId**: string (Required): VMware ID of the disk/volume
* **diskName**: string (Required): VMware name of the disk/volume
* **folder**: string (Required): Name of the top-level folder in the datastore that contains the disk/volume

## AvsStatus
### Properties
* **avsEnabled**: bool (Required): If true, an AVS connection has been successfully completed
* **currentConnectionStatus**: string (Required): Human-readable current AVS connection status
* **sddcResourceId**: string: Azure resource ID of the AVS SDDC the pool is connected to

## AvsStorageContainerProperties
### Properties
* **datastore**: string {pattern: "(^[a-zA-Z][a-zA-Z0-9\-]{0,62}[a-zA-Z0-9])?$"} (ReadOnly): VMware datastore associated with this storage container (if any)
* **mounted**: bool (ReadOnly): Whether the datastore is mounted in VMware or not
* **provisionedLimit**: int: Maximum amount of bytes that can be provisioned in this storage container; it must be a multiple of 512; each time a volume is provisioned in this container, its provisionedSize will be counted against the provisionLimit and the provisioning will fail if it goes over (minimum: 1048576 (1MiB), maximum: 4503599627370496 (4PiB)); by default it is unrestricted
* **resourceName**: string {pattern: "^[a-zA-Z][a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]$"} (Required, ReadOnly): Name of the storage container
* **space**: [Space](#space) (ReadOnly): Storage space usage

## AvsVmDetails
### Properties
* **avsVmInternalId**: string (Required): Pure Storage's internal ID for this AVS VM
* **vmId**: string (Required): ID of the AVS VM using this set of volumes
* **vmName**: string (Required): Name of the VMware VM using this set of volumes
* **vmType**: 'vvol' | string (Required): Type of the VMware VM using this set of volumes

## AvsVmProperties
### Properties
* **avs**: [AvsVmDetails](#avsvmdetails) (ReadOnly): AVS VM details
* **createdTimestamp**: string (ReadOnly): Date at which the AVS VM was created, as an RFC 3339 timestamp
* **displayName**: string (ReadOnly): Human-readable name of the AVS VM
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **softDeletion**: [SoftDeletion](#softdeletion): AVS VM's soft-deletion state
* **space**: [Space](#space) (ReadOnly): Contains properties related to used Flash space
* **storagePoolInternalId**: string (ReadOnly): Pure Storage's internal ID for the storage pool
* **storagePoolResourceId**: string (ReadOnly): Azure resource ID of the storage pool
* **volumeContainerType**: 'avs' | string (ReadOnly): Specify which control plane handles the lifecycle of the volume container

## AzureVmwareService
### Properties
* **avsEnabled**: bool (Required): If true, an AVS SDDC is successfully connected to the storage pool
* **sddcResourceId**: string: Azure resource ID of the AVS SDDC the storage pool is connected to

## AzureVolumeProperties
### Properties
* **createdAt**: string (ReadOnly): Volume creation date, as an RFC 3339 timestamp
* **provisionedSize**: int {minValue: 1048576}: Currently provisioned size of the volume, in bytes
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **serialNumber**: string (ReadOnly): Serial number of the volume
* **sourceVolumeGroupResourceId**: string (WriteOnly): Azure Resource ID of the source volume group to clone from.
* **sourceVolumeResourceId**: string (WriteOnly): Azure resource ID of the source volume for cloning
* **space**: [Space](#space) (ReadOnly): Storage space usage for the volume

## BandwidthUsage
### Properties
* **current**: int (Required): Number of bytes written and read per second (maximum value over the last 10 minutes)
* **max**: int (Required): Maximum bandwidth value that can be provisioned for the storage pool
* **provisioned**: int (Required): Bandwidth value currently provisioned for the storage pool, in MB/s

## BillingUsageProperty
### Properties
* **currentValue**: string (Required): Current value of the billing usage property
* **previousValue**: string: Previous value of the billing usage property
* **propertyId**: string (Required): Unique identifier for the billing usage property
* **propertyName**: string (Required): Name of the billing usage property
* **severity**: 'alert' | 'information' | 'none' | 'warning' | string (Required): Severity level of the usage
* **statusMessage**: string: Status message for the billing usage against a property
* **subProperties**: [BillingUsageProperty](#billingusageproperty)[]: Optional list of sub-properties providing additional details

## ConnectionParametersResponse
### Properties
* **iscsi**: [IscsiConnectionParameters](#iscsiconnectionparameters) (Required): ISCSI connection parameters

## HealthDetails
### Properties
* **bandwidthUsage**: [BandwidthUsage](#bandwidthusage) (Required): Bandwidth usage metrics
* **dataReductionRatio**: int (Required): Data reduction ratio achieved on this pool
* **estimatedMaxCapacity**: int (Required): Estimated maximum capacity of the pool, in bytes, based on current usage and data reduction ratio
* **iopsUsage**: [IopsUsage](#iopsusage) (Required): IOPS usage metrics
* **space**: [Space](#space) (Required): Storage space usage
* **usedCapacityPercentage**: int (Required): How full the pool is right now, in %, compared to the maximum size it can grow to; estimated based on current usage and data reduction ratio

## HealthResponse
### Properties
* **alerts**: [Alert](#alert)[] (Required): List of health alerts
* **health**: [HealthDetails](#healthdetails) (Required): Health metrics

## IopsUsage
### Properties
* **current**: int (Required): Current number of IOPS (maximum value over the last 10 minutes)
* **max**: int (Required): Maximum IOPS value that can be provisioned for the storage pool
* **provisioned**: int (Required): IOPS value currently provisioned for the storage pool

## IscsiConnectionParameters
### Properties
* **endpoints**: [IscsiEndpoint](#iscsiendpoint)[] (Required): List of ISCSI endpoints for connection

## IscsiEndpoint
### Properties
* **ip**: string (Required): IP address of the endpoint
* **iqn**: string (Required): IQN (iSCSI Qualified Name) of the endpoint
* **port**: int (Required): Port number of the endpoint

## LatestLinkedSaaSResponse
### Properties
* **isHiddenSaaS**: bool: Flag indicating if the SaaS resource is hidden
* **saaSResourceId**: string: SaaS resource id

## LiftrBaseAddress
### Properties
* **addressLine1**: string (Required): Address line 1
* **addressLine2**: string: Address line 2
* **city**: string (Required): Name of the city
* **country**: string (Required): Name of the country
* **postalCode**: string (Required): Postal code
* **state**: string (Required): State (if any)

## LiftrBaseCompanyDetails
### Properties
* **address**: [LiftrBaseAddress](#liftrbaseaddress): Company address
* **companyName**: string (Required): Company name

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails): Offer details of the marketplace subscription
* **saaSResourceId**: string (WriteOnly): ARM ID of the Marketplace SaaS resource. Only used in Create operations.
* **subscriptionId**: string (ReadOnly): Marketplace subscription ID
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer ID for the marketplace offer
* **planId**: string (Required): Plan ID for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher ID for the marketplace offer
* **termId**: string: Term ID for the marketplace offer
* **termUnit**: string: Term Unit for the marketplace offer

## LimitDetails
### Properties
* **performancePolicy**: [PerformancePolicyLimits](#performancepolicylimits) (Required): internal
* **protectionPolicy**: [ProtectionPolicyLimits](#protectionpolicylimits) (Required): internal
* **storagePool**: [StoragePoolLimits](#storagepoollimits) (Required): Limits used for storage pool resources
* **volume**: [VolumeLimits](#volumelimits) (Required): Limits used for volume resources

## LinkSaaSRequest
### Properties
* **saaSResourceId**: string (Required): SaaS resource id

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PerformanceParameters
### Properties
* **bandwidthLimitMbPerSec**: int: Bandwidth limit in MB per second
* **iopsLimit**: int: IOPS limit

## PerformancePolicyLimits
### Properties
* **bandwidthLimit**: [RangeLimits](#rangelimits) (Required): internal
* **iopsLimit**: [RangeLimits](#rangelimits) (Required): internal

## ProtectionParameters
### Properties
* **frequency**: string: Snapshot frequency in ISO 8601 duration format
* **retention**: string: Retention period for snapshots in ISO 8601 duration format

## ProtectionPolicyLimits
### Properties
* **frequency**: [RangeLimits](#rangelimits) (Required): internal
* **retention**: [RangeLimits](#rangelimits) (Required): internal

## RangeLimits
### Properties
* **max**: int (Required): Maximum value of the property
* **min**: int (Required): Minimum value of the property

## Reservation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ReservationProperties](#reservationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ReservationBillingStatus
### Properties
* **drrWeightedAverage**: int (Required): Weighted average of the data-reduction ratio for all associated pools
* **extraUsedCapacityLowUsageRounding**: int (Required): Extra capacity added when rounding up low-usage pools to 30TiB. In bytes
* **extraUsedCapacityNonReducible**: int (Required): Extra capacity added because of low DRR storage pools; In bytes
* **extraUsedCapacityNonReduciblePlanDiscount**: int (Required): Extra capacity discounted due to plan forgiving some low-DRR usage. In bytes
* **lowDrrPoolCount**: int (Required): How many associated storage pools reported low data reduction ratio (DRR)
* **timestamp**: string (Required): Timestamp for the latest update of this billing status, in RFC 3339 format
* **totalNonReducibleReported**: int (Required): The sum of total used capacity for all pools with low DRR, if the DRR penalty applies. In bytes
* **totalPerformanceIncludedPlan**: int (Required): Total performance amount included in plan. In bytes per second
* **totalPerformanceOverage**: int (Required): Total performance amount reported at on-demand price. In MB per second
* **totalPerformanceReported**: int (Required): The sum of all performance settings across the pools under this reservation. In MB per second
* **totalUsedCapacityBilled**: int (Required): Total used capacity actually billed. In bytes
* **totalUsedCapacityIncludedPlan**: int (Required): Total used capacity included in plan. In bytes
* **totalUsedCapacityOverage**: int (Required): Total used capacity reported at on-demand price. In bytes
* **totalUsedCapacityReported**: int (Required): Total used capacity as reported by associated storage pools. In bytes

## ReservationBillingUsageReport
### Properties
* **billingUsageProperties**: [BillingUsageProperty](#billingusageproperty)[] (Required): A list of detailed billing usage properties
* **overallStatusMessage**: string (Required): Overall status message of the billing usage report
* **timestamp**: string (Required): Latest formatted billing report for this reservation

## ReservationProperties
### Properties
* **marketplace**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **reservationInternalId**: string (ReadOnly): Pure Storage's internal ID for the reservation
* **user**: [UserDetails](#userdetails): User details

## ServiceInitializationData
### Properties
* **serviceAccountPassword**: string {sensitive}: Service account password
* **serviceAccountUsername**: string: Service account username
* **vSphereCertificate**: string: AVS instance's vSphere certificate
* **vSphereIp**: string: AVS instance's vSphere IP address

## ServiceInitializationHandle
### Properties
* **sddcResourceId**: string: Azure resource ID of the AVS SDDC the pool is connecting to
* **serviceAccountUsername**: string: Requested service account username

## SoftDeletion
### Properties
* **destroyed**: bool (Required): If false, the resource is active; if true, the resource has been destroyed; resources can be soft-deleted by setting destroyed to true, and recovered by setting it to false
* **eradicationTimestamp**: string (ReadOnly): Date at which the resource will be eradicated and impossible to recover, as an RFC 3339 timestamp; invalid if destroyed is false;

## Space
### Properties
* **shared**: int (Required): Space occupied by duplicated data, meaning data shared with other volumes and snapshots as a result of data deduplication, in bytes
* **snapshots**: int (Required): Space occupied by data unique to one or more snapshots, in bytes
* **totalUsed**: int (Required): Total space occupied by customer data (i.e., being billed for), in bytes
* **unique**: int (Required): Unique space occupied by customer data, in bytes; for a volume, this is the amount of storage that would be freed by deleting the volume, since snapshot and shared data would be kept

## StoragePoolEnableAvsConnectionPost
### Properties
* **sddcResourceId**: string (Required): Azure resource ID of the AVS SDDC to connect to

## StoragePoolFinalizeAvsConnectionPost
### Properties
* **serviceInitializationData**: [ServiceInitializationData](#serviceinitializationdata): Explicit AVS connection information
* **serviceInitializationDataEnc**: string: Encoded AVS connection information

## StoragePoolLimits
### Properties
* **physicalAvailabilityZones**: string[] (Required): List of physical availability zones in the region in which storage pools can be deployed; some Azure regions do not support the necessary resources in all availability zones
* **provisionedBandwidthMbPerSec**: [RangeLimits](#rangelimits) (Required): Allowed provisioned bandwidth range for a storage pool, in MB/s
* **provisionedIops**: [RangeLimits](#rangelimits) (Required): Allowed provisioned IOPS range for a storage pool, as a number of operations

## StoragePoolProperties
### Properties
* **availabilityZone**: string (Required): Azure Availability Zone the Pool is located in
* **avs**: [AzureVmwareService](#azurevmwareservice) (ReadOnly): AVS connection state summary
* **dataRetentionPeriod**: int (ReadOnly): How long a destroyed object is kept before being eradicated, in seconds
* **provisionedBandwidthMbPerSec**: int (Required): Total bandwidth provisioned for the pool, in MB/s
* **provisionedIops**: int (ReadOnly): Total I/O operations per second (IOPS) provisioned for the pool
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **reservationResourceId**: string (Required): Azure resource ID of the Pure Storage Cloud service (reservation resource) this storage pool belongs to
* **storagePoolInternalId**: string (ReadOnly): Pure Storage's internal ID of the storage pool
* **vnetInjection**: [VnetInjection](#vnetinjection) (Required): Network properties of the storage pool

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## UserDetails
### Properties
* **companyDetails**: [LiftrBaseCompanyDetails](#liftrbasecompanydetails): Company details
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Email address
* **firstName**: string (Required): First name
* **lastName**: string (Required): Last name
* **phoneNumber**: string: Phone number
* **upn**: string: Principal name

## VnetInjection
### Properties
* **subnetId**: string (Required): Azure resource ID of the Virtual Network subnet where the storage pool will be connected
* **vnetId**: string (Required): Azure resource ID of the Virtual Network in which the subnet is located

## VolumeGroupProperties
### Properties
* **performanceParameters**: [PerformanceParameters](#performanceparameters): Performance parameters for the volume group
* **protectionParameters**: [ProtectionParameters](#protectionparameters): Protection parameters for the volume group
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **sourceVolumeGroupResourceId**: string (WriteOnly): Azure resource ID of the source volume group for cloning
* **storagePoolInternalId**: string (ReadOnly): Pure Storage's internal ID of the storage pool
* **volumeGroupInternalId**: string (ReadOnly): Pure Storage's internal ID of the volume group

## VolumeGroupStatus
### Properties
* **connectedHostCount**: int (Required): Number of hosts currently connected to the volume group
* **space**: [Space](#space) (Required): Storage space usage for the volume group

## VolumeLimits
### Properties
* **provisionedSize**: [RangeLimits](#rangelimits) (Required): Provisioned size limits for a volume, in bytes

## VolumeProperties
### Properties
* **avs**: [AvsDiskDetails](#avsdiskdetails) (ReadOnly): AVS-specific volume information
* **createdTimestamp**: string (ReadOnly): Volume creation date, as an RFC 3339 timestamp
* **displayName**: string (ReadOnly): Human-readable name of the volume
* **provisionedSize**: int (ReadOnly): Currently provisioned size of the volume, in bytes
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **softDeletion**: [SoftDeletion](#softdeletion) (Required): Volume's soft-deletion state
* **space**: [Space](#space) (ReadOnly): Storage space usage
* **storagePoolInternalId**: string (ReadOnly): Pure Storage's internal ID for the storage pool containing the volume
* **storagePoolResourceId**: string (ReadOnly): Azure Resource ID of the storage pool containing this volume
* **volumeInternalId**: string (ReadOnly): Pure Storage's internal ID for the volume
* **volumeType**: 'avs' | string (ReadOnly): Specify which control plane handles the lifecycle of the volume

