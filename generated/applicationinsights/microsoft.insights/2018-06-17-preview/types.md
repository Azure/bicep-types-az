# microsoft.insights @ 2018-06-17-preview

## Resource microsoft.insights/workbooks@2018-06-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'shared' | 'user' | string: The kind of workbook. Choices are user and shared.
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookProperties](#workbookproperties): Metadata describing a workbook for an Azure resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant): The resource type

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkbookProperties
### Properties
* **category**: string (Required): Workbook category, as defined by the user at creation time.
* **displayName**: string (Required): The user-defined name (display name) of the workbook.
* **serializedData**: string (Required): Configuration of this particular workbook. Configuration data is a string containing valid JSON
* **sourceId**: string: ResourceId for a source resource.
* **tags**: string[]: A list of 0 or more tags that are associated with this workbook definition
* **timeModified**: string (ReadOnly): Date and time in UTC of the last modification that was made to this workbook definition.
* **userId**: string (ReadOnly): Unique user id of the specific user that owns this workbook.
* **version**: string: Workbook version

