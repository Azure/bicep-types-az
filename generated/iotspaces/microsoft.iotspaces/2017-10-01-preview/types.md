# Microsoft.IoTSpaces @ 2017-10-01-preview

## Resource Microsoft.IoTSpaces/Graph@2017-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [IoTSpacesProperties](#iotspacesproperties)
* **sku**: [IoTSpacesSkuInfo](#iotspacesskuinfo) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.IoTSpaces/Graph' (ReadOnly, DeployTimeConstant)

## IoTSpacesProperties
### Properties
* **managementApiUrl**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **storageContainer**: [StorageContainerProperties](#storagecontainerproperties)
* **webPortalUrl**: string (ReadOnly)

## StorageContainerProperties
### Properties
* **connectionString**: string
* **containerName**: string
* **resourceGroup**: string
* **subscriptionId**: string

## IoTSpacesSkuInfo
### Properties
* **name**: 'F1' | 'S1' | 'S2' | 'S3' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

