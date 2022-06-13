# Microsoft.Authorization @ 2020-05-01

## Resource Microsoft.Authorization/locks@2020-05-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementLockProperties](#managementlockproperties) (Required): The properties of the lock.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.Authorization/locks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/privateLinkAssociations@2020-05-01
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkAssociationProperties](#privatelinkassociationproperties): The properties of the PrivateLinkAssociation.
* **type**: 'Microsoft.Authorization/privateLinkAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/resourceManagementPrivateLinks@2020-05-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: the region to create private link association.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceManagementPrivateLinkEndpointConnections](#resourcemanagementprivatelinkendpointconnections) (ReadOnly)
* **type**: 'Microsoft.Authorization/resourceManagementPrivateLinks' (ReadOnly, DeployTimeConstant): The resource type

## ManagementLockOwner
### Properties
* **applicationId**: string: The application ID of the lock owner.

## ManagementLockProperties
### Properties
* **level**: 'CanNotDelete' | 'NotSpecified' | 'ReadOnly' | string (Required): The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
* **notes**: string: Notes about the lock. Maximum of 512 characters.
* **owners**: [ManagementLockOwner](#managementlockowner)[]: The owners of the lock.

## PrivateLinkAssociationProperties
### Properties
* **privateLink**: string: The rmpl Resource ID.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string
* **scope**: string (ReadOnly): The scope of the private link association.
* **tenantID**: string (ReadOnly): The TenantID.

## ResourceManagementPrivateLinkEndpointConnections
### Properties
* **privateEndpointConnections**: string[] (ReadOnly): The private endpoint connections.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

