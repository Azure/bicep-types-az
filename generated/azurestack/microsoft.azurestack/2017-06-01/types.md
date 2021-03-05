# Microsoft.AzureStack @ 2017-06-01

## Resource Microsoft.AzureStack/registrations@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: 'global' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistrationParameterProperties (Required)
* **tags**: TrackedResourceTags (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomerSubscriptionProperties
* **type**: 'Microsoft.AzureStack/registrations/customerSubscriptions' (ReadOnly, DeployTimeConstant)

## RegistrationParameterProperties
### Properties
* **billingModel**: string (ReadOnly)
* **cloudId**: string (ReadOnly)
* **objectId**: string (ReadOnly)
* **registrationToken**: string (Required, WriteOnly)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CustomerSubscriptionProperties
### Properties
* **tenantId**: string

