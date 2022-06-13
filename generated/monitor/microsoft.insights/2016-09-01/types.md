# microsoft.insights @ 2016-09-01

## Resource microsoft.insights/diagnosticSettings@2016-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: 'service' (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceDiagnosticSettings](#servicediagnosticsettings): The service diagnostics settings of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## LogSettings
### Properties
* **category**: string: Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
* **enabled**: bool (Required): a value indicating whether this log is enabled.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): the retention policy for this log.

## MetricSettings
### Properties
* **enabled**: bool (Required): a value indicating whether this timegrain is enabled.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): the retention policy for this timegrain.
* **timeGrain**: string (Required): the timegrain of the metric in ISO8601 format.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RetentionPolicy
### Properties
* **days**: int (Required): the number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): a value indicating whether the retention policy is enabled.

## ServiceDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string: The resource Id for the event hub namespace authorization rule.
* **logs**: [LogSettings](#logsettings)[]: the list of logs settings.
* **metrics**: [MetricSettings](#metricsettings)[]: the list of metric settings.
* **serviceBusRuleId**: string: The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming Diagnostic Logs. The rule ID is of the format: '{service bus resource ID}/authorizationrules/{key name}'.
* **storageAccountId**: string: The resource ID of the storage account to which you would like to send Diagnostic Logs.
* **workspaceId**: string: The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

