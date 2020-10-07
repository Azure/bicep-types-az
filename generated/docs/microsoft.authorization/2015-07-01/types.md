# Microsoft.Authorization @ 2015-07-01

## Microsoft.Authorization/roleAssignments
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentProperties (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)
* **scope**: string (ReadOnly)

## Microsoft.Authorization/roleDefinitions
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant)
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
* **notActions**: string[]

