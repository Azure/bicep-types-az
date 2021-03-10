# Microsoft.Security @ 2019-01-01

## Resource Microsoft.Security/advancedThreatProtectionSettings@2019-01-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [AdvancedThreatProtectionProperties](#advancedthreatprotectionproperties)
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Security/settings@2019-01-01
* **Valid Scope(s)**: Subscription
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant)
### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties)


## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool

## DataExportSettings
### Properties
* **kind**: 'DataExportSettings' (Required)
* **properties**: [DataExportSettingProperties](#dataexportsettingproperties)

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required)

