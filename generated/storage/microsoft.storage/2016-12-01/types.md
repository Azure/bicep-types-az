# Microsoft.Storage @ 2016-12-01

## Resource Microsoft.Storage/storageAccounts@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'BlobStorage' | 'Storage' (Required)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters)
* **sku**: [Sku](#sku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot'
* **creationTime**: string (ReadOnly)
* **customDomain**: [CustomDomain](#customdomain)
* **encryption**: [Encryption](#encryption)
* **lastGeoFailoverTime**: string (ReadOnly)
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
* **primaryLocation**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly)
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly)
* **secondaryLocation**: string (ReadOnly)
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly)
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly)
* **supportsHttpsTrafficOnly**: bool

## CustomDomain
### Properties
* **name**: string (Required)
* **useSubDomainName**: bool

## Encryption
### Properties
* **keySource**: string (Required)
* **services**: [EncryptionServices](#encryptionservices)

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice)
* **file**: [EncryptionService](#encryptionservice)
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly)
* **table**: [EncryptionService](#encryptionservice) (ReadOnly)

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

