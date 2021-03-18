# Microsoft.Authorization @ 2016-09-01

## Resource Microsoft.Authorization/locks@2016-09-01
* **Valid Scope(s)**: Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ManagementLockProperties](#managementlockproperties) (Required)
* **type**: 'Microsoft.Authorization/locks' (ReadOnly, DeployTimeConstant)

## ManagementLockProperties
### Properties
* **level**: 'CanNotDelete' | 'NotSpecified' | 'ReadOnly' (Required)
* **notes**: string
* **owners**: [ManagementLockOwner](#managementlockowner)[]

## ManagementLockOwner
### Properties
* **applicationId**: string

