# Microsoft.MachineLearningServices @ 2020-04-01

## Resource Microsoft.MachineLearningServices/workspaces@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of a machine learning workspace.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Machine Learning compute object.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2020-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2020-04-01
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2020-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-04-01
* **Output**: [ComputeSecrets](#computesecrets)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2020-04-01)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-04-01
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' (Required): The identity type.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties](#componentssgqdofschemasidentitypropertiesuserassignedidentitiesadditionalproperties)

## ComponentsSgqdofSchemasIdentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

## WorkspaceProperties
### Properties
* **allowPublicAccessWhenBehindVnet**: bool: The flag to indicate whether to allow public access when behind VNet.
* **applicationInsights**: string: ARM id of the application insights associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **creationTime**: string (ReadOnly): The creation time of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **encryption**: [EncryptionProperty](#encryptionproperty)
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **hbiWorkspace**: bool: The flag to signal HBI data in the workspace and reduce diagnostic data collected by the service
* **imageBuildCompute**: string: The compute name for image build
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **notebookInfo**: [NotebookResourceInfo](#notebookresourceinfo) (ReadOnly)
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The list of private endpoint connections in the workspace.
* **privateLinkCount**: int (ReadOnly): Count of private connections in the workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **serviceProvisionedResourceGroup**: string (ReadOnly): The name of the managed resource group created by workspace RP in customer subscription if the workspace is CMK workspace
* **sharedPrivateLinkResources**: [SharedPrivateLinkResource](#sharedprivatelinkresource)[]: The list of shared private link resources in this workspace.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

## EncryptionProperty
### Properties
* **keyVaultProperties**: [KeyVaultProperties](#keyvaultproperties) (Required)
* **status**: 'Disabled' | 'Enabled' (Required): Indicates whether or not the encryption is enabled for the workspace.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## NotebookResourceInfo
### Properties
* **fqdn**: string
* **notebookPreparationError**: [NotebookPreparationError](#notebookpreparationerror)
* **resourceId**: string: the data plane resourceId that used to initialize notebook component

## NotebookPreparationError
### Properties
* **errorMessage**: string
* **statusCode**: int

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Specifies the resource ID.
* **identity**: [Identity](#identity): Identity for the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (ReadOnly): Specifies the name of the resource.
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Properties of the PrivateEndpointConnectProperties.
* **sku**: [Sku](#sku): Sku of the resource
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: string (ReadOnly): Specifies the type of the resource.

## PrivateEndpointConnectionProperties
### Properties
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The Private Endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' (ReadOnly): The current provisioning state.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## Sku
### Properties
* **name**: string: Name of the sku
* **tier**: string: Tier of the sku like Basic or Enterprise

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SharedPrivateLinkResource
### Properties
* **name**: string: Unique name of the private link.
* **properties**: [SharedPrivateLinkResourceProperty](#sharedprivatelinkresourceproperty): Properties of a shared private link resource.

## SharedPrivateLinkResourceProperty
### Properties
* **groupId**: string: The private link resource group id.
* **privateLinkResourceId**: string: The resource id that private link links to.
* **requestMessage**: string: Request message.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | 'Timeout': The private endpoint connection status.

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The date and time when the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **isAttachedCompute**: bool (ReadOnly): Indicating whether the compute was provisioned by user and brought from outside if true, or machine learning service provisioned it if false.
* **modifiedOn**: string (ReadOnly): The date and time when the compute was last modified.
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
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

## AKSProperties
### Properties
* **agentCount**: int: Number of agents
* **agentVMSize**: string: Agent virtual machine size
* **aksNetworkingConfiguration**: [AksNetworkingConfiguration](#aksnetworkingconfiguration): Advance configuration for AKS networking
* **clusterFqdn**: string: Cluster full qualified domain name
* **clusterPurpose**: 'DenseProd' | 'DevTest' | 'FastProd'
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
* **leafDomainLabel**: string: The leaf domain label name
* **overwriteExistingDomain**: bool: Boolean value for overwriting the domain
* **status**: 'Auto' | 'Disabled' | 'Enabled': Enable or disable ssl for scoring

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

## AmlComputeProperties
### Properties
* **allocationState**: 'Resizing' | 'Steady' (ReadOnly): Allocation state of the compute. Possible values are: steady - Indicates that the compute is not resizing. There are no changes to the number of compute nodes in the compute in progress. A compute enters this state when it is created and when no operations are being performed on the compute to change the number of compute nodes. resizing - Indicates that the compute is resizing; that is, compute nodes are being added to or removed from the compute.
* **allocationStateTransitionTime**: string (ReadOnly): The time at which the compute entered its current allocation state.
* **currentNodeCount**: int (ReadOnly): The number of compute nodes currently assigned to the compute.
* **errors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Collection of errors encountered by various compute nodes during node setup.
* **nodeStateCounts**: [NodeStateCounts](#nodestatecounts) (ReadOnly): Counts of various compute node states on the amlCompute.
* **remoteLoginPortPublicAccess**: 'Disabled' | 'Enabled' | 'NotSpecified': State of the public SSH port. Possible values are: Disabled - Indicates that the public ssh port is closed on all nodes of the cluster. Enabled - Indicates that the public ssh port is open on all nodes of the cluster. NotSpecified - Indicates that the public ssh port is closed on all nodes of the cluster if VNet is defined, else is open all public nodes. It can be default only during cluster creation time, after creation it will be either enabled or disabled.
* **scaleSettings**: [ScaleSettings](#scalesettings): scale settings for AML Compute
* **subnet**: [ResourceId](#resourceid): Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
* **targetNodeCount**: int (ReadOnly): The target number of compute nodes for the compute. If the allocationState is resizing, this property denotes the target node count for the ongoing resize operation. If the allocationState is steady, this property denotes the target node count for the previous resize operation.
* **userAccountCredentials**: [UserAccountCredentials](#useraccountcredentials): Settings for user account that gets created on each on the nodes of a compute.
* **vmPriority**: 'Dedicated' | 'LowPriority': Virtual Machine priority
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
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute

## ResourceId
### Properties
* **id**: string (Required): The ID of the resource

## UserAccountCredentials
### Properties
* **adminUserName**: string (Required): Name of the administrator user account which can be used to SSH to nodes.
* **adminUserPassword**: string: Password of the administrator user account.
* **adminUserSshPublicKey**: string: SSH public key of the administrator user account.

## DatabricksProperties
### Properties
* **databricksAccessToken**: string: Databricks access token

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## HDInsightProperties
### Properties
* **address**: string: Public IP address of the master node of the cluster.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections on the master node of the cluster.

## VirtualMachineSshCredentials
### Properties
* **password**: string: Password of admin account
* **privateKeyData**: string: Private key data
* **publicKeyData**: string: Public key data
* **username**: string: Username of admin account

## VirtualMachineProperties
### Properties
* **address**: string: Public IP address of the virtual machine.
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine
* **sshPort**: int: Port open for ssh connections.
* **virtualMachineSize**: string: Virtual Machine size

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **notebookAccessKeys**: [NotebookListCredentialsResult](#notebooklistcredentialsresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[] (ReadOnly): Array of Password
* **username**: string (ReadOnly)

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## NotebookListCredentialsResult
### Properties
* **primaryAccessKey**: string (ReadOnly)
* **secondaryAccessKey**: string (ReadOnly)

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
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials) (ReadOnly): Admin credentials for virtual machine
* **computeType**: 'VirtualMachine' (Required): The type of compute


## AmlComputeNodesInformation
### Properties
* **computeType**: 'AKS' | 'AmlCompute' | 'DataFactory' | 'DataLakeAnalytics' | 'Databricks' | 'HDInsight' | 'VirtualMachine' (ReadOnly): The type of compute
* **nextLink**: string (ReadOnly): The continuation token.
* **nodes**: [AmlComputeNodeInformation](#amlcomputenodeinformation)[] (ReadOnly): The collection of returned AmlCompute nodes details.

## AmlComputeNodeInformation
### Properties
* **nodeId**: string (ReadOnly): ID of the compute node.
* **nodeState**: 'idle' | 'leaving' | 'preempted' | 'preparing' | 'running' | 'unusable' (ReadOnly): State of the compute node. Values are idle, running, preparing, unusable, leaving and preempted.
* **port**: int (ReadOnly): SSH port number of the node.
* **privateIpAddress**: string (ReadOnly): Private IP address of the compute node.
* **publicIpAddress**: string (ReadOnly): Public IP address of the compute node.
* **runId**: string (ReadOnly): ID of the Experiment running on the node, if any else null.

