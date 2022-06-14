# Microsoft.MachineLearningServices @ 2018-03-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of the machine learning workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Function listKeys (Microsoft.MachineLearningServices/workspaces@2018-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2018-03-01-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2018-03-01-preview
* **Output**: [ComputeSecrets](#computesecrets)

## AKSProperties
### Properties
* **agentCount**: int: Number of agents
* **agentVMSize**: string: Agent virtual machine size
* **clusterFqdn**: string: Cluster full qualified domain name
* **sslConfiguration**: [SslConfiguration](#sslconfiguration): SSL configuration
* **systemServices**: [SystemService](#systemservice)[]: System services

## BatchAIProperties
### Properties
* **scaleSettings**: [ScaleSettings](#scalesettings): Scale settings for BatchAI
* **vmPriority**: string: Virtual Machine priority
* **vmSize**: string: Virtual Machine Size

## Compute
* **Discriminator**: computeType

### Base Properties
* **computeLocation**: string: Location for the underlying compute
* **createdOn**: string (ReadOnly): The date and time when the compute was created.
* **description**: string: The description of the Machine Learning compute.
* **modifiedOn**: string (ReadOnly): The date and time when the compute was last modified.
* **provisioningErrors**: [MachineLearningServiceError](#machinelearningserviceerror)[] (ReadOnly): Errors during provisioning
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
* **resourceId**: string: ARM resource id of the compute
### AKS
#### Properties
* **computeType**: 'AKS' (Required): The type of compute
* **properties**: [AKSProperties](#aksproperties): AKS properties

### BatchAI
#### Properties
* **computeType**: 'BatchAI' (Required): The type of compute
* **properties**: [BatchAIProperties](#batchaiproperties): BatchAI properties

### DataFactory
#### Properties
* **computeType**: 'DataFactory' (Required): The type of compute

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

### VirtualMachineSecrets
#### Properties
* **administratorAccount**: [VirtualMachineSshCredentials](#virtualmachinesshcredentials): Admin credentials for virtual machine.
* **computeType**: 'VirtualMachine' (Required): The type of compute


## ErrorDetail
### Properties
* **code**: string (Required): Error code.
* **message**: string (Required): Error message.

## ErrorResponse
### Properties
* **code**: string (Required): Error code.
* **details**: [ErrorDetail](#errordetail)[]: An array of error detail objects.
* **message**: string (Required): Error message.

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

## ListWorkspaceKeysResult
### Properties
* **appInsightsInstrumentationKey**: string (ReadOnly)
* **containerRegistryCredentials**: [RegistryListCredentialsResult](#registrylistcredentialsresult) (ReadOnly)
* **userStorageKey**: string (ReadOnly)
* **userStorageResourceId**: string (ReadOnly)

## MachineLearningServiceError
### Properties
* **error**: [ErrorResponse](#errorresponse): The error response.

## Password
### Properties
* **name**: string (ReadOnly)
* **value**: string (ReadOnly)

## RegistryListCredentialsResult
### Properties
* **location**: string (ReadOnly)
* **passwords**: [Password](#password)[]
* **username**: string (ReadOnly)

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
* **autoScaleEnabled**: bool: Enable or disable auto scale
* **maxNodeCount**: int: Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use

## SslConfiguration
### Properties
* **cert**: string: Cert data
* **cname**: string: CNAME of the cert
* **key**: string: Key data
* **status**: 'Disabled' | 'Enabled' | string: Enable or disable SSL for scoring

## SystemService
### Properties
* **publicIpAddress**: string (ReadOnly): Public IP address
* **systemServiceType**: string (ReadOnly): The type of this system service.
* **version**: string (ReadOnly): The version for this type.

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
* **batchaiWorkspace**: string: ARM id of the Batch AI workspace associated with this workspace. This cannot be changed once the workspace has been created
* **containerRegistry**: string: ARM id of the container registry associated with this workspace. This cannot be changed once the workspace has been created
* **creationTime**: string (ReadOnly): The creation time of the machine learning workspace in ISO8601 format.
* **description**: string: The description of this workspace.
* **discoveryUrl**: string: Url for the discovery service to identify regional endpoints for machine learning experimentation services
* **friendlyName**: string: The friendly name for this workspace. This name in mutable
* **keyVault**: string: ARM id of the key vault associated with this workspace. This cannot be changed once the workspace has been created
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Unknown' | 'Updating' | string (ReadOnly): The current deployment state of workspace resource. The provisioningState is to indicate states for resource provisioning.
* **storageAccount**: string: ARM id of the storage account associated with this workspace. This cannot be changed once the workspace has been created
* **workspaceId**: string (ReadOnly): The immutable id associated with this workspace.

