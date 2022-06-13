# Microsoft.Network @ 2021-03-01-preview

## Resource Microsoft.Network/networkSecurityPerimeters@2021-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Resource location.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSecurityPerimeterProperties](#networksecurityperimeterproperties): The network security perimeter properties
* **tags**: [ResourceTags](#resourcetags): Resource tags.
* **type**: 'Microsoft.Network/networkSecurityPerimeters' (ReadOnly, DeployTimeConstant): The resource type

## NetworkSecurityPerimeterProperties
### Properties
* **description**: string: A description of the network security perimeter.
* **displayName**: string: A friendly name for the network security perimeter.
* **provisioningState**: 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the scope assignment resource.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

