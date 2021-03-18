# Microsoft.OperationalInsights @ 2019-09-01-preview

## Resource Microsoft.OperationalInsights/queryPacks@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LogAnalyticsQueryPackProperties](#loganalyticsquerypackproperties) (Required)
* **tags**: [QueryPacksResourceTags](#querypacksresourcetags)
* **type**: 'Microsoft.OperationalInsights/queryPacks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.OperationalInsights/queryPacks/queries@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LogAnalyticsQueryPackQueryProperties](#loganalyticsquerypackqueryproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.OperationalInsights/queryPacks/queries' (ReadOnly, DeployTimeConstant)

## LogAnalyticsQueryPackProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **queryPackId**: string (ReadOnly)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## QueryPacksResourceTags
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
* **related**: [LogAnalyticsQueryPackQueryPropertiesRelated](#loganalyticsquerypackquerypropertiesrelated)
* **tags**: [LogAnalyticsQueryPackQueryPropertiesTags](#loganalyticsquerypackquerypropertiestags)
* **timeCreated**: string (ReadOnly)
* **timeModified**: string (ReadOnly)

## LogAnalyticsQueryPackQueryPropertiesRelated
### Properties
* **categories**: string[]
* **resourceTypes**: string[]
* **solutions**: string[]

## LogAnalyticsQueryPackQueryPropertiesTags
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

