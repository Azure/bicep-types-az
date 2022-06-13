# Microsoft.OperationalInsights @ 2015-11-01-preview

## Resource Microsoft.OperationalInsights/workspaces@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the workspace.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): Workspace properties.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.OperationalInsights/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/dataSources@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string: The ETag of the data source.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'AzureActivityLog' | 'ChangeTrackingCustomRegistry' | 'ChangeTrackingDefaultPath' | 'ChangeTrackingDefaultRegistry' | 'ChangeTrackingPath' | 'CustomLog' | 'CustomLogCollection' | 'GenericDataSource' | 'IISLogs' | 'LinuxPerformanceCollection' | 'LinuxPerformanceObject' | 'LinuxSyslog' | 'LinuxSyslogCollection' | 'WindowsEvent' | 'WindowsPerformanceCounter' | string (Required): The kind of the DataSource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: any (Required): The data source properties in raw json format, each kind of data source have it's own schema.
* **tags**: [ProxyResourceTags](#proxyresourcetags): Resource tags
* **type**: 'Microsoft.OperationalInsights/workspaces/dataSources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/workspaces/linkedServices@2015-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedServiceProperties](#linkedserviceproperties) (Required): The properties of the linked service.
* **type**: 'Microsoft.OperationalInsights/workspaces/linkedServices' (ReadOnly, DeployTimeConstant): The resource type

## LinkedServiceProperties
### Properties
* **resourceId**: string (Required): The resource id of the resource that will be linked to the workspace.

## ProxyResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Sku
### Properties
* **name**: 'CapacityReservation' | 'Free' | 'PerGB2018' | 'PerNode' | 'Premium' | 'Standalone' | 'Standard' | string (Required): The name of the SKU.

## WorkspaceProperties
### Properties
* **customerId**: string (ReadOnly): This is a read-only property. Represents the ID associated with the workspace.
* **portalUrl**: string (ReadOnly): This is a legacy property and is not used anymore. Kept here for backward compatibility.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'ProvisioningAccount' | 'Succeeded' | string: The provisioning state of the workspace.
* **retentionInDays**: int: The workspace data retention in days. -1 means Unlimited retention for the Unlimited Sku. 730 days is the maximum allowed for all other Skus.
* **sku**: [Sku](#sku): The SKU of the workspace.
* **source**: string (ReadOnly): This is a read-only legacy property. It is always set to 'Azure' by the service. Kept here for backward compatibility.

