# Microsoft.MarketplaceOrdering @ 2021-01-01

## Resource Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2021-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties): Agreement Terms definition
* **systemData**: [systemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements' (ReadOnly, DeployTimeConstant): The resource type

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

## systemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

