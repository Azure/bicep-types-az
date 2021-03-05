# Microsoft.Authorization @ 2018-01-01-preview

## Resource Microsoft.Authorization/roleAssignments@2018-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentProperties (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleDefinitions@2018-01-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2018-01-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleDefinitionProperties
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool
* **principalId**: string (Required)
* **roleDefinitionId**: string (Required)
* **scope**: string (ReadOnly)

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]
* **description**: string
* **permissions**: Permission[]
* **roleName**: string
* **roleType**: string

## Permission
### Properties
* **actions**: string[]
* **dataActions**: string[]
* **notActions**: string[]
* **notDataActions**: string[]

