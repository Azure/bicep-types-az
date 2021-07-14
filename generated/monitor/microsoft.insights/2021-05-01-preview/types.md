# Microsoft.Insights @ 2021-05-01-preview

## Resource Microsoft.Insights/diagnosticSettings@2021-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DiagnosticSettings](#diagnosticsettings): The diagnostic settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Insights/diagnosticSettings' (ReadOnly, DeployTimeConstant): The resource type

## DiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string: The resource Id for the event hub authorization rule.
* **eventHubName**: string: The name of the event hub. If none is specified, the default event hub will be selected.
* **logAnalyticsDestinationType**: string: A string indicating whether the export to Log Analytics should use the default destination type, i.e. AzureDiagnostics, or use a destination type constructed as follows: <normalized service identity>_<normalized category name>. Possible values are: Dedicated and null (null is default.)
* **logs**: [LogSettings](#logsettings)[]: The list of logs settings.
* **marketplacePartnerId**: string: The full ARM resource ID of the Marketplace resource to which you would like to send Diagnostic Logs.
* **metrics**: [MetricSettings](#metricsettings)[]: The list of metric settings.
* **serviceBusRuleId**: string: The service bus rule Id of the diagnostic setting. This is here to maintain backwards compatibility.
* **storageAccountId**: string: The resource ID of the storage account to which you would like to send Diagnostic Logs.
* **workspaceId**: string: The full ARM resource ID of the Log Analytics workspace to which you would like to send Diagnostic Logs. Example: /subscriptions/4b9e8510-67ab-4e9a-95a9-e2f1e570ea9c/resourceGroups/insights-integration/providers/Microsoft.OperationalInsights/workspaces/viruela2

## LogSettings
### Properties
* **category**: string: Name of a Diagnostic Log category for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
* **categoryGroup**: string: Name of a Diagnostic Log category group for a resource type this setting is applied to. To obtain the list of Diagnostic Log categories for a resource, first perform a GET diagnostic settings operation.
* **enabled**: bool (Required): a value indicating whether this log is enabled.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Specifies the retention policy for the log.

## RetentionPolicy
### Properties
* **days**: int (Required): the number of days for the retention in days. A value of 0 will retain the events indefinitely.
* **enabled**: bool (Required): a value indicating whether the retention policy is enabled.

## MetricSettings
### Properties
* **category**: string: Name of a Diagnostic Metric category for a resource type this setting is applied to. To obtain the list of Diagnostic metric categories for a resource, first perform a GET diagnostic settings operation.
* **enabled**: bool (Required): a value indicating whether this category is enabled.
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy): Specifies the retention policy for the log.
* **timeGrain**: string: the timegrain of the metric in ISO8601 format.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

