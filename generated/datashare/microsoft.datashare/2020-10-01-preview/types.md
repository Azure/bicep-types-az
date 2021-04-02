# Microsoft.DataShare @ 2020-10-01-preview

## Resource Microsoft.DataShare/accounts@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (Required): Identity of resource
* **location**: string: Location of the azure resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): Account property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Tags on the azure resource.
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareProperties](#shareproperties): Share property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares/dataSets@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shares/dataSets' (ReadOnly, DeployTimeConstant): The resource type
### AdlsGen1File
#### Properties
* **kind**: 'AdlsGen1File' (Required): An ADLS Gen 1 file data set.
* **properties**: [ADLSGen1FileProperties](#adlsgen1fileproperties) (Required): Properties of the ADLS Gen1 file data set.

### AdlsGen1Folder
#### Properties
* **kind**: 'AdlsGen1Folder' (Required): An ADLS Gen 1 folder data set.
* **properties**: [ADLSGen1FolderProperties](#adlsgen1folderproperties) (Required): Properties of the ADLS Gen1 folder data set.

### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required): An ADLS Gen2 file data set mapping.
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required): Properties of the ADLS Gen2 file data set.

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required): An ADLS Gen2 file system data set mapping.
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required): Properties of the ADLS Gen2 file system data set.

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required): An ADLS Gen2 folder data set mapping.
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required): Properties of the ADLS Gen2 folder data set.

### Blob
#### Properties
* **kind**: 'Blob' (Required): A Blob data set mapping.
* **properties**: [BlobProperties](#blobproperties) (Required): Properties of the blob data set.

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required): A Blob folder data set mapping.
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required): Properties of the blob folder data set.

### Container
#### Properties
* **kind**: 'Container' (Required): A Blob container data set mapping.
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required): Properties of the BLOB container data set.

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required): A Kusto cluster data set mapping
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required): Properties of the kusto cluster data set.

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required): A Kusto database data set mapping
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required): Properties of the kusto database data set.

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required): A SQL DB Table data set mapping.
* **properties**: [SqlDBTableProperties](#sqldbtableproperties): Properties of the SQL DB table data set.

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required): A SQL DW Table data set mapping.
* **properties**: [SqlDWTableProperties](#sqldwtableproperties): Properties of the SQL DW table data set.

### StorageAccount
#### Properties
* **kind**: 'StorageAccount' (Required): A storage account data set mapping.
* **properties**: [StorageAccountDataSetProperties](#storageaccountdatasetproperties) (Required): Properties of the storage account data set.

### SynapseWorkspaceSqlPoolTable
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required): A Synapse Workspace Sql Pool Table data set mapping
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required): Properties of the Synapse Workspace SQL Pool Table data set.


## Resource Microsoft.DataShare/accounts/shares/invitations@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvitationProperties](#invitationproperties): Invitation property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares/synchronizationSettings@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant): The resource type
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required): A type of trigger based on schedule
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required): A Scheduled synchronization setting data transfer object.


## Resource Microsoft.DataShare/accounts/shareSubscriptions@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareSubscriptionProperties](#sharesubscriptionproperties) (Required): Share subscription property bag.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings' (ReadOnly, DeployTimeConstant): The resource type
### AdlsGen2File
#### Properties
* **kind**: 'AdlsGen2File' (Required): An ADLS Gen2 file data set mapping.
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required): Properties of the ADLS Gen2 file data set.

### AdlsGen2FileSystem
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required): An ADLS Gen2 file system data set mapping.
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required): Properties of the ADLS Gen2 file system data set.

### AdlsGen2Folder
#### Properties
* **kind**: 'AdlsGen2Folder' (Required): An ADLS Gen2 folder data set mapping.
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required): Properties of the ADLS Gen2 folder data set.

### Blob
#### Properties
* **kind**: 'Blob' (Required): A Blob data set mapping.
* **properties**: [BlobProperties](#blobproperties) (Required): Properties of the blob data set.

### BlobFolder
#### Properties
* **kind**: 'BlobFolder' (Required): A Blob folder data set mapping.
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required): Properties of the blob folder data set.

### Container
#### Properties
* **kind**: 'Container' (Required): A Blob container data set mapping.
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required): Properties of the BLOB container data set.

### KustoCluster
#### Properties
* **kind**: 'KustoCluster' (Required): A Kusto cluster data set mapping
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required): Properties of the kusto cluster data set.

### KustoDatabase
#### Properties
* **kind**: 'KustoDatabase' (Required): A Kusto database data set mapping
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required): Properties of the kusto database data set.

