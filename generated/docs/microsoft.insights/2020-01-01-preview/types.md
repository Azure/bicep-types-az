# microsoft.insights @ 2020-01-01-preview

## microsoft.insights/diagnosticSettings
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementGroupDiagnosticSettings
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## ManagementGroupDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logs**: ManagementGroupLogSettings[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## ManagementGroupLogSettings
### Properties
* **category**: string (Required)
* **enabled**: bool (Required)

