# Microsoft.HDInsight @ 2018-06-01-preview

## Resource Microsoft.HDInsight/clusters@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ClusterIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterCreateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HDInsight/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HDInsight/clusters/applications@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HDInsight/clusters/applications' (ReadOnly, DeployTimeConstant)

## ClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned, UserAssigned' | 'SystemAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas37UserAssignedIdentitiesValue>

## Dictionary<string,Schemas37UserAssignedIdentitiesValue>
### Properties
### Additional Properties
* **Additional Properties Type**: schemas:37_userAssignedIdentitiesValue

## schemas:37_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterCreateProperties
### Properties
* **clusterDefinition**: ClusterDefinition
* **clusterId**: string (ReadOnly)
* **clusterState**: string (ReadOnly)
* **clusterVersion**: string
* **computeIsolationProperties**: ComputeIsolationProperties
* **computeProfile**: ComputeProfile
* **connectivityEndpoints**: ConnectivityEndpoint[] (ReadOnly)
* **createdDate**: string (ReadOnly)
* **diskEncryptionProperties**: DiskEncryptionProperties
* **encryptionInTransitProperties**: EncryptionInTransitProperties
* **errors**: Errors[] (ReadOnly)
* **kafkaRestProperties**: KafkaRestProperties
* **minSupportedTlsVersion**: string
* **networkProperties**: NetworkProperties
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **quotaInfo**: QuotaInfo (ReadOnly)
* **securityProfile**: SecurityProfile
* **storageProfile**: StorageProfile (WriteOnly)
* **tier**: 'Premium' | 'Standard'

## ClusterDefinition
### Properties
* **blueprint**: string
* **componentVersion**: Dictionary<string,String>
* **configurations**: any
* **kind**: string

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComputeIsolationProperties
### Properties
* **enableComputeIsolation**: bool
* **hostSku**: string

## ComputeProfile
### Properties
* **roles**: Role[]

## Role
### Properties
* **autoscale**: Autoscale
* **dataDisksGroups**: DataDisksGroups[]
* **hardwareProfile**: HardwareProfile
* **minInstanceCount**: int
* **name**: string
* **osProfile**: OsProfile
* **scriptActions**: ScriptAction[]
* **targetInstanceCount**: int
* **virtualNetworkProfile**: VirtualNetworkProfile

## Autoscale
### Properties
* **capacity**: AutoscaleCapacity
* **recurrence**: AutoscaleRecurrence

## AutoscaleCapacity
### Properties
* **maxInstanceCount**: int
* **minInstanceCount**: int

## AutoscaleRecurrence
### Properties
* **schedule**: AutoscaleSchedule[]
* **timeZone**: string

## AutoscaleSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **timeAndCapacity**: AutoscaleTimeAndCapacity

## AutoscaleTimeAndCapacity
### Properties
* **maxInstanceCount**: int
* **minInstanceCount**: int
* **time**: string

## DataDisksGroups
### Properties
* **diskSizeGB**: int (ReadOnly)
* **disksPerNode**: int
* **storageAccountType**: string (ReadOnly)

## HardwareProfile
### Properties
* **vmSize**: string

## OsProfile
### Properties
* **linuxOperatingSystemProfile**: LinuxOperatingSystemProfile

## LinuxOperatingSystemProfile
### Properties
* **password**: string
* **sshProfile**: SshProfile
* **username**: string

## SshProfile
### Properties
* **publicKeys**: SshPublicKey[]

## SshPublicKey
### Properties
* **certificateData**: string

## ScriptAction
### Properties
* **name**: string (Required)
* **parameters**: string (Required)
* **uri**: string (Required)

## VirtualNetworkProfile
### Properties
* **id**: string
* **subnet**: string

## ConnectivityEndpoint
### Properties
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **port**: int (ReadOnly)
* **protocol**: string (ReadOnly)

## DiskEncryptionProperties
### Properties
* **encryptionAlgorithm**: 'RSA-OAEP-256' | 'RSA-OAEP' | 'RSA1_5'
* **encryptionAtHost**: bool
* **keyName**: string
* **keyVersion**: string
* **msiResourceId**: string
* **vaultUri**: string

## EncryptionInTransitProperties
### Properties
* **isEncryptionInTransitEnabled**: bool

## Errors
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## KafkaRestProperties
### Properties
* **clientGroupInfo**: ClientGroupInfo

## ClientGroupInfo
### Properties
* **groupId**: string
* **groupName**: string

## NetworkProperties
### Properties
* **privateLink**: 'Disabled' | 'Enabled'
* **resourceProviderConnection**: 'Inbound' | 'Outbound'

## QuotaInfo
### Properties
* **coresUsed**: int (ReadOnly)

## SecurityProfile
### Properties
* **aaddsResourceId**: string
* **clusterUsersGroupDNs**: string[]
* **directoryType**: 'ActiveDirectory'
* **domain**: string
* **domainUsername**: string
* **domainUserPassword**: string
* **ldapsUrls**: string[]
* **msiResourceId**: string
* **organizationalUnitDN**: string

## StorageProfile
### Properties
* **storageaccounts**: StorageAccount[] (WriteOnly)

## StorageAccount
### Properties
* **container**: string (WriteOnly)
* **fileSystem**: string (WriteOnly)
* **isDefault**: bool (WriteOnly)
* **key**: string (WriteOnly)
* **msiResourceId**: string (WriteOnly)
* **name**: string (WriteOnly)
* **resourceId**: string (WriteOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **applicationState**: string (ReadOnly)
* **applicationType**: string
* **computeProfile**: ComputeProfile
* **createdDate**: string (ReadOnly)
* **errors**: Errors[]
* **httpsEndpoints**: ApplicationGetHttpsEndpoint[]
* **installScriptActions**: RuntimeScriptAction[]
* **marketplaceIdentifier**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **sshEndpoints**: ApplicationGetEndpoint[]
* **uninstallScriptActions**: RuntimeScriptAction[]

## ApplicationGetHttpsEndpoint
### Properties
* **accessModes**: string[]
* **destinationPort**: int
* **disableGatewayAuth**: bool
* **location**: string
* **publicPort**: int
* **subDomainSuffix**: string

## RuntimeScriptAction
### Properties
* **applicationName**: string (ReadOnly)
* **name**: string (Required)
* **parameters**: string
* **roles**: string[] (Required)
* **uri**: string (Required)

## ApplicationGetEndpoint
### Properties
* **destinationPort**: int
* **location**: string
* **publicPort**: int

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

