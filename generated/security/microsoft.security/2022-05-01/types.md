# Microsoft.Security @ 2022-05-01

## Resource Microsoft.Security/settings@2022-05-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2022-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'Sentinel' | 'WDATP' | 'WDATP_EXCLUDE_LINUX_PUBLIC_PREVIEW' | 'WDATP_UNIFIED_SOLUTION' | string (Required, DeployTimeConstant): The resource name
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

