# Microsoft.MachineLearningServices @ 2020-09-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: Compute
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/connections@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: WorkspaceConnectionProps
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: LinkedServiceProps
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: PrivateEndpointConnectionProperties
* **sku**: Sku
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: schemas:122_environmentImageRequest (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: Identity (ReadOnly)
* **keys**: schemas:122_keys (WriteOnly)
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
* **dataCollection**: schemas:91_dataCollection (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: schemas:91_encryptionProperties (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: schemas:91_vnetConfiguration (WriteOnly)

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
* **userAssignedIdentities**: Dictionary<string,UserAssignedIdentity>

## Dictionary<string,UserAssignedIdentity>
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
* **properties**: schemas:34_properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: schemas:35_properties

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: schemas:36_properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:37_properties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: schemas:37_properties

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:37_properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:37_properties


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
* **properties**: schemas:34_properties

## schemas:34_properties
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
* **properties**: schemas:35_properties

## schemas:35_properties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **enableNodePublicIp**: bool
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **isolatedNetwork**: bool
* **nodeStateCounts**: NodeStateCounts (ReadOnly)
* **osType**: 'Linux' | 'Windows'
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: ScaleSettings
* **subnet**: ResourceId
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: UserAccountCredentials
* **virtualMachineImage**: VirtualMachineImage
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

## VirtualMachineImage
### Properties
* **id**: string (Required)

## ComputeInstance
### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: schemas:36_properties

## schemas:36_properties
### Properties
* **applications**: ComputeInstanceApplication[] (ReadOnly)
* **applicationSharingPolicy**: 'Personal' | 'Shared'
* **computeInstanceAuthorizationType**: 'personal'
* **connectivityEndpoints**: ComputeInstanceConnectivityEndpoints (ReadOnly)
* **createdBy**: ComputeInstanceCreatedBy (ReadOnly)
* **errors**: MachineLearningServiceError[] (ReadOnly)
* **lastOperation**: ComputeInstanceLastOperation (ReadOnly)
* **personalComputeInstanceSettings**: PersonalComputeInstanceSettings
* **sshSettings**: ComputeInstanceSshSettings
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly)
* **subnet**: ResourceId
* **vmSize**: string

## ComputeInstanceApplication
### Properties
* **displayName**: string
* **endpointUri**: string

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly)
* **publicIpAddress**: string (ReadOnly)

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly)
* **userName**: string (ReadOnly)
* **userOrgId**: string (ReadOnly)

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop'
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded'
* **operationTime**: string

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: AssignedUser

## AssignedUser
### Properties
* **objectId**: string (Required)
* **tenantId**: string (Required)

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string
* **adminUserName**: string (ReadOnly)
* **sshPort**: int (ReadOnly)
* **sshPublicAccess**: 'Disabled' | 'Enabled'

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: schemas:37_properties

## schemas:37_properties
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
* **properties**: schemas:37_properties

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: schemas:37_properties

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: schemas:37_properties

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionProps
### Properties
* **authType**: string
* **category**: string
* **target**: string
* **value**: string

## LinkedServiceProps
### Properties
* **createdTime**: string
* **linkedServiceResourceId**: string (Required)
* **linkType**: 'Synapse'
* **modifiedTime**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:122_environmentImageRequest
### Properties
* **assets**: ImageAsset[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: schemas:97_environment (WriteOnly)
* **environmentReference**: schemas:97_environmentReference (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: Model[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## schemas:97_environment
### Properties
* **docker**: schemas:100_docker (WriteOnly)
* **environmentVariables**: Dictionary<string,String> (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: schemas:100_python (WriteOnly)
* **r**: schemas:100_r (WriteOnly)
* **spark**: schemas:100_spark (WriteOnly)
* **version**: string (WriteOnly)

## schemas:100_docker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: schemas:106_baseImageRegistry (WriteOnly)

## schemas:106_baseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## schemas:100_python
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly)
* **interpreterPath**: string (WriteOnly)
* **userManagedDependencies**: bool (WriteOnly)

## schemas:100_r
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

## schemas:100_spark
### Properties
* **packages**: SparkMavenPackage[] (WriteOnly)
* **precachePackages**: bool (WriteOnly)
* **repositories**: string[] (WriteOnly)

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## schemas:97_environmentReference
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
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ContainerResourceRequirements
### Properties
* **cpu**: int (WriteOnly)
* **fpga**: int (WriteOnly)
* **gpu**: int (WriteOnly)
* **memoryInGB**: int (WriteOnly)

## schemas:122_keys
### Properties
* **primaryKey**: string (WriteOnly)
* **secondaryKey**: string (WriteOnly)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## ACI
### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: ContainerResourceRequirements (WriteOnly)
* **dataCollection**: schemas:91_dataCollection (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: schemas:91_encryptionProperties (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: schemas:91_vnetConfiguration (WriteOnly)

## schemas:91_dataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly)
* **storageEnabled**: bool (WriteOnly)

## schemas:91_encryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly)
* **keyVersion**: string (Required, WriteOnly)
* **vaultBaseUrl**: string (Required, WriteOnly)

## schemas:91_vnetConfiguration
### Properties
* **subnetName**: string (WriteOnly)
* **vnetName**: string (WriteOnly)

## Custom
### Properties
* **computeType**: 'Custom' (Required)
* **isDefault**: bool (WriteOnly)
* **trafficPercentile**: int (WriteOnly)
* **type**: 'Control' | 'Treatment' (WriteOnly)

