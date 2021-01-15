# Microsoft.Maintenance @ 2020-04-01

## Resource Microsoft.Maintenance/maintenanceConfigurations@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MaintenanceConfigurationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Maintenance/maintenanceConfigurations' (ReadOnly, DeployTimeConstant)

## MaintenanceConfigurationProperties
### Properties
* **extensionProperties**: Dictionary<string,String>
* **maintenanceScope**: 'All' | 'Host' | 'InResource' | 'Resource'
* **namespace**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

