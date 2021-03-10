# Microsoft.Kusto @ 2020-09-18

## Resource Microsoft.Kusto/clusters@2020-09-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterProperties](#clusterproperties)
* **sku**: [AzureSku](#azuresku) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.Kusto/clusters' (ReadOnly, DeployTimeConstant)
* **zones**: string[]

## Resource Microsoft.Kusto/clusters/attachedDatabaseConfigurations@2020-09-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AttachedDatabaseConfigurationProperties](#attacheddatabaseconfigurationproperties)
* **type**: 'Microsoft.Kusto/clusters/attachedDatabaseConfigurations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/databases@2020-09-18
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Kusto/clusters/databases' (ReadOnly, DeployTimeConstant)
### ReadOnlyFollowing
#### Properties
* **kind**: 'ReadOnlyFollowing' (Required)
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties)

### ReadWrite
#### Properties
* **kind**: 'ReadWrite' (Required)
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties)


## Resource Microsoft.Kusto/clusters/databases/dataConnections@2020-09-18
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.Kusto/clusters/databases/dataConnections' (ReadOnly, DeployTimeConstant)
### EventGrid
#### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties)

### EventHub
#### Properties
* **kind**: 'EventHub' (Required)
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties)

### IotHub
#### Properties
* **kind**: 'IotHub' (Required)
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties)


