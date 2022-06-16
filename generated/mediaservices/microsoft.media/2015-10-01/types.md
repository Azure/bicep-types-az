# Microsoft.Media @ 2015-10-01

## Resource Microsoft.Media/mediaservices@2015-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geographic location of the resource. This must be one of the supported and registered Azure Geo Regions (for example, West US, East US, Southeast Asia, and so forth).
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MediaServiceProperties](#mediaserviceproperties): The additional properties of a Media Service resource.
* **tags**: [ResourceTags](#resourcetags): Tags to help categorize the resource in the Azure portal.
* **type**: 'Microsoft.Media/mediaservices' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.Media/mediaservices@2015-10-01)
* **Resource**: Microsoft.Media/mediaservices
* **ApiVersion**: 2015-10-01
* **Output**: [ServiceKeys](#servicekeys)

## ApiEndpoint
### Properties
* **endpoint**: string: The Media Services REST endpoint.
* **majorVersion**: string: The version of Media Services REST API.

## MediaServiceProperties
### Properties
* **apiEndpoints**: [ApiEndpoint](#apiendpoint)[] (ReadOnly): Read-only property that lists the Media Services REST API endpoints for this resource. If supplied on a PUT or PATCH, the value will be ignored.
* **storageAccounts**: [StorageAccount](#storageaccount)[]: The storage accounts for this resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceKeys
### Properties
* **primaryAuthEndpoint**: string: The primary authorization endpoint.
* **primaryKey**: string: The primary key for the Media Service resource.
* **scope**: string: The authorization scope.
* **secondaryAuthEndpoint**: string: The secondary authorization endpoint.
* **secondaryKey**: string: The secondary key for the Media Service resource.

## StorageAccount
### Properties
* **id**: string (Required): The id of the storage account resource. Media Services relies on tables and queues as well as blobs, so the primary storage account must be a Standard Storage account (either Microsoft.ClassicStorage or Microsoft.Storage). Blob only storage accounts can be added as secondary storage accounts (isPrimary false).
* **isPrimary**: bool (Required): Is this storage account resource the primary storage account for the Media Service resource. Blob only storage must set this to false.

