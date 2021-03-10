# Microsoft.DevSpaces @ 2019-04-01

## Resource Microsoft.DevSpaces/controllers@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ControllerProperties](#controllerproperties) (Required)
* **sku**: [Sku](#sku) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
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
* **name**: 'S1' (Required)
* **tier**: 'Standard'

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

