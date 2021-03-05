# Microsoft.Storage @ 2016-12-01

## Resource Microsoft.Storage/storageAccounts@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## StorageAccountPropertiesCreateParameters
### Properties
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **enableHttpsTrafficOnly**: bool
* **encryption**: Encryption
* **lastGeoFailoverTime**: string (ReadOnly)
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **services**: EncryptionServices

## EncryptionServices
### Properties
* **blob**: EncryptionService
* **file**: EncryptionService
* **queue**: EncryptionService (ReadOnly)
* **table**: EncryptionService (ReadOnly)

## EncryptionService
### Properties
* **enabled**: bool
* **lastEnabledTime**: string (ReadOnly)

## Endpoints
### Properties
* **blob**: string (ReadOnly)
* **file**: string (ReadOnly)
* **queue**: string (ReadOnly)
* **table**: string (ReadOnly)

## Sku
### Properties

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

