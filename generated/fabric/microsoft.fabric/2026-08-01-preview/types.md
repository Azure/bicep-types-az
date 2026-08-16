# Microsoft.Fabric @ 2026-08-01-preview

## Resource Microsoft.Fabric/capacities@2026-08-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FabricCapacityProperties](#fabriccapacityproperties) (Required): The resource-specific properties for this resource.
* **sku**: [RpSku](#rpsku) (Required): The SKU details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Fabric/capacities' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.Fabric/locations@2026-08-01-preview)
* **Resource**: Microsoft.Fabric/locations
* **ApiVersion**: 2026-08-01-preview
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## CapacityAdministration
### Properties
* **members**: string[] (Required): An array of administrator user identities.

## CapacityOverageProperties
### Properties
* **state**: 'Disabled' | 'Enabled' | string: The capacity overage state for the Fabric capacity resource.
* **thresholdCapacityUnitHours**: int {minValue: 0}: 24-hour rolling threshold for capacity overage. Reaching this threshold results in capacity throttling.

## CheckNameAvailabilityRequest
### Properties
* **name**: string: The name of the resource for which availability needs to be checked.
* **type**: string: The resource type.

## CheckNameAvailabilityResponse
### Properties
* **message**: string: Detailed reason why the given name is available.
* **nameAvailable**: bool: Indicates if the resource name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: The reason why the given name is not available.

## FabricCapacityProperties
### Properties
* **administration**: [CapacityAdministration](#capacityadministration) (Required): The capacity administration
* **overage**: [CapacityOverageProperties](#capacityoverageproperties): The capacity overage properties of the Fabric capacity resource.
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

