# Microsoft.Maintenance @ 2020-04-01

## Resource Microsoft.Maintenance/applyUpdates@2020-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **type**: 'Microsoft.Maintenance/applyUpdates' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/configurationAssignments@2020-04-01
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationAssignmentProperties](#configurationassignmentproperties): Properties for configuration assignment
* **type**: 'Microsoft.Maintenance/configurationAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Gets or sets location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MaintenanceConfigurationProperties](#maintenanceconfigurationproperties): Properties for maintenance configuration
* **tags**: [MaintenanceConfigurationTags](#maintenanceconfigurationtags): Gets or sets tags of the resource
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## ConfigurationAssignmentProperties
### Properties
* **maintenanceConfigurationId**: string: The maintenance configuration Id
* **resourceId**: string: The unique resourceId

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: [MaintenanceConfigurationPropertiesExtensionProperties](#maintenanceconfigurationpropertiesextensionproperties): Gets or sets extensionProperties of the maintenanceConfiguration. This is for future use only and would be a set of key value pairs for additional information e.g. whether to follow SDP etc.
* **maintenanceScope**: 'All' | 'Host' | 'InResource' | 'Resource': Gets or sets maintenanceScope of the configuration. It represent the impact area of the maintenance
* **namespace**: string: Gets or sets namespace of the resource e.g. Microsoft.Maintenance or Microsoft.Sql

## MaintenanceConfigurationPropertiesExtensionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

