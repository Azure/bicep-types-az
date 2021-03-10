# Microsoft.Kusto @ 2019-01-21

## Resource Microsoft.Kusto/clusters@2019-01-21
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **sku**: [AzureSku](#azuresku) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases@2019-01-21
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabaseProperties](#databaseproperties)
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-01-21
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2019-01-21' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant)
### EventGridDataConnection
#### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties)

### EventHubDataConnection
#### Properties
* **kind**: 'EventHub' (Required)
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties)


## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' (ReadOnly)
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]
* **uri**: string (ReadOnly)

## TrustedExternalTenant
### Properties
* **value**: string

## AzureSku
### Properties
* **capacity**: int
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' (Required)
* **tier**: 'Basic' | 'Standard' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabaseProperties
### Properties
* **hotCachePeriod**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Running' | 'Succeeded' (ReadOnly)
* **softDeletePeriod**: string
* **statistics**: [DatabaseStatistics](#databasestatistics) (ReadOnly)

## DatabaseStatistics
### Properties
* **size**: int

## EventGridDataConnection
### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties)

## EventGridConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TXT' (Required)
* **eventHubResourceId**: string (Required)
* **mappingRuleName**: string
* **storageAccountResourceId**: string (Required)
* **tableName**: string (Required)

## EventHubDataConnection
### Properties
* **kind**: 'EventHub' (Required)
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties)

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TXT'
* **eventHubResourceId**: string (Required)
* **mappingRuleName**: string
* **tableName**: string

