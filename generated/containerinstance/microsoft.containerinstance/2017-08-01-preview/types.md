# Microsoft.ContainerInstance @ 2017-08-01-preview

## Resource Microsoft.ContainerInstance/containerGroups@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ContainerGroupProperties (Required)
* **tags**: ResourceTags
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupProperties
### Properties
* **containers**: Container[] (Required)
* **imageRegistryCredentials**: ImageRegistryCredential[]
* **ipAddress**: IpAddress
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'always'
* **state**: string (ReadOnly)
* **volumes**: Volume[]

## Container
### Properties
* **name**: string (Required)
* **properties**: ContainerProperties (Required)

## ContainerProperties
### Properties
* **command**: string[]
* **environmentVariables**: EnvironmentVariable[]
* **image**: string (Required)
* **instanceView**: ContainerPropertiesInstanceView (ReadOnly)
* **ports**: ContainerPort[]
* **resources**: ResourceRequirements (Required)
* **volumeMounts**: VolumeMount[]

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **value**: string (Required)

## ContainerPropertiesInstanceView
### Properties
* **currentState**: ContainerState
* **events**: ContainerEvent[]
* **previousState**: ContainerState
* **restartCount**: int

## ContainerState
### Properties
* **detailStatus**: string
* **exitCode**: int
* **finishTime**: string
* **startTime**: string
* **state**: string

## ContainerEvent
### Properties
* **count**: int
* **firstTimestamp**: string
* **lastTimestamp**: string
* **message**: string
* **type**: string

## ContainerPort
### Properties
* **port**: int (Required)

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

## VolumeMount
### Properties
* **mountPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ImageRegistryCredential
### Properties
* **password**: string
* **server**: string (Required)
* **username**: string (Required)

## IpAddress
### Properties
* **ip**: string
* **ports**: Port[] (Required)
* **type**: 'Public' (Required)

## Port
### Properties
* **port**: int (Required)
* **protocol**: 'TCP' | 'UDP'

## Volume
### Properties
* **azureFile**: AzureFileVolume (Required)
* **name**: string (Required)

## AzureFileVolume
### Properties
* **readOnly**: bool
* **shareName**: string (Required)
* **storageAccountKey**: string
* **storageAccountName**: string (Required)

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

