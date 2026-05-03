# Microsoft.Security @ 2022-05-01

## Resource Microsoft.Security/settings@2022-05-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'Sentinel' | 'WDATP' | 'WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW' | 'WDATP_UNIFIED_SOLUTION' | 'current' | string (Required, DeployTimeConstant): The resource name
* **properties**: any: The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type

### AlertSyncSettings
#### Properties
* **kind**: 'AlertSyncSettings' (Required): the kind of the settings string
* **properties**: [AlertSyncSettingProperties](#alertsyncsettingproperties): Alert sync setting data

### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required): the kind of the settings string
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): Data export setting data


## AlertSyncSettingProperties
### Properties
* **enabled**: bool (Required): Is the alert sync setting enabled

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting enabled

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

