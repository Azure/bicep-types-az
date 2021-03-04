# Microsoft.Kusto @ 2018-09-07-preview

## Resource Microsoft.Kusto/clusters@2018-09-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: AzureSku (Required)
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases@2018-09-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **tags**: TrackedResourceTags
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases/eventhubconnections@2018-09-07-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventHubConnectionProperties
* **type**: 'Microsoft.Kusto/clusters/databases/eventhubconnections' (ReadOnly, DeployTimeConstant)

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' (ReadOnly)
* **trustedExternalTenants**: TrustedExternalTenant[]
* **uri**: string (ReadOnly)

## TrustedExternalTenant
### Properties
* **value**: string

## AzureSku
### Properties
* **capacity**: int
* **name**: 'D13_v2' | 'D14_v2' | 'KC16' | 'KC8' | 'KS16' | 'KS8' | 'L16' | 'L8' (Required)
* **tier**: 'Standard' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProperties
### Properties
* **hotCachePeriodInDays**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **softDeletePeriodInDays**: int (Required)
* **statistics**: DatabaseStatistics (ReadOnly)

## DatabaseStatistics
### Properties
* **size**: int

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'CSV' | 'JSON' | 'MULTIJSON'
* **eventHubResourceId**: string (Required)
* **mappingRuleName**: string
* **tableName**: string

