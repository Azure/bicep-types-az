# Microsoft.AzureStack @ 2020-06-01-preview

## Resource Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: 'global' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedSubscriptionParameterProperties](#linkedsubscriptionparameterproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly)
* **type**: 'Microsoft.AzureStack/linkedSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: string (ReadOnly)
* **location**: 'global' (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RegistrationParameterProperties](#registrationparameterproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureStack/registrations/customerSubscriptions@2020-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomerSubscriptionProperties](#customersubscriptionproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.AzureStack/registrations/customerSubscriptions' (ReadOnly, DeployTimeConstant)

## LinkedSubscriptionParameterProperties
### Properties
* **deviceConnectionStatus**: string (ReadOnly)
* **deviceId**: string (ReadOnly)
* **deviceLinkState**: string (ReadOnly)
* **deviceObjectId**: string (ReadOnly)
* **lastConnectedTime**: string (ReadOnly)
* **linkedSubscriptionId**: string (Required)
* **registrationResourceId**: string (Required)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

