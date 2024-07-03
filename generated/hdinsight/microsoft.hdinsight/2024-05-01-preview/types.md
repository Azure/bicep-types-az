# Microsoft.HDInsight @ 2024-05-01-preview

## Resource Microsoft.HDInsight/clusterpools@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterPoolResourceProperties](#clusterpoolresourceproperties): Gets or sets the properties. Define cluster pool specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HDInsight/clusterpools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HDInsight/clusterpools/clusters@2024-05-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Gets or sets the properties. Define cluster specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HDInsight/clusterpools/clusters' (ReadOnly, DeployTimeConstant): The resource type

## AksClusterProfileAksClusterAgentPoolIdentityProfile
### Properties
* **msiClientId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ClientId of the MSI.
* **msiObjectId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ObjectId of the MSI.
* **msiResourceId**: string (Required): ResourceId of the MSI.

## AuthorizationProfile
### Properties
* **groupIds**: string[]: AAD group Ids authorized for data plane access.
* **userIds**: string[]: AAD user Ids authorized for data plane access.

## AutoscaleProfile
### Properties
* **autoscaleType**: 'LoadBased' | 'ScheduleBased' | string: User to specify which type of Autoscale to be implemented - Scheduled Based or Load Based.
* **enabled**: bool (Required): This indicates whether auto scale is enabled on HDInsight on AKS cluster.
* **gracefulDecommissionTimeout**: int: This property is for graceful decommission timeout; It has a default setting of 3600 seconds before forced shutdown takes place. This is the maximal time to wait for running containers and applications to complete before transition a DECOMMISSIONING node into DECOMMISSIONED. The default value is 3600 seconds. Negative value (like -1) is handled as infinite timeout.
* **loadBasedConfig**: [LoadBasedConfig](#loadbasedconfig): Profiles of load based Autoscale.
* **scheduleBasedConfig**: [ScheduleBasedConfig](#schedulebasedconfig): Profiles of schedule based Autoscale.

## CatalogOptions
### Properties
* **hive**: [HiveCatalogOption](#hivecatalogoption)[]: hive catalog options.

## ClusterAccessProfile
### Properties
* **enableInternalIngress**: bool (Required): Whether to create cluster using private IP instead of public IP. This property must be set at create time.
* **privateLinkServiceId**: string (ReadOnly): Private link service resource ID. Only when enableInternalIngress is true, this property will be returned.

## ClusterComponentsItem
### Properties
* **name**: string
* **version**: string

## ClusterConfigFile
### Properties
* **content**: string: Free form content of the entire configuration file.
* **encoding**: 'Base64' | 'None' | string: This property indicates if the content is encoded and is case-insensitive. Please set the value to base64 if the content is base64 encoded. Set it to none or skip it if the content is plain text.
* **fileName**: string (Required): Configuration file name.
* **path**: string: Path of the config file if content is specified.
* **values**: [ClusterConfigFileValues](#clusterconfigfilevalues): List of key value pairs
where key represents a valid service configuration name and value represents the value of the config.

## ClusterConfigFileValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ClusterLogAnalyticsApplicationLogs
### Properties
* **stdErrorEnabled**: bool: True if stderror is enabled, otherwise false.
* **stdOutEnabled**: bool: True if stdout is enabled, otherwise false.

## ClusterLogAnalyticsProfile
### Properties
* **applicationLogs**: [ClusterLogAnalyticsApplicationLogs](#clusterloganalyticsapplicationlogs): Collection of logs to be enabled or disabled for log analytics.
* **enabled**: bool (Required): True if log analytics is enabled for the cluster, otherwise false.
* **metricsEnabled**: bool: True if metrics are enabled, otherwise false.

## ClusterPoolResourceProperties
### Properties
* **aksClusterProfile**: [ClusterPoolResourcePropertiesAksClusterProfile](#clusterpoolresourcepropertiesaksclusterprofile) (ReadOnly): Properties of underlying AKS cluster.
* **aksManagedResourceGroupName**: string (ReadOnly): A resource group created by AKS, to hold the infrastructure resources created by AKS on-behalf of customers. It is generated by cluster pool name and managed resource group name by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}
* **clusterPoolProfile**: [ClusterPoolResourcePropertiesClusterPoolProfile](#clusterpoolresourcepropertiesclusterpoolprofile): CLuster pool profile.
* **computeProfile**: [ClusterPoolResourcePropertiesComputeProfile](#clusterpoolresourcepropertiescomputeprofile) (Required): CLuster pool compute profile.
* **deploymentId**: string (ReadOnly): A unique id generated by the RP to identify the resource.
* **logAnalyticsProfile**: [ClusterPoolResourcePropertiesLogAnalyticsProfile](#clusterpoolresourcepropertiesloganalyticsprofile): Cluster pool log analytics profile to enable OMS agent for AKS cluster.
* **managedResourceGroupName**: string {minLength: 1, maxLength: 40}: A resource group created by RP, to hold the resources created by RP on-behalf of customers. It will also be used to generate aksManagedResourceGroupName by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}. Please make sure it meets resource group name restriction.
* **networkProfile**: [ClusterPoolResourcePropertiesNetworkProfile](#clusterpoolresourcepropertiesnetworkprofile): Cluster pool network profile.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: string (ReadOnly): Business status of the resource.

## ClusterPoolResourcePropertiesAksClusterProfile
### Properties
* **aksClusterAgentPoolIdentityProfile**: [AksClusterProfileAksClusterAgentPoolIdentityProfile](#aksclusterprofileaksclusteragentpoolidentityprofile): Identity properties of the AKS cluster agentpool MSI
* **aksClusterResourceId**: string: ARM Resource ID of the AKS cluster
* **aksVersion**: string (ReadOnly): AKS control plane and default node pool version of this ClusterPool

## ClusterPoolResourcePropertiesClusterPoolProfile
### Properties
* **clusterPoolVersion**: string {pattern: "^(0|[1-9][0-9]{0,18})\.(0|[1-9][0-9]{0,18})$"} (Required): Cluster pool version is a 2-part version.
* **publicIpTag**: [IpTag](#iptag): Gets or sets the IP tag for the public IPs created along with the HDInsightOnAks ClusterPools and Clusters.

## ClusterPoolResourcePropertiesComputeProfile
### Properties
* **availabilityZones**: string[]: The list of Availability zones to use for AKS VMSS nodes.
* **count**: int (ReadOnly): The number of virtual machines.
* **vmSize**: string {pattern: "^[a-zA-Z0-9_\-]{0,256}$"} (Required): The virtual machine SKU.

## ClusterPoolResourcePropertiesLogAnalyticsProfile
### Properties
* **enabled**: bool (Required): True if log analytics is enabled for cluster pool, otherwise false.
* **workspaceId**: string: Log analytics workspace to associate with the OMS agent.

## ClusterPoolResourcePropertiesNetworkProfile
### Properties
* **apiServerAuthorizedIpRanges**: string[]: IP ranges are specified in CIDR format, e.g. 137.117.106.88/29. This feature is not compatible with private AKS clusters. So you cannot set enablePrivateApiServer to true and apiServerAuthorizedIpRanges at the same time. Currently, this property is not supported and please don't use it.
* **enablePrivateApiServer**: bool: ClusterPool is based on AKS cluster. AKS cluster exposes the API server to public internet by default. If you set this property to true, a private AKS cluster will be created, and it will use private apiserver, which is not exposed to public internet.
* **outboundType**: 'loadBalancer' | 'userDefinedRouting' | string: This can only be set at cluster pool creation time and cannot be changed later.
* **subnetId**: string (Required): Cluster pool subnet resource id.

## ClusterProfile
### Properties
* **authorizationProfile**: [AuthorizationProfile](#authorizationprofile) (Required): Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
* **autoscaleProfile**: [AutoscaleProfile](#autoscaleprofile): This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
* **clusterAccessProfile**: [ClusterAccessProfile](#clusteraccessprofile): Cluster access profile.
* **clusterVersion**: string {pattern: "^(0|[1-9][0-9]{0,18})\.(0|[1-9][0-9]{0,18})\.(0|[1-9][0-9]{0,18})(?:\.(0|[1-9][0-9]{0,18}))?$"} (Required): Version with 3/4 part.
* **components**: [ClusterComponentsItem](#clustercomponentsitem)[] (ReadOnly): Component list of this cluster type and version.
* **connectivityProfile**: [ConnectivityProfile](#connectivityprofile) (ReadOnly): Cluster connectivity profile.
* **flinkProfile**: [FlinkProfile](#flinkprofile): The Flink cluster profile.
* **identityProfile**: [IdentityProfile](#identityprofile): This is deprecated. Please use managed identity profile instead.
* **kafkaProfile**: [KafkaProfile](#kafkaprofile): The Kafka cluster profile.
* **llapProfile**: [ClusterProfileLlapProfile](#clusterprofilellapprofile): LLAP cluster profile.
* **logAnalyticsProfile**: [ClusterLogAnalyticsProfile](#clusterloganalyticsprofile): Cluster log analytics profile to enable or disable OMS agent for cluster.
* **managedIdentityProfile**: [ManagedIdentityProfile](#managedidentityprofile): This property is required by Trino, Spark and Flink cluster but is optional for Kafka cluster.
* **ossVersion**: string {pattern: "^(0|[1-9][0-9]{0,18})\.(0|[1-9][0-9]{0,18})\.(0|[1-9][0-9]{0,18})$"} (Required): Version with three part.
* **prometheusProfile**: [ClusterPrometheusProfile](#clusterprometheusprofile): Cluster Prometheus profile.
* **rangerPluginProfile**: [ClusterRangerPluginProfile](#clusterrangerpluginprofile): Cluster Ranger plugin profile.
* **rangerProfile**: [RangerProfile](#rangerprofile): The ranger cluster profile.
* **scriptActionProfiles**: [ScriptActionProfile](#scriptactionprofile)[]: The script action profile list.
* **secretsProfile**: [SecretsProfile](#secretsprofile): The cluster secret profile.
* **serviceConfigsProfiles**: [ClusterServiceConfigsProfile](#clusterserviceconfigsprofile)[]: The service configs profiles.
* **sparkProfile**: [SparkProfile](#sparkprofile): The spark cluster profile.
* **sshProfile**: [SshProfile](#sshprofile): Ssh profile for the cluster.
* **stubProfile**: [ClusterProfileStubProfile](#clusterprofilestubprofile): Stub cluster profile.
* **trinoProfile**: [TrinoProfile](#trinoprofile): Trino Cluster profile.

## ClusterProfileLlapProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ClusterProfileStubProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ClusterPrometheusProfile
### Properties
* **enabled**: bool (Required): Enable Prometheus for cluster or not.

## ClusterRangerPluginProfile
### Properties
* **enabled**: bool (Required): Enable Ranger for cluster or not.

## ClusterResourceProperties
### Properties
* **clusterProfile**: [ClusterProfile](#clusterprofile) (Required): Cluster profile.
* **clusterType**: string {pattern: "^[a-zA-Z][a-zA-Z0-9]{0,31}$"} (Required): The type of cluster.
* **computeProfile**: [ComputeProfile](#computeprofile) (Required): The compute profile.
* **deploymentId**: string (ReadOnly): A unique id generated by the RP to identify the resource.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **status**: string (ReadOnly): Business status of the resource.

## ClusterServiceConfig
### Properties
* **component**: string (Required): Name of the component the config files should apply to.
* **files**: [ClusterConfigFile](#clusterconfigfile)[] (Required): List of Config Files.

## ClusterServiceConfigsProfile
### Properties
* **configs**: [ClusterServiceConfig](#clusterserviceconfig)[] (Required): List of service configs.
* **serviceName**: string (Required): Name of the service the configurations should apply to.

## ComparisonRule
### Properties
* **operator**: 'greaterThan' | 'greaterThanOrEqual' | 'lessThan' | 'lessThanOrEqual' | string (Required): The comparison operator.
* **threshold**: int (Required): Threshold setting.

## ComputeProfile
### Properties
* **availabilityZones**: string[]: The list of Availability zones to use for AKS VMSS nodes.
* **nodes**: [NodeProfile](#nodeprofile)[] (Required): The nodes definitions.

## ComputeResourceDefinition
### Properties
* **cpu**: int (Required): The required CPU.
* **memory**: int (Required): The required memory in MB, Container memory will be 110 percentile

## ConnectivityProfile
### Properties
* **ssh**: [SshConnectivityEndpoint](#sshconnectivityendpoint)[]: List of SSH connectivity endpoints.
* **web**: [ConnectivityProfileWeb](#connectivityprofileweb) (Required): Web connectivity endpoint details.

## ConnectivityProfileWeb
### Properties
* **fqdn**: string (Required): Web connectivity endpoint.
* **privateFqdn**: string: Private web connectivity endpoint. This property will only be returned when enableInternalIngress is true.

## DiskStorageProfile
### Properties
* **dataDiskSize**: int (Required): Managed Disk size in GB. The maximum supported disk size for Standard and Premium HDD/SSD is 32TB, except for Premium SSD v2, which supports up to 64TB.
* **dataDiskType**: 'Premium_SSD_LRS' | 'Premium_SSD_ZRS' | 'Premium_SSD_v2_LRS' | 'Standard_HDD_LRS' | 'Standard_SSD_LRS' | 'Standard_SSD_ZRS' | string (Required): Managed Disk Type.

## FlinkCatalogOptions
### Properties
* **hive**: [FlinkHiveCatalogOption](#flinkhivecatalogoption): Hive Catalog Option for Flink cluster.

## FlinkHiveCatalogOption
### Properties
* **metastoreDbConnectionAuthenticationMode**: 'IdentityAuth' | 'SqlAuth' | string: The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
* **metastoreDbConnectionPasswordSecret**: string: Secret reference name from secretsProfile.secrets containing password for database connection.
* **metastoreDbConnectionURL**: string (Required): Connection string for hive metastore database.
* **metastoreDbConnectionUserName**: string: User name for database connection.

## FlinkJobProfile
### Properties
* **args**: string: A string property representing additional JVM arguments for the Flink job. It should be space separated value.
* **entryClass**: string: A string property that specifies the entry class for the Flink job. If not specified, the entry point is auto-detected from the flink job jar package.
* **jarName**: string (Required): A string property that represents the name of the job JAR.
* **jobJarDirectory**: string (Required): A string property that specifies the directory where the job JAR is located.
* **savePointName**: string: A string property that represents the name of the savepoint for the Flink job
* **upgradeMode**: 'LAST_STATE_UPDATE' | 'STATELESS_UPDATE' | 'UPDATE' | string (Required): A string property that indicates the upgrade mode to be performed on the Flink job. It can have one of the following enum values => STATELESS_UPDATE, UPDATE, LAST_STATE_UPDATE.

## FlinkProfile
### Properties
* **catalogOptions**: [FlinkCatalogOptions](#flinkcatalogoptions): Flink cluster catalog options.
* **deploymentMode**: 'Application' | 'Session' | string: A string property that indicates the deployment mode of Flink cluster. It can have one of the following enum values => Application, Session. Default value is Session
* **historyServer**: [ComputeResourceDefinition](#computeresourcedefinition): History Server container/ process CPU and memory requirements
* **jobManager**: [ComputeResourceDefinition](#computeresourcedefinition) (Required): Job Manager container/ process CPU and memory requirements
* **jobSpec**: [FlinkJobProfile](#flinkjobprofile): Job specifications for flink clusters in application deployment mode. The specification is immutable even if job properties are changed by calling the RunJob API, please use the ListJob API to get the latest job information.
* **numReplicas**: int: The number of task managers.
* **storage**: [FlinkStorageProfile](#flinkstorageprofile) (Required): The storage profile
* **taskManager**: [ComputeResourceDefinition](#computeresourcedefinition) (Required): Task Manager container/ process CPU and memory requirements

## FlinkStorageProfile
### Properties
* **storagekey**: string {sensitive}: Storage key is only required for wasb(s) storage.
* **storageUri**: string {pattern: "^(\w{4,5})://(.*)@(.*).\b(blob|dfs)\b.*$"} (Required): Storage account uri which is used for savepoint and checkpoint state.

## HiveCatalogOption
### Properties
* **catalogName**: string {minLength: 1} (Required): Name of trino catalog which should use specified hive metastore.
* **metastoreDbConnectionAuthenticationMode**: 'IdentityAuth' | 'SqlAuth' | string: The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
* **metastoreDbConnectionPasswordSecret**: string: Secret reference name from secretsProfile.secrets containing password for database connection.
* **metastoreDbConnectionURL**: string (Required): Connection string for hive metastore database.
* **metastoreDbConnectionUserName**: string: User name for database connection.
* **metastoreWarehouseDir**: string (Required): Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri

## IdentityProfile
### Properties
* **msiClientId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ClientId of the MSI.
* **msiObjectId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ObjectId of the MSI.
* **msiResourceId**: string (Required): ResourceId of the MSI.

## IpTag
### Properties
* **ipTagType**: string (Required): Gets or sets the ipTag type: Example FirstPartyUsage.
* **tag**: string (Required): Gets or sets value of the IpTag associated with the public IP. Example HDInsight, SQL, Storage etc

## KafkaConnectivityEndpoints
### Properties
* **bootstrapServerEndpoint**: string: bootstrap server connectivity endpoint.
* **brokerEndpoints**: string[]: Kafka broker endpoint list.

## KafkaProfile
### Properties
* **connectivityEndpoints**: [KafkaConnectivityEndpoints](#kafkaconnectivityendpoints) (ReadOnly): Kafka bootstrap server and brokers related connectivity endpoints.
* **diskStorage**: [DiskStorageProfile](#diskstorageprofile) (Required): Kafka disk storage profile.
* **enableKRaft**: bool: Expose Kafka cluster in KRaft mode.
* **enablePublicEndpoints**: bool: Expose worker nodes as public endpoints.
* **remoteStorageUri**: string {pattern: "^(https?|abfss?):\/\/[^/]+(?:\/|$)"}: Fully qualified path of Azure Storage container used for Tiered Storage.

## LoadBasedConfig
### Properties
* **cooldownPeriod**: int: This is a cool down period, this is a time period in seconds, which determines the amount of time that must elapse between a scaling activity started by a rule and the start of the next scaling activity, regardless of the rule that triggers it. The default value is 300 seconds.
* **maxNodes**: int (Required): User needs to set the maximum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
* **minNodes**: int (Required): User needs to set the minimum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
* **pollInterval**: int: User can specify the poll interval, this is the time period (in seconds) after which scaling metrics are polled for triggering a scaling operation.
* **scalingRules**: [ScalingRule](#scalingrule)[] (Required): The scaling rules.

## ManagedIdentityProfile
### Properties
* **identityList**: [ManagedIdentitySpec](#managedidentityspec)[] (Required): The list of managed identity.

## ManagedIdentitySpec
### Properties
* **clientId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ClientId of the managed identity.
* **objectId**: string {pattern: "^[{(]?[0-9A-Fa-f]{8}[-]?(?:[0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?$"} (Required): ObjectId of the managed identity.
* **resourceId**: string (Required): ResourceId of the managed identity.
* **type**: 'cluster' | 'internal' | 'user' | string (Required): The type of managed identity.

## NodeProfile
### Properties
* **count**: int {minValue: 0} (Required): The number of virtual machines.
* **type**: string {pattern: "^(head|Head|HEAD|worker|Worker|WORKER)$"} (Required): The node type.
* **vmSize**: string {pattern: "^[a-zA-Z0-9_\-]{0,256}$"} (Required): The virtual machine SKU.

## RangerAdminSpec
### Properties
* **admins**: string[] (Required): List of usernames that should be marked as ranger admins. These usernames should match the user principal name (UPN) of the respective AAD users.
* **database**: [RangerAdminSpecDatabase](#rangeradminspecdatabase) (Required)

## RangerAdminSpecDatabase
### Properties
* **host**: string (Required): The database URL
* **name**: string (Required): The database name
* **passwordSecretRef**: string: Reference for the database password
* **username**: string: The name of the database user

## RangerAuditSpec
### Properties
* **storageAccount**: string {minLength: 1, pattern: "^(https)|(abfss)://.*$"}: Azure storage location of the blobs. MSI should have read/write access to this Storage account.

## RangerProfile
### Properties
* **rangerAdmin**: [RangerAdminSpec](#rangeradminspec) (Required): Specification for the Ranger Admin service.
* **rangerAudit**: [RangerAuditSpec](#rangerauditspec): Properties required to describe audit log storage.
* **rangerUsersync**: [RangerUsersyncSpec](#rangerusersyncspec) (Required): Specification for the Ranger Usersync service

## RangerUsersyncSpec
### Properties
* **enabled**: bool: Denotes whether usersync service should be enabled
* **groups**: string[]: List of groups that should be synced. These group names should match the object id of the respective AAD groups.
* **mode**: 'automatic' | 'static' | string: User & groups can be synced automatically or via a static list that's refreshed.
* **userMappingLocation**: string {minLength: 1, pattern: "^(https)|(abfss)://.*$"}: Azure storage location of a mapping file that lists user & group associations.
* **users**: string[]: List of user names that should be synced. These usernames should match the User principal name of the respective AAD users.

## ScalingRule
### Properties
* **actionType**: 'scaledown' | 'scaleup' | string (Required): The action type.
* **comparisonRule**: [ComparisonRule](#comparisonrule) (Required): The comparison rule.
* **evaluationCount**: int (Required): This is an evaluation count for a scaling condition, the number of times a trigger condition should be successful, before scaling activity is triggered.
* **scalingMetric**: string (Required): Metrics name for individual workloads. For example: cpu

## Schedule
### Properties
* **count**: int (Required): User has to set the node count anticipated at end of the scaling operation of the set current schedule configuration, format is integer.
* **days**: ('Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string)[] (Required): User has to set the days where schedule has to be set for autoscale operation.
* **endTime**: string {pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"} (Required): User has to set the end time of current schedule configuration, format like 10:30 (HH:MM).
* **startTime**: string {pattern: "^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$"} (Required): User has to set the start time of current schedule configuration, format like 10:30 (HH:MM).

## ScheduleBasedConfig
### Properties
* **defaultCount**: int (Required): Setting default node count of current schedule configuration. Default node count specifies the number of nodes which are default when an specified scaling operation is executed (scale up/scale down)
* **schedules**: [Schedule](#schedule)[] (Required): This specifies the schedules where scheduled based Autoscale to be enabled, the user has a choice to set multiple rules within the schedule across days and times (start/end).
* **timeZone**: string (Required): User has to specify the timezone on which the schedule has to be set for schedule based autoscale configuration.

## ScriptActionProfile
### Properties
* **name**: string (Required): Script name.
* **parameters**: string: Additional parameters for the script action. It should be space-separated list of arguments required for script execution.
* **services**: string[] (Required): List of services to apply the script action.
* **shouldPersist**: bool: Specify if the script should persist on the cluster.
* **timeoutInMinutes**: int: Timeout duration for the script action in minutes.
* **type**: string (Required): Type of the script action. Supported type is bash scripts.
* **url**: string {pattern: "^(https)|(http)://.*$"} (Required): Url of the script file.

## SecretReference
### Properties
* **keyVaultObjectName**: string {pattern: "^[a-zA-Z][a-zA-Z0-9-]{1,126}$"} (Required): Object identifier name of the secret in key vault.
* **referenceName**: string (Required): Reference name of the secret to be used in service configs.
* **type**: 'Certificate' | 'Key' | 'Secret' | string (Required): Type of key vault object: secret, key or certificate.
* **version**: string: Version of the secret in key vault.

## SecretsProfile
### Properties
* **keyVaultResourceId**: string (Required): Name of the user Key Vault where all the cluster specific user secrets are stored.
* **secrets**: [SecretReference](#secretreference)[]: Properties of Key Vault secret.

## SparkMetastoreSpec
### Properties
* **dbConnectionAuthenticationMode**: 'IdentityAuth' | 'SqlAuth' | string: The authentication mode to connect to your Hive metastore database. More details: https://learn.microsoft.com/en-us/azure/azure-sql/database/logins-create-manage?view=azuresql#authentication-and-authorization
* **dbName**: string (Required): The database name.
* **dbPasswordSecretName**: string: The secret name which contains the database user password.
* **dbServerHost**: string (Required): The database server host.
* **dbUserName**: string: The database user name.
* **keyVaultId**: string: The key vault resource id.
* **thriftUrl**: string: The thrift url.

## SparkProfile
### Properties
* **defaultStorageUrl**: string: The default storage URL.
* **metastoreSpec**: [SparkMetastoreSpec](#sparkmetastorespec): The metastore specification for Spark cluster.
* **userPluginsSpec**: [SparkUserPlugins](#sparkuserplugins): Spark user plugins spec

## SparkUserPlugin
### Properties
* **path**: string {minLength: 1, pattern: "^(https)|(abfss)://.*$"} (Required): Fully qualified path to the folder containing the plugins.

## SparkUserPlugins
### Properties
* **plugins**: [SparkUserPlugin](#sparkuserplugin)[]: Spark user plugins.

## SshConnectivityEndpoint
### Properties
* **endpoint**: string (Required): SSH connectivity endpoint.
* **privateSshEndpoint**: string: Private SSH connectivity endpoint. This property will only be returned when enableInternalIngress is true.

## SshProfile
### Properties
* **count**: int {minValue: 0, maxValue: 5} (Required): Number of ssh pods per cluster.
* **podPrefix**: string (ReadOnly): Prefix of the pod names. Pod number will be appended to the prefix. The ingress URLs for the pods will be available at <clusterFqdn>/<sshBasePath>/<prefix>-<number>
* **vmSize**: string {pattern: "^[a-zA-Z0-9_\-]{0,256}$"}: The virtual machine SKU.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrinoCoordinator
### Properties
* **debug**: [TrinoDebugConfig](#trinodebugconfig): Trino debug configuration.
* **highAvailabilityEnabled**: bool: The flag that if enable coordinator HA, uses multiple coordinator replicas with auto failover, one per each head node. Default: true.

## TrinoDebugConfig
### Properties
* **enable**: bool: The flag that if enable debug or not.
* **port**: int: The debug port.
* **suspend**: bool: The flag that if suspend debug or not.

## TrinoProfile
### Properties
* **catalogOptions**: [CatalogOptions](#catalogoptions): Trino cluster catalog options.
* **coordinator**: [TrinoCoordinator](#trinocoordinator): Trino Coordinator.
* **userPluginsSpec**: [TrinoUserPlugins](#trinouserplugins): Trino user plugins spec
* **userTelemetrySpec**: [TrinoUserTelemetry](#trinousertelemetry): User telemetry
* **worker**: [TrinoWorker](#trinoworker): Trino worker.

## TrinoTelemetryConfig
### Properties
* **hivecatalogName**: string {minLength: 1}: Hive Catalog name used to mount external tables on the logs written by trino, if not specified there tables are not created.
* **hivecatalogSchema**: string: Schema of the above catalog to use, to mount query logs as external tables, if not specified tables will be mounted under schema trinologs.
* **partitionRetentionInDays**: int: Retention period for query log table partitions, this doesn't have any affect on actual data.
* **path**: string {minLength: 1}: Azure storage location of the blobs.

## TrinoUserPlugin
### Properties
* **enabled**: bool: Denotes whether the plugin is active or not.
* **name**: string {minLength: 1}: This field maps to the sub-directory in trino plugins location, that will contain all the plugins under path.
* **path**: string {minLength: 1, pattern: "^(https)|(abfss)://.*$"}: Fully qualified path to the folder containing the plugins.

## TrinoUserPlugins
### Properties
* **plugins**: [TrinoUserPlugin](#trinouserplugin)[]: Trino user plugins.

## TrinoUserTelemetry
### Properties
* **storage**: [TrinoTelemetryConfig](#trinotelemetryconfig): Trino user telemetry definition.

## TrinoWorker
### Properties
* **debug**: [TrinoDebugConfig](#trinodebugconfig): Trino debug configuration.

