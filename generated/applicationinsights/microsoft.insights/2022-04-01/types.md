# Microsoft.Insights @ 2022-04-01

## Resource Microsoft.Insights/workbooks@2022-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2022-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string: Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [WorkbookResourceIdentity](#workbookresourceidentity): Identity used for BYOS
* **kind**: 'shared' | string: The kind of workbook. Only valid value is shared.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties): Metadata describing a workbook for an Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/workbooks' (ReadOnly, DeployTimeConstant): The resource type

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The client ID of the assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the assigned identity.

## WorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **description**: string: The description of the workbook.
* **displayName**: string (Required): The user-defined name (display name) of the workbook.
* **revision**: string (ReadOnly): The unique revision id for this workbook definition
* **serializedData**: string (Required): Configuration of this particular workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: ResourceId for a source resource.
* **storageUri**: string: The resourceId to the storage account when bring your own storage is used
* **tags**: string[]: Being deprecated, please use the other tags field
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this workbook.
* **version**: string: Workbook schema version format, like 'Notebook/1.0', which should match the workbook in serializedData

## WorkbookResourceIdentity
### Properties
* **principalId**: string (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

