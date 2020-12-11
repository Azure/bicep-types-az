# microsoft.aadiam @ 2017-04-01

## Resource microsoft.aadiam/diagnosticSettings@2017-04-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DiagnosticSettings
* **type**: 'microsoft.aadiam/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## DiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logs**: LogSettings[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## LogSettings
### Properties
* **category**: 'AuditLogs' | 'SignInLogs'
* **enabled**: bool (Required)
* **retentionPolicy**: RetentionPolicy

## RetentionPolicy
### Properties
* **days**: int (Required)
* **enabled**: bool (Required)

