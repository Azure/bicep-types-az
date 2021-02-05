# Microsoft.OperationalInsights @ 2019-09-01-preview

## Resource Microsoft.OperationalInsights/queryPacks@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogAnalyticsQueryPackProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.OperationalInsights/queryPacks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/queryPacks/queries@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LogAnalyticsQueryPackQueryProperties
* **systemData**: SystemData (ReadOnly)
* **type**: 'Microsoft.OperationalInsights/queryPacks/queries' (ReadOnly, DeployTimeConstant)

## LogAnalyticsQueryPackProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **queryPackId**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LogAnalyticsQueryPackQueryProperties
### Properties
* **author**: string (ReadOnly)
* **body**: string (Required)
* **description**: string
* **displayName**: string (Required)
* **id**: string (ReadOnly)
* **properties**: any
* **related**: schemas:16_related
* **tags**: Dictionary<string,IList<String>>
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## schemas:16_related
### Properties
* **categories**: string[]
* **resourceTypes**: string[]
* **solutions**: string[]

## Dictionary<string,IList<String>>
### Properties
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

