# Microsoft.ChangeAnalysis @ 2020-04-01-preview

## Resource Microsoft.ChangeAnalysis/profile@2020-04-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ResourceIdentity](#resourceidentity): The identity block returned by ARM resource that supports managed identity.
* **location**: string: The location where the resource is to be deployed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConfigurationProfileResourceProperties](#configurationprofileresourceproperties): The properties of a configuration profile.
* **systemData**: [SystemData](#systemdata): Top level metadata https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/common-api-contracts.md#system-metadata-for-all-azure-resources
* **type**: 'Microsoft.ChangeAnalysis/profile' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorWorkspaceProperties
### Properties
* **includeChangeDetails**: 'Exclude' | 'Include' | 'None' | string: The mode of includeChangeDetails feature. The flag configures whether to include or exclude content of the change before and after values.
* **workspaceId**: string: The Azure Monitor workspace ID - the unique identifier for the Log Analytics workspace.
* **workspaceResourceId**: string: The Azure Monitor workspace ARM Resource ID. The resource ID should be in the following format: /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}

## ConfigurationProfileResourceProperties
### Properties
* **notifications**: [NotificationSettings](#notificationsettings): Settings of change notification configuration for a subscription.

## NotificationSettings
### Properties
* **activationState**: 'Disabled' | 'Enabled' | 'None' | string: The state of notifications feature.
* **azureMonitorWorkspaceProperties**: [AzureMonitorWorkspaceProperties](#azuremonitorworkspaceproperties): Configuration properties of an Azure Monitor workspace that receives change notifications.

## ResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The principal id of the identity. This property will only be provided for a system-assigned identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the resource's identity. This property will only be provided for a system-assigned identity.
* **type**: 'None' | 'SystemAssigned' | string: The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.

## SystemData
### Properties
* **createdAt**: string (ReadOnly): The timestamp of resource creation (UTC)
* **createdBy**: string (ReadOnly): A string identifier for the identity that created the resource
* **createdByType**: string (ReadOnly): The type of identity that created the resource: user, application, managedIdentity, key
* **lastModifiedAt**: string (ReadOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (ReadOnly): A string identifier for the identity that last modified the resource
* **lastModifiedByType**: string (ReadOnly): The type of identity that last modified the resource: user, application, managedIdentity, key

