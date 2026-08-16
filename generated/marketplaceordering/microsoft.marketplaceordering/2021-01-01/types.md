# Microsoft.MarketplaceOrdering @ 2021-01-01

## Resource Microsoft.MarketplaceOrdering/agreements/offers/plans@2021-01-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [OldAgreementProperties](#oldagreementproperties) (ReadOnly): Represents the properties of the resource.
* **type**: 'Microsoft.MarketplaceOrdering/agreements/offers/plans' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2021-01-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties): Represents the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Function cancel (Microsoft.MarketplaceOrdering/agreements/offers/plans@2021-01-01)
* **Resource**: Microsoft.MarketplaceOrdering/agreements/offers/plans
* **ApiVersion**: 2021-01-01
* **Output**: [OldAgreementTerms](#oldagreementterms)

## Function sign (Microsoft.MarketplaceOrdering/agreements/offers/plans@2021-01-01)
* **Resource**: Microsoft.MarketplaceOrdering/agreements/offers/plans
* **ApiVersion**: 2021-01-01
* **Output**: [OldAgreementTerms](#oldagreementterms)

## AgreementProperties
### Properties
* **accepted**: bool: If any version of the terms have been accepted, otherwise false.
* **licenseTextLink**: string: Link to HTML with Microsoft and Publisher terms.
* **marketplaceTermsLink**: string: Link to HTML with Azure Marketplace terms.
* **plan**: string: Plan identifier string of image being deployed.
* **privacyPolicyLink**: string: Link to the privacy policy of the publisher.
* **product**: string: Offer identifier string of image being deployed.
* **publisher**: string: Publisher identifier string of image being deployed.
* **retrieveDatetime**: string: Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
* **signature**: string: Terms signature.

## OldAgreementProperties
### Properties
* **cancelDate**: string: Date and time in UTC of when the terms were cancelled. This is empty if state is active.
* **id**: string: A unique identifier of the agreement.
* **offer**: string: Offer identifier string of image being deployed.
* **publisher**: string: Publisher identifier string of image being deployed.
* **signDate**: string: Date and time in UTC of when the terms were accepted. This is empty if state is cancelled.
* **state**: 'Active' | 'Canceled' | string: Whether the agreement is active or cancelled

## OldAgreementTerms
### Properties
* **id**: string (ReadOnly): Resource ID.
* **name**: string (ReadOnly): Resource name.
* **properties**: [OldAgreementProperties](#oldagreementproperties): Represents the properties of the resource.
* **type**: string (ReadOnly): Resource type.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

