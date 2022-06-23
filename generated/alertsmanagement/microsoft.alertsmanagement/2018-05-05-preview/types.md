# Microsoft.AlertsManagement @ 2018-05-05-preview

## Resource Microsoft.AlertsManagement/alerts@2018-05-05-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): An alert created in alert management service.
* **type**: 'Microsoft.AlertsManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AlertsManagement/smartGroups@2018-05-05-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-05-05-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SmartGroupProperties](#smartgroupproperties) (ReadOnly): Properties of smart group.
* **type**: 'Microsoft.AlertsManagement/smartGroups' (ReadOnly, DeployTimeConstant): The resource type

## ActionStatus
### Properties
* **isSuppressed**: bool: Value indicating whether alert is suppressed.

## AlertProperties
### Properties
* **actionStatus**: [ActionStatus](#actionstatus): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Alert object state
* **description**: string: Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format).
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert.
* **monitorCondition**: 'Fired' | 'Resolved' | string (ReadOnly): Condition of the rule at the monitor service
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Infrastructure Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'Zabbix' | string (ReadOnly): Monitor service which is the source of the alert object.
* **payload**: any (ReadOnly): More details which are contextual to the monitor service.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly): Severity of alert Sev1 being highest and Sev3 being lowest.
* **signalType**: 'Log' | 'Metric' | 'Unknown' | string (ReadOnly): Log based alert or metric based alert
* **smartGroupId**: string (ReadOnly): Unique Id of the smart group
* **smartGroupingReason**: string (ReadOnly): Reason for addition to a smart group
* **sourceCreatedId**: string (ReadOnly): Unique Id created by monitor service
* **startDateTime**: string (ReadOnly): Creation time(ISO-8601 format).
* **targetResource**: string: Target ARM resource, on which alert got created.
* **targetResourceGroup**: string: Resource group of target ARM resource.
* **targetResourceName**: string: Target ARM resource name, on which alert got created.
* **targetResourceType**: string: Resource type of target ARM resource

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

