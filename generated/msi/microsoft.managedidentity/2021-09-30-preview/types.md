# Microsoft.ManagedIdentity @ 2021-09-30-preview

## Resource Microsoft.ManagedIdentity/userAssignedIdentities@2021-09-30-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-30-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UserAssignedIdentityProperties](#userassignedidentityproperties) (ReadOnly): The properties associated with the identity.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ManagedIdentity/userAssignedIdentities' (ReadOnly, DeployTimeConstant): The resource type

## Function listAssociatedResources (Microsoft.ManagedIdentity/userAssignedIdentities@2021-09-30-preview)
* **Resource**: Microsoft.ManagedIdentity/userAssignedIdentities
* **ApiVersion**: 2021-09-30-preview
* **Output**: [AssociatedResourcesListResult](#associatedresourceslistresult)

## AssociatedResourcesListResult
### Properties
* **nextLink**: string (ReadOnly): The url to get the next page of results, if any.
* **totalCount**: int (ReadOnly): Total number of Azure resources assigned to the identity.
* **value**: [AzureResource](#azureresource)[] (ReadOnly): The collection of Azure resources returned by the resource action to get a list of assigned resources.

## AzureResource
### Properties
* **id**: string (ReadOnly): The ID of this resource.
* **name**: string (ReadOnly): The name of this resource.
* **resourceGroup**: string (ReadOnly): The name of the resource group this resource belongs to.
* **subscriptionDisplayName**: string (ReadOnly): The name of the subscription this resource belongs to.
* **subscriptionId**: string (ReadOnly): The ID of the subscription this resource belongs to.
* **type**: string (ReadOnly): The type of this resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The id of the app associated with the identity. This is a random generated UUID by MSI.
* **principalId**: string (ReadOnly): The id of the service principal object associated with the created identity.
* **tenantId**: string (ReadOnly): The id of the tenant which the identity belongs to.

