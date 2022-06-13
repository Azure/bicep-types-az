# Microsoft.WorkloadMonitor @ 2018-08-31-preview

## Resource Microsoft.WorkloadMonitor/notificationSettings@2018-08-31-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationSettingProperties](#notificationsettingproperties) (ReadOnly): Properties of Notification Settings
* **type**: 'Microsoft.WorkloadMonitor/notificationSettings' (ReadOnly, DeployTimeConstant): The resource type

## NotificationSettingProperties
### Properties
* **actionGroupResourceIds**: string[] (ReadOnly): List of action group resource ids to be notified

