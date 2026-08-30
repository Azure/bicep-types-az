# Microsoft.VideoIndexer @ 2025-04-01

## Resource Microsoft.VideoIndexer/accounts@2025-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): Managed service identity (system assigned and/or user assigned identities)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 50, pattern: "^[A-Za-z0-9-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountPropertiesForPutRequest](#accountpropertiesforputrequest): List of account properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.VideoIndexer/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VideoIndexer/accounts/privateEndpointConnections@2025-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.VideoIndexer/accounts/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.VideoIndexer/accounts/privateLinkResources@2025-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2025-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.VideoIndexer/accounts/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function generateAccessToken (Microsoft.VideoIndexer/accounts@2025-04-01)
* **Resource**: Microsoft.VideoIndexer/accounts
* **ApiVersion**: 2025-04-01
* **Input**: [GenerateAccessTokenParameters](#generateaccesstokenparameters)
* **Output**: [AccessToken](#accesstoken)

## Function generateExtensionAccessToken (Microsoft.VideoIndexer/accounts@2025-04-01)
* **Resource**: Microsoft.VideoIndexer/accounts
* **ApiVersion**: 2025-04-01
* **Input**: [GenerateExtensionAccessTokenParameters](#generateextensionaccesstokenparameters)
* **Output**: [AccessToken](#accesstoken)

## Function generateExtensionRestrictedViewerAccessToken (Microsoft.VideoIndexer/accounts@2025-04-01)
* **Resource**: Microsoft.VideoIndexer/accounts
* **ApiVersion**: 2025-04-01
* **Input**: [GenerateExtensionRestrictedViewerAccessTokenParameters](#generateextensionrestrictedvieweraccesstokenparameters)
* **Output**: [AccessToken](#accesstoken)

## Function generateRestrictedViewerAccessToken (Microsoft.VideoIndexer/accounts@2025-04-01)
* **Resource**: Microsoft.VideoIndexer/accounts
* **ApiVersion**: 2025-04-01
* **Input**: [GenerateRestrictedViewerAccessTokenParameters](#generaterestrictedvieweraccesstokenparameters)
* **Output**: [AccessToken](#accesstoken)

## AccessToken
### Properties
* **accessToken**: string {sensitive} (ReadOnly): The access token.

## AccountPropertiesForPutRequest
### Properties
* **accountId**: string: The account's data-plane ID. This can be set only when connecting an existing classic account
* **accountName**: string (ReadOnly): The account's name
* **openAiServices**: [OpenAiServicesForPutRequest](#openaiservicesforputrequest): The openAi services details
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: List of private endpoint connections associated with the account.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | string (ReadOnly): Gets the status of the account at the time the operation was called.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for the account.
* **storageServices**: [StorageServicesForPutRequest](#storageservicesforputrequest): The storage services details
* **tenantId**: string (ReadOnly): The account's tenant id
* **totalMinutesIndexed**: int (ReadOnly): An integer representing the total minutes that have been indexed on the account
* **totalSecondsIndexed**: int (ReadOnly): An integer representing the total seconds that have been indexed on the account

## GenerateAccessTokenParameters
### Properties
* **permissionType**: 'Contributor' | 'Reader' | string (Required): The requested permission
* **projectId**: string: The project ID
* **scope**: 'Account' | 'Project' | 'Video' | string (Required): The requested media type
* **videoId**: string: The video ID

## GenerateExtensionAccessTokenParameters
### Properties
* **extensionId**: string (Required): The extension's resource ID
* **permissionType**: 'Contributor' | 'Reader' | string (Required): The requested permission
* **scope**: 'Account' | 'Project' | 'Video' | string (Required): The requested media type
* **tokenLifetimeInSeconds**: int: Lifetime of the access token (in seconds). Default value: 3600 (1 hour), Max value: 43200 (12 hours). Setting this value is enabled for tokens in 'Video' scope.
* **videoId**: string: The video ID

## GenerateExtensionRestrictedViewerAccessTokenParameters
### Properties
* **extensionId**: string (Required): The extension's resource ID
* **scope**: 'Account' | 'Project' | 'Video' | string (Required): The requested media type
* **tokenLifetimeInSeconds**: int: Lifetime of the access token (in seconds). Default value: 3600 (1 hour), Max value: 43200 (12 hours). Setting this value is enabled for tokens in 'Video' scope.
* **videoId**: string: The video ID

## GenerateRestrictedViewerAccessTokenParameters
### Properties
* **projectId**: string: The project ID
* **scope**: 'Account' | 'Project' | 'Video' | string (Required): The requested media type
* **videoId**: string: The video ID

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OpenAiServicesForPutRequest
### Properties
* **resourceId**: string: The openAi services resource id
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string: The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## StorageServicesForPutRequest
### Properties
* **resourceId**: string: The storage services resource id
* **userAssignedIdentity**: string: The user assigned identity to be used to grant permissions

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

