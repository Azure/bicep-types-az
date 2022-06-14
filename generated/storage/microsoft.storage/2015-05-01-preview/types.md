# Microsoft.Storage @ 2015-05-01-preview

## Resource Microsoft.Storage/storageAccounts@2015-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParametersOrStorageAccountProperties](#storageaccountpropertiescreateparametersorstorageaccountproperties)
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Storage/storageAccounts@2015-05-01-preview)
* **Resource**: Microsoft.Storage/storageAccounts
* **ApiVersion**: 2015-05-01-preview
* **Output**: [StorageAccountKeys](#storageaccountkeys)

## CustomDomain
### Properties
* **name**: string: Gets or sets the custom domain name. Name is the CNAME source.
* **useSubDomainName**: bool: Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates

## Endpoints
### Properties
* **blob**: string: Gets the blob endpoint.
* **queue**: string: Gets the queue endpoint.
* **table**: string: Gets the table endpoint.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StorageAccountKeys
### Properties
* **key1**: string: Gets the value of key 1.
* **key2**: string: Gets the value of key 2.

## StorageAccountPropertiesCreateParametersOrStorageAccountProperties
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS': Gets or sets the account type.
* **creationTime**: string (ReadOnly): Gets the creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain) (ReadOnly): Gets the user assigned custom domain assigned to this storage account.
* **lastGeoFailoverTime**: string (ReadOnly): Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is StandardGRS or StandardRAGRS.
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue or table object.Note that StandardZRS and PremiumLRS accounts only return the blob endpoint.
* **primaryLocation**: string (ReadOnly): Gets the location of the primary for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): Gets the status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): Gets the URLs that are used to perform a retrieval of a public blob, queue or table object from the secondary location of the storage account. Only available if the accountType is StandardRAGRS.
* **secondaryLocation**: string (ReadOnly): Gets the location of the geo replicated secondary for the storage account. Only available if the accountType is StandardGRS or StandardRAGRS.
* **statusOfPrimary**: 'Available' | 'Unavailable' (ReadOnly): Gets the status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'Available' | 'Unavailable' (ReadOnly): Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the accountType is StandardGRS or StandardRAGRS.

