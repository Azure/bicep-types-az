# Microsoft.Insights @ 2019-09-01-preview

## Microsoft.Insights/queryPacks/queries
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogAnalyticsQueryPackQueryProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.Insights/queryPacks/queries' (ReadOnly, DeployTimeConstant)

## LogAnalyticsQueryPackQueryProperties
### Properties
* **author**: string (ReadOnly)
* **body**: string (Required)
* **description**: string
* **displayName**: string (Required)
* **id**: string (ReadOnly)
* **properties**: any
* **related**: schemas:5_related
* **tags**: Dictionary<string,IList<String>>
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## schemas:5_related
### Properties
* **categories**: string[]
* **resourceTypes**: string[]
* **solutions**: string[]

## Dictionary<string,IList<String>>
### Additional Properties
* **Additional Properties Type**: string[]

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## Microsoft.Insights/queryPacks
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogAnalyticsQueryPackProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Insights/queryPacks' (ReadOnly, DeployTimeConstant)

## LogAnalyticsQueryPackProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **queryPackId**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

