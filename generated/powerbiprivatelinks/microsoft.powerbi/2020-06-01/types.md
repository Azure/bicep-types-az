# Microsoft.PowerBI @ 2020-06-01

## Resource Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TenantProperties](#tenantproperties) (WriteOnly): Specifies the properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly, WriteOnly): The system metadata relating to this resource.
* **tags**: [TenantResourceTags](#tenantresourcetags) (WriteOnly): Specifies the tags of the resource.
* **type**: 'Microsoft.PowerBI/privateLinkServicesForPowerBI' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Specifies the properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: 'Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## ConnectionState
### Properties
* **actionsRequired**: string (WriteOnly): Actions required (if any).
* **description**: string (WriteOnly): Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (WriteOnly): Status of the connection.

## PrivateEndpoint
### Properties
* **id**: string (WriteOnly): Specifies the id of private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly, WriteOnly): Specifies the id of the resource.
* **name**: string (ReadOnly, WriteOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (WriteOnly): Specifies the properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly, WriteOnly): The system meta data relating to this resource.
* **type**: string (ReadOnly, WriteOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (WriteOnly): Specifies the private endpoint.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate) (WriteOnly): Specifies the connection state.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (WriteOnly): Provisioning state of the Private Endpoint Connection.

## SystemData
### Properties
* **createdAt**: string (WriteOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (WriteOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (WriteOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (WriteOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (WriteOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string (WriteOnly): The type of identity that last modified the resource.

## TenantProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (WriteOnly): Specifies the private endpoint connections of the resource.
* **tenantId**: string (WriteOnly): Specifies the tenant id of the resource.

## TenantResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

