# Microsoft.Authorization @ 2018-01-01-preview

## Microsoft.Authorization/roleAssignments
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentProperties (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)
* **scope**: string (ReadOnly)

## Microsoft.Authorization/roleDefinitions
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleDefinitionProperties
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant)

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]
* **description**: string
* **permissions**: Permission[]
* **roleName**: string
* **type**: string

## Permission
### Properties
* **actions**: string[]
* **dataActions**: string[]
* **notActions**: string[]
* **notDataActions**: string[]

