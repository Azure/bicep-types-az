# Microsoft.AlertsManagement @ 2019-05-05-preview

## Resource Microsoft.AlertsManagement/actionRules@2019-05-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ActionRuleProperties](#actionruleproperties): Action rule properties defining scope, conditions, suppression logic for action rule
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.AlertsManagement/actionRules' (ReadOnly, DeployTimeConstant): The resource type

## ActionRuleProperties
* **Discriminator**: type
### Base Properties
* **conditions**: [Conditions](#conditions): Conditions in alert instance to be matched for a given action rule. Default value is all. Multiple values could be provided with comma separation.
* **createdAt**: string (ReadOnly): Creation time of action rule. Date-Time in ISO-8601 format.
* **createdBy**: string (ReadOnly): Created by user name.
* **description**: string: Description of action rule
* **lastModifiedAt**: string (ReadOnly): Last updated time of action rule. Date-Time in ISO-8601 format.
* **lastModifiedBy**: string (ReadOnly): Last modified by user name.
* **scope**: [Scope](#scope): Target scope for a given action rule. By default scope will be the subscription. User can also provide list of resource groups or list of resources from the scope subscription as well.
* **status**: 'Disabled' | 'Enabled': Indicates if the given action rule is enabled or disabled.
### ActionGroup
#### Properties
* **actionGroupId**: string (Required): Action group to trigger if action rule matches
* **type**: 'ActionGroup' (Required): Action rule with action group configuration

### Diagnostics
#### Properties
* **type**: 'Diagnostics' (Required): Action rule with diagnostics configuration

### Suppression
#### Properties
* **suppressionConfig**: [SuppressionConfig](#suppressionconfig) (Required): Suppression logic for a given action rule
* **type**: 'Suppression' (Required): Action rule with suppression configuration


## Conditions
### Properties
* **alertContext**: [Condition](#condition): condition to trigger an action rule
* **alertRuleId**: [Condition](#condition): condition to trigger an action rule
* **description**: [Condition](#condition): condition to trigger an action rule
* **monitorCondition**: [Condition](#condition): condition to trigger an action rule
* **monitorService**: [Condition](#condition): condition to trigger an action rule
* **severity**: [Condition](#condition): condition to trigger an action rule
* **targetResourceType**: [Condition](#condition): condition to trigger an action rule

## Condition
### Properties
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals': operator for a given condition.
* **values**: string[]: list of values to match for a given condition.

## Scope
### Properties
* **scopeType**: 'Resource' | 'ResourceGroup' | 'Subscription': type of target scope.
* **values**: string[]: list of ARM IDs of the given scope type which will be the target of the given action rule.

## ActionGroup
### Properties
* **actionGroupId**: string (Required): Action group to trigger if action rule matches
* **type**: 'ActionGroup' (Required): Action rule with action group configuration

## Diagnostics
### Properties
* **type**: 'Diagnostics' (Required): Action rule with diagnostics configuration

## Suppression
### Properties
* **suppressionConfig**: [SuppressionConfig](#suppressionconfig) (Required): Suppression logic for a given action rule
* **type**: 'Suppression' (Required): Action rule with suppression configuration

## SuppressionConfig
### Properties
* **recurrenceType**: 'Always' | 'Daily' | 'Monthly' | 'Once' | 'Weekly' (Required): Specifies when the suppression should be applied.
* **schedule**: [SuppressionSchedule](#suppressionschedule): Schedule for a given suppression configuration.

## SuppressionSchedule
### Properties
* **endDate**: string: End date for suppression
* **endTime**: string: End date for suppression
* **recurrenceValues**: int[]: Specifies the values for recurrence pattern
* **startDate**: string: Start date for suppression
* **startTime**: string: Start time for suppression

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

