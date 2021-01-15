# Microsoft.MachineLearningServices @ 2020-05-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **datasetType**: 'file' | 'tabular' (Required, WriteOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **location**: string (ReadOnly)
* **name**: string (Required, DeployTimeConstant)
* **parameters**: schemas:56_properties (Required, WriteOnly)
* **properties**: Dataset (ReadOnly)
* **registration**: schemas:56_properties (Required, WriteOnly)
* **skipValidation**: bool (WriteOnly)
* **sku**: Sku (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **timeSeries**: schemas:56_properties (WriteOnly)
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
* **dependsOn**: resourceref[] (WriteOnly)
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
* **tags**: Dictionary<string,String> (ReadOnly)
* **tenantId**: string (WriteOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant)
* **userId**: string (WriteOnly)
* **userName**: string (WriteOnly)
* **workspaceSystemAssignedIdentity**: bool (WriteOnly)

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedWorkspaceProps
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **description**: string (WriteOnly)
* **environmentImageRequest**: schemas:139_environmentImageRequest (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **keys**: schemas:139_keys (WriteOnly)
* **kvTags**: Dictionary<string,String> (WriteOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Dictionary<string,String>
* **sku**: Sku (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant)
### ACI
#### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: ContainerResourceRequirements (WriteOnly)
* **dataCollection**: schemas:108_dataCollection (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: schemas:108_encryptionProperties (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: schemas:108_vnetConfiguration (WriteOnly)

### Custom
#### Properties
* **computeType**: 'Custom' (Required)
* **isDefault**: bool (WriteOnly)
* **trafficPercentile**: int (WriteOnly)
* **type**: 'Control' | 'Treatment' (WriteOnly)


## Function listKeys (Microsoft.MachineLearningServices/workspaces@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2020-05-01-preview
* **Output**: ListWorkspaceKeysResult

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-01-preview
* **Output**: ComputeSecrets

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-01-preview
* **Output**: AmlCompute

## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
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
* **tags**: Dictionary<string,String>
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: PrivateEndpoint
* **privateLinkServiceConnectionState**: PrivateLinkServiceConnectionState (Required)
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
* **properties**: SharedPrivateLinkResourceProperty

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
* **provisioningErrors**: MachineLearningServiceError[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:54_properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: schemas:55_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:56_properties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:56_properties

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:56_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:56_properties


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
* **properties**: schemas:54_properties

## schemas:54_properties
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
* **properties**: schemas:55_properties

## schemas:55_properties
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
* **properties**: schemas:56_properties

## schemas:56_properties
### Properties
* **address**: string
* **administratorAccount**: VirtualMachineSshCredentials
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
* **properties**: schemas:56_properties

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:56_properties

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:56_properties

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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
* **latest**: schemas:31_latest (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **name**: string (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)

## DatasetState
### Properties
* **deprecatedBy**: schemas:32_deprecatedBy (ReadOnly)
* **etag**: string (ReadOnly)
* **state**: string (ReadOnly)

## schemas:32_deprecatedBy
### Properties
* **datasetId**: string (ReadOnly)
* **definitionVersion**: string (ReadOnly)

## schemas:31_latest
### Properties
* **createdBy**: UserInfo (ReadOnly)
* **createdTime**: string (ReadOnly)
* **dataflow**: string (ReadOnly)
* **dataPath**: schemas:31_latest_dataPath (ReadOnly)
* **datasetDefinitionState**: DatasetState (ReadOnly)
* **datasetId**: string (ReadOnly)
* **description**: string (ReadOnly)
* **etag**: string (ReadOnly)
* **fileType**: string (ReadOnly)
* **modifiedTime**: string (ReadOnly)
* **notes**: string (ReadOnly)
* **partitionFormatInPath**: bool (ReadOnly)
* **properties**: Dictionary<string,Object> (ReadOnly)
* **savedDatasetId**: string (ReadOnly)
* **tags**: Dictionary<string,String> (ReadOnly)
* **telemetryInfo**: Dictionary<string,String> (ReadOnly)
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
* **additionalProperties**: Dictionary<string,Object> (ReadOnly)
* **azureFilePath**: string (ReadOnly)
* **datastoreName**: string (ReadOnly)
* **httpUrl**: string (ReadOnly)
* **partitionFormat**: string (ReadOnly)
* **partitionFormatIgnoreError**: bool (ReadOnly)
* **paths**: string[] (ReadOnly)
* **relativePath**: string (ReadOnly)
* **sqlDataPath**: schemas:31_latest_dataPath_sqlDataPath (ReadOnly)

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
* **tags**: Dictionary<string,String> (ReadOnly)

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
* **assets**: ImageAsset[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: schemas:114_environment (WriteOnly)
* **environmentReference**: schemas:114_environmentReference (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: Model[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## schemas:114_environment
### Properties
* **docker**: schemas:117_docker (WriteOnly)
* **environmentVariables**: Dictionary<string,String> (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: schemas:117_python (WriteOnly)
* **r**: schemas:117_r (WriteOnly)
* **spark**: schemas:117_spark (WriteOnly)
* **version**: string (WriteOnly)

## schemas:117_docker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: schemas:123_baseImageRegistry (WriteOnly)

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

## schemas:117_spark
### Properties
* **packages**: SparkMavenPackage[] (WriteOnly)
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
* **datasets**: DatasetReference[] (WriteOnly)
* **derivedModelIds**: string[] (WriteOnly)
* **description**: string (WriteOnly)
* **experimentName**: string (WriteOnly)
* **framework**: string (WriteOnly)
* **frameworkVersion**: string (WriteOnly)
* **id**: string (WriteOnly)
* **kvTags**: Dictionary<string,String> (WriteOnly)
* **mimeType**: string (Required, WriteOnly)
* **modifiedTime**: string (WriteOnly)
* **name**: string (Required, WriteOnly)
* **parentModelId**: string (WriteOnly)
* **properties**: Dictionary<string,String> (WriteOnly)
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
* **containerResourceRequirements**: ContainerResourceRequirements (WriteOnly)
* **dataCollection**: schemas:108_dataCollection (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: schemas:108_encryptionProperties (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: schemas:108_vnetConfiguration (WriteOnly)

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

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: RegistryListCredentialsResult (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: Password[] (ReadOnly)
* **username**: string (ReadOnly)

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## ComputeSecrets
* **Discriminator**: computeType
### Base Properties
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: schemas:54_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:56_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:56_properties


