# Microsoft.SaaS @ 2018-03-01-beta

## Resource Microsoft.SaaS/saasresources@2018-03-01-beta
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-03-01-beta' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'saasresources' (Required, DeployTimeConstant)
* **nextLink**: string (ReadOnly)
* **properties**: SaasCreationProperties (WriteOnly)
* **type**: 'Microsoft.SaaS/saasresources' (ReadOnly, DeployTimeConstant)
* **value**: SaasResource[] (ReadOnly)

## SaasCreationProperties
### Properties
* **autoRenew**: bool (WriteOnly)
* **offerId**: string (WriteOnly)
* **paymentChannelMetadata**: Dictionary<string,String> (WriteOnly)
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated' (WriteOnly)
* **publisherId**: string (WriteOnly)
* **publisherTestEnvironment**: string (WriteOnly)
* **quantity**: int (WriteOnly)
* **saasResourceName**: string (WriteOnly)
* **skuId**: string (WriteOnly)
* **termId**: string (WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## SaasResource
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: schemas:4_properties (ReadOnly)
* **tags**: Dictionary<string,String>[] (ReadOnly)
* **type**: string (ReadOnly)

## schemas:4_properties
### Properties
* **autoRenew**: bool (ReadOnly)
* **created**: string (ReadOnly)
* **isFreeTrial**: bool (ReadOnly)
* **lastModified**: string (ReadOnly)
* **offerId**: string (ReadOnly)
* **paymentChannelMetadata**: Dictionary<string,String> (ReadOnly)
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated' (ReadOnly)
* **publisherId**: string (ReadOnly)
* **publisherTestEnvironment**: string (ReadOnly)
* **quantity**: int (ReadOnly)
* **saasResourceName**: string (ReadOnly)
* **skuId**: string (ReadOnly)
* **status**: 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' (ReadOnly)
* **term**: schemas:4_properties_term (ReadOnly)
* **termId**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:4_properties_term
### Properties
* **endDate**: string (ReadOnly)
* **startDate**: string (ReadOnly)
* **termUnit**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

