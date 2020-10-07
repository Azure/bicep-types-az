# Microsoft.Kusto @ 2018-09-07-preview

## Microsoft.Kusto/clusters/databases/eventhubconnections
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: EventHubConnectionProperties
* **type**: 'Microsoft.Kusto/clusters/databases/eventhubconnections' (ReadOnly, DeployTimeConstant)

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'CSV' | 'JSON' | 'MULTIJSON'
* **eventHubResourceId**: string (Required)
* **mappingRuleName**: string
* **tableName**: string

## Microsoft.Kusto/clusters/databases
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabaseProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant)

## DatabaseProperties
### Properties
* **hotCachePeriodInDays**: int
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **softDeletePeriodInDays**: int (Required)
* **statistics**: DatabaseStatistics

## DatabaseStatistics
### Properties
* **size**: int

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.Kusto/clusters
### Properties
* **apiVersion**: '2018-09-07-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: AzureSku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)

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
* **tier**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

