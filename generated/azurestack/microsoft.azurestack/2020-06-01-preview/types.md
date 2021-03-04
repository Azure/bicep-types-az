# Microsoft.AzureStack @ 2020-06-01-preview

## Resource Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: 'global' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedSubscriptionParameterProperties (Required)
* **type**: 'Microsoft.AzureStack/linkedSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: 'global' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RegistrationParameterProperties (Required)
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomerSubscriptionProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations/customerSubscriptions' (ReadOnly, DeployTimeConstant)

## LinkedSubscriptionParameterProperties
### Properties
* **linkedSubscriptionId**: string (Required)
* **registrationResourceId**: string (Required)

## RegistrationParameterProperties
### Properties

## CustomerSubscriptionProperties
### Properties
* **tenantId**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

