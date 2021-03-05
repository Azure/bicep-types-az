# Microsoft.OperationalInsights @ 2015-11-01-preview

## Resource Microsoft.OperationalInsights/workspaces@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **eTag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'AzureActivityLog' | 'ChangeTrackingCustomRegistry' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingPath' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: any (Required)
* **tags**: ProxyResourceTags
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedServiceProperties (Required)
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedServiceProperties
### Properties
* **resourceId**: string (Required)

