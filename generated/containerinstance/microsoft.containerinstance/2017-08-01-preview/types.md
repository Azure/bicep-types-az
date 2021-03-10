# Microsoft.ContainerInstance @ 2017-08-01-preview

## Resource Microsoft.ContainerInstance/containerGroups@2017-08-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-08-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContainerGroupProperties](#containergroupproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupProperties
### Properties
* **containers**: [Container](#container)[] (Required)
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]
* **ipAddress**: [IpAddress](#ipaddress)
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'always'
* **state**: string (ReadOnly)
* **volumes**: [Volume](#volume)[]

## Container
### Properties
* **name**: string (Required)
* **properties**: [ContainerProperties](#containerproperties) (Required)

## ContainerProperties
### Properties
* **command**: string[]
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **image**: string (Required)
* **instanceView**: [ContainerPropertiesInstanceView](#containerpropertiesinstanceview) (ReadOnly)
* **ports**: [ContainerPort](#containerport)[]
* **resources**: [ResourceRequirements](#resourcerequirements) (Required)
* **volumeMounts**: [VolumeMount](#volumemount)[]

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **value**: string (Required)

## ContainerPropertiesInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate)
* **events**: [ContainerEvent](#containerevent)[]
* **previousState**: [ContainerState](#containerstate)
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
* **ports**: [Port](#port)[] (Required)
* **type**: 'Public' (Required)

## Port
### Properties
* **port**: int (Required)
* **protocol**: 'TCP' | 'UDP'

## Volume
### Properties
* **azureFile**: [AzureFileVolume](#azurefilevolume) (Required)
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

