# Test.EdgeCases @ 2024-01-01

## Resource Test.EdgeCases/constrainedResources@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConstrainedProperties](#constrainedproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Record](#record): Resource tags.
* **type**: 'Test.EdgeCases/constrainedResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.EdgeCases/Namespaces@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NamespaceProperties](#namespaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [Record](#record): Resource tags.
* **type**: 'Test.EdgeCases/Namespaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.EdgeCases/Namespaces/AuthorizationRules@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AuthorizationRuleProperties](#authorizationruleproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/Namespaces/AuthorizationRules' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.EdgeCases/Namespaces/privateLinkResources@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/Namespaces/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Test.EdgeCases/Namespaces@2024-01-01)
* **Resource**: Test.EdgeCases/Namespaces
* **ApiVersion**: 2024-01-01
* **Output**: [KeyListResult](#keylistresult)

## AuthorizationRuleProperties
### Properties
* **rights**: string[]: The rights associated with the rule.

## ConstrainedProperties
### Properties
* **correlationId**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: A property with only a pattern constraint.
* **description**: string {maxLength: 256}: A property with only maxLength.
* **displayName**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]*$"}: A name with pattern, minLength, and maxLength constraints
* **requiredName**: string {minLength: 1}: A property with only minLength.

## KeyInfo
### Properties
* **keyName**: string: The key name.
* **keyValue**: string: The key value.

## KeyListResult
### Properties
* **keys**: [KeyInfo](#keyinfo)[]: The list of keys.
* **nextLink**: string: The next link.

## NamespaceProperties
### Properties
* **status**: string (ReadOnly): The namespace status

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): Group ID
* **requiredMembers**: string[] (ReadOnly): Required members

## Record
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

