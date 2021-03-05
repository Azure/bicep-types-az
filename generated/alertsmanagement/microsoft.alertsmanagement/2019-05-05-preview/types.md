# Microsoft.AlertsManagement @ 2019-05-05-preview

## Resource Microsoft.AlertsManagement/actionRules@2019-05-05-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ActionRuleProperties
* **tags**: ManagedResourceTags
* **type**: 'Microsoft.AlertsManagement/actionRules' (ReadOnly, DeployTimeConstant)

## ActionRuleProperties
* **Discriminator**: type

### Base Properties
* **conditions**: Conditions
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **description**: string
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **scope**: Scope
* **status**: 'Disabled' | 'Enabled'
### ActionGroup
#### Properties
* **actionGroupId**: string (Required)
* **type**: 'ActionGroup' (Required)

### Diagnostics
#### Properties
* **type**: 'Diagnostics' (Required)

### Suppression
#### Properties
* **suppressionConfig**: SuppressionConfig (Required)
* **type**: 'Suppression' (Required)


## Conditions
### Properties
* **alertContext**: Condition
* **alertRuleId**: Condition
* **description**: Condition
* **monitorCondition**: Condition
* **monitorService**: Condition
* **severity**: Condition
* **targetResourceType**: Condition

## Condition
### Properties
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals'
* **values**: string[]

## Scope
### Properties
* **scopeType**: 'Resource' | 'ResourceGroup' | 'Subscription'
* **values**: string[]

## ActionGroup
### Properties
* **actionGroupId**: string (Required)
* **type**: 'ActionGroup' (Required)

## Diagnostics
### Properties
* **type**: 'Diagnostics' (Required)

## Suppression
### Properties
* **suppressionConfig**: SuppressionConfig (Required)
* **type**: 'Suppression' (Required)

## SuppressionConfig
### Properties
* **recurrenceType**: 'Always' | 'Daily' | 'Monthly' | 'Once' | 'Weekly' (Required)
* **schedule**: SuppressionSchedule

## SuppressionSchedule
### Properties
* **endDate**: string
* **endTime**: string
* **recurrenceValues**: int[]
* **startDate**: string
* **startTime**: string

## ManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

