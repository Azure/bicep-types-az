# Microsoft.HDInsight @ 2018-06-01-preview

## Resource Microsoft.HDInsight/clusters@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: ClusterIdentity
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: ClusterCreateProperties
* **tags**: ClusterCreateParametersExtendedTags
* **type**: 'Microsoft.HDInsight/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HDInsight/clusters/applications@2018-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2018-06-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: ApplicationProperties
* **tags**: ApplicationTags
* **type**: 'Microsoft.HDInsight/clusters/applications' (ReadOnly, DeployTimeConstant)

## ClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: ClusterIdentityUserAssignedIdentities

## ClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties

## ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)
* **tenantId**: string

## ClusterCreateProperties
### Properties
* **clusterDefinition**: ClusterDefinition
* **clusterHdpVersion**: string (ReadOnly)
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
* **excludedServicesConfig**: ExcludedServicesConfig (ReadOnly)
* **kafkaRestProperties**: KafkaRestProperties
* **minSupportedTlsVersion**: string
* **networkProperties**: NetworkProperties
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **quotaInfo**: QuotaInfo (ReadOnly)
* **securityProfile**: SecurityProfile
* **storageProfile**: StorageProfile
* **tier**: 'Premium' | 'Standard'

## ClusterDefinition
### Properties
* **blueprint**: string
* **componentVersion**: ClusterDefinitionComponentVersion
* **configurations**: any
* **kind**: string

## ClusterDefinitionComponentVersion
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
* **encryptDataDisks**: bool
* **hardwareProfile**: HardwareProfile
* **minInstanceCount**: int
* **name**: string
* **osProfile**: OsProfile
* **scriptActions**: ScriptAction[]
* **targetInstanceCount**: int
* **virtualNetworkProfile**: VirtualNetworkProfile
* **VMGroupName**: string

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
* **privateIPAddress**: string (ReadOnly)
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

## Errors
### Properties
* **code**: string (ReadOnly)
* **message**: string (ReadOnly)

## ExcludedServicesConfig
### Properties
* **excludedServicesConfigId**: string (ReadOnly)
* **excludedServicesList**: string (ReadOnly)

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
* **storageaccounts**: StorageAccount[]

## StorageAccount
### Properties
* **container**: string
* **fileshare**: string
* **fileSystem**: string
* **isDefault**: bool
* **key**: string
* **msiResourceId**: string
* **name**: string
* **resourceId**: string
* **saskey**: string

## ClusterCreateParametersExtendedTags
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
* **privateIPAddress**: string
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
* **privateIPAddress**: string
* **publicPort**: int

## ApplicationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

