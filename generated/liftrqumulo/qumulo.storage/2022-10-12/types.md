# Qumulo.Storage @ 2022-10-12

## Resource Qumulo.Storage/fileSystems@2022-10-12
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-10-12' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FileSystemResourceProperties](#filesystemresourceproperties) (Required): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Qumulo.Storage/fileSystems' (ReadOnly, DeployTimeConstant): The resource type

## FileSystemResourceProperties
### Properties
* **adminPassword**: string (Required): Initial administrator password of the resource
* **availabilityZone**: string: Availability zone
* **clusterLoginUrl**: string: File system Id of the resource
* **delegatedSubnetId**: string (Required): Delegated subnet id for Vnet injection
* **initialCapacity**: int (Required): Storage capacity in TB
* **marketplaceDetails**: [MarketplaceDetails](#marketplacedetails) (Required): Marketplace details
* **privateIPs**: string[]: Private IPs of the resource
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Provisioning State of the resource
* **storageSku**: 'Performance' | 'Standard' (Required): Storage Sku
* **userDetails**: [UserDetails](#userdetails) (Required): User Details

## ManagedServiceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## MarketplaceDetails
### Properties
* **marketplaceSubscriptionId**: string: Marketplace Subscription Id
* **marketplaceSubscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' (ReadOnly): Marketplace subscription status
* **offerId**: string (Required): Offer Id
* **planId**: string (Required): Plan Id
* **publisherId**: string (Required): Publisher Id

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## UserDetails
### Properties
* **email**: string (Required): User Email

