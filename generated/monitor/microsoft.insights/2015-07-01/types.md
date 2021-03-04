# microsoft.insights @ 2015-07-01

## Resource microsoft.insights/diagnosticSettings@2015-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: 'service' (Required, DeployTimeConstant)
* **properties**: ServiceDiagnosticSettings
* **tags**: ResourceTags
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## ServiceDiagnosticSettings
### Properties
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
* **timeGrain**: any (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

