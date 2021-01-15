# Microsoft.ServiceFabricMesh @ 2018-09-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/gateways@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: GatewayResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/gateways' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/networks@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/secrets@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/secrets' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: SecretValueResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/secrets/values' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/volumes@2018-09-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-09-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant)

## Function list_value (Microsoft.ServiceFabricMesh/secrets/values@2018-09-01-preview)
* **Resource**: Microsoft.ServiceFabricMesh/secrets/values
* **ApiVersion**: 2018-09-01-preview
* **Output**: SecretValue

## ApplicationResourceProperties
### Properties
* **debugParams**: string
* **description**: string
* **diagnostics**: DiagnosticsDescription
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceNames**: string[] (ReadOnly)
* **services**: ServiceResourceDescription[]
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **unhealthyEvaluation**: string (ReadOnly)

## DiagnosticsDescription
### Properties
* **defaultSinkRefs**: string[]
* **enabled**: bool
* **sinks**: DiagnosticsSinkProperties[]

## DiagnosticsSinkProperties
* **Discriminator**: kind
### Base Properties
* **description**: string
* **name**: string
### AzureInternalMonitoringPipeline
#### Properties
* **accountName**: string
* **autoKeyConfigUrl**: string
* **fluentdConfigUrl**: any
* **kind**: 'AzureInternalMonitoringPipeline' (Required)
* **maConfigUrl**: string
* **namespace**: string


## AzureInternalMonitoringPipeline
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
* **properties**: ServiceResourceProperties (Required)
* **type**: string (ReadOnly)

## ServiceResourceProperties
### Properties
* **autoScalingPolicies**: AutoScalingPolicy[]
* **codePackages**: ContainerCodePackageProperties[] (Required)
* **description**: string
* **diagnostics**: DiagnosticsRef
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly)
* **networkRefs**: NetworkRef[]
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **replicaCount**: int
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **unhealthyEvaluation**: string (ReadOnly)

## AutoScalingPolicy
### Properties
* **mechanism**: AutoScalingMechanism (Required)
* **name**: string (Required)
* **trigger**: AutoScalingTrigger (Required)

## AutoScalingMechanism
* **Discriminator**: kind
### Base Properties
### AddRemoveReplica
#### Properties
* **kind**: 'AddRemoveReplica' (Required)
* **maxCount**: int (Required)
* **minCount**: int (Required)
* **scaleIncrement**: int (Required)


## AddRemoveReplica
### Properties
* **kind**: 'AddRemoveReplica' (Required)
* **maxCount**: int (Required)
* **minCount**: int (Required)
* **scaleIncrement**: int (Required)

## AutoScalingTrigger
* **Discriminator**: kind
### Base Properties
### AverageLoad
#### Properties
* **kind**: 'AverageLoad' (Required)
* **lowerLoadThreshold**: int (Required)
* **metric**: AutoScalingMetric (Required)
* **scaleIntervalInSeconds**: int (Required)
* **upperLoadThreshold**: int (Required)


## AverageLoad
### Properties
* **kind**: 'AverageLoad' (Required)
* **lowerLoadThreshold**: int (Required)
* **metric**: AutoScalingMetric (Required)
* **scaleIntervalInSeconds**: int (Required)
* **upperLoadThreshold**: int (Required)

## AutoScalingMetric
* **Discriminator**: kind
### Base Properties
### Resource
#### Properties
* **kind**: 'Resource' (Required)
* **name**: 'cpu' | 'memoryInGB' (Required)


## Resource
### Properties
* **kind**: 'Resource' (Required)
* **name**: 'cpu' | 'memoryInGB' (Required)

## ContainerCodePackageProperties
### Properties
* **commands**: string[]
* **diagnostics**: DiagnosticsRef
* **endpoints**: EndpointProperties[]
* **entrypoint**: string
* **environmentVariables**: EnvironmentVariable[]
* **image**: string (Required)
* **imageRegistryCredential**: ImageRegistryCredential
* **instanceView**: ContainerInstanceView (ReadOnly)
* **labels**: ContainerLabel[]
* **name**: string (Required)
* **reliableCollectionsRefs**: ReliableCollectionsRef[]
* **resources**: ResourceRequirements (Required)
* **settings**: Setting[]
* **volumeRefs**: VolumeReference[]
* **volumes**: ApplicationScopedVolume[]

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
* **currentState**: ContainerState
* **events**: ContainerEvent[]
* **previousState**: ContainerState
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
* **limits**: ResourceLimits
* **requests**: ResourceRequests (Required)

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
* **creationParameters**: ApplicationScopedVolumeCreationParameters (Required)
* **destinationPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ApplicationScopedVolumeCreationParameters
* **Discriminator**: kind
### Base Properties
* **description**: string
### ServiceFabricVolumeDisk
#### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required)
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required)


## ServiceFabricVolumeDisk
### Properties
* **kind**: 'ServiceFabricVolumeDisk' (Required)
* **sizeDisk**: 'Large' | 'Medium' | 'Small' (Required)

## NetworkRef
### Properties
* **endpointRefs**: EndpointRef[]
* **name**: string

## EndpointRef
### Properties
* **name**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## GatewayResourceProperties
### Properties
* **description**: string
* **destinationNetwork**: NetworkRef (Required)
* **http**: HttpConfig[]
* **ipAddress**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **sourceNetwork**: NetworkRef (Required)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)
* **tcp**: TcpConfig[]

## HttpConfig
### Properties
* **hosts**: HttpHostConfig[] (Required)
* **name**: string (Required)
* **port**: int (Required)

## HttpHostConfig
### Properties
* **name**: string (Required)
* **routes**: HttpRouteConfig[] (Required)

## HttpRouteConfig
### Properties
* **destination**: GatewayDestination (Required)
* **match**: HttpRouteMatchRule (Required)
* **name**: string (Required)

## GatewayDestination
### Properties
* **applicationName**: string (Required)
* **endpointName**: string (Required)
* **serviceName**: string (Required)

## HttpRouteMatchRule
### Properties
* **headers**: HttpRouteMatchHeader[]
* **path**: HttpRouteMatchPath (Required)

## HttpRouteMatchHeader
### Properties
* **name**: string (Required)
* **type**: 'exact'
* **value**: string

## HttpRouteMatchPath
### Properties
* **rewrite**: string
* **type**: string (Required)
* **value**: string (Required)

## TcpConfig
### Properties
* **destination**: GatewayDestination (Required)
* **name**: string (Required)
* **port**: int (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkResourceProperties
### Properties
* **description**: string
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretResourceProperties
### Properties
* **contentType**: string
* **description**: string
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretValueResourceProperties
### Properties
* **provisioningState**: string (ReadOnly)
* **value**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VolumeResourceProperties
### Properties
* **azureFileParameters**: VolumeProviderParametersAzureFile
* **description**: string
* **provider**: string (Required)
* **provisioningState**: string (ReadOnly)
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Ready' | 'Unknown' | 'Upgrading' (ReadOnly)
* **statusDetails**: string (ReadOnly)

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string
* **accountName**: string (Required)
* **shareName**: string (Required)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SecretValue
### Properties
* **value**: string (ReadOnly)

