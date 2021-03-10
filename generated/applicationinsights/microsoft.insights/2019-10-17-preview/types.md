# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/workbooktemplates@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkbookTemplateProperties](#workbooktemplateproperties)
* **tags**: [WorkbookTemplateResourceTags](#workbooktemplateresourcetags)
* **type**: 'microsoft.insights/workbooktemplates' (ReadOnly, DeployTimeConstant)

## WorkbookTemplateProperties
### Properties
* **author**: string
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[] (Required)
* **localized**: [WorkbookTemplatePropertiesLocalized](#workbooktemplatepropertieslocalized)
* **priority**: int
* **templateData**: any (Required)

## WorkbookTemplateGallery
### Properties
* **category**: string
* **name**: string
* **order**: int
* **resourceType**: string
* **type**: string

## WorkbookTemplatePropertiesLocalized
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkbookTemplateLocalizedGallery](#workbooktemplatelocalizedgallery)[]

## WorkbookTemplateLocalizedGallery
### Properties
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[]
* **templateData**: any

## WorkbookTemplateResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

