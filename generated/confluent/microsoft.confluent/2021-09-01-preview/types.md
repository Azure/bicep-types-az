# Microsoft.Confluent @ 2021-09-01-preview

## Resource Microsoft.Confluent/agreements@2021-09-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Represents the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2021-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant): The resource type

## ConfluentAgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **plan**: string: Plan identifier string.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Product identifier string.
* **publisher**: string: Publisher identifier string.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

## OfferDetail
### Properties
* **id**: string (Required): Offer Id
* **planId**: string (Required): Offer Plan Id
* **planName**: string (Required): Offer Plan Name
* **publisherId**: string (Required): Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating' | string (ReadOnly): SaaS Offer Status
* **termUnit**: string (Required): Offer Plan Term unit

## OrganizationResourceProperties
### Properties
* **createdTime**: string (ReadOnly): The creation time of the resource.
* **offerDetail**: [OfferDetail](#offerdetail) (Required): Confluent offer detail
* **organizationId**: string (ReadOnly): Id of the Confluent organization.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provision states for confluent RP
* **ssoUrl**: string (ReadOnly): SSO url for the Confluent organization.
* **userDetail**: [UserDetail](#userdetail) (Required): Subscriber detail

## OrganizationResourceTags
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

## UserDetail
### Properties
* **emailAddress**: string (Required): Email address
* **firstName**: string: First name
* **lastName**: string: Last name

