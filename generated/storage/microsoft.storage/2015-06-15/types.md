# Microsoft.Storage @ 2015-06-15

## Resource Microsoft.Storage/storageAccounts@2015-06-15
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string {minLength: 3, maxLength: 24} (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParametersOrStorageAccountProperties](#storageaccountpropertiescreateparametersorstorageaccountproperties): The parameters used to create the storage account.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): A list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Storage/storageAccounts@2015-06-15)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2015-06-15
* **Output**: [StorageAccountKeys](#storageaccountkeys)

## Function regenerateKey (Microsoft.Storage/storageAccounts@2015-06-15)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2015-06-15
* **Input**: [StorageAccountRegenerateKeyParameters](#storageaccountregeneratekeyparameters)
* **Output**: [StorageAccountKeys](#storageaccountkeys)

## CustomDomain
### Properties
* **name**: string (Required): The custom domain name. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates

## Endpoints
### Properties
* **blob**: string: The blob endpoint.
* **file**: string: The file endpoint.
* **queue**: string: The queue endpoint.
* **table**: string: The table endpoint.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountKeys
### Properties
* **key1**: string: The value of key 1.
* **key2**: string: The value of key 2.

## StorageAccountPropertiesCreateParametersOrStorageAccountProperties
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): The sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType.
* **creationTime**: string (ReadOnly): The creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain) (ReadOnly): The custom domain the user assigned to this storage account.
* **lastGeoFailoverTime**: string (ReadOnly): The timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
* **primaryLocation**: string (ReadOnly): The location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): The status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
* **secondaryLocation**: string (ReadOnly): The location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.

## StorageAccountRegenerateKeyParameters
### Properties
* **keyName**: string (Required)

