# Microsoft.Storage @ 2015-06-15

## Resource Microsoft.Storage/storageAccounts@2015-06-15
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-06-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [StorageAccountPropertiesCreateParameters](#storageaccountpropertiescreateparameters): The parameters used to create the storage account.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): A list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters.
* **type**: 'Microsoft.Storage/storageAccounts' (ReadOnly, DeployTimeConstant): The resource type

## StorageAccountPropertiesCreateParameters
### Properties
* **accountType**: 'Premium_LRS' | 'Standard_GRS' | 'Standard_LRS' | 'Standard_RAGRS' | 'Standard_ZRS' (Required): The sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType. Possible values include: 'Standard_LRS', 'Standard_ZRS', 'Standard_GRS', 'Standard_RAGRS', 'Premium_LRS'
* **creationTime**: string (ReadOnly): The creation date and time of the storage account in UTC.
* **customDomain**: [CustomDomain](#customdomain) (ReadOnly): The custom domain assigned to this storage account. This can be set via Update.
* **lastGeoFailoverTime**: string (ReadOnly): The timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **primaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue or table object.
* **primaryLocation**: string (ReadOnly): The location of the primary data center for the storage account.
* **provisioningState**: 'Creating' | 'ResolvingDNS' | 'Succeeded' (ReadOnly): The status of the storage account at the time the operation was called. Possible values include: 'Creating', 'ResolvingDNS', 'Succeeded'
* **secondaryEndpoints**: [Endpoints](#endpoints) (ReadOnly): The URIs that are used to perform a retrieval of a public blob, queue or table object.
* **secondaryLocation**: string (ReadOnly): The location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
* **statusOfPrimary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the primary location of the storage account is available or unavailable. Possible values include: 'Available', 'Unavailable'
* **statusOfSecondary**: 'Available' | 'Unavailable' (ReadOnly): The status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS. Possible values include: 'Available', 'Unavailable'

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

