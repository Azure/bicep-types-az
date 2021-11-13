# Microsoft.Storage @ 2016-12-01

## Resource Microsoft.Storage/storageAccounts@2016-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'BlobStorage' | 'Storage' (Required): Required. Indicates the type of storage account.
* **location**: string (Required): Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **sku**: [Sku](#sku) (Required): The SKU of the storage account.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listAccountSas (Microsoft.Storage/storageAccounts@2016-12-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2016-12-01
* **Input**: [AccountSasParameters](#accountsasparameters)
* **Output**: [ListAccountSasResponse](#listaccountsasresponse)

## Function listKeys (Microsoft.Storage/storageAccounts@2016-12-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2016-12-01
* **Output**: [StorageAccountListKeysResult](#storageaccountlistkeysresult)

## Function listServiceSas (Microsoft.Storage/storageAccounts@2016-12-01)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2016-12-01
* **Input**: [ServiceSasParameters](#servicesasparameters)
* **Output**: [ListServiceSasResponse](#listservicesasresponse)

## StorageAccountPropertiesCreateParameters
### Properties
* **accessTier**: 'Cool' | 'Hot': Required for storage accounts where kind = BlobStorage. The access tier used for billing.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain): The custom domain assigned to this storage account. This can be set via Update.
* **encryption**: [Encryption](#encryption): The encryption settings on the storage account.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, or table object.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue, or table object.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'available' | 'unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **supportsHttpsTrafficOnly**: bool: Allows https traffic only to storage service if sets to true.

## CustomDomain
### Properties
* **name**: string (Required): Gets or sets the custom domain name assigned to the storage account. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates.

## Encryption
### Properties
* **keySource**: 'Microsoft.Storage' (Required): The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage
* **services**: [EncryptionServices](#encryptionservices): A list of services that support encryption.

## EncryptionServices
### Properties
* **blob**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **file**: [EncryptionService](#encryptionservice): A service that allows server-side encryption to be used.
* **queue**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.
* **table**: [EncryptionService](#encryptionservice) (ReadOnly): A service that allows server-side encryption to be used.

## EncryptionService
### Properties
* **enabled**: bool: A boolean indicating whether or not the service encrypts the data as it is stored.
* **lastEnabledTime**: string (ReadOnly): Gets a rough estimate of the date/time when the encryption was last enabled by the user. Only returned when encryption is enabled. There might be some unencrypted blobs which were written after this time, as it is just a rough estimate.

## Endpoints
### Properties
* **blob**: string (ReadOnly): Gets the blob endpoint.
* **file**: string (ReadOnly): Gets the file endpoint.
* **queue**: string (ReadOnly): Gets the queue endpoint.
* **table**: string (ReadOnly): Gets the table endpoint.

## Sku
### Properties
* **name**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): Gets or sets the sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType.
* **tier**: 'Premium' | 'Standard' (ReadOnly): Gets the sku tier. This is based on the SKU name.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountKey
### Properties
* **keyName**: string (ReadOnly): Name of the key.
* **permissions**: 'Full' | 'Read' (ReadOnly): Permissions for the key -- read-only or full permissions.
* **value**: string (ReadOnly): Base 64-encoded value of the key.

