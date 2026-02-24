# Microsoft.AlertsManagement @ 2021-08-08

## Resource Microsoft.AlertsManagement/actionRules@2021-08-08
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-08' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProcessingRuleProperties](#alertprocessingruleproperties): Alert processing rule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AlertsManagement/actionRules' (ReadOnly, DeployTimeConstant): The resource type

## Action
* **Discriminator**: actionType

### Base Properties

### AddActionGroups
#### Properties
* **actionGroupIds**: string[] (Required): List of action group Ids to add to alert processing rule.
* **actionType**: 'AddActionGroups' (Required): Action that should be applied.

### RemoveAllActionGroups
#### Properties
* **actionType**: 'RemoveAllActionGroups' (Required): Action that should be applied.


## AlertProcessingRuleProperties
### Properties
* **actions**: [Action](#action)[] (Required): Actions to be applied.
* **conditions**: [Condition](#condition)[]: Conditions on which alerts will be filtered.
* **description**: string: Actions to be applied.Description of alert processing rule.
* **enabled**: bool: Indicates if the given alert processing rule is enabled or disabled.
* **schedule**: [Schedule](#schedule): Scheduling for alert processing rule.
* **scopes**: string[] (Required): Scopes on which alert processing rule will apply.

## Condition
### Properties
* **field**: 'AlertContext' | 'AlertRuleId' | 'AlertRuleName' | 'Description' | 'MonitorCondition' | 'MonitorService' | 'Severity' | 'SignalType' | 'TargetResource' | 'TargetResourceGroup' | 'TargetResourceType' | string: Field for a given condition.
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals' | string: Operator for a given condition.
* **values**: string[]: List of values to match for a given condition.

## Recurrence
* **Discriminator**: recurrenceType

### Base Properties
* **endTime**: string: End time for recurrence.
* **startTime**: string: Start time for recurrence.

### DailyRecurrence
#### Properties
* **recurrenceType**: 'Daily' (Required): Specifies when the recurrence should be applied.

### MonthlyRecurrence
#### Properties
* **daysOfMonth**: int[] (Required): Specifies the values for monthly recurrence pattern.
* **recurrenceType**: 'Monthly' (Required): Specifies when the recurrence should be applied.

### WeeklyRecurrence
#### Properties
* **daysOfWeek**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[] (Required): Specifies the values for weekly recurrence pattern.
* **recurrenceType**: 'Weekly' (Required): Specifies when the recurrence should be applied.


## Schedule
### Properties
* **effectiveFrom**: string {pattern: "^(?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))$"}: Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
* **effectiveUntil**: string {pattern: "^(?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))$"}: Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
* **recurrences**: [Recurrence](#recurrence)[]: List of recurrences.
* **timeZone**: string: Scheduling time zone.

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

