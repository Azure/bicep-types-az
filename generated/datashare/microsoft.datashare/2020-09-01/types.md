# Microsoft.DataShare @ 2020-09-01

## Resource Microsoft.DataShare/accounts@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (Required): Identity Info on the Account
* **location**: string: Location of the azure resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AccountProperties](#accountproperties): Properties on the account
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **tags**: [DefaultDtoTags](#defaultdtotags): Tags on the azure resource.
* **type**: 'Microsoft.DataShare/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareProperties](#shareproperties): Properties on the share
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shares' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares/dataSets@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shares/dataSets' (ReadOnly, DeployTimeConstant): The resource type

### AdlsGen1FileDataSet
#### Properties
* **kind**: 'AdlsGen1File' (Required): Kind of data set.
* **properties**: [AdlsGen1FileProperties](#adlsgen1fileproperties) (Required): ADLS Gen 1 file data set properties.

### AdlsGen1FolderDataSet
#### Properties
* **kind**: 'AdlsGen1Folder' (Required): Kind of data set.
* **properties**: [AdlsGen1FolderProperties](#adlsgen1folderproperties) (Required): ADLS Gen 1 folder data set properties.

### AdlsGen2FileDataSet
#### Properties
* **kind**: 'AdlsGen2File' (Required): Kind of data set.
* **properties**: [AdlsGen2FileProperties](#adlsgen2fileproperties) (Required): ADLS Gen 2 file data set properties.

### AdlsGen2FileSystemDataSet
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required): Kind of data set.
* **properties**: [AdlsGen2FileSystemProperties](#adlsgen2filesystemproperties) (Required): ADLS Gen 2 file system data set properties.

### AdlsGen2FolderDataSet
#### Properties
* **kind**: 'AdlsGen2Folder' (Required): Kind of data set.
* **properties**: [AdlsGen2FolderProperties](#adlsgen2folderproperties) (Required): ADLS Gen 2 folder data set properties.

### BlobDataSet
#### Properties
* **kind**: 'Blob' (Required): Kind of data set.
* **properties**: [BlobProperties](#blobproperties) (Required): Blob data set properties.

### BlobFolderDataSet
#### Properties
* **kind**: 'BlobFolder' (Required): Kind of data set.
* **properties**: [BlobFolderProperties](#blobfolderproperties) (Required): Blob folder data set properties.

### BlobContainerDataSet
#### Properties
* **kind**: 'Container' (Required): Kind of data set.
* **properties**: [BlobContainerProperties](#blobcontainerproperties) (Required): Blob container data set properties.

### KustoClusterDataSet
#### Properties
* **kind**: 'KustoCluster' (Required): Kind of data set.
* **properties**: [KustoClusterDataSetProperties](#kustoclusterdatasetproperties) (Required): Kusto cluster data set properties.

### KustoDatabaseDataSet
#### Properties
* **kind**: 'KustoDatabase' (Required): Kind of data set.
* **properties**: [KustoDatabaseDataSetProperties](#kustodatabasedatasetproperties) (Required): Kusto database data set properties.

### SqlDBTableDataSet
#### Properties
* **kind**: 'SqlDBTable' (Required): Kind of data set.
* **properties**: [SqlDBTableProperties](#sqldbtableproperties): SQL DB table data set properties.

### SqlDWTableDataSet
#### Properties
* **kind**: 'SqlDWTable' (Required): Kind of data set.
* **properties**: [SqlDWTableProperties](#sqldwtableproperties): SQL DW table data set properties.

### SynapseWorkspaceSqlPoolTableDataSet
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required): Kind of data set.
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetProperties](#synapseworkspacesqlpooltabledatasetproperties) (Required): Synapse Workspace Sql Pool Table data set properties.


## Resource Microsoft.DataShare/accounts/shares/invitations@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvitationProperties](#invitationproperties): Properties on the Invitation
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shares/invitations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares/providerShareSubscriptions@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProviderShareSubscriptionProperties](#providersharesubscriptionproperties) (ReadOnly): properties of providerShareSubscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shares/providerShareSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shares/synchronizationSettings@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shares/synchronizationSettings' (ReadOnly, DeployTimeConstant): The resource type

### ScheduledSynchronizationSetting
#### Properties
* **kind**: 'ScheduleBased' (Required): Kind of synchronization setting.
* **properties**: [ScheduledSynchronizationSettingProperties](#scheduledsynchronizationsettingproperties) (Required): Properties of scheduled synchronization


## Resource Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ShareSubscriptionProperties](#sharesubscriptionproperties) (Required): Properties on the share subscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings' (ReadOnly, DeployTimeConstant): The resource type

### AdlsGen2FileDataSetMapping
#### Properties
* **kind**: 'AdlsGen2File' (Required): Kind of data set mapping.
* **properties**: [AdlsGen2FileDataSetMappingProperties](#adlsgen2filedatasetmappingproperties) (Required): ADLS Gen2 file data set mapping properties.

### AdlsGen2FileSystemDataSetMapping
#### Properties
* **kind**: 'AdlsGen2FileSystem' (Required): Kind of data set mapping.
* **properties**: [AdlsGen2FileSystemDataSetMappingProperties](#adlsgen2filesystemdatasetmappingproperties) (Required): ADLS Gen2 file system data set mapping properties.

### AdlsGen2FolderDataSetMapping
#### Properties
* **kind**: 'AdlsGen2Folder' (Required): Kind of data set mapping.
* **properties**: [AdlsGen2FolderDataSetMappingProperties](#adlsgen2folderdatasetmappingproperties) (Required): ADLS Gen2 folder data set mapping properties.

### BlobDataSetMapping
#### Properties
* **kind**: 'Blob' (Required): Kind of data set mapping.
* **properties**: [BlobMappingProperties](#blobmappingproperties) (Required): Blob data set mapping properties.

### BlobFolderDataSetMapping
#### Properties
* **kind**: 'BlobFolder' (Required): Kind of data set mapping.
* **properties**: [BlobFolderMappingProperties](#blobfoldermappingproperties) (Required): Blob folder data set mapping properties.

### BlobContainerDataSetMapping
#### Properties
* **kind**: 'Container' (Required): Kind of data set mapping.
* **properties**: [BlobContainerMappingProperties](#blobcontainermappingproperties) (Required): Blob container data set mapping properties.

### KustoClusterDataSetMapping
#### Properties
* **kind**: 'KustoCluster' (Required): Kind of data set mapping.
* **properties**: [KustoClusterDataSetMappingProperties](#kustoclusterdatasetmappingproperties) (Required): Kusto cluster data set mapping properties.

### KustoDatabaseDataSetMapping
#### Properties
* **kind**: 'KustoDatabase' (Required): Kind of data set mapping.
* **properties**: [KustoDatabaseDataSetMappingProperties](#kustodatabasedatasetmappingproperties) (Required): Kusto database data set mapping properties.

### SqlDBTableDataSetMapping
#### Properties
* **kind**: 'SqlDBTable' (Required): Kind of data set mapping.
* **properties**: [SqlDBTableDataSetMappingProperties](#sqldbtabledatasetmappingproperties) (Required): Sql DB data set mapping properties.

### SqlDWTableDataSetMapping
#### Properties
* **kind**: 'SqlDWTable' (Required): Kind of data set mapping.
* **properties**: [SqlDWTableDataSetMappingProperties](#sqldwtabledatasetmappingproperties) (Required): Sql DW data set mapping properties.

### SynapseWorkspaceSqlPoolTableDataSetMapping
#### Properties
* **kind**: 'SynapseWorkspaceSqlPoolTable' (Required): Kind of data set mapping.
* **properties**: [SynapseWorkspaceSqlPoolTableDataSetMappingProperties](#synapseworkspacesqlpooltabledatasetmappingproperties) (Required): A Synapse Workspace Sql Pool Table data set mapping properties.


## Resource Microsoft.DataShare/accounts/shareSubscriptions/triggers@2020-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
* **Discriminator**: kind

### Base Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/accounts/shareSubscriptions/triggers' (ReadOnly, DeployTimeConstant): The resource type

### ScheduledTrigger
#### Properties
* **kind**: 'ScheduleBased' (Required): Kind of synchronization on trigger.
* **properties**: [ScheduledTriggerProperties](#scheduledtriggerproperties) (Required): Properties of scheduled synchronization


## Resource Microsoft.DataShare/locations/consumerInvitations@2020-09-01
* **Readable Scope(s)**: Tenant
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2020-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ConsumerInvitationProperties](#consumerinvitationproperties) (ReadOnly): Properties on the account
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: 'Microsoft.DataShare/locations/consumerInvitations' (ReadOnly, DeployTimeConstant): The resource type

## Function activateEmail (Microsoft.DataShare/locations@2020-09-01)
* **Resource**: Microsoft.DataShare/locations
* **ApiVersion**: 2020-09-01
* **Input**: [EmailRegistration](#emailregistration)
* **Output**: [EmailRegistration](#emailregistration)

## Function adjust (Microsoft.DataShare/accounts/shares/providerShareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shares/providerShareSubscriptions
* **ApiVersion**: 2020-09-01
* **Input**: [ProviderShareSubscription](#providersharesubscription)
* **Output**: [ProviderShareSubscription](#providersharesubscription)

## Function cancelSynchronization (Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2020-09-01
* **Input**: [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)
* **Output**: [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)

## Function listSourceShareSynchronizationSettings (Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2020-09-01
* **Output**: [SourceShareSynchronizationSettingList](#sourcesharesynchronizationsettinglist)

## Function listSynchronizationDetails (Microsoft.DataShare/accounts/shares@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shares
* **ApiVersion**: 2020-09-01
* **Input**: [ShareSynchronization](#sharesynchronization)
* **Output**: [SynchronizationDetailsList](#synchronizationdetailslist)

## Function listSynchronizationDetails (Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2020-09-01
* **Input**: [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)
* **Output**: [SynchronizationDetailsList](#synchronizationdetailslist)

## Function listSynchronizations (Microsoft.DataShare/accounts/shares@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shares
* **ApiVersion**: 2020-09-01
* **Output**: [ShareSynchronizationList](#sharesynchronizationlist)

## Function listSynchronizations (Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2020-09-01
* **Output**: [ShareSubscriptionSynchronizationList](#sharesubscriptionsynchronizationlist)

## Function registerEmail (Microsoft.DataShare/locations@2020-09-01)
* **Resource**: Microsoft.DataShare/locations
* **ApiVersion**: 2020-09-01
* **Output**: [EmailRegistration](#emailregistration)

## Function reinstate (Microsoft.DataShare/accounts/shares/providerShareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shares/providerShareSubscriptions
* **ApiVersion**: 2020-09-01
* **Input**: [ProviderShareSubscription](#providersharesubscription)
* **Output**: [ProviderShareSubscription](#providersharesubscription)

## Function rejectInvitation (Microsoft.DataShare/locations@2020-09-01)
* **Resource**: Microsoft.DataShare/locations
* **ApiVersion**: 2020-09-01
* **Input**: [ConsumerInvitation](#consumerinvitation)
* **Output**: [ConsumerInvitation](#consumerinvitation)

## Function revoke (Microsoft.DataShare/accounts/shares/providerShareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shares/providerShareSubscriptions
* **ApiVersion**: 2020-09-01
* **Output**: [ProviderShareSubscription](#providersharesubscription)

## Function synchronize (Microsoft.DataShare/accounts/shareSubscriptions@2020-09-01)
* **Resource**: Microsoft.DataShare/accounts/shareSubscriptions
* **ApiVersion**: 2020-09-01
* **Input**: [Synchronize](#synchronize)
* **Output**: [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)

## AccountProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the account was created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the Account
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## AdlsGen1FileProperties
### Properties
* **accountName**: string (Required): The ADLS account name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileName**: string (Required): The file name in the ADLS account.
* **folderPath**: string (Required): The folder path within the ADLS account.
* **resourceGroup**: string (Required): Resource group of ADLS account.
* **subscriptionId**: string (Required): Subscription id of ADLS account.

## AdlsGen1FolderProperties
### Properties
* **accountName**: string (Required): The ADLS account name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **folderPath**: string (Required): The folder path within the ADLS account.
* **resourceGroup**: string (Required): Resource group of ADLS account.
* **subscriptionId**: string (Required): Subscription id of ADLS account.

## AdlsGen2FileDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **filePath**: string (Required): File path within the file system.
* **fileSystem**: string (Required): File system to which the file belongs.
* **outputType**: 'Csv' | 'Parquet' | string: Type of output file
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## AdlsGen2FileProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **filePath**: string (Required): File path within the file system.
* **fileSystem**: string (Required): File system to which the file belongs.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## AdlsGen2FileSystemDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **fileSystem**: string (Required): The file system name.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## AdlsGen2FileSystemProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileSystem**: string (Required): The file system name.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## AdlsGen2FolderDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **fileSystem**: string (Required): File system to which the folder belongs.
* **folderPath**: string (Required): Folder path within the file system.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## AdlsGen2FolderProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **fileSystem**: string (Required): File system to which the folder belongs.
* **folderPath**: string (Required): Folder path within the file system.
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## BlobContainerMappingProperties
### Properties
* **containerName**: string (Required): BLOB Container name.
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## BlobContainerProperties
### Properties
* **containerName**: string (Required): BLOB Container name.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## BlobFolderMappingProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **prefix**: string (Required): Prefix for blob folder
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## BlobFolderProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **prefix**: string (Required): Prefix for blob folder
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## BlobMappingProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **filePath**: string (Required): File path within the source data set
* **outputType**: 'Csv' | 'Parquet' | string: File output type
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **resourceGroup**: string (Required): Resource group of storage account.
* **storageAccountName**: string (Required): Storage account name of the source data set.
* **subscriptionId**: string (Required): Subscription id of storage account.

## BlobProperties
### Properties
* **containerName**: string (Required): Container that has the file path.
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **filePath**: string (Required): File path within the source data set
* **resourceGroup**: string (Required): Resource group of storage account
* **storageAccountName**: string (Required): Storage account name of the source data set
* **subscriptionId**: string (Required): Subscription id of storage account

## ConsumerInvitation
### Properties
* **id**: string (ReadOnly): The resource id of the azure resource
* **name**: string (ReadOnly): Name of the azure resource
* **properties**: [ConsumerInvitationProperties](#consumerinvitationproperties) (Required): Properties on the account
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: string (ReadOnly): Type of the azure resource

## ConsumerInvitationProperties
### Properties
* **dataSetCount**: int (ReadOnly): Number of data sets in a share
* **description**: string (ReadOnly): Description shared when the invitation was created
* **expirationDate**: string (ReadOnly): The expiration date for the share subscription created by accepting the invitation.
* **invitationId**: string (Required): Unique id of the invitation.
* **invitationStatus**: 'Accepted' | 'Pending' | 'Rejected' | 'Withdrawn' | string (ReadOnly): The status of the invitation.
* **location**: string (ReadOnly): invitation location
* **providerEmail**: string (ReadOnly): Email of the provider who created the resource
* **providerName**: string (ReadOnly): Name of the provider who created the resource
* **providerTenantName**: string (ReadOnly): Tenant name of the provider who created the resource
* **respondedAt**: string (ReadOnly): The time the recipient responded to the invitation.
* **sentAt**: string (ReadOnly): Gets the time at which the invitation was sent.
* **shareName**: string (ReadOnly): Gets the source share Name.
* **termsOfUse**: string (ReadOnly): Terms of use shared when the invitation was created
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## DefaultDtoTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EmailRegistration
### Properties
* **activationCode**: string: Activation code for the registration
* **activationExpirationDate**: string (ReadOnly): Date of the activation expiration
* **email**: string (ReadOnly): The email to register
* **registrationStatus**: 'Activated' | 'ActivationAttemptsExhausted' | 'ActivationPending' | string (ReadOnly): Registration status
* **tenantId**: string (ReadOnly): The tenant to register

## Identity
### Properties
* **principalId**: string (ReadOnly): service principal Id
* **tenantId**: string (ReadOnly): Tenant Id
* **type**: 'SystemAssigned' | string: Identity Type

## InvitationProperties
### Properties
* **expirationDate**: string: The expiration date for the invitation and share subscription.
* **invitationId**: string (ReadOnly): unique invitation id
* **invitationStatus**: 'Accepted' | 'Pending' | 'Rejected' | 'Withdrawn' | string (ReadOnly): The status of the invitation.
* **respondedAt**: string (ReadOnly): The time the recipient responded to the invitation.
* **sentAt**: string (ReadOnly): Gets the time at which the invitation was sent.
* **targetActiveDirectoryId**: string: The target Azure AD Id. Can't be combined with email.
* **targetEmail**: string: The email the invitation is directed to.
* **targetObjectId**: string: The target user or application Id that invitation is being sent to.
Must be specified along TargetActiveDirectoryId. This enables sending
invitations to specific users or applications in an AD tenant.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## KustoClusterDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **kustoClusterResourceId**: string (Required): Resource id of the sink kusto cluster.
* **location**: string (ReadOnly): Location of the sink kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.

## KustoClusterDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **kustoClusterResourceId**: string (Required): Resource id of the kusto cluster.
* **location**: string (ReadOnly): Location of the kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the kusto cluster data set.

## KustoDatabaseDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **kustoClusterResourceId**: string (Required): Resource id of the sink kusto cluster.
* **location**: string (ReadOnly): Location of the sink kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.

## KustoDatabaseDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **kustoDatabaseResourceId**: string (Required): Resource id of the kusto database.
* **location**: string (ReadOnly): Location of the kusto cluster.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the kusto database data set.

## ProviderShareSubscription
### Properties
* **id**: string (ReadOnly): The resource id of the azure resource
* **name**: string (ReadOnly): Name of the azure resource
* **properties**: [ProviderShareSubscriptionProperties](#providersharesubscriptionproperties): properties of providerShareSubscription
* **systemData**: [SystemData](#systemdata) (ReadOnly): System Data of the Azure resource.
* **type**: string (ReadOnly): Type of the azure resource

## ProviderShareSubscriptionProperties
### Properties
* **consumerEmail**: string (ReadOnly): Email of the consumer who created the share subscription
* **consumerName**: string (ReadOnly): Name of the consumer who created the share subscription
* **consumerTenantName**: string (ReadOnly): Tenant name of the consumer who created the share subscription
* **createdAt**: string (ReadOnly): created at
* **expirationDate**: string: Expiration date of the share subscription in UTC format
* **providerEmail**: string (ReadOnly): Email of the provider who created the share
* **providerName**: string (ReadOnly): Name of the provider who created the share
* **sharedAt**: string (ReadOnly): Shared at
* **shareSubscriptionObjectId**: string (ReadOnly): share Subscription Object Id
* **shareSubscriptionStatus**: 'Active' | 'Revoked' | 'Revoking' | 'SourceDeleted' | string (ReadOnly): Gets the status of share subscription

## ScheduledSourceShareSynchronizationSettingProperties
### Properties
* **recurrenceInterval**: 'Day' | 'Hour' | string: Recurrence Interval
* **synchronizationTime**: string: Synchronization time

## ScheduledSynchronizationSettingProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the synchronization setting was created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets or sets the provisioning state
* **recurrenceInterval**: 'Day' | 'Hour' | string (Required): Recurrence Interval
* **synchronizationTime**: string (Required): Synchronization time
* **userName**: string (ReadOnly): Name of the user who created the synchronization setting.

## ScheduledTriggerProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the trigger was created.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets the provisioning state
* **recurrenceInterval**: 'Day' | 'Hour' | string (Required): Recurrence Interval
* **synchronizationMode**: 'FullSync' | 'Incremental' | string: Synchronization mode
* **synchronizationTime**: string (Required): Synchronization time
* **triggerStatus**: 'Active' | 'Inactive' | 'SourceSynchronizationSettingDeleted' | string (ReadOnly): Gets the trigger state
* **userName**: string (ReadOnly): Name of the user who created the trigger.

## ShareProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the share was created.
* **description**: string: Share description.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Gets or sets the provisioning state
* **shareKind**: 'CopyBased' | 'InPlace' | string: Share kind.
* **terms**: string: Share terms.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## ShareSubscriptionProperties
### Properties
* **createdAt**: string (ReadOnly): Time at which the share subscription was created.
* **expirationDate**: string: The expiration date of the share subscription.
* **invitationId**: string (Required): The invitation id.
* **providerEmail**: string (ReadOnly): Email of the provider who created the resource
* **providerName**: string (ReadOnly): Name of the provider who created the resource
* **providerTenantName**: string (ReadOnly): Tenant name of the provider who created the resource
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the share subscription
* **shareDescription**: string (ReadOnly): Description of share
* **shareKind**: 'CopyBased' | 'InPlace' | string (ReadOnly): Kind of share
* **shareName**: string (ReadOnly): Name of the share
* **shareSubscriptionStatus**: 'Active' | 'Revoked' | 'Revoking' | 'SourceDeleted' | string (ReadOnly): Gets the current status of share subscription.
* **shareTerms**: string (ReadOnly): Terms of a share
* **sourceShareLocation**: string (Required): Source share location.
* **userEmail**: string (ReadOnly): Email of the user who created the resource
* **userName**: string (ReadOnly): Name of the user who created the resource

## ShareSubscriptionSynchronization
### Properties
* **durationMs**: int (ReadOnly): Synchronization duration
* **endTime**: string (ReadOnly): End time of synchronization
* **message**: string (ReadOnly): message of Synchronization
* **startTime**: string (ReadOnly): start time of synchronization
* **status**: string (ReadOnly): Raw Status
* **synchronizationId**: string (Required): Synchronization id
* **synchronizationMode**: 'FullSync' | 'Incremental' | string (ReadOnly): Synchronization Mode

## ShareSubscriptionSynchronizationList
### Properties
* **nextLink**: string: The Url of next result page.
* **value**: [ShareSubscriptionSynchronization](#sharesubscriptionsynchronization)[] (Required): Collection of items of type DataTransferObjects.

## ShareSynchronization
### Properties
* **consumerEmail**: string: Email of the user who created the synchronization
* **consumerName**: string: Name of the user who created the synchronization
* **consumerTenantName**: string: Tenant name of the consumer who created the synchronization
* **durationMs**: int: synchronization duration
* **endTime**: string: End time of synchronization
* **message**: string: message of synchronization
* **startTime**: string: start time of synchronization
* **status**: string: Raw Status
* **synchronizationId**: string: Synchronization id
* **synchronizationMode**: 'FullSync' | 'Incremental' | string (ReadOnly): Synchronization mode

## ShareSynchronizationList
### Properties
* **nextLink**: string: The Url of next result page.
* **value**: [ShareSynchronization](#sharesynchronization)[] (Required): Collection of items of type DataTransferObjects.

## SourceShareSynchronizationSetting
* **Discriminator**: kind

### Base Properties

### ScheduledSourceSynchronizationSetting
#### Properties
* **kind**: 'ScheduleBased' (Required): Kind of synchronization setting on share.
* **properties**: [ScheduledSourceShareSynchronizationSettingProperties](#scheduledsourcesharesynchronizationsettingproperties): Properties of scheduled synchronization


## SourceShareSynchronizationSettingList
### Properties
* **nextLink**: string: The Url of next result page.
* **value**: [SourceShareSynchronizationSetting](#sourcesharesynchronizationsetting)[] (Required): Collection of items of type DataTransferObjects.

## SqlDBTableDataSetMappingProperties
### Properties
* **databaseName**: string (Required): DatabaseName name of the sink data set
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DB table name.

## SqlDBTableProperties
### Properties
* **databaseName**: string (Required): Database name of the source data set
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DB table name.

## SqlDWTableDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **dataWarehouseName**: string (Required): DataWarehouse name of the source data set
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DW table name.

## SqlDWTableProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **dataWarehouseName**: string (Required): DataWarehouse name of the source data set
* **schemaName**: string (Required): Schema of the table. Default value is dbo.
* **sqlServerResourceId**: string (Required): Resource id of SQL server
* **tableName**: string (Required): SQL DW table name.

## SynapseWorkspaceSqlPoolTableDataSetMappingProperties
### Properties
* **dataSetId**: string (Required): The id of the source data set.
* **dataSetMappingStatus**: 'Broken' | 'Ok' | string (ReadOnly): Gets the status of the data set mapping.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Moving' | 'Succeeded' | string (ReadOnly): Provisioning state of the data set mapping.
* **synapseWorkspaceSqlPoolTableResourceId**: string (Required): Resource id of the Synapse Workspace SQL Pool Table

## SynapseWorkspaceSqlPoolTableDataSetProperties
### Properties
* **dataSetId**: string (ReadOnly): Unique id for identifying a data set resource
* **synapseWorkspaceSqlPoolTableResourceId**: string (Required): Resource id of the Synapse Workspace SQL Pool Table

## SynchronizationDetails
### Properties
* **dataSetId**: string (ReadOnly): Id of data set
* **dataSetType**: 'AdlsGen1File' | 'AdlsGen1Folder' | 'AdlsGen2File' | 'AdlsGen2FileSystem' | 'AdlsGen2Folder' | 'Blob' | 'BlobFolder' | 'Container' | 'KustoCluster' | 'KustoDatabase' | 'SqlDBTable' | 'SqlDWTable' | 'SynapseWorkspaceSqlPoolTable' | string (ReadOnly): Type of the data set
* **durationMs**: int (ReadOnly): Duration of data set level copy
* **endTime**: string (ReadOnly): End time of data set level copy
* **filesRead**: int (ReadOnly): The number of files read from the source data set
* **filesWritten**: int (ReadOnly): The number of files written into the sink data set
* **message**: string (ReadOnly): Error message if any
* **name**: string (ReadOnly): Name of the data set
* **rowsCopied**: int (ReadOnly): The number of files copied into the sink data set
* **rowsRead**: int (ReadOnly): The number of rows read from the source data set.
* **sizeRead**: int (ReadOnly): The size of the data read from the source data set in bytes
* **sizeWritten**: int (ReadOnly): The size of the data written into the sink data set in bytes
* **startTime**: string (ReadOnly): Start time of data set level copy
* **status**: string (ReadOnly): Raw Status
* **vCore**: int (ReadOnly): The vCore units consumed for the data set synchronization

## SynchronizationDetailsList
### Properties
* **nextLink**: string: The Url of next result page.
* **value**: [SynchronizationDetails](#synchronizationdetails)[] (Required): Collection of items of type DataTransferObjects.

## Synchronize
### Properties
* **synchronizationMode**: 'FullSync' | 'Incremental' | string: Mode of synchronization used in triggers and snapshot sync. Incremental by default

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The type of identity that last modified the resource.
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

