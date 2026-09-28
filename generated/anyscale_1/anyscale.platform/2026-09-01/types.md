# Anyscale.Platform @ 2026-09-01

## Resource Anyscale.Platform/agreements@2026-09-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudProperties](#cloudproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Anyscale.Platform/clouds' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/cloudResources@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [CloudResourceProperties](#cloudresourceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Anyscale.Platform/clouds/cloudResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/computeConfigs@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ComputeConfigProperties](#computeconfigproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/computeConfigs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/containerImages@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ContainerImageProperties](#containerimageproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/containerImages' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/projects@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ProjectProperties](#projectproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/projects' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/projects/jobs@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [JobProperties](#jobproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/projects/jobs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/projects/services@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceProperties](#serviceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/projects/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Anyscale.Platform/clouds/projects/workspaces@2026-09-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-09-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {maxLength: 256, pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkspaceProperties](#workspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Anyscale.Platform/clouds/projects/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## AgreementProperties
### Properties
* **agreementLink**: string (ReadOnly): URL to view/download the agreement document.
* **displayName**: string (ReadOnly): The display name of the agreement.
* **effectiveDate**: string (ReadOnly): Date from which the agreement is effective (UTC). Present once accepted.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the agreement resource.
* **status**: 'Active' | 'Pending' | string (ReadOnly): Current status of the agreement.

## CloudProperties
### Properties
* **acrResourceId**: string: Optional Azure Container Registry resource ID for image builds.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the cloud resource
* **ssoUrl**: string (ReadOnly): The SSO URL for the cloud

## CloudResourceProperties
### Properties
* **anyscaleOperatorIamIdentity**: string: The principal ID of the managed identity that will be used by the Anyscale operator
* **cloudResourceId**: string (ReadOnly): The cloud resource ID which is used during Anyscale operator bootstrap,
generated by Anyscale control plane.
* **cloudStorageBucketEndpoint**: string (Required): The cloud storage bucket endpoint
* **cloudStorageBucketName**: string (Required): A fully qualified storage bucket name for cloud storage,
e.g. s3://bucket-name, gs://bucket-name, or
abfss://bucket-name
* **cloudStorageBucketRegion**: string {maxLength: 35, pattern: "^[a-z0-9]+(-[a-z0-9]+)*$"}: The region of the cloud storage bucket. Defaults to `region` when unset.
Immutable once the resource is created.
* **computeStack**: 'K8S' | string (Required): Compute stack of the cloud resource
* **provider**: 'AWS' | 'Azure' | 'GCP' | 'Generic' | string (Required): Provider of the cloud resource
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the cloud resource
* **region**: string {maxLength: 35, pattern: "^[a-z0-9]+(-[a-z0-9]+)*$"}: The cloud provider region of this cloud resource, e.g. us-west-2. For Generic clouds this is a
free-form routing label and need not match a real cloud provider region.
Defaults to the resource location when unset. Immutable once the resource is created.

## ComputeConfigProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the compute config.
* **revision**: int (ReadOnly): The current revision number. This is incremented when the compute config is updated.
* **spec**: [ComputeConfigSpec](#computeconfigspec) (Required): Compute config specification.
* **url**: string (ReadOnly): The URL to the compute config overview page in the Anyscale console.

## ComputeConfigSpec
### Properties
* **options**: [ComputeConfigSpecOption](#computeconfigspecoption)[]: A list of the compute config options.

## ComputeConfigSpecOption
### Properties
* **advancedInstanceConfig**: string: Advanced configurations for this deployment compute config to pass to the cloud provider when launching this instance.
* **cloudResourceNames**: string[]: The resource IDs of the cloud resources to use for this compute config under the Anyscale cloud to launch the cluster. If not specified, all cloud resources will be used.
* **flags**: any: A set of advanced cluster-level flags that can be used to configure a particular workload.
* **headNode**: [NodeType](#nodetype) (Required): The node type to use for the head node.
* **workerNodes**: [WorkerNode](#workernode)[]: The node types to use for the worker nodes.
* **zones**: string[]: The availability zones that sessions are allowed to be launched in, e.g. "eastus-1". If not specified or "any" is provided as the option, any AZ may be used. If "any" is provided, it must be the only item in the list.

## ComputeConfigSpecOrReference
### Properties
* **computeConfigName**: string: The resource ID of an existing predefined compute config.
* **spec**: [ComputeConfigSpec](#computeconfigspec): The inlined compute config spec.

## ContainerImageProperties
### Properties
* **buildState**: 'BuildFailed' | 'BuildInProgress' | 'BuildPending' | 'BuildSucceeded' | string (ReadOnly): The current state of the container image build.
* **containerfile**: string: Containerfile content to use to build the container image. Mutually exclusive with containerImageUri.
* **containerImageUri**: string: A pre-built container image reference from an external registry, such as registry/repository:tag or registry/repository@sha256:digest. Mutually exclusive with containerfile.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the container image.
* **revision**: int (ReadOnly): The current revision number. This is incremented when the container image is updated.
* **url**: string (ReadOnly): The URL link of the container image to the Anyscale console.

## JobConfig
### Properties
* **computeConfig**: [ComputeConfigSpecOrReference](#computeconfigspecorreference): The compute configuration for the job, either the name of predefined compute config or an inline compute configs object.
* **entrypoint**: string (WriteOnly): Command that will be run to execute the job, e.g. 'python main.py'.
* **envVars**: any (WriteOnly): Environment variables to set.
* **imageUri**: string: The Ray container image reference to use for the job, such as registry/repository:tag or registry/repository@sha256:digest.
* **maxRetries**: int: Maximum number of times the job will be retried before being marked failed.
* **pipRequirements**: string[] (WriteOnly): Pip package requirements to install on top of the image, such as package names, version specifiers, or requirements-file arguments.
* **pyModules**: string[] (WriteOnly): Remote locations of Python modules to install along with the runtime environment.
* **timeout**: int: The timeout in seconds for each job run.
* **workingDir**: string (WriteOnly): The remote archive location where your code will run, such as an abfss://, s3://, gs://, or https:// path.

## JobProperties
### Properties
* **config**: [JobConfig](#jobconfig) (Required): The configuration for the job.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the job.
* **state**: 'Failed' | 'Running' | 'Starting' | 'Succeeded' | 'Unknown' | string (ReadOnly): The current state of the job.
* **url**: string (ReadOnly): The URL to the job overview page in the Anyscale console.

## LogicalResources
### Properties
* **cpu**: int: Number of CPUs in this node type.
* **customResources**: any: Custom resources for this node to be used by Ray autoscaler.
* **gpu**: int: Number of GPUs in this node type.
* **memory**: int: Amount of memory to allocate to the Python worker.
* **objectStoreMemory**: int: The amount of memory in bytes allocated for the Ray object store on this node.

## NodeType
### Properties
* **advancedInstanceConfig**: string: Advanced configurations for this compute node type to pass to the cloud provider when launching this instance.
* **flags**: any: A set of advanced node-level flags that can be used to configure a particular workload.
* **instanceType**: string: The cloud provider instance type to use for this node. Optional when using requiredResources.
* **labels**: any: Labels to associate the node with for Ray scheduling purposes.
* **name**: string (Required): Unique name of this node group.
* **requiredLabels**: any: Required labels that must be present on the node for node (pod) scheduling purposes.
* **requiredResources**: [PhysicalResources](#physicalresources): Required resources for compute node type which specifies the actual CPU, memory, and GPU resources that should be allocated for this node type.
* **resources**: [LogicalResources](#logicalresources): Declaration of logical node resources for Ray.

## PhysicalResources
### Properties
* **accelerator**: string: Type of accelerator (e.g., 'T4', 'L4', 'H100').
* **cpu**: int: Number of CPUs to allocate.
* **cpuArchitecture**: 'arm64' | 'x86_64' | string: CPU architecture type.
* **gpu**: int: Number of GPUs to allocate.
* **memory**: int: Amount of memory in bytes to allocate.
* **tpu**: int: Number of TPUs to allocate.

## ProjectProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the project.
* **url**: string (ReadOnly): The URL link of the project to the Anyscale console.

## RayGcsExternalStorageConfig
### Properties
* **address**: string: Address of the external storage (e.g., Redis). Must be accessible from instances in the cloud.
* **certificatePath**: string: Path to the TLS certificate file to use for authentication when using secure connections. Defaults to the cloud-wide configuration.

## ServiceDeploymentConfig
### Properties
* **applications**: any[]: List of Ray Serve applications to run. At least one application must be specified. Each application must include an 'importPath'. See https://docs.ray.io/en/latest/serve/production-guide/config.html for the Ray Serve config format.
* **autoCompleteRollout**: bool: Whether to automatically complete the rollout when the canary version reaches 100% traffic. Defaults to true.
* **canaryPercent**: int {minValue: 0, maxValue: 100}: The percentage of traffic to route to the canary version during rollout (0-100). If not set, the service will automatically roll out.
* **computeConfig**: [ComputeConfigSpecOrReference](#computeconfigspecorreference): The compute config to use for the service.
* **connectionIds**: string[]: List of connection IDs to associate with the service for third-party integrations.
* **description**: string: Optional description of the service.
* **envVars**: any: Environment variables to set on the service cluster.
* **grpcConfig**: any: gRPC protocol configuration.
* **httpConfig**: any: HTTP protocol configuration.
* **imageUri**: string: The container image reference to use for the service, such as registry/repository:tag or registry/repository@sha256:digest.
* **maxSurgePercent**: int {minValue: 0, maxValue: 100}: The maximum percentage of excess capacity allowed during rollout (0-100).
* **maxUptimeTimeoutSec**: int {minValue: 0}: Auto-termination timeout in seconds. The service will be unconditionally terminated after this period. Setting to 0 disables auto-termination (default).
* **rayGcsExternalStorageConfig**: [RayGcsExternalStorageConfig](#raygcsexternalstorageconfig): External storage configuration for Ray GCS head node fault tolerance. If populated, head node fault tolerance will be enabled.
* **rolloutStrategy**: 'InPlace' | 'MultiVersion' | 'Rollout' | string: The deployment rollout strategy. Defaults to Rollout.
* **tracingConfig**: [TracingConfig](#tracingconfig): Tracing configuration for distributed tracing.
* **trafficPercent**: int {minValue: 0, maxValue: 100}: The traffic percentage for this version in a multi-version deployment (0-100). All version weights must sum to 100.
* **version**: string: The version identifier for this deployment. Auto-generated if not provided.

## ServiceProperties
### Properties
* **autoRolloutEnabled**: bool (ReadOnly): Whether the service has auto-rollout enabled.
* **baseUrl**: string (ReadOnly): The base URL of the service endpoint.
* **canaryVersion**: [ServiceVersionDetail](#serviceversiondetail) (ReadOnly): The canary version of the service. Present only during a rolling out state.
* **currentState**: 'RollingBack' | 'RollingOut' | 'Running' | 'Starting' | 'SystemFailure' | 'Terminated' | 'Terminating' | 'Unhealthy' | 'Updating' | 'UserErrorFailure' | string (ReadOnly): The current running state of the service.
* **deploymentConfig**: [ServiceDeploymentConfig](#servicedeploymentconfig): Deployment config of the Anyscale service.
* **hostname**: string (ReadOnly): The hostname of the service endpoint.
* **primaryVersion**: [ServiceVersionDetail](#serviceversiondetail) (ReadOnly): The primary (stable) version of the service. If the service is terminated, this refers to the most recently active version.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Anyscale service.
* **url**: string (ReadOnly): The URL link to the service in the Anyscale console.

## ServiceVersionDetail
### Properties
* **applications**: any[]: List of Ray Serve applications for this version.
* **computeConfig**: [ComputeConfigSpecOrReference](#computeconfigspecorreference) (Required): The ID of the compute configuration used by this version.
* **createdAt**: string: The time this version was created.
* **currentState**: 'Running' | 'Starting' | 'SystemFailure' | 'Terminated' | 'Terminating' | 'Unhealthy' | 'Unknown' | 'Updating' | string (Required): The current state of this version.
* **currentWeight**: int {minValue: 0, maxValue: 100}: The current percentage of traffic sent to this version (0-100).
* **imageUri**: string (Required): The container image reference used by this version, such as registry/repository:tag or registry/repository@sha256:digest.
* **rayGcsExternalStorageConfig**: [RayGcsExternalStorageConfig](#raygcsexternalstorageconfig): External storage configuration for Ray GCS head node fault tolerance. If populated, head node fault tolerance will be enabled.
* **tracingConfig**: [TracingConfig](#tracingconfig): Tracing configuration for distributed tracing.
* **version**: string (Required): The version string identifier.
* **weight**: int {minValue: 0, maxValue: 100} (Required): The target percentage of traffic sent to this version (0-100).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TracingConfig
### Properties
* **enabled**: bool: Whether tracing is enabled. If enabled and no exporterImportPath is defined, the default tracing exporter will be used. Defaults to true.
* **exporterImportPath**: string: Custom tracing exporter import path. Should be of the form 'module.submodule.export_tracing'.
* **samplingRatio**: int {minValue: 0, maxValue: 1}: The sampling ratio for tracing (0.0 to 1.0). Reducing the ratio minimizes serving latency and storage overhead. Defaults to 1.0.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## WorkerNode
### Properties
* **advancedInstanceConfig**: string: Advanced configurations for this compute node type to pass to the cloud provider when launching this instance.
* **flags**: any: A set of advanced node-level flags that can be used to configure a particular workload.
* **instanceType**: string: The cloud provider instance type to use for this node. Optional when using requiredResources.
* **labels**: any: Labels to associate the node with for Ray scheduling purposes.
* **marketType**: 'ON_DEMAND' | 'PREFER_SPOT' | 'SPOT' | string: Market type of the instances.
* **maxNodes**: int: Maximum number of nodes of this type that can be running in the cluster.
* **minNodes**: int: Minimum number of nodes of this type that will be kept running in the cluster.
* **name**: string (Required): Unique name of this node group.
* **requiredLabels**: any: Required labels that must be present on the node for node (pod) scheduling purposes.
* **requiredResources**: [PhysicalResources](#physicalresources): Required resources for compute node type which specifies the actual CPU, memory, and GPU resources that should be allocated for this node type.
* **resources**: [LogicalResources](#logicalresources): Declaration of logical node resources for Ray.

## WorkspaceProperties
### Properties
* **computeConfig**: [ComputeConfigSpecOrReference](#computeconfigspecorreference) (Required): The compute config to use for the workspace.
* **currentStatus**: 'Errored' | 'Running' | 'Starting' | 'Terminated' | 'Terminating' | 'Updating' | string (ReadOnly): The current status of the workspace.
* **idleTerminationMinutes**: int {minValue: 0}: The number of minutes of inactivity before Anyscale terminates the workspace. Idle time is defined as the time during which a workspace is not running a user command. Set to 0 to disable automatic termination.
* **imageUri**: string (Required): The Ray container image reference to use for the workspace, such as registry/repository:tag or registry/repository@sha256:digest.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the workspace.

