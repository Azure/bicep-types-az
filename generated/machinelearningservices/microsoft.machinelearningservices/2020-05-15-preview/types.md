# Microsoft.MachineLearningServices @ 2020-05-15-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [WorkspaceProperties](#workspaceproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [Compute](#compute)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [LinkedWorkspaceProps](#linkedworkspaceprops)
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties)
* **sku**: [Sku](#sku)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant)
* **description**: string (WriteOnly)
* **environmentImageRequest**: [CreateServiceRequestEnvironmentImageRequest](#createservicerequestenvironmentimagerequest) (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [Identity](#identity) (ReadOnly)
* **keys**: [CreateServiceRequestKeys](#createservicerequestkeys) (WriteOnly)
* **kvTags**: [CreateServiceRequestKvTags](#createservicerequestkvtags) (WriteOnly)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CreateServiceRequestProperties](#createservicerequestproperties)
* **sku**: [Sku](#sku) (ReadOnly)
* **tags**: [ResourceTags](#resourcetags) (ReadOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant)
### ACIServiceCreateRequest
#### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [ACIServiceCreateRequestDataCollection](#aciservicecreaterequestdatacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [ACIServiceCreateRequestEncryptionProperties](#aciservicecreaterequestencryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [ACIServiceCreateRequestVnetConfiguration](#aciservicecreaterequestvnetconfiguration) (WriteOnly)

### AKSServiceCreateRequest
#### Properties
* **aadAuthEnabled**: bool (WriteOnly)
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **autoScaler**: [AKSServiceCreateRequestAutoScaler](#aksservicecreaterequestautoscaler) (WriteOnly)
* **computeName**: string (WriteOnly)
* **computeType**: 'AKS' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [AKSServiceCreateRequestDataCollection](#aksservicecreaterequestdatacollection) (WriteOnly)
* **livenessProbeRequirements**: [AKSServiceCreateRequestLivenessProbeRequirements](#aksservicecreaterequestlivenessproberequirements) (WriteOnly)
* **maxConcurrentRequestsPerContainer**: int (WriteOnly)
* **maxQueueWaitMs**: int (WriteOnly)
* **namespace**: string (WriteOnly)
* **numReplicas**: int (WriteOnly)
* **scoringTimeoutMs**: int (WriteOnly)


## Identity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities)

## UserAssignedIdentities
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
* **tags**: [ResourceTags](#resourcetags)
* **type**: string (ReadOnly)

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint)
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required)
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
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty)

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
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly)
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly)
* **resourceId**: string
### AKS
#### Properties
* **computeType**: 'AKS' (Required)
* **properties**: [AKSProperties](#aksproperties)

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required)
* **properties**: [AmlComputeProperties](#amlcomputeproperties)

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [DatabricksProperties](#databricksproperties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required)

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [HDInsightProperties](#hdinsightproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required)
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


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
* **properties**: [AKSProperties](#aksproperties)

## AKSProperties
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
* **properties**: [AmlComputeProperties](#amlcomputeproperties)

## AmlComputeProperties
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

## Databricks
### Properties
* **computeType**: 'Databricks' (Required)
* **properties**: [DatabricksProperties](#databricksproperties)

## DatabricksProperties
### Properties
* **databricksAccessToken**: string

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required)

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required)
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required)
* **properties**: [HDInsightProperties](#hdinsightproperties)

## HDInsightProperties
### Properties
* **address**: string
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
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
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)

## VirtualMachineProperties
### Properties
* **address**: string
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials)
* **sshPort**: int
* **virtualMachineSize**: string

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
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly)
* **driverProgram**: string (WriteOnly)
* **environment**: [EnvironmentImageRequestEnvironment](#environmentimagerequestenvironment) (WriteOnly)
* **environmentReference**: [EnvironmentImageRequestEnvironmentReference](#environmentimagerequestenvironmentreference) (WriteOnly)
* **modelIds**: string[] (WriteOnly)
* **models**: [Model](#model)[] (WriteOnly)

## ImageAsset
### Properties
* **id**: string (WriteOnly)
* **mimeType**: string (WriteOnly)
* **unpack**: bool (WriteOnly)
* **url**: string (WriteOnly)

## EnvironmentImageRequestEnvironment
### Properties
* **docker**: [ModelEnvironmentDefinitionDocker](#modelenvironmentdefinitiondocker) (WriteOnly)
* **environmentVariables**: [ModelEnvironmentDefinitionEnvironmentVariables](#modelenvironmentdefinitionenvironmentvariables) (WriteOnly)
* **inferencingStackVersion**: string (WriteOnly)
* **name**: string (WriteOnly)
* **python**: [ModelEnvironmentDefinitionPython](#modelenvironmentdefinitionpython) (WriteOnly)
* **r**: [ModelEnvironmentDefinitionR](#modelenvironmentdefinitionr) (WriteOnly)
* **spark**: [ModelEnvironmentDefinitionSpark](#modelenvironmentdefinitionspark) (WriteOnly)
* **version**: string (WriteOnly)

## ModelEnvironmentDefinitionDocker
### Properties
* **baseDockerfile**: string (WriteOnly)
* **baseImage**: string (WriteOnly)
* **baseImageRegistry**: [ModelDockerSectionBaseImageRegistry](#modeldockersectionbaseimageregistry) (WriteOnly)

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

## ModelEnvironmentDefinitionSpark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly)
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
* **datasets**: [DatasetReference](#datasetreference)[] (WriteOnly)
* **derivedModelIds**: string[] (WriteOnly)
* **description**: string (WriteOnly)
* **experimentName**: string (WriteOnly)
* **framework**: string (WriteOnly)
* **frameworkVersion**: string (WriteOnly)
* **id**: string (WriteOnly)
* **kvTags**: [ModelKvTags](#modelkvtags) (WriteOnly)
* **mimeType**: string (Required, WriteOnly)
* **modifiedTime**: string (WriteOnly)
* **name**: string (Required, WriteOnly)
* **parentModelId**: string (WriteOnly)
* **properties**: [ModelProperties](#modelproperties) (WriteOnly)
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

## ACIServiceCreateRequest
### Properties
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **cname**: string (WriteOnly)
* **computeType**: 'ACI' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [ACIServiceCreateRequestDataCollection](#aciservicecreaterequestdatacollection) (WriteOnly)
* **dnsNameLabel**: string (WriteOnly)
* **encryptionProperties**: [ACIServiceCreateRequestEncryptionProperties](#aciservicecreaterequestencryptionproperties) (WriteOnly)
* **sslCertificate**: string (WriteOnly)
* **sslEnabled**: bool (WriteOnly)
* **sslKey**: string (WriteOnly)
* **vnetConfiguration**: [ACIServiceCreateRequestVnetConfiguration](#aciservicecreaterequestvnetconfiguration) (WriteOnly)

## ACIServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly)
* **storageEnabled**: bool (WriteOnly)

## ACIServiceCreateRequestEncryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly)
* **keyVersion**: string (Required, WriteOnly)
* **vaultBaseUrl**: string (Required, WriteOnly)

## ACIServiceCreateRequestVnetConfiguration
### Properties
* **subnetName**: string (WriteOnly)
* **vnetName**: string (WriteOnly)

## AKSServiceCreateRequest
### Properties
* **aadAuthEnabled**: bool (WriteOnly)
* **appInsightsEnabled**: bool (WriteOnly)
* **authEnabled**: bool (WriteOnly)
* **autoScaler**: [AKSServiceCreateRequestAutoScaler](#aksservicecreaterequestautoscaler) (WriteOnly)
* **computeName**: string (WriteOnly)
* **computeType**: 'AKS' (Required)
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly)
* **dataCollection**: [AKSServiceCreateRequestDataCollection](#aksservicecreaterequestdatacollection) (WriteOnly)
* **livenessProbeRequirements**: [AKSServiceCreateRequestLivenessProbeRequirements](#aksservicecreaterequestlivenessproberequirements) (WriteOnly)
* **maxConcurrentRequestsPerContainer**: int (WriteOnly)
* **maxQueueWaitMs**: int (WriteOnly)
* **namespace**: string (WriteOnly)
* **numReplicas**: int (WriteOnly)
* **scoringTimeoutMs**: int (WriteOnly)

## AKSServiceCreateRequestAutoScaler
### Properties
* **autoscaleEnabled**: bool (WriteOnly)
* **maxReplicas**: int (WriteOnly)
* **minReplicas**: int (WriteOnly)
* **refreshPeriodInSeconds**: int (WriteOnly)
* **targetUtilization**: int (WriteOnly)

## AKSServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly)
* **storageEnabled**: bool (WriteOnly)

## AKSServiceCreateRequestLivenessProbeRequirements
### Properties
* **failureThreshold**: int (WriteOnly)
* **initialDelaySeconds**: int (WriteOnly)
* **periodSeconds**: int (WriteOnly)
* **successThreshold**: int (WriteOnly)
* **timeoutSeconds**: int (WriteOnly)

