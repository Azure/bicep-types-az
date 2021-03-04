# Microsoft.DataShare @ 2018-11-01-preview

## Resource Microsoft.DataShare/accounts@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: DefaultDtoTags
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shareSubscriptions@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareSubscriptionProperties (Required)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings' (ReadOnly, DeployTimeConstant)
### AdlsGen2FileDataSetMapping
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: AdlsGen2FileDataSetMappingProperties (Required)

### AdlsGen2FileSystemDataSetMapping
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: AdlsGen2FileSystemDataSetMappingProperties (Required)

### AdlsGen2FolderDataSetMapping
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: AdlsGen2FolderDataSetMappingProperties (Required)

### BlobDataSetMapping
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: BlobMappingProperties (Required)

### BlobFolderDataSetMapping
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: BlobFolderMappingProperties (Required)

### BlobContainerDataSetMapping
#### Properties
* **kind**: 'Container' (Required)
* **properties**: BlobContainerMappingProperties (Required)

### KustoClusterDataSetMapping
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: KustoClusterDataSetMappingProperties (Required)

### KustoDatabaseDataSetMapping
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetMappingProperties (Required)

### SqlDBTableDataSetMapping
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: SqlDBTableDataSetMappingProperties (Required)

### SqlDWTableDataSetMapping
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: SqlDWTableDataSetMappingProperties (Required)


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant)
### ScheduledTrigger
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledTriggerProperties (Required)


## Resource Microsoft.DataShare/accounts/shares@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareProperties
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/dataSets@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shares/dataSets' (ReadOnly, DeployTimeConstant)
### AdlsGen1FileDataSet
#### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: AdlsGen1FileProperties (Required)

### AdlsGen1FolderDataSet
#### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: AdlsGen1FolderProperties (Required)

### AdlsGen2FileDataSet
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: AdlsGen2FileProperties (Required)

### AdlsGen2FileSystemDataSet
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: AdlsGen2FileSystemProperties (Required)

### AdlsGen2FolderDataSet
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: AdlsGen2FolderProperties (Required)

### BlobDataSet
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: BlobProperties (Required)

### BlobFolderDataSet
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: BlobFolderProperties (Required)

### BlobContainerDataSet
#### Properties
* **kind**: 'Container' (Required)
* **properties**: BlobContainerProperties (Required)

### KustoClusterDataSet
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: KustoClusterDataSetProperties (Required)

### KustoDatabaseDataSet
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetProperties (Required)

### SqlDBTableDataSet
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: SqlDBTableProperties

### SqlDWTableDataSet
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: SqlDWTableProperties


## Resource Microsoft.DataShare/accounts/shares/invitations@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InvitationProperties
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/synchronizationSettings@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant)
### ScheduledSynchronizationSetting
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


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

## DefaultDtoTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShareSubscriptionProperties
### Properties
* **createdAt**: string (ReadOnly)
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
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## AdlsGen2FileDataSetMapping
### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: AdlsGen2FileDataSetMappingProperties (Required)

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
* **properties**: AdlsGen2FileSystemDataSetMappingProperties (Required)

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
* **properties**: AdlsGen2FolderDataSetMappingProperties (Required)

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
* **properties**: BlobMappingProperties (Required)

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
* **properties**: BlobFolderMappingProperties (Required)

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
* **properties**: BlobContainerMappingProperties (Required)

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
* **properties**: KustoClusterDataSetMappingProperties (Required)

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
* **properties**: KustoDatabaseDataSetMappingProperties (Required)

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
* **properties**: SqlDBTableDataSetMappingProperties (Required)

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
* **properties**: SqlDWTableDataSetMappingProperties (Required)

## SqlDWTableDataSetMappingProperties
### Properties
* **dataSetId**: string (Required)
* **dataSetMappingStatus**: 'Broken' | 'Ok' (ReadOnly)
* **dataWarehouseName**: string (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## ScheduledTrigger
### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledTriggerProperties (Required)

## ScheduledTriggerProperties
### Properties
* **createdAt**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **recurrenceInterval**: 'Day' | 'Hour' (Required)
* **synchronizationMode**: 'FullSync' | 'Incremental'
* **synchronizationTime**: string (Required)
* **triggerStatus**: 'Active' | 'Inactive' | 'SourceSynchronizationSettingDeleted' (ReadOnly)
* **userName**: string (ReadOnly)

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
* **properties**: AdlsGen1FileProperties (Required)

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
* **properties**: AdlsGen1FolderProperties (Required)

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
* **properties**: AdlsGen2FileProperties (Required)

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
* **properties**: AdlsGen2FileSystemProperties (Required)

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
* **properties**: AdlsGen2FolderProperties (Required)

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
* **properties**: BlobProperties (Required)

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
* **properties**: BlobFolderProperties (Required)

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
* **properties**: BlobContainerProperties (Required)

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
* **properties**: KustoClusterDataSetProperties (Required)

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## KustoDatabaseDataSet
### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetProperties (Required)

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoDatabaseResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## SqlDBTableDataSet
### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: SqlDBTableProperties

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
* **properties**: SqlDWTableProperties

## SqlDWTableProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **dataWarehouseName**: string (Required)
* **schemaName**: string (Required)
* **sqlServerResourceId**: string (Required)
* **tableName**: string (Required)

## InvitationProperties
### Properties
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
* **properties**: ScheduledSynchronizationSettingProperties (Required)

## ScheduledSynchronizationSettingProperties
### Properties
* **createdAt**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **recurrenceInterval**: 'Day' | 'Hour' (Required)
* **synchronizationTime**: string (Required)
* **userName**: string (ReadOnly)

