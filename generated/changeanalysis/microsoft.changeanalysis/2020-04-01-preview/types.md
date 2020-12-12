# Microsoft.ChangeAnalysis @ 2020-04-01-preview

## Resource Microsoft.ChangeAnalysis/profile@2020-04-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ResourceIdentity
* **name**: string (Required, DeployTimeConstant)
* **properties**: ConfigurationProfileResourceProperties
* **systemData**: SystemData
* **type**: 'Microsoft.ChangeAnalysis/profile' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ConfigurationProfileResourceProperties
### Properties
* **notifications**: NotificationSettings

## NotificationSettings
### Properties
* **activationState**: 'Disabled' | 'Enabled' | 'None'
* **azureMonitorWorkspaceProperties**: AzureMonitorWorkspaceProperties

## AzureMonitorWorkspaceProperties
### Properties
* **workspaceId**: string
* **workspaceResourceId**: string

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: string (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: string (ReadOnly)

