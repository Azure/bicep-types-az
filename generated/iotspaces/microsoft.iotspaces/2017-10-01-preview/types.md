# Microsoft.IoTSpaces @ 2017-10-01-preview

## Resource Microsoft.IoTSpaces/Graph@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [IoTSpacesProperties](#iotspacesproperties): The properties of an IoTSpaces instance.
* **sku**: [IoTSpacesSkuInfo](#iotspacesskuinfo) (Required): Information about the SKU of the IoTSpaces instance.
* **tags**: [ResourceTags](#resourcetags): The resource tags.
* **type**: 'Microsoft.IoTSpaces/Graph' (ReadOnly, DeployTimeConstant): The resource type

## IoTSpacesProperties
### Properties
* **managementApiUrl**: string (ReadOnly): The management Api endpoint.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly): The provisioning state.
* **storageContainer**: [StorageContainerProperties](#storagecontainerproperties): The properties of the Azure Storage Container for file archive.
* **webPortalUrl**: string (ReadOnly): The management UI endpoint.

## StorageContainerProperties
### Properties
* **connectionString**: string: The connection string of the storage account.
* **containerName**: string: The name of storage container in the storage account.
* **resourceGroup**: string: The name of the resource group of the storage account.
* **subscriptionId**: string: The subscription identifier of the storage account.

## IoTSpacesSkuInfo
### Properties
* **name**: 'F1' | 'S1' | 'S2' | 'S3' (Required): The name of the SKU.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

