# Microsoft.Authorization @ 2017-04-01

## Resource Microsoft.Authorization/locks@2017-04-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementLockProperties](#managementlockproperties) (Required): The properties of the lock.
* **type**: 'Microsoft.Authorization/locks' (ReadOnly, DeployTimeConstant): The resource type

## ManagementLockOwner
### Properties
* **applicationId**: string: The application ID of the lock owner.

## ManagementLockProperties
### Properties
* **level**: 'CanNotDelete' | 'NotSpecified' | 'ReadOnly' | string (Required): The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
* **notes**: string: Notes about the lock. Maximum of 512 characters.
* **owners**: [ManagementLockOwner](#managementlockowner)[]: The owners of the lock.

