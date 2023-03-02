# Microsoft.Media @ 2023-01-01

## Resource Microsoft.Media/locations/mediaServicesOperationResults@2023-01-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity) (ReadOnly): The Managed Identity for the Media Services account.
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties) (ReadOnly): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.Media/locations/mediaServicesOperationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity): The Managed Identity for the Media Services account.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2023-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateLinkResources@2023-01-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listEdgePolicies (Microsoft.Media/mediaservices@2023-01-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2023-01-01
* **Input**: [ListEdgePoliciesInput](#listedgepoliciesinput)
* **Output**: [EdgePolicies](#edgepolicies)

## AccessControl
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: The behavior for IP access control in Key Delivery.
* **ipAllowList**: string[]: The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.

## AccountEncryption
### Properties
* **identity**: [ResourceIdentity](#resourceidentity): The Key Vault identity.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
* **status**: string (ReadOnly): The current status of the Key Vault mapping.
* **type**: 'CustomerKey' | 'SystemKey' | string (Required): The type of key used to encrypt the Account Key.

## EdgePolicies
### Properties
* **usageDataCollectionPolicy**: [EdgeUsageDataCollectionPolicy](#edgeusagedatacollectionpolicy)

## EdgeUsageDataCollectionPolicy
### Properties
* **dataCollectionFrequency**: string: Usage data collection frequency in ISO 8601 duration format e.g. PT10M , PT5H.
* **dataReportingFrequency**: string: Usage data reporting frequency in ISO 8601 duration format e.g. PT10M , PT5H.
* **eventHubDetails**: [EdgeUsageDataEventHub](#edgeusagedataeventhub): Details of Event Hub where the usage will be reported.
* **maxAllowedUnreportedUsageDuration**: string: Maximum time for which the functionality of the device will not be hampered for not reporting the usage data.

## EdgeUsageDataEventHub
### Properties
* **name**: string: Name of the Event Hub where usage will be reported.
* **namespace**: string: Namespace of the Event Hub where usage will be reported.
* **token**: string: SAS token needed to interact with Event Hub.

## KeyDelivery
### Properties
* **accessControl**: [AccessControl](#accesscontrol): The access control properties for Key Delivery.

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt the Media Services account, including the key version.
* **keyIdentifier**: string: The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## ListEdgePoliciesInput
### Properties
* **deviceId**: string: Unique identifier of the edge device.

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The Principal ID of the identity.
* **tenantId**: string (ReadOnly): The Tenant ID of the identity.
* **type**: string (Required): The identity type.
* **userAssignedIdentities**: [UserAssignedManagedIdentities](#userassignedmanagedidentities): The user assigned managed identities.

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **keyDelivery**: [KeyDelivery](#keydelivery): The Key Delivery properties for Media Services account.
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **minimumTlsVersion**: 'Tls10' | 'Tls11' | 'Tls12' | 'Tls13' | string: The minimum TLS version allowed for this account's requests. This is an optional property. If unspecified, a secure default value will be used.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The Private Endpoint Connections created for the Media Service account.
* **provisioningState**: 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Media Services account.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether or not public network access is allowed for resources under the Media Services account.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.
* **storageAuthentication**: 'ManagedIdentity' | 'System' | string

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceIdentity
### Properties
* **userAssignedIdentity**: string: The user assigned managed identity's ARM ID to use when accessing a resource.
* **useSystemAssignedIdentity**: bool (Required): Indicates whether to use System Assigned Managed Identity. Mutual exclusive with User Assigned Managed Identity.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
* **identity**: [ResourceIdentity](#resourceidentity): The storage account identity.
* **status**: string (ReadOnly): The current status of the storage account mapping.
* **type**: 'Primary' | 'Secondary' | string (Required): The type of the storage account.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedManagedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedManagedIdentity](#userassignedmanagedidentity)

## UserAssignedManagedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID.
* **principalId**: string (ReadOnly): The principal ID.

