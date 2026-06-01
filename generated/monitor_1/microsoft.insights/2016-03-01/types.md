# Microsoft.Insights @ 2016-03-01

## Resource Microsoft.Insights/logprofiles@2016-03-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2016-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogProfileProperties](#logprofileproperties) (Required): The log profile properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/logprofiles' (ReadOnly, DeployTimeConstant): The resource type

## LogProfileProperties
### Properties
* **categories**: string[] (Required): the categories of the logs. These categories are created as is convenient to the user. Some values are: 'Write', 'Delete', and/or 'Action.'
* **locations**: string[] (Required): List of regions for which Activity Log events should be stored or streamed. It is a comma separated list of valid ARM locations including the 'global' location.
* **retentionPolicy**: [MicrosoftCommonRetentionPolicy](#microsoftcommonretentionpolicy) (Required): the retention policy for the events in the log.
* **serviceBusRuleId**: string: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
* **storageAccountId**: string: the resource id of the storage account to which you would like to send the Activity Log.

## MicrosoftCommonRetentionPolicy
### Properties
* **days**: int {minValue: 0} (Required): the number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): a value indicating whether the retention policy is enabled.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

