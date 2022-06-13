# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/workbooktemplates@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkbookTemplateProperties](#workbooktemplateproperties): Metadata describing a workbook template for an Azure resource.
* **tags**: [WorkbookTemplateResourceTags](#workbooktemplateresourcetags): Resource tags
* **type**: 'microsoft.insights/workbooktemplates' (ReadOnly, DeployTimeConstant): The resource type

## WorkbookTemplateGallery
### Properties
* **category**: string: Category for the gallery.
* **name**: string: Name of the workbook template in the gallery.
* **order**: int: Order of the template within the gallery.
* **resourceType**: string: Azure resource type supported by the gallery.
* **type**: string: Type of workbook supported by the workbook template.

## WorkbookTemplateLocalizedGallery
### Properties
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[]: Workbook galleries supported by the template.
* **templateData**: any: Valid JSON object containing workbook template payload.

## WorkbookTemplateProperties
### Properties
* **author**: string: Information about the author of the workbook template.
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[] (Required): Workbook galleries supported by the template.
* **localized**: [WorkbookTemplatePropertiesLocalized](#workbooktemplatepropertieslocalized): Key value pair of localized gallery. Each key is the locale code of languages supported by the Azure portal.
* **priority**: int: Priority of the template. Determines which template to open when a workbook gallery is opened in viewer mode.
* **templateData**: any (Required): Valid JSON object containing workbook template payload.

## WorkbookTemplatePropertiesLocalized
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkbookTemplateLocalizedGallery](#workbooktemplatelocalizedgallery)[]

## WorkbookTemplateResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

