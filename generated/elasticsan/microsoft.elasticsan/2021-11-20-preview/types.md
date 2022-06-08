# Microsoft.ElasticSan @ 2021-11-20-preview

## Resource Microsoft.ElasticSan/elasticSans@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ElasticSanProperties](#elasticsanproperties): Elastic San response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeGroupProperties](#volumegroupproperties): VolumeGroup response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2021-11-20-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-11-20-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeProperties](#volumeproperties): Volume response properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Azure resource tags.
* **type**: 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes' (ReadOnly, DeployTimeConstant): The resource type

## ElasticSanProperties
### Properties
* **availabilityZones**: string[] (Required): Logical zone for Elastic San resource; example: ["1"].
* **baseSizeTiB**: int (Required): Base size of the Elastic San appliance in TiB.
* **extendedCapacitySizeTiB**: int (Required): Extended size of the Elastic San appliance in TiB.
* **provisionedMBps**: int (ReadOnly): Provisioned MBps Elastic San appliance.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the iSCSI Target.
* **sku**: [Sku](#sku): The SKU name. Required for account creation; optional for update.
* **totalIops**: int (ReadOnly): Total Provisioned IOPS of the Elastic San appliance.
* **totalMBps**: int (ReadOnly): Total Provisioned MBps Elastic San appliance.
* **totalVolumeSizeGiB**: int (ReadOnly): Total size of the provisioned Volumes in GiB.
* **volumeGroupCount**: int (ReadOnly): Total number of volume groups in this Elastic San appliance.

## IscsiTargetInfo
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the iSCSI Target.
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' | string: Operational status of the resource.
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
* **name**: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS' | string: The sku name.
* **tier**: 'Hero' | 'Hub' | 'Satellite' | string: The sku tier.

## SourceCreationData
### Properties
* **createSource**: 'Export' | 'FromDiskSnapshot' | 'FromVolume' | 'None' (Required): This enumerates the possible sources of a volume creation.
* **sourceUri**: string: If createOption is Copy, this is the ARM id of the source snapshot or disk. If createOption is Restore, this is the ARM-like id of the source disk restore point.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## VirtualNetworkRule
### Properties
* **action**: 'Allow': The action of virtual network rule.
* **id**: string (Required): Resource ID of a subnet, for example: /subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}.
* **state**: 'deprovisioning' | 'failed' | 'networkSourceDeleted' | 'provisioning' | 'succeeded' (ReadOnly): Gets the state of virtual network rule.

## VolumeGroupProperties
### Properties
* **encryption**: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey' | string (Required): The type of key used to encrypt the data of the disk.
* **networkAcls**: [NetworkRuleSet](#networkruleset): A set of rules governing the network accessibility.
* **protocolType**: 'Iscsi' | 'None' | string (Required): Storage Target type.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the iSCSI Target.

## VolumeProperties
### Properties
* **creationData**: [SourceCreationData](#sourcecreationdata): Data used when creating a disk.
* **sizeGiB**: int: Volume size.
* **storageTarget**: [IscsiTargetInfo](#iscsitargetinfo) (ReadOnly): Iscsi target information
* **volumeId**: string (ReadOnly): Unique Id of the volume in GUID format

