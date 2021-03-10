# Microsoft.Confluent @ 2020-03-01-preview

## Resource Microsoft.Confluent/agreements@2020-03-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [ConfluentAgreementProperties](#confluentagreementproperties)
* **type**: 'Microsoft.Confluent/agreements' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Confluent/organizations@2020-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:13_properties](#schemas13properties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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

## schemas:13_properties
### Properties
* **createdTime**: string (ReadOnly)
* **offerDetail**: [schemas:12_offerDetail](#schemas12offerdetail)
* **organizationId**: string (ReadOnly)
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' (ReadOnly)
* **ssoUrl**: string (ReadOnly)
* **userDetail**: [schemas:12_userDetail](#schemas12userdetail)

## schemas:12_offerDetail
### Properties
* **id**: string
* **planId**: string
* **planName**: string
* **publisherId**: string
* **status**: 'Failed' | 'InProgress' | 'PendingFulfillmentStart' | 'Reinstated' | 'Started' | 'Subscribed' | 'Succeeded' | 'Suspended' | 'Unsubscribed' | 'Updating'
* **termUnit**: string

## schemas:12_userDetail
### Properties
* **emailAddress**: string
* **firstName**: string
* **lastName**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

