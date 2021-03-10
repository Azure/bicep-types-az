# Microsoft.ContainerInstance @ 2019-12-01

## Resource Microsoft.ContainerInstance/containerGroups@2019-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2019-12-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ContainerGroupIdentity](#containergroupidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [schemas:17_properties](#schemas17properties) (Required)
* **tags**: [Dictionary<string,String>](#dictionarystringstring)
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [Dictionary<string,Schemas18UserAssignedIdentitiesValue>](#dictionarystringschemas18userassignedidentitiesvalue)

## Dictionary<string,Schemas18UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: [schemas:18_userAssignedIdentitiesValue](#schemas18userassignedidentitiesvalue)

## schemas:18_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## schemas:17_properties
### Properties
* **containers**: [Container](#container)[] (Required)
* **diagnostics**: [ContainerGroupDiagnostics](#containergroupdiagnostics)
* **dnsConfig**: [DnsConfiguration](#dnsconfiguration)
* **encryptionProperties**: [EncryptionProperties](#encryptionproperties)
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]
* **initContainers**: [InitContainerDefinition](#initcontainerdefinition)[]
* **instanceView**: [schemas:17_properties_instanceView](#schemas17propertiesinstanceview) (ReadOnly)
* **ipAddress**: [IpAddress](#ipaddress)
* **networkProfile**: [ContainerGroupNetworkProfile](#containergroupnetworkprofile)
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure'
* **sku**: 'Dedicated' | 'Standard'
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
* **instanceView**: [schemas:1_instanceView](#schemas1instanceview) (ReadOnly)
* **livenessProbe**: [ContainerProbe](#containerprobe)
* **ports**: [ContainerPort](#containerport)[]
* **readinessProbe**: [ContainerProbe](#containerprobe)
* **resources**: [ResourceRequirements](#resourcerequirements) (Required)
* **volumeMounts**: [VolumeMount](#volumemount)[]

## EnvironmentVariable
### Properties
* **name**: string (Required)
* **secureValue**: string
* **value**: string

## schemas:1_instanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly)
* **events**: [Event](#event)[] (ReadOnly)
* **previousState**: [ContainerState](#containerstate) (ReadOnly)
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
* **exec**: [ContainerExec](#containerexec)
* **failureThreshold**: int
* **httpGet**: [ContainerHttpGet](#containerhttpget)
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
* **limits**: [ResourceLimits](#resourcelimits)
* **requests**: [ResourceRequests](#resourcerequests) (Required)

## ResourceLimits
### Properties
* **cpu**: int
* **gpu**: [GpuResource](#gpuresource)
* **memoryInGB**: int

## GpuResource
### Properties
* **count**: int (Required)
* **sku**: 'K80' | 'P100' | 'V100' (Required)

## ResourceRequests
### Properties
* **cpu**: int (Required)
* **gpu**: [GpuResource](#gpuresource)
* **memoryInGB**: int (Required)

## VolumeMount
### Properties
* **mountPath**: string (Required)
* **name**: string (Required)
* **readOnly**: bool

## ContainerGroupDiagnostics
### Properties
* **logAnalytics**: [LogAnalytics](#loganalytics)

## LogAnalytics
### Properties
* **logType**: 'ContainerInsights' | 'ContainerInstanceLogs'
* **metadata**: [Dictionary<string,String>](#dictionarystringstring)
* **workspaceId**: string (Required)
* **workspaceKey**: string (Required)

## Dictionary<string,String>
### Properties
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
* **properties**: [InitContainerPropertiesDefinition](#initcontainerpropertiesdefinition) (Required)

## InitContainerPropertiesDefinition
### Properties
* **command**: string[]
* **environmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **image**: string
* **instanceView**: [schemas:44_instanceView](#schemas44instanceview) (ReadOnly)
* **volumeMounts**: [VolumeMount](#volumemount)[]

## schemas:44_instanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly)
* **events**: [Event](#event)[] (ReadOnly)
* **previousState**: [ContainerState](#containerstate) (ReadOnly)
* **restartCount**: int (ReadOnly)

## schemas:17_properties_instanceView
### Properties
* **events**: [Event](#event)[] (ReadOnly)
* **state**: string (ReadOnly)

## IpAddress
### Properties
* **dnsNameLabel**: string
* **fqdn**: string (ReadOnly)
* **ip**: string
* **ports**: [Port](#port)[] (Required)
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
* **azureFile**: [AzureFileVolume](#azurefilevolume)
* **emptyDir**: any
* **gitRepo**: [GitRepoVolume](#gitrepovolume)
* **name**: string (Required)
* **secret**: [Dictionary<string,String>](#dictionarystringstring)

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
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

