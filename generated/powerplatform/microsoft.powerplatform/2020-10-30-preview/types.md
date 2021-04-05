# Microsoft.PowerPlatform @ 2020-10-30-preview

## Resource Microsoft.PowerPlatform/enterprisePolicies@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [EnterprisePolicyIdentity](#enterprisepolicyidentity): The identity of the EnterprisePolicy.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Properties](#properties): The properties that define configuration for the enterprise policy.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerPlatform/enterprisePolicies/subnets@2020-10-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubnetProperties](#subnetproperties) (ReadOnly): Properties of a subnet.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.PowerPlatform/enterprisePolicies/subnets' (ReadOnly, DeployTimeConstant): The resource type

## EnterprisePolicyIdentity
### Properties
* **systemAssignedIdentityPrincipalId**: string (ReadOnly): The principal id of EnterprisePolicy identity.
* **tenantId**: string (ReadOnly): The tenant id associated with the EnterprisePolicy.
* **type**: 'None' | 'SystemAssigned': The type of identity used for the EnterprisePolicy. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.

## Properties
### Properties
* **encryption**: [PropertiesEncryption](#propertiesencryption): The encryption settings for a configuration store.
* **lockbox**: [PropertiesLockbox](#propertieslockbox): Settings concerning lockbox.

## PropertiesEncryption
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties): Settings concerning key vault encryption for a configuration store.

## KeyVaultProperties
### Properties
* **id**: string: Uri of KeyVault
* **key**: [KeyProperties](#keyproperties): Url and version of the KeyVault Secret
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured': The state of onboarding, which only appears in the response.

## KeyProperties
### Properties
* **name**: string: The identifier of the key vault key used to encrypt data.
* **version**: string: The version of the identity which will be used to access key vault.

## PropertiesLockbox
### Properties
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured': The state of onboarding, which only appears in the response.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected': The private endpoint connection status.

## SubnetProperties
### Properties
* **status**: 'Disabled' | 'Enabled' | 'NotConfigured' (ReadOnly): The state of onboarding, which only appears in the response.
* **subnet**: [SubnetEndpointProperty](#subnetendpointproperty) (ReadOnly): Endpoint of the subnet.
* **vnetid**: string (ReadOnly): The virtual network ID. This is typically a GUID. Expect a null GUID by default.

## SubnetEndpointProperty
### Properties
* **id**: string (ReadOnly): Resource id of the subnet.

