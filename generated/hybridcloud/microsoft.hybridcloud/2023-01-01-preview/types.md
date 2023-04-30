# Microsoft.HybridCloud @ 2023-01-01-preview

## Resource Microsoft.HybridCloud/cloudConnections@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudConnectionProperties](#cloudconnectionproperties): Properties of the cloud connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCloud/cloudConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCloud/cloudConnectors@2023-01-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CloudConnectorProperties](#cloudconnectorproperties): Properties of the cloud connector.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCloud/cloudConnectors' (ReadOnly, DeployTimeConstant): The resource type

## CloudConnectionProperties
### Properties
* **cloudConnector**: [ResourceReference](#resourcereference): The cloud connector which discovered the remote resource.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cloud collection resource.
* **remoteResourceId**: string: Identifier for the remote cloud resource
* **sharedKey**: string: Shared key of the cloud connection.
* **virtualHub**: [ResourceReference](#resourcereference): The virtualHub to which the cloud connection belongs.

## CloudConnectorProperties
### Properties
* **accountId**: string: Account identifier of the remote cloud.
* **cloudType**: 'AWS' | string: The cloud connector type.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cloud connector resource.

## ResourceReference
### Properties
* **id**: string: Resource ID.

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

