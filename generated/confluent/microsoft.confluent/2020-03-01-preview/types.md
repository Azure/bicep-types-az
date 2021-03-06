# Microsoft.Confluent @ 2020-03-01-preview

## Resource Microsoft.Confluent/agreements@2020-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: ConfluentAgreementProperties
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Confluent/organizations@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: OrganizationResourceProperties
* **tags**: OrganizationResourceTags
* **type**: 'Microsoft.Confluent/organizations' (ReadOnly, DeployTimeConstant)

## ConfluentAgreementProperties
### Properties
* **accepted**: bool
* **licenseTextLink**: string
* **plan**: string
* **privacyPolicyLink**: string
* **product**: string
* **publisher**: string
* **retrieveDatetime**: string
* **signature**: string

## OrganizationResourceProperties
### Properties
* **createdTime**: string (ReadOnly)
* **offerDetail**: OrganizationResourcePropertiesOfferDetail
* **organizationId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **ssoUrl**: string (ReadOnly)
* **userDetail**: OrganizationResourcePropertiesUserDetail

## OrganizationResourcePropertiesOfferDetail
### Properties
* **id**: string
* **planId**: string
* **planName**: string
* **publisherId**: string
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating'
* **termUnit**: string

## OrganizationResourcePropertiesUserDetail
### Properties
* **emailAddress**: string
* **firstName**: string
* **lastName**: string

## OrganizationResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

