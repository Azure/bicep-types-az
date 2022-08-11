# Microsoft.ServiceFabricMesh @ 2018-09-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties) (Required): This type describes properties of an application resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/applications/services@2018-09-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (ReadOnly): This type describes properties of a service resource.
* **type**: 'Microsoft.ServiceFabricMesh/applications/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/gateways@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GatewayResourceProperties](#gatewayresourceproperties) (Required): This type describes properties of a gateway resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/gateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/networks@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkResourceProperties](#networkresourceproperties) (Required): Describes properties of a network resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/secrets@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretResourceProperties](#secretresourceproperties) (Required): Describes the properties of a secret resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/secrets' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SecretValueResourceProperties](#secretvalueresourceproperties) (Required): This type describes properties of a secret value resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/secrets/values' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/volumes@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeResourceProperties](#volumeresourceproperties) (Required): This type describes properties of a volume resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant): The resource type

## Function list_value (Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview)
* **Resource**: Microsoft.ServiceFabricMesh/secrets/values
* **ApiVersion**: 2018-09-01-preview
* **Output**: [SecretValue](#secretvalue)

## ApplicationResourceProperties
### Properties
* **debugParams**: string: Internal - used by Visual Studio to setup the debugging session on the local development environment.
* **description**: string: User readable description of the application.
* **diagnostics**: [DiagnosticsDescription](#diagnosticsdescription): Describes the diagnostics definition and usage for an application resource.
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' | string (ReadOnly): Describes the health state of an application resource.
* **provisioningState**: string (ReadOnly): State of the resource.
* **serviceNames**: string[] (ReadOnly): Names of the services in the application.
* **services**: [ServiceResourceDescription](#serviceresourcedescription)[]: Describes the services in the application. This property is used to create or modify services of the application. On get only the name of the service is returned. The service description can be obtained by querying for the service resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the application.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the application.
* **unhealthyEvaluation**: string (ReadOnly): When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

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

### ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk
#### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required): Specifies the application-scoped volume kind.
* **sizeDisk**: 'Large' | 'Medium' | 'Small' | string (Required): Volume size


## AutoScalingMechanism
* **Discriminator**: kind

### Base Properties

### AddRemoveReplicaScalingMechanism
#### Properties
* **kind**: 'AddRemoveReplica' (Required): The type of auto scaling mechanism.
* **maxCount**: int (Required): Maximum number of containers (scale up won't be performed above this number).
* **minCount**: int (Required): Minimum number of containers (scale down won't be performed below this number).
* **scaleIncrement**: int (Required): Each time auto scaling is performed, this number of containers will be added or removed.


## AutoScalingMetric
* **Discriminator**: kind

### Base Properties

### AutoScalingResourceMetric
#### Properties
* **kind**: 'Resource' (Required): The type of auto scaling metric
* **name**: 'cpu' | 'memoryInGB' | string (Required): Name of the resource.


## AutoScalingPolicy
### Properties
* **mechanism**: [AutoScalingMechanism](#autoscalingmechanism) (Required): The mechanism that is used to scale when auto scaling operation is invoked.
* **name**: string (Required): The name of the auto scaling policy.
* **trigger**: [AutoScalingTrigger](#autoscalingtrigger) (Required): Determines when auto scaling operation will be invoked.

## AutoScalingTrigger
* **Discriminator**: kind

### Base Properties

### AverageLoadScalingTrigger
#### Properties
* **kind**: 'AverageLoad' (Required): The type of auto scaling trigger
* **lowerLoadThreshold**: int (Required): Lower load threshold (if average load is below this threshold, service will scale down).
* **metric**: [AutoScalingMetric](#autoscalingmetric) (Required): Description of the metric that is used for scaling.
* **scaleIntervalInSeconds**: int (Required): Scale interval that indicates how often will this trigger be checked.
* **upperLoadThreshold**: int (Required): Upper load threshold (if average load is above this threshold, service will scale up).


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
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): The resources required by this container.
* **settings**: [Setting](#setting)[]: The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
* **volumeRefs**: [VolumeReference](#volumereference)[]: Volumes to be attached to the container. The lifetime of these volumes is independent of the application's lifetime.
* **volumes**: [ApplicationScopedVolume](#applicationscopedvolume)[]: Volumes to be attached to the container. The lifetime of these volumes is scoped to the application's lifetime.

## ContainerEvent
### Properties
* **count**: int: The count of the event.
* **firstTimestamp**: string: Date/time of the first event.
* **lastTimestamp**: string: Date/time of the last event.
* **message**: string: The event message
* **name**: string: The name of the container event.
* **type**: string: The event type.

## ContainerInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate): Current container instance state.
* **events**: [ContainerEvent](#containerevent)[]: The events of this container instance.
* **previousState**: [ContainerState](#containerstate): Previous container instance state.
* **restartCount**: int: The number of times the container has been restarted.

## ContainerLabel
### Properties
* **name**: string (Required): The name of the container label.
* **value**: string (Required): The value of the container label.

## ContainerState
### Properties
* **detailStatus**: string: Human-readable status of this state.
* **exitCode**: string: The container exit code.
* **finishTime**: string: Date/time when the container state finished.
* **startTime**: string: Date/time when the container state started.
* **state**: string: The state of this container

## DiagnosticsDescription
### Properties
* **defaultSinkRefs**: string[]: The sinks to be used if diagnostics is enabled. Sink choices can be overridden at the service and code package level.
* **enabled**: bool: Status of whether or not sinks are enabled.
* **sinks**: [DiagnosticsSinkProperties](#diagnosticssinkproperties)[]: List of supported sinks that can be referenced.

## DiagnosticsRef
### Properties
* **enabled**: bool: Status of whether or not sinks are enabled.
* **sinkRefs**: string[]: List of sinks to be used if enabled. References the list of sinks in DiagnosticsDescription.

## DiagnosticsSinkProperties
* **Discriminator**: kind

### Base Properties
* **description**: string: A description of the sink.
* **name**: string: Name of the sink. This value is referenced by DiagnosticsReferenceDescription

### AzureInternalMonitoringPipelineSinkDescription
#### Properties
* **accountName**: string: Azure Internal monitoring pipeline account.
* **autoKeyConfigUrl**: string: Azure Internal monitoring pipeline autokey associated with the certificate.
* **fluentdConfigUrl**: any: Azure Internal monitoring agent fluentd configuration.
* **kind**: 'AzureInternalMonitoringPipeline' (Required): The kind of DiagnosticsSink.
* **maConfigUrl**: string: Azure Internal monitoring agent configuration.
* **namespace**: string: Azure Internal monitoring pipeline account namespace.


## EndpointProperties
### Properties
* **name**: string (Required): The name of the endpoint.
* **port**: int: Port used by the container.

## EndpointRef
### Properties
* **name**: string: Name of the endpoint.

## EnvironmentVariable
### Properties
* **name**: string: The name of the environment variable.
* **value**: string: The value of the environment variable.

## GatewayDestination
### Properties
* **applicationName**: string (Required): Name of the service fabric Mesh application.
* **endpointName**: string (Required): name of the endpoint in the service.
* **serviceName**: string (Required): service that contains the endpoint.

## GatewayResourceProperties
### Properties
* **description**: string: User readable description of the gateway.
* **destinationNetwork**: [NetworkRef](#networkref) (Required): Network that the Application is using.
* **http**: [HttpConfig](#httpconfig)[]: Configuration for http connectivity for this gateway.
* **ipAddress**: string (ReadOnly): IP address of the gateway. This is populated in the response and is ignored for incoming requests.
* **provisioningState**: string (ReadOnly): State of the resource.
* **sourceNetwork**: [NetworkRef](#networkref) (Required): Network the gateway should listen on for requests.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the resource.
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

## HttpRouteMatchHeader
### Properties
* **name**: string (Required): Name of header to match in request.
* **type**: 'exact' | string: how to match header value
* **value**: string: Value of header to match in request.

## HttpRouteMatchPath
### Properties
* **rewrite**: string: replacement string for matched part of the Uri.
* **type**: 'prefix' | string (Required): how to match value in the Uri
* **value**: string (Required): Uri path to match for request.

## HttpRouteMatchRule
### Properties
* **headers**: [HttpRouteMatchHeader](#httproutematchheader)[]: headers and their values to match in request.
* **path**: [HttpRouteMatchPath](#httproutematchpath) (Required): Path to match for routing.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry. The password is required for create or update operations, however it is not returned in the get or list operations.
* **server**: string (Required): Docker image registry server, without protocol such as `http` and `https`.
* **username**: string (Required): The username for the private registry.

## NetworkRef
### Properties
* **endpointRefs**: [EndpointRef](#endpointref)[]: A list of endpoints that are exposed on this network.
* **name**: string: Name of the network

## NetworkResourceProperties
* **Discriminator**: kind

### Base Properties
* **description**: string: User readable description of the network.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the network.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the network.

### LocalNetworkResourceProperties
#### Properties
* **kind**: 'Local' (Required): The type of a Service Fabric container network.
* **networkAddressPrefix**: string: Address space for the local container network.


## ReliableCollectionsRef
### Properties
* **doNotPersistState**: bool: False (the default) if ReliableCollections state is persisted to disk as usual. True if you do not want to persist state, in which case replication is still enabled and you can use ReliableCollections as distributed cache.
* **name**: string (Required): Name of ReliableCollection resource. Right now it's not used and you can use any string.

## ResourceLimits
### Properties
* **cpu**: int: CPU limits in cores. At present, only full cores are supported.
* **memoryInGB**: int: The memory limit in GB.

## ResourceRequests
### Properties
* **cpu**: int (Required): Requested number of CPU cores. At present, only full cores are supported.
* **memoryInGB**: int (Required): The memory request in GB for this container.

## ResourceRequirements
### Properties
* **limits**: [ResourceLimits](#resourcelimits): Describes the maximum limits on the resources for a given container.
* **requests**: [ResourceRequests](#resourcerequests) (Required): Describes the requested resources for a given container.

## SecretResourceProperties
* **Discriminator**: kind

### Base Properties
* **contentType**: string: The type of the content stored in the secret value. The value of this property is opaque to Service Fabric. Once set, the value of this property cannot be changed.
* **description**: string: User readable description of the secret.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the resource.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the secret.

### InlinedValueSecretResourceProperties
#### Properties
* **kind**: 'inlinedValue' (Required): Describes the kind of secret.


## SecretValue
### Properties
* **value**: string: The actual value of the secret.

## SecretValueResourceProperties
### Properties
* **provisioningState**: string (ReadOnly): State of the resource.
* **value**: string: The actual value of the secret.

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
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' | string (ReadOnly): Describes the health state of an application resource.
* **networkRefs**: [NetworkRef](#networkref)[]: The names of the private networks that this service needs to be part of.
* **osType**: 'Linux' | 'Windows' | string (Required): The operation system required by the code in service.
* **provisioningState**: string (ReadOnly): State of the resource.
* **replicaCount**: int: The number of replicas of the service to create. Defaults to 1 if not specified.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the service.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the service.
* **unhealthyEvaluation**: string (ReadOnly): When the service's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the service is marked unhealthy.

## Setting
### Properties
* **name**: string: The name of the setting.
* **value**: string: The value of the setting.

## TcpConfig
### Properties
* **destination**: [GatewayDestination](#gatewaydestination) (Required): Describes destination endpoint for routing traffic.
* **name**: string (Required): tcp gateway config name.
* **port**: int (Required): Specifies the port at which the service endpoint below needs to be exposed.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string: Access key of the Azure storage account for the File Share.
* **accountName**: string (Required): Name of the Azure storage account for the File Share.
* **shareName**: string (Required): Name of the Azure Files file share that provides storage for the volume.

## VolumeReference
### Properties
* **destinationPath**: string (Required): The path within the container at which the volume should be mounted. Only valid path characters are allowed.
* **name**: string (Required): Name of the volume being referenced.
* **readOnly**: bool: The flag indicating whether the volume is read only. Default is 'false'.

## VolumeResourceProperties
### Properties
* **azureFileParameters**: [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile): This type describes a volume provided by an Azure Files file share.
* **description**: string: User readable description of the volume.
* **provider**: 'SFAzureFile' | string (Required): Provider of the volume.
* **provisioningState**: string (ReadOnly): State of the resource.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' | string (ReadOnly): Status of the volume.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the volume.

