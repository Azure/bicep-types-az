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

## Resource Microsoft.AlertsManagement/alerts@2019-05-05-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert property bag
* **type**: 'Microsoft.AlertsManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AlertsManagement/smartGroups@2019-05-05-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SmartGroupProperties](#smartgroupproperties) (ReadOnly): Properties of smart group.
* **type**: 'Microsoft.AlertsManagement/smartGroups' (ReadOnly, DeployTimeConstant): The resource type

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


## ActionStatus
### Properties
* **isSuppressed**: bool: Value indicating whether alert is suppressed.

## AlertProperties
### Properties
* **context**: any (ReadOnly): Information specific to the monitor service that gives more contextual details about the alert.
* **egressConfig**: any (ReadOnly): Config which would be used for displaying the data in portal.
* **essentials**: [Essentials](#essentials): This object contains consistent fields across different monitor services.

## Condition
### Properties
* **operator**: 'Contains' | 'DoesNotContain' | 'Equals' | 'NotEquals' | string: operator for a given condition
* **values**: string[]: list of values to match for a given condition.

## Conditions
### Properties
* **alertContext**: [Condition](#condition): filter alerts by alert context (payload)
* **alertRuleId**: [Condition](#condition): filter alerts by alert rule id
* **alertRuleName**: [Condition](#condition): filter alerts by alert rule name
* **description**: [Condition](#condition): filter alerts by alert rule description
* **monitorCondition**: [Condition](#condition): filter alerts by monitor condition
* **monitorService**: [Condition](#condition): filter alerts by monitor service
* **severity**: [Condition](#condition): filter alerts by severity
* **targetResourceType**: [Condition](#condition): filter alerts by target resource type

## Essentials
### Properties
* **actionStatus**: [ActionStatus](#actionstatus): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Alert object state, which can be modified by the user.
* **description**: string: Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format) of alert instance.
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
* **monitorCondition**: 'Fired' | 'Resolved' | string (ReadOnly): Condition of the rule at the monitor service. It represents whether the underlying conditions have crossed the defined alert rule thresholds.
* **monitorConditionResolvedDateTime**: string (ReadOnly): Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met.
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'VM Insights' | 'Zabbix' | string (ReadOnly): Monitor service on which the rule(monitor) is set.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly): Severity of alert Sev0 being highest and Sev4 being lowest.
* **signalType**: 'Log' | 'Metric' | 'Unknown' | string (ReadOnly): The type of signal the alert is based on, which could be metrics, logs or activity logs.
* **smartGroupId**: string (ReadOnly): Unique Id of the smart group
* **smartGroupingReason**: string (ReadOnly): Verbose reason describing the reason why this alert instance is added to a smart group
* **sourceCreatedId**: string (ReadOnly): Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc.
* **startDateTime**: string (ReadOnly): Creation time(ISO-8601 format) of alert instance.
* **targetResource**: string: Target ARM resource, on which alert got created.
* **targetResourceGroup**: string: Resource group of target ARM resource, on which alert got created.
* **targetResourceName**: string: Name of the target ARM resource name, on which alert got created.
* **targetResourceType**: string: Resource type of target ARM resource, on which alert got created.

## ManagedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Scope
### Properties
* **scopeType**: 'Resource' | 'ResourceGroup' | 'Subscription' | string: type of target scope
* **values**: string[]: list of ARM IDs of the given scope type which will be the target of the given action rule.

## SmartGroupAggregatedProperty
### Properties
* **count**: int: Total number of items of type.
* **name**: string: Name of the type.

## SmartGroupProperties
### Properties
* **alertsCount**: int: Total number of alerts in smart group
* **alertSeverities**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of alertSeverities in the smart group
* **alertStates**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of alertStates in the smart group
* **lastModifiedDateTime**: string (ReadOnly): Last updated time of smart group. Date-Time in ISO-8601 format.
* **lastModifiedUserName**: string (ReadOnly): Last modified by user name.
* **monitorConditions**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of monitorConditions in the smart group
* **monitorServices**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of monitorServices in the smart group
* **nextLink**: string: The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts.
* **resourceGroups**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resource groups in the smart group
* **resources**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resources in the smart group
* **resourceTypes**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[]: Summary of target resource types in the smart group
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly): Severity of smart group is the highest(Sev0 >... > Sev4) severity of all the alerts in the group.
* **smartGroupState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Smart group state
* **startDateTime**: string (ReadOnly): Creation time of smart group. Date-Time in ISO-8601 format.

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

