# Microsoft.MachineLearningServices @ 2020-05-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **datasetType**: 'file' | 'tabular' (Required, WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **parameters**: DatasetCreateRequestParameters (Required, WriteOnly)
* **properties**: Dataset (ReadOnly)
* **registration**: DatasetCreateRequestRegistration (Required, WriteOnly)
* **skipValidation**: bool (WriteOnly)
* **sku**: Sku (ReadOnly)
* **tags**: ResourceTags (ReadOnly)
* **timeSeries**: DatasetCreateRequestTimeSeries (WriteOnly)
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
* **dataStoreType**: 'adls' | 'adls-gen2' | 'blob' | 'dbfs' | 'file' | 'mysqldb' | 'psqldb' | 'sqldb' (Required, WriteOnly)
* **description**: string (WriteOnly)
* **endpoint**: string (WriteOnly)
* **enforceSSL**: bool (WriteOnly)
* **fileSystem**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **includeSecret**: bool (WriteOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **password**: string (WriteOnly)
* **port**: string (WriteOnly)
* **properties**: Datastore (ReadOnly)
* **protocol**: string (WriteOnly)
* **resourceUrl**: string (WriteOnly)
* **sasToken**: string (WriteOnly)
* **serverName**: string (WriteOnly)
* **shareName**: string (WriteOnly)
* **skipValidation**: bool (WriteOnly)
* **sku**: Sku (ReadOnly)
* **storageAccountResourceGroup**: string (WriteOnly)
* **storageAccountSubscriptionId**: string (WriteOnly)
* **storeName**: string (WriteOnly)
* **tags**: ResourceTags (ReadOnly)
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
* **properties**: LinkedWorkspaceProps
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: CreateServiceRequestEnvironmentImageRequest (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **keys**: CreateServiceRequestKeys (WriteOnly)
* **kvTags**: CreateServiceRequestKvTags (WriteOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: CreateServiceRequestProperties
* **sku**: Sku (ReadOnly)
* **tags**: ResourceTags (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant)

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: UserAssignedIdentities

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: UserAssignedIdentity

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
* **encryption**: EncryptionProperty
* **friendlyName**: string
* **hbiWorkspace**: bool
* **imageBuildCompute**: string
* **keyVault**: string
* **privateEndpointConnections**: PrivateEndpointConnection[] (ReadOnly)
* **privateLinkCount**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceProvisionedResourceGroup**: string (ReadOnly)
* **sharedPrivateLinkResources**: SharedPrivateLinkResource[]
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## EncryptionProperty
### Properties
* **keyVaultProperties**: KeyVaultProperties (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string (Required)
* **keyVaultArmId**: string (Required)

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **identity**: Identity
* **location**: string
* **name**: string (ReadOnly)
* **properties**: PrivateEndpointConnectionProperties
* **sku**: Sku
* **tags**: ResourceTags
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly)

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

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedPrivateLinkResource
### Properties
* **name**: string
* **properties**: SharedPrivateLinkResourceProperty

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string
* **privateLinkResourceId**: string
* **requestMessage**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## ResourceTags
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
* **provisioningErrors**: MachineLearningServiceError[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: AKSProperties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: AmlComputeProperties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: DatabricksProperties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: DataLakeAnalyticsProperties

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: HDInsightProperties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: VirtualMachineProperties


## MachineLearningServiceError
### Properties
* **error**: ErrorResponse (ReadOnly)

## ErrorResponse
### Properties
* **code**: string (ReadOnly)
* **details**: ErrorDetail[] (ReadOnly)
* **message**: string (ReadOnly)

## ErrorDetail
### Properties
* **code**: string (Required)
* **message**: string (Required)

## AKS
### Properties
* **computeType**: 'AKS' (Required)
* **properties**: AKSProperties

## AKSProperties
### Properties
* **agentCount**: int
* **agentVMSize**: string
* **aksNetworkingConfiguration**: AksNetworkingConfiguration
* **clusterFqdn**: string
* **sslConfiguration**: SslConfiguration
* **systemServices**: SystemService[] (ReadOnly)

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
* **properties**: AmlComputeProperties

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **nodeStateCounts**: NodeStateCounts (ReadOnly)
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: UserAccountCredentials
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
* **nodeIdleTimeBeforeScaleDown**: any

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
* **properties**: DatabricksProperties

## DatabricksProperties
### Properties
* **databricksAccessToken**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: DataLakeAnalyticsProperties

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: HDInsightProperties

## HDInsightProperties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
* **sshPort**: int

## VirtualMachineSshCredentials
### Properties
* **password**: string
* **privateKeyData**: string
* **publicKeyData**: string
* **username**: string

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: VirtualMachineProperties

## VirtualMachineProperties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
* **sshPort**: int
* **virtualMachineSize**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestParameters
### Properties
* **header**: 'all_files_have_same_headers' | 'combine_all_files_headers' | 'no_headers' | 'only_first_file_has_headers' (WriteOnly)
* **includePath**: bool (WriteOnly)
* **partitionFormat**: string (WriteOnly)
* **path**: DatasetCreateRequestParametersPath (WriteOnly)
* **query**: DatasetCreateRequestParametersQuery (WriteOnly)
* **separator**: string (WriteOnly)
* **sourceType**: 'delimited_files' | 'json_lines_files' | 'parquet_files' (WriteOnly)

## DatasetCreateRequestParametersPath
### Properties
* **dataPath**: DatasetCreateRequestParametersPathDataPath (WriteOnly)
* **httpUrl**: string (WriteOnly)

## DatasetCreateRequestParametersPathDataPath
### Properties
* **datastoreName**: string (WriteOnly)
* **relativePath**: string (WriteOnly)

## DatasetCreateRequestParametersQuery
### Properties
* **datastoreName**: string (WriteOnly)
* **query**: string (WriteOnly)

## Dataset
### Properties
* **createdTime**: string (ReadOnly)
* **datasetId**: string (ReadOnly)
* **datasetState**: DatasetState (ReadOnly)
* **datasetType**: string (ReadOnly)
* **defaultCompute**: string (ReadOnly)
* **description**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **isVisible**: bool (ReadOnly)
* **latest**: DatasetLatest (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **tags**: DatasetTags (ReadOnly)

## DatasetState
### Properties
* **deprecatedBy**: DatasetStateDeprecatedBy (ReadOnly)
* **etag**: string (ReadOnly)
* **state**: string (ReadOnly)

## DatasetStateDeprecatedBy
### Properties
* **datasetId**: string (ReadOnly)
* **definitionVersion**: string (ReadOnly)

## DatasetLatest
### Properties
* **createdBy**: UserInfo (ReadOnly)
* **createdTime**: string (ReadOnly)
* **dataflow**: string (ReadOnly)
* **dataPath**: DatasetLatestDataPath (ReadOnly)
* **datasetDefinitionState**: DatasetState (ReadOnly)
* **datasetId**: string (ReadOnly)
* **description**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **fileType**: string (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **notes**: string (ReadOnly)
* **partitionFormatInPath**: bool (ReadOnly)
* **properties**: DatasetLatestProperties (ReadOnly)
* **savedDatasetId**: string (ReadOnly)
* **tags**: DatasetLatestTags (ReadOnly)
* **telemetryInfo**: DatasetLatestTelemetryInfo (ReadOnly)
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

## DatasetLatestDataPath
### Properties
* **additionalProperties**: DatasetLatestDataPathAdditionalProperties (ReadOnly)
* **azureFilePath**: string (ReadOnly)
* **datastoreName**: string (ReadOnly)
* **httpUrl**: string (ReadOnly)
* **partitionFormat**: string (ReadOnly)
* **partitionFormatIgnoreError**: bool (ReadOnly)
* **paths**: string[] (ReadOnly)
* **relativePath**: string (ReadOnly)
* **sqlDataPath**: DatasetLatestDataPathSqlDataPath (ReadOnly)

## DatasetLatestDataPathAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestDataPathSqlDataPath
### Properties
* **queryTimeout**: int (ReadOnly)
* **sqlQuery**: string (ReadOnly)
* **sqlStoredProcedureName**: string (ReadOnly)
* **sqlTableName**: string (ReadOnly)

## DatasetLatestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetLatestTelemetryInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestRegistration
### Properties
* **description**: string (WriteOnly)
* **name**: string (WriteOnly)
* **tags**: DatasetCreateRequestRegistrationTags (WriteOnly)

## DatasetCreateRequestRegistrationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestTimeSeries
### Properties
* **coarseGrainTimestamp**: string (WriteOnly)
* **fineGrainTimestamp**: string (WriteOnly)

## Datastore
### Properties
* **azureDataLakeSection**: AzureDataLakeSection (ReadOnly)
* **azureMySqlSection**: AzureMySqlSection (ReadOnly)
* **azurePostgreSqlSection**: AzurePostgreSqlSection (ReadOnly)
* **azureSqlDatabaseSection**: AzureSqlDatabaseSection (ReadOnly)
* **azureStorageSection**: AzureStorageSection (ReadOnly)
* **createdBy**: UserInfo (ReadOnly)
* **createdTime**: string (ReadOnly)
* **dataStoreType**: 'AzureBlob' | 'AzureDataLake' | 'AzureDataLakeGen2' | 'AzureFile' | 'AzureMySql' | 'AzurePostgreSql' | 'AzureSqlDatabase' | 'DBFS' (ReadOnly)
* **description**: string (ReadOnly)
* **glusterFsSection**: GlusterFsSection (ReadOnly)
* **hasBeenValidated**: bool (ReadOnly)
* **linkedInfo**: LinkedInfo (ReadOnly)
* **modifiedBy**: UserInfo (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **tags**: DatastoreTags (ReadOnly)

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
* **clientCredentials**: ClientCredentials (ReadOnly)
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

## DatastoreTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## LinkedWorkspaceProps
### Properties
* **linkedWorkspaceResourceId**: string
* **userAssignedIdentityResourceId**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateServiceRequestEnvironmentImageRequest
### Properties
* **assets**: ImageAsset[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: EnvironmentImageRequestEnvironment (WriteOnly)
* **environmentReference**: EnvironmentImageRequestEnvironmentReference (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: Model[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## EnvironmentImageRequestEnvironment
### Properties
* **docker**: ModelEnvironmentDefinitionDocker (WriteOnly)
* **environmentVariables**: ModelEnvironmentDefinitionEnvironmentVariables (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: ModelEnvironmentDefinitionPython (WriteOnly)
* **r**: ModelEnvironmentDefinitionR (WriteOnly)
* **spark**: ModelEnvironmentDefinitionSpark (WriteOnly)
* **version**: string (WriteOnly)

## ModelEnvironmentDefinitionDocker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: ModelDockerSectionBaseImageRegistry (WriteOnly)

## ModelDockerSectionBaseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## ModelEnvironmentDefinitionEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelEnvironmentDefinitionPython
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly)
* **interpreterPath**: string (WriteOnly)
* **userManagedDependencies**: bool (WriteOnly)

## ModelEnvironmentDefinitionR
### Properties
* **bioConductorPackages**: string[] (WriteOnly)
* **cranPackages**: RCranPackage[] (WriteOnly)
* **customUrlPackages**: string[] (WriteOnly)
* **gitHubPackages**: RGitHubPackage[] (WriteOnly)
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

## ModelEnvironmentDefinitionSpark
### Properties
* **packages**: SparkMavenPackage[] (WriteOnly)
* **precachePackages**: bool (WriteOnly)
* **repositories**: string[] (WriteOnly)

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## EnvironmentImageRequestEnvironmentReference
### Properties
* **name**: string (WriteOnly)
* **version**: string (WriteOnly)

## Model
### Properties
* **createdTime**: string (WriteOnly)
* **datasets**: DatasetReference[] (WriteOnly)
* **derivedModelIds**: string[] (WriteOnly)
* **description**: string (WriteOnly)
* **experimentName**: string (WriteOnly)
* **framework**: string (WriteOnly)
* **frameworkVersion**: string (WriteOnly)
* **id**: string (WriteOnly)
* **kvTags**: ModelKvTags (WriteOnly)
* **mimeType**: string (Required, WriteOnly)
* **modifiedTime**: string (WriteOnly)
* **name**: string (Required, WriteOnly)
* **parentModelId**: string (WriteOnly)
* **properties**: ModelProperties (WriteOnly)
* **resourceRequirements**: ContainerResourceRequirements (WriteOnly)
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

## ModelKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ContainerResourceRequirements
### Properties
* **cpu**: int (WriteOnly)
* **fpga**: int (WriteOnly)
* **gpu**: int (WriteOnly)
* **memoryInGB**: int (WriteOnly)

## CreateServiceRequestKeys
### Properties
* **primaryKey**: string (WriteOnly)
* **secondaryKey**: string (WriteOnly)

## CreateServiceRequestKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateServiceRequestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

