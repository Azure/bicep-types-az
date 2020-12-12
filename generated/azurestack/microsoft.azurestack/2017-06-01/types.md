# Microsoft.AzureStack @ 2017-06-01

## Resource Microsoft.AzureStack/registrations@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistrationParameterProperties (Required)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2017-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-06-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## CustomerSubscriptionProperties
### Properties
* **tenantId**: string

