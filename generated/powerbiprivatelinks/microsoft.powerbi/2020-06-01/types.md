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
* **actionsRequired**: string: Actions required (if any).
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string: Status of the connection.

## PrivateEndpoint
### Properties
* **id**: string: Specifies the id of private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the id of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Specifies the properties of the private endpoint connection.
* **systemData**: [SystemData](#systemdata) (ReadOnly): The system meta data relating to this resource.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): Specifies the private endpoint.
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): Specifies the connection state.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string: Provisioning state of the Private Endpoint Connection.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TenantProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: Specifies the private endpoint connections of the resource.
* **tenantId**: string: Specifies the tenant id of the resource.

## TenantResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

