# microsoft.insights @ 2017-05-01-preview

## microsoft.insights/diagnosticSettings
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticSettings
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## DiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logAnalyticsDestinationType**: string
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
* **category**: string
* **enabled**: bool (Required)
* **retentionPolicy**: RetentionPolicy
* **timeGrain**: string

## microsoft.insights/diagnosticSettings
### Properties
* **apiVersion**: '2017-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: SubscriptionDiagnosticSettings
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## SubscriptionDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logs**: SubscriptionLogSettings[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## SubscriptionLogSettings
### Properties
* **category**: string
* **enabled**: bool (Required)

