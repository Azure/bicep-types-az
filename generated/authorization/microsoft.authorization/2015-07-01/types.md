# Microsoft.Authorization @ 2015-07-01

## Resource Microsoft.Authorization/roleAssignments@2015-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentProperties (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleDefinitions@2015-07-01
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2015-07-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleDefinitionProperties
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)
* **scope**: string (ReadOnly)

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

