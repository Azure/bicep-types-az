# Microsoft.Security @ 2021-06-01

## Resource Microsoft.Security/settings@2021-06-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2021-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'Sentinel' | 'WDATP' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type
### AlertSyncSettings
#### Properties
* **kind**: 'AlertSyncSettings' (Required): the kind of the settings string
* **properties**: [AlertSyncSettingProperties](#alertsyncsettingproperties): The alert sync setting properties

### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required): the kind of the settings string
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): The data export setting properties


## AlertSyncSettingProperties
### Properties
* **enabled**: bool (Required): Is the alert sync setting enabled

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting enabled

