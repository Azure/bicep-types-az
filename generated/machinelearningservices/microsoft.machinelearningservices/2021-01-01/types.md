# Microsoft.MachineLearningServices @ 2021-01-01

## Resource Microsoft.MachineLearningServices/workspaces@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Compute](#compute)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/connections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2021-01-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: [schemas:122_environmentImageRequest](#schemas122environmentimagerequest) (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **keys**: [schemas:122_keys](#schemas122keys) (WriteOnly)
* **kvTags**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Dictionary<string,String>](#dictionarystringstring)
* **sku**: [Sku](#sku) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant)
### ACI
#### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [schemas:91_dataCollection](#schemas91datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:91_encryptionProperties](#schemas91encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:91_vnetConfiguration](#schemas91vnetconfiguration) (WriteOnly)

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
* **description**: string
* **discoveryUrl**: string
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string
* **hbiWorkspace**: bool
* **imageBuildCompute**: string
* **keyVault**: string
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly)
* **primaryUserAssignedIdentity**: string
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly)
* **privateLinkCount**: int (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings)
* **serviceProvisionedResourceGroup**: string (ReadOnly)
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]
* **storageAccount**: string
* **workspaceId**: string (ReadOnly)

## EncryptionProperty
### Properties
* **identity**: [IdentityForCmk](#identityforcmk)
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required)

## IdentityForCmk
### Properties
* **userAssignedIdentity**: string (Required)

## KeyVaultProperties
### Properties
* **identityClientId**: string
* **keyIdentifier**: string (Required)
* **keyVaultArmId**: string (Required)

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror)
* **resourceId**: string

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (ReadOnly)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **systemData**: [SystemData](#systemdata) (ReadOnly)
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
* **subnetArmId**: string (ReadOnly)

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string
* **description**: string
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout'

## Sku
### Properties
* **name**: string
* **tier**: string

## SystemData
### Properties
* **createdAt**: string
* **createdBy**: string
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user'
* **lastModifiedAt**: string
* **lastModifiedBy**: string
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings)

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int

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
* **description**: string
* **isAttachedCompute**: bool (ReadOnly)
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [schemas:35_properties](#schemas35properties)

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [schemas:36_properties](#schemas36properties)

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required)
* **properties**: [schemas:37_properties](#schemas37properties)

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)


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
* **properties**: [schemas:35_properties](#schemas35properties)

## schemas:35_properties
### Properties
* **agentCount**: int
* **agentVmSize**: string
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration)
* **clusterFqdn**: string
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd'
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
* **properties**: [schemas:36_properties](#schemas36properties)

## schemas:36_properties
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
* **properties**: [schemas:37_properties](#schemas37properties)

## schemas:37_properties
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
* **properties**: [schemas:38_properties](#schemas38properties)

## schemas:38_properties
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
* **properties**: [schemas:38_properties](#schemas38properties)

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [schemas:38_properties](#schemas38properties)

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
* **valueFormat**: 'JSON'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:122_environmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: [schemas:97_environment](#schemas97environment) (WriteOnly)
* **environmentReference**: [schemas:97_environmentReference](#schemas97environmentreference) (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: [Model](#model)[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## schemas:97_environment
### Properties
* **docker**: [schemas:100_docker](#schemas100docker) (WriteOnly)
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: [schemas:100_python](#schemas100python) (WriteOnly)
* **r**: [schemas:100_r](#schemas100r) (WriteOnly)
* **spark**: [schemas:100_spark](#schemas100spark) (WriteOnly)
* **version**: string (WriteOnly)

## schemas:100_docker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: [schemas:106_baseImageRegistry](#schemas106baseimageregistry) (WriteOnly)

## schemas:106_baseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## Dictionary<string,String>
### Properties
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

## schemas:100_spark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly)
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
* **cpuLimit**: int (WriteOnly)
* **fpga**: int (WriteOnly)
* **gpu**: int (WriteOnly)
* **memoryInGB**: int (WriteOnly)
* **memoryInGBLimit**: int (WriteOnly)

## schemas:122_keys
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
* **dataCollection**: [schemas:91_dataCollection](#schemas91datacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [schemas:91_encryptionProperties](#schemas91encryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [schemas:91_vnetConfiguration](#schemas91vnetconfiguration) (WriteOnly)

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

