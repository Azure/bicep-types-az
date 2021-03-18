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
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
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
### AdlsGen1File
#### Properties
* **kind**: 'AdlsGen1File' (Required)
* **properties**: [ADLSGen1FileProperties](#adlsgen1fileproperties) (Required)

### AdlsGen1Folder
#### Properties
* **kind**: 'AdlsGen1Folder' (Required)
* **properties**: [ADLSGen1FolderProperties](#adlsgen1folderproperties) (Required)

### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required)

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required)

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required)

### Blob
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobProperties](#blobproperties) (Required)

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required)

### Container
#### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required)

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required)

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required)

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableProperties](#sqldbtableproperties)

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableProperties](#sqldwtableproperties)

### SynapseWorkspaceSqlPoolTable
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
### ScheduleBased
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
### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required)
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required)

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required)
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required)

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required)
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required)

### Blob
#### Properties
* **kind**: 'Blob' (Required)
* **properties**: [BlobProperties](#blobproperties) (Required)

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required)
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required)

### Container
#### Properties
* **kind**: 'Container' (Required)
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required)

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required)
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required)

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required)

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required)
* **properties**: [SqlDBTableProperties](#sqldbtableproperties)

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required)
* **properties**: [SqlDWTableProperties](#sqldwtableproperties)

### SynapseWorkspaceSqlPoolTable
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required)
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required)


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2020-09-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant)
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required)
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required)


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
* **properties**: [ADLSGen1FileProperties](#adlsgen1fileproperties) (Required)

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
* **properties**: [ADLSGen1FolderProperties](#adlsgen1folderproperties) (Required)

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
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required)

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
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required)

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
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required)

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
* **properties**: [BlobProperties](#blobproperties) (Required)

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
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required)

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
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required)

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
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required)

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoClusterResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## KustoDatabase
### Properties
* **kind**: 'KustoDatabase' (Required)
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required)

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly)
* **kustoDatabaseResourceId**: string (Required)
* **location**: string (ReadOnly)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly)

## SqlDBTable
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

## SqlDWTable
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

## SynapseWorkspaceSqlPoolTable
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

## ScheduleBased
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

