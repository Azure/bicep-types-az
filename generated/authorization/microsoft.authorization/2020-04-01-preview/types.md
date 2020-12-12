# Microsoft.Authorization @ 2020-04-01-preview

## Resource Microsoft.Authorization/roleAssignments@2020-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2020-04-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: RoleAssignmentProperties (Required)
* **type**: 'Microsoft.Authorization/roleAssignments' (ReadOnly, DeployTimeConstant)

## RoleAssignmentProperties
### Properties
* **canDelegate**: bool
* **condition**: string
* **conditionVersion**: string
* **createdBy**: string (ReadOnly)
* **createdOn**: string (ReadOnly)
* **delegatedManagedIdentityResourceId**: string (ReadOnly)
* **description**: string
* **principalId**: string (Required)
* **principalType**: 'Application' | 'DirectoryObjectOrGroup' | 'DirectoryRoleTemplate' | 'Everyone' | 'ForeignGroup' | 'Group' | 'MSI' | 'ServicePrincipal' | 'Unknown' | 'User'
* **roleDefinitionId**: string (Required)
* **scope**: string (ReadOnly)
* **updatedBy**: string (ReadOnly)
* **updatedOn**: string (ReadOnly)

