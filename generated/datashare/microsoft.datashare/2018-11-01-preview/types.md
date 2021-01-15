# Microsoft.DataShare @ 2018-11-01-preview

## Resource Microsoft.DataShare/accounts@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareProperties
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/dataSets@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shares/dataSets' (ReadOnly, DeployTimeConstant)
### AdlsGen1File
#### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: ADLSGen1FileProperties (Required)

### AdlsGen1Folder
#### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: ADLSGen1FolderProperties (Required)

### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: ADLSGen2FileProperties (Required)

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: ADLSGen2FileSystemProperties (Required)

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: ADLSGen2FolderProperties (Required)

### Blob
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: BlobProperties (Required)

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: BlobFolderProperties (Required)

### Container
#### Properties
* **kind**: 'Container' (Required)
* **properties**: BlobContainerProperties (Required)

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: KustoClusterDataSetProperties (Required)

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetProperties (Required)

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: SqlDBTableProperties

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: SqlDWTableProperties


## Resource Microsoft.DataShare/accounts/shares/invitations@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InvitationProperties
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shares/synchronizationSettings@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant)
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


## Resource Microsoft.DataShare/accounts/shareSubscriptions@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareSubscriptionProperties (Required)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings' (ReadOnly, DeployTimeConstant)
### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: ADLSGen2FileProperties (Required)

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: ADLSGen2FileSystemProperties (Required)

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: ADLSGen2FolderProperties (Required)

### Blob
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: BlobProperties (Required)

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: BlobFolderProperties (Required)

### Container
#### Properties
* **kind**: 'Container' (Required)
* **properties**: BlobContainerProperties (Required)

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: KustoClusterDataSetProperties (Required)

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetProperties (Required)

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: SqlDBTableProperties

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: SqlDWTableProperties


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2018-11-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant)
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


## Function listSourceShareSynchronizationSettings (Microsoft.DataShare/accounts/shareSubscriptions@2018-11-01-preview)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2018-11-01-preview
* **Output**: SourceShareSynchronizationSettingList

## Function listSynchronizationDetails (Microsoft.DataShare/accounts/shares@2018-11-01-preview)
* **Resource**: Microsoft.DataShare/accounts/shares
* **ApiVersion**: 2018-11-01-preview
* **Input**: ShareSynchronization
* **Output**: SynchronizationDetailsList

## Function listSynchronizationDetails (Microsoft.DataShare/accounts/shareSubscriptions@2018-11-01-preview)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2018-11-01-preview
* **Input**: ShareSubscriptionSynchronization
* **Output**: SynchronizationDetailsList

## Function listSynchronizations (Microsoft.DataShare/accounts/shares@2018-11-01-preview)
* **Resource**: Microsoft.DataShare/accounts/shares
* **ApiVersion**: 2018-11-01-preview
* **Output**: ShareSynchronizationList

## Function listSynchronizations (Microsoft.DataShare/accounts/shareSubscriptions@2018-11-01-preview)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2018-11-01-preview
* **Output**: ShareSubscriptionSynchronizationList

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

## Dictionary<string,String>
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

## AdlsGen1File
### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: ADLSGen1FileProperties (Required)

## ADLSGen1FileProperties
### Properties
* **accountName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **fileName**: string (Required)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen1Folder
### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: ADLSGen1FolderProperties (Required)

## ADLSGen1FolderProperties
### Properties
* **accountName**: string (Required)
* **dataSetId**: string (ReadOnly)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2File
### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: ADLSGen2FileProperties (Required)

## ADLSGen2FileProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **filePath**: string (Required)
* **fileSystem**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2FileSystem
### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: ADLSGen2FileSystemProperties (Required)

## ADLSGen2FileSystemProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **fileSystem**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## AdlsGen2Folder
### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: ADLSGen2FolderProperties (Required)

## ADLSGen2FolderProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **fileSystem**: string (Required)
* **folderPath**: string (Required)
* **resourceGroup**: string (Required)
* **storageAccountName**: string (Required)
* **subscriptionId**: string (Required)

## Blob
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

## BlobFolder
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

## Container
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

## KustoCluster
### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: KustoClusterDataSetProperties (Required)

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## KustoDatabase
### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: KustoDatabaseDataSetProperties (Required)

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoDatabaseResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## SqlDBTable
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

## SqlDWTable
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

## ScheduleBased
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

## SourceShareSynchronizationSettingList
### Properties
* **nextLink**: string (ReadOnly)
* **value**: SourceShareSynchronizationSetting[] (ReadOnly)

## SourceShareSynchronizationSetting
* **Discriminator**: kind
### Base Properties
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


## ShareSynchronization
### Properties
* **consumerEmail**: string (WriteOnly)
* **consumerName**: string (WriteOnly)
* **consumerTenantName**: string (WriteOnly)
* **durationMs**: int (WriteOnly)
* **endTime**: string (WriteOnly)
* **message**: string (WriteOnly)
* **startTime**: string (WriteOnly)
* **status**: string (WriteOnly)
* **synchronizationId**: string (WriteOnly)
* **synchronizationMode**: 'FullSync' | 'Incremental' (ReadOnly, WriteOnly)

## SynchronizationDetailsList
### Properties
* **nextLink**: string (ReadOnly)
* **value**: SynchronizationDetails[] (ReadOnly)

## SynchronizationDetails
### Properties
* **dataSetId**: string (ReadOnly)
* **dataSetType**: 'AdlsGen1File' | 'AdlsGen1Folder' | 'AdlsGen2File' | 'AdlsGen2FileSystem' | 'AdlsGen2Folder' | 'Blob' | 'BlobFolder' | 'Container' | 'KustoCluster' | 'KustoDatabase' | 'SqlDBTable' | 'SqlDWTable' (ReadOnly)
* **durationMs**: int (ReadOnly)
* **endTime**: string (ReadOnly)
* **filesRead**: int (ReadOnly)
* **filesWritten**: int (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **rowsCopied**: int (ReadOnly)
* **rowsRead**: int (ReadOnly)
* **sizeRead**: int (ReadOnly)
* **sizeWritten**: int (ReadOnly)
* **startTime**: string (ReadOnly)
* **status**: string (ReadOnly)
* **vCore**: int (ReadOnly)

## ShareSubscriptionSynchronization
### Properties
* **durationMs**: int (ReadOnly, WriteOnly)
* **endTime**: string (ReadOnly, WriteOnly)
* **message**: string (ReadOnly, WriteOnly)
* **startTime**: string (ReadOnly, WriteOnly)
* **status**: string (ReadOnly, WriteOnly)
* **synchronizationId**: string (Required, WriteOnly)
* **synchronizationMode**: 'FullSync' | 'Incremental' (ReadOnly, WriteOnly)

## ShareSynchronizationList
### Properties
* **nextLink**: string (ReadOnly)
* **value**: ShareSynchronization[] (ReadOnly)

## ShareSubscriptionSynchronizationList
### Properties
* **nextLink**: string (ReadOnly)
* **value**: ShareSubscriptionSynchronization[] (ReadOnly)

