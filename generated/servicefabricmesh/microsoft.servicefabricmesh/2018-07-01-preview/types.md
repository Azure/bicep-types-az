# Microsoft.ServiceFabricMesh @ 2018-07-01-preview

## Resource Microsoft.ServiceFabricMesh/applications@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationResourceProperties](#applicationresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/applications' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/networks@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [NetworkResourceProperties](#networkresourceproperties) (Required)
* **tags**: [TrackedResourceTags](#trackedresourcetags)
* **type**: 'Microsoft.ServiceFabricMesh/networks' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.ServiceFabricMesh/volumes@2018-07-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-07-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string
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
* **status**: 'Creating' | 'Deleting' | 'Failed' | 'Invalid' | 'Ready' | 'Upgrading' (ReadOnly)
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
* **codePackages**: [ContainerCodePackageProperties](#containercodepackageproperties)[] (Required)
* **description**: string
* **diagnostics**: [DiagnosticsRef](#diagnosticsref)
* **healthState**: 'Error' | 'Invalid' | 'Ok' | 'Unknown' | 'Warning'
* **networkRefs**: [NetworkRef](#networkref)[]
* **osType**: 'Linux' | 'Windows' (Required)
* **replicaCount**: int
* **status**: 'Active' | 'Creating' | 'Deleting' | 'Failed' | 'Unknown' | 'Upgrading' (ReadOnly)

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
* **resources**: [ResourceRequirements](#resourcerequirements) (Required)
* **settings**: [Setting](#setting)[]
* **volumeRefs**: [ContainerVolume](#containervolume)[]

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

## ContainerVolume
### Properties
* **destinationPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## NetworkRef
### Properties
* **name**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NetworkResourceProperties
### Properties
* **addressPrefix**: string (Required)
* **description**: string
* **ingressConfig**: [IngressConfig](#ingressconfig)
* **provisioningState**: string (ReadOnly)

## IngressConfig
### Properties
* **layer4**: [Layer4IngressConfig](#layer4ingressconfig)[]
* **publicIPAddress**: string (ReadOnly)
* **qosLevel**: 'Bronze'

## Layer4IngressConfig
### Properties
* **applicationName**: string
* **endpointName**: string
* **name**: string
* **publicPort**: int
* **serviceName**: string

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

## VolumeProviderParametersAzureFile
### Properties
* **accountKey**: string
* **accountName**: string (Required)
* **shareName**: string (Required)

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

