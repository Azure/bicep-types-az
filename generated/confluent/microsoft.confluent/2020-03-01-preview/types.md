# Microsoft.Confluent @ 2020-03-01-preview

## Resource Microsoft.Confluent/agreements@2020-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Represents the properties of the resource.
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties): Organization resource properties
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

## OrganizationResourceProperties
### Properties
* **createdTime**: string (ReadOnly): The creation time of the resource.
* **offerDetail**: [OrganizationResourcePropertiesOfferDetail](#organizationresourcepropertiesofferdetail): Confluent offer detail
* **organizationId**: string (ReadOnly): Id of the Confluent organization.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provision states for confluent RP
* **ssoUrl**: string (ReadOnly): SSO url for the Confluent organization.
* **userDetail**: [OrganizationResourcePropertiesUserDetail](#organizationresourcepropertiesuserdetail): Subscriber detail

## OrganizationResourcePropertiesOfferDetail
### Properties
* **id**: string: Offer Id
* **planId**: string: Offer Plan Id
* **planName**: string: Offer Plan Name
* **publisherId**: string: Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating' | string (ReadOnly): SaaS Offer Status
* **termUnit**: string: Offer Plan Term unit

## OrganizationResourcePropertiesUserDetail
### Properties
* **emailAddress**: string: Email address
* **firstName**: string: First name
* **lastName**: string: Last name

## OrganizationResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

