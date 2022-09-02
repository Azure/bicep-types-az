# Microsoft.ElasticSan @ 2021-11-20-preview

## Resource Microsoft.ElasticSan/elasticSans@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticSanProperties](#elasticsanproperties) (Required): Properties of ElasticSan.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource metadata required by ARM RPC
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeGroupProperties](#volumegroupproperties): Properties of VolumeGroup.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource metadata required by ARM RPC
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties): Properties of Volume.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Resource metadata required by ARM RPC
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes' (ReadOnly, DeployTimeConstant): The resource type

## ElasticSanProperties
### Properties
* **availabilityZones**: string[]: Logical zone for Elastic San resource; example: ["1"].
* **baseSizeTiB**: int (Required): Base size of the Elastic San appliance in TiB.
* **extendedCapacitySizeTiB**: int (Required): Extended size of the Elastic San appliance in TiB.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **sku**: [Sku](#sku) (Required): resource sku
* **totalIops**: int (ReadOnly): Total Provisioned IOPS of the Elastic San appliance.
* **totalMBps**: int (ReadOnly): Total Provisioned MBps Elastic San appliance.
* **totalSizeTiB**: int (ReadOnly): Total size of the Elastic San appliance in TB.
* **totalVolumeSizeGiB**: int (ReadOnly): Total size of the provisioned Volumes in GiB.
* **volumeGroupCount**: int (ReadOnly): Total number of volume groups in this Elastic San appliance.

## IscsiTargetInfo
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' | string: Operational status of the iSCSI Target.
* **targetIqn**: string (ReadOnly): iSCSI Target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
* **targetPortalHostname**: string (ReadOnly): iSCSI Target Portal Host Name
* **targetPortalPort**: int (ReadOnly): iSCSI Target Portal Port

## NetworkRuleSet
### Properties
* **virtualNetworkRules**: [VirtualNetworkRule](#virtualnetworkrule)[]: The list of virtual network rules.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Premium_ZRS' | string (Required): The sku name.
* **tier**: 'Premium' | string: The sku tier.

## SourceCreationData
### Properties
* **createSource**: 'None': This enumerates the possible sources of a volume creation.
* **sourceUri**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded' (ReadOnly): Gets the state of virtual network rule.

## VolumeGroupProperties
### Properties
* **encryption**: 'EncryptionAtRestWithPlatformKey' | string: Type of encryption
* **networkAcls**: [NetworkRuleSet](#networkruleset): A collection of rules governing the accessibility from specific network locations.
* **protocolType**: 'Iscsi' | 'None' | string: Type of storage target
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.

## VolumeProperties
### Properties
* **creationData**: [SourceCreationData](#sourcecreationdata): State of the operation on the resource.
* **sizeGiB**: int: Volume size.
* **storageTarget**: [IscsiTargetInfo](#iscsitargetinfo) (ReadOnly): Storage target information
* **volumeId**: string (ReadOnly): Unique Id of the volume in GUID format

