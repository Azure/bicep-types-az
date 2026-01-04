# Microsoft.Authorization @ 2020-05-01

## Resource Microsoft.Authorization/privateLinkAssociations@2020-05-01
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded](#privatelinkassociationpropertiesorprivatelinkassociationpropertiesexpanded): The properties of the PrivateLinkAssociation.
* **type**: 'Microsoft.Authorization/privateLinkAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: the region to create private link association.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceManagementPrivateLinkEndpointConnections](#resourcemanagementprivatelinkendpointconnections) (ReadOnly)
* **type**: 'Microsoft.Authorization/resourceManagementPrivateLinks' (ReadOnly, DeployTimeConstant): The resource type

## PrivateLinkAssociationPropertiesOrPrivateLinkAssociationPropertiesExpanded
### Properties
* **privateLink**: string: The rmpl Resource ID.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string
* **scope**: string (ReadOnly): The scope of the private link association.
* **tenantID**: string (ReadOnly): The TenantID.

## ResourceManagementPrivateLinkEndpointConnections
### Properties
* **privateEndpointConnections**: string[]: The private endpoint connections.

