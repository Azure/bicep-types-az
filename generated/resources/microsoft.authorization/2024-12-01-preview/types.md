# Microsoft.Authorization @ 2024-12-01-preview

## Resource Microsoft.Authorization/policyExemptions@2024-12-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyExemptionProperties](#policyexemptionproperties) (Required): Properties for the policy exemption.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/policyExemptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/variables@2024-12-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyVariableProperties](#policyvariableproperties) (Required): Properties for the variable.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/variables' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Authorization/variables/values@2024-12-01-preview
* **Valid Scope(s)**: ManagementGroup, Subscription
### Properties
* **apiVersion**: '2024-12-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyVariableValueProperties](#policyvariablevalueproperties) (Required): Properties for the variable value.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Authorization/variables/values' (ReadOnly, DeployTimeConstant): The resource type

## PolicyExemptionProperties
### Properties
* **assignmentScopeValidation**: 'Default' | 'DoNotValidate' | string: The option whether validate the exemption is at or under the assignment scope.
* **description**: string: The description of the policy exemption.
* **displayName**: string: The display name of the policy exemption.
* **exemptionCategory**: 'Mitigated' | 'Waiver' | string (Required): The policy exemption category. Possible values are Waiver and Mitigated.
* **expiresOn**: string: The expiration date and time (in UTC ISO 8601 format yyyy-MM-ddTHH:mm:ssZ) of the policy exemption.
* **metadata**: any: The policy exemption metadata. Metadata is an open ended object and is typically a collection of key value pairs.
* **policyAssignmentId**: string (Required): The ID of the policy assignment that is being exempted.
* **policyDefinitionReferenceIds**: string[]: The policy definition reference ID list when the associated policy assignment is an assignment of a policy set definition.
* **resourceSelectors**: [ResourceSelector](#resourceselector)[]: The resource selector list to filter policies by resource properties.

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

## ResourceSelector
### Properties
* **name**: string: The name of the resource selector.
* **selectors**: [Selector](#selector)[]: The list of the selector expressions.

## Selector
### Properties
* **in**: string[]: The list of values to filter in.
* **kind**: 'GroupPrincipalId' | 'UserPrincipalId' | 'policyDefinitionReferenceId' | 'resourceLocation' | 'resourceType' | 'resourceWithoutLocation' | string: The selector kind.
* **notIn**: string[]: The list of values to filter out.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

