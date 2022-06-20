# microsoft.aadiam @ 2020-03-01-preview

## Resource microsoft.aadiam/privateLinkForAzureAd@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **allTenants**: bool: Flag indicating whether all tenants are allowed
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **ownerTenantId**: string: Guid of the owner tenant
* **resourceGroup**: string: Name of the resource group
* **resourceName**: string: Name of the private link policy resource
* **subscriptionId**: string: Subscription Identifier
* **tags**: [PrivateLinkPolicyTags](#privatelinkpolicytags): Resource tags.
* **tenants**: string[]: The list of tenantIds.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd' (ReadOnly, DeployTimeConstant): The resource type

## Resource microsoft.aadiam/privateLinkForAzureAd/privateLinkResources@2020-03-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **type**: 'microsoft.aadiam/privateLinkForAzureAd/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## PrivateLinkPolicyTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.

