# Microsoft.Maintenance @ 2020-07-01-preview

## Microsoft.Maintenance/maintenanceConfigurations
### Properties
* **apiVersion**: '2020-07-01-preview' (ReadOnly, DeployTimeConstant)
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
* **maintenanceScope**: 'All' | 'Extension' | 'Host' | 'InGuestPatch' | 'InResource' | 'OSImage' | 'Resource' | 'SQLDB' | 'SQLManagedInstance'
* **maintenanceWindow**: MaintenanceWindow
* **namespace**: string
* **visibility**: 'Custom' | 'Public'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## MaintenanceWindow
### Properties
* **duration**: string
* **expirationDateTime**: string
* **recurEvery**: string
* **startDateTime**: string
* **timeZone**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

