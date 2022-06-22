# Microsoft.Insights @ 2021-03-08

## Resource Microsoft.Insights/myWorkbooks@2021-03-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-08' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: [MyWorkbookResourceEtag](#myworkbookresourceetag): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MyWorkbookManagedIdentity](#myworkbookmanagedidentity): Identity used for BYOS
* **kind**: 'shared' | 'user' | string: The kind of workbook. Choices are user and shared.
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MyWorkbookProperties](#myworkbookproperties): Metadata describing a workbook for an Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [MyWorkbookResourceTags](#myworkbookresourcetags): Resource tags
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/workbooks@2021-03-08
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-08' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: [ResourceEtag](#resourceetag): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [WorkbookManagedIdentity](#workbookmanagedidentity): Identity used for BYOS
* **kind**: 'shared' | 'user' | string: The kind of workbook. Choices are user and shared.
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties): Metadata describing a workbook for an Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/workbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/workbooks/revisions@2021-03-08 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-03-08' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: [ResourceEtag](#resourceetag) (ReadOnly): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [WorkbookManagedIdentity](#workbookmanagedidentity) (ReadOnly): Identity used for BYOS
* **kind**: 'shared' | 'user' | string (ReadOnly): The kind of workbook. Choices are user and shared.
* **location**: string (ReadOnly): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties) (ReadOnly): Metadata describing a workbook for an Azure resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Resource tags
* **type**: 'Microsoft.Insights/workbooks/revisions' (ReadOnly, DeployTimeConstant): The resource type

## MyWorkbookManagedIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string: The identity type.
* **userAssignedIdentities**: [MyWorkbookUserAssignedIdentities](#myworkbookuserassignedidentities): Customer Managed Identity

## MyWorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **displayName**: string (Required): The user-defined name of the private workbook.
* **serializedData**: string (Required): Configuration of this particular private workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: Optional resourceId for a source resource.
* **storageUri**: string: BYOS Storage Account URI
* **tags**: string[]: A list of 0 or more tags that are associated with this private workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this private workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this private workbook.
* **version**: string: This instance's version of the data model. This can change as new features are added that can be marked private workbook.

## MyWorkbookResourceEtag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MyWorkbookResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MyWorkbookUserAssignedIdentities
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.

## ResourceEtag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceEtag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
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

## WorkbookManagedIdentity
### Properties
* **type**: 'None' | 'UserAssigned' | string: The identity type.
* **userAssignedIdentities**: [WorkbookUserAssignedIdentities](#workbookuserassignedidentities): Customer Managed Identity

## WorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **description**: string: The description of the workbook.
* **displayName**: string (Required): The user-defined name (display name) of the workbook.
* **revision**: string: The unique revision id for this workbook definition
* **serializedData**: string (Required): Configuration of this particular workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: ResourceId for a source resource.
* **storageUri**: string: BYOS Storage Account URI
* **tags**: string[]: A list of 0 or more tags that are associated with this workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this workbook.
* **version**: string: Workbook version

## WorkbookUserAssignedIdentities
### Properties
* **clientId**: string (ReadOnly): The client ID of resource.
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.

