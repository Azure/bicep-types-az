# Microsoft.Storage @ 2015-06-15

## Resource Microsoft.Storage/storageAccounts@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): Properties of the storage account.
* **tags**: [StorageAccountCreateParametersTags](#storageaccountcreateparameterstags): Resource tags
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## StorageAccountPropertiesCreateParameters
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): The sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType.
* **creationTime**: string (ReadOnly): The creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain) (ReadOnly): The custom domain assigned to this storage account. This can be set via Update.
* **lastGeoFailoverTime**: string (ReadOnly): The timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue or table object.
* **primaryLocation**: string (ReadOnly): The location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): The status of the storage account at the time the operation was called.
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue or table object.
* **secondaryLocation**: string (ReadOnly): The location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the primary location of the storage account is available or unavailable.
* **statusOfSecondary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the primary location of the storage account is available or unavailable.

## CustomDomain
### Properties
* **name**: string (ReadOnly): The custom domain name. Name is the CNAME source.
* **useSubDomainName**: bool (ReadOnly): Indicates whether indirect CName validation is enabled. Default value is false. This should only be set on updates

## Endpoints
### Properties
* **blob**: string (ReadOnly): The blob endpoint.
* **file**: string (ReadOnly): The file endpoint.
* **queue**: string (ReadOnly): The queue endpoint.
* **table**: string (ReadOnly): The table endpoint.

## StorageAccountCreateParametersTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

