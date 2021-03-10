# microsoft.insights @ 2017-05-01-preview

## Resource microsoft.insights/diagnosticSettings@2017-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DiagnosticSettings](#diagnosticsettings)
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## DiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logAnalyticsDestinationType**: string
* **logs**: [LogSettings](#logsettings)[]
* **metrics**: [MetricSettings](#metricsettings)[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## LogSettings
### Properties
* **category**: string
* **enabled**: bool (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)

## RetentionPolicy
### Properties
* **days**: int (Required)
* **enabled**: bool (Required)

## MetricSettings
### Properties
* **category**: string
* **enabled**: bool (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **timeGrain**: string

