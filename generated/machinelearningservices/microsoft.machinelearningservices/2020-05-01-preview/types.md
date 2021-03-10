# Microsoft.MachineLearningServices @ 2020-05-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Compute](#compute)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **datasetType**: 'file' | 'tabular' (Required, WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **parameters**: [schemas:56_properties](#schemas56properties) (Required, WriteOnly)
* **properties**: [Dataset](#dataset) (ReadOnly)
* **registration**: [schemas:56_properties](#schemas56properties) (Required, WriteOnly)
* **skipValidation**: bool (WriteOnly)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **timeSeries**: [schemas:56_properties](#schemas56properties) (WriteOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/datasets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountKey**: string (WriteOnly)
* **accountName**: string (WriteOnly)
* **adlsResourceGroup**: string (WriteOnly)
* **adlsSubscriptionId**: string (WriteOnly)
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **authorityUrl**: string (WriteOnly)
* **clientId**: string (WriteOnly)
* **clientSecret**: string (WriteOnly)
* **containerName**: string (WriteOnly)
* **databaseName**: string (WriteOnly)
* **dataStoreType**: 'adls-gen2' | 'adls' | 'blob' | 'dbfs' | 'file' | 'mysqldb' | 'psqldb' | 'sqldb' (Required, WriteOnly)
* **description**: string (WriteOnly)
* **endpoint**: string (WriteOnly)
* **enforceSSL**: bool (WriteOnly)
* **fileSystem**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **includeSecret**: bool (WriteOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (WriteOnly)
* **port**: string (WriteOnly)
* **properties**: [Datastore](#datastore) (ReadOnly)
* **protocol**: string (WriteOnly)
* **resourceUrl**: string (WriteOnly)
* **sasToken**: string (WriteOnly)
* **serverName**: string (WriteOnly)
* **shareName**: string (WriteOnly)
* **skipValidation**: bool (WriteOnly)
* **sku**: [Sku](#sku) (ReadOnly)
* **storageAccountResourceGroup**: string (WriteOnly)
* **storageAccountSubscriptionId**: string (WriteOnly)
* **storeName**: string (WriteOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **tenantId**: string (WriteOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant)
* **userId**: string (WriteOnly)
* **userName**: string (WriteOnly)
* **workspaceSystemAssignedIdentity**: bool (WriteOnly)

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedWorkspaceProps](#linkedworkspaceprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: [schemas:139_environmentImageRequest](#schemas139environmentimagerequest) (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **keys**: [schemas:139_keys](#schemas139keys) (WriteOnly)
* **kvTags**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant)
### ACI
#### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [schemas:108_dataCollection](#schemas108datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:108_encryptionProperties](#schemas108encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:108_vnetConfiguration](#schemas108vnetconfiguration) (WriteOnly)

### Custom
#### Properties
* **computeType**: 'Custom' (Required)
* **isDefault**: bool (WriteOnly)
* **trafficPercentile**: int (WriteOnly)
* **type**: 'Control' | 'Treatment' (WriteOnly)


## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity)

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool
* **applicationInsights**: string
* **containerRegistry**: string
* **creationTime**: string (ReadOnly)
* **description**: string
* **discoveryUrl**: string
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string
* **hbiWorkspace**: bool
* **imageBuildCompute**: string
* **keyVault**: string
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **privateLinkCount**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceProvisionedResourceGroup**: string (ReadOnly)
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string (Required)
* **keyVaultArmId**: string (Required)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## Sku
### Properties
* **name**: string
* **tier**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedPrivateLinkResource
### Properties
* **name**: string
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty)

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **requestMessage**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType
### Base Properties
* **computeLocation**: string
* **createdOn**: string (ReadOnly)
* **description**: string
* **isAttachedCompute**: bool (ReadOnly)
* **modifiedOn**: string (ReadOnly)
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [schemas:54_properties](#schemas54properties)

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [schemas:55_properties](#schemas55properties)

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)


## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly)

## ErrorResponse
### Properties
* **code**: string (ReadOnly)
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly)
* **message**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [schemas:54_properties](#schemas54properties)

## schemas:54_properties
### Properties
* **agentCount**: int
* **agentVMSize**: string
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration)
* **clusterFqdn**: string
* **sslConfiguration**: [SslConfiguration](#sslconfiguration)
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly)

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string
* **dockerBridgeCidr**: string
* **serviceCidr**: string
* **subnetId**: string

## SslConfiguration
### Properties
* **cert**: string
* **cname**: string
* **key**: string
* **status**: 'Disabled' | 'Enabled'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: string (ReadOnly)
* **version**: string (ReadOnly)

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [schemas:55_properties](#schemas55properties)

## schemas:55_properties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly)
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **subnet**: [ResourceId](#resourceid)
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials)
* **vmPriority**: 'Dedicated' | 'LowPriority'
* **vmSize**: string

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly)
* **leavingNodeCount**: int (ReadOnly)
* **preemptedNodeCount**: int (ReadOnly)
* **preparingNodeCount**: int (ReadOnly)
* **runningNodeCount**: int (ReadOnly)
* **unusableNodeCount**: int (ReadOnly)

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required)
* **minNodeCount**: int
* **nodeIdleTimeBeforeScaleDown**: string

## ResourceId
### Properties
* **id**: string (Required)

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required)
* **adminUserPassword**: string
* **adminUserSshPublicKey**: string

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

## schemas:56_properties
### Properties
* **address**: string
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
* **sshPort**: int
* **virtualMachineSize**: string

## VirtualMachineSshCredentials
### Properties
* **password**: string
* **privateKeyData**: string
* **publicKeyData**: string
* **username**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [schemas:56_properties](#schemas56properties)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dataset
### Properties
* **createdTime**: string (ReadOnly)
* **datasetId**: string (ReadOnly)
* **datasetState**: [DatasetState](#datasetstate) (ReadOnly)
* **datasetType**: string (ReadOnly)
* **defaultCompute**: string (ReadOnly)
* **description**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **isVisible**: bool (ReadOnly)
* **latest**: [schemas:31_latest](#schemas31latest) (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)

## DatasetState
### Properties
* **deprecatedBy**: [schemas:32_deprecatedBy](#schemas32deprecatedby) (ReadOnly)
* **etag**: string (ReadOnly)
* **state**: string (ReadOnly)

## schemas:32_deprecatedBy
### Properties
* **datasetId**: string (ReadOnly)
* **definitionVersion**: string (ReadOnly)

## schemas:31_latest
### Properties
* **createdBy**: [UserInfo](#userinfo) (ReadOnly)
* **createdTime**: string (ReadOnly)
* **dataflow**: string (ReadOnly)
* **dataPath**: [schemas:31_latest_dataPath](#schemas31latestdatapath) (ReadOnly)
* **datasetDefinitionState**: [DatasetState](#datasetstate) (ReadOnly)
* **datasetId**: string (ReadOnly)
* **description**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **fileType**: string (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **notes**: string (ReadOnly)
* **partitionFormatInPath**: bool (ReadOnly)
* **properties**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **savedDatasetId**: string (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **telemetryInfo**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **useDescriptionTagsFromDefinition**: bool (ReadOnly)
* **versionId**: string (ReadOnly)

## UserInfo
### Properties
* **userAltSecId**: string (ReadOnly)
* **userIdp**: string (ReadOnly)
* **userIss**: string (ReadOnly)
* **userName**: string (ReadOnly)
* **userObjectId**: string (ReadOnly)
* **userPuId**: string (ReadOnly)
* **userTenantId**: string (ReadOnly)

## schemas:31_latest_dataPath
### Properties
* **additionalProperties**: [Dictionary<string,Object>](#dictionarystringobject) (ReadOnly)
* **azureFilePath**: string (ReadOnly)
* **datastoreName**: string (ReadOnly)
* **httpUrl**: string (ReadOnly)
* **partitionFormat**: string (ReadOnly)
* **partitionFormatIgnoreError**: bool (ReadOnly)
* **paths**: string[] (ReadOnly)
* **relativePath**: string (ReadOnly)
* **sqlDataPath**: [schemas:31_latest_dataPath_sqlDataPath](#schemas31latestdatapathsqldatapath) (ReadOnly)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## schemas:31_latest_dataPath_sqlDataPath
### Properties
* **queryTimeout**: int (ReadOnly)
* **sqlQuery**: string (ReadOnly)
* **sqlStoredProcedureName**: string (ReadOnly)
* **sqlTableName**: string (ReadOnly)

## Dictionary<string,Object>
### Properties
### Additional Properties
* **Additional Properties Type**: any

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Datastore
### Properties
* **azureDataLakeSection**: [AzureDataLakeSection](#azuredatalakesection) (ReadOnly)
* **azureMySqlSection**: [AzureMySqlSection](#azuremysqlsection) (ReadOnly)
* **azurePostgreSqlSection**: [AzurePostgreSqlSection](#azurepostgresqlsection) (ReadOnly)
* **azureSqlDatabaseSection**: [AzureSqlDatabaseSection](#azuresqldatabasesection) (ReadOnly)
* **azureStorageSection**: [AzureStorageSection](#azurestoragesection) (ReadOnly)
* **createdBy**: [UserInfo](#userinfo) (ReadOnly)
* **createdTime**: string (ReadOnly)
* **dataStoreType**: 'AzureBlob' | 'AzureDataLake' | 'AzureDataLakeGen2' | 'AzureFile' | 'AzureMySql' | 'AzurePostgreSql' | 'AzureSqlDatabase' | 'DBFS' (ReadOnly)
* **description**: string (ReadOnly)
* **glusterFsSection**: [GlusterFsSection](#glusterfssection) (ReadOnly)
* **hasBeenValidated**: bool (ReadOnly)
* **linkedInfo**: [LinkedInfo](#linkedinfo) (ReadOnly)
* **modifiedBy**: [UserInfo](#userinfo) (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)

## AzureDataLakeSection
### Properties
* **authorityUrl**: string (ReadOnly)
* **certificate**: string (ReadOnly)
* **clientId**: string (ReadOnly)
* **clientSecret**: string (ReadOnly)
* **credentialType**: 'None' | 'ServicePrincipal' (ReadOnly)
* **isCertAuth**: bool (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **resourceUri**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **storeName**: string (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## AzureMySqlSection
### Properties
* **authorityUrl**: string (ReadOnly)
* **certificate**: string (ReadOnly)
* **clientId**: string (ReadOnly)
* **clientSecret**: string (ReadOnly)
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endpoint**: string (ReadOnly)
* **isCertAuth**: bool (ReadOnly)
* **portNumber**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **resourceUri**: string (ReadOnly)
* **serverName**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **userPassword**: string (ReadOnly)

## AzurePostgreSqlSection
### Properties
* **authorityUrl**: string (ReadOnly)
* **certificate**: string (ReadOnly)
* **clientId**: string (ReadOnly)
* **clientSecret**: string (ReadOnly)
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly)
* **databaseName**: string (ReadOnly)
* **enableSsl**: bool (ReadOnly)
* **endpoint**: string (ReadOnly)
* **isCertAuth**: bool (ReadOnly)
* **portNumber**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **resourceUri**: string (ReadOnly)
* **serverName**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **userPassword**: string (ReadOnly)

## AzureSqlDatabaseSection
### Properties
* **authorityUrl**: string (ReadOnly)
* **certificate**: string (ReadOnly)
* **clientId**: string (ReadOnly)
* **clientSecret**: string (ReadOnly)
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' (ReadOnly)
* **databaseName**: string (ReadOnly)
* **endpoint**: string (ReadOnly)
* **isCertAuth**: bool (ReadOnly)
* **portNumber**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **resourceUri**: string (ReadOnly)
* **serverName**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)
* **userId**: string (ReadOnly)
* **userPassword**: string (ReadOnly)

## AzureStorageSection
### Properties
* **accountKey**: string (ReadOnly)
* **accountName**: string (ReadOnly)
* **areWorkspaceManagedIdentitiesAllowed**: bool (ReadOnly)
* **blobCacheTimeout**: int (ReadOnly)
* **clientCredentials**: [ClientCredentials](#clientcredentials) (ReadOnly)
* **containerName**: string (ReadOnly)
* **credential**: string (ReadOnly)
* **credentialType**: 'AccountKey' | 'ClientCredentials' | 'None' | 'Sas' (ReadOnly)
* **endpoint**: string (ReadOnly)
* **isSas**: bool (ReadOnly)
* **protocol**: string (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **sasToken**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **subscriptionId**: string (ReadOnly)

## ClientCredentials
### Properties
* **authorityUrl**: string (ReadOnly)
* **certificate**: string (ReadOnly)
* **clientId**: string (ReadOnly)
* **clientSecret**: string (ReadOnly)
* **isCertAuth**: bool (ReadOnly)
* **resourceGroup**: string (ReadOnly)
* **resourceUri**: string (ReadOnly)
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' (ReadOnly)
* **subscriptionId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **thumbprint**: string (ReadOnly)

## GlusterFsSection
### Properties
* **serverAddress**: string (ReadOnly)
* **volumeName**: string (ReadOnly)

## LinkedInfo
### Properties
* **linkedId**: string (ReadOnly)
* **linkedResourceName**: string (ReadOnly)
* **origin**: 'Synapse' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedWorkspaceProps
### Properties
* **linkedWorkspaceResourceId**: string
* **userAssignedIdentityResourceId**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:139_environmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: [schemas:114_environment](#schemas114environment) (WriteOnly)
* **environmentReference**: [schemas:114_environmentReference](#schemas114environmentreference) (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: [Model](#model)[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## schemas:114_environment
### Properties
* **docker**: [schemas:117_docker](#schemas117docker) (WriteOnly)
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: [schemas:117_python](#schemas117python) (WriteOnly)
* **r**: [schemas:117_r](#schemas117r) (WriteOnly)
* **spark**: [schemas:117_spark](#schemas117spark) (WriteOnly)
* **version**: string (WriteOnly)

## schemas:117_docker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: [schemas:123_baseImageRegistry](#schemas123baseimageregistry) (WriteOnly)

## schemas:123_baseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:117_python
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly)
* **interpreterPath**: string (WriteOnly)
* **userManagedDependencies**: bool (WriteOnly)

## schemas:117_r
### Properties
* **bioConductorPackages**: string[] (WriteOnly)
* **cranPackages**: [RCranPackage](#rcranpackage)[] (WriteOnly)
* **customUrlPackages**: string[] (WriteOnly)
* **gitHubPackages**: [RGitHubPackage](#rgithubpackage)[] (WriteOnly)
* **rscriptPath**: string (WriteOnly)
* **rVersion**: string (WriteOnly)
* **snapshotDate**: string (WriteOnly)
* **userManaged**: bool (WriteOnly)

## RCranPackage
### Properties
* **name**: string (WriteOnly)
* **repository**: string (WriteOnly)

## RGitHubPackage
### Properties
* **authToken**: string (WriteOnly)
* **repository**: string (WriteOnly)

## schemas:117_spark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly)
* **precachePackages**: bool (WriteOnly)
* **repositories**: string[] (WriteOnly)

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## schemas:114_environmentReference
### Properties
* **name**: string (WriteOnly)
* **version**: string (WriteOnly)

## Model
### Properties
* **createdTime**: string (WriteOnly)
* **datasets**: [DatasetReference](#datasetreference)[] (WriteOnly)
* **derivedModelIds**: string[] (WriteOnly)
* **description**: string (WriteOnly)
* **experimentName**: string (WriteOnly)
* **framework**: string (WriteOnly)
* **frameworkVersion**: string (WriteOnly)
* **id**: string (WriteOnly)
* **kvTags**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **mimeType**: string (Required, WriteOnly)
* **modifiedTime**: string (WriteOnly)
* **name**: string (Required, WriteOnly)
* **parentModelId**: string (WriteOnly)
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **resourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **runId**: string (WriteOnly)
* **sampleInputData**: string (WriteOnly)
* **sampleOutputData**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (Required, WriteOnly)
* **version**: int (WriteOnly)

## DatasetReference
### Properties
* **id**: string (WriteOnly)
* **name**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ContainerResourceRequirements
### Properties
* **cpu**: int (WriteOnly)
* **fpga**: int (WriteOnly)
* **gpu**: int (WriteOnly)
* **memoryInGB**: int (WriteOnly)

## schemas:139_keys
### Properties
* **primaryKey**: string (WriteOnly)
* **secondaryKey**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ACI
### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [schemas:108_dataCollection](#schemas108datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:108_encryptionProperties](#schemas108encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:108_vnetConfiguration](#schemas108vnetconfiguration) (WriteOnly)

## schemas:108_dataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly)
* **storageEnabled**: bool (WriteOnly)

## schemas:108_encryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly)
* **keyVersion**: string (Required, WriteOnly)
* **vaultBaseUrl**: string (Required, WriteOnly)

## schemas:108_vnetConfiguration
### Properties
* **subnetName**: string (WriteOnly)
* **vnetName**: string (WriteOnly)

## Custom
### Properties
* **computeType**: 'Custom' (Required)
* **isDefault**: bool (WriteOnly)
* **trafficPercentile**: int (WriteOnly)
* **type**: 'Control' | 'Treatment' (WriteOnly)

