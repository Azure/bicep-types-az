# Microsoft.MarketplaceOrdering @ 2015-06-01

## Resource Microsoft.MarketplaceOrdering/agreements/offers/plans@2015-06-01 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OldAgreementProperties](#oldagreementproperties) (ReadOnly): Old Agreement Terms definition
* **type**: 'Microsoft.MarketplaceOrdering/agreements/offers/plans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2015-06-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2015-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties): Agreement Terms definition
* **type**: 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements' (ReadOnly, DeployTimeConstant): The resource type

## OldAgreementProperties
### Properties
* **cancelDate**: string (ReadOnly): Date and time in UTC of when the terms were cancelled. This is empty if state is active.
* **id**: string (ReadOnly): A unique identifier of the agreement.
* **offer**: string (ReadOnly): Offer identifier string of image being deployed.
* **publisher**: string (ReadOnly): Publisher identifier string of image being deployed.
* **signDate**: string (ReadOnly): Date and time in UTC of when the terms were accepted. This is empty if state is cancelled.
* **state**: 'Active' | 'Canceled' (ReadOnly): Whether the agreement is active or cancelled

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

