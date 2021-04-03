# Microsoft.Storage.Admin @ 2019-08-08-preview

## Resource Microsoft.Storage.Admin/locations/quotas@2019-08-08-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageQuotaProperties](#storagequotaproperties): Storage quota properties.
* **type**: 'Microsoft.Storage.Admin/locations/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Storage.Admin/storageServices@2019-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): Resource Location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceNameProperties](#servicenameproperties) (ReadOnly): The properties for service name.
* **type**: 'Microsoft.Storage.Admin/storageServices' (ReadOnly, DeployTimeConstant): The resource type

## StorageQuotaProperties
### Properties
* **capacityInGb**: int: Maximum capacity (GB).
* **numberOfStorageAccounts**: int: Total number of storage accounts.

## ServiceNameProperties
### Properties
* **serviceName**: string (ReadOnly): Service Name for Storage Service.

