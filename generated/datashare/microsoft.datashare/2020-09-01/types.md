# Microsoft.DataShare @ 2020-09-01

## Resource Microsoft.DataShare/accounts@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (Required)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [AccountProperties](#accountproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [DefaultDtoTags](#defaultdtotags)
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ShareProperties](#shareproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/dataSets@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shares/dataSets' (ReadOnly, DeployTimeConstant)
### AdlsGen1FileDataSet
#### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: [AdlsGen1FileProperties](#adlsgen1fileproperties) (Required)

### AdlsGen1FolderDataSet
#### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: [AdlsGen1FolderProperties](#adlsgen1folderproperties) (Required)

### AdlsGen2FileDataSet
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [AdlsGen2FileProperties](#adlsgen2fileproperties) (Required)

### AdlsGen2FileSystemDataSet
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [AdlsGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required)

### AdlsGen2FolderDataSet
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [AdlsGen2FolderProperties](#adlsgen2folderproperties) (Required)

### BlobDataSet
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobProperties](#blobproperties) (Required)

### BlobFolderDataSet
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required)

### BlobContainerDataSet
#### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required)

### KustoClusterDataSet
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required)

### KustoDatabaseDataSet
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required)

### SqlDBTableDataSet
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableProperties](#sqldbtableproperties)

### SqlDWTableDataSet
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableProperties](#sqldwtableproperties)

### SynapseWorkspaceSqlPoolTableDataSet
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required)
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required)


## Resource Microsoft.DataShare/accounts/shares/invitations@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InvitationProperties](#invitationproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/synchronizationSettings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant)
### ScheduledSynchronizationSetting
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required)


