# Microsoft.AlertsManagement @ 2021-08-08

## Resource Microsoft.AlertsManagement/actionRules@2021-08-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-08' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProcessingRuleProperties](#alertprocessingruleproperties): Alert processing rule properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Alert processing rule system data.
* **tags**: [ManagedResourceTags](#managedresourcetags): Resource tags
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
* **description**: string: Description of alert processing rule.
* **enabled**: bool: Indicates if the given alert processing rule is enabled or disabled.
* **schedule**: [Schedule](#schedule): Scheduling for alert processing rule.
* **scopes**: string[] (Required): Scopes on which alert processing rule will apply.

## Condition
### Properties
* **field**: 'AlertContext' | 'AlertRuleId' | 'AlertRuleName' | 'Description' | 'MonitorCondition' | 'MonitorService' | 'Severity' | 'SignalType' | 'TargetResource' | 'TargetResourceGroup' | 'TargetResourceType' | string: Field for a given condition.
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals' | string: Operator for a given condition.
* **values**: string[]: List of values to match for a given condition.

## ManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[] (Required): Specifies the values for weekly recurrence pattern.
* **recurrenceType**: 'Weekly' (Required): Specifies when the recurrence should be applied.


## Schedule
### Properties
* **effectiveFrom**: string: Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
* **effectiveUntil**: string: Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
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

