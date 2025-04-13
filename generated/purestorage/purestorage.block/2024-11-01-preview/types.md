# PureStorage.Block @ 2024-11-01-preview

## Resource PureStorage.Block/reservations@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 127, pattern: "^[a-zA-Z0-9\-_]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ReservationProperties](#reservationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PureStorage.Block/reservations' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 127, pattern: "^[a-zA-Z0-9\-_]{1,127}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [StoragePoolProperties](#storagepoolproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'PureStorage.Block/storagePools' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsStorageContainers@2024-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z][a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsStorageContainerProperties](#avsstoragecontainerproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsStorageContainers' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsStorageContainers/volumes@2024-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsStorageContainers/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsVms@2024-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AvsVmProperties](#avsvmproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsVms' (ReadOnly, DeployTimeConstant): The resource type

## Resource PureStorage.Block/storagePools/avsVms/avsVmVolumes@2024-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-fA-F0-9\-]{1,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'PureStorage.Block/storagePools/avsVms/avsVmVolumes' (ReadOnly, DeployTimeConstant): The resource type

## AvsDiskDetails
### Properties
* **avsStorageContainerResourceId**: string (Required): Azure resource ID of the AVS storage container containing this disk/volume
* **avsVmInternalId**: string (Required): VMware ID assigned to the disk/volume
* **avsVmName**: string (Required): Name of the AVS VM connected to this disk/volume
* **avsVmResourceId**: string (Required): Azure resource ID of the AVS VM connected to this disk/volume
* **diskId**: string (Required): VMware ID of the disk/volume
* **diskName**: string (Required): VMware name of the disk/volume
* **folder**: string (Required): Name of the top-level folder in the datastore that contains the disk/volume

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
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details of the marketplace subscription
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

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ReservationProperties
### Properties
* **marketplace**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource
* **reservationInternalId**: string (ReadOnly): Pure Storage's internal ID for the reservation
* **user**: [UserDetails](#userdetails) (Required): User details

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

