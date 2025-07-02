# Microsoft.Authorization @ 2022-08-01-preview

## Resource Microsoft.Authorization/variables@2022-08-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyVariableProperties](#policyvariableproperties) (Required): Properties for the variable.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/variables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/variables/values@2022-08-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2022-08-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyVariableValueProperties](#policyvariablevalueproperties) (Required): Properties for the variable value.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/variables/values' (ReadOnly, DeployTimeConstant): The resource type

## PolicyVariableColumn
### Properties
* **columnName**: string (Required): The name of this policy variable column.

## PolicyVariableProperties
### Properties
* **columns**: [PolicyVariableColumn](#policyvariablecolumn)[] (Required): Variable column definitions.

## PolicyVariableValueColumnValue
### Properties
* **columnName**: string (Required): Column name for the variable value
* **columnValue**: any (Required): Column value for the variable value; this can be an integer, double, boolean, null or a string.

## PolicyVariableValueProperties
### Properties
* **values**: [PolicyVariableValueColumnValue](#policyvariablevaluecolumnvalue)[] (Required): Variable value column value array.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

