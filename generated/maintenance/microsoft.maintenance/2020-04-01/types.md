# Microsoft.Maintenance @ 2020-04-01

## Resource Microsoft.Maintenance/applyUpdates@2020-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/configurationAssignments@2020-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties)
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
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

