# microsoft.insights @ 2021-07-01-preview

## Resource microsoft.insights/privateLinkScopes@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorPrivateLinkScopeProperties](#azuremonitorprivatelinkscopeproperties) (Required): Properties that define a Azure Monitor PrivateLinkScope resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'microsoft.insights/privateLinkScopes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/privateLinkScopes/privateLinkResources@2021-07-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Properties of a private link resource.
* **type**: 'Microsoft.Insights/privateLinkScopes/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScopedResourceProperties](#scopedresourceproperties): Properties of a private link scoped resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Insights/privateLinkScopes/scopedResources' (ReadOnly, DeployTimeConstant): The resource type

## AccessModeSettings
### Properties
* **exclusions**: [AccessModeSettingsExclusion](#accessmodesettingsexclusion)[]: List of exclusions that override the default access mode settings for specific private endpoint connections.
* **ingestionAccessMode**: 'Open' | 'PrivateOnly' | string (Required): Access mode types.
* **queryAccessMode**: 'Open' | 'PrivateOnly' | string (Required): Access mode types.

## AccessModeSettingsExclusion
### Properties
* **ingestionAccessMode**: 'Open' | 'PrivateOnly' | string: Access mode types.
* **privateEndpointConnectionName**: string: The private endpoint connection name associated to the private endpoint on which we want to apply the specific access mode settings.
* **queryAccessMode**: 'Open' | 'PrivateOnly' | string: Access mode types.

## AzureMonitorPrivateLinkScopeProperties
### Properties
* **accessModeSettings**: [AccessModeSettings](#accessmodesettings) (Required): Properties that define the scope private link mode settings.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: string (ReadOnly): Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The current provisioning state.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[] (ReadOnly): The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: The private endpoint connection status.

## ScopedResourceProperties
### Properties
* **linkedResourceId**: string: The resource id of the scoped Azure monitor resource.
* **provisioningState**: string (ReadOnly): State of the private endpoint connection.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

