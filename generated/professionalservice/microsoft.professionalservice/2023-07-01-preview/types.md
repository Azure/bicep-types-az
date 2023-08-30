# Microsoft.ProfessionalService @ 2023-07-01-preview

## Resource Microsoft.ProfessionalService/operationResults@2023-07-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProfessionalServiceResourceProperties](#professionalserviceresourceproperties) (ReadOnly): professionalService properties
* **tags**: [Tags](#tags) (ReadOnly): the resource tags.
* **type**: 'Microsoft.ProfessionalService/operationResults' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ProfessionalService/resources@2023-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Resource location. Only value allowed for ProfessionalService is 'global'
* **name**: string {pattern: "^[a-zA-Z0-9-_.()]{0,63}[a-zA-Z0-9-_()]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProfessionalServiceCreationPropertiesOrProfessionalServiceResourceProperties](#professionalservicecreationpropertiesorprofessionalserviceresourceproperties): Properties of the ProfessionalService resource that are relevant for creation.
* **tags**: [Tags](#tags): the resource tags.
* **type**: 'Microsoft.ProfessionalService/resources' (ReadOnly, DeployTimeConstant): The resource type

## ProfessionalServiceCreationPropertiesOrProfessionalServiceResourceProperties
### Properties
* **autoRenew**: bool: Whether the ProfessionalService subscription will auto renew upon term end.
* **billingPeriod**: string: The billing period eg P1M,P1Y for monthly,yearly respectively
* **created**: string (ReadOnly): The created date of this resource.
* **isFreeTrial**: bool (ReadOnly): Whether the current term is a Free Trial term
* **lastModified**: string (ReadOnly): The last modifier date if this resource.
* **offerId**: string: The offer id.
* **paymentChannelMetadata**: [ProfessionalServicePropertiesPaymentChannelMetadata](#professionalservicepropertiespaymentchannelmetadata) (ReadOnly): The metadata about the ProfessionalService subscription such as the AzureSubscriptionId and ResourceUri.
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated' | string (ReadOnly): The Payment channel for the ProfessionalServiceSubscription.
* **publisherId**: string: The publisher id.
* **quoteId**: string: The quote id which the ProfessionalService will be purchase with.
* **skuId**: string: The plan id.
* **status**: 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string (ReadOnly): The ProfessionalService Subscription Status.
* **storeFront**: string: The store front which initiates the purchase.
* **term**: [ProfessionalServicePropertiesTerm](#professionalservicepropertiesterm) (ReadOnly): The current Term object.
* **termUnit**: string: The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively

## ProfessionalServicePropertiesPaymentChannelMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfessionalServicePropertiesPaymentChannelMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ProfessionalServicePropertiesTerm
### Properties
* **endDate**: string: The end date of the current term
* **startDate**: string: The start date of the current term
* **termUnit**: string: The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively

## ProfessionalServiceResourceProperties
### Properties
* **autoRenew**: bool: Whether the ProfessionalService subscription will auto renew upon term end.
* **billingPeriod**: string: The billing period eg P1M,P1Y for monthly,yearly respectively
* **created**: string (ReadOnly): The created date of this resource.
* **isFreeTrial**: bool: Whether the current term is a Free Trial term
* **lastModified**: string: The last modifier date if this resource.
* **offerId**: string: The offer id.
* **paymentChannelMetadata**: [ProfessionalServicePropertiesPaymentChannelMetadata](#professionalservicepropertiespaymentchannelmetadata): The metadata about the ProfessionalService subscription such as the AzureSubscriptionId and ResourceUri.
* **paymentChannelType**: 'CustomerDelegated' | 'SubscriptionDelegated' | string: The Payment channel for the ProfessionalServiceSubscription.
* **publisherId**: string: The publisher id.
* **quoteId**: string: The quote id which the ProfessionalService will be purchase with.
* **skuId**: string: The plan id.
* **status**: 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed' | string: The ProfessionalService Subscription Status.
* **storeFront**: string: The store front which initiates the purchase.
* **term**: [ProfessionalServicePropertiesTerm](#professionalservicepropertiesterm): The current Term object.
* **termUnit**: string: The unit term eg P1M,P1Y,P2Y,P3Y meaning month,1year,2year,3year respectively

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

