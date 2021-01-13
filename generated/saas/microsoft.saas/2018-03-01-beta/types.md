# Microsoft.SaaS @ 2018-03-01-beta

## Resource Microsoft.SaaS/resources@2018-03-01-beta
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-beta' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SaasCreationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.SaaS/resources' (ReadOnly, DeployTimeConstant)

## SaasCreationProperties
### Properties
* **autoRenew**: bool
* **created**: string (ReadOnly)
* **isFreeTrial**: bool (ReadOnly)
* **lastModified**: string (ReadOnly)
* **offerId**: string
* **paymentChannelMetadata**: Dictionary<string,String>
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated'
* **publisherId**: string
* **publisherTestEnvironment**: string
* **quantity**: int
* **saasResourceName**: string
* **saasSessionId**: string
* **saasSubscriptionId**: string
* **skuId**: string
* **status**: 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' (ReadOnly)
* **term**: schemas:4_properties_term (ReadOnly)
* **termId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:4_properties_term
### Properties
* **endDate**: string (ReadOnly)
* **startDate**: string (ReadOnly)
* **termUnit**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

