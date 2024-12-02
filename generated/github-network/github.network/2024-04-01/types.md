# GitHub.Network @ 2024-04-01

## Resource GitHub.Network/networkSettings@2024-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]"} (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkSettingsResourceProperties](#networksettingsresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'GitHub.Network/networkSettings' (ReadOnly, DeployTimeConstant): The resource type

## NetworkSettingsResourceProperties
### Properties
* **businessId**: string: Specifies the GitHub business (enterprise/organization) ID associated to the Azure subscription.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The managed application provisioning state.
* **subnetId**: string: Specifies a subnet ID for vnet-injection.

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

