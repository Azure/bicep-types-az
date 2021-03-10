# Microsoft.IoTCentral @ 2018-09-01

## Resource Microsoft.IoTCentral/iotApps@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AppProperties](#appproperties)
* **sku**: [AppSkuInfo](#appskuinfo) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.IoTCentral/iotApps' (ReadOnly, DeployTimeConstant)

## AppProperties
### Properties
* **applicationId**: string (ReadOnly)
* **displayName**: string
* **subdomain**: string
* **template**: string

## AppSkuInfo
### Properties
* **name**: 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2' (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

