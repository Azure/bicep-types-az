# Microsoft.Fabric @ 2023-11-01

## Resource Microsoft.Fabric/capacities@2023-11-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCapacityProperties](#fabriccapacityproperties) (Required): The resource-specific properties for this resource.
* **sku**: [RpSku](#rpsku) (Required): The SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Fabric/capacities' (ReadOnly, DeployTimeConstant): The resource type

## CapacityAdministration
### Properties
* **members**: string[] (Required): An array of administrator user identities.

## FabricCapacityProperties
### Properties
* **administration**: [CapacityAdministration](#capacityadministration) (Required): The capacity administration
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The current deployment state of Microsoft Fabric resource. The provisioningState is to indicate states for resource provisioning.
* **state**: 'Active' | 'Deleting' | 'Failed' | 'Paused' | 'Pausing' | 'Preparing' | 'Provisioning' | 'Resuming' | 'Scaling' | 'Suspended' | 'Suspending' | 'Updating' | string (ReadOnly): The current state of Microsoft Fabric resource. The state is to indicate more states outside of resource provisioning.

## RpSku
### Properties
* **name**: string (Required): The name of the SKU level.
* **tier**: 'Fabric' | string (Required): The name of the Azure pricing tier to which the SKU applies.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

