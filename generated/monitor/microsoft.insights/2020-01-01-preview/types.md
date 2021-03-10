# microsoft.insights @ 2020-01-01-preview

## Resource microsoft.insights/diagnosticSettings@2020-01-01-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementGroupDiagnosticSettings](#managementgroupdiagnosticsettings)
* **type**: 'microsoft.insights/diagnosticSettings' (ReadOnly, DeployTimeConstant)

## ManagementGroupDiagnosticSettings
### Properties
* **eventHubAuthorizationRuleId**: string
* **eventHubName**: string
* **logs**: [ManagementGroupLogSettings](#managementgrouplogsettings)[]
* **serviceBusRuleId**: string
* **storageAccountId**: string
* **workspaceId**: string

## ManagementGroupLogSettings
### Properties
* **category**: string (Required)
* **enabled**: bool (Required)

