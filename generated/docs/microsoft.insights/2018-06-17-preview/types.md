# microsoft.insights @ 2018-06-17-preview

## Resource microsoft.insights/workbooks@2018-06-17-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-17-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **kind**: 'shared' | 'user'
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkbookProperties
* **tags**: Dictionary<string,String>
* **type**: 'microsoft.insights/workbooks' (ReadOnly, DeployTimeConstant)

## WorkbookProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **serializedData**: string (Required)
* **sourceId**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **version**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

