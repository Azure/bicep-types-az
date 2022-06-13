# Microsoft.AzureData @ 2019-07-24-preview

## Resource Microsoft.AzureData/sqlServerRegistrations@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerRegistrationProperties](#sqlserverregistrationproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureData/sqlServerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureData/sqlServerRegistrations/sqlServers@2019-07-24-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-07-24-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerProperties](#sqlserverproperties): Resource properties.
* **type**: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers' (ReadOnly, DeployTimeConstant): The resource type

## SqlServerProperties
### Properties
* **cores**: int: Cores of the Sql Server.
* **edition**: string: Sql Server Edition.
* **propertyBag**: string: Sql Server Json Property Bag.
* **registrationID**: string: ID for Parent Sql Server Registration.
* **version**: string: Version of the Sql Server.

## SqlServerRegistrationProperties
### Properties
* **propertyBag**: string: Optional Properties as JSON string
* **resourceGroup**: string: Resource Group Name
* **subscriptionId**: string: Subscription Id

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that last modified the resource

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

