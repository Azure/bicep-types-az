# Microsoft.StoragePool @ 2020-03-15-preview

## Resource Microsoft.StoragePool/diskPools@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiskPoolCreateProperties (Required)
* **tags**: DiskPoolCreateTags
* **type**: 'Microsoft.StoragePool/diskPools' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.StoragePool/diskPools/iscsiTargets@2020-03-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IscsiTargetCreateProperties (Required)
* **type**: 'Microsoft.StoragePool/diskPools/iscsiTargets' (ReadOnly, DeployTimeConstant)

## DiskPoolCreateProperties
### Properties
* **additionalCapabilities**: string[]
* **availabilityZones**: string[] (Required)
* **disks**: Disk[]
* **subnetId**: string (Required)
* **tier**: 'Basic' | 'Premium' | 'Standard' (Required)

## Disk
### Properties
* **id**: string (Required)

## DiskPoolCreateTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## IscsiTargetCreateProperties
### Properties
* **targetIqn**: string
* **tpgs**: TargetPortalGroupCreate[] (Required)

## TargetPortalGroupCreate
### Properties
* **acls**: Acl[] (Required)
* **attributes**: Attributes (Required)
* **luns**: IscsiLun[] (Required)

## Acl
### Properties
* **credentials**: IscsiTargetCredentials
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

