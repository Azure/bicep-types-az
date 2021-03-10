# Microsoft.MachineLearningServices @ 2020-09-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Compute](#compute)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/connections@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/labelingJobs@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LabelingJobProperties](#labelingjobproperties)
* **systemData**: [systemData](#systemdata) (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/labelingJobs' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/linkedServices@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedServiceProps](#linkedserviceprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedServices' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-09-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2020-09-01-preview' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: [schemas:141_environmentImageRequest](#schemas141environmentimagerequest) (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **keys**: [schemas:141_keys](#schemas141keys) (WriteOnly)
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
* **dataCollection**: [schemas:110_dataCollection](#schemas110datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:110_encryptionProperties](#schemas110encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:110_vnetConfiguration](#schemas110vnetconfiguration) (WriteOnly)

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
* **properties**: [schemas:53_properties](#schemas53properties)

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [schemas:54_properties](#schemas54properties)

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required)
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
* **properties**: [schemas:53_properties](#schemas53properties)

## schemas:53_properties
### Properties
* **agentCount**: int
* **agentVmSize**: string
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
* **status**: 'Auto' | 'Disabled' | 'Enabled'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly)
* **systemServiceType**: string (ReadOnly)
* **version**: string (ReadOnly)

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [schemas:54_properties](#schemas54properties)

## schemas:54_properties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly)
* **allocationStateTransitionTime**: string (ReadOnly)
* **currentNodeCount**: int (ReadOnly)
* **enableNodePublicIp**: bool
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **isolatedNetwork**: bool
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly)
* **osType**: 'Linux' | 'Windows'
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified'
* **scaleSettings**: [ScaleSettings](#scalesettings)
* **subnet**: [ResourceId](#resourceid)
* **targetNodeCount**: int (ReadOnly)
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials)
* **virtualMachineImage**: [VirtualMachineImage](#virtualmachineimage)
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
* **properties**: [schemas:55_properties](#schemas55properties)

## schemas:55_properties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly)
* **applicationSharingPolicy**: 'Personal' | 'Shared'
* **computeInstanceAuthorizationType**: 'personal'
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly)
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly)
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly)
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings)
* **setupScripts**: [SetupScripts](#setupscripts)
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings)
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly)
* **subnet**: [ResourceId](#resourceid)
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
* **assignedUser**: [AssignedUser](#assigneduser)

## AssignedUser
### Properties
* **objectId**: string (Required)
* **tenantId**: string (Required)

## SetupScripts
### Properties
* **scripts**: [ScriptsToExecute](#scriptstoexecute)

## ScriptsToExecute
### Properties
* **creationScript**: [ScriptReference](#scriptreference)
* **startupScript**: [ScriptReference](#scriptreference)

## ScriptReference
### Properties
* **scriptArguments**: string
* **scriptData**: string
* **scriptSource**: string
* **timeout**: string

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string
* **adminUserName**: string (ReadOnly)
* **sshPort**: int (ReadOnly)
* **sshPublicAccess**: 'Disabled' | 'Enabled'

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

## WorkspaceConnectionProps
### Properties
* **authType**: string
* **category**: string
* **target**: string
* **value**: string

## LabelingJobProperties
### Properties
* **createdTimeUtc**: string (ReadOnly)
* **datasetConfiguration**: [LabelingDatasetConfiguration](#labelingdatasetconfiguration) (Required)
* **jobInstructions**: [LabelingJobInstructions](#labelingjobinstructions) (Required)
* **labelCategories**: [Dictionary<string,LabelCategory>](#dictionarystringlabelcategory) (Required)
* **labelingJobMediaProperties**: [mediaType](#mediatype) (Required)
* **mlAssistConfiguration**: [MLAssistConfiguration](#mlassistconfiguration)
* **progressMetrics**: [ProgressMetrics](#progressmetrics) (ReadOnly)
* **projectId**: string (ReadOnly)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **status**: 'Canceled' | 'CancelRequested' | 'Completed' | 'Failed' | 'Finalizing' | 'NotResponding' | 'NotStarted' | 'Paused' | 'Preparing' | 'Provisioning' | 'Queued' | 'Running' | 'Starting' (ReadOnly)
* **statusMessages**: [StatusMessage](#statusmessage)[] (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)

## LabelingDatasetConfiguration
### Properties
* **assetName**: string (Required)
* **datasetVersion**: string (Required)
* **enableIncrementalDatasetRefresh**: bool

## LabelingJobInstructions
### Properties
* **uri**: string

## Dictionary<string,LabelCategory>
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelCategory](#labelcategory)

## LabelCategory
### Properties
* **allowMultiSelect**: bool
* **classes**: [Dictionary<string,LabelClass>](#dictionarystringlabelclass) (Required)
* **displayName**: string

## Dictionary<string,LabelClass>
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelClass](#labelclass)

## LabelClass
### Properties
* **displayName**: string
* **subclasses**: [Dictionary<string,LabelClass>](#dictionarystringlabelclass)

## Dictionary<string,LabelClass>
### Properties
### Additional Properties
* **Additional Properties Type**: [LabelClass](#labelclass)

## mediaType
### Properties
* **annotationType**: 'BoundingBox' | 'Classification' | 'InstanceSegmentation'
* **mediaType**: 'Image' | 'Text' (Required)
### Additional Properties
* **Additional Properties Type**: any

## MLAssistConfiguration
### Properties
* **inferencingComputeBinding**: [ComputeBinding](#computebinding) (Required)
* **mlAssistEnabled**: bool
* **modelNamePrefix**: string (Required)
* **prelabelAccuracyThreshold**: int
* **trainingComputeBinding**: [ComputeBinding](#computebinding) (Required)

## ComputeBinding
### Properties
* **computeId**: string
* **nodeCount**: int

## ProgressMetrics
### Properties
* **completedDatapointCount**: int (ReadOnly)
* **incrementalDatasetLastRefreshTime**: string (ReadOnly)
* **skippedDatapointCount**: int (ReadOnly)
* **totalDatapointCount**: int (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## StatusMessage
### Properties
* **code**: string (ReadOnly)
* **createdTimeUtc**: string (ReadOnly)
* **level**: 'Error' | 'Information' | 'Warning' (ReadOnly)
* **message**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## systemData
### Properties
* **createdAt**: string (ReadOnly)
* **createdBy**: string (ReadOnly)
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)
* **lastModifiedAt**: string (ReadOnly)
* **lastModifiedBy**: string (ReadOnly)
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' (ReadOnly)

## LinkedServiceProps
### Properties
* **createdTime**: string
* **linkedServiceResourceId**: string (Required)
* **linkType**: 'Synapse'
* **modifiedTime**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:141_environmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: [schemas:116_environment](#schemas116environment) (WriteOnly)
* **environmentReference**: [schemas:116_environmentReference](#schemas116environmentreference) (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: [Model](#model)[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## schemas:116_environment
### Properties
* **docker**: [schemas:119_docker](#schemas119docker) (WriteOnly)
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: [schemas:119_python](#schemas119python) (WriteOnly)
* **r**: [schemas:119_r](#schemas119r) (WriteOnly)
* **spark**: [schemas:119_spark](#schemas119spark) (WriteOnly)
* **version**: string (WriteOnly)

## schemas:119_docker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: [schemas:125_baseImageRegistry](#schemas125baseimageregistry) (WriteOnly)

## schemas:125_baseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:119_python
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly)
* **interpreterPath**: string (WriteOnly)
* **userManagedDependencies**: bool (WriteOnly)

## schemas:119_r
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

## schemas:119_spark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly)
* **precachePackages**: bool (WriteOnly)
* **repositories**: string[] (WriteOnly)

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## schemas:116_environmentReference
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

## schemas:141_keys
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
* **dataCollection**: [schemas:110_dataCollection](#schemas110datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:110_encryptionProperties](#schemas110encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:110_vnetConfiguration](#schemas110vnetconfiguration) (WriteOnly)

## schemas:110_dataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly)
* **storageEnabled**: bool (WriteOnly)

## schemas:110_encryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly)
* **keyVersion**: string (Required, WriteOnly)
* **vaultBaseUrl**: string (Required, WriteOnly)

## schemas:110_vnetConfiguration
### Properties
* **subnetName**: string (WriteOnly)
* **vnetName**: string (WriteOnly)

## Custom
### Properties
* **computeType**: 'Custom' (Required)
* **isDefault**: bool (WriteOnly)
* **trafficPercentile**: int (WriteOnly)
* **type**: 'Control' | 'Treatment' (WriteOnly)

