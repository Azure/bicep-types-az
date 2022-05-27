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
* **properties**: [AlertRuleProperties](#alertruleproperties): The alert rule properties.
* **type**: 'microsoft.alertsManagement/smartDetectorAlertRules' (ReadOnly, DeployTimeConstant): The resource type

## AlertProperties
### Properties
* **context**: any (ReadOnly): Any object
* **egressConfig**: any (ReadOnly): Any object
* **essentials**: [Essentials](#essentials) (ReadOnly): This object contains consistent fields across different monitor services.

## Essentials
### Properties
* **actionStatus**: [ActionStatus](#actionstatus) (ReadOnly): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly)
* **description**: string (ReadOnly): Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format) of alert instance.
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
* **monitorCondition**: 'Fired' | 'Resolved' | string (ReadOnly)
* **monitorConditionResolvedDateTime**: string (ReadOnly): Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met.
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'Resource Health' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'VM Insights' | 'Zabbix' | string (ReadOnly)
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly)
* **signalType**: 'Log' | 'Metric' | 'Unknown' | string (ReadOnly): The type of signal the alert is based on, which could be metrics, logs or activity logs.
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

## AlertRuleProperties
### Properties
* **actionGroups**: [ActionGroupsInformation](#actiongroupsinformation) (Required): The Action Groups information, used by the alert rule.
* **description**: string: The alert rule description.
* **detector**: [Detector](#detector) (Required): The detector information. By default this is not populated, unless it's specified in expandDetector
* **frequency**: string (Required): The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
* **scope**: string[] (Required): The alert rule resources scope.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (Required)
* **state**: 'Disabled' | 'Enabled' | string (Required): The alert rule state.
* **throttling**: [ThrottlingInformation](#throttlinginformation): Optional throttling information for the alert rule.

## ActionGroupsInformation
### Properties
* **customEmailSubject**: string: An optional custom email subject to use in email notifications.
* **customWebhookPayload**: string: An optional custom web-hook payload to use in web-hook notifications.
* **groupIds**: string[] (Required): The Action Group resource IDs.

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

## ThrottlingInformation
### Properties
* **duration**: string: The required duration (in ISO8601 format) to wait before notifying on the alert rule again. The time granularity must be in minutes and minimum value is 0 minutes

