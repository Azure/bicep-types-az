# Microsoft.Media @ 2021-05-01

## Resource Microsoft.Media/mediaservices@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MediaServiceIdentity](#mediaserviceidentity)
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): Properties of the Media Services account.
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Media/mediaservices/privateEndpointConnections@2021-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **type**: 'Microsoft.Media/mediaservices/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## MediaServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The Principal ID of the identity.
* **tenantId**: string (ReadOnly): The Tenant ID of the identity.
* **type**: 'None' | 'SystemAssigned' (Required): The identity type.

## MediaServiceProperties
### Properties
* **encryption**: [AccountEncryption](#accountencryption)
* **keyDelivery**: [KeyDelivery](#keydelivery)
* **mediaServiceId**: string (ReadOnly): The Media Services account ID.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.
* **storageAuthentication**: 'ManagedIdentity' | 'System'

## AccountEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **type**: 'CustomerKey' | 'SystemKey' (Required): The type of key used to encrypt the Account Key.

## KeyVaultProperties
### Properties
* **currentKeyIdentifier**: string (ReadOnly): The current key used to encrypt the Media Services account, including the key version.
* **keyIdentifier**: string: The URL of the Key Vault key used to encrypt the account. The key may either be versioned (for example https://vault/keys/mykey/version1) or reference a key without a version (for example https://vault/keys/mykey).

## KeyDelivery
### Properties
* **accessControl**: [AccessControl](#accesscontrol)

## AccessControl
### Properties
* **defaultAction**: 'Allow' | 'Deny': The behavior for IP access control in Key Delivery.
* **ipAllowList**: string[]: The IP allow list for access control in Key Delivery. If the default action is set to 'Allow', the IP allow list must be empty.

## StorageAccount
### Properties
* **id**: string: The ID of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts.
* **type**: 'Primary' | 'Secondary' (Required): The type of the storage account.

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded': The provisioning state of the private endpoint connection resource.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected': Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

