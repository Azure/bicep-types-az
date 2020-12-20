# Microsoft.Notebooks @ 2019-10-11-preview

## Resource Microsoft.Notebooks/notebookProxies@2019-10-11-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-10-11-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NotebookResourceEntity
* **type**: 'Microsoft.Notebooks/notebookProxies' (ReadOnly, DeployTimeConstant)

## Function listCredentials (Microsoft.Notebooks/notebookProxies@2019-10-11-preview
* **Resource**: Microsoft.Notebooks/notebookProxies@2019-10-11-preview
* **Output**: NotebookProxyCredentials

## NotebookResourceEntity
### Properties
* **hostname**: string
* **resourceId**: string (ReadOnly)

## NotebookProxyCredentials
### Properties
* **hostname**: string (ReadOnly)
* **primaryAccessKey**: string (ReadOnly)
* **resourceId**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

