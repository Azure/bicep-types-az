# Microsoft.ServiceFabricMesh @ 2018-09-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/gateways@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [GatewayResourceProperties](#gatewayresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/networks@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkResourceProperties](#networkresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/secrets@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecretResourceProperties](#secretresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/secrets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [SecretValueResourceProperties](#secretvalueresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/secrets/values' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/volumes@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [VolumeResourceProperties](#volumeresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant)

## ApplicationResourceProperties
### Properties
* **debugParams**: string
* **description**: string
* **diagnostics**: [DiagnosticsDescription](#diagnosticsdescription)
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceNames**: string[] (ReadOnly)
* **services**: [ServiceResourceDescription](#serviceresourcedescription)[]
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **unhealthyEvaluation**: string (ReadOnly)

## DiagnosticsDescription
### Properties
* **defaultSinkRefs**: string[]
* **enabled**: bool
* **sinks**: [DiagnosticsSinkProperties](#diagnosticssinkproperties)[]

## DiagnosticsSinkProperties
* **Discriminator**: kind

### Base Properties
* **description**: string
* **name**: string
### AzureInternalMonitoringPipelineSinkDescription
#### Properties
* **accountName**: string
* **autoKeyConfigUrl**: string
* **fluentdConfigUrl**: any
* **kind**: 'AzureInternalMonitoringPipeline' (Required)
* **maConfigUrl**: string
* **namespace**: string


## AzureInternalMonitoringPipelineSinkDescription
### Properties
* **accountName**: string
* **autoKeyConfigUrl**: string
* **fluentdConfigUrl**: any
* **kind**: 'AzureInternalMonitoringPipeline' (Required)
* **maConfigUrl**: string
* **namespace**: string

## ServiceResourceDescription
### Properties
* **id**: string (ReadOnly)
* **name**: string
* **properties**: [ServiceResourceProperties](#serviceresourceproperties) (Required)
* **type**: string (ReadOnly)

## ServiceResourceProperties
### Properties
* **autoScalingPolicies**: [AutoScalingPolicy](#autoscalingpolicy)[]
* **codePackages**: [ContainerCodePackageProperties](#containercodepackageproperties)[] (Required)
* **description**: string
* **diagnostics**: [DiagnosticsRef](#diagnosticsref)
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly)
* **networkRefs**: [NetworkRef](#networkref)[]
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **replicaCount**: int
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **unhealthyEvaluation**: string (ReadOnly)

## AutoScalingPolicy
### Properties
* **mechanism**: [AutoScalingMechanism](#autoscalingmechanism) (Required)
* **name**: string (Required)
* **trigger**: [AutoScalingTrigger](#autoscalingtrigger) (Required)

## AutoScalingMechanism
* **Discriminator**: kind

### Base Properties
### AddRemoveReplicaScalingMechanism
#### Properties
* **kind**: 'AddRemoveReplica' (Required)
* **maxCount**: int (Required)
* **minCount**: int (Required)
* **scaleIncrement**: int (Required)


## AddRemoveReplicaScalingMechanism
### Properties
* **kind**: 'AddRemoveReplica' (Required)
* **maxCount**: int (Required)
* **minCount**: int (Required)
* **scaleIncrement**: int (Required)

## AutoScalingTrigger
* **Discriminator**: kind

### Base Properties
### AverageLoadScalingTrigger
#### Properties
* **kind**: 'AverageLoad' (Required)
* **lowerLoadThreshold**: int (Required)
* **metric**: [AutoScalingMetric](#autoscalingmetric) (Required)
* **scaleIntervalInSeconds**: int (Required)
* **upperLoadThreshold**: int (Required)


## AverageLoadScalingTrigger
### Properties
* **kind**: 'AverageLoad' (Required)
* **lowerLoadThreshold**: int (Required)
* **metric**: [AutoScalingMetric](#autoscalingmetric) (Required)
* **scaleIntervalInSeconds**: int (Required)
* **upperLoadThreshold**: int (Required)

## AutoScalingMetric
* **Discriminator**: kind

### Base Properties
### AutoScalingResourceMetric
#### Properties
* **kind**: 'Resource' (Required)
* **name**: 'cpu' | 'memoryInGB' (Required)


## AutoScalingResourceMetric
### Properties
* **kind**: 'Resource' (Required)
* **name**: 'cpu' | 'memoryInGB' (Required)

## ContainerCodePackageProperties
### Properties
* **commands**: string[]
* **diagnostics**: [DiagnosticsRef](#diagnosticsref)
* **endpoints**: [EndpointProperties](#endpointproperties)[]
* **entrypoint**: string
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **image**: string (Required)
* **imageRegistryCredential**: [ImageRegistryCredential](#imageregistrycredential)
* **instanceView**: [ContainerInstanceView](#containerinstanceview) (ReadOnly)
* **labels**: [ContainerLabel](#containerlabel)[]
* **name**: string (Required)
* **reliableCollectionsRefs**: [ReliableCollectionsRef](#reliablecollectionsref)[]
* **resources**: [ResourceRequirements](#resourcerequirements) (Required)
* **settings**: [Setting](#setting)[]
* **volumeRefs**: [VolumeReference](#volumereference)[]
* **volumes**: [ApplicationScopedVolume](#applicationscopedvolume)[]

## DiagnosticsRef
### Properties
* **enabled**: bool
* **sinkRefs**: string[]

## EndpointProperties
### Properties
* **name**: string (Required)
* **port**: int

## EnvironmentVariable
### Properties
* **name**: string
* **value**: string

## ImageRegistryCredential
### Properties
* **password**: string
* **server**: string (Required)
* **username**: string (Required)

## ContainerInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate)
* **events**: [ContainerEvent](#containerevent)[]
* **previousState**: [ContainerState](#containerstate)
* **restartCount**: int

## ContainerState
### Properties
* **detailStatus**: string
* **exitCode**: string
* **finishTime**: string
* **startTime**: string
* **state**: string

## ContainerEvent
### Properties
* **count**: int
* **firstTimestamp**: string
* **lastTimestamp**: string
* **message**: string
* **name**: string
* **type**: string

## ContainerLabel
### Properties
* **name**: string (Required)
* **value**: string (Required)

## ReliableCollectionsRef
### Properties
* **doNotPersistState**: bool
* **name**: string (Required)

## ResourceRequirements
### Properties
* **limits**: [ResourceLimits](#resourcelimits)
* **requests**: [ResourceRequests](#resourcerequests) (Required)

## ResourceLimits
### Properties
* **cpu**: int
* **memoryInGB**: int

## ResourceRequests
### Properties
* **cpu**: int (Required)
* **memoryInGB**: int (Required)

## Setting
### Properties
* **name**: string
* **value**: string

## VolumeReference
### Properties
* **destinationPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ApplicationScopedVolume
### Properties
* **creationParameters**: [ApplicationScopedVolumeCreationParameters](#applicationscopedvolumecreationparameters) (Required)
* **destinationPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ApplicationScopedVolumeCreationParameters
* **Discriminator**: kind

### Base Properties
* **description**: string
### ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk
#### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required)
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required)


## ApplicationScopedVolumeCreationParametersServiceFabricVolumeDisk
### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required)
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required)

## NetworkRef
### Properties
* **endpointRefs**: [EndpointRef](#endpointref)[]
* **name**: string

## EndpointRef
### Properties
* **name**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayResourceProperties
### Properties
* **description**: string
* **destinationNetwork**: [NetworkRef](#networkref) (Required)
* **http**: [HttpConfig](#httpconfig)[]
* **ipAddress**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **sourceNetwork**: [NetworkRef](#networkref) (Required)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **tcp**: [TcpConfig](#tcpconfig)[]

## HttpConfig
### Properties
* **hosts**: [HttpHostConfig](#httphostconfig)[] (Required)
* **name**: string (Required)
* **port**: int (Required)

## HttpHostConfig
### Properties
* **name**: string (Required)
* **routes**: [HttpRouteConfig](#httprouteconfig)[] (Required)

## HttpRouteConfig
### Properties
* **destination**: [GatewayDestination](#gatewaydestination) (Required)
* **match**: [HttpRouteMatchRule](#httproutematchrule) (Required)
* **name**: string (Required)

## GatewayDestination
### Properties
* **applicationName**: string (Required)
* **endpointName**: string (Required)
* **serviceName**: string (Required)

## HttpRouteMatchRule
### Properties
* **headers**: [HttpRouteMatchHeader](#httproutematchheader)[]
* **path**: [HttpRouteMatchPath](#httproutematchpath) (Required)

## HttpRouteMatchHeader
### Properties
* **name**: string (Required)
* **type**: 'exact'
* **value**: string

## HttpRouteMatchPath
### Properties
* **rewrite**: string
* **type**: 'prefix' (Required)
* **value**: string (Required)

## TcpConfig
### Properties
* **destination**: [GatewayDestination](#gatewaydestination) (Required)
* **name**: string (Required)
* **port**: int (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkResourceProperties
* **Discriminator**: kind

### Base Properties
* **description**: string
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
### LocalNetworkResourceProperties
#### Properties
* **kind**: 'Local' (Required)
* **networkAddressPrefix**: string


## LocalNetworkResourceProperties
### Properties
* **kind**: 'Local' (Required)
* **networkAddressPrefix**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretResourceProperties
* **Discriminator**: kind

### Base Properties
* **contentType**: string
* **description**: string
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
### InlinedValueSecretResourceProperties
#### Properties
* **kind**: 'inlinedValue' (Required)


## InlinedValueSecretResourceProperties
### Properties
* **kind**: 'inlinedValue' (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretValueResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **value**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeResourceProperties
### Properties
* **azureFileParameters**: [VolumeProviderParametersAzureFile](#volumeproviderparametersazurefile)
* **description**: string
* **provider**: 'SFAzureFile' (Required)
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string
* **accountName**: string (Required)
* **shareName**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

