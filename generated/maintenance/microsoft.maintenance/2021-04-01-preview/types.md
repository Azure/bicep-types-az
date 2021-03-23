# Microsoft.Maintenance @ 2021-04-01-preview

## Resource Microsoft.Maintenance/applyUpdates@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/configurationAssignments@2021-04-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2021-04-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags)
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
* **extensionProperties**: [MaintenanceConfigurationPropertiesExtensionProperties](#maintenanceconfigurationpropertiesextensionproperties)
* **installPatches**: [InputPatchConfiguration](#inputpatchconfiguration)
* **maintenanceScope**: 'Extension' | 'Host' | 'InGuestPatch' | 'OSImage' | 'SQLDB' | 'SQLManagedInstance'
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow)
* **namespace**: string
* **visibility**: 'Custom' | 'Public'

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InputPatchConfiguration
### Properties
* **linuxParameters**: [InputLinuxParameters](#inputlinuxparameters)
* **rebootSetting**: 'AlwaysReboot' | 'NeverReboot' | 'RebootIfRequired'
* **tasks**: [SoftwareUpdateConfigurationTasks](#softwareupdateconfigurationtasks)
* **windowsParameters**: [InputWindowsParameters](#inputwindowsparameters)

## InputLinuxParameters
### Properties
* **classificationsToInclude**: string[]
* **packageNameMasksToExclude**: string[]
* **packageNameMasksToInclude**: string[]

## SoftwareUpdateConfigurationTasks
### Properties
* **postTasks**: [TaskProperties](#taskproperties)[]
* **preTasks**: [TaskProperties](#taskproperties)[]

## TaskProperties
### Properties
* **parameters**: [TaskPropertiesParameters](#taskpropertiesparameters)
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

