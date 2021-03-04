# Microsoft.ManagedIdentity @ 2015-08-31-preview

## Resource Microsoft.ManagedIdentity/userAssignedIdentities@2015-08-31-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-08-31-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IdentityProperties (ReadOnly)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities' (ReadOnly, DeployTimeConstant)

## IdentityProperties
### Properties
* **clientId**: string (ReadOnly)
* **clientSecretUrl**: string (ReadOnly)
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

