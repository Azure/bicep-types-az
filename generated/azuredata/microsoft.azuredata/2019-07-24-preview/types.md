# Microsoft.AzureData @ 2019-07-24-preview

## Resource Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerRegistrationProperties](#sqlserverregistrationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.AzureData/sqlServerRegistrations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SqlServerProperties](#sqlserverproperties)
* **type**: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers' (ReadOnly, DeployTimeConstant)

## SqlServerRegistrationProperties
### Properties
* **propertyBag**: string
* **resourceGroup**: string
* **subscriptionId**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SqlServerProperties
### Properties
* **cores**: int
* **edition**: string
* **propertyBag**: string
* **registrationID**: string
* **version**: string

