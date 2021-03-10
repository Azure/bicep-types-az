# microsoft.insights @ 2016-09-01

## Resource microsoft.insights/diagnosticSettings@2016-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: 'service' (Required, DeployTimeConstant)
* **properties**: [ServiceDiagnosticSettings](#servicediagnosticsettings)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## ServiceDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
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
* **enabled**: bool (Required)
* **retentionPolicy**: [RetentionPolicy](#retentionpolicy)
* **timeGrain**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

