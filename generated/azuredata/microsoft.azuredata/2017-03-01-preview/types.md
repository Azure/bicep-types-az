# Microsoft.AzureData @ 2017-03-01-preview

## Resource Microsoft.AzureData/sqlServerRegistrations@2017-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerRegistrationProperties](#sqlserverregistrationproperties): Resource properties.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AzureData/sqlServerRegistrations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AzureData/sqlServerRegistrations/sqlServers@2017-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SqlServerProperties](#sqlserverproperties): Resource properties.
* **type**: 'Microsoft.AzureData/sqlServerRegistrations/sqlServers' (ReadOnly, DeployTimeConstant): The resource type

## SqlServerProperties
### Properties
* **cores**: int (WriteOnly): Cores of the Sql Server.
* **edition**: string: Sql Server Edition.
* **propertyBag**: string: Sql Server Json Property Bag.
* **registrationID**: string: ID for Parent Sql Server Registration.
* **version**: string: Version of the Sql Server.

## SqlServerRegistrationProperties
### Properties
* **propertyBag**: string: Optional Properties as JSON string
* **resourceGroup**: string: Resource Group Name
* **subscriptionId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Subscription Id

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

