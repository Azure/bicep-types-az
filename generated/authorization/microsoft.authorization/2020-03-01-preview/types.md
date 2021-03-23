# Microsoft.Authorization @ 2020-03-01-preview

## Resource Microsoft.Authorization/denyAssignments@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DenyAssignmentProperties](#denyassignmentproperties) (Required)
* **type**: 'Microsoft.Authorization/denyAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleAssignments@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties) (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Authorization/roleDefinitions@2020-03-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-03-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleDefinitionProperties](#roledefinitionproperties)
* **type**: 'Microsoft.Authorization/roleDefinitions' (ReadOnly, DeployTimeConstant)

## DenyAssignmentProperties
### Properties
* **condition**: string
* **conditionVersion**: string
* **createdBy**: string (ReadOnly)
* **createdOn**: string (ReadOnly)
* **denyAssignmentName**: string
* **description**: string
* **doNotApplyToChildScopes**: bool
* **excludePrincipals**: [Principal](#principal)[]
* **isSystemProtected**: bool
* **permissions**: [Permission](#permission)[] (Required)
* **principals**: [Principal](#principal)[] (Required)
* **scope**: string
* **updatedBy**: string (ReadOnly)
* **updatedOn**: string (ReadOnly)

## Principal
### Properties
* **id**: string
* **type**: string

## Permission
### Properties
* **actions**: string[]
* **dataActions**: string[]
* **notActions**: string[]
* **notDataActions**: string[]

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool
* **condition**: string
* **conditionVersion**: string
* **createdBy**: string (ReadOnly)
* **createdOn**: string (ReadOnly)
* **delegatedManagedIdentityResourceId**: string
* **principalId**: string (Required)
* **principalType**: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User'
* **roleDefinitionId**: string (Required)
* **scope**: string
* **updatedBy**: string (ReadOnly)
* **updatedOn**: string (ReadOnly)

## RoleDefinitionProperties
### Properties
* **assignableScopes**: string[]
* **description**: string
* **permissions**: [Permission](#permission)[]
* **roleName**: string
* **type**: string

