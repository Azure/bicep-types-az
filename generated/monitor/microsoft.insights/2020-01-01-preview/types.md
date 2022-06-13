# microsoft.insights @ 2020-01-01-preview

## Resource microsoft.insights/diagnosticSettings@2020-01-01-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementGroupDiagnosticSettings](#managementgroupdiagnosticsettings): Properties of a Management Group Diagnostic Settings Resource.
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## ManagementGroupDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string: The resource Id for the event hub authorization rule.
* **eventHubName**: string: The name of the event hub. If none is specified, the default event hub will be selected.
* **logs**: [ManagementGroupLogSettings](#managementgrouplogsettings)[]: The list of logs settings.
* **serviceBusRuleId**: string: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
* **storageAccountId**: string: The resource ID of the storage account to which you would like to send Diagnostic Logs.
* **workspaceId**: string: The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

## ManagementGroupLogSettings
### Properties
* **category**: string (Required): Name of a Management Group Diagnostic Log category for a resource type this setting is applied to.
* **enabled**: bool (Required): a value indicating whether this log is enabled.

