# Microsoft.Security @ 2019-01-01

## Microsoft.Security/advancedThreatProtectionSettings
### Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AdvancedThreatProtectionProperties
* **type**: 'Microsoft.Security/advancedThreatProtectionSettings' (ReadOnly, DeployTimeConstant)

## AdvancedThreatProtectionProperties
### Properties
* **isEnabled**: bool

## Microsoft.Security/settings
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-01-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'MCAS' | 'WDATP' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Security/settings' (ReadOnly, DeployTimeConstant)
### DataExportSettings
#### Properties
* **kind**: 'DataExportSettings' (Required)
* **properties**: DataExportSettingProperties


## DataExportSettings
### Properties
* **kind**: 'DataExportSettings' (Required)
* **properties**: DataExportSettingProperties

## DataExportSettingProperties
### Properties
* **enabled**: bool (Required)

