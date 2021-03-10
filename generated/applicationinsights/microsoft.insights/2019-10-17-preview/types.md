# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/workbooktemplates@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkbookTemplateProperties](#workbooktemplateproperties)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'microsoft.insights/workbooktemplates' (ReadOnly, DeployTimeConstant)

## WorkbookTemplateProperties
### Properties
* **author**: string
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[] (Required)
* **localized**: [Dictionary<string,IList<WorkbookTemplateLocalizedGallery>>](#dictionarystringilistworkbooktemplatelocalizedgallery)
* **priority**: int
* **templateData**: any (Required)

## WorkbookTemplateGallery
### Properties
* **category**: string
* **name**: string
* **order**: int
* **resourceType**: string
* **type**: string

## Dictionary<string,IList<WorkbookTemplateLocalizedGallery>>
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkbookTemplateLocalizedGallery](#workbooktemplatelocalizedgallery)[]

## WorkbookTemplateLocalizedGallery
### Properties
* **galleries**: [WorkbookTemplateGallery](#workbooktemplategallery)[]
* **templateData**: any

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

