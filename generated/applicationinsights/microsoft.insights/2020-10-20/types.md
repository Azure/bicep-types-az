# Microsoft.Insights @ 2020-10-20

## Resource Microsoft.Insights/myWorkbooks@2020-10-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: [Dictionary<string,String>](#dictionarystringstring): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): Customer Managed Identity
* **kind**: 'shared' | 'user': The kind of workbook. Choices are user and shared.
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MyWorkbookProperties](#myworkbookproperties): Properties that contain a private workbook.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/workbooks@2020-10-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: [Dictionary<string,String>](#dictionarystringstring): Resource etag
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedIdentity](#managedidentity): Customer Managed Identity
* **kind**: 'shared' | 'user': The kind of workbook. Choices are user and shared.
* **location**: string: Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties): Properties that contain a workbook.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags
* **type**: 'Microsoft.Insights/workbooks' (ReadOnly, DeployTimeConstant): The resource type

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **type**: 'None' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): Customer Managed Identity

## UserAssignedIdentities
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.

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

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **displayName**: string (Required): The user-defined name (display name) of the workbook.
* **serializedData**: string (Required): Configuration of this particular workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: ResourceId for a source resource.
* **storageUri**: string: BYOS Storage Account URI
* **tags**: string[]: A list of 0 or more tags that are associated with this workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this workbook.
* **version**: string: Workbook version

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

