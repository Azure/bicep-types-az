# Microsoft.Storage @ 2016-01-01

## Resource Microsoft.Storage/storageAccounts@2016-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: StorageAccountCreateParametersTags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## StorageAccountPropertiesCreateParameters
### Properties
* **customDomain**: CustomDomain
* **encryption**: Encryption

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

## EncryptionService
### Properties
* **enabled**: bool
* **lastEnabledTime**: string (ReadOnly)

## Sku
### Properties

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

