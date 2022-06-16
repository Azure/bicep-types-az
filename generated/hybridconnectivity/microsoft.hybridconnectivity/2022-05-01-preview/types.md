# Microsoft.HybridConnectivity @ 2022-05-01-preview

## Resource Microsoft.HybridConnectivity/endpoints@2022-05-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The endpoint properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): System data of endpoint resource
* **type**: 'Microsoft.HybridConnectivity/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.HybridConnectivity/endpoints@2022-05-01-preview)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2022-05-01-preview
* **Output**: [EndpointAccessResource](#endpointaccessresource)

## Function listManagedProxyDetails (Microsoft.HybridConnectivity/endpoints@2022-05-01-preview)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2022-05-01-preview
* **Input**: [ManagedProxyRequest](#managedproxyrequest)
* **Output**: [ManagedProxyResource](#managedproxyresource)

## EndpointAccessResource
### Properties
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties): Azure relay hybrid connection access properties

## EndpointProperties
### Properties
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **type**: 'custom' | 'default' | string (Required): The type of endpoint.

## ManagedProxyRequest
### Properties
* **hostname**: string: The target host name.
* **service**: string (Required): The name of the service.

## ManagedProxyResource
### Properties
* **expiresOn**: int (Required): The expiration time of short lived proxy name in unix epoch.
* **proxy**: string (Required): The short lived proxy name.

## RelayNamespaceAccessProperties
### Properties
* **accessKey**: string (ReadOnly): Access key for hybrid connection.
* **expiresOn**: int: The expiration of access key in unix time.
* **hybridConnectionName**: string (Required): Azure Relay hybrid connection name for the resource.
* **namespaceName**: string (Required): The namespace name.
* **namespaceNameSuffix**: string (Required): The suffix domain name of relay namespace.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

