# Microsoft.ContainerInstance @ 2018-10-01

## Resource Microsoft.ContainerInstance/containerGroups@2018-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ContainerGroupIdentity](#containergroupidentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ContainerGroupProperties](#containergroupproperties) (Required)
* **tags**: [ResourceTags](#resourcetags)
* **type**: 'Microsoft.ContainerInstance/containerGroups' (ReadOnly, DeployTimeConstant)

## ContainerGroupIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ContainerGroupIdentityUserAssignedIdentities](#containergroupidentityuserassignedidentities)

## ContainerGroupIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties](#components10wh5udschemascontainergroupidentitypropertiesuserassignedidentitiesadditionalproperties)

## Components10Wh5UdSchemasContainergroupidentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ContainerGroupProperties
### Properties
* **containers**: [Container](#container)[] (Required)
* **diagnostics**: [ContainerGroupDiagnostics](#containergroupdiagnostics)
* **dnsConfig**: [DnsConfiguration](#dnsconfiguration)
* **imageRegistryCredentials**: [ImageRegistryCredential](#imageregistrycredential)[]
* **instanceView**: [ContainerGroupPropertiesInstanceView](#containergrouppropertiesinstanceview) (ReadOnly)
* **ipAddress**: [IpAddress](#ipaddress)
* **networkProfile**: [ContainerGroupNetworkProfile](#containergroupnetworkprofile)
* **osType**: 'Linux' | 'Windows' (Required)
* **provisioningState**: string (ReadOnly)
* **restartPolicy**: 'Always' | 'Never' | 'OnFailure'
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

## ContainerPropertiesInstanceView
### Properties
* **currentState**: [ContainerState](#containerstate) (ReadOnly)
* **events**: [Event](#event)[] (ReadOnly)
* **previousState**: [ContainerState](#containerstate) (ReadOnly)
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
* **metadata**: [LogAnalyticsMetadata](#loganalyticsmetadata)
* **workspaceId**: string (Required)
* **workspaceKey**: string (Required)

## LogAnalyticsMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DnsConfiguration
### Properties
* **nameServers**: string[] (Required)
* **options**: string
* **searchDomains**: string

## ImageRegistryCredential
### Properties
* **password**: string
* **server**: string (Required)
* **username**: string (Required)

## ContainerGroupPropertiesInstanceView
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
* **secret**: [SecretVolume](#secretvolume)

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

## SecretVolume
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

