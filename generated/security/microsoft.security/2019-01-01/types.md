# Microsoft.Security @ 2019-01-01

## Resource Microsoft.Security/advancedThreatProtectionSettings@2019-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties): The Advanced Threat Protection settings.
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Security/settings@2019-01-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant): The resource type
### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required): Represents a data export setting
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): The data export setting properties


## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool: Indicates whether Advanced Threat Protection is enabled.

## DataExportSettings
### Properties
* **kind**: 'DataExportSettings' (Required): Represents a data export setting
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties): The data export setting properties

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required): Is the data export setting is enabled

