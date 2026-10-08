# Test.EdgeCases @ 2024-01-01

## Resource Test.EdgeCases/alternateParents/customRouteResources@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRouteProperties](#customrouteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/alternateParents/customRouteResources' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Test.EdgeCases/extensionTestResources@2024-01-01
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ExtensionProperties](#extensionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/extensionTestResources' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Test.EdgeCases/Namespaces/First@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRouteProperties](#customrouteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/Namespaces/First' (ReadOnly, DeployTimeConstant): The resource type

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

## Resource Test.EdgeCases/Namespaces/Second@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRouteProperties](#customrouteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/Namespaces/Second' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.EdgeCases/parents/customRouteResources@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomRouteProperties](#customrouteproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.EdgeCases/parents/customRouteResources' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Test.EdgeCases/Namespaces@2024-01-01)
* **Resource**: Test.EdgeCases/Namespaces
* **ApiVersion**: 2024-01-01
* **Output**: [KeyListResult](#keylistresult)

## Function regenerateKey (Test.EdgeCases/Namespaces@2024-01-01)
* **Resource**: Test.EdgeCases/Namespaces
* **ApiVersion**: 2024-01-01
* **Input**: [KeyInfo](#keyinfo)
* **Output**: any

## AuthorizationRuleProperties
### Properties
* **rights**: string[]: The rights associated with the rule.

## ConstrainedProperties
### Properties
* **constrainedAlias**: string {minLength: 2, maxLength: 32, pattern: "^[a-z]+$"}: A scalar alias with string constraints.
* **constrainedItems**: string[] {minLength: 1, maxLength: 3}: An array with minItems and maxItems constraints.
* **correlationId**: string {pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: A property with only a pattern constraint.
* **description**: string {maxLength: 256}: A property with only maxLength.
* **displayName**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9-]*$"}: A name with pattern, minLength, and maxLength constraints
* **emptyPattern**: string: A property with an empty pattern, which should be excluded.
* **firstShared**: [Shared](#shared)
* **numericKind**: int
* **password**: string {sensitive}: A sensitive value.
* **polymorphicValue**: [PolymorphicBase](#polymorphicbase): A polymorphic value.
* **quotedDescription**: string: A description containing an escaped "quoted value".
* **requiredName**: string {minLength: 1}: A property with only minLength.
* **secondShared**: [Test.EdgeCases.SecondModels.Shared](#testedgecasessecondmodelsshared)

## CustomRouteProperties
### Properties
* **value**: string

## ExtensionProperties
### Properties
* **value**: string

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

## PolymorphicBase
* **Discriminator**: kind

### Base Properties

### FirstVariant
#### Properties
* **firstProperty**: string
* **kind**: 'first-value' (Required): The first variant kind.

### SecondVariant
#### Properties
* **kind**: 'second-value' (Required): The polymorphic kind.
* **secondProperty**: string


## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): Group ID
* **requiredMembers**: string[] (ReadOnly): Required members

## Record
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Shared
### Properties
* **firstValue**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Test.EdgeCases.SecondModels.Shared
### Properties
* **secondValue**: string

