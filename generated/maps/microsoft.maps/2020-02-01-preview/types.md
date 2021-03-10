# Microsoft.Maps @ 2020-02-01-preview

## Resource Microsoft.Maps/accounts@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [MapsAccountProperties](#mapsaccountproperties) (ReadOnly)
* **sku**: [Sku](#sku) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [MapsAccountCreateParametersTags](#mapsaccountcreateparameterstags)
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/creators@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreatorProperties](#creatorproperties) (ReadOnly)
* **tags**: [CreatorCreateParametersTags](#creatorcreateparameterstags)
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateAtlasProperties](#privateatlasproperties) (ReadOnly)
* **tags**: [PrivateAtlasCreateParametersTags](#privateatlascreateparameterstags)
* **type**: 'Microsoft.Maps/accounts/privateAtlases' (ReadOnly, DeployTimeConstant)

## MapsAccountProperties
### Properties
* **x-ms-client-id**: string (ReadOnly)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreatorProperties
### Properties
* **provisioningState**: string (ReadOnly)

## CreatorCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAtlasProperties
### Properties
* **provisioningState**: string (ReadOnly)

## PrivateAtlasCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

