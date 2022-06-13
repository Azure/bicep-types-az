# Microsoft.AlertsManagement @ 2019-05-05-preview

## Resource Microsoft.AlertsManagement/actionRules@2019-05-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRuleProperties](#actionruleproperties): action rule properties
* **tags**: [ManagedResourceTags](#managedresourcetags): Resource tags
* **type**: 'Microsoft.AlertsManagement/actionRules' (ReadOnly, DeployTimeConstant): The resource type

## ActionRuleProperties
* **Discriminator**: type

### Base Properties
* **conditions**: [Conditions](#conditions): conditions on which alerts will be filtered
* **createdAt**: string (ReadOnly): Creation time of action rule. Date-Time in ISO-8601 format.
* **createdBy**: string (ReadOnly): Created by user name.
* **description**: string: Description of action rule
* **lastModifiedAt**: string (ReadOnly): Last updated time of action rule. Date-Time in ISO-8601 format.
* **lastModifiedBy**: string (ReadOnly): Last modified by user name.
* **scope**: [Scope](#scope): scope on which action rule will apply
* **status**: 'Disabled' | 'Enabled' | string: Indicates if the given action rule is enabled or disabled
### ActionGroup
#### Properties
* **actionGroupId**: string (Required): Action group to trigger if action rule matches
* **type**: 'ActionGroup' (Required): Indicates type of action rule

### Diagnostics
#### Properties
* **type**: 'Diagnostics' (Required): Indicates type of action rule

### Suppression
#### Properties
* **suppressionConfig**: [SuppressionConfig](#suppressionconfig) (Required): suppression configuration for the action rule
* **type**: 'Suppression' (Required): Indicates type of action rule


## Condition
### Properties
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals' | string: operator for a given condition
* **values**: string[]: list of values to match for a given condition.

## Conditions
### Properties
* **alertContext**: [Condition](#condition): filter alerts by alert context (payload)
* **alertRuleId**: [Condition](#condition): filter alerts by alert rule id
* **description**: [Condition](#condition): filter alerts by alert rule description
* **monitorCondition**: [Condition](#condition): filter alerts by monitor condition
* **monitorService**: [Condition](#condition): filter alerts by monitor service
* **severity**: [Condition](#condition): filter alerts by severity
* **targetResourceType**: [Condition](#condition): filter alerts by target resource type

## ManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Scope
### Properties
* **scopeType**: 'Resource' | 'ResourceGroup' | 'Subscription' | string: type of target scope
* **values**: string[]: list of ARM IDs of the given scope type which will be the target of the given action rule.

## SuppressionConfig
### Properties
* **recurrenceType**: 'Always' | 'Daily' | 'Monthly' | 'Once' | 'Weekly' | string (Required): Specifies when the suppression should be applied
* **schedule**: [SuppressionSchedule](#suppressionschedule): suppression schedule configuration

## SuppressionSchedule
### Properties
* **endDate**: string: End date for suppression
* **endTime**: string: End date for suppression
* **recurrenceValues**: int[]: Specifies the values for recurrence pattern
* **startDate**: string: Start date for suppression
* **startTime**: string: Start time for suppression

