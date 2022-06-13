# Microsoft.MachineLearningServices @ 2020-05-15-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of the machine learning workspace.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedWorkspaceProps](#linkedworkspaceprops): LinkedWorkspace specific properties.
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-15-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2020-05-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **description**: string (WriteOnly): The description of the service.
* **environmentImageRequest**: [CreateServiceRequestEnvironmentImageRequest](#createservicerequestenvironmentimagerequest) (WriteOnly): The Environment, models and assets needed for inferencing.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): The identity of the resource.
* **keys**: [CreateServiceRequestKeys](#createservicerequestkeys) (WriteOnly): The authentication keys.
* **kvTags**: [CreateServiceRequestKvTags](#createservicerequestkvtags) (WriteOnly): The service tag dictionary. Tags are mutable.
* **location**: string: The name of the Azure location/region.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CreateServiceRequestProperties](#createservicerequestproperties): The service properties dictionary. Properties are immutable.
* **sku**: [Sku](#sku) (ReadOnly): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant): The resource type
### ACIServiceCreateRequest
#### Properties
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled on the service.
* **cname**: string (WriteOnly): The CName for the service.
* **computeType**: 'ACI' (Required): The compute environment type for the service.
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The container resource requirements.
* **dataCollection**: [ACIServiceCreateRequestDataCollection](#aciservicecreaterequestdatacollection) (WriteOnly): Details of the data collection options specified.
* **dnsNameLabel**: string (WriteOnly): The Dns label for the service.
* **encryptionProperties**: [ACIServiceCreateRequestEncryptionProperties](#aciservicecreaterequestencryptionproperties) (WriteOnly): The encryption properties.
* **sslCertificate**: string (WriteOnly): The public SSL certificate in PEM format to use if SSL is enabled.
* **sslEnabled**: bool (WriteOnly): Whether or not SSL is enabled.
* **sslKey**: string (WriteOnly): The public SSL key in PEM format for the certificate.
* **vnetConfiguration**: [ACIServiceCreateRequestVnetConfiguration](#aciservicecreaterequestvnetconfiguration) (WriteOnly): The virtual network configuration.

### AKSServiceCreateRequest
#### Properties
* **aadAuthEnabled**: bool (WriteOnly): Whether or not AAD authentication is enabled.
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled.
* **autoScaler**: [AKSServiceCreateRequestAutoScaler](#aksservicecreaterequestautoscaler) (WriteOnly): The auto scaler properties.
* **computeName**: string (WriteOnly): The name of the compute resource.
* **computeType**: 'AKS' (Required): The compute environment type for the service.
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The container resource requirements.
* **dataCollection**: [AKSServiceCreateRequestDataCollection](#aksservicecreaterequestdatacollection) (WriteOnly): Details of the data collection options specified.
* **livenessProbeRequirements**: [AKSServiceCreateRequestLivenessProbeRequirements](#aksservicecreaterequestlivenessproberequirements) (WriteOnly): The liveness probe requirements.
* **maxConcurrentRequestsPerContainer**: int (WriteOnly): The maximum number of concurrent requests per container.
* **maxQueueWaitMs**: int (WriteOnly): Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
* **namespace**: string (WriteOnly): Kubernetes namespace for the service.
* **numReplicas**: int (WriteOnly): The number of replicas on the cluster.
* **scoringTimeoutMs**: int (WriteOnly): The scoring timeout in milliseconds.


## Function listKeys (Microsoft.MachineLearningServices/workspaces@2020-05-15-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2020-05-15-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2020-05-15-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-15-preview
* **Output**: [ComputeSecrets](#computesecrets)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2020-05-15-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-15-preview
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## ACIServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly): Option for enabling/disabling Event Hub.
* **storageEnabled**: bool (WriteOnly): Option for enabling/disabling storage.

## ACIServiceCreateRequestEncryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly): Encryption Key name
* **keyVersion**: string (Required, WriteOnly): Encryption Key Version
* **vaultBaseUrl**: string (Required, WriteOnly): vault base Url

## ACIServiceCreateRequestVnetConfiguration
### Properties
* **subnetName**: string (WriteOnly): The name of the virtual network subnet.
* **vnetName**: string (WriteOnly): The name of the virtual network.

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## AKSProperties
### Properties
* **agentCount**: int: Number of agents
* **agentVMSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): AKS networking configuration for vnet
* **clusterFqdn**: string: Cluster full qualified domain name
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): SSL configuration
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AKSServiceCreateRequestAutoScaler
### Properties
* **autoscaleEnabled**: bool (WriteOnly): Option to enable/disable auto scaling.
* **maxReplicas**: int (WriteOnly): The maximum number of replicas in the cluster.
* **minReplicas**: int (WriteOnly): The minimum number of replicas to scale down to.
* **refreshPeriodInSeconds**: int (WriteOnly): The amount of seconds to wait between auto scale updates.
* **targetUtilization**: int (WriteOnly): The target utilization percentage to use for determining whether to scale the cluster.

## AKSServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly): Option for enabling/disabling Event Hub.
* **storageEnabled**: bool (WriteOnly): Option for enabling/disabling storage.

## AKSServiceCreateRequestLivenessProbeRequirements
### Properties
* **failureThreshold**: int (WriteOnly): The number of failures to allow before returning an unhealthy status.
* **initialDelaySeconds**: int (WriteOnly): The delay before the first probe in seconds.
* **periodSeconds**: int (WriteOnly): The length of time between probes in seconds.
* **successThreshold**: int (WriteOnly): The number of successful probes before returning a healthy status.
* **timeoutSeconds**: int (WriteOnly): The probe timeout in seconds.

## AmlComputeNodeInformation
### Properties
* **nodeId**: string (ReadOnly): ID of the compute node.
* **nodeState**: 'idle' | 'leaving' | 'preempted' | 'preparing' | 'running' | 'unusable' | string (ReadOnly): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
* **port**: int (ReadOnly): SSH port number of the node.
* **privateIpAddress**: string (ReadOnly): Private IP address of the compute node.
* **publicIpAddress**: string (ReadOnly): Public IP address of the compute node.
* **runId**: string (ReadOnly): ID of the Experiment running on the node, if any else null.

## AmlComputeNodesInformation
### Properties
* **computeType**: 'AKS' | 'AmlCompute' | 'DataFactory' | 'DataLakeAnalytics' | 'Databricks' | 'HDInsight' | 'VirtualMachine' | string (ReadOnly): The type of compute
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | string (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **isolatedNetwork**: bool: Network is isolated or not
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various node states on the compute.
* **osType**: 'Linux' | 'Windows' | string: Compute OS Type
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): Scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Virtual network subnet resource ID the compute nodes belong to.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Credentials for an administrator user account that will be created on each compute node.
* **virtualMachineImage**: [VirtualMachineImage](#virtualmachineimage): Virtual Machine image for AML Compute - windows only
* **vmPriority**: 'Dedicated' | 'LowPriority' | string: Virtual Machine priority
* **vmSize**: string: Virtual Machine Size

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The date and time when the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The date and time when the compute was last modified.
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
* **resourceId**: string: ARM resource id of the underlying compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute
* **properties**: [AKSProperties](#aksproperties): AKS properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): The type of compute
* **properties**: [AmlComputeProperties](#amlcomputeproperties): AML Compute properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **properties**: [DatabricksProperties](#databricksproperties)

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): The type of compute
* **properties**: [DataLakeAnalyticsProperties](#datalakeanalyticsproperties)

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): The type of compute
* **properties**: [HDInsightProperties](#hdinsightproperties)

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


## ComputeSecrets
* **Discriminator**: computeType

### Base Properties
### AksComputeSecrets
#### Properties
* **adminKubeConfig**: string (ReadOnly): Content of kubeconfig file that can be used to connect to the Kubernetes cluster.
* **computeType**: 'AKS' (Required): The type of compute
* **imagePullSecretName**: string (ReadOnly): Image registry pull secret.
* **userKubeConfig**: string (ReadOnly): Content of kubeconfig file that can be used to connect to the Kubernetes cluster.

### DatabricksComputeSecrets
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **databricksAccessToken**: string (ReadOnly): access token for databricks account.

### VirtualMachineSecrets
#### Properties
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials) (ReadOnly): Admin credentials for virtual machine.
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ContainerResourceRequirements
### Properties
* **cpu**: int (WriteOnly): The number of CPU cores on the container.
* **fpga**: int (WriteOnly): The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int (WriteOnly): The number of GPU cores in the container.
* **memoryInGB**: int (WriteOnly): The amount of memory on the container in GB.

## CreateServiceRequestEnvironmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly): The list of assets.
* **driverProgram**: string (WriteOnly): The name of the driver file.
* **environment**: [EnvironmentImageRequestEnvironment](#environmentimagerequestenvironment) (WriteOnly): The details of the AZURE ML environment.
* **environmentReference**: [EnvironmentImageRequestEnvironmentReference](#environmentimagerequestenvironmentreference) (WriteOnly): The unique identifying details of the AZURE ML environment.
* **modelIds**: string[] (WriteOnly): The list of model Ids.
* **models**: [Model](#model)[] (WriteOnly): The list of models.

## CreateServiceRequestKeys
### Properties
* **primaryKey**: string (WriteOnly): The primary key.
* **secondaryKey**: string (WriteOnly): The secondary key.

## CreateServiceRequestKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CreateServiceRequestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## DatasetReference
### Properties
* **id**: string (WriteOnly): The id of the dataset reference.
* **name**: string (WriteOnly): The name of the dataset reference.

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required): Customer Key vault properties.
* **status**: 'Disabled' | 'Enabled' | string (Required): Indicates whether or not the encryption is enabled for the workspace.

## EnvironmentImageRequestEnvironment
### Properties
* **docker**: [ModelEnvironmentDefinitionDocker](#modelenvironmentdefinitiondocker) (WriteOnly): The definition of a Docker container.
* **environmentVariables**: [ModelEnvironmentDefinitionEnvironmentVariables](#modelenvironmentdefinitionenvironmentvariables) (WriteOnly): Definition of environment variables to be defined in the environment.
* **inferencingStackVersion**: string (WriteOnly): The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
* **name**: string (WriteOnly): The name of the environment.
* **python**: [ModelEnvironmentDefinitionPython](#modelenvironmentdefinitionpython) (WriteOnly): Settings for a Python environment.
* **r**: [ModelEnvironmentDefinitionR](#modelenvironmentdefinitionr) (WriteOnly): Settings for a R environment.
* **spark**: [ModelEnvironmentDefinitionSpark](#modelenvironmentdefinitionspark) (WriteOnly): The configuration for a Spark environment.
* **version**: string (WriteOnly): The environment version.

## EnvironmentImageRequestEnvironmentReference
### Properties
* **name**: string (WriteOnly): Name of the environment.
* **version**: string (WriteOnly): Version of the environment.

## ErrorDetail
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.

## ErrorResponse
### Properties
* **code**: string (ReadOnly): Error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): An array of error detail objects.
* **message**: string (ReadOnly): Error message.

## HDInsightProperties
### Properties
* **address**: string: Public IP address of the master node of the cluster.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for master node of the cluster
* **sshPort**: int: Port open for ssh connections on the master node of the cluster.

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned': The identity type.
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The user assigned identities associated with the resource.

## ImageAsset
### Properties
* **id**: string (WriteOnly): The Asset Id.
* **mimeType**: string (WriteOnly): The mime type.
* **unpack**: bool (WriteOnly): Whether the Asset is unpacked.
* **url**: string (WriteOnly): The Url of the Asset.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## LinkedWorkspaceProps
### Properties
* **linkedWorkspaceResourceId**: string: ResourceId of the link target of the linked workspace.
* **userAssignedIdentityResourceId**: string: ResourceId of the user assigned identity for the linked workspace.

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The error response.

## Model
### Properties
* **createdTime**: string (WriteOnly): The Model creation time (UTC).
* **datasets**: [DatasetReference](#datasetreference)[] (WriteOnly): The list of datasets associated with the model.
* **derivedModelIds**: string[] (WriteOnly): Models derived from this model
* **description**: string (WriteOnly): The Model description text.
* **experimentName**: string (WriteOnly): The name of the experiment where this model was created.
* **framework**: string (WriteOnly): The Model framework.
* **frameworkVersion**: string (WriteOnly): The Model framework version.
* **id**: string (WriteOnly): The Model Id.
* **kvTags**: [ModelKvTags](#modelkvtags) (WriteOnly): The Model tag dictionary. Items are mutable.
* **mimeType**: string (Required, WriteOnly): The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
* **modifiedTime**: string (WriteOnly): The Model last modified time (UTC).
* **name**: string (Required, WriteOnly): The Model name.
* **parentModelId**: string (WriteOnly): The Parent Model Id.
* **properties**: [ModelProperties](#modelproperties) (WriteOnly): The Model property dictionary. Properties are immutable.
* **resourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): Resource requirements for the model
* **runId**: string (WriteOnly): The RunId that created this model.
* **sampleInputData**: string (WriteOnly): Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **sampleOutputData**: string (WriteOnly): Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **unpack**: bool (WriteOnly): Indicates whether we need to unpack the Model during docker Image creation.
* **url**: string (Required, WriteOnly): The URL of the Model. Usually a SAS URL.
* **version**: int (WriteOnly): The Model version assigned by Model Management Service.

## ModelDockerSectionBaseImageRegistry
### Properties
* **address**: string (WriteOnly)
* **password**: string (WriteOnly)
* **username**: string (WriteOnly)

## ModelEnvironmentDefinitionDocker
### Properties
* **baseDockerfile**: string (WriteOnly): Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
* **baseImage**: string (WriteOnly): Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
* **baseImageRegistry**: [ModelDockerSectionBaseImageRegistry](#modeldockersectionbaseimageregistry) (WriteOnly): Image registry that contains the base image.

## ModelEnvironmentDefinitionEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelEnvironmentDefinitionPython
### Properties
* **baseCondaEnvironment**: string (WriteOnly)
* **condaDependencies**: any (WriteOnly): A JObject containing Conda dependencies.
* **interpreterPath**: string (WriteOnly): The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
* **userManagedDependencies**: bool (WriteOnly): True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

## ModelEnvironmentDefinitionR
### Properties
* **bioConductorPackages**: string[] (WriteOnly): The packages from Bioconductor.
* **cranPackages**: [RCranPackage](#rcranpackage)[] (WriteOnly): The CRAN packages to use.
* **customUrlPackages**: string[] (WriteOnly): The packages from custom urls.
* **gitHubPackages**: [RGitHubPackage](#rgithubpackage)[] (WriteOnly): The packages directly from GitHub.
* **rscriptPath**: string (WriteOnly): The Rscript path to use if an environment build is not required.
The path specified gets used to call the user script.
* **rVersion**: string (WriteOnly): The version of R to be installed
* **snapshotDate**: string (WriteOnly): Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
* **userManaged**: bool (WriteOnly): Indicates whether the environment is managed by user or by AzureML.

## ModelEnvironmentDefinitionSpark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly): The Spark packages to use.
* **precachePackages**: bool (WriteOnly): Whether to precache the packages.
* **repositories**: string[] (WriteOnly): The list of spark repositories.

## ModelKvTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the amlCompute.
* **preemptedNodeCount**: int (ReadOnly): Number of compute nodes which are in preempted state.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## RCranPackage
### Properties
* **name**: string (WriteOnly): The package name.
* **repository**: string (WriteOnly): The repository name.

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[] (ReadOnly)
* **username**: string (ReadOnly)

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RGitHubPackage
### Properties
* **authToken**: string (WriteOnly): Personal access token to install from a private repo
* **repository**: string (WriteOnly): Repository address in the format username/repo[/subdir][@ref|#pull].

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Resource properties.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly)
* **group**: string (WriteOnly)
* **version**: string (WriteOnly)

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **status**: 'Disabled' | 'Enabled' | string: Enable or disable ssl for scoring

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The clientId(aka appId) of the user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the user assigned identity.

## VirtualMachineImage
### Properties
* **id**: string (Required): Virtual Machine image path

## VirtualMachineProperties
### Properties
* **address**: string: Public IP address of the virtual machine.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string: Private key data
* **publicKeyData**: string: Public key data
* **username**: string: Username of admin account

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **creationTime**: string (ReadOnly): The creation time of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty): The encryption settings of Azure ML workspace.
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

