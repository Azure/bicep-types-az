# Neon.Postgres @ 2024-08-01-preview

## Resource Neon.Postgres/organizations@2024-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [LiftrBaseDataOrganizationProperties](#liftrbasedataorganizationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Neon.Postgres/organizations' (ReadOnly, DeployTimeConstant): The resource type

## LiftrBaseCompanyDetails
### Properties
* **businessPhone**: string: Business phone number of the company
* **companyName**: string: Company name
* **country**: string: Country name of the company
* **domain**: string: Domain of the user
* **numberOfEmployees**: int: Number of employees in the company
* **officeAddress**: string: Office address of the company

## LiftrBaseDataOrganizationProperties
### Properties
* **companyDetails**: [LiftrBaseCompanyDetails](#liftrbasecompanydetails) (Required): Details of the company.
* **marketplaceDetails**: [LiftrBaseMarketplaceDetails](#liftrbasemarketplacedetails) (Required): Marketplace details of the resource.
* **partnerOrganizationProperties**: [LiftrBaseDataPartnerOrganizationProperties](#liftrbasedatapartnerorganizationproperties): Organization properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **userDetails**: [LiftrBaseUserDetails](#liftrbaseuserdetails) (Required): Details of the user.

## LiftrBaseDataPartnerOrganizationProperties
### Properties
* **organizationId**: string: Organization Id in partner's system
* **organizationName**: string {minLength: 1, maxLength: 50, pattern: "^[a-zA-Z0-9][a-zA-Z0-9_\-.: ]*$"} (Required): Organization name in partner's system
* **singleSignOnProperties**: [LiftrBaseSingleSignOnProperties](#liftrbasesinglesignonproperties): Single Sign On properties for the organization

## LiftrBaseMarketplaceDetails
### Properties
* **offerDetails**: [LiftrBaseOfferDetails](#liftrbaseofferdetails) (Required): Offer details for the marketplace that is selected by the user
* **subscriptionId**: string: SaaS subscription id for the the marketplace offer
* **subscriptionStatus**: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: Marketplace subscription status

## LiftrBaseOfferDetails
### Properties
* **offerId**: string (Required): Offer Id for the marketplace offer
* **planId**: string (Required): Plan Id for the marketplace offer
* **planName**: string: Plan Name for the marketplace offer
* **publisherId**: string (Required): Publisher Id for the marketplace offer
* **termId**: string: Term Id for the marketplace offer
* **termUnit**: string: Term Name for the marketplace offer

## LiftrBaseSingleSignOnProperties
### Properties
* **aadDomains**: string[]: List of AAD domains fetched from Microsoft Graph for user.
* **enterpriseAppId**: string: AAD enterprise application Id used to setup SSO
* **singleSignOnState**: 'Disable' | 'Enable' | 'Initial' | string: State of the Single Sign On for the organization
* **singleSignOnUrl**: string: URL for SSO to be used by the partner to redirect the user to their system

## LiftrBaseUserDetails
### Properties
* **emailAddress**: string {pattern: "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}$"}: Email address of the user
* **firstName**: string: First name of the user
* **lastName**: string: Last name of the user
* **phoneNumber**: string: User's phone number
* **upn**: string: User's principal name

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

