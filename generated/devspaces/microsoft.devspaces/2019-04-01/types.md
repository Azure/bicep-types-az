# Microsoft.DevSpaces @ 2019-04-01

## Resource Microsoft.DevSpaces/controllers@2019-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Region where the Azure resource is located.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ControllerProperties](#controllerproperties) (Required)
* **sku**: [Sku](#sku) (Required): Model representing SKU for Azure Dev Spaces Controller.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Tags for the Azure resource.
* **type**: 'Microsoft.DevSpaces/controllers' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectionDetails (Microsoft.DevSpaces/controllers@2019-04-01)
* **Resource**: Microsoft.DevSpaces/controllers
* **ApiVersion**: 2019-04-01
* **Input**: [ListConnectionDetailsParameters](#listconnectiondetailsparameters)
* **Output**: [ControllerConnectionDetailsList](#controllerconnectiondetailslist)

## ControllerConnectionDetails
### Properties
* **orchestratorSpecificConnectionDetails**: [OrchestratorSpecificConnectionDetails](#orchestratorspecificconnectiondetails): Base class for types that supply values used to connect to container orchestrators

## ControllerConnectionDetailsList
### Properties
* **connectionDetailsList**: [ControllerConnectionDetails](#controllerconnectiondetails)[]: List of Azure Dev Spaces Controller connection details.

## ControllerProperties
### Properties
* **dataPlaneFqdn**: string (ReadOnly): DNS name for accessing DataPlane services
* **hostSuffix**: string (ReadOnly): DNS suffix for public endpoints running in the Azure Dev Spaces Controller.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the Azure Dev Spaces Controller.
* **targetContainerHostApiServerFqdn**: string (ReadOnly): DNS of the target container host's API server
* **targetContainerHostCredentialsBase64**: string (Required, WriteOnly): Credentials of the target container host (base64).
* **targetContainerHostResourceId**: string (Required): Resource ID of the target container host

## ListConnectionDetailsParameters
### Properties
* **targetContainerHostResourceId**: string (Required): Resource ID of the target container host mapped to the Azure Dev Spaces Controller.

## OrchestratorSpecificConnectionDetails
* **Discriminator**: instanceType

### Base Properties

### KubernetesConnectionDetails
#### Properties
* **instanceType**: 'Kubernetes' (Required): Gets the Instance type.
* **kubeConfig**: string: Gets the kubeconfig for the cluster.


## Sku
### Properties
* **name**: 'S1' | string (Required): The name of the SKU for Azure Dev Spaces Controller.
* **tier**: 'Standard' | string: The tier of the SKU for Azure Dev Spaces Controller.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

