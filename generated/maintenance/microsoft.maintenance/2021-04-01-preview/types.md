# Microsoft.Maintenance @ 2021-04-01-preview

## Resource Microsoft.Maintenance/configurationAssignments@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationAssignmentProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceConfigurationProperties
* **systemData**: SystemData (ReadOnly)
* **tags**: MaintenanceConfigurationTags
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant)

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string
* **resourceId**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: MaintenanceConfigurationPropertiesExtensionProperties
* **installPatches**: InputPatchConfiguration
* **maintenanceScope**: 'Extension' | 'Host' | 'InGuestPatch' | 'OSImage' | 'SQLDB' | 'SQLManagedInstance'
* **maintenanceWindow**: MaintenanceWindow
* **namespace**: string
* **visibility**: 'Custom' | 'Public'

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InputPatchConfiguration
### Properties
* **linuxParameters**: InputLinuxParameters
* **rebootSetting**: 'AlwaysReboot' | 'NeverReboot' | 'RebootIfRequired'
* **tasks**: SoftwareUpdateConfigurationTasks
* **windowsParameters**: InputWindowsParameters

## InputLinuxParameters
### Properties
* **classificationsToInclude**: string[]
* **packageNameMasksToExclude**: string[]
* **packageNameMasksToInclude**: string[]

## SoftwareUpdateConfigurationTasks
### Properties
* **postTasks**: TaskProperties[]
* **preTasks**: TaskProperties[]

## TaskProperties
### Properties
* **parameters**: TaskPropertiesParameters
* **source**: string
* **taskScope**: 'Global' | 'Resource'

## TaskPropertiesParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InputWindowsParameters
### Properties
* **classificationsToInclude**: string[]
* **kbNumbersToExclude**: string[]
* **kbNumbersToInclude**: string[]

## MaintenanceWindow
### Properties
* **duration**: string
* **expirationDateTime**: string
* **recurEvery**: string
* **startDateTime**: string
* **timeZone**: string

## MaintenanceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

