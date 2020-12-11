# Microsoft.ServiceFabricMesh @ 2018-07-01-preview

## Microsoft.ServiceFabricMesh/applications
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant)

## ApplicationResourceProperties
### Properties
* **debugParams**: string
* **description**: string
* **diagnostics**: DiagnosticsDescription
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning' (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **serviceNames**: string[] (ReadOnly)
* **services**: ServiceResourceDescription[]
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Ready' | 'Upgrading' (ReadOnly)
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
* **codePackages**: ContainerCodePackageProperties[] (Required)
* **description**: string
* **diagnostics**: DiagnosticsRef
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning'
* **networkRefs**: NetworkRef[]
* **osType**: 'Linux' | 'Windows' (Required)
* **replicaCount**: int
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Failed' | 'Unknown' | 'Upgrading' (ReadOnly)

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
* **resources**: ResourceRequirements (Required)
* **settings**: Setting[]
* **volumeRefs**: ContainerVolume[]

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

## ContainerVolume
### Properties
* **destinationPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## NetworkRef
### Properties
* **name**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ServiceFabricMesh/networks
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: NetworkResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant)

## NetworkResourceProperties
### Properties
* **addressPrefix**: string (Required)
* **description**: string
* **ingressConfig**: IngressConfig
* **provisioningState**: string (ReadOnly)

## IngressConfig
### Properties
* **layer4**: Layer4IngressConfig[]
* **publicIPAddress**: string (ReadOnly)
* **qosLevel**: 'Bronze'

## Layer4IngressConfig
### Properties
* **applicationName**: string
* **endpointName**: string
* **name**: string
* **publicPort**: int
* **serviceName**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.ServiceFabricMesh/volumes
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: VolumeResourceProperties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ServiceFabricMesh/volumes' (ReadOnly, DeployTimeConstant)

## VolumeResourceProperties
### Properties
* **azureFileParameters**: VolumeProviderParametersAzureFile
* **description**: string
* **provider**: string (Required)
* **provisioningState**: string (ReadOnly)

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string
* **accountName**: string (Required)
* **shareName**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

