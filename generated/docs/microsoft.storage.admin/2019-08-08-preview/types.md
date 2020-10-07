# Microsoft.Storage.Admin @ 2019-08-08-preview

## Microsoft.Storage.Admin/locations/quotas
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageQuotaProperties
* **type**: 'Microsoft.Storage.Admin/locations/quotas' (ReadOnly, DeployTimeConstant)

## StorageQuotaProperties
### Properties
* **capacityInGb**: int
* **numberOfStorageAccounts**: int

## Microsoft.Storage.Admin/locations/settings
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SettingProperties
* **type**: 'Microsoft.Storage.Admin/locations/settings' (ReadOnly, DeployTimeConstant)

## SettingProperties
### Properties
* **retentionPeriodForDeletedStorageAccountsInDays**: int

