# Microsoft.Confluent @ 2020-03-01

## Resource Microsoft.Confluent/agreements@2020-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties): Terms properties for Marketplace and Confluent.
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Confluent/organizations@2020-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Location of Organization resource
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [schemas:13_properties](#schemas13properties): Organization resource properties
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Organization resource tags
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

## schemas:13_properties
### Properties
* **createdTime**: string (ReadOnly): The creation time of the resource.
* **offerDetail**: [schemas:12_offerDetail](#schemas12offerdetail): Confluent offer detail
* **organizationId**: string (ReadOnly): Id of the Confluent organization.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly): Provision states for confluent RP.
* **ssoUrl**: string (ReadOnly): SSO url for the Confluent organization.
* **userDetail**: [schemas:12_userDetail](#schemas12userdetail): Subscriber detail

## schemas:12_offerDetail
### Properties
* **id**: string: Offer Id
* **planId**: string: Offer Plan Id
* **planName**: string: Offer Plan Name
* **publisherId**: string: Publisher Id
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating': SaaS Offer Status.
* **termUnit**: string: Offer Plan Term unit

## schemas:12_userDetail
### Properties
* **emailAddress**: string: Email address
* **firstName**: string: First name
* **lastName**: string: Last name

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

