# Microsoft.Maintenance @ 2020-04-01

## Resource Microsoft.Maintenance/configurationAssignments@2020-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationAssignmentProperties (WriteOnly)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
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

