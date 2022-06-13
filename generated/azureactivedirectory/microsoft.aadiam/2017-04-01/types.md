# microsoft.aadiam @ 2017-04-01

## Resource microsoft.aadiam/diagnosticSettings@2017-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticSettings](#diagnosticsettings): Properties of a Diagnostic Settings Resource.
* **type**: 'microsoft.aadiam/diagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## DiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string: The resource Id for the event hub authorization rule.
* **eventHubName**: string: The name of the event hub. If none is specified, the default event hub will be selected.
* **logs**: [LogSettings](#logsettings)[]: The list of logs settings.
* **serviceBusRuleId**: string: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
* **storageAccountId**: string: The resource ID of the storage account to which you would like to send Diagnostic Logs.
* **workspaceId**: string: The workspace ID (resource ID of a Log Analytics workspace) for a Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

## LogSettings
### Properties
* **category**: 'AuditLogs' | 'SignInLogs' | string: Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
* **enabled**: bool (Required): A value indicating whether this log is enabled.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): The retention policy for this log.

## RetentionPolicy
### Properties
* **days**: int (Required): The number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): A value indicating whether the retention policy is enabled.

