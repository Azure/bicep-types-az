# Microsoft.Maps @ 2020-02-01-preview

## Resource Microsoft.Maps/accounts@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **sku**: Sku (Required)
* **tags**: MapsAccountCreateParametersTags
* **type**: 'Microsoft.Maps/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/creators@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: CreatorCreateParametersTags
* **type**: 'Microsoft.Maps/accounts/creators' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Maps/accounts/privateAtlases@2020-02-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-02-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **tags**: PrivateAtlasCreateParametersTags
* **type**: 'Microsoft.Maps/accounts/privateAtlases' (ReadOnly, DeployTimeConstant)

## Sku
### Properties
* **name**: string (Required)
* **tier**: string (ReadOnly)

## MapsAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreatorCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrivateAtlasCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

