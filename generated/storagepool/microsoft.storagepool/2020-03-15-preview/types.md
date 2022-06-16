# Microsoft.StoragePool @ 2020-03-15-preview

## Resource Microsoft.StoragePool/diskPools@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiskPoolCreatePropertiesOrDiskPoolProperties](#diskpoolcreatepropertiesordiskpoolproperties) (Required): Properties for Disk pool create request.
* **systemData**: [SystemMetadata](#systemmetadata) (ReadOnly): Resource metadata required by ARM RPC
* **tags**: [DiskPoolCreateTags](#diskpoolcreatetags): Resource tags.
* **type**: 'Microsoft.StoragePool/diskPools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.StoragePool/diskPools/iscsiTargets@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IscsiTargetCreatePropertiesOrIscsiTargetProperties](#iscsitargetcreatepropertiesoriscsitargetproperties) (Required): Properties for iSCSI target create request.
* **type**: 'Microsoft.StoragePool/diskPools/iscsiTargets' (ReadOnly, DeployTimeConstant): The resource type

## Acl
### Properties
* **credentials**: [IscsiTargetCredentials](#iscsitargetcredentials) (WriteOnly): Challenge Handshake Authentication Protocol (CHAP) credentials to set for the ACL. Credentials can not be updated for an ACL.
* **initiatorIqn**: string (Required): iSCSI initiator IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:client".
* **mappedLuns**: string[] (Required): List of LUN names mapped to the ACL.

## Attributes
### Properties
* **authentication**: bool (Required): Indicates whether or not authentication is enabled on the ACL.
* **prodModeWriteProtect**: bool (Required): Indicates whether or not write protect is enabled on the LUNs.

## Disk
### Properties
* **id**: string (Required): Unique Azure Resource ID of the Managed Disk.

## DiskPoolCreatePropertiesOrDiskPoolProperties
### Properties
* **additionalCapabilities**: string[]: List of additional capabilities for a Disk pool.
* **availabilityZones**: string[] (Required): Logical zone for Disk pool resource; example: ["1"].
* **disks**: [Disk](#disk)[]: List of Azure Managed Disks to attach to a Disk pool. Can attach 8 disks at most.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' | string (ReadOnly): Operational status of the Disk pool.
* **subnetId**: string (Required): Azure Resource ID of a Subnet for the Disk pool.
* **tier**: 'Basic' | 'Premium' | 'Standard' | string (Required): Determines the SKU of VM deployed for Disk pool

## DiskPoolCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IscsiLun
### Properties
* **managedDiskAzureResourceId**: string (Required): Azure Resource ID of the Managed Disk.
* **name**: string (Required): User defined name for iSCSI LUN; example: "lun0"

## IscsiTargetCreatePropertiesOrIscsiTargetProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' | string (ReadOnly): State of the operation on the resource.
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' | string (ReadOnly): Operational status of the iSCSI target.
* **targetIqn**: string: iSCSI target IQN (iSCSI Qualified Name); example: "iqn.2005-03.org.iscsi:server".
* **tpgs**: [TargetPortalGroupCreateOrTargetPortalGroup](#targetportalgroupcreateortargetportalgroup)[] (Required): List of iSCSI target portal groups. Can have 1 portal group at most.

## IscsiTargetCredentials
### Properties
* **password**: string (Required): Password for Challenge Handshake Authentication Protocol (CHAP) authentication.
* **username**: string (Required): Username for Challenge Handshake Authentication Protocol (CHAP) authentication.

## SystemMetadata
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: A string identifier for the identity that created the resource.
* **createdByType**: string: The type of identity that created the resource: user, application, managedIdentity.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC).
* **lastModifiedBy**: string: A string identifier for the identity that last modified the resource.
* **lastModifiedByType**: string: The type of identity that last modified the resource: user, application, managedIdentity.

## TargetPortalGroupCreateOrTargetPortalGroup
### Properties
* **acls**: [Acl](#acl)[] (Required): Access Control List (ACL) for an iSCSI target portal group.
* **attributes**: [Attributes](#attributes) (Required): Attributes of an iSCSI target portal group.
* **endpoints**: string[] (ReadOnly): List of private IPv4 addresses to connect to the iSCSI target.
* **luns**: [IscsiLun](#iscsilun)[] (Required): List of LUNs to be exposed through the iSCSI target portal group.
* **port**: int (ReadOnly): The port used by iSCSI target portal group.
* **tag**: int (ReadOnly): The tag associated with the iSCSI target portal group.

