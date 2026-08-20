# Microsoft.HybridCloud @ 2023-01-01-preview

## Resource Microsoft.HybridCloud/cloudConnections@2023-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z][A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudConnectionProperties](#cloudconnectionproperties): Properties of the cloud connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCloud/cloudConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridCloud/cloudConnectors@2023-01-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-01-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): A unique read-only string that changes whenever the resource is updated.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudConnectorProperties](#cloudconnectorproperties): Properties of the cloud connector.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HybridCloud/cloudConnectors' (ReadOnly, DeployTimeConstant): The resource type

## Function discoverResources (Microsoft.HybridCloud/cloudConnectors@2023-01-01-preview)
* **Resource**: Microsoft.HybridCloud/cloudConnectors
* **ApiVersion**: 2023-01-01-preview
* **Output**: [DiscoveredResources](#discoveredresources)

## CloudConnectionProperties
### Properties
* **cloudConnector**: [ResourceReference](#resourcereference): The cloud connector which discovered the remote resource.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cloud collection resource.
* **remoteResourceId**: string: Identifier for the remote cloud resource
* **sharedKey**: string {sensitive}: Shared key of the cloud connection.
* **virtualHub**: [ResourceReference](#resourcereference): The virtualHub to which the cloud connection belongs.

## CloudConnectorProperties
### Properties
* **accountId**: string: Account identifier of the remote cloud.
* **cloudType**: 'AWS' | string: The cloud connector type.
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the cloud connector resource.

## DiscoveredResource
### Properties
* **body**: string (ReadOnly): Properties of the remote cloud resource.
* **bodyContentType**: 'Json' | 'Xml' | string (ReadOnly): Content type of the cloud resource body.
* **id**: string (ReadOnly): Remote cloud resource identifier

## DiscoveredResources
### Properties
* **discoveredResources**: [DiscoveredResource](#discoveredresource)[]: List of discovered remote cloud resources.
* **resourceFilter**: [ResourceFilter](#resourcefilter): Remote cloud resource filter.

## ResourceFilter
### Properties
* **name**: string: Remote Resource name to filter on.
* **region**: string: Remote Resource location/region to filter on.
* **tag**: string: Remote Resource tags to filter on in key:value format.
* **type**: string: Remote Resource type to filter on.

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

