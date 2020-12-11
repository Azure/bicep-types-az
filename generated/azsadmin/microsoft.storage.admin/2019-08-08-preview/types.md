# Microsoft.Storage.Admin @ 2019-08-08-preview

## Resource Microsoft.Storage.Admin/locations/quotas@2019-08-08-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageQuotaProperties
* **type**: 'Microsoft.Storage.Admin/locations/quotas' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Storage.Admin/locations/settings@2019-08-08-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-08-08-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SettingProperties
* **type**: 'Microsoft.Storage.Admin/locations/settings' (ReadOnly, DeployTimeConstant)

## StorageQuotaProperties
### Properties
* **capacityInGb**: int
* **numberOfStorageAccounts**: int

## SettingProperties
### Properties
* **retentionPeriodForDeletedStorageAccountsInDays**: int

