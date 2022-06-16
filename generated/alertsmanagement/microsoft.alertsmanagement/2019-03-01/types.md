# microsoft.alertsManagement @ 2019-03-01

## Resource Microsoft.AlertsManagement/alerts@2019-03-01 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert property bag
* **type**: 'Microsoft.AlertsManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.alertsManagement/smartDetectorAlertRules@2019-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRuleProperties](#alertruleproperties): The properties of the alert rule.
* **type**: 'microsoft.alertsManagement/smartDetectorAlertRules' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroupsInformation
### Properties
* **customEmailSubject**: string: An optional custom email subject to use in email notifications.
* **customWebhookPayload**: string: An optional custom web-hook payload to use in web-hook notifications.
* **groupIds**: string[] (Required): The Action Group resource IDs.

## ActionStatus
### Properties
* **isSuppressed**: bool: Value indicating whether alert is suppressed.

## AlertProperties
### Properties
* **context**: any (ReadOnly): Information specific to the monitor service that gives more contextual details about the alert.
* **egressConfig**: any (ReadOnly): Config which would be used for displaying the data in portal.
* **essentials**: [Essentials](#essentials): This object contains consistent fields across different monitor services.

## AlertRuleProperties
### Properties
* **actionGroups**: [ActionGroupsInformation](#actiongroupsinformation) (Required): The alert rule actions.
* **description**: string: The alert rule description.
* **detector**: [Detector](#detector) (Required): The alert rule's detector.
* **frequency**: string (Required): The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
* **scope**: string[] (Required): The alert rule resources scope.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (Required): The alert rule severity.
* **state**: 'Disabled' | 'Enabled' | string (Required): The alert rule state.
* **throttling**: [ThrottlingInformation](#throttlinginformation): The alert rule throttling information.

## Detector
### Properties
* **description**: string: The Smart Detector description. By default this is not populated, unless it's specified in expandDetector
* **id**: string (Required): The detector id.
* **imagePaths**: string[]: The Smart Detector image path. By default this is not populated, unless it's specified in expandDetector
* **name**: string: The Smart Detector name. By default this is not populated, unless it's specified in expandDetector
* **parameters**: [DetectorParameters](#detectorparameters): The detector's parameters.'
* **supportedResourceTypes**: string[]: The Smart Detector supported resource types. By default this is not populated, unless it's specified in expandDetector

## DetectorParameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'Resource Health' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'VM Insights' | 'Zabbix' | string (ReadOnly): Monitor service on which the rule(monitor) is set.
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

## ThrottlingInformation
### Properties
* **duration**: string: The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes

