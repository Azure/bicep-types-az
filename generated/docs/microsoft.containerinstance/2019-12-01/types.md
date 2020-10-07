# Microsoft.ContainerInstance @ 2019-12-01

## Microsoft.ContainerInstance/containerGroups
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ContainerGroupIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: schemas:17_properties (Required)
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas18UserAssignedIdentitiesValue>

## Dictionary<string,Schemas18UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:18_userAssignedIdentitiesValue

## schemas:18_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:17_properties
### Properties
* **containers**: Container[] (Required)
* **diagnostics**: ContainerGroupDiagnostics
* **dnsConfig**: DnsConfiguration
* **encryptionProperties**: EncryptionProperties
* **imageRegistryCredentials**: ImageRegistryCredential[]
* **initContainers**: InitContainerDefinition[]
* **instanceView**: schemas:17_properties_instanceView (ReadOnly)
* **ipAddress**: IpAddress
* **networkProfile**: ContainerGroupNetworkProfile
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure'
* **sku**: 'Dedicated' | 'Standard'
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
* **livenessProbe**: ContainerProbe
* **ports**: ContainerPort[]
* **readinessProbe**: ContainerProbe
* **resources**: ResourceRequirements (Required)
* **volumeMounts**: VolumeMount[]

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **secureValue**: string
* **value**: string

## schemas:1_instanceView
### Properties
* **currentState**: ContainerState (ReadOnly)
* **events**: Event[] (ReadOnly)
* **previousState**: ContainerState (ReadOnly)
* **restartCount**: int (ReadOnly)

## ContainerState
### Properties
* **detailStatus**: string (ReadOnly)
* **exitCode**: int (ReadOnly)
* **finishTime**: string (ReadOnly)
* **startTime**: string (ReadOnly)
* **state**: string (ReadOnly)

## Event
### Properties
* **count**: int (ReadOnly)
* **firstTimestamp**: string (ReadOnly)
* **lastTimestamp**: string (ReadOnly)
* **message**: string (ReadOnly)
* **name**: string (ReadOnly)
* **type**: string (ReadOnly)

## ContainerProbe
### Properties
* **exec**: ContainerExec
* **failureThreshold**: int
* **httpGet**: ContainerHttpGet
* **initialDelaySeconds**: int
* **periodSeconds**: int
* **successThreshold**: int
* **timeoutSeconds**: int

## ContainerExec
### Properties
* **command**: string[]

## ContainerHttpGet
### Properties
* **path**: string
* **port**: int (Required)
* **scheme**: 'http' | 'https'

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
* **gpu**: GpuResource
* **memoryInGB**: int

## GpuResource
### Properties
* **count**: int (Required)
* **sku**: 'K80' | 'P100' | 'V100' (Required)

## ResourceRequests
### Properties
* **cpu**: int (Required)
* **gpu**: GpuResource
* **memoryInGB**: int (Required)

## VolumeMount
### Properties
* **mountPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ContainerGroupDiagnostics
### Properties
* **logAnalytics**: LogAnalytics

## LogAnalytics
### Properties
* **logType**: 'ContainerInsights' | 'ContainerInstanceLogs'
* **metadata**: Dictionary<string,String>
* **workspaceId**: string (Required)
* **workspaceKey**: string (Required)

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## DnsConfiguration
### Properties
* **nameServers**: string[] (Required)
* **options**: string
* **searchDomains**: string

## EncryptionProperties
### Properties
* **keyName**: string (Required)
* **keyVersion**: string (Required)
* **vaultBaseUrl**: string (Required)

## ImageRegistryCredential
### Properties
* **password**: string
* **server**: string (Required)
* **username**: string (Required)

## InitContainerDefinition
### Properties
* **name**: string (Required)
* **properties**: InitContainerPropertiesDefinition (Required)

## InitContainerPropertiesDefinition
### Properties
* **command**: string[]
* **environmentVariables**: EnvironmentVariable[]
* **image**: string
* **instanceView**: schemas:44_instanceView (ReadOnly)
* **volumeMounts**: VolumeMount[]

## schemas:44_instanceView
### Properties
* **currentState**: ContainerState (ReadOnly)
* **events**: Event[] (ReadOnly)
* **previousState**: ContainerState (ReadOnly)
* **restartCount**: int (ReadOnly)

## schemas:17_properties_instanceView
### Properties
* **events**: Event[] (ReadOnly)
* **state**: string (ReadOnly)

## IpAddress
### Properties
* **dnsNameLabel**: string
* **fqdn**: string (ReadOnly)
* **ip**: string
* **ports**: Port[] (Required)
* **type**: 'Private' | 'Public' (Required)

## Port
### Properties
* **port**: int (Required)
* **protocol**: 'TCP' | 'UDP'

## ContainerGroupNetworkProfile
### Properties
* **id**: string (Required)

## Volume
### Properties
* **azureFile**: AzureFileVolume
* **emptyDir**: any
* **gitRepo**: GitRepoVolume
* **name**: string (Required)
* **secret**: Dictionary<string,String>

## AzureFileVolume
### Properties
* **readOnly**: bool
* **shareName**: string (Required)
* **storageAccountKey**: string
* **storageAccountName**: string (Required)

## GitRepoVolume
### Properties
* **directory**: string
* **repository**: string (Required)
* **revision**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Additional Properties
* **Additional Properties Type**: string

