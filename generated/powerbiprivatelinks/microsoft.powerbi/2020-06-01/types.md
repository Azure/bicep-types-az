# Microsoft.PowerBI @ 2020-06-01

## Resource Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TenantProperties](#tenantproperties): TenantProperties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TenantResourceTags](#tenantresourcetags): Specifies the tags of the resource.
* **type**: 'Microsoft.PowerBI/privateLinkServicesForPowerBI' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): PrivateEndpointConnectionProperties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.PowerBI/privateLinkServicesForPowerBI/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## TenantProperties
### Properties
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[]: Specifies the private endpoint connections of the resource.
* **tenantId**: string: Specifies the tenant id of the resource.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the id of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): PrivateEndpointConnectionProperties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): PrivateEndpoint
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate): ConnectionState information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating': Provisioning state of the Private Endpoint Connection.

## PrivateEndpoint
### Properties
* **id**: string: Specifies the id of private endpoint.

## ConnectionState
### Properties
* **actionsRequired**: string: Actions required (if any).
* **description**: string: Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected': Status of the connection.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TenantResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

