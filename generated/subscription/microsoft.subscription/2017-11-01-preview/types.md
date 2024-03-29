# Microsoft.Subscription @ 2017-11-01-preview

## Resource Microsoft.Subscription/subscriptionDefinitions@2017-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionDefinitionProperties](#subscriptiondefinitionproperties): the subscription definition properties
* **type**: 'Microsoft.Subscription/subscriptionDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Subscription/subscriptionOperations@2017-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2017-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionDefinitionProperties](#subscriptiondefinitionproperties) (ReadOnly): the subscription definition properties
* **type**: 'Microsoft.Subscription/subscriptionOperations' (ReadOnly, DeployTimeConstant): The resource type

## SubscriptionDefinitionProperties
### Properties
* **etag**: string: The etag the subscription definition.
* **offerType**: string: The offer type of the subscription. For example, MS-AZR-0017P (EnterpriseAgreement) and MS-AZR-0148P (EnterpriseAgreement devTest) are available.
* **subscriptionDisplayName**: string: The display name of the subscription.
* **subscriptionId**: string (ReadOnly): The ID of the subscription.

