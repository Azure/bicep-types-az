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

## AlertProperties
### Properties
* **actionStatus**: [ActionStatus](#actionstatus) (ReadOnly): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' (ReadOnly)
* **description**: string (ReadOnly): Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format).
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert.
* **monitorCondition**: 'Fired' | 'Resolved' (ReadOnly)
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Infrastructure Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'Zabbix' (ReadOnly)
* **payload**: any (ReadOnly): Any object
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' (ReadOnly)
* **signalType**: 'Log' | 'Metric' | 'Unknown' (ReadOnly): Log based alert or metric based alert
* **smartGroupId**: string (ReadOnly): Unique Id of the smart group
* **smartGroupingReason**: string (ReadOnly): Reason for addition to a smart group
* **sourceCreatedId**: string (ReadOnly): Unique Id created by monitor service
* **startDateTime**: string (ReadOnly): Creation time(ISO-8601 format).
* **targetResource**: string (ReadOnly): Target ARM resource, on which alert got created.
* **targetResourceGroup**: string (ReadOnly): Resource group of target ARM resource.
* **targetResourceName**: string (ReadOnly): Target ARM resource name, on which alert got created.
* **targetResourceType**: string (ReadOnly): Resource type of target ARM resource

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

