# Microsoft.MachineLearningServices @ 2020-05-01-preview

## Resource Microsoft.MachineLearningServices/workspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The properties of the machine learning workspace.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [Compute](#compute): Compute properties
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/computes' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datasets@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **datasetType**: 'file' | 'tabular' | string (Required, WriteOnly): Specifies dataset type.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): The identity of the resource.
* **location**: string (ReadOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **parameters**: [DatasetCreateRequestParameters](#datasetcreaterequestparameters) (Required, WriteOnly)
* **properties**: [Dataset](#dataset) (ReadOnly): Dataset properties
* **registration**: [DatasetCreateRequestRegistration](#datasetcreaterequestregistration) (Required, WriteOnly)
* **skipValidation**: bool (WriteOnly): Skip validation that ensures data can be loaded from the dataset before registration.
* **sku**: [Sku](#sku) (ReadOnly): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **timeSeries**: [DatasetCreateRequestTimeSeries](#datasetcreaterequesttimeseries) (WriteOnly)
* **type**: 'Microsoft.MachineLearningServices/workspaces/datasets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/datastores@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **accountKey**: string (WriteOnly): Account Key of storage account.
* **accountName**: string (WriteOnly): The name of the storage account.
* **adlsResourceGroup**: string (WriteOnly): The resource group the ADLS store belongs to. Defaults to selected resource group.
* **adlsSubscriptionId**: string (WriteOnly): The ID of the subscription the ADLS store belongs to. Defaults to selected subscription.
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **authorityUrl**: string (WriteOnly): Authority url used to authenticate the user.
* **clientId**: string (WriteOnly): The service principal's client/application ID.
* **clientSecret**: string (WriteOnly): The service principal's secret.
* **containerName**: string (WriteOnly): The name of the azure blob container.
* **databaseName**: string (WriteOnly): The database name.
* **dataStoreType**: 'adls' | 'adls-gen2' | 'blob' | 'dbfs' | 'file' | 'mysqldb' | 'psqldb' | 'sqldb' | string (Required, WriteOnly): Specifies datastore type.
* **description**: string (WriteOnly): The description of the datastore.
* **endpoint**: string (WriteOnly): The endpoint of the server.
* **enforceSSL**: bool (WriteOnly): This sets the ssl value of the server. Defaults to true if not set.
* **fileSystem**: string (WriteOnly): The file system name of the ADLS Gen2.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity) (ReadOnly): The identity of the resource.
* **includeSecret**: bool (WriteOnly): Include datastore secret in response.
* **location**: string (ReadOnly): Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **password**: string (WriteOnly): The password.
* **port**: string (WriteOnly): The port number.
* **properties**: [Datastore](#datastore) (ReadOnly): Datastore properties
* **protocol**: string (WriteOnly): The protocol to be used
* **resourceUrl**: string (WriteOnly): Determines what operations will be performed.
* **sasToken**: string (WriteOnly): Sas Token of storage account.
* **serverName**: string (WriteOnly): The SQL/MySQL/PostgreSQL server name
* **shareName**: string (WriteOnly): The name of the file share.
* **skipValidation**: bool (WriteOnly): Skip validation that ensures data can be loaded from the dataset before registration.
* **sku**: [Sku](#sku) (ReadOnly): The sku of the workspace.
* **storageAccountResourceGroup**: string (WriteOnly): The resource group of the storage account. Defaults to selected resource group
* **storageAccountSubscriptionId**: string (WriteOnly): The subscription ID of the storage account. Defaults to selected subscription
* **storeName**: string (WriteOnly): The ADLS store name.
* **tags**: [ResourceTags](#resourcetags) (ReadOnly): Contains resource tags defined as key/value pairs.
* **tenantId**: string (WriteOnly): The service principal Tenant ID.
* **type**: 'Microsoft.MachineLearningServices/workspaces/datastores' (ReadOnly, DeployTimeConstant): The resource type
* **userId**: string (WriteOnly): The user ID.
* **userName**: string (WriteOnly): The username of the database user.
* **workspaceSystemAssignedIdentity**: bool (WriteOnly): If set to true, datastore support data access authenticated with Workspace MSI.

## Resource Microsoft.MachineLearningServices/workspaces/linkedWorkspaces@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [LinkedWorkspaceProps](#linkedworkspaceprops): LinkedWorkspace specific properties.
* **type**: 'Microsoft.MachineLearningServices/workspaces/linkedWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **location**: string: Specifies the location of the resource.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **sku**: [Sku](#sku): The sku of the workspace.
* **tags**: [ResourceTags](#resourcetags): Contains resource tags defined as key/value pairs.
* **type**: 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.MachineLearningServices/workspaces/services@2020-05-01-preview
* **Valid Scope(s)**: ResourceGroup
* **Discriminator**: computeType

### Base Properties
* **apiVersion**: '2020-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
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


## Function listKeys (Microsoft.MachineLearningServices/workspaces@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces
* **ApiVersion**: 2020-05-01-preview
* **Output**: [ListWorkspaceKeysResult](#listworkspacekeysresult)

## Function listKeys (Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-01-preview
* **Output**: [ComputeSecrets](#computesecrets)

## Function listNodes (Microsoft.MachineLearningServices/workspaces/computes@2020-05-01-preview)
* **Resource**: Microsoft.MachineLearningServices/workspaces/computes
* **ApiVersion**: 2020-05-01-preview
* **Output**: [AmlComputeNodesInformation](#amlcomputenodesinformation)

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

## AzureDataLakeSection
### Properties
* **authorityUrl**: string: The authority URL used for authentication.
* **certificate**: string: The content of the certificate used for authentication.
* **clientId**: string: The Client ID/Application ID
* **clientSecret**: string: The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | string: The Azure Data Lake credential type.
* **isCertAuth**: bool: Is it using certificate to authenticate. If false then use client secret.
* **resourceGroup**: string: Resource Group.
* **resourceUri**: string: The resource the service principal/app has access to.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **storeName**: string: The Azure Data Lake store name.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string: The thumbprint of the certificate above.

## AzureMySqlSection
### Properties
* **authorityUrl**: string: The authority URL used for authentication.
* **certificate**: string: The content of the certificate used for authentication.
* **clientId**: string: The Client ID/Application ID
* **clientSecret**: string: The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' | string: Sql Authentication type.
* **databaseName**: string: The Azure SQL database name.
* **endpoint**: string: The server host endpoint.
* **isCertAuth**: bool: Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string: / The Azure SQL port number.
* **resourceGroup**: string: Resource Group.
* **resourceUri**: string: The resource the service principal/app has access to.
* **serverName**: string: The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string: The thumbprint of the certificate above.
* **userId**: string: The Azure SQL user id.
* **userPassword**: string: The Azure SQL user password.

## AzurePostgreSqlSection
### Properties
* **authorityUrl**: string: The authority URL used for authentication.
* **certificate**: string: The content of the certificate used for authentication.
* **clientId**: string: The Client ID/Application ID
* **clientSecret**: string: The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' | string: Sql Authentication type.
* **databaseName**: string: The Azure SQL database name.
* **enableSsl**: bool: Indicates SSL requirement of Azure Postgresql server.
* **endpoint**: string: The server host endpoint.
* **isCertAuth**: bool: Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string: / The Azure SQL port number.
* **resourceGroup**: string: Resource Group.
* **resourceUri**: string: The resource the service principal/app has access to.
* **serverName**: string: The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string: The thumbprint of the certificate above.
* **userId**: string: The Azure SQL user id.
* **userPassword**: string: The Azure SQL user password.

## AzureSqlDatabaseSection
### Properties
* **authorityUrl**: string: The authority URL used for authentication.
* **certificate**: string: The content of the certificate used for authentication.
* **clientId**: string: The Client ID/Application ID
* **clientSecret**: string: The client secret.
* **credentialType**: 'None' | 'ServicePrincipal' | 'SqlAuthentication' | string: Sql Authentication type.
* **databaseName**: string: The Azure SQL database name.
* **endpoint**: string: The server host endpoint.
* **isCertAuth**: bool: Is it using certificate to authenticate. If false then use client secret.
* **portNumber**: string: / The Azure SQL port number.
* **resourceGroup**: string: Resource Group.
* **resourceUri**: string: The resource the service principal/app has access to.
* **serverName**: string: The Azure SQL server name.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string: The thumbprint of the certificate above.
* **userId**: string: The Azure SQL user id.
* **userPassword**: string: The Azure SQL user password.

## AzureStorageSection
### Properties
* **accountKey**: string: Storage Account Key (Deprecated).
* **accountName**: string: Storage Account Name.
* **areWorkspaceManagedIdentitiesAllowed**: bool: Indicate if we are using Workspace ManagedIdentities/MSI token (Deprecated).
* **blobCacheTimeout**: int: If this is an "DataStoreType.AzureBlob", the length of time (in seconds) to cache files locally after they are accessed (downloaded).
* **clientCredentials**: [ClientCredentials](#clientcredentials): Service principal credential when credential type is "AzureStorageCredentialTypes.ClientCredentials".
* **containerName**: string: The storage container name.
* **credential**: string: The credential.
* **credentialType**: 'AccountKey' | 'ClientCredentials' | 'None' | 'Sas' | string: The credential type.
* **endpoint**: string: The host of the container.
* **isSas**: bool: Indicate if we are using SAS token or Account Key (Deprecated).
* **protocol**: string: The protocol to use. Defaults to https.
* **resourceGroup**: string: Resource Group.
* **sasToken**: string: SAS Token for the container (Deprecated).
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Subscription ID.

## ClientCredentials
### Properties
* **authorityUrl**: string: The authority URL used for authentication.
* **certificate**: string: The content of the certificate used for authentication.
* **clientId**: string: The Client ID/Application ID
* **clientSecret**: string: The client secret.
* **isCertAuth**: bool: Is it using certificate to authenticate. If false then use client secret.
* **resourceGroup**: string: Resource Group.
* **resourceUri**: string: The resource the service principal/app has access to.
* **serviceDataAccessAuthIdentity**: 'None' | 'WorkspaceSystemAssignedIdentity' | string: Indicates which identity to use to authenticate service data access to customer's storage.
* **subscriptionId**: string: Subscription ID.
* **tenantId**: string: The ID of the tenant the service principal/app belongs to.
* **thumbprint**: string: The thumbprint of the certificate above.

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


## ContainerResourceRequirements
### Properties
* **cpu**: int: The number of CPU cores on the container.
* **fpga**: int: The number of FPGA PCIE devices exposed to the container. Must be multiple of 2.
* **gpu**: int: The number of GPU cores in the container.
* **memoryInGB**: int: The amount of memory on the container in GB.

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

## DataLakeAnalyticsProperties
### Properties
* **dataLakeStoreAccountName**: string: DataLake Store Account Name

## Dataset
### Properties
* **createdTime**: string (ReadOnly): The dataset creation time (UTC).
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **datasetState**: [DatasetState](#datasetstate): Dataset state
* **datasetType**: string (ReadOnly): Dataset Type.
* **defaultCompute**: string (ReadOnly): Name of the default compute to be used for any Dataset actions (such as Profile, Write).
* **description**: string (ReadOnly): Description about this dataset version.
* **etag**: string (ReadOnly): eTag description
* **isVisible**: bool (ReadOnly): Flag to hide Dataset in UI
* **latest**: [DatasetLatest](#datasetlatest): Last created Dataset definition.
* **modifiedTime**: string (ReadOnly): The dataset last modified time (UTC).
* **name**: string (ReadOnly): Unique dataset name
* **tags**: [DatasetTags](#datasettags) (ReadOnly): Tags for this dataset version.

## DatasetCreateRequestParameters
### Properties
* **header**: 'all_files_have_same_headers' | 'combine_all_files_headers' | 'no_headers' | 'only_first_file_has_headers' | string: Header type.
* **includePath**: bool: Boolean to keep path information as column in the dataset. Defaults to False. This is useful when reading multiple files, and want to know which file a particular record originated from, or to keep useful information in file path.
* **partitionFormat**: string: The partition information of each path will be extracted into columns based on the specified format. Format part '{column_name}' creates string column, and '{column_name:yyyy/MM/dd/HH/mm/ss}' creates datetime column, where 'yyyy', 'MM', 'dd', 'HH', 'mm' and 'ss' are used to extract year, month, day, hour, minute and second for the datetime type. The format should start from the position of first partition key until the end of file path. For example, given the path '../USA/2019/01/01/data.parquet' where the partition is by country/region and time, partition_format='/{CountryOrRegion}/{PartitionDate:yyyy/MM/dd}/data.csv' creates a string column 'CountryOrRegion' with the value 'USA' and a datetime column 'PartitionDate' with the value '2019-01-01
* **path**: [DatasetCreateRequestParametersPath](#datasetcreaterequestparameterspath)
* **query**: [DatasetCreateRequestParametersQuery](#datasetcreaterequestparametersquery)
* **separator**: string: The separator used to split columns for 'delimited_files' sourceType.
* **sourceType**: 'delimited_files' | 'json_lines_files' | 'parquet_files' | string: Data source type.

## DatasetCreateRequestParametersPath
### Properties
* **dataPath**: [DatasetCreateRequestParametersPathDataPath](#datasetcreaterequestparameterspathdatapath)
* **httpUrl**: string: The Http URL.

## DatasetCreateRequestParametersPathDataPath
### Properties
* **datastoreName**: string: The datastore name.
* **relativePath**: string: Path within the datastore.

## DatasetCreateRequestParametersQuery
### Properties
* **datastoreName**: string: The SQL/PostgreSQL/MySQL datastore name.
* **query**: string: SQL Quey.

## DatasetCreateRequestRegistration
### Properties
* **description**: string: The description for the dataset.
* **name**: string: The name of the dataset.
* **tags**: [DatasetCreateRequestRegistrationTags](#datasetcreaterequestregistrationtags): Tags associated with the dataset.

## DatasetCreateRequestRegistrationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetCreateRequestTimeSeries
### Properties
* **coarseGrainTimestamp**: string: Column name to be used as CoarseGrainTimestamp. Can only be used if 'fineGrainTimestamp' is specified and cannot be same as 'fineGrainTimestamp'.
* **fineGrainTimestamp**: string: Column name to be used as FineGrainTimestamp

## DatasetLatest
### Properties
* **createdBy**: [UserInfo](#userinfo): User who created.
* **createdTime**: string (ReadOnly): The dataset creation time (UTC).
* **dataflow**: string (ReadOnly): Dataflow Json
* **dataPath**: [DatasetLatestDataPath](#datasetlatestdatapath): Datastore and reference to location of data such as relativePath, Sql Query and etc.
* **datasetDefinitionState**: [DatasetState](#datasetstate): Dataset state
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **description**: string (ReadOnly): Description about the dataset.
* **etag**: string (ReadOnly): eTag description
* **fileType**: string (ReadOnly): Dataset FileType, specified by user.
* **modifiedTime**: string (ReadOnly): The dataset last modified time (UTC).
* **notes**: string (ReadOnly): Summary of Definition changes.
* **partitionFormatInPath**: bool (ReadOnly): Indicates how the source data is partitioned. This is defined to filter on a range of partitioned data before performing actions or materialization.
* **properties**: [DatasetLatestProperties](#datasetlatestproperties): Properties stores information like name of time series column for time series dataset.
* **savedDatasetId**: string (ReadOnly): Indicates the saved dataset this definition is mapping to, populated on Get.
* **tags**: [DatasetLatestTags](#datasetlatesttags) (ReadOnly): Tags associated with the dataset.
* **telemetryInfo**: [DatasetLatestTelemetryInfo](#datasetlatesttelemetryinfo) (ReadOnly): Telemetry information about the dataset including information like which service the dataset was created from.
* **useDescriptionTagsFromDefinition**: bool (ReadOnly): Whether to use description and tags from the definition level as opposed to dataset level (old behavior).
* **versionId**: string (ReadOnly): An identifier uniquely identifies a definition change.

## DatasetLatestDataPath
### Properties
* **additionalProperties**: [DatasetLatestDataPathAdditionalProperties](#datasetlatestdatapathadditionalproperties): Additional Properties.
* **azureFilePath**: string (ReadOnly): Azure path for Azure Blob or File
* **datastoreName**: string (ReadOnly): Data store Name
* **httpUrl**: string (ReadOnly): HTTP URL.
* **partitionFormat**: string (ReadOnly): Specify the partition format of path. Defaults to None.
* **partitionFormatIgnoreError**: bool (ReadOnly): Whether or not to ignore unmatched path.
* **paths**: string[] (ReadOnly): List of files expanded from a file GLOB specified
* **relativePath**: string (ReadOnly): Relative path in the data store
* **sqlDataPath**: [DatasetLatestDataPathSqlDataPath](#datasetlatestdatapathsqldatapath): Sql Query/Table/Stored Procedure details.

## DatasetLatestDataPathAdditionalProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestDataPathSqlDataPath
### Properties
* **queryTimeout**: int (ReadOnly): SQL query timeout. Unit in seconds.
* **sqlQuery**: string (ReadOnly): SQL query
* **sqlStoredProcedureName**: string (ReadOnly): SQL storedProcedure name
* **sqlTableName**: string (ReadOnly): SQL table name

## DatasetLatestProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DatasetLatestTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetLatestTelemetryInfo
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DatasetReference
### Properties
* **id**: string: The id of the dataset reference.
* **name**: string: The name of the dataset reference.

## DatasetState
### Properties
* **deprecatedBy**: [DatasetStateDeprecatedBy](#datasetstatedeprecatedby): Reference to better Dataset or a Definition
* **etag**: string (ReadOnly): eTag description
* **state**: string: Dataset state

## DatasetStateDeprecatedBy
### Properties
* **datasetId**: string (ReadOnly): Unique Dataset identifier.
* **definitionVersion**: string: Definition Version

## DatasetTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Datastore
### Properties
* **azureDataLakeSection**: [AzureDataLakeSection](#azuredatalakesection): Data Specific to azure data lake.
* **azureMySqlSection**: [AzureMySqlSection](#azuremysqlsection): Data specific to azure MySQL.
* **azurePostgreSqlSection**: [AzurePostgreSqlSection](#azurepostgresqlsection): Data specific to azure PostgreSQL.
* **azureSqlDatabaseSection**: [AzureSqlDatabaseSection](#azuresqldatabasesection): Data specific to azure SQL database.
* **azureStorageSection**: [AzureStorageSection](#azurestoragesection): Data specific to azure storage.
* **createdBy**: [UserInfo](#userinfo) (ReadOnly): The User who created the datastore.
* **createdTime**: string (ReadOnly): The date and time when the datastore was created.
* **dataStoreType**: 'AzureBlob' | 'AzureDataLake' | 'AzureDataLakeGen2' | 'AzureFile' | 'AzureMySql' | 'AzurePostgreSql' | 'AzureSqlDatabase' | 'DBFS' | string: The datastore type.
* **description**: string: Description of the datastore.
* **glusterFsSection**: [GlusterFsSection](#glusterfssection): Data specific to GlusterFS.
* **hasBeenValidated**: bool: A read only property that denotes whether the service datastore has been validated with credentials.
* **linkedInfo**: [LinkedInfo](#linkedinfo): Info about origin if it is linked.
* **modifiedBy**: [UserInfo](#userinfo) (ReadOnly): The User who modified the datastore.
* **modifiedTime**: string (ReadOnly): The date and time when the datastore was last modified.
* **name**: string: Name of the datastore.
* **tags**: [DatastoreTags](#datastoretags) (ReadOnly): Tags for this datastore.

## DatastoreTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EncryptionProperty
### Properties
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

## GlusterFsSection
### Properties
* **serverAddress**: string (ReadOnly): The server address of one of the servers that hosts the GlusterFS. Can be either the IP address or server name.
* **volumeName**: string (ReadOnly): The name of the created GlusterFS volume.

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
* **id**: string: The Asset Id.
* **mimeType**: string: The mime type.
* **unpack**: bool: Whether the Asset is unpacked.
* **url**: string: The Url of the Asset.

## KeyVaultProperties
### Properties
* **identityClientId**: string: For future use - The client id of the identity which will be used to access key vault.
* **keyIdentifier**: string (Required): Key vault uri to access the encryption key.
* **keyVaultArmId**: string (Required): The ArmId of the keyVault where the customer owned encryption key is present.

## LinkedInfo
### Properties
* **linkedId**: string: LinkedId id.
* **linkedResourceName**: string: Linked resource name.
* **origin**: 'Synapse' | string: Datastore origin

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
* **password**: string
* **username**: string

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
* **authToken**: string: Personal access token to install from a private repo
* **repository**: string: Repository address in the format username/repo[/subdir][@ref|#pull].

## ScaleSettings
### Properties
* **maxNodeCount**: int (Required): Max number of nodes to use
* **minNodeCount**: int: Min number of nodes to use
* **nodeIdleTimeBeforeScaleDown**: string: Node Idle Time before scaling down amlCompute

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

## UserInfo
### Properties
* **userAltSecId**: string: A user alternate sec id. This represents the user in a different identity provider system Eg.1:live.com:puid
* **userIdp**: string: A user identity provider. Eg live.com
* **userIss**: string: The issuer which issued the token for this user.
* **userName**: string: A user's full name or a service principal's app ID.
* **userObjectId**: string: A user or service principal's object ID..
* **userPuId**: string: A user or service principal's PuID.
* **userTenantId**: string: A user or service principal's tenant ID.

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

