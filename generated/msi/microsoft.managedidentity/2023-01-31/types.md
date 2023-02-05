# Microsoft.ManagedIdentity @ 2023-01-31

## Resource Microsoft.ManagedIdentity/identities@2023-01-31 (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [SystemAssignedIdentityProperties](#systemassignedidentityproperties) (ReadOnly): The properties associated with the identity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [SystemAssignedIdentityTags](#systemassignedidentitytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.ManagedIdentity/identities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserAssignedIdentityProperties](#userassignedidentityproperties) (ReadOnly): The properties associated with the identity.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-31' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FederatedIdentityCredentialProperties](#federatedidentitycredentialproperties): The properties associated with the federated identity credential.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials' (ReadOnly, DeployTimeConstant): The resource type

## FederatedIdentityCredentialProperties
### Properties
* **audiences**: string[] (Required): The list of audiences that can appear in the issued token.
* **issuer**: string (Required): The URL of the issuer to be trusted.
* **subject**: string (Required): The identifier of the external identity.

## SystemAssignedIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The id of the app associated with the identity. This is a random generated UUID by MSI.
* **clientSecretUrl**: string (ReadOnly): The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials.
* **principalId**: string (ReadOnly): The id of the service principal object associated with the created identity.
* **tenantId**: string (ReadOnly): The id of the tenant which the identity belongs to.

## SystemAssignedIdentityTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## UserAssignedIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The id of the app associated with the identity. This is a random generated UUID by MSI.
* **principalId**: string (ReadOnly): The id of the service principal object associated with the created identity.
* **tenantId**: string (ReadOnly): The id of the tenant which the identity belongs to.

