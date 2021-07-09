# Microsoft.SaaS @ 2018-03-01-beta

## Resource Microsoft.SaaS/resources@2018-03-01-beta
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-beta' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Resource location. Only value allowed for SaaS is 'global'
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SaasCreationProperties](#saascreationproperties): properties for creation saas
* **tags**: [Dictionary<string,String>](#dictionarystringstring): the resource tags.
* **type**: 'Microsoft.SaaS/resources' (ReadOnly, DeployTimeConstant): The resource type

## SaasCreationProperties
### Properties
* **autoRenew**: bool: Whether the SaaS subscription will auto renew upon term end.
* **created**: string (ReadOnly): The created date of this resource.
* **isFreeTrial**: bool (ReadOnly): Whether the current term is a Free Trial term
* **lastModified**: string (ReadOnly): The last modifier date if this resource.
* **offerId**: string: The offer id.
* **paymentChannelMetadata**: [Dictionary<string,String>](#dictionarystringstring): The metadata about the SaaS subscription such as the AzureSubscriptionId and ResourceUri.
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated': The Payment channel for the SaasSubscription.
* **publisherId**: string: The publisher id.
* **publisherTestEnvironment**: string: The environment in the publisher side for this resource.
* **quantity**: int: The seat count.
* **saasResourceName**: string: The SaaS resource name.
* **saasSessionId**: string: The saas session id used for dev service migration request.
* **saasSubscriptionId**: string: The saas subscription id used for tenant to subscription level migration request.
* **skuId**: string: The plan id.
* **status**: 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' (ReadOnly): The SaaS Subscription Status.
* **term**: [schemas:4_properties_term](#schemas4propertiesterm) (ReadOnly): The current Term object.
* **termId**: string: The current Term id.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:4_properties_term
### Properties
* **endDate**: string (ReadOnly): The end date of the current term
* **startDate**: string (ReadOnly): The start date of the current term
* **termUnit**: string (ReadOnly): The unit indicating Monthly / Yearly

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

