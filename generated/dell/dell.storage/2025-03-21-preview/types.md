# Dell.Storage @ 2025-03-21-preview

## Resource Dell.Storage/filesystems@2025-03-21-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9_-]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LiftrBaseStorageFileSystemResourceProperties](#liftrbasestoragefilesystemresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Dell.Storage/filesystems' (ReadOnly, DeployTimeConstant): The resource type

## LiftrBaseEncryptionIdentityProperties
### Properties
* **identityResourceId**: string: User-assigned identity resource id - Only when user opts for UserAssigned identity and hence optional
* **identityType**: 'SystemAssigned' | 'UserAssigned' | string: Identity type - SystemAssigned/UserAssigned - Only UserAssigned is supported now

## LiftrBaseEncryptionProperties
### Properties
* **encryptionIdentityProperties**: [LiftrBaseEncryptionIdentityProperties](#liftrbaseencryptionidentityproperties): Identity configuration for Customer-managed key settings defining which identity should be used to auth to Key Vault - Only when user opts for CMK and hence optional
* **encryptionType**: 'Customer-managed keys (CMK)' | 'Microsoft-managed keys (MMK)' | string (Required): Encryption Type - MMK/CMK
* **keyUrl**: string: Versioned Encryption Key Url - Only when user opts for CMK and hence optional

## LiftrBaseMarketplaceDetails
### Properties
* **endDate**: string: End Date of the subscription
* **marketplaceSubscriptionId**: string: Marketplace Subscription Id
* **marketplaceSubscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Marketplace subscription status
* **offerId**: string (Required): Offer Id
* **planId**: string (Required): Plan Id
* **planName**: string (Required): Plan Name
* **privateOfferId**: string: Private Offer Id
* **publisherId**: string: Publisher Id
* **termUnit**: string: Term Unit

## LiftrBaseStorageCapacity
### Properties
* **current**: string: Current Capacity of the resource
* **incremental**: string: Units to be increased
* **max**: string: Maximum Capacity
* **min**: string: Minimum Capacity

## LiftrBaseStorageFileSystemResourceProperties
### Properties
* **capacity**: [LiftrBaseStorageCapacity](#liftrbasestoragecapacity): Capacity for Dell Filesystem, Will be received as part of Job Status
* **delegatedSubnetCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}/(16|24)$"} (Required): Domain range for the delegated subnet
* **delegatedSubnetId**: string (Required): Delegated subnet id for Vnet injection
* **dellReferenceNumber**: string (Required): DellReferenceNumber of the resource
* **encryption**: [LiftrBaseEncryptionProperties](#liftrbaseencryptionproperties) (Required): EncryptionProperties of the resource
* **fileSystemId**: string: File system Id of the resource
* **marketplace**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details
* **oneFsUrl**: string: OneFS url
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of the resource
* **smartConnectFqdn**: string: Smart Connect FQDN of the resource
* **user**: [LiftrBaseUserDetails](#liftrbaseuserdetails) (Required): User Details

## LiftrBaseUserDetails
### Properties
* **email**: string {sensitive} (Required): User Email

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

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
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

