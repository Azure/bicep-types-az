# Microsoft.HybridConnectivity @ 2021-10-06-preview

## Resource Microsoft.HybridConnectivity/endpoints@2021-10-06-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-10-06-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): Endpoint details
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.HybridConnectivity/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.HybridConnectivity/endpoints@2021-10-06-preview)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2021-10-06-preview
* **Output**: [EndpointAccessResource](#endpointaccessresource)

## EndpointProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **type**: 'custom' | 'default' (Required): The type of endpoint.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## EndpointAccessResource
### Properties
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties) (ReadOnly): Azure relay hybrid connection access properties

## RelayNamespaceAccessProperties
### Properties
* **accessKey**: string (ReadOnly): Access key for hybrid connection.
* **expiresOn**: int (ReadOnly): The expiration of access key in unix time.
* **hybridConnectionName**: string (ReadOnly): Azure Relay hybrid connection name for the resource.
* **namespaceName**: string (ReadOnly): The namespace name.
* **namespaceNameSuffix**: string (ReadOnly): The suffix domain name of relay namespace.

