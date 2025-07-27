# Microsoft.Insights @ 2016-03-01

## Resource Microsoft.Insights/logprofiles@2016-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogProfileProperties](#logprofileproperties) (Required): The log profile properties of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/logprofiles' (ReadOnly, DeployTimeConstant): The resource type

## LogProfileProperties
### Properties
* **categories**: string[] (Required): the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
* **locations**: string[] (Required): List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy) (Required): the retention policy for the events in the log.
* **serviceBusRuleId**: string: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
* **storageAccountId**: string: the resource id of the storage account to which you would like to send the Activity Log.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetentionPolicy
### Properties
* **days**: int {minValue: 0} (Required): the number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): a value indicating whether the retention policy is enabled.

