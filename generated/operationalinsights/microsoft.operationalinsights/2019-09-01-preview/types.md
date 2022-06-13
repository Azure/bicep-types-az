# Microsoft.OperationalInsights @ 2019-09-01-preview

## Resource Microsoft.OperationalInsights/queryPacks@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogAnalyticsQueryPackProperties](#loganalyticsquerypackproperties) (Required): Properties that define a Log Analytics QueryPack resource.
* **tags**: [QueryPacksResourceTags](#querypacksresourcetags): Resource tags
* **type**: 'Microsoft.OperationalInsights/queryPacks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.OperationalInsights/queryPacks/queries@2019-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LogAnalyticsQueryPackQueryProperties](#loganalyticsquerypackqueryproperties): Properties that define an Log Analytics QueryPack-Query resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **type**: 'Microsoft.OperationalInsights/queryPacks/queries' (ReadOnly, DeployTimeConstant): The resource type

## LogAnalyticsQueryPackProperties
### Properties
* **provisioningState**: string (ReadOnly): Current state of this QueryPack: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
* **queryPackId**: string (ReadOnly): The unique ID of your application. This field cannot be changed.
* **timeCreated**: string (ReadOnly): Creation Date for the Log Analytics QueryPack, in ISO 8601 format.
* **timeModified**: string (ReadOnly): Last modified date of the Log Analytics QueryPack, in ISO 8601 format.

## LogAnalyticsQueryPackQueryProperties
### Properties
* **author**: string (ReadOnly): Object Id of user creating the query.
* **body**: string (Required): Body of the query.
* **description**: string: Description of the query.
* **displayName**: string (Required): Unique display name for your query within the Query Pack.
* **id**: string (ReadOnly): The unique ID of your application. This field cannot be changed.
* **properties**: any: Additional properties that can be set for the query.
* **related**: [LogAnalyticsQueryPackQueryPropertiesRelated](#loganalyticsquerypackquerypropertiesrelated): The related metadata items for the function.
* **tags**: [LogAnalyticsQueryPackQueryPropertiesTags](#loganalyticsquerypackquerypropertiestags): Tags associated with the query.
* **timeCreated**: string (ReadOnly): Creation Date for the Log Analytics Query, in ISO 8601 format.
* **timeModified**: string (ReadOnly): Last modified date of the Log Analytics Query, in ISO 8601 format.

## LogAnalyticsQueryPackQueryPropertiesRelated
### Properties
* **categories**: string[]: The related categories for the function.
* **resourceTypes**: string[]: The related resource types for the function.
* **solutions**: string[]: The related Log Analytics solutions for the function.

## LogAnalyticsQueryPackQueryPropertiesTags
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## QueryPacksResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user' | string: The type of identity that last modified the resource

