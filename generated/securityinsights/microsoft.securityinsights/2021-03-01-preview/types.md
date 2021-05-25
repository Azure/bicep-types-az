# Microsoft.SecurityInsights @ 2021-03-01-preview

## Resource Microsoft.SecurityInsights/settings@2021-03-01-preview
* **Valid Scope(s)**: Extension
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Etag of the azure resource
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.SecurityInsights/settings' (ReadOnly, DeployTimeConstant): The resource type
### EntityAnalytics
#### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

### EyesOn
#### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

### Ueba
#### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.


## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## EntityAnalytics
### Properties
* **kind**: 'EntityAnalytics' (Required): Settings with single toggle.
* **properties**: [EntityAnalyticsProperties](#entityanalyticsproperties): EntityAnalytics property bag.

## EntityAnalyticsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## EyesOn
### Properties
* **kind**: 'EyesOn' (Required): Settings with single toggle.
* **properties**: [EyesOnSettingsProperties](#eyesonsettingsproperties): EyesOn property bag.

## EyesOnSettingsProperties
### Properties
* **isEnabled**: bool (ReadOnly): Determines whether the setting is enable or disabled.

## Ueba
### Properties
* **kind**: 'Ueba' (Required): Settings with single toggle.
* **properties**: [UebaProperties](#uebaproperties): Ueba property bag.

## UebaProperties
### Properties
* **dataSources**: 'AuditLogs' | 'AzureActivity' | 'SecurityEvent' | 'SigninLogs'[]: The relevant data sources that enriched by ueba

