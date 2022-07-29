# Microsoft.PowerPlatform @ 2020-10-30-preview

## Resource Microsoft.PowerPlatform/accounts@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): The properties that define configuration for the account.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PowerPlatform/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EnterprisePolicyIdentity](#enterprisepolicyidentity): The identity of the EnterprisePolicy.
* **kind**: 'Encryption' | 'Lockbox' | 'NetworkInjection' | 'PrivateEndpoint' | string (Required): The kind (type) of Enterprise Policy.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Properties](#properties): The properties that define configuration for the enterprise policy
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerPlatform/enterprisePolicies/privateLinkResources@2020-10-30-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## AccountProperties
### Properties
* **description**: string: The description of the account.
* **systemId**: string (ReadOnly): The internally assigned unique identifier of the resource.

## EnterprisePolicyIdentity
### Properties
* **systemAssignedIdentityPrincipalId**: string (ReadOnly): The principal id of EnterprisePolicy identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the EnterprisePolicy.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

## KeyProperties
### Properties
* **name**: string: The identifier of the key vault key used to encrypt data.
* **version**: string: The version of the identity which will be used to access key vault.

## KeyVaultProperties
### Properties
* **id**: string: Uri of KeyVault
* **key**: [KeyProperties](#keyproperties): Identity of the secret that includes name and version.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

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

## Properties
### Properties
* **encryption**: [PropertiesEncryption](#propertiesencryption): The encryption settings for a configuration store.
* **lockbox**: [PropertiesLockbox](#propertieslockbox): Settings concerning lockbox.
* **networkInjection**: [PropertiesNetworkInjection](#propertiesnetworkinjection): Settings concerning network injection.
* **systemId**: string (ReadOnly): The internally assigned unique identifier of the resource.

## PropertiesEncryption
### Properties
* **keyVault**: [KeyVaultProperties](#keyvaultproperties): Key vault properties.
* **state**: 'Disabled' | 'Enabled' | 'NotConfigured' | string: The state of onboarding, which only appears in the response.

## PropertiesLockbox
### Properties
* **state**: 'Disabled' | 'Enabled' | 'NotConfigured' | string: lockbox configuration

## PropertiesNetworkInjection
### Properties
* **virtualNetworks**: [VirtualNetworkPropertiesList](#virtualnetworkpropertieslist): Network injection configuration

## SubnetProperties
### Properties
* **name**: string: Subnet name.

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

## VirtualNetworkProperties
### Properties
* **id**: string: Uri of the virtual network.
* **subnet**: [SubnetProperties](#subnetproperties): Properties of a subnet.

## VirtualNetworkPropertiesList
### Properties
* **nextLink**: string: Next page link if any.
* **value**: [VirtualNetworkProperties](#virtualnetworkproperties)[]: Array of virtual networks.

