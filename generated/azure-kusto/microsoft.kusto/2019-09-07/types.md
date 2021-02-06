# Microsoft.Kusto @ 2019-09-07

## Resource Microsoft.Kusto/clusters@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: AzureSku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2019-09-07
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AttachedDatabaseConfigurationProperties
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases@2019-09-07
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant)
### ReadOnlyFollowing
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required)
* **properties**: ReadOnlyFollowingDatabaseProperties

### ReadWrite
#### Properties
* **kind**: 'ReadWrite' (Required)
* **properties**: ReadWriteDatabaseProperties


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-09-07
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-09-07' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant)
### EventGrid
#### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: EventGridConnectionProperties

### EventHub
#### Properties
* **kind**: 'EventHub' (Required)
* **properties**: EventHubConnectionProperties

### IotHub
#### Properties
* **kind**: 'IotHub' (Required)
* **properties**: IotHubConnectionProperties


## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,Schemas50UserAssignedIdentitiesValue>

## Dictionary<string,Schemas50UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: schemas:50_userAssignedIdentitiesValue

## schemas:50_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly)
* **enableDiskEncryption**: bool
* **enableStreamingIngest**: bool
* **keyVaultProperties**: KeyVaultProperties
* **optimizedAutoscale**: OptimizedAutoscale
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' (ReadOnly)
* **trustedExternalTenants**: TrustedExternalTenant[]
* **uri**: string (ReadOnly)
* **virtualNetworkConfiguration**: VirtualNetworkConfiguration

## KeyVaultProperties
### Properties
* **keyName**: string (Required)
* **keyVaultUri**: string (Required)
* **keyVersion**: string (Required)

## OptimizedAutoscale
### Properties
* **isEnabled**: bool (Required)
* **maximum**: int (Required)
* **minimum**: int (Required)
* **version**: int (Required)

## TrustedExternalTenant
### Properties
* **value**: string

## VirtualNetworkConfiguration
### Properties
* **dataManagementPublicIpId**: string (Required)
* **enginePublicIpId**: string (Required)
* **subnetId**: string (Required)

## AzureSku
### Properties
* **capacity**: int
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' (Required)
* **tier**: 'Basic' | 'Standard' (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AttachedDatabaseConfigurationProperties
### Properties
* **attachedDatabaseNames**: string[] (ReadOnly)
* **clusterResourceId**: string (Required)
* **databaseName**: string (Required)
* **defaultPrincipalsModificationKind**: 'None' | 'Replace' | 'Union' (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)

## ReadOnlyFollowing
### Properties
* **kind**: 'ReadOnlyFollowing' (Required)
* **properties**: ReadOnlyFollowingDatabaseProperties

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly)
* **hotCachePeriod**: string
* **leaderClusterResourceId**: string (ReadOnly)
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)
* **softDeletePeriod**: string (ReadOnly)
* **statistics**: DatabaseStatistics

## DatabaseStatistics
### Properties
* **size**: int

## ReadWrite
### Properties
* **kind**: 'ReadWrite' (Required)
* **properties**: ReadWriteDatabaseProperties

## ReadWriteDatabaseProperties
### Properties
* **hotCachePeriod**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)
* **softDeletePeriod**: string
* **statistics**: DatabaseStatistics

## EventGrid
### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: EventGridConnectionProperties

## EventGridConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' (Required)
* **eventHubResourceId**: string (Required)
* **mappingRuleName**: string
* **storageAccountResourceId**: string (Required)
* **tableName**: string (Required)

## EventHub
### Properties
* **kind**: 'EventHub' (Required)
* **properties**: EventHubConnectionProperties

## EventHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT'
* **eventHubResourceId**: string (Required)
* **eventSystemProperties**: string[]
* **mappingRuleName**: string
* **tableName**: string

## IotHub
### Properties
* **kind**: 'IotHub' (Required)
* **properties**: IotHubConnectionProperties

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT'
* **eventSystemProperties**: string[]
* **iotHubResourceId**: string (Required)
* **mappingRuleName**: string
* **sharedAccessPolicyName**: string (Required)
* **tableName**: string

