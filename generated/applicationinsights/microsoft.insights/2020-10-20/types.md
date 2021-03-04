# Microsoft.Insights @ 2020-10-20

## Resource Microsoft.Insights/myWorkbooks@2020-10-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20' (ReadOnly, DeployTimeConstant)
* **etag**: MyWorkbookResourceEtag
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: MyWorkbookProperties
* **tags**: MyWorkbookResourceTags
* **type**: 'Microsoft.Insights/myWorkbooks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Insights/workbooks@2020-10-20
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-20' (ReadOnly, DeployTimeConstant)
* **etag**: ResourceEtag
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ManagedIdentity
* **kind**: 'shared' | 'user'
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkbookProperties
* **tags**: ResourceTags
* **type**: 'Microsoft.Insights/workbooks' (ReadOnly, DeployTimeConstant)

## MyWorkbookResourceEtag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ManagedIdentity
### Properties
* **type**: 'None' | 'UserAssigned'
* **userAssignedIdentities**: UserAssignedIdentities

## UserAssignedIdentities
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## MyWorkbookProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **serializedData**: string (Required)
* **sourceId**: string
* **storageUri**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **version**: string

## MyWorkbookResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceEtag
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkbookProperties
### Properties
* **category**: string (Required)
* **displayName**: string (Required)
* **serializedData**: string (Required)
* **sourceId**: string
* **storageUri**: string
* **tags**: string[]
* **timeModified**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **version**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

