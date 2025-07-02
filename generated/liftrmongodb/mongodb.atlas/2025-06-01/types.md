# MongoDB.Atlas @ 2025-06-01

## Resource MongoDB.Atlas/organizations@2025-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationProperties](#organizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'MongoDB.Atlas/organizations' (ReadOnly, DeployTimeConstant): The resource type

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details for the marketplace that is selected by the user
* **subscriptionId**: string (Required): Azure subscription id for the the marketplace offer is purchased from
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer Id for the marketplace offer
* **planId**: string (Required): Plan Id for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher Id for the marketplace offer
* **termId**: string: Plan Display Name for the marketplace offer
* **termUnit**: string: Plan Display Name for the marketplace offer

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## OrganizationProperties
### Properties
* **marketplace**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details of the resource.
* **partnerProperties**: [PartnerProperties](#partnerproperties): MongoDB properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **user**: [UserDetails](#userdetails) (Required): Details of the user.

## PartnerProperties
### Properties
* **organizationId**: string: Organization Id in MongoDB system
* **organizationName**: string {minLength: 1, maxLength: 64, pattern: "^[a-zA-Z0-9 _\-().,:@+&',]{1,64}$"} (Required): Organization name in MongoDB system
* **redirectUrl**: string: Redirect URL for the MongoDB

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

## UserDetails
### Properties
* **companyName**: string: Company Name
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"} (Required): Email address of the user
* **firstName**: string (Required): First name of the user
* **lastName**: string (Required): Last name of the user
* **phoneNumber**: string: User's phone number
* **upn**: string: User's principal name

