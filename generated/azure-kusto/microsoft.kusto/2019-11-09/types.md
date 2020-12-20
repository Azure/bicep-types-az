# Microsoft.Kusto @ 2019-11-09

## Resource Microsoft.Kusto/clusters@2019-11-09
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterProperties
* **sku**: AzureSku (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2019-11-09
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AttachedDatabaseConfigurationProperties
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases@2019-11-09
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2019-11-09
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
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


## Resource Microsoft.Kusto/clusters/databases/principalAssignments@2019-11-09
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: DatabasePrincipalProperties
* **type**: 'Microsoft.Kusto/clusters/databases/principalAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/principalAssignments@2019-11-09
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-11-09' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterPrincipalProperties
* **type**: 'Microsoft.Kusto/clusters/principalAssignments' (ReadOnly, DeployTimeConstant)

## Function listFollowerDatabases (Microsoft.Kusto/clusters@2019-11-09
* **Resource**: Microsoft.Kusto/clusters@2019-11-09
* **Output**: FollowerDatabaseListResult

## Function listPrincipals (Microsoft.Kusto/clusters/databases@2019-11-09
* **Resource**: Microsoft.Kusto/clusters/databases@2019-11-09
* **Output**: DatabasePrincipalListResult

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' (Required)
* **userAssignedIdentities**: Dictionary<string,Schemas62UserAssignedIdentitiesValue>

## Dictionary<string,Schemas62UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: schemas:62_userAssignedIdentitiesValue

## schemas:62_userAssignedIdentitiesValue
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
* **stateReason**: string (ReadOnly)
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
* **isFollowed**: string (ReadOnly)
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
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' (Required)
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
* **compression**: 'GZip' | 'None'
* **consumerGroup**: string (Required)
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT'
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
* **dataFormat**: 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT'
* **eventSystemProperties**: string[]
* **iotHubResourceId**: string (Required)
* **mappingRuleName**: string
* **sharedAccessPolicyName**: string (Required)
* **tableName**: string

## DatabasePrincipalProperties
### Properties
* **principalId**: string (Required)
* **principalName**: string (ReadOnly)
* **principalType**: 'App' | 'Group' | 'User' (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' (Required)
* **tenantId**: string
* **tenantName**: string (ReadOnly)

## ClusterPrincipalProperties
### Properties
* **principalId**: string (Required)
* **principalName**: string (ReadOnly)
* **principalType**: 'App' | 'Group' | 'User' (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded' (ReadOnly)
* **role**: 'AllDatabasesAdmin' | 'AllDatabasesViewer' (Required)
* **tenantId**: string
* **tenantName**: string (ReadOnly)

## FollowerDatabaseListResult
### Properties
* **value**: FollowerDatabaseDefinition[] (ReadOnly)

## FollowerDatabaseDefinition
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly)
* **clusterResourceId**: string (ReadOnly)
* **databaseName**: string (ReadOnly)

## DatabasePrincipalListResult
### Properties
* **value**: DatabasePrincipal[] (ReadOnly)

## DatabasePrincipal
### Properties
* **appId**: string (ReadOnly)
* **email**: string (ReadOnly)
* **fqn**: string (ReadOnly)
* **name**: string (ReadOnly)
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' (ReadOnly)
* **tenantName**: string (ReadOnly)
* **type**: 'App' | 'Group' | 'User' (ReadOnly)

