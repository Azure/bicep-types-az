# Microsoft.IoTCentral @ 2018-09-01

## Resource Microsoft.IoTCentral/IoTApps@2018-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AppProperties
* **sku**: AppSkuInfo (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.IoTCentral/IoTApps' (ReadOnly, DeployTimeConstant)

## AppProperties
### Properties
* **applicationId**: string (ReadOnly)
* **displayName**: string
* **subdomain**: string
* **template**: string

## AppSkuInfo
### Properties
* **name**: 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2' (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

