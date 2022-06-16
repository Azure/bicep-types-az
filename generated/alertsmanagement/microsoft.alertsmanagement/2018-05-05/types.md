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

## ActionStatus
### Properties
* **isSuppressed**: bool: Value indicating whether alert is suppressed.

## AlertProperties
### Properties
* **context**: any (ReadOnly): Information specific to the monitor service that gives more contextual details about the alert.
* **egressConfig**: any (ReadOnly): Config which would be used for displaying the data in portal.
* **essentials**: [Essentials](#essentials): This object contains consistent fields across different monitor services.

## Essentials
### Properties
* **actionStatus**: [ActionStatus](#actionstatus): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Alert object state, which can be modified by the user.
* **description**: string: Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format) of alert instance.
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
* **monitorCondition**: 'Fired' | 'Resolved' | string (ReadOnly): Can be 'Fired' or 'Resolved', which represents whether the underlying conditions have crossed the defined alert rule thresholds.
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

