# Microsoft.Maintenance @ 2020-07-01-preview

## Resource Microsoft.Maintenance/applyUpdates@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/configurationAssignments@2020-07-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties)
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags)
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant)

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string
* **resourceId**: string

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: [MaintenanceConfigurationPropertiesExtensionProperties](#maintenanceconfigurationpropertiesextensionproperties)
* **maintenanceScope**: 'All' | 'Extension' | 'Host' | 'InGuestPatch' | 'InResource' | 'OSImage' | 'Resource' | 'SQLDB' | 'SQLManagedInstance'
* **maintenanceWindow**: [MaintenanceWindow](#maintenancewindow)
* **namespace**: string
* **visibility**: 'Custom' | 'Public'

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

