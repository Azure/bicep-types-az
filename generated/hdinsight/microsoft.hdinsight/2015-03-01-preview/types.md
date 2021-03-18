# Microsoft.HDInsight @ 2015-03-01-preview

## Resource Microsoft.HDInsight/clusters@2015-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string (ReadOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **identity**: [ClusterIdentity](#clusteridentity)
* **location**: string
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ClusterCreateProperties](#clustercreateproperties)
* **tags**: [ClusterCreateParametersExtendedTags](#clustercreateparametersextendedtags)
* **type**: 'Microsoft.HDInsight/clusters' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.HDInsight/clusters/applications@2015-03-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-03-01-preview' (ReadOnly, DeployTimeConstant)
* **etag**: string
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [ApplicationProperties](#applicationproperties)
* **tags**: [ApplicationTags](#applicationtags)
* **type**: 'Microsoft.HDInsight/clusters/applications' (ReadOnly, DeployTimeConstant)

## ClusterIdentity
### Properties
* **principalId**: string (ReadOnly)
* **tenantId**: string (ReadOnly)
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned, UserAssigned' | 'UserAssigned'
* **userAssignedIdentities**: [ClusterIdentityUserAssignedIdentities](#clusteridentityuserassignedidentities)

## ClusterIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties](#componentsc51ht8schemasclusteridentitypropertiesuserassignedidentitiesadditionalproperties)

## ComponentsC51Ht8SchemasClusteridentityPropertiesUserassignedidentitiesAdditionalproperties
### Properties
* **clientId**: string (ReadOnly)
* **principalId**: string (ReadOnly)

## ClusterCreateProperties
### Properties
* **clusterDefinition**: [ClusterDefinition](#clusterdefinition)
* **clusterId**: string (ReadOnly)
* **clusterState**: string (ReadOnly)
* **clusterVersion**: string
* **computeProfile**: [ComputeProfile](#computeprofile)
* **connectivityEndpoints**: [ConnectivityEndpoint](#connectivityendpoint)[] (ReadOnly)
* **createdDate**: string (ReadOnly)
* **diskEncryptionProperties**: [DiskEncryptionProperties](#diskencryptionproperties)
* **encryptionInTransitProperties**: [EncryptionInTransitProperties](#encryptionintransitproperties)
* **errors**: [Errors](#errors)[] (ReadOnly)
* **kafkaRestProperties**: [KafkaRestProperties](#kafkarestproperties)
* **minSupportedTlsVersion**: string
* **networkProperties**: [NetworkProperties](#networkproperties)
* **osType**: 'Linux' | 'Windows'
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' (ReadOnly)
* **quotaInfo**: [QuotaInfo](#quotainfo) (ReadOnly)
* **securityProfile**: [SecurityProfile](#securityprofile)
* **storageProfile**: [StorageProfile](#storageprofile) (WriteOnly)
* **tier**: 'Premium' | 'Standard'

## ClusterDefinition
### Properties
* **blueprint**: string
* **componentVersion**: [ClusterDefinitionComponentVersion](#clusterdefinitioncomponentversion)
* **configurations**: any
* **kind**: string

## ClusterDefinitionComponentVersion
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComputeProfile
### Properties
* **roles**: [Role](#role)[]

## Role
### Properties
* **autoscale**: [Autoscale](#autoscale)
* **dataDisksGroups**: [DataDisksGroups](#datadisksgroups)[]
* **hardwareProfile**: [HardwareProfile](#hardwareprofile)
* **minInstanceCount**: int
* **name**: string
* **osProfile**: [OsProfile](#osprofile)
* **scriptActions**: [ScriptAction](#scriptaction)[]
* **targetInstanceCount**: int
* **virtualNetworkProfile**: [VirtualNetworkProfile](#virtualnetworkprofile)

## Autoscale
### Properties
* **capacity**: [AutoscaleCapacity](#autoscalecapacity)
* **recurrence**: [AutoscaleRecurrence](#autoscalerecurrence)

## AutoscaleCapacity
### Properties
* **maxInstanceCount**: int
* **minInstanceCount**: int

## AutoscaleRecurrence
### Properties
* **schedule**: [AutoscaleSchedule](#autoscaleschedule)[]
* **timeZone**: string

## AutoscaleSchedule
### Properties
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]
* **timeAndCapacity**: [AutoscaleTimeAndCapacity](#autoscaletimeandcapacity)

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
* **linuxOperatingSystemProfile**: [LinuxOperatingSystemProfile](#linuxoperatingsystemprofile)

## LinuxOperatingSystemProfile
### Properties
* **password**: string
* **sshProfile**: [SshProfile](#sshprofile)
* **username**: string

## SshProfile
### Properties
* **publicKeys**: [SshPublicKey](#sshpublickey)[]

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

## KafkaRestProperties
### Properties
* **clientGroupInfo**: [ClientGroupInfo](#clientgroupinfo)

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
* **storageaccounts**: [StorageAccount](#storageaccount)[] (WriteOnly)

## StorageAccount
### Properties
* **container**: string (WriteOnly)
* **fileSystem**: string (WriteOnly)
* **isDefault**: bool (WriteOnly)
* **key**: string (WriteOnly)
* **msiResourceId**: string (WriteOnly)
* **name**: string (WriteOnly)
* **resourceId**: string (WriteOnly)

## ClusterCreateParametersExtendedTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationProperties
### Properties
* **applicationState**: string (ReadOnly)
* **applicationType**: string
* **computeProfile**: [ComputeProfile](#computeprofile)
* **createdDate**: string (ReadOnly)
* **errors**: [Errors](#errors)[]
* **httpsEndpoints**: [ApplicationGetHttpsEndpoint](#applicationgethttpsendpoint)[]
* **installScriptActions**: [RuntimeScriptAction](#runtimescriptaction)[]
* **marketplaceIdentifier**: string (ReadOnly)
* **provisioningState**: string (ReadOnly)
* **sshEndpoints**: [ApplicationGetEndpoint](#applicationgetendpoint)[]
* **uninstallScriptActions**: [RuntimeScriptAction](#runtimescriptaction)[]

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

## ApplicationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

