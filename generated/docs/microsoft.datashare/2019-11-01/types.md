# Microsoft.DataShare @ 2019-11-01

## Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
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
* **dataSetId**: string (ReadOnly)
* **databaseName**: string (Required)
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

## Microsoft.DataShare/accounts/shareSubscriptions/triggers
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant)
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


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

## Microsoft.DataShare/accounts/shareSubscriptions
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareSubscriptionProperties (Required)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant)

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
* **sourceShareLocation**: string (Required)
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## Microsoft.DataShare/accounts/shares/dataSets
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
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

## Microsoft.DataShare/accounts/shares/invitations
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InvitationProperties
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant)

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

## Microsoft.DataShare/accounts/shares/synchronizationSettings
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant)
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: ScheduledSynchronizationSettingProperties (Required)


## Microsoft.DataShare/accounts/shares
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ShareProperties
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant)

## ShareProperties
### Properties
* **createdAt**: string (ReadOnly)
* **description**: string
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)
* **shareKind**: 'CopyBased' | 'InPlace'
* **terms**: string
* **userEmail**: string (ReadOnly)
* **userName**: string (ReadOnly)

## Microsoft.DataShare/accounts
### Properties
* **apiVersion**: '2019-11-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (Required)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: AccountProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant)

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
### Additional Properties
* **Additional Properties Type**: string

