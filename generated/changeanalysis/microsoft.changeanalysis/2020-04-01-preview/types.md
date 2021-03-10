# Microsoft.ChangeAnalysis @ 2020-04-01-preview

## Resource Microsoft.ChangeAnalysis/profile@2020-04-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ResourceIdentity](#resourceidentity)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ConfigurationProfileResourceProperties](#configurationprofileresourceproperties)
* **systemData**: [SystemData](#systemdata)
* **type**: 'Microsoft.ChangeAnalysis/profile' (ReadOnly, DeployTimeConstant)

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned'

## ConfigurationProfileResourceProperties
### Properties
* **notifications**: [NotificationSettings](#notificationsettings)

## NotificationSettings
### Properties
* **activationState**: 'Disabled' | 'Enabled' | 'None'
* **azureMonitorWorkspaceProperties**: [AzureMonitorWorkspaceProperties](#azuremonitorworkspaceproperties)

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

