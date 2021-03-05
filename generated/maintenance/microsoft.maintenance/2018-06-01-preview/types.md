# Microsoft.Maintenance @ 2018-06-01-preview

## Resource Microsoft.Maintenance/configurationAssignments@2018-06-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationAssignmentProperties (WriteOnly)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceConfigurationProperties
* **tags**: MaintenanceConfigurationTags
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant)

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string (WriteOnly)
* **resourceId**: string (WriteOnly)

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: MaintenanceConfigurationPropertiesExtensionProperties
* **maintenanceScope**: 'All' | 'Host' | 'InResource' | 'Resource'
* **namespace**: string

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

