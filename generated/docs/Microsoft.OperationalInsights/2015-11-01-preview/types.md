# Microsoft.OperationalInsights @ 2015-11-01-preview

## Microsoft.OperationalInsights/workspaces/dataSources
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'AzureActivityLog' | 'ChangeTrackingCustomRegistry' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingPath' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.OperationalInsights/workspaces/linkedServices
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedServiceProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## LinkedServiceProperties
### Properties
* **resourceId**: string (Required)

## Microsoft.OperationalInsights/workspaces
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant)

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly)
* **portalUrl**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded'
* **retentionInDays**: int
* **sku**: Sku
* **source**: string (ReadOnly)

## Sku
### Properties
* **name**: 'CapacityReservation' | 'Free' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

