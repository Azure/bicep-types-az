# Microsoft.MarketplaceOrdering @ 2021-01-01

## Resource Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements@2021-01-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'current' (Required, DeployTimeConstant)
* **properties**: [AgreementProperties](#agreementproperties)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.MarketplaceOrdering/offerTypes/publishers/offers/plans/agreements' (ReadOnly, DeployTimeConstant)

## AgreementProperties
### Properties
* **accepted**: bool
* **licenseTextLink**: string
* **marketplaceTermsLink**: string
* **plan**: string
* **privacyPolicyLink**: string
* **product**: string
* **publisher**: string
* **retrieveDatetime**: string
* **signature**: string

## systemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

