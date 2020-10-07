# Microsoft.IoTSpaces @ 2017-10-01-preview

## Microsoft.IoTSpaces/Graph
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: IoTSpacesProperties
* **sku**: IoTSpacesSkuInfo (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.IoTSpaces/Graph' (ReadOnly, DeployTimeConstant)

## IoTSpacesProperties
### Properties
* **managementApiUrl**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' (ReadOnly)
* **storageContainer**: StorageContainerProperties
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
### Additional Properties
* **Additional Properties Type**: string

