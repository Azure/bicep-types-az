# Microsoft.PowerBI @ 2020-06-01

## Resource Microsoft.PowerBI/privateLinkServicesForPowerBI@2020-06-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-06-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (WriteOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TenantProperties](#tenantproperties) (WriteOnly): TenantProperties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TenantResourceTags](#tenantresourcetags) (WriteOnly): Specifies the tags of the resource.
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
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (WriteOnly): Specifies the private endpoint connections of the resource.
* **tenantId**: string (WriteOnly): Specifies the tenant id of the resource.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the id of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties) (WriteOnly): PrivateEndpointConnectionProperties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint) (WriteOnly): PrivateEndpoint
* **privateLinkServiceConnectionState**: [ConnectionState](#connectionstate) (WriteOnly): ConnectionState information.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' (WriteOnly): Provisioning state of the Private Endpoint Connection.

## PrivateEndpoint
### Properties
* **id**: string (WriteOnly): Specifies the id of private endpoint.

## ConnectionState
### Properties
* **actionsRequired**: string (WriteOnly): Actions required (if any).
* **description**: string (WriteOnly): Description of the connection state.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' (WriteOnly): Status of the connection.

## SystemData
### Properties
* **createdAt**: string (WriteOnly): The timestamp of resource creation (UTC).
* **createdBy**: string (WriteOnly): The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (WriteOnly): The type of identity that created the resource.
* **lastModifiedAt**: string (WriteOnly): The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string (WriteOnly): The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (WriteOnly): The type of identity that created the resource.

## TenantResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

