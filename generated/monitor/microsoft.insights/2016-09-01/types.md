# microsoft.insights @ 2016-09-01

## Resource microsoft.insights/diagnosticSettings@2016-09-01
* **Valid Scope(s)**: None
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: 'service' (Required, DeployTimeConstant)
* **properties**: ServiceDiagnosticSettings
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## ServiceDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **logs**: LogSettings[]
* **metrics**: MetricSettings[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## LogSettings
### Properties
* **category**: string
* **enabled**: bool (Required)
* **retentionPolicy**: RetentionPolicy

## RetentionPolicy
### Properties
* **days**: int (Required)
* **enabled**: bool (Required)

## MetricSettings
### Properties
* **enabled**: bool (Required)
* **retentionPolicy**: RetentionPolicy
* **timeGrain**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

