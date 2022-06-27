# Microsoft.ManagedIdentity @ 2015-08-31-preview

## Resource Microsoft.ManagedIdentity/identities@2015-08-31-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The geo-location where the resource lives
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [IdentityProperties](#identityproperties) (ReadOnly): The properties associated with the identity.
* **tags**: [SystemAssignedIdentityTags](#systemassignedidentitytags) (ReadOnly): Resource tags
* **type**: 'Microsoft.ManagedIdentity/identities' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ManagedIdentity/userAssignedIdentities@2015-08-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IdentityProperties](#identityproperties) (ReadOnly): The properties associated with the identity.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities' (ReadOnly, DeployTimeConstant): The resource type

## IdentityProperties
### Properties
* **clientId**: string (ReadOnly): The id of the app associated with the identity. This is a random generated UUID by MSI.
* **clientSecretUrl**: string (ReadOnly): The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials.
* **principalId**: string (ReadOnly): The id of the service principal object associated with the created identity.
* **tenantId**: string (ReadOnly): The id of the tenant which the identity belongs to.

## SystemAssignedIdentityTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

