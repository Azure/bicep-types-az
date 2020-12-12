# Microsoft.Authorization @ 2016-09-01

## Resource Microsoft.Authorization/locks@2016-09-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2016-09-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ManagementLockProperties (Required)
* **type**: 'Microsoft.Authorization/locks' (ReadOnly, DeployTimeConstant)

## ManagementLockProperties
### Properties
* **level**: 'CanNotDelete' | 'NotSpecified' | 'ReadOnly' (Required)
* **notes**: string
* **owners**: ManagementLockOwner[]

## ManagementLockOwner
### Properties
* **applicationId**: string

