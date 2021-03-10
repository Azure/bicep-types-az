# Microsoft.Authorization @ 2017-10-01-preview

## Resource Microsoft.Authorization/roleAssignments@2017-10-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [RoleAssignmentProperties](#roleassignmentproperties)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool
* **principalId**: string
* **roleDefinitionId**: string
* **scope**: string (ReadOnly)

