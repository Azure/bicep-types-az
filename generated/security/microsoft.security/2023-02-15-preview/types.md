# Microsoft.Security @ 2023-02-15-preview

## Resource Microsoft.Security/sensitivitySettings@2023-02-15-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-02-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [GetSensitivitySettingsResponseProperties](#getsensitivitysettingsresponseproperties) (ReadOnly): The sensitivity settings properties
* **sensitiveInfoTypesIds**: string[] (Required, WriteOnly): List of selected sensitive info types' IDs.
* **sensitivityThresholdLabelId**: string (WriteOnly): The id of the sensitivity threshold label. Any label at or above this rank will be considered sensitive.
* **sensitivityThresholdLabelOrder**: int (WriteOnly): The order of the sensitivity threshold label. Any label at or above this order will be considered sensitive. If set to -1, sensitivity by labels is turned off
* **type**: 'Microsoft.Security/sensitivitySettings' (ReadOnly, DeployTimeConstant): The resource type

## BuiltInInfoType
### Properties
* **id**: string: Id of the info type
* **name**: string: Display name of the info type
* **type**: string: Category of the built-in info type

## GetSensitivitySettingsResponseProperties
### Properties
* **mipInformation**: [GetSensitivitySettingsResponsePropertiesMipInformation](#getsensitivitysettingsresponsepropertiesmipinformation): Microsoft information protection built-in and custom information types, labels, and integration status.
* **sensitiveInfoTypesIds**: string[]: List of selected sensitive info types' IDs.
* **sensitivityThresholdLabelId**: string: The id of the sensitivity threshold label. Any label at or above this rank will be considered sensitive.
* **sensitivityThresholdLabelOrder**: int: The order of the sensitivity threshold label. Any label at or above this order will be considered sensitive. If set to -1, sensitivity by labels is turned off

## GetSensitivitySettingsResponsePropertiesMipInformation
### Properties
* **builtInInfoTypes**: [BuiltInInfoType](#builtininfotype)[]: List of pre-configured sensitive information types
* **customInfoTypes**: [InfoType](#infotype)[]: List of custom user-defined information types
* **labels**: [Label](#label)[]: List of Microsoft information protection sensitivity labels
* **mipIntegrationStatus**: 'Ok' | 'noAutoLabelingRules' | 'noConsent' | 'noMipLabels' | string: Microsoft information protection integration status

## InfoType
### Properties
* **description**: string: Description of the info type
* **id**: string: Id of the info type
* **name**: string: Display name of the info type

## Label
### Properties
* **id**: string: The ID of the label
* **name**: string: The display name of the label
* **order**: int: Labels are ordered by sensitivity level. The higher the order of the label, the more sensitive it is.

