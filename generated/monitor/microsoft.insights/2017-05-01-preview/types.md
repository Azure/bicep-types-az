# microsoft.insights @ 2017-05-01-preview

## Resource microsoft.insights/diagnosticSettings@2017-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of the resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionDiagnosticSettings](#subscriptiondiagnosticsettings): Properties of a Subscription Diagnostic Settings Resource.
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/diagnosticSettingsCategories@2017-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticSettingsCategory](#diagnosticsettingscategory) (ReadOnly): The properties of a Diagnostic Settings Category.
* **type**: 'Microsoft.Insights/diagnosticSettingsCategories' (ReadOnly, DeployTimeConstant): The resource type

## DiagnosticSettingsCategory
### Properties
* **categoryType**: 'Logs' | 'Metrics': The type of the diagnostic settings category.

## SubscriptionDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string: The resource Id for the event hub authorization rule.
* **eventHubName**: string: The name of the event hub. If none is specified, the default event hub will be selected.
* **logs**: [SubscriptionLogSettings](#subscriptionlogsettings)[]: The list of logs settings.
* **serviceBusRuleId**: string: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
* **storageAccountId**: string: The resource ID of the storage account to which you would like to send Diagnostic Logs.
* **workspaceId**: string: The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

## SubscriptionLogSettings
### Properties
* **category**: string: Name of a Subscription Diagnostic Log category for a resource type this setting is applied to.
* **enabled**: bool (Required): a value indicating whether this log is enabled.

