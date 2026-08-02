# Microsoft.Confluent @ 2021-03-01-preview

## Resource Microsoft.Confluent/agreements@2021-03-01-preview
* **Readable Scope(s)**: None
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Represents the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2021-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant): The resource type

## Function orgvalidate (Microsoft.Confluent/validations@2021-03-01-preview)
* **Resource**: Microsoft.Confluent/validations
* **ApiVersion**: 2021-03-01-preview
* **Input**: [OrganizationResource](#organizationresource)
* **Output**: [OrganizationResource](#organizationresource)

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
* **id**: string {maxLength: 50} (Required): Offer Id
* **planId**: string {maxLength: 50} (Required): Offer Plan Id
* **planName**: string {maxLength: 50} (Required): Offer Plan Name
* **publisherId**: string {maxLength: 50} (Required): Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating' | string (ReadOnly): SaaS Offer Status
* **termUnit**: string {maxLength: 25} (Required): Offer Plan Term unit

## OrganizationResource
### Properties
* **id**: string (ReadOnly): The ARM id of the resource.
* **location**: string: Location of Organization resource
* **name**: string (ReadOnly): The name of the resource.
* **properties**: [OrganizationResourceProperties](#organizationresourceproperties) (Required): Organization resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource
* **tags**: [OrganizationResourceTags](#organizationresourcetags): Organization resource tags
* **type**: string (ReadOnly): The type of the resource.

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
* **emailAddress**: string {pattern: "^\S+@\S+\.\S+$"} (Required): Email address
* **firstName**: string {maxLength: 50}: First name
* **lastName**: string {maxLength: 50}: Last name

