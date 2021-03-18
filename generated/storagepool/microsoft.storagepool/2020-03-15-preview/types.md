# Microsoft.StoragePool @ 2020-03-15-preview

## Resource Microsoft.StoragePool/diskPools@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiskPoolCreateProperties](#diskpoolcreateproperties) (Required)
* **systemData**: [SystemMetadata](#systemmetadata) (ReadOnly)
* **tags**: [DiskPoolCreateTags](#diskpoolcreatetags)
* **type**: 'Microsoft.StoragePool/diskPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StoragePool/diskPools/iscsiTargets@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IscsiTargetCreateProperties](#iscsitargetcreateproperties) (Required)
* **type**: 'Microsoft.StoragePool/diskPools/iscsiTargets' (ReadOnly, DeployTimeConstant)

## DiskPoolCreateProperties
### Properties
* **additionalCapabilities**: string[]
* **availabilityZones**: string[] (Required)
* **disks**: [Disk](#disk)[]
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' (ReadOnly)
* **subnetId**: string (Required)
* **tier**: 'Basic' | 'Premium' | 'Standard' (Required)

## Disk
### Properties
* **id**: string (Required)

## SystemMetadata
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: string (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: string (ReadOnly)

## DiskPoolCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IscsiTargetCreateProperties
### Properties
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Pending' | 'Succeeded' | 'Updating' (ReadOnly)
* **status**: 'Healthy' | 'Invalid' | 'Running' | 'Stopped (deallocated)' | 'Stopped' | 'Unhealthy' | 'Unknown' | 'Updating' (ReadOnly)
* **targetIqn**: string
* **tpgs**: [TargetPortalGroupCreate](#targetportalgroupcreate)[] (Required)

## TargetPortalGroupCreate
### Properties
* **acls**: [Acl](#acl)[] (Required)
* **attributes**: [Attributes](#attributes) (Required)
* **endpoints**: string[] (ReadOnly)
* **luns**: [IscsiLun](#iscsilun)[] (Required)
* **port**: int (ReadOnly)
* **tag**: int (ReadOnly)

## Acl
### Properties
* **credentials**: [IscsiTargetCredentials](#iscsitargetcredentials)
* **initiatorIqn**: string (Required)
* **mappedLuns**: string[] (Required)

## IscsiTargetCredentials
### Properties
* **password**: string (Required)
* **username**: string (Required)

## Attributes
### Properties
* **authentication**: bool (Required)
* **prodModeWriteProtect**: bool (Required)

## IscsiLun
### Properties
* **managedDiskAzureResourceId**: string (Required)
* **name**: string (Required)

