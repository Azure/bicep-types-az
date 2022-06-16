# Microsoft.Media @ 2021-05-01

## Resource Microsoft.Media/mediaservices@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity): The Managed Identity for the Media Services account.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system metadata relating to this resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listEdgePolicies (Microsoft.Media/mediaservices@2021-05-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2021-05-01
* **Input**: [ListEdgePoliciesInput](#listedgepoliciesinput)
* **Output**: [EdgePolicies](#edgepolicies)

## AccessControl
### Properties
* **defaultAction**: 'Allow' | 'Deny' | string: The behavior for IP access control in Key Delivery.
* **ipAllowList**: string[]: The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.

## AccountEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): The properties of the key used to encrypt the account.
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
* **type**: 'None' | 'SystemAssigned' | string (Required): The identity type.

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption): The account encryption properties.
* **keyDelivery**: [KeyDelivery](#keydelivery): The Key Delivery properties for Media Services account.
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.
* **storageAuthentication**: 'ManagedIdentity' | 'System' | string

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
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

