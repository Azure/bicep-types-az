# Microsoft.Storage @ 2016-05-01

## Resource Microsoft.Storage/storageAccounts@2016-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'BlobStorage' | 'Storage' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: StorageAccountPropertiesCreateParameters
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## Function listAccountSas (Microsoft.Storage/storageAccounts@2016-05-01
* **Resource**: Microsoft.Storage/storageAccounts@2016-05-01
* **Input**: AccountSasParameters
* **Output**: ListAccountSasResponse

## Function listKeys (Microsoft.Storage/storageAccounts@2016-05-01
* **Resource**: Microsoft.Storage/storageAccounts@2016-05-01
* **Output**: StorageAccountListKeysResult

## Function listServiceSas (Microsoft.Storage/storageAccounts@2016-05-01
* **Resource**: Microsoft.Storage/storageAccounts@2016-05-01
* **Input**: ServiceSasParameters
* **Output**: ListServiceSasResponse

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **creationTime**: string (ReadOnly)
* **customDomain**: CustomDomain
* **encryption**: Encryption
* **lastGeoFailoverTime**: string (ReadOnly)
* **primaryEndpoints**: Endpoints (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **secondaryEndpoints**: Endpoints (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: string (Required)
* **services**: EncryptionServices

## EncryptionServices
### Properties
* **blob**: EncryptionService

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
* **name**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required)
* **tier**: 'Premium' | 'Standard' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AccountSasParameters
### Properties
* **keyToSign**: string (WriteOnly)
* **signedExpiry**: string (Required, WriteOnly)
* **signedIp**: string (WriteOnly)
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' (Required, WriteOnly)
* **signedProtocol**: 'https,http' | 'https' (WriteOnly)
* **signedResourceTypes**: 'c' | 'o' | 's' (Required, WriteOnly)
* **signedServices**: 'b' | 'f' | 'q' | 't' (Required, WriteOnly)
* **signedStart**: string (WriteOnly)

## ListAccountSasResponse
### Properties
* **accountSasToken**: string (ReadOnly)

## StorageAccountListKeysResult
### Properties
* **keys**: StorageAccountKey[] (ReadOnly)

## StorageAccountKey
### Properties
* **keyName**: string (ReadOnly)
* **permissions**: 'Full' | 'Read' (ReadOnly)
* **value**: string (ReadOnly)

## ServiceSasParameters
### Properties
* **canonicalizedResource**: string (Required, WriteOnly)
* **endPk**: string (WriteOnly)
* **endRk**: string (WriteOnly)
* **keyToSign**: string (WriteOnly)
* **rscc**: string (WriteOnly)
* **rscd**: string (WriteOnly)
* **rsce**: string (WriteOnly)
* **rscl**: string (WriteOnly)
* **rsct**: string (WriteOnly)
* **signedExpiry**: string (WriteOnly)
* **signedIdentifier**: string (WriteOnly)
* **signedIp**: string (WriteOnly)
* **signedPermission**: 'a' | 'c' | 'd' | 'l' | 'p' | 'r' | 'u' | 'w' (WriteOnly)
* **signedProtocol**: 'https,http' | 'https' (WriteOnly)
* **signedResource**: 'b' | 'c' | 'f' | 's' (Required, WriteOnly)
* **signedStart**: string (WriteOnly)
* **startPk**: string (WriteOnly)
* **startRk**: string (WriteOnly)

## ListServiceSasResponse
### Properties
* **serviceSasToken**: string (ReadOnly)