## Resource Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ShareSubscriptionProperties](#sharesubscriptionproperties) (Required)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings' (ReadOnly, DeployTimeConstant)
### AdlsGen2FileDataSetMapping
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [AdlsGen2FileDataSetMappingProperties](#adlsgen2filedatasetmappingproperties) (Required)

### AdlsGen2FileSystemDataSetMapping
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [AdlsGen2FileSystemDataSetMappingProperties](#adlsgen2filesystemdatasetmappingproperties) (Required)

### AdlsGen2FolderDataSetMapping
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [AdlsGen2FolderDataSetMappingProperties](#adlsgen2folderdatasetmappingproperties) (Required)

### BlobDataSetMapping
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobMappingProperties](#blobmappingproperties) (Required)

### BlobFolderDataSetMapping
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderMappingProperties](#blobfoldermappingproperties) (Required)

### BlobContainerDataSetMapping
#### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerMappingProperties](#blobcontainermappingproperties) (Required)

### KustoClusterDataSetMapping
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetMappingProperties](#kustoclusterdatasetmappingproperties) (Required)

### KustoDatabaseDataSetMapping
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetMappingProperties](#kustodatabasedatasetmappingproperties) (Required)

### SqlDBTableDataSetMapping
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableDataSetMappingProperties](#sqldbtabledatasetmappingproperties) (Required)

### SqlDWTableDataSetMapping
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableDataSetMappingProperties](#sqldwtabledatasetmappingproperties) (Required)

### SynapseWorkspaceSqlPoolTableDataSetMapping
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required)
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetMappingProperties](#synapseworkspacesqlpooltabledatasetmappingproperties) (Required)


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant)
### ScheduledTrigger
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: [ScheduledTriggerProperties](#scheduledtriggerproperties) (Required)


## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'SystemAssigned'

## AccountProperties
### Properties
* **createdAt**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User'

## DefaultDtoTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShareProperties
### Properties
* **createdAt**: string (ReadOnly)
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **shareKind**: 'CopyBased' | 'InPlace'
* **terms**: string
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## AdlsGen1FileDataSet
### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: [AdlsGen1FileProperties](#adlsgen1fileproperties) (Required)

## AdlsGen1FileProperties
### Properties
* **accountName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **fileName**: string (Required)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen1FolderDataSet
### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: [AdlsGen1FolderProperties](#adlsgen1folderproperties) (Required)

## AdlsGen1FolderProperties
### Properties
* **accountName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FileDataSet
### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [AdlsGen2FileProperties](#adlsgen2fileproperties) (Required)

## AdlsGen2FileProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **filePath**: string (Required)
* **fileSystem**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FileSystemDataSet
### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [AdlsGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required)

## AdlsGen2FileSystemProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **fileSystem**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FolderDataSet
### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [AdlsGen2FolderProperties](#adlsgen2folderproperties) (Required)

## AdlsGen2FolderProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **fileSystem**: string (Required)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobDataSet
### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobProperties](#blobproperties) (Required)

## BlobProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **filePath**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobFolderDataSet
### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required)

## BlobFolderProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **prefix**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobContainerDataSet
### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required)

## BlobContainerProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## KustoClusterDataSet
### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required)

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## KustoDatabaseDataSet
### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required)

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoDatabaseResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## SqlDBTableDataSet
### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableProperties](#sqldbtableproperties)

## SqlDBTableProperties
### Properties
* **databaseName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## SqlDWTableDataSet
### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableProperties](#sqldwtableproperties)

## SqlDWTableProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **dataWarehouseName**: string (Required)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## SynapseWorkspaceSqlPoolTableDataSet
### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required)
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required)

## SynapseWorkspaceSqlPoolTableDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **synapseWorkspaceSqlPoolTableResourceId**: string (Required)

## InvitationProperties
### Properties
* **expirationDate**: string
* **invitationId**: string (ReadOnly)
* **invitationStatus**: 'Accepted' | 'Pending' | 'Rejected' | 'Withdrawn' (ReadOnly)
* **respondedAt**: string (ReadOnly)
* **sentAt**: string (ReadOnly)
* **targetActiveDirectoryId**: string
* **targetEmail**: string
* **targetObjectId**: string
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## ScheduledSynchronizationSetting
### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required)

## ScheduledSynchronizationSettingProperties
### Properties
* **createdAt**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **recurrenceInterval**: 'Day' | 'Hour' (Required)
* **synchronizationTime**: string (Required)
* **userName**: string (ReadOnly)

## ShareSubscriptionProperties
### Properties
* **createdAt**: string (ReadOnly)
* **expirationDate**: string
* **invitationId**: string (Required)
* **providerEmail**: string (ReadOnly)
* **providerName**: string (ReadOnly)
* **providerTenantName**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **shareDescription**: string (ReadOnly)
* **shareKind**: 'CopyBased' | 'InPlace' (ReadOnly)
* **shareName**: string (ReadOnly)
* **shareSubscriptionStatus**: 'Active' | 'Revoked' | 'Revoking' | 'SourceDeleted' (ReadOnly)
* **shareTerms**: string (ReadOnly)
* **sourceShareLocation**: string (Required)
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## AdlsGen2FileDataSetMapping
### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [AdlsGen2FileDataSetMappingProperties](#adlsgen2filedatasetmappingproperties) (Required)

## AdlsGen2FileDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **filePath**: string (Required)
* **fileSystem**: string (Required)
* **outputType**: 'Csv' | 'Parquet'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FileSystemDataSetMapping
### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [AdlsGen2FileSystemDataSetMappingProperties](#adlsgen2filesystemdatasetmappingproperties) (Required)

## AdlsGen2FileSystemDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **fileSystem**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FolderDataSetMapping
### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [AdlsGen2FolderDataSetMappingProperties](#adlsgen2folderdatasetmappingproperties) (Required)

## AdlsGen2FolderDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **fileSystem**: string (Required)
* **folderPath**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobDataSetMapping
### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobMappingProperties](#blobmappingproperties) (Required)

## BlobMappingProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **filePath**: string (Required)
* **outputType**: 'Csv' | 'Parquet'
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobFolderDataSetMapping
### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderMappingProperties](#blobfoldermappingproperties) (Required)

## BlobFolderMappingProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **prefix**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## BlobContainerDataSetMapping
### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerMappingProperties](#blobcontainermappingproperties) (Required)

## BlobContainerMappingProperties
### Properties
* **containerName**: string (Required)
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## KustoClusterDataSetMapping
### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetMappingProperties](#kustoclusterdatasetmappingproperties) (Required)

## KustoClusterDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## KustoDatabaseDataSetMapping
### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetMappingProperties](#kustodatabasedatasetmappingproperties) (Required)

## KustoDatabaseDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## SqlDBTableDataSetMapping
### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableDataSetMappingProperties](#sqldbtabledatasetmappingproperties) (Required)

## SqlDBTableDataSetMappingProperties
### Properties
* **databaseName**: string (Required)
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## SqlDWTableDataSetMapping
### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableDataSetMappingProperties](#sqldwtabledatasetmappingproperties) (Required)

## SqlDWTableDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **dataWarehouseName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## SynapseWorkspaceSqlPoolTableDataSetMapping
### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required)
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetMappingProperties](#synapseworkspacesqlpooltabledatasetmappingproperties) (Required)

## SynapseWorkspaceSqlPoolTableDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **synapseWorkspaceSqlPoolTableResourceId**: string (Required)

## ScheduledTrigger
### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: [ScheduledTriggerProperties](#scheduledtriggerproperties) (Required)

## ScheduledTriggerProperties
### Properties
* **createdAt**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **recurrenceInterval**: 'Day' | 'Hour' (Required)
* **synchronizationMode**: 'FullSync' | 'Incremental'
* **synchronizationTime**: string (Required)
* **triggerStatus**: 'Active' | 'Inactive' | 'SourceSynchronizationSettingDeleted' (ReadOnly)
* **userName**: string (ReadOnly)

