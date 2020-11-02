# Microsoft.HDInsight @ 2015-03-01-preview

## Microsoft.HDInsight/clusters/applications
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HDInsight/clusters/applications' (ReadOnly, DeployTimeConstant)

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

## Errors
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

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
### Additional Properties
* **Additional Properties Type**: string

## Microsoft.HDInsight/clusters/extensions
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **clusterMonitoringEnabled**: bool (ReadOnly)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **primaryKey**: string (WriteOnly)
* **type**: 'Microsoft.HDInsight/clusters/extensions' (ReadOnly, DeployTimeConstant)
* **workspaceId**: string

## Microsoft.HDInsight/clusters/extensions
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **primaryKey**: string
* **type**: 'Microsoft.HDInsight/clusters/extensions' (ReadOnly, DeployTimeConstant)
* **workspaceId**: string

## Microsoft.HDInsight/clusters
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ClusterIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterCreateProperties
* **tags**: Dictionary<string,String>
* **type**: 'Microsoft.HDInsight/clusters' (ReadOnly, DeployTimeConstant)

## ClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: Dictionary<string,Schemas36UserAssignedIdentitiesValue>

## Dictionary<string,Schemas36UserAssignedIdentitiesValue>
### Additional Properties
* **Additional Properties Type**: schemas:36_userAssignedIdentitiesValue

## schemas:36_userAssignedIdentitiesValue
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterCreateProperties
### Properties
* **clusterDefinition**: ClusterDefinition
* **clusterId**: string (ReadOnly)
* **clusterState**: string (ReadOnly)
* **clusterVersion**: string
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
### Additional Properties
* **Additional Properties Type**: string

## ConnectivityEndpoint
### Properties
* **location**: string (ReadOnly)
* **name**: string (ReadOnly)
* **port**: int (ReadOnly)
* **protocol**: string (ReadOnly)

## DiskEncryptionProperties
### Properties
* **encryptionAlgorithm**: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'
* **encryptionAtHost**: bool
* **keyName**: string
* **keyVersion**: string
* **msiResourceId**: string
* **vaultUri**: string

## EncryptionInTransitProperties
### Properties
* **isEncryptionInTransitEnabled**: bool

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
* **domainUserPassword**: string
* **domainUsername**: string
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
### Additional Properties
* **Additional Properties Type**: string

