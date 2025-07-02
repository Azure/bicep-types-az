# Microsoft.Authorization @ 2015-01-01

## Resource Microsoft.Authorization/locks@2015-01-01
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2015-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagementLockProperties](#managementlockproperties): The properties of the lock.
* **type**: 'Microsoft.Authorization/locks' (ReadOnly, DeployTimeConstant): The resource type

## ManagementLockProperties
### Properties
* **level**: 'CanNotDelete' | 'NotSpecified' | 'ReadOnly' | string: The lock level of the management lock.
* **notes**: string: The notes of the management lock.

