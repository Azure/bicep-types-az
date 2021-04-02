# Microsoft.MachineLearningServices @ 2021-01-01

## Resource Microsoft.MachineLearningServices/workspaces@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Machine Learning compute object.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/connections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceConnectionProps](#workspaceconnectionprops): Workspace Connection specific properties.
* **type**: 'Microsoft.MachineLearningServices/workspaces/connections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2021-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/services@2021-01-01
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType
### Base Properties
* **apiVersion**: '2021-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **description**: string (WriteOnly): The description of the service.
* **environmentImageRequest**: [schemas:122_environmentImageRequest](#schemas122environmentimagerequest) (WriteOnly): The Environment, models and assets needed for inferencing.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): Identity for the resource.
* **keys**: [schemas:122_keys](#schemas122keys) (WriteOnly): The authentication keys.
* **kvTags**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): The service tag dictionary. Tags are mutable.
* **location**: string: The name of the Azure location/region.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Dictionary<string,String>](#dictionarystringstring): The service properties dictionary. Properties are immutable.
* **sku**: [Sku](#sku) (ReadOnly): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring) (ReadOnly): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/services' (ReadOnly, DeployTimeConstant): The resource type
### ACI
#### Properties
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled on the service.
* **cname**: string (WriteOnly): The CName for the service.
* **computeType**: 'ACI' (Required):
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **dataCollection**: [schemas:91_dataCollection](#schemas91datacollection) (WriteOnly): Details of the data collection options specified.
* **dnsNameLabel**: string (WriteOnly): The Dns label for the service.
* **encryptionProperties**: [schemas:91_encryptionProperties](#schemas91encryptionproperties) (WriteOnly): The encryption properties.
* **sslCertificate**: string (WriteOnly): The public SSL certificate in PEM format to use if SSL is enabled.
* **sslEnabled**: bool (WriteOnly): Whether or not SSL is enabled.
* **sslKey**: string (WriteOnly): The public SSL key in PEM format for the certificate.
* **vnetConfiguration**: [schemas:91_vnetConfiguration](#schemas91vnetconfiguration) (WriteOnly): The virtual network configuration.

### Custom
#### Properties
* **computeType**: 'Custom' (Required): The Variant properties.
* **isDefault**: bool (WriteOnly): Is this the default variant.
* **trafficPercentile**: int (WriteOnly): The amount of traffic variant receives.
* **type**: 'Control' | 'Treatment' (WriteOnly): The type of the variant. Possible values include: 'Control', 'Treatment'


## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned,UserAssigned' | 'SystemAssigned' | 'UserAssigned': The identity type. Possible values include: 'SystemAssigned', 'SystemAssigned,UserAssigned', 'UserAssigned', 'None'
* **userAssignedIdentities**: [Dictionary<string,UserAssignedIdentity>](#dictionarystringuserassignedidentity): dictionary containing all the user assigned identities, with resourceId of the UAI as key.

## Dictionary<string,UserAssignedIdentity>
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string (ReadOnly): The clientId(aka appId) of the user assigned identity.
* **principalId**: string (ReadOnly): The principal ID of the user assigned identity.
* **tenantId**: string (ReadOnly): The tenant ID of the user assigned identity.

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty):
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly):
* **primaryUserAssignedIdentity**: string: The user assigned identity resource id that represents the workspace identity.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning. Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
* **serviceManagedResourcesSettings**: [ServiceManagedResourcesSettings](#servicemanagedresourcessettings):
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## EncryptionProperty
### Properties
* **identity**: [IdentityForCmk](#identityforcmk): Identity that will be used to access key vault for encryption at rest
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required):
* **status**: 'Disabled' | 'Enabled' (Required): Indicates whether or not the encryption is enabled for the workspace. Possible values include: 'Enabled', 'Disabled'

## IdentityForCmk
### Properties
* **userAssignedIdentity**: string (Required): The ArmId of the user assigned identity that will be used to access the customer managed key vault

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## NotebookResourceInfo
### Properties
* **fqdn**: string:
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror):
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## NotebookPreparationError
### Properties
* **errorMessage**: string:
* **statusCode**: int:

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **systemData**: [SystemData](#systemdata) (ReadOnly): Read only system data
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded': The provisioning state of the private endpoint connection resource. Possible values include: 'Succeeded', 'Creating', 'Deleting', 'Failed'

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint
* **subnetArmId**: string (ReadOnly): The ARM identifier for Subnet resource that private endpoint links to

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected', 'Timeout'

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC)
* **createdBy**: string: An identifier for the identity that created the resource
* **createdByType**: 'application' | 'key' | 'managedIdentity' | 'user': The type of identity that created the resource. Possible values include: 'user', 'application', 'managedIdentity', 'key'
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: An identifier for the identity that last modified the resource
* **lastModifiedByType**: 'application' | 'key' | 'managedIdentity' | 'user': The type of identity that last modified the resource. Possible values include: 'user', 'application', 'managedIdentity', 'key'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ServiceManagedResourcesSettings
### Properties
* **cosmosDb**: [CosmosDbSettings](#cosmosdbsettings):

## CosmosDbSettings
### Properties
* **collectionsThroughput**: int: The throughput of the collections in cosmosdb database

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. Possible values include: 'Pending', 'Approved', 'Rejected', 'Disconnected', 'Timeout'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType
### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **description**: string: The description of the Machine Learning compute.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed. Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded', 'Failed', 'Canceled'
* **resourceId**: string: ARM resource id of the underlying compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): A Machine Learning compute based on AKS.
* **properties**: [schemas:35_properties](#schemas35properties): AKS properties

### AmlCompute
#### Properties
* **computeType**: 'AmlCompute' (Required): An Azure Machine Learning compute.
* **properties**: [schemas:36_properties](#schemas36properties): AML Compute properties

### ComputeInstance
#### Properties
* **computeType**: 'ComputeInstance' (Required): An Azure Machine Learning compute instance.
* **properties**: [schemas:37_properties](#schemas37properties): Compute Instance properties

### Databricks
#### Properties
* **computeType**: 'Databricks' (Required): A DataFactory compute.
* **properties**: [schemas:38_properties](#schemas38properties):

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): A DataFactory compute.

### DataLakeAnalytics
#### Properties
* **computeType**: 'DataLakeAnalytics' (Required): A DataLakeAnalytics compute.
* **properties**: [schemas:38_properties](#schemas38properties):

### HDInsight
#### Properties
* **computeType**: 'HDInsight' (Required): A HDInsight compute.
* **properties**: [schemas:38_properties](#schemas38properties):

### VirtualMachine
#### Properties
* **computeType**: 'VirtualMachine' (Required): A Machine Learning compute based on Azure Virtual Machines.
* **properties**: [schemas:38_properties](#schemas38properties):


## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): Error response information.

## ErrorResponse
### Properties
* **code**: string (ReadOnly): Error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): An array of error detail objects.
* **message**: string (ReadOnly): Error message.

## ErrorDetail
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.

## AKS
### Properties
* **computeType**: 'AKS' (Required): A Machine Learning compute based on AKS.
* **properties**: [schemas:35_properties](#schemas35properties): AKS properties

## schemas:35_properties
### Properties
* **agentCount**: int: Number of agents
* **agentVmSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): Advance configuration for AKS networking
* **clusterFqdn**: string: Cluster full qualified domain name
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd': Intended usage of the cluster. Possible values include: 'FastProd', 'DenseProd', 'DevTest'
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): The ssl configuration for scoring
* **systemServices**: [SystemService](#systemservice)[] (ReadOnly): System services

## AksNetworkingConfiguration
### Properties
* **dnsServiceIP**: string: An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr.
* **dockerBridgeCidr**: string: A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range.
* **serviceCidr**: string: A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges.
* **subnetId**: string: Virtual network subnet resource ID the compute nodes belong to

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **status**: 'Auto' | 'Disabled' | 'Enabled': Enable or disable ssl for scoring. Possible values include: 'Disabled', 'Enabled', 'Auto'

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## AmlCompute
### Properties
* **computeType**: 'AmlCompute' (Required): An Azure Machine Learning compute.
* **properties**: [schemas:36_properties](#schemas36properties): AML Compute properties

## schemas:36_properties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute. Possible values include: 'Steady', 'Resizing'
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **enableNodePublicIp**: bool: Enable or disable node public IP address provisioning. Possible values are: Possible values are: true - Indicates that the compute nodes will have public IPs provisioned. false - Indicates that the compute nodes will have a private endpoint and no public IPs.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **isolatedNetwork**: bool: Network is isolated or not
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the amlCompute.
* **osType**: 'Linux' | 'Windows': Compute OS Type. Possible values include: 'Linux', 'Windows'
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled. Possible values include: 'Enabled', 'Disabled', 'NotSpecified'
* **scaleSettings**: [ScaleSettings](#scalesettings): scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Settings for user account that gets created on each on the nodes of a compute.
* **virtualMachineImage**: [VirtualMachineImage](#virtualmachineimage): Virtual Machine image for Windows AML Compute
* **vmPriority**: 'Dedicated' | 'LowPriority': Virtual Machine priority. Possible values include: 'Dedicated', 'LowPriority'
* **vmSize**: string: Virtual Machine Size

## NodeStateCounts
### Properties
* **idleNodeCount**: int (ReadOnly): Number of compute nodes in idle state.
* **leavingNodeCount**: int (ReadOnly): Number of compute nodes which are leaving the amlCompute.
* **preemptedNodeCount**: int (ReadOnly): Number of compute nodes which are in preempted state.
* **preparingNodeCount**: int (ReadOnly): Number of compute nodes which are being prepared.
* **runningNodeCount**: int (ReadOnly): Number of compute nodes which are running jobs.
* **unusableNodeCount**: int (ReadOnly): Number of compute nodes which are in unusable state.

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute. This string needs to be in the RFC Format.

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## VirtualMachineImage
### Properties
* **id**: string (Required): Virtual Machine image path

## ComputeInstance
### Properties
* **computeType**: 'ComputeInstance' (Required): An Azure Machine Learning compute instance.
* **properties**: [schemas:37_properties](#schemas37properties): Compute Instance properties

## schemas:37_properties
### Properties
* **applications**: [ComputeInstanceApplication](#computeinstanceapplication)[] (ReadOnly): Describes available applications and their endpoints on this ComputeInstance.
* **applicationSharingPolicy**: 'Personal' | 'Shared': Policy for sharing applications on this compute instance among users of parent workspace. If Personal, only the creator can access applications on this compute instance. When Shared, any workspace user can access applications on this instance depending on his/her assigned role. Possible values include: 'Personal', 'Shared'
* **computeInstanceAuthorizationType**: 'personal': The Compute Instance Authorization type. Available values are personal (default). Possible values include: 'personal'
* **connectivityEndpoints**: [ComputeInstanceConnectivityEndpoints](#computeinstanceconnectivityendpoints) (ReadOnly): Defines all connectivity endpoints and properties for an ComputeInstance.
* **createdBy**: [ComputeInstanceCreatedBy](#computeinstancecreatedby) (ReadOnly): Describes information on user who created this ComputeInstance.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered on this ComputeInstance.
* **lastOperation**: [ComputeInstanceLastOperation](#computeinstancelastoperation) (ReadOnly): The last operation on ComputeInstance.
* **personalComputeInstanceSettings**: [PersonalComputeInstanceSettings](#personalcomputeinstancesettings): Settings for a personal compute instance.
* **setupScripts**: [SetupScripts](#setupscripts): Details of customized scripts to execute for setting up the cluster.
* **sshSettings**: [ComputeInstanceSshSettings](#computeinstancesshsettings): Specifies policy and settings for SSH access.
* **state**: 'CreateFailed' | 'Creating' | 'Deleting' | 'JobRunning' | 'Restarting' | 'Running' | 'SettingUp' | 'SetupFailed' | 'Starting' | 'Stopped' | 'Stopping' | 'Unknown' | 'Unusable' | 'UserSettingUp' | 'UserSetupFailed' (ReadOnly): The current state of this ComputeInstance. Possible values include: 'Creating', 'CreateFailed', 'Deleting', 'Running', 'Restarting', 'JobRunning', 'SettingUp', 'SetupFailed', 'Starting', 'Stopped', 'Stopping', 'UserSettingUp', 'UserSetupFailed', 'Unknown', 'Unusable'
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **vmSize**: string: Virtual Machine Size

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
* **operationName**: 'Create' | 'Delete' | 'Reimage' | 'Restart' | 'Start' | 'Stop': Name of the last operation. Possible values include: 'Create', 'Start', 'Stop', 'Restart', 'Reimage', 'Delete'
* **operationStatus**: 'CreateFailed' | 'DeleteFailed' | 'InProgress' | 'ReimageFailed' | 'RestartFailed' | 'StartFailed' | 'StopFailed' | 'Succeeded': Operation status. Possible values include: 'InProgress', 'Succeeded', 'CreateFailed', 'StartFailed', 'StopFailed', 'RestartFailed', 'ReimageFailed', 'DeleteFailed'
* **operationTime**: string: Time of the last operation.

## PersonalComputeInstanceSettings
### Properties
* **assignedUser**: [AssignedUser](#assigneduser): A user that can be assigned to a compute instance.

## AssignedUser
### Properties
* **objectId**: string (Required): User’s AAD Object Id.
* **tenantId**: string (Required): User’s AAD Tenant Id.

## SetupScripts
### Properties
* **scripts**: [ScriptsToExecute](#scriptstoexecute): Customized setup scripts

## ScriptsToExecute
### Properties
* **creationScript**: [ScriptReference](#scriptreference): Script reference
* **startupScript**: [ScriptReference](#scriptreference): Script reference

## ScriptReference
### Properties
* **scriptArguments**: string: Optional command line arguments passed to the script to run.
* **scriptData**: string: The location of scripts in the mounted volume.
* **scriptSource**: string: The storage source of the script: inline, workspace.
* **timeout**: string: Optional time period passed to timeout command.

## ComputeInstanceSshSettings
### Properties
* **adminPublicKey**: string: Specifies the SSH rsa public key file as a string. Use "ssh-keygen -t rsa -b 2048" to generate your SSH key pairs.
* **adminUserName**: string (ReadOnly): Describes the admin user name.
* **sshPort**: int (ReadOnly): Describes the port for connecting through SSH.
* **sshPublicAccess**: 'Disabled' | 'Enabled': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on this instance. Enabled - Indicates that the public ssh port is open and accessible according to the VNet/subnet policy if applicable. Possible values include: 'Enabled', 'Disabled'

## Databricks
### Properties
* **computeType**: 'Databricks' (Required): A DataFactory compute.
* **properties**: [schemas:38_properties](#schemas38properties):

## schemas:38_properties
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

## DataFactory
### Properties
* **computeType**: 'DataFactory' (Required): A DataFactory compute.

## DataLakeAnalytics
### Properties
* **computeType**: 'DataLakeAnalytics' (Required): A DataLakeAnalytics compute.
* **properties**: [schemas:38_properties](#schemas38properties):

## HDInsight
### Properties
* **computeType**: 'HDInsight' (Required): A HDInsight compute.
* **properties**: [schemas:38_properties](#schemas38properties):

## VirtualMachine
### Properties
* **computeType**: 'VirtualMachine' (Required): A Machine Learning compute based on Azure Virtual Machines.
* **properties**: [schemas:38_properties](#schemas38properties):

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkspaceConnectionProps
### Properties
* **authType**: string: Authorization type of the workspace connection.
* **category**: string: Category of the workspace connection.
* **target**: string: Target of the workspace connection.
* **value**: string: Value details of the workspace connection.
* **valueFormat**: 'JSON': format for the workspace connection value. Possible values include: 'JSON'

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:122_environmentImageRequest
### Properties
* **assets**: [ImageAsset](#imageasset)[] (WriteOnly): The list of assets.
* **driverProgram**: string (WriteOnly): The name of the driver file.
* **environment**: [schemas:97_environment](#schemas97environment) (WriteOnly): The details of the AZURE ML environment.
* **environmentReference**: [schemas:97_environmentReference](#schemas97environmentreference) (WriteOnly): The unique identifying details of the AZURE ML environment.
* **modelIds**: string[] (WriteOnly): The list of model Ids.
* **models**: [Model](#model)[] (WriteOnly): The list of models.

## ImageAsset
### Properties
* **id**: string (WriteOnly): The Asset Id.
* **mimeType**: string (WriteOnly): The mime type.
* **unpack**: bool (WriteOnly): Whether the Asset is unpacked.
* **url**: string (WriteOnly): The Url of the Asset.

## schemas:97_environment
### Properties
* **docker**: [schemas:100_docker](#schemas100docker) (WriteOnly): The definition of a Docker container.
* **environmentVariables**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): Definition of environment variables to be defined in the environment.
* **inferencingStackVersion**: string (WriteOnly): The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
* **name**: string (WriteOnly): The name of the environment.
* **python**: [schemas:100_python](#schemas100python) (WriteOnly): Settings for a Python environment.
* **r**: [schemas:100_r](#schemas100r) (WriteOnly): Settings for a R environment.
* **spark**: [schemas:100_spark](#schemas100spark) (WriteOnly): The configuration for a Spark environment.
* **version**: string (WriteOnly): The environment version.

## schemas:100_docker
### Properties
* **baseDockerfile**: string (WriteOnly): Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
* **baseImage**: string (WriteOnly): Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
* **baseImageRegistry**: [schemas:106_baseImageRegistry](#schemas106baseimageregistry) (WriteOnly): Image registry that contains the base image.

## schemas:106_baseImageRegistry
### Properties
* **address**: string (WriteOnly):
* **password**: string (WriteOnly):
* **username**: string (WriteOnly):

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## schemas:100_python
### Properties
* **baseCondaEnvironment**: string (WriteOnly):
* **condaDependencies**: any (WriteOnly): A JObject containing Conda dependencies.
* **interpreterPath**: string (WriteOnly): The python interpreter path to use if an environment build is not required. The path specified gets used to call the user script.
* **userManagedDependencies**: bool (WriteOnly): True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

## schemas:100_r
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

## RCranPackage
### Properties
* **name**: string (WriteOnly): The package name.
* **repository**: string (WriteOnly): The repository name.

## RGitHubPackage
### Properties
* **authToken**: string (WriteOnly): Personal access token to install from a private repo
* **repository**: string (WriteOnly): Repository address in the format username/repo[/subdir][@ref|#pull].

## schemas:100_spark
### Properties
* **packages**: [SparkMavenPackage](#sparkmavenpackage)[] (WriteOnly): The Spark packages to use.
* **precachePackages**: bool (WriteOnly): Whether to precache the packages.
* **repositories**: string[] (WriteOnly): The list of spark repositories.

## SparkMavenPackage
### Properties
* **artifact**: string (WriteOnly):
* **group**: string (WriteOnly):
* **version**: string (WriteOnly):

## schemas:97_environmentReference
### Properties
* **name**: string (WriteOnly): Name of the environment.
* **version**: string (WriteOnly): Version of the environment.

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
* **kvTags**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): The Model tag dictionary. Items are mutable.
* **mimeType**: string (Required, WriteOnly): The MIME type of Model content. For more details about MIME type, please open https://www.iana.org/assignments/media-types/media-types.xhtml
* **modifiedTime**: string (WriteOnly): The Model last modified time (UTC).
* **name**: string (Required, WriteOnly): The Model name.
* **parentModelId**: string (WriteOnly): The Parent Model Id.
* **properties**: [Dictionary<string,String>](#dictionarystringstring) (WriteOnly): The Model property dictionary. Properties are immutable.
* **resourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **runId**: string (WriteOnly): The RunId that created this model.
* **sampleInputData**: string (WriteOnly): Sample Input Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **sampleOutputData**: string (WriteOnly): Sample Output Data for the Model. A reference to a dataset in the workspace in the format aml://dataset/{datasetId}
* **unpack**: bool (WriteOnly): Indicates whether we need to unpack the Model during docker Image creation.
* **url**: string (Required, WriteOnly): The URL of the Model. Usually a SAS URL.
* **version**: int (WriteOnly): The Model version assigned by Model Management Service.

## DatasetReference
### Properties
* **id**: string (WriteOnly): The id of the dataset reference.
* **name**: string (WriteOnly): The name of the dataset reference.

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
* **cpu**: int (WriteOnly): The minimum amount of CPU cores to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **cpuLimit**: int (WriteOnly): The maximum amount of CPU cores allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **fpga**: int (WriteOnly): The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int (WriteOnly): The number of GPU cores in the container.
* **memoryInGB**: int (WriteOnly): The minimum amount of memory (in GB) to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/
* **memoryInGBLimit**: int (WriteOnly): The maximum amount of memory (in GB) allowed to be used by the container. More info:
https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/

## schemas:122_keys
### Properties
* **primaryKey**: string (WriteOnly): The primary key.
* **secondaryKey**: string (WriteOnly): The secondary key.

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
* **appInsightsEnabled**: bool (WriteOnly): Whether or not Application Insights is enabled.
* **authEnabled**: bool (WriteOnly): Whether or not authentication is enabled on the service.
* **cname**: string (WriteOnly): The CName for the service.
* **computeType**: 'ACI' (Required):
* **containerResourceRequirements**: [ContainerResourceRequirements](#containerresourcerequirements) (WriteOnly): The resource requirements for the container (cpu and memory).
* **dataCollection**: [schemas:91_dataCollection](#schemas91datacollection) (WriteOnly): Details of the data collection options specified.
* **dnsNameLabel**: string (WriteOnly): The Dns label for the service.
* **encryptionProperties**: [schemas:91_encryptionProperties](#schemas91encryptionproperties) (WriteOnly): The encryption properties.
* **sslCertificate**: string (WriteOnly): The public SSL certificate in PEM format to use if SSL is enabled.
* **sslEnabled**: bool (WriteOnly): Whether or not SSL is enabled.
* **sslKey**: string (WriteOnly): The public SSL key in PEM format for the certificate.
* **vnetConfiguration**: [schemas:91_vnetConfiguration](#schemas91vnetconfiguration) (WriteOnly): The virtual network configuration.

## schemas:91_dataCollection
### Properties
* **eventHubEnabled**: bool (WriteOnly): Option for enabling/disabling Event Hub.
* **storageEnabled**: bool (WriteOnly): Option for enabling/disabling storage.

## schemas:91_encryptionProperties
### Properties
* **keyName**: string (Required, WriteOnly): Encryption Key name
* **keyVersion**: string (Required, WriteOnly): Encryption Key Version
* **vaultBaseUrl**: string (Required, WriteOnly): vault base Url

## schemas:91_vnetConfiguration
### Properties
* **subnetName**: string (WriteOnly): The name of the virtual network subnet.
* **vnetName**: string (WriteOnly): The name of the virtual network.

## Custom
### Properties
* **computeType**: 'Custom' (Required): The Variant properties.
* **isDefault**: bool (WriteOnly): Is this the default variant.
* **trafficPercentile**: int (WriteOnly): The amount of traffic variant receives.
* **type**: 'Control' | 'Treatment' (WriteOnly): The type of the variant. Possible values include: 'Control', 'Treatment'

