# Microsoft.AlertsManagement @ 2021-08-08-preview

## Resource Microsoft.AlertsManagement/actionRules@2021-08-08-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-08-08-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRuleProperties](#actionruleproperties): Action rule properties defining scopes, conditions and scheduling logic for action rule
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ManagedResourceTags](#managedresourcetags): Resource tags
* **type**: 'Microsoft.AlertsManagement/actionRules' (ReadOnly, DeployTimeConstant): The resource type

## ActionRuleProperties
### Properties
* **actions**: [Action](#action)[] (Required): Actions to be applied
* **conditions**: [Condition](#condition)[]: Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
* **description**: string: Description of action rule
* **enabled**: bool: Indicates if the given action rule is enabled or disabled
* **schedule**: [Schedule](#schedule): Scheduling configuration for a given action rule
* **scopes**: string[] (Required): List of ARM IDs which will be the target of the given action rule.

## Action
* **Discriminator**: actionType

### Base Properties
### AddActionGroups
#### Properties
* **actionGroupIds**: string[] (Required): List of action group Ids to add to action rule
* **actionType**: 'AddActionGroups' (Required): Action that should be applied

### RemoveAllActionGroups
#### Properties
* **actionType**: 'RemoveAllActionGroups' (Required): Action that should be applied


## Condition
### Properties
* **field**: 'AlertContext' | 'AlertRuleId' | 'AlertRuleName' | 'Description' | 'MonitorCondition' | 'MonitorService' | 'Severity' | 'SignalType' | 'TargetResource' | 'TargetResourceGroup' | 'TargetResourceType': Field for a given condition
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals': Operator for a given condition
* **values**: string[]: List of values to match for a given condition.

## Schedule
### Properties
* **effectiveFrom**: string: Scheduling effective from time. Date-Time in ISO-8601 format without timezone suffix.
* **effectiveUntil**: string: Scheduling effective until time. Date-Time in ISO-8601 format without timezone suffix.
* **recurrences**: [Recurrence](#recurrence)[]: List of recurrences
* **timeZone**: string: Scheduling time zone

## Recurrence
* **Discriminator**: recurrenceType

### Base Properties
* **endTime**: string: End time for recurrence
* **startTime**: string: Start time for recurrence
### DailyRecurrence
#### Properties
* **recurrenceType**: 'Daily' (Required): Specifies when the recurrence should be applied

### MonthlyRecurrence
#### Properties
* **daysOfMonth**: int[] (Required): Specifies the values for monthly recurrence pattern
* **recurrenceType**: 'Monthly' (Required): Specifies when the recurrence should be applied

### WeeklyRecurrence
#### Properties
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[] (Required): Specifies the values for weekly recurrence pattern
* **recurrenceType**: 'Weekly' (Required): Specifies when the recurrence should be applied


## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## ManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

