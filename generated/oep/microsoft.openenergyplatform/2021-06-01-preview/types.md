# Microsoft.OpenEnergyPlatform @ 2021-06-01-preview

## Resource Microsoft.OpenEnergyPlatform/energyServices@2021-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Geo-location where the resource lives.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnergyServiceProperties](#energyserviceproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [EnergyServiceTags](#energyservicetags): Resource tags.
* **type**: 'Microsoft.OpenEnergyPlatform/energyServices' (ReadOnly, DeployTimeConstant): The resource type

## DataPartitionNames
### Properties
* **name**: string

## EnergyServiceProperties
### Properties
* **authAppId**: string
* **dataPartitionNames**: [DataPartitionNames](#datapartitionnames)[]
* **dnsName**: string (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly)

## EnergyServiceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

