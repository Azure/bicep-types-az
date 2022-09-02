# Microsoft.MachineLearningServices @ 2020-01-01

## Resource Microsoft.MachineLearningServices/workspaces@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of the machine learning workspace.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-01-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2020-01-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2020-01-01
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2020-01-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-01-01
* **Output**: [ComputeSecrets](#computesecrets)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2020-01-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-01-01
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

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
* **computeType**: 'AKS' | 'AmlCompute' | 'DataFactory' | 'DataLakeAnalytics' | 'Databricks' | 'HDInsight' | 'VirtualMachine' | string (Required): The type of compute
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' | string (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various node states on the compute.
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified' | string: State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): Scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Virtual network subnet resource ID the compute nodes belong to.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Credentials for an administrator user account that will be created on each compute node.
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


## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required): Customer Key vault properties.
* **status**: 'Disabled' | 'Enabled' | string (Required): Indicates whether or not the encryption is enabled for the workspace.

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
* **type**: 'SystemAssigned': The identity type.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse) (ReadOnly): The error response.

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

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

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

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

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
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **creationTime**: string (ReadOnly): The creation time of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty): The encryption settings of Azure ML workspace.
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

