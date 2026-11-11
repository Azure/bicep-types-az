# Test.SeparateBodies @ 2024-01-01

## Resource Test.SeparateBodies/accounts@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountRequestPropertiesOrAccountResponseProperties](#accountrequestpropertiesoraccountresponseproperties) (Required): Required account settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.SeparateBodies/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Test.SeparateBodies/registeredAccounts@2024-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AccountRequestPropertiesOrAccountResponseProperties](#accountrequestpropertiesoraccountresponseproperties) (Required): Required account settings.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Test.SeparateBodies/registeredAccounts' (ReadOnly, DeployTimeConstant): The resource type

## AccountRequestPropertiesOrAccountResponseProperties
### Properties
* **databaseAccountOfferType**: 'Standard' (Required)
* **entries**: [RecordOrTypeSpec.Record](#recordortypespecrecord)
* **locations**: [RequestLocationOrResponseLocation](#requestlocationorresponselocation)[] {minLength: 1, maxLength: 3} (Required)
* **nested**: [RequestNestedOrResponseNested](#requestnestedorresponsenested)
* **otherNested**: [RequestNestedOrOtherResponseNested](#requestnestedorotherresponsenested)
* **password**: string {sensitive} (Required, WriteOnly)
* **polymorphic**: [RequestBaseOrResponseBase](#requestbaseorresponsebase)
* **shared**: [Shared](#shared)
* **status**: string (ReadOnly)

## RecordOrTypeSpec.Record
### Properties
### Additional Properties
* **Additional Properties Type**: [RequestNestedOrResponseNested](#requestnestedorresponsenested)

## RequestBaseOrResponseBase
* **Discriminator**: kind

### Base Properties

### ResponseOnlyVariant
#### Properties
* **kind**: 'response-only' (Required)
* **result**: string (ReadOnly)

### RequestVariantOrResponseVariant
#### Properties
* **kind**: 'shared' (Required)
* **result**: string (ReadOnly)
* **value**: string (Required)


## RequestLocationOrResponseLocation
### Properties
* **endpoint**: string (ReadOnly)
* **failoverPriority**: int {minValue: 0} (Required)
* **isZoneRedundant**: bool
* **locationName**: string (Required)

## RequestNested
### Properties
* **next**: [RequestNested](#requestnested)
* **value**: string {maxLength: 30} (Required)

## RequestNestedOrOtherResponseNested
### Properties
* **next**: [RequestNested](#requestnested) (WriteOnly)
* **otherResult**: string (ReadOnly)
* **value**: string {maxLength: 30} (Required)

## RequestNestedOrResponseNested
### Properties
* **next**: [RequestNestedOrResponseNested](#requestnestedorresponsenested)
* **result**: string (ReadOnly)
* **value**: string {maxLength: 30} (Required)

## Shared
### Properties
* **status**: string (ReadOnly)
* **value**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

