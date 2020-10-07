# Microsoft.ContainerInstance @ 2017-10-01-preview

## Microsoft.ContainerInstance/containerGroups
### Properties
* **apiVersion**: '2017-10-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:11_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## schemas:11_properties
### Properties
* **containers**: Container[] (Required)
* **imageRegistryCredentials**: ImageRegistryCredential[]
* **instanceView**: schemas:11_properties_instanceView (ReadOnly)
* **ipAddress**: IpAddress
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure'
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
* **instanceView**: schemas:1_instanceView (ReadOnly)
* **ports**: ContainerPort[]
* **resources**: ResourceRequirements (Required)
* **volumeMounts**: VolumeMount[]

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **value**: string (Required)

## schemas:1_instanceView
### Properties
* **currentState**: ContainerState (ReadOnly)
* **events**: Event[] (ReadOnly)
* **previousState**: ContainerState (ReadOnly)
* **restartCount**: int (ReadOnly)

## ContainerState
### Properties
* **detailStatus**: string
* **exitCode**: int
* **finishTime**: string
* **startTime**: string
* **state**: string

## Event
### Properties
* **count**: int
* **firstTimestamp**: string
* **lastTimestamp**: string
* **message**: string
* **name**: string
* **type**: string

## ContainerPort
### Properties
* **port**: int (Required)
* **protocol**: 'TCP' | 'UDP'

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

## schemas:11_properties_instanceView
### Properties
* **events**: Event[] (ReadOnly)
* **state**: string (ReadOnly)

## IpAddress
### Properties
* **ip**: string
* **ports**: Port[] (Required)
* **type**: string (Required)

## Port
### Properties
* **port**: int (Required)
* **protocol**: 'TCP' | 'UDP'

## Volume
### Properties
* **azureFile**: AzureFileVolume
* **emptyDir**: any
* **name**: string (Required)

## AzureFileVolume
### Properties
* **readOnly**: bool
* **shareName**: string (Required)
* **storageAccountKey**: string
* **storageAccountName**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

