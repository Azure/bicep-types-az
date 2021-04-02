# Microsoft.ServiceFabricMesh @ 2018-09-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties) (Required): This type describes properties of an application resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/gateways@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayResourceProperties](#gatewayresourceproperties) (Required): This type describes properties of a gateway resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/networks@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkResourceProperties](#networkresourceproperties) (Required): Describes properties of a network resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/secrets@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretResourceProperties](#secretresourceproperties) (Required): Describes the properties of a secret resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/secrets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretValueResourceProperties](#secretvalueresourceproperties) (Required): This type describes properties of a secret value resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/secrets/values' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/volumes@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeResourceProperties](#volumeresourceproperties) (Required): This type describes properties of a volume resource.
* **tags**: [Dictionary<string,String>](#dictionarystringstring): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationResourceProperties
### Properties
* **debugParams**: string: Internal - used by Visual Studio to setup the debugging session on the local development environment.
* **description**: string: User readable description of the application.
* **diagnostics**: [DiagnosticsDescription](#diagnosticsdescription): Describes the diagnostics options available
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly): Describes the health state of an application resource. Possible values include: 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
* **provisioningState**: string (ReadOnly): State of the resource.
* **serviceNames**: string[] (ReadOnly): Names of the services in the application.
* **services**: [ServiceResourceDescription](#serviceresourcedescription)[]: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the application. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the application.
* **unhealthyEvaluation**: string (ReadOnly): When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

## DiagnosticsDescription
### Properties
* **defaultSinkRefs**: string[]: The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
* **enabled**: bool: Status of whether or not sinks are enabled.
* **sinks**: [DiagnosticsSinkProperties](#diagnosticssinkproperties)[]: List of supported sinks that can be referenced.

## DiagnosticsSinkProperties
* **Discriminator**: kind
### Base Properties
* **description**: string: A description of the sink.
* **name**: string: Name of the sink. This value is referenced by DiagnosticsReferenceDescription
### AzureInternalMonitoringPipeline
#### Properties
* **accountName**: string: Azure Internal monitoring pipeline account.
* **autoKeyConfigUrl**: string: Azure Internal monitoring pipeline autokey associated with the certificate.
* **fluentdConfigUrl**: any: Azure Internal monitoring agent fluentd configuration.
* **kind**: 'AzureInternalMonitoringPipeline' (Required): Diagnostics settings for Geneva.
* **maConfigUrl**: string: Azure Internal monitoring agent configuration.
* **namespace**: string: Azure Internal monitoring pipeline account namespace.


## AzureInternalMonitoringPipeline
### Properties
* **accountName**: string: Azure Internal monitoring pipeline account.
* **autoKeyConfigUrl**: string: Azure Internal monitoring pipeline autokey associated with the certificate.
* **fluentdConfigUrl**: any: Azure Internal monitoring agent fluentd configuration.
* **kind**: 'AzureInternalMonitoringPipeline' (Required): Diagnostics settings for Geneva.
* **maConfigUrl**: string: Azure Internal monitoring agent configuration.
* **namespace**: string: Azure Internal monitoring pipeline account namespace.

## ServiceResourceDescription
### Properties
* **id**: string (ReadOnly): Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string: The name of the resource
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (Required): This type describes properties of a service resource.
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ServiceResourceProperties
### Properties
* **autoScalingPolicies**: [AutoScalingPolicy](#autoscalingpolicy)[]: Auto scaling policies
* **codePackages**: [ContainerCodePackageProperties](#containercodepackageproperties)[] (Required): Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
* **description**: string: User readable description of the service.
* **diagnostics**: [DiagnosticsRef](#diagnosticsref): Reference to sinks in DiagnosticsDescription.
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly): Describes the health state of an application resource. Possible values include: 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
* **networkRefs**: [NetworkRef](#networkref)[]: The names of the private networks that this service needs to be part of.
* **osType**: 'Linux' | 'Windows' (Required): The operation system required by the code in service. Possible values include: 'Linux', 'Windows'
* **provisioningState**: string (ReadOnly): State of the resource.
* **replicaCount**: int: The number of replicas of the service to create. Defaults to 1 if not specified.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the service. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the service.
* **unhealthyEvaluation**: string (ReadOnly): When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

## AutoScalingPolicy
### Properties
* **mechanism**: [AutoScalingMechanism](#autoscalingmechanism) (Required): Describes the mechanism for performing auto scaling operation. Derived classes will describe the actual mechanism.
* **name**: string (Required): The name of the auto scaling policy.
* **trigger**: [AutoScalingTrigger](#autoscalingtrigger) (Required): Describes the trigger for performing auto scaling operation.

## AutoScalingMechanism
* **Discriminator**: kind
### Base Properties
### AddRemoveReplica
#### Properties
* **kind**: 'AddRemoveReplica' (Required): Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
* **maxCount**: int (Required): Maximum number of containers (scale up won't be performed above this number).
* **minCount**: int (Required): Minimum number of containers (scale down won't be performed below this number).
* **scaleIncrement**: int (Required): Each time auto scaling is performed, this number of containers will be added or removed.


## AddRemoveReplica
### Properties
* **kind**: 'AddRemoveReplica' (Required): Describes the horizontal auto scaling mechanism that adds or removes replicas (containers or container groups).
* **maxCount**: int (Required): Maximum number of containers (scale up won't be performed above this number).
* **minCount**: int (Required): Minimum number of containers (scale down won't be performed below this number).
* **scaleIncrement**: int (Required): Each time auto scaling is performed, this number of containers will be added or removed.

## AutoScalingTrigger
* **Discriminator**: kind
### Base Properties
### AverageLoad
#### Properties
* **kind**: 'AverageLoad' (Required): Describes the average load trigger used for auto scaling.
* **lowerLoadThreshold**: int (Required): Lower load threshold (if average load is below this threshold, service will scale down).
* **metric**: [AutoScalingMetric](#autoscalingmetric) (Required): Describes the metric that is used for triggering auto scaling operation. Derived classes will describe resources or metrics.
* **scaleIntervalInSeconds**: int (Required): Scale interval that indicates how often will this trigger be checked.
* **upperLoadThreshold**: int (Required): Upper load threshold (if average load is above this threshold, service will scale up).


## AverageLoad
### Properties
* **kind**: 'AverageLoad' (Required): Describes the average load trigger used for auto scaling.
* **lowerLoadThreshold**: int (Required): Lower load threshold (if average load is below this threshold, service will scale down).
* **metric**: [AutoScalingMetric](#autoscalingmetric) (Required): Describes the metric that is used for triggering auto scaling operation. Derived classes will describe resources or metrics.
* **scaleIntervalInSeconds**: int (Required): Scale interval that indicates how often will this trigger be checked.
* **upperLoadThreshold**: int (Required): Upper load threshold (if average load is above this threshold, service will scale up).

## AutoScalingMetric
* **Discriminator**: kind
### Base Properties
### Resource
#### Properties
* **kind**: 'Resource' (Required): Describes the resource that is used for triggering auto scaling.
* **name**: 'cpu' | 'memoryInGB' (Required): Name of the resource. Possible values include: 'cpu', 'memoryInGB'


## Resource
### Properties
* **kind**: 'Resource' (Required): Describes the resource that is used for triggering auto scaling.
* **name**: 'cpu' | 'memoryInGB' (Required): Name of the resource. Possible values include: 'cpu', 'memoryInGB'

## ContainerCodePackageProperties
### Properties
* **commands**: string[]: Command array to execute within the container in exec form.
* **diagnostics**: [DiagnosticsRef](#diagnosticsref): Reference to sinks in DiagnosticsDescription.
* **endpoints**: [EndpointProperties](#endpointproperties)[]: The endpoints exposed by this container.
* **entrypoint**: string: Override for the default entry point in the container.
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]: The environment variables to set in this container
* **image**: string (Required): The Container image to use.
* **imageRegistryCredential**: [ImageRegistryCredential](#imageregistrycredential): Image registry credential.
* **instanceView**: [ContainerInstanceView](#containerinstanceview) (ReadOnly): Runtime information of a container instance.
* **labels**: [ContainerLabel](#containerlabel)[]: The labels to set in this container.
* **name**: string (Required): The name of the code package.
* **reliableCollectionsRefs**: [ReliableCollectionsRef](#reliablecollectionsref)[]: A list of ReliableCollection resources used by this particular code package. Please refer to ReliableCollectionsRef for more details.
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): This type describes the resource requirements for a container or a service.
* **settings**: [Setting](#setting)[]: The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
* **volumeRefs**: [VolumeReference](#volumereference)[]: Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
* **volumes**: [ApplicationScopedVolume](#applicationscopedvolume)[]: Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.

## DiagnosticsRef
### Properties
* **enabled**: bool: Status of whether or not sinks are enabled.
* **sinkRefs**: string[]: List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.

## EndpointProperties
### Properties
* **name**: string (Required): The name of the endpoint.
* **port**: int: Port used by the container.

## EnvironmentVariable
### Properties
* **name**: string: The name of the environment variable.
* **value**: string: The value of the environment variable.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
* **server**: string (Required): Docker image registry server, without protocol such as `http` and `https`.
* **username**: string (Required): The username for the private registry.

## ContainerInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate): The container state.
* **events**: [ContainerEvent](#containerevent)[]: The events of this container instance.
* **previousState**: [ContainerState](#containerstate): The container state.
* **restartCount**: int: The number of times the container has been restarted.

## ContainerState
### Properties
* **detailStatus**: string: Human-readable status of this state.
* **exitCode**: string: The container exit code.
* **finishTime**: string: Date/time when the container state finished.
* **startTime**: string: Date/time when the container state started.
* **state**: string: The state of this container

## ContainerEvent
### Properties
* **count**: int: The count of the event.
* **firstTimestamp**: string: Date/time of the first event.
* **lastTimestamp**: string: Date/time of the last event.
* **message**: string: The event message
* **name**: string: The name of the container event.
* **type**: string: The event type.

## ContainerLabel
### Properties
* **name**: string (Required): The name of the container label.
* **value**: string (Required): The value of the container label.

## ReliableCollectionsRef
### Properties
* **doNotPersistState**: bool: False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
* **name**: string (Required): Name of ReliableCollection resource. Right now it's not used and you can use any string.

## ResourceRequirements
### Properties
* **limits**: [ResourceLimits](#resourcelimits): This type describes the resource limits for a given container. It describes the most amount of resources a container is allowed to use before being restarted.
* **requests**: [ResourceRequests](#resourcerequests) (Required): This type describes the requested resources for a given container. It describes the least amount of resources required for the container. A container can consume more than requested resources up to the specified limits before being restarted. Currently, the requested resources are treated as limits.

## ResourceLimits
### Properties
* **cpu**: int: CPU limits in cores. At present, only full cores are supported.
* **memoryInGB**: int: The memory limit in GB.

## ResourceRequests
### Properties
* **cpu**: int (Required): Requested number of CPU cores. At present, only full cores are supported.
* **memoryInGB**: int (Required): The memory request in GB for this container.

## Setting
### Properties
* **name**: string: The name of the setting.
* **value**: string: The value of the setting.

## VolumeReference
### Properties
* **destinationPath**: string (Required): The path within the container at which the volume should be mounted. Only valid path characters are allowed.
* **name**: string (Required): Name of the volume being referenced.
* **readOnly**: bool: The flag indicating whether the volume is read only. Default is 'false'.

## ApplicationScopedVolume
### Properties
* **creationParameters**: [ApplicationScopedVolumeCreationParameters](#applicationscopedvolumecreationparameters) (Required): Describes parameters for creating application-scoped volumes.
* **destinationPath**: string (Required): The path within the container at which the volume should be mounted. Only valid path characters are allowed.
* **name**: string (Required): Name of the volume being referenced.
* **readOnly**: bool: The flag indicating whether the volume is read only. Default is 'false'.

## ApplicationScopedVolumeCreationParameters
* **Discriminator**: kind
### Base Properties
* **description**: string: User readable description of the volume.
### ServiceFabricVolumeDisk
#### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required): Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required): Volume size. Possible values include: 'Small', 'Medium', 'Large'


## ServiceFabricVolumeDisk
### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required): Describes parameters for creating application-scoped volumes provided by Service Fabric Volume Disks
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required): Volume size. Possible values include: 'Small', 'Medium', 'Large'

## NetworkRef
### Properties
* **endpointRefs**: [EndpointRef](#endpointref)[]: A list of endpoints that are exposed on this network.
* **name**: string: Name of the network

## EndpointRef
### Properties
* **name**: string: Name of the endpoint.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayResourceProperties
### Properties
* **description**: string: User readable description of the gateway.
* **destinationNetwork**: [NetworkRef](#networkref) (Required): Describes a network reference in a service.
* **http**: [HttpConfig](#httpconfig)[]: Configuration for http connectivity for this gateway.
* **ipAddress**: string (ReadOnly): IP address of the gateway. This is populated in the response and is ignored for incoming requests.
* **provisioningState**: string (ReadOnly): State of the resource.
* **sourceNetwork**: [NetworkRef](#networkref) (Required): Describes a network reference in a service.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the resource. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the gateway.
* **tcp**: [TcpConfig](#tcpconfig)[]: Configuration for tcp connectivity for this gateway.

## HttpConfig
### Properties
* **hosts**: [HttpHostConfig](#httphostconfig)[] (Required): description for routing.
* **name**: string (Required): http gateway config name.
* **port**: int (Required): Specifies the port at which the service endpoint below needs to be exposed.

## HttpHostConfig
### Properties
* **name**: string (Required): http hostname config name.
* **routes**: [HttpRouteConfig](#httprouteconfig)[] (Required): Route information to use for routing. Routes are processed in the order they are specified. Specify routes that are more specific before routes that can handle general cases.

## HttpRouteConfig
### Properties
* **destination**: [GatewayDestination](#gatewaydestination) (Required): Describes destination endpoint for routing traffic.
* **match**: [HttpRouteMatchRule](#httproutematchrule) (Required): Describes a rule for http route matching.
* **name**: string (Required): http route name.

## GatewayDestination
### Properties
* **applicationName**: string (Required): Name of the service fabric Mesh application.
* **endpointName**: string (Required): name of the endpoint in the service.
* **serviceName**: string (Required): service that contains the endpoint.

## HttpRouteMatchRule
### Properties
* **headers**: [HttpRouteMatchHeader](#httproutematchheader)[]: headers and their values to match in request.
* **path**: [HttpRouteMatchPath](#httproutematchpath) (Required): Path to match for routing.

## HttpRouteMatchHeader
### Properties
* **name**: string (Required): Name of header to match in request.
* **type**: 'exact': how to match header value. Possible values include: 'exact'
* **value**: string: Value of header to match in request.

## HttpRouteMatchPath
### Properties
* **rewrite**: string: replacement string for matched part of the Uri.
* **type**: string (Required): how to match value in the Uri
* **value**: string (Required): Uri path to match for request.

## TcpConfig
### Properties
* **destination**: [GatewayDestination](#gatewaydestination) (Required): Describes destination endpoint for routing traffic.
* **name**: string (Required): tcp gateway config name.
* **port**: int (Required): Specifies the port at which the service endpoint below needs to be exposed.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkResourceProperties
### Properties
* **description**: string: User readable description of the network.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the network. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the network.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretResourceProperties
### Properties
* **contentType**: string: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
* **description**: string: User readable description of the secret.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the resource. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the secret.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretValueResourceProperties
### Properties
* **provisioningState**: string (ReadOnly): State of the resource.
* **value**: string: The actual value of the secret.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeResourceProperties
### Properties
* **azureFileParameters**: [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile): This type describes a volume provided by an Azure Files file share.
* **description**: string: User readable description of the volume.
* **provider**: string (Required): Provider of the volume.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly): Status of the volume. Possible values include: 'Unknown', 'Ready', 'Upgrading', 'Creating', 'Deleting', 'Failed'
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the volume.

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string: Access key of the Azure storage account for the File Share.
* **accountName**: string (Required): Name of the Azure storage account for the File Share.
* **shareName**: string (Required): Name of the Azure Files file share that provides storage for the volume.

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

