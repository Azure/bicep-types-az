# Microsoft.HybridConnectivity @ 2023-03-15

## Resource Microsoft.HybridConnectivity/endpoints@2023-03-15
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EndpointProperties](#endpointproperties): The endpoint properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/endpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HybridConnectivity/endpoints/serviceConfigurations@2023-03-15
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceConfigurationProperties](#serviceconfigurationproperties): The service configuration properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.HybridConnectivity/endpoints/serviceConfigurations' (ReadOnly, DeployTimeConstant): The resource type

## Function listCredentials (Microsoft.HybridConnectivity/endpoints@2023-03-15)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2023-03-15
* **Input**: [ListCredentialsRequest](#listcredentialsrequest)
* **Output**: [EndpointAccessResource](#endpointaccessresource)

## Function listIngressGatewayCredentials (Microsoft.HybridConnectivity/endpoints@2023-03-15)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2023-03-15
* **Output**: [IngressGatewayResource](#ingressgatewayresource)

## Function listManagedProxyDetails (Microsoft.HybridConnectivity/endpoints@2023-03-15)
* **Resource**: Microsoft.HybridConnectivity/endpoints
* **ApiVersion**: 2023-03-15
* **Input**: [ManagedProxyRequest](#managedproxyrequest)
* **Output**: [ManagedProxyResource](#managedproxyresource)

## AADProfileProperties
### Properties
* **serverId**: string (Required): The arc ingress gateway server app id.
* **tenantId**: string (Required): The target resource home tenant id.

## EndpointAccessResource
### Properties
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties): Azure relay hybrid connection access properties

## EndpointProperties
### Properties
* **provisioningState**: string (ReadOnly): The resource provisioning state.
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **type**: 'custom' | 'default' | string (Required): The type of endpoint.

## IngressGatewayResource
### Properties
* **ingress**: [IngressProfileProperties](#ingressprofileproperties): Ingress gateway profile
* **relay**: [RelayNamespaceAccessProperties](#relaynamespaceaccessproperties): Azure relay hybrid connection access properties

## IngressProfileProperties
### Properties
* **aadProfile**: [AADProfileProperties](#aadprofileproperties) (Required): The AAD Profile
* **hostname**: string (Required): The ingress hostname.

## ListCredentialsRequest
### Properties
* **serviceName**: 'SSH' | 'WAC' | string: The name of the service. If not provided, the request will by pass the generation of service configuration token

## ManagedProxyRequest
### Properties
* **hostname**: string: The target host name.
* **service**: string (Required): The name of the service.
* **serviceName**: 'SSH' | 'WAC' | string: The name of the service. It is an optional property, if not provided, service configuration tokens issue code would be by passed.

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
* **serviceConfigurationToken**: string: The token to access the enabled service.

## ServiceConfigurationProperties
### Properties
* **port**: int: The port on which service is enabled.
* **provisioningState**: 'Canceled' | 'Creating' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): The resource provisioning state.
* **resourceId**: string: The resource Id of the connectivity endpoint (optional).
* **serviceName**: 'SSH' | 'WAC' | string (Required): Name of the service.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

