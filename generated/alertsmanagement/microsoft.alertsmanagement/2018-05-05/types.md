# Microsoft.AlertsManagement @ 2018-05-05

## Resource Microsoft.AlertsManagement/alerts@2018-05-05 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-05' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert property bag
* **type**: 'Microsoft.AlertsManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AlertsManagement/smartGroups@2018-05-05 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-05' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SmartGroupProperties](#smartgroupproperties) (ReadOnly): Properties of smart group.
* **type**: 'Microsoft.AlertsManagement/smartGroups' (ReadOnly, DeployTimeConstant): The resource type

## AlertProperties
### Properties
* **context**: any (ReadOnly): Any object
* **egressConfig**: any (ReadOnly): Any object
* **essentials**: [Essentials](#essentials) (ReadOnly): This object contains consistent fields across different monitor services.

## Essentials
### Properties
* **actionStatus**: [ActionStatus](#actionstatus) (ReadOnly): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' (ReadOnly)
* **description**: string (ReadOnly): Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format) of alert instance.
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
* **monitorCondition**: 'Fired' | 'Resolved' (ReadOnly)
* **monitorConditionResolvedDateTime**: string (ReadOnly): Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met.
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'VM Insights' | 'Zabbix' (ReadOnly)
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' (ReadOnly)
* **signalType**: 'Log' | 'Metric' | 'Unknown' (ReadOnly): The type of signal the alert is based on, which could be metrics, logs or activity logs.
* **smartGroupId**: string (ReadOnly): Unique Id of the smart group
* **smartGroupingReason**: string (ReadOnly): Verbose reason describing the reason why this alert instance is added to a smart group
* **sourceCreatedId**: string (ReadOnly): Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc.
* **startDateTime**: string (ReadOnly): Creation time(ISO-8601 format) of alert instance.
* **targetResource**: string (ReadOnly): Target ARM resource, on which alert got created.
* **targetResourceGroup**: string (ReadOnly): Resource group of target ARM resource, on which alert got created.
* **targetResourceName**: string (ReadOnly): Name of the target ARM resource name, on which alert got created.
* **targetResourceType**: string (ReadOnly): Resource type of target ARM resource, on which alert got created.

## ActionStatus
### Properties
* **isSuppressed**: bool (ReadOnly): Value indicating whether alert is suppressed.

## SmartGroupProperties
### Properties
* **alertsCount**: int (ReadOnly): Total number of alerts in smart group
* **alertSeverities**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of alertSeverities in the smart group
* **alertStates**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of alertStates in the smart group
* **lastModifiedDateTime**: string (ReadOnly): Last updated time of smart group. Date-Time in ISO-8601 format.
* **lastModifiedUserName**: string (ReadOnly): Last modified by user name.
* **monitorConditions**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of monitorConditions in the smart group
* **monitorServices**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of monitorServices in the smart group
* **nextLink**: string (ReadOnly): The URI to fetch the next page of alerts. Call ListNext() with this URI to fetch the next page alerts.
* **resourceGroups**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of target resource groups in the smart group
* **resources**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of target resources in the smart group
* **resourceTypes**: [SmartGroupAggregatedProperty](#smartgroupaggregatedproperty)[] (ReadOnly): Summary of target resource types in the smart group
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' (ReadOnly)
* **smartGroupState**: 'Acknowledged' | 'Closed' | 'New' (ReadOnly): Smart group state
* **startDateTime**: string (ReadOnly): Creation time of smart group. Date-Time in ISO-8601 format.

## SmartGroupAggregatedProperty
### Properties
* **count**: int (ReadOnly): Total number of items of type.
* **name**: string (ReadOnly): Name of the type.