### SqlDBTable
#### Properties
* **kind**: 'SqlDBTable' (Required): A SQL DB Table data set mapping.
* **properties**: [SqlDBTableProperties](#sqldbtableproperties): Properties of the SQL DB table data set.

### SqlDWTable
#### Properties
* **kind**: 'SqlDWTable' (Required): A SQL DW Table data set mapping.
* **properties**: [SqlDWTableProperties](#sqldwtableproperties): Properties of the SQL DW table data set.

### StorageAccount
#### Properties
* **kind**: 'StorageAccount' (Required): A storage account data set mapping.
* **properties**: [StorageAccountDataSetProperties](#storageaccountdatasetproperties) (Required): Properties of the storage account data set.

### SynapseWorkspaceSqlPoolTable
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required): A Synapse Workspace Sql Pool Table data set mapping
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required): Properties of the Synapse Workspace SQL Pool Table data set.


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2020-10-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: kind
### Base Properties
* **apiVersion**: '2020-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant): The resource type
### ScheduleBased
#### Properties
* **kind**: 'ScheduleBased' (Required): A type of trigger based on schedule
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required): A Scheduled synchronization setting data transfer object.


## Identity
### Properties
* **principalId**: string (ReadOnly): service principal Id
* **tenantId**: string (ReadOnly): Tenant Id
* **type**: 'SystemAssigned': Identity Type. Possible values include: 'SystemAssigned'

## AccountProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the account was created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Provisioning state of the Account. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that last modified the resource. Possible values include: 'User', 'Application', 'ManagedIdentity', 'Key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ShareProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the share was created.
* **description**: string: Share description.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Gets or sets the provisioning state. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'
* **shareKind**: 'CopyBased' | 'InPlace': Share kind. Possible values include: 'CopyBased', 'InPlace'
* **terms**: string: Share terms.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## AdlsGen1File
### Properties
* **kind**: 'AdlsGen1File' (Required): An ADLS Gen 1 file data set.
* **properties**: [ADLSGen1FileProperties](#adlsgen1fileproperties) (Required): Properties of the ADLS Gen1 file data set.

## ADLSGen1FileProperties
### Properties
* **accountName**: string (Required): The ADLS account name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileName**: string (Required): The file name in the ADLS account.
* **folderPath**: string (Required): The folder path within the ADLS account.
* **resourceGroup**: string (Required): Resource group of ADLS account.
* **subscriptionId**: string (Required): Subscription id of ADLS account.

## AdlsGen1Folder
### Properties
* **kind**: 'AdlsGen1Folder' (Required): An ADLS Gen 1 folder data set.
* **properties**: [ADLSGen1FolderProperties](#adlsgen1folderproperties) (Required): Properties of the ADLS Gen1 folder data set.

## ADLSGen1FolderProperties
### Properties
* **accountName**: string (Required): The ADLS account name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **folderPath**: string (Required): The folder path within the ADLS account.
* **resourceGroup**: string (Required): Resource group of ADLS account.
* **subscriptionId**: string (Required): Subscription id of ADLS account.

## AdlsGen2File
### Properties
* **kind**: 'AdlsGen2File' (Required): An ADLS Gen2 file data set mapping.
* **properties**: [ADLSGen2FileProperties](#adlsgen2fileproperties) (Required): Properties of the ADLS Gen2 file data set.

## ADLSGen2FileProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **filePath**: string (Required): File path within the file system.
* **fileSystem**: string (Required): File system to which the file belongs.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## AdlsGen2FileSystem
### Properties
* **kind**: 'AdlsGen2FileSystem' (Required): An ADLS Gen2 file system data set mapping.
* **properties**: [ADLSGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required): Properties of the ADLS Gen2 file system data set.

## ADLSGen2FileSystemProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileSystem**: string (Required): The file system name.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## AdlsGen2Folder
### Properties
* **kind**: 'AdlsGen2Folder' (Required): An ADLS Gen2 folder data set mapping.
* **properties**: [ADLSGen2FolderProperties](#adlsgen2folderproperties) (Required): Properties of the ADLS Gen2 folder data set.

## ADLSGen2FolderProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileSystem**: string (Required): File system to which the folder belongs.
* **folderPath**: string (Required): Folder path within the file system.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## Blob
### Properties
* **kind**: 'Blob' (Required): A Blob data set mapping.
* **properties**: [BlobProperties](#blobproperties) (Required): Properties of the blob data set.

## BlobProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **filePath**: string (Required): File path within the source data set
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## BlobFolder
### Properties
* **kind**: 'BlobFolder' (Required): A Blob folder data set mapping.
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required): Properties of the blob folder data set.

## BlobFolderProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **prefix**: string (Required): Prefix for blob folder
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## Container
### Properties
* **kind**: 'Container' (Required): A Blob container data set mapping.
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required): Properties of the BLOB container data set.

## BlobContainerProperties
### Properties
* **containerName**: string (Required): BLOB Container name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## KustoCluster
### Properties
* **kind**: 'KustoCluster' (Required): A Kusto cluster data set mapping
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required): Properties of the kusto cluster data set.

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **kustoClusterResourceId**: string (Required): Resource id of the kusto cluster.
* **location**: string (ReadOnly): Location of the kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Provisioning state of the kusto cluster data set. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'

## KustoDatabase
### Properties
* **kind**: 'KustoDatabase' (Required): A Kusto database data set mapping
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required): Properties of the kusto database data set.

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **kustoDatabaseResourceId**: string (Required): Resource id of the kusto database.
* **location**: string (ReadOnly): Location of the kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Provisioning state of the kusto database data set. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'

## SqlDBTable
### Properties
* **kind**: 'SqlDBTable' (Required): A SQL DB Table data set mapping.
* **properties**: [SqlDBTableProperties](#sqldbtableproperties): Properties of the SQL DB table data set.

## SqlDBTableProperties
### Properties
* **databaseName**: string (Required): Database name of the source data set
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DB table name.

## SqlDWTable
### Properties
* **kind**: 'SqlDWTable' (Required): A SQL DW Table data set mapping.
* **properties**: [SqlDWTableProperties](#sqldwtableproperties): Properties of the SQL DW table data set.

## SqlDWTableProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **dataWarehouseName**: string (Required): DataWarehouse name of the source data set
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DW table name.

## StorageAccount
### Properties
* **kind**: 'StorageAccount' (Required): A storage account data set mapping.
* **properties**: [StorageAccountDataSetProperties](#storageaccountdatasetproperties) (Required): Properties of the storage account data set.

## StorageAccountDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **location**: string (ReadOnly): Location of the storage account.
* **paths**: [StorageAccountPath](#storageaccountpath)[] (Required): A list of storage account paths.
* **storageAccountResourceId**: string (Required): Resource id of the storage account.

## StorageAccountPath
### Properties
* **consumerPath**: string: Gets or sets the path on the consumer side where the dataset is to be mapped.
* **containerName**: string (Required): Gets or sets the container name to share.
* **providerPath**: string: Gets or sets the path to file/folder within the container.

## SynapseWorkspaceSqlPoolTable
### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required): A Synapse Workspace Sql Pool Table data set mapping
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required): Properties of the Synapse Workspace SQL Pool Table data set.

## SynapseWorkspaceSqlPoolTableDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **synapseWorkspaceSqlPoolTableResourceId**: string (Required): Resource id of the Synapse Workspace SQL Pool Table

## InvitationProperties
### Properties
* **expirationDate**: string: The expiration date for the invitation and share subscription.
* **invitationId**: string (ReadOnly): unique invitation id
* **invitationStatus**: 'Accepted' | 'Pending' | 'Rejected' | 'Withdrawn' (ReadOnly): The status of the invitation. Possible values include: 'Pending', 'Accepted', 'Rejected', 'Withdrawn'
* **respondedAt**: string (ReadOnly): The time the recipient responded to the invitation.
* **sentAt**: string (ReadOnly): Gets the time at which the invitation was sent.
* **targetActiveDirectoryId**: string: The target Azure AD Id. Can't be combined with email.
* **targetEmail**: string: The email the invitation is directed to.
* **targetObjectId**: string: The target user or application Id that invitation is being sent to.
Must be specified along TargetActiveDirectoryId. This enables sending
invitations to specific users or applications in an AD tenant.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## ScheduleBased
### Properties
* **kind**: 'ScheduleBased' (Required): A type of trigger based on schedule
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required): A Scheduled synchronization setting data transfer object.

## ScheduledSynchronizationSettingProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the synchronization setting was created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Gets or sets the provisioning state. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'
* **recurrenceInterval**: 'Day' | 'Hour' (Required): Recurrence Interval. Possible values include: 'Hour', 'Day'
* **synchronizationTime**: string (Required): Synchronization time
* **userName**: string (ReadOnly): Name of the user who created the synchronization setting.

## ShareSubscriptionProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the share subscription was created.
* **expirationDate**: string: The expiration date of the share subscription.
* **invitationId**: string (Required): The invitation id.
* **providerEmail**: string (ReadOnly): Email of the provider who created the resource
* **providerName**: string (ReadOnly): Name of the provider who created the resource
* **providerTenantName**: string (ReadOnly): Tenant name of the provider who created the resource
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' (ReadOnly): Provisioning state of the share subscription. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Moving', 'Failed'
* **shareDescription**: string (ReadOnly): Description of share
* **shareKind**: 'CopyBased' | 'InPlace' (ReadOnly): Kind of share. Possible values include: 'CopyBased', 'InPlace'
* **shareName**: string (ReadOnly): Name of the share
* **shareSubscriptionStatus**: 'Active' | 'Revoked' | 'Revoking' | 'SourceDeleted' (ReadOnly): Gets the current status of share subscription. Possible values include: 'Active', 'Revoked', 'SourceDeleted', 'Revoking'
* **shareTerms**: string (ReadOnly): Terms of a share
* **sourceShareLocation**: string (Required): Source share location.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

