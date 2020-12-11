# microsoft.insights @ 2019-10-17-preview

## Resource microsoft.insights/workbooktemplates@2019-10-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkbookTemplateProperties
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/workbooktemplates' (ReadOnly, DeployTimeConstant)

## WorkbookTemplateProperties
### Properties
* **author**: string
* **galleries**: WorkbookTemplateGallery[] (Required)
* **localized**: Dictionary<string,IList<WorkbookTemplateLocalizedGallery>>
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
### Additional Properties
* **Additional Properties Type**: WorkbookTemplateLocalizedGallery[]

## WorkbookTemplateLocalizedGallery
### Properties
* **galleries**: WorkbookTemplateGallery[]
* **templateData**: any

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

