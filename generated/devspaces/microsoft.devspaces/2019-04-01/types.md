# Microsoft.DevSpaces @ 2019-04-01

## Resource Microsoft.DevSpaces/controllers@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ControllerProperties (Required)
* **sku**: Sku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DevSpaces/controllers' (ReadOnly, DeployTimeConstant)

## ControllerProperties
### Properties
* **dataPlaneFqdn**: string (ReadOnly)
* **hostSuffix**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (ReadOnly)
* **targetContainerHostApiServerFqdn**: string (ReadOnly)
* **targetContainerHostCredentialsBase64**: string (Required)
* **targetContainerHostResourceId**: string (Required)

## Sku
### Properties
* **name**: string (Required)
* **tier**: 'Standard'

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

