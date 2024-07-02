# Microsoft.ElasticSan @ 2024-05-01

## Resource Microsoft.ElasticSan/elasticSans@2024-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[A-Za-z0-9]+((-|_)[a-z0-9A-Z]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticSanProperties](#elasticsanproperties) (Required): Properties of ElasticSan.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2024-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Private Endpoint Connection Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ElasticSan/elasticSans/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups@2024-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[A-Za-z0-9]+((-|_)[a-z0-9A-Z]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeGroupProperties](#volumegroupproperties): Properties of VolumeGroup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2024-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1, maxLength: 80, pattern: "^[a-z0-9]+(?:[._-][a-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SnapshotProperties](#snapshotproperties) (Required): Properties of Volume Snapshot.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups/snapshots' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2024-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z0-9]+(-[a-z0-9A-Z]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties) (Required): Properties of Volume.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes' (ReadOnly, DeployTimeConstant): The resource type

## ElasticSanProperties
### Properties
* **availabilityZones**: string[]: Logical zone for Elastic San resource; example: ["1"].
* **baseSizeTiB**: int (Required): Base size of the Elastic San appliance in TiB.
* **extendedCapacitySizeTiB**: int (Required): Extended size of the Elastic San appliance in TiB.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of Private Endpoint Connections.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Allow or disallow public network access to ElasticSan. Value is optional but if passed in, must be 'Enabled' or 'Disabled'.
* **sku**: [Sku](#sku) (Required): resource sku
* **totalIops**: int (ReadOnly): Total Provisioned IOPS of the Elastic San appliance.
* **totalMBps**: int (ReadOnly): Total Provisioned MBps Elastic San appliance.
* **totalSizeTiB**: int (ReadOnly): Total size of the Elastic San appliance in TB.
* **totalVolumeSizeGiB**: int (ReadOnly): Total size of the provisioned Volumes in GiB.
* **volumeGroupCount**: int (ReadOnly): Total number of volume groups in this Elastic San appliance.

## EncryptionIdentity
### Properties
* **userAssignedIdentity**: string: Resource identifier of the UserAssigned identity to be associated with server-side encryption on the volume group.

## EncryptionProperties
### Properties
* **identity**: [EncryptionIdentity](#encryptionidentity): The identity to be used with service-side encryption at rest.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Properties provided by key vault.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' | string (Required): The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): Gets or sets a list of key value pairs that describe the set of User Assigned identities that will be used with this volume group. The key is the ARM resource identifier of the identity.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## IscsiTargetInfo
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' | string: Operational status of the iSCSI Target.
* **targetIqn**: string (ReadOnly): iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
* **targetPortalHostname**: string (ReadOnly): iSCSI Target Portal Host Name
* **targetPortalPort**: int (ReadOnly): iSCSI Target Portal Port

## KeyVaultProperties
### Properties
* **currentVersionedKeyExpirationTimestamp**: string (ReadOnly): This is a read only property that represents the expiration time of the current version of the customer managed key used for encryption.
* **currentVersionedKeyIdentifier**: string (ReadOnly): The object identifier of the current versioned Key Vault Key in use.
* **keyName**: string: The name of KeyVault key.
* **keyVaultUri**: string: The Uri of KeyVault.
* **keyVersion**: string: The version of KeyVault key.
* **lastKeyRotationTimestamp**: string (ReadOnly): Timestamp of last rotation of the Key Vault Key.

## ManagedByInfo
### Properties
* **resourceId**: string: Resource ID of the resource managing the volume, this is a restricted field and can only be set for internal use.

## NetworkRuleSet
### Properties
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (Required): Private Endpoint Connection Properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: List of resources private endpoint is mapped
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Private Endpoint resource
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): Private Link Service Connection State.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Private Endpoint connection resource

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Failed' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | string (Required): The sku name.
* **tier**: 'Premium' | string: The sku tier.

## SnapshotCreationData
### Properties
* **sourceId**: string (Required): Fully qualified resource ID of the volume. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}"

## SnapshotProperties
### Properties
* **creationData**: [SnapshotCreationData](#snapshotcreationdata) (Required): Data used when creating a volume snapshot.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **sourceVolumeSizeGiB**: int (ReadOnly): Size of Source Volume
* **volumeName**: string (ReadOnly): Source Volume Name of a snapshot

## SourceCreationData
### Properties
* **createSource**: 'Disk' | 'DiskRestorePoint' | 'DiskSnapshot' | 'None' | 'VolumeSnapshot' | string: This enumerates the possible sources of a volume creation.
* **sourceId**: string: Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"

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

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the identity.
* **principalId**: string (ReadOnly): The principal ID of the identity.

## VirtualNetworkRule
### Properties
* **action**: 'Allow' | string: The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.

## VolumeGroupProperties
### Properties
* **encryption**: 'EncryptionAtRestWithCustomerManagedKey' | 'EncryptionAtRestWithPlatformKey' | string: Type of encryption
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties): Encryption Properties describing Key Vault and Identity information
* **enforceDataIntegrityCheckForIscsi**: bool: A boolean indicating whether or not Data Integrity Check is enabled
* **networkAcls**: [NetworkRuleSet](#networkruleset): A collection of rules governing the accessibility from specific network locations.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of Private Endpoint Connections.
* **protocolType**: 'Iscsi' | 'None' | string: Type of storage target
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.

## VolumeProperties
### Properties
* **creationData**: [SourceCreationData](#sourcecreationdata): State of the operation on the resource.
* **managedBy**: [ManagedByInfo](#managedbyinfo): Parent resource information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **sizeGiB**: int (Required): Volume size.
* **storageTarget**: [IscsiTargetInfo](#iscsitargetinfo) (ReadOnly): Storage target information
* **volumeId**: string (ReadOnly): Unique Id of the volume in GUID format

