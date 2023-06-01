# Microsoft.ServiceNetworking @ 2023-05-01-preview

## Resource Microsoft.ServiceNetworking/trafficControllers@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TrafficControllerProperties](#trafficcontrollerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/associations@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AssociationProperties](#associationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/associations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceNetworking/trafficControllers/frontends@2023-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [FrontendProperties](#frontendproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceNetworking/trafficControllers/frontends' (ReadOnly, DeployTimeConstant): The resource type

## AssociationProperties
### Properties
* **associationType**: 'subnets' | string (Required): Association Type
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Traffic Controller Association Resource
* **subnet**: [AssociationSubnet](#associationsubnet): Association Subnet

## AssociationSubnet
### Properties
* **id**: string (Required): Association ID.

## FrontendProperties
### Properties
* **fqdn**: string (ReadOnly): The Fully Qualified Domain Name of the DNS record associated to a Traffic Controller frontend.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning State of Traffic Controller Frontend Resource

## ResourceId
### Properties
* **id**: string (Required): Resource ID of child resource.

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

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrafficControllerProperties
### Properties
* **associations**: [ResourceId](#resourceid)[] (ReadOnly): Associations References List
* **configurationEndpoints**: string[] (ReadOnly): Configuration Endpoints.
* **frontends**: [ResourceId](#resourceid)[] (ReadOnly): Frontends References List
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation.

