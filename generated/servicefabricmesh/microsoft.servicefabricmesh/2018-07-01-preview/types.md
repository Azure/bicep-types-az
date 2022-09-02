# Microsoft.ServiceFabricMesh @ 2018-07-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties) (Required): This type describes properties of an application resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/applications/services@2018-07-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (ReadOnly): This type describes properties of a service resource.
* **type**: 'Microsoft.ServiceFabricMesh/applications/services' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/networks@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [NetworkResourceProperties](#networkresourceproperties) (Required): Describes properties of a network resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ServiceFabricMesh/volumes@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [VolumeResourceProperties](#volumeresourceproperties) (Required): Describes properties of a volume resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant): The resource type

## ApplicationResourceProperties
### Properties
* **debugParams**: string: Internal use.
* **description**: string: User readable description of the application.
* **diagnostics**: [DiagnosticsDescription](#diagnosticsdescription): Describes the diagnostics definition and usage for an application resource.
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' | string (ReadOnly): Describes the health state of an application resource.
* **provisioningState**: string (ReadOnly): State of the resource.
* **serviceNames**: string[] (ReadOnly): Names of the services in the application.
* **services**: [ServiceResourceDescription](#serviceresourcedescription)[]: describes the services in the application.
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Ready' | 'Upgrading' | string (ReadOnly): Status of the application resource.
* **statusDetails**: string (ReadOnly): Gives additional information about the current status of the application deployment.
* **unhealthyEvaluation**: string (ReadOnly): When the application's health state is not 'Ok', this additional details from service fabric Health Manager for the user to know why the application is marked unhealthy.

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
* **resources**: [ResourceRequirements](#resourcerequirements) (Required): This type describes the resource requirements for a container or a service.
* **settings**: [Setting](#setting)[]: The settings to set in this container. The setting file path can be fetched from environment variable "Fabric_SettingPath". The path for Windows container is "C:\\secrets". The path for Linux container is "/var/secrets".
* **volumeRefs**: [ContainerVolume](#containervolume)[]: The volumes to be attached to the container.

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

## ContainerVolume
### Properties
* **destinationPath**: string (Required): The path within the container at which the volume should be mounted. Only valid path characters are allowed.
* **name**: string (Required): Name of the volume.
* **readOnly**: bool: The flag indicating whether the volume is read only. Default is 'false'.

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

## EnvironmentVariable
### Properties
* **name**: string: The name of the environment variable.
* **value**: string: The value of the environment variable.

## ImageRegistryCredential
### Properties
* **password**: string: The password for the private registry.
* **server**: string (Required): Docker image registry server, without protocol such as `http` and `https`.
* **username**: string (Required): The username for the private registry.

## IngressConfig
### Properties
* **layer4**: [Layer4IngressConfig](#layer4ingressconfig)[]: Configuration for layer4 public connectivity for this network.
* **publicIPAddress**: string (ReadOnly): The public IP address for reaching this network.
* **qosLevel**: 'Bronze' | string: The QoS tier for ingress.

## Layer4IngressConfig
### Properties
* **applicationName**: string: The application name which contains the service to be exposed.
* **endpointName**: string: The service endpoint that needs to be exposed.
* **name**: string: Layer4 ingress config name.
* **publicPort**: int: Specifies the public port at which the service endpoint below needs to be exposed.
* **serviceName**: string: The service whose endpoint needs to be exposed at the public port.

## NetworkRef
### Properties
* **name**: string: Name of the network.

## NetworkResourceProperties
### Properties
* **addressPrefix**: string (Required): the address prefix for this network.
* **description**: string: User readable description of the network.
* **ingressConfig**: [IngressConfig](#ingressconfig): Configuration for public connectivity for this network.
* **provisioningState**: string (ReadOnly): State of the resource.

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

## ServiceResourceDescription
### Properties
* **id**: string (ReadOnly): Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string: The name of the resource
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (Required): This type describes properties of a service resource.
* **type**: string (ReadOnly): The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

## ServiceResourceProperties
### Properties
* **codePackages**: [ContainerCodePackageProperties](#containercodepackageproperties)[] (Required): Describes the set of code packages that forms the service. A code package describes the container and the properties for running it. All the code packages are started together on the same host and share the same context (network, process etc.).
* **description**: string: User readable description of the service.
* **diagnostics**: [DiagnosticsRef](#diagnosticsref): Reference to sinks in DiagnosticsDescription.
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' | string: The health state of a resource such as Application, Service, or Network.
* **networkRefs**: [NetworkRef](#networkref)[]: The names of the private networks that this service needs to be part of.
* **osType**: 'Linux' | 'Windows' | string (Required): The Operating system type required by the code in service.
* **replicaCount**: int: The number of replicas of the service to create. Defaults to 1 if not specified.
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Failed' | 'Unknown' | 'Upgrading' | string (ReadOnly): Represents the status of the service.

## Setting
### Properties
* **name**: string: The name of the setting.
* **value**: string: The value of the setting.

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

## VolumeResourceProperties
### Properties
* **azureFileParameters**: [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile): This type describes a volume provided by an Azure Files file share.
* **description**: string: User readable description of the volume.
* **provider**: 'SFAzureFile' | string (Required): Provider of the volume.
* **provisioningState**: string (ReadOnly): State of the resource.

