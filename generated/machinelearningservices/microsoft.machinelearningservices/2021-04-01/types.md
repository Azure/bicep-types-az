# Microsoft.MachineLearningServices @ 2021-04-01

## Resource Microsoft.MachineLearningServices/workspaces@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of the machine learning workspace.
* **sku**: [Sku](#sku): The sku of the workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **sku**: [Sku](#sku): The sku of the workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops): Properties of workspace connection.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/services@2021-04-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2021-04-01' (ReadOnly, DeployTimeConstant): The resource api version
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
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
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
* **isDefault**: bool (WriteOnly): Is this the default variant.
* **livenessProbeRequirements**: [AKSServiceCreateRequestLivenessProbeRequirements](#aksservicecreaterequestlivenessproberequirements) (WriteOnly): The liveness probe requirements.
* **maxConcurrentRequestsPerContainer**: int (WriteOnly): The maximum number of concurrent requests per container.
* **maxQueueWaitMs**: int (WriteOnly): Maximum time a request will wait in the queue (in milliseconds). After this time, the service will return 503 (Service Unavailable)
* **namespace**: string (WriteOnly): Kubernetes namespace for the service.
* **numReplicas**: int (WriteOnly): The number of replicas on the cluster.
* **scoringTimeoutMs**: int (WriteOnly): The scoring timeout in milliseconds.
* **trafficPercentile**: int (WriteOnly): The amount of traffic variant receives.
* **type**: 'Control' | 'Treatment' | string (WriteOnly): The type of the variant.


## Function listKeys (Microsoft.MachineLearningServices/workspaces@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-04-01
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2021-04-01
* **Output**: [ComputeSecrets](#computesecrets)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2021-04-01
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## Function listNotebookAccessToken (Microsoft.MachineLearningServices/workspaces@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-04-01
* **Output**: [NotebookAccessTokenResult](#notebookaccesstokenresult)

## Function listNotebookKeys (Microsoft.MachineLearningServices/workspaces@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-04-01
* **Output**: [ListNotebookKeysResult](#listnotebookkeysresult)

## Function listStorageAccountKeys (Microsoft.MachineLearningServices/workspaces@2021-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2021-04-01
* **Output**: [ListStorageAccountKeysResult](#liststorageaccountkeysresult)

## ACIServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool: Option for enabling/disabling Event Hub.
* **storageEnabled**: bool: Option for enabling/disabling storage.

## ACIServiceCreateRequestEncryptionProperties
### Properties
* **keyName**: string (Required): Encryption Key name
* **keyVersion**: string (Required): Encryption Key Version
* **vaultBaseUrl**: string (Required): vault base Url

## ACIServiceCreateRequestVnetConfiguration
### Properties
* **subnetName**: string: The name of the virtual network subnet.
* **vnetName**: string: The name of the virtual network.

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string {pattern: "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"}: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string {pattern: "^([0-9]{1,3}\.){3}[0-9]{1,3}(\/([0-9]|[1-2][0-9]|3[0-2]))?$"}: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## AKSProperties
### Properties
* **agentCount**: int {minValue: 0}: Number of agents
* **agentVmSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): AKS networking configuration for vnet
* **clusterFqdn**: string: Cluster full qualified domain name
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd' | string: Intended usage of the cluster
* **loadBalancerSubnet**: string: Load Balancer Subnet
* **loadBalancerType**: 'InternalLoadBalancer' | 'PublicIp' | string: Load Balancer Type
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): SSL configuration
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AKSServiceCreateRequestAutoScaler
### Properties
* **autoscaleEnabled**: bool: Option to enable/disable auto scaling.
* **maxReplicas**: int: The maximum number of replicas in the cluster.
* **minReplicas**: int: The minimum number of replicas to scale down to.
* **refreshPeriodInSeconds**: int: The amount of seconds to wait between auto scale updates.
* **targetUtilization**: int: The target utilization percentage to use for determining whether to scale the cluster.

## AKSServiceCreateRequestDataCollection
### Properties
* **eventHubEnabled**: bool: Option for enabling/disabling Event Hub.
* **storageEnabled**: bool: Option for enabling/disabling storage.

## AKSServiceCreateRequestLivenessProbeRequirements
### Properties
* **failureThreshold**: int: The number of failures to allow before returning an unhealthy status.
* **initialDelaySeconds**: int: The delay before the first probe in seconds.
* **periodSeconds**: int: The length of time between probes in seconds.
* **successThreshold**: int: The number of successful probes before returning a healthy status.
* **timeoutSeconds**: int: The probe timeout in seconds.

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
* **computeType**: 'AKS' | 'AmlCompute' | 'ComputeInstance' | 'DataFactory' | 'DataLakeAnalytics' | 'Databricks' | 'HDInsight' | 'SynapseSpark' | 'VirtualMachine' | string (Required): The type of compute
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

## AssignedUser
### Properties
* **objectId**: string (Required): User’s AAD Object Id.
* **tenantId**: string (Required): User’s AAD Tenant Id.

## AutoPauseProperties
### Properties
* **delayInMinutes**: int
* **enabled**: bool

## AutoScaleProperties
### Properties
* **enabled**: bool
* **maxNodeCount**: int
* **minNodeCount**: int

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The time at which the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **disableLocalAuth**: bool: Opt-out of local authentication and ensure customers can use only MSI and AAD exclusively for authentication.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The time at which the compute was last modified.
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

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required): The type of compute
* **properties**: [ComputeInstanceProperties](#computeinstanceproperties): Compute Instance properties

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

### SynapseSpark
#### Properties
* **computeType**: 'SynapseSpark' (Required): The type of compute
* **properties**: [SynapseSparkPoolPropertiesProperties](#synapsesparkpoolpropertiesproperties): AKS properties

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): The type of compute
* **properties**: [VirtualMachineProperties](#virtualmachineproperties)


## ComputeInstanceApplication
### Properties
* **displayName**: string: Name of the ComputeInstance application.
* **endpointUri**: string: Application' endpoint URI.

## ComputeInstanceConnectivityEndpoints
### Properties
* **privateIpAddress**: string (ReadOnly): Private IP Address of this ComputeInstance (local to the VNET in which the compute instance is deployed).
* **publicIpAddress**: string (ReadOnly): Public IP Address of this ComputeInstance.

## ComputeInstanceCreatedBy
### Properties
* **userId**: string (ReadOnly): Uniquely identifies the user within his/her organization.
* **userName**: string (ReadOnly): Name of the user.
* **userOrgId**: string (ReadOnly): Uniquely identifies user' Azure Active Directory organization.

## ComputeInstanceLastOperation
### Properties
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop' | string: Name of the last operation.
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded' | string: Operation status.
* **operationTime**: string: Time of the last operation.

## ComputeInstanceProperties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly): Describes available applications and their endpoints on this ComputeInstance.
* **applicationSharingPolicy**: 'Personal' | 'Shared' | string: Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role.
* **computeInstanceAuthorizationType**: 'personal' | string: The Compute Instance Authorization type. Available values are personal (default).
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly): Describes all connectivity endpoints available for this ComputeInstance.
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly): Describes information on user who created this ComputeInstance.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered on this ComputeInstance.
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly): The last operation on ComputeInstance.
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings): Settings for a personal compute instance.
* **setupScripts**: [SetupScripts](#setupscripts): Details of customized scripts to execute for setting up the cluster.
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings): Specifies policy and settings for SSH access.
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' | string (ReadOnly): The current state of this ComputeInstance.
* **subnet**: [ResourceId](#resourceid): Virtual network subnet resource ID the compute nodes belong to.
* **vmSize**: string: Virtual Machine Size

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string: Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
* **adminUserName**: string (ReadOnly): Describes the admin user name.
* **sshPort**: int (ReadOnly): Describes the port for connecting through SSH.
* **sshPublicAccess**: 'Disabled' | 'Enabled' | string: State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable.

## ComputeSecrets
* **Discriminator**: computeType

### Base Properties

### AksComputeSecrets
#### Properties
* **adminKubeConfig**: string: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.
* **computeType**: 'AKS' (Required): The type of compute
* **imagePullSecretName**: string: Image registry pull secret.
* **userKubeConfig**: string: Content of kubeconfig file that can be used to connect to the Kubernetes cluster.

### DatabricksComputeSecrets
#### Properties
* **computeType**: 'Databricks' (Required): The type of compute
* **databricksAccessToken**: string: access token for databricks account.

### VirtualMachineSecrets
#### Properties
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine.
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ContainerResourceRequirements
### Properties
* **cpu**: int: The minimum amount of CPU cores to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **cpuLimit**: int: The maximum amount of CPU cores allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **fpga**: int: The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int: The number of GPU cores in the container.
* **memoryInGB**: int: The minimum amount of memory (in GB) to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **memoryInGBLimit**: int: The maximum amount of memory (in GB) allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int: The throughput of the collections in cosmosdb database

## CreateServiceRequestEnvironmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[]: The list of assets.
* **driverProgram**: string: The name of the driver file.
* **environment**: [EnvironmentImageRequestEnvironment](#environmentimagerequestenvironment): The details of the AZURE ML environment.
* **environmentReference**: [EnvironmentImageRequestEnvironmentReference](#environmentimagerequestenvironmentreference): The unique identifying details of the AZURE ML environment.
* **modelIds**: string[]: The list of model Ids.
* **models**: [Model](#model)[]: The list of models.

## CreateServiceRequestKeys
### Properties
* **primaryKey**: string: The primary key.
* **secondaryKey**: string: The secondary key.

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
* **workspaceUrl**: string: Workspace Url

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## DatasetReference
### Properties
* **id**: string: The id of the dataset reference.
* **name**: string: The name of the dataset reference.

## EncryptionProperty
### Properties
* **identity**: [IdentityForCmk](#identityforcmk): The identity that will be used to access the key vault for encryption at rest.
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required): Customer Key vault properties.
* **status**: 'Disabled' | 'Enabled' | string (Required): Indicates whether or not the encryption is enabled for the workspace.

## EnvironmentImageRequestEnvironment
### Properties
* **docker**: [ModelEnvironmentDefinitionDocker](#modelenvironmentdefinitiondocker): The definition of a Docker container.
* **environmentVariables**: [ModelEnvironmentDefinitionEnvironmentVariables](#modelenvironmentdefinitionenvironmentvariables): Definition of environment variables to be defined in the environment.
* **inferencingStackVersion**: string: The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
* **name**: string: The name of the environment.
* **python**: [ModelEnvironmentDefinitionPython](#modelenvironmentdefinitionpython): Settings for a Python environment.
* **r**: [ModelEnvironmentDefinitionR](#modelenvironmentdefinitionr): Settings for a R environment.
* **spark**: [ModelEnvironmentDefinitionSpark](#modelenvironmentdefinitionspark): The configuration for a Spark environment.
* **version**: string: The environment version.

## EnvironmentImageRequestEnvironmentReference
### Properties
* **name**: string: Name of the environment.
* **version**: string: Version of the environment.

## ErrorDetail
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.

## ErrorResponse
### Properties
* **code**: string (ReadOnly): Error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): An array of error detail objects.
* **message**: string (ReadOnly): Error message.
* **target**: string (ReadOnly): The target of the particular error

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

## IdentityForCmk
### Properties
* **userAssignedIdentity**: string: The ArmId of the user assigned identity that will be used to access the customer managed key vault

## ImageAsset
### Properties
* **id**: string: The Asset Id.
* **mimeType**: string: The mime type.
* **unpack**: bool: Whether the Asset is unpacked.
* **url**: string: The Url of the Asset.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## ListNotebookKeysResult
### Properties
* **primaryAccessKey**: string {sensitive} (ReadOnly)
* **secondaryAccessKey**: string {sensitive} (ReadOnly)

## ListStorageAccountKeysResult
### Properties
* **userStorageKey**: string {sensitive} (ReadOnly)

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string {sensitive} (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **notebookAccessKeys**: [ListNotebookKeysResult](#listnotebookkeysresult) (ReadOnly)
* **userStorageKey**: string {sensitive} (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The error response.

## Model
### Properties
* **createdTime**: string: The Model creation time (UTC).
* **datasets**: [DatasetReference](#datasetreference)[]: The list of datasets associated with the model.
* **derivedModelIds**: string[]: Models derived from this model
* **description**: string: The Model description text.
* **experimentName**: string: The name of the experiment where this model was created.
* **framework**: string: The Model framework.
* **frameworkVersion**: string: The Model framework version.
* **id**: string: The Model Id.
* **kvTags**: [ModelKvTags](#modelkvtags): The Model tag dictionary. Items are mutable.
* **mimeType**: string (Required): The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
* **modifiedTime**: string: The Model last modified time (UTC).
* **name**: string (Required): The Model name.
* **parentModelId**: string: The Parent Model Id.
* **properties**: [ModelProperties](#modelproperties): The Model property dictionary. Properties are immutable.
* **resourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements): Resource requirements for the model
* **runId**: string: The RunId that created this model.
* **sampleInputData**: string: Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **sampleOutputData**: string: Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **unpack**: bool: Indicates whether we need to unpack the Model during docker Image creation.
* **url**: string (Required): The URL of the Model. Usually a SAS URL.
* **version**: int: The Model version assigned by Model Management Service.

## ModelDockerSectionBaseImageRegistry
### Properties
* **address**: string
* **password**: string {sensitive}
* **username**: string {sensitive}

## ModelEnvironmentDefinitionDocker
### Properties
* **baseDockerfile**: string: Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
* **baseImage**: string: Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
* **baseImageRegistry**: [ModelDockerSectionBaseImageRegistry](#modeldockersectionbaseimageregistry): Image registry that contains the base image.

## ModelEnvironmentDefinitionEnvironmentVariables
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ModelEnvironmentDefinitionPython
### Properties
* **baseCondaEnvironment**: string
* **condaDependencies**: any: A JObject containing Conda dependencies.
* **interpreterPath**: string: The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
* **userManagedDependencies**: bool: True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

## ModelEnvironmentDefinitionR
### Properties
* **bioConductorPackages**: string[]: The packages from Bioconductor.
* **cranPackages**: [RCranPackage](#rcranpackage)[]: The CRAN packages to use.
* **customUrlPackages**: string[]: The packages from custom urls.
* **gitHubPackages**: [RGitHubPackage](#rgithubpackage)[]: The packages directly from GitHub.
* **rscriptPath**: string: The Rscript path to use if an environment build is not required.
The path specified gets used to call the user script.
* **rVersion**: string: The version of R to be installed
* **snapshotDate**: string: Date of MRAN snapshot to use in YYYY-MM-DD format, e.g. "2019-04-17"
* **userManaged**: bool: Indicates whether the environment is managed by user or by AzureML.

## ModelEnvironmentDefinitionSpark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[]: The Spark packages to use.
* **precachePackages**: bool: Whether to precache the packages.
* **repositories**: string[]: The list of spark repositories.

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

## NotebookAccessTokenResult
### Properties
* **accessToken**: string {sensitive} (ReadOnly)
* **expiresIn**: int (ReadOnly)
* **hostName**: string (ReadOnly)
* **notebookResourceId**: string (ReadOnly)
* **publicDns**: string (ReadOnly)
* **refreshToken**: string {sensitive} (ReadOnly)
* **scope**: string (ReadOnly)
* **tokenType**: string (ReadOnly)

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror): The error that occurs when preparing notebook.
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: [AssignedUser](#assigneduser): A user explicitly assigned to a personal compute instance.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint
* **subnetArmId**: string (ReadOnly): The ARM identifier for Subnet resource that private endpoint links to

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
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
* **name**: string: The package name.
* **repository**: string: The repository name.

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[]
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
* **authToken**: string {sensitive}: Personal access token to install from a private repo
* **repository**: string: Repository address in the format username/repo[/subdir][@ref|#pull].

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.

## ScriptReference
### Properties
* **scriptArguments**: string: Optional command line arguments passed to the script to run.
* **scriptData**: string: The location of scripts in the mounted volume.
* **scriptSource**: string: The storage source of the script: inline, workspace.
* **timeout**: string: Optional time period passed to timeout command.

## ScriptsToExecute
### Properties
* **creationScript**: [ScriptReference](#scriptreference): Script that's run only once during provision of the compute.
* **startupScript**: [ScriptReference](#scriptreference): Script that's run every time the machine starts.

## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings): The settings for the service managed cosmosdb account.

## SetupScripts
### Properties
* **scripts**: [ScriptsToExecute](#scriptstoexecute): Customized setup scripts

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
* **artifact**: string
* **group**: string
* **version**: string

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **leafDomainLabel**: string: Leaf domain label of public endpoint
* **overwriteExistingDomain**: bool: Indicates whether to overwrite existing domain label.
* **status**: 'Auto' | 'Disabled' | 'Enabled' | string: Enable or disable ssl for scoring

## SynapseSparkPoolPropertiesProperties
### Properties
* **autoPauseProperties**: [AutoPauseProperties](#autopauseproperties): Auto pause properties.
* **autoScaleProperties**: [AutoScaleProperties](#autoscaleproperties): Auto scale properties.
* **nodeCount**: int: The number of compute nodes currently assigned to the compute.
* **nodeSize**: string: Node size.
* **nodeSizeFamily**: string: Node size family.
* **poolName**: string: Pool name.
* **resourceGroup**: string: Name of the resource group in which workspace is located.
* **sparkVersion**: string: Spark version.
* **subscriptionId**: string: Azure subscription identifier.
* **workspaceName**: string: Name of Azure Machine Learning workspace.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource

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
* **isNotebookInstanceCompute**: bool: Indicates whether this compute will be used for running notebooks.
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string: Private key data
* **publicKeyData**: string: Public key data
* **username**: string: Username of admin account

## WorkspaceConnectionProps
### Properties
* **authType**: string: Authorization type of the workspace connection.
* **category**: string: Category of the workspace connection.
* **target**: string: Target of the workspace connection.
* **value**: string: Value details of the workspace connection.
* **valueFormat**: 'JSON' | string: format for the workspace connection value

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty): The encryption settings of Azure ML workspace.
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly): The notebook info of Azure ML workspace.
* **primaryUserAssignedIdentity**: string: The user assigned identity resource id that represents the workspace identity.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings): The service managed resource settings.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **tenantId**: string (ReadOnly): The tenant id associated with this workspace.
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