## Resource Microsoft.Kusto/clusters/databases/principalAssignments@2020-09-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [DatabasePrincipalProperties](#databaseprincipalproperties)
* **type**: 'Microsoft.Kusto/clusters/databases/principalAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Kusto/clusters/principalAssignments@2020-09-18
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-18' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterPrincipalProperties](#clusterprincipalproperties)
* **type**: 'Microsoft.Kusto/clusters/principalAssignments' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned' (Required)
* **userAssignedIdentities**: [Dictionary<string,Schemas63UserAssignedIdentitiesValue>](#dictionarystringschemas63userassignedidentitiesvalue)

## Dictionary<string,Schemas63UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:63_userAssignedIdentitiesValue](#schemas63userassignedidentitiesvalue)

## schemas:63_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterProperties
### Properties
* **dataIngestionUri**: string (ReadOnly)
* **enableDiskEncryption**: bool
* **enableDoubleEncryption**: bool
* **enablePurge**: bool
* **enableStreamingIngest**: bool
* **engineType**: 'V2' | 'V3'
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties)
* **languageExtensions**: [LanguageExtensionsList](#languageextensionslist) (ReadOnly)
* **optimizedAutoscale**: [OptimizedAutoscale](#optimizedautoscale)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **state**: 'Creating' | 'Deleted' | 'Deleting' | 'Running' | 'Starting' | 'Stopped' | 'Stopping' | 'Unavailable' | 'Updating' (ReadOnly)
* **stateReason**: string (ReadOnly)
* **trustedExternalTenants**: [TrustedExternalTenant](#trustedexternaltenant)[]
* **uri**: string (ReadOnly)
* **virtualNetworkConfiguration**: [VirtualNetworkConfiguration](#virtualnetworkconfiguration)

## KeyVaultProperties
### Properties
* **keyName**: string (Required)
* **keyVaultUri**: string (Required)
* **keyVersion**: string
* **userIdentity**: string

## LanguageExtensionsList
### Properties
* **value**: [LanguageExtension](#languageextension)[]

## LanguageExtension
### Properties
* **languageExtensionName**: 'PYTHON' | 'R'

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
* **name**: 'Dev(No SLA)_Standard_D11_v2' | 'Dev(No SLA)_Standard_E2a_v4' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_DS13_v2+1TB_PS' | 'Standard_DS13_v2+2TB_PS' | 'Standard_DS14_v2+3TB_PS' | 'Standard_DS14_v2+4TB_PS' | 'Standard_E16a_v4' | 'Standard_E16as_v4+3TB_PS' | 'Standard_E16as_v4+4TB_PS' | 'Standard_E2a_v4' | 'Standard_E4a_v4' | 'Standard_E64i_v3' | 'Standard_E8a_v4' | 'Standard_E8as_v4+1TB_PS' | 'Standard_E8as_v4+2TB_PS' | 'Standard_L16s' | 'Standard_L4s' | 'Standard_L8s' (Required)
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
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'

## ReadOnlyFollowing
### Properties
* **kind**: 'ReadOnlyFollowing' (Required)
* **properties**: [ReadOnlyFollowingDatabaseProperties](#readonlyfollowingdatabaseproperties)

## ReadOnlyFollowingDatabaseProperties
### Properties
* **attachedDatabaseConfigurationName**: string (ReadOnly)
* **hotCachePeriod**: string
* **leaderClusterResourceId**: string (ReadOnly)
* **principalsModificationKind**: 'None' | 'Replace' | 'Union' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **softDeletePeriod**: string (ReadOnly)
* **statistics**: [DatabaseStatistics](#databasestatistics)

## DatabaseStatistics
### Properties
* **size**: int

## ReadWrite
### Properties
* **kind**: 'ReadWrite' (Required)
* **properties**: [ReadWriteDatabaseProperties](#readwritedatabaseproperties)

## ReadWriteDatabaseProperties
### Properties
* **hotCachePeriod**: string
* **isFollowed**: bool (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **softDeletePeriod**: string
* **statistics**: [DatabaseStatistics](#databasestatistics)

## EventGrid
### Properties
* **kind**: 'EventGrid' (Required)
* **properties**: [EventGridConnectionProperties](#eventgridconnectionproperties)

## EventGridConnectionProperties
### Properties
* **blobStorageEventType**: 'Microsoft.Storage.BlobCreated' | 'Microsoft.Storage.BlobRenamed'
* **consumerGroup**: string (Required)
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE'
* **eventHubResourceId**: string (Required)
* **ignoreFirstRecord**: bool
* **mappingRuleName**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **storageAccountResourceId**: string (Required)
* **tableName**: string

## EventHub
### Properties
* **kind**: 'EventHub' (Required)
* **properties**: [EventHubConnectionProperties](#eventhubconnectionproperties)

## EventHubConnectionProperties
### Properties
* **compression**: 'GZip' | 'None'
* **consumerGroup**: string (Required)
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE'
* **eventHubResourceId**: string (Required)
* **eventSystemProperties**: string[]
* **mappingRuleName**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **tableName**: string

## IotHub
### Properties
* **kind**: 'IotHub' (Required)
* **properties**: [IotHubConnectionProperties](#iothubconnectionproperties)

## IotHubConnectionProperties
### Properties
* **consumerGroup**: string (Required)
* **dataFormat**: 'APACHEAVRO' | 'AVRO' | 'CSV' | 'JSON' | 'MULTIJSON' | 'ORC' | 'PARQUET' | 'PSV' | 'RAW' | 'SCSV' | 'SINGLEJSON' | 'SOHSV' | 'TSV' | 'TSVE' | 'TXT' | 'W3CLOGFILE'
* **eventSystemProperties**: string[]
* **iotHubResourceId**: string (Required)
* **mappingRuleName**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **sharedAccessPolicyName**: string (Required)
* **tableName**: string

## DatabasePrincipalProperties
### Properties
* **principalId**: string (Required)
* **principalName**: string (ReadOnly)
* **principalType**: 'App' | 'Group' | 'User' (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **role**: 'Admin' | 'Ingestor' | 'Monitor' | 'UnrestrictedViewers' | 'User' | 'Viewer' (Required)
* **tenantId**: string
* **tenantName**: string (ReadOnly)

## ClusterPrincipalProperties
### Properties
* **principalId**: string (Required)
* **principalName**: string (ReadOnly)
* **principalType**: 'App' | 'Group' | 'User' (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Running' | 'Succeeded'
* **role**: 'AllDatabasesAdmin' | 'AllDatabasesViewer' (Required)
* **tenantId**: string
* **tenantName**: string (ReadOnly)

