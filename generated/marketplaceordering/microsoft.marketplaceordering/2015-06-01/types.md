# Microsoft.MarketplaceOrdering @ 2015-06-01

## Resource Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2015-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties): Agreement Terms definition
* **type**: 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements' (ReadOnly, DeployTimeConstant): The resource type

## AgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **plan**: string: Plan identifier string of image being deployed.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Offer identifier string of image being deployed.
* **publisher**: string: Publisher identifier string of image being deployed.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

