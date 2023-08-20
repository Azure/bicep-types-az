# Microsoft.HDInsight @ 2023-06-01-preview

## Resource Microsoft.HDInsight/clusterpools@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterPoolResourceProperties](#clusterpoolresourceproperties): Gets or sets the properties. Define cluster pool specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HDInsight/clusterpools' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.HDInsight/clusterpools/clusters@2023-06-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterResourceProperties](#clusterresourceproperties): Gets or sets the properties. Define cluster specific properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.HDInsight/clusterpools/clusters' (ReadOnly, DeployTimeConstant): The resource type

## AksClusterProfileAksClusterAgentPoolIdentityProfile
### Properties
* **msiClientId**: string (Required): ClientId of the MSI.
* **msiObjectId**: string (Required): ObjectId of the MSI.
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
* **managedResourceGroupName**: string: A resource group created by RP, to hold the resources created by RP on-behalf of customers. It will also be used to generate aksManagedResourceGroupName by pattern: MC_{managedResourceGroupName}_{clusterPoolName}_{region}. Please make sure it meets resource group name restriction.
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
* **clusterPoolVersion**: string (Required): Cluster pool version is a 2-part version.

## ClusterPoolResourcePropertiesComputeProfile
### Properties
* **count**: int (ReadOnly): The number of virtual machines.
* **vmSize**: string (Required): The virtual machine SKU.

## ClusterPoolResourcePropertiesLogAnalyticsProfile
### Properties
* **enabled**: bool (Required): True if log analytics is enabled for cluster pool, otherwise false.
* **workspaceId**: string: Log analytics workspace to associate with the OMS agent.

## ClusterPoolResourcePropertiesNetworkProfile
### Properties
* **subnetId**: string (Required): Cluster pool subnet resource id.

## ClusterProfile
### Properties
* **authorizationProfile**: [AuthorizationProfile](#authorizationprofile) (Required): Authorization profile with details of AAD user Ids and group Ids authorized for data plane access.
* **autoscaleProfile**: [AutoscaleProfile](#autoscaleprofile): This is the Autoscale profile for the cluster. This will allow customer to create cluster enabled with Autoscale.
* **clusterVersion**: string (Required): Version with 3/4 part.
* **components**: [ClusterComponentsItem](#clustercomponentsitem)[] (ReadOnly): Component list of this cluster type and version.
* **connectivityProfile**: [ConnectivityProfile](#connectivityprofile) (ReadOnly): Cluster connectivity profile.
* **flinkProfile**: [FlinkProfile](#flinkprofile): The Flink cluster profile.
* **identityProfile**: [IdentityProfile](#identityprofile) (Required): Identity Profile with details of an MSI.
* **kafkaProfile**: [ClusterProfileKafkaProfile](#clusterprofilekafkaprofile): Kafka cluster profile.
* **llapProfile**: [ClusterProfileLlapProfile](#clusterprofilellapprofile): LLAP cluster profile.
* **logAnalyticsProfile**: [ClusterLogAnalyticsProfile](#clusterloganalyticsprofile): Cluster log analytics profile to enable or disable OMS agent for cluster.
* **ossVersion**: string (Required): Version with three part.
* **prometheusProfile**: [ClusterPrometheusProfile](#clusterprometheusprofile): Cluster Prometheus profile.
* **scriptActionProfiles**: [ScriptActionProfile](#scriptactionprofile)[]: The script action profile list.
* **secretsProfile**: [SecretsProfile](#secretsprofile): The cluster secret profile.
* **serviceConfigsProfiles**: [ClusterServiceConfigsProfile](#clusterserviceconfigsprofile)[]: The service configs profiles.
* **sparkProfile**: [SparkProfile](#sparkprofile): The spark cluster profile.
* **sshProfile**: [SshProfile](#sshprofile): Ssh profile for the cluster.
* **stubProfile**: [ClusterProfileStubProfile](#clusterprofilestubprofile): Stub cluster profile.
* **trinoProfile**: [TrinoProfile](#trinoprofile): Trino Cluster profile.

## ClusterProfileKafkaProfile
### Properties
### Additional Properties
* **Additional Properties Type**: any

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

## ClusterResourceProperties
### Properties
* **clusterProfile**: [ClusterProfile](#clusterprofile) (Required): Cluster profile.
* **clusterType**: string (Required): The type of cluster.
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

## FlinkCatalogOptions
### Properties
* **hive**: [FlinkHiveCatalogOption](#flinkhivecatalogoption): Hive Catalog Option for Flink cluster.

## FlinkHiveCatalogOption
### Properties
* **metastoreDbConnectionPasswordSecret**: string (Required): Secret reference name from secretsProfile.secrets containing password for database connection.
* **metastoreDbConnectionURL**: string (Required): Connection string for hive metastore database.
* **metastoreDbConnectionUserName**: string (Required): User name for database connection.

## FlinkProfile
### Properties
* **catalogOptions**: [FlinkCatalogOptions](#flinkcatalogoptions): Flink cluster catalog options.
* **historyServer**: [ComputeResourceDefinition](#computeresourcedefinition): History Server container/ process CPU and memory requirements
* **jobManager**: [ComputeResourceDefinition](#computeresourcedefinition) (Required): Job Manager container/ process CPU and memory requirements
* **numReplicas**: int: The number of task managers.
* **storage**: [FlinkStorageProfile](#flinkstorageprofile) (Required): The storage profile
* **taskManager**: [ComputeResourceDefinition](#computeresourcedefinition) (Required): Task Manager container/ process CPU and memory requirements

## FlinkStorageProfile
### Properties
* **storagekey**: string: Storage key is only required for wasb(s) storage.
* **storageUri**: string (Required): Storage account uri which is used for savepoint and checkpoint state.

## HiveCatalogOption
### Properties
* **catalogName**: string (Required): Name of trino catalog which should use specified hive metastore.
* **metastoreDbConnectionPasswordSecret**: string (Required): Secret reference name from secretsProfile.secrets containing password for database connection.
* **metastoreDbConnectionURL**: string (Required): Connection string for hive metastore database.
* **metastoreDbConnectionUserName**: string (Required): User name for database connection.
* **metastoreWarehouseDir**: string (Required): Metastore root directory URI, format: abfs[s]://<container>@<account_name>.dfs.core.windows.net/<path>. More details: https://docs.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction-abfs-uri

## IdentityProfile
### Properties
* **msiClientId**: string (Required): ClientId of the MSI.
* **msiObjectId**: string (Required): ObjectId of the MSI.
* **msiResourceId**: string (Required): ResourceId of the MSI.

## LoadBasedConfig
### Properties
* **cooldownPeriod**: int: This is a cool down period, this is a time period in seconds, which determines the amount of time that must elapse between a scaling activity started by a rule and the start of the next scaling activity, regardless of the rule that triggers it. The default value is 300 seconds.
* **maxNodes**: int (Required): User needs to set the maximum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
* **minNodes**: int (Required): User needs to set the minimum number of nodes for load based scaling, the load based scaling will use this to scale up and scale down between minimum and maximum number of nodes.
* **pollInterval**: int: User can specify the poll interval, this is the time period (in seconds) after which scaling metrics are polled for triggering a scaling operation.
* **scalingRules**: [ScalingRule](#scalingrule)[] (Required): The scaling rules.

## NodeProfile
### Properties
* **count**: int (Required): The number of virtual machines.
* **type**: string (Required): The node type.
* **vmSize**: string (Required): The virtual machine SKU.

## ScalingRule
### Properties
* **actionType**: 'scaledown' | 'scaleup' | string (Required): The action type.
* **comparisonRule**: [ComparisonRule](#comparisonrule) (Required): The comparison rule.
* **evaluationCount**: int (Required): This is an evaluation count for a scaling condition, the number of times a trigger condition should be successful, before scaling activity is triggered.
* **scalingMetric**: string (Required): Metrics name for individual workloads. For example: cpu

## Schedule
### Properties
* **count**: int (Required): User has to set the node count anticipated at end of the scaling operation of the set current schedule configuration, format is integer.
* **days**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[] (Required): User has to set the days where schedule has to be set for autoscale operation.
* **endTime**: string (Required): User has to set the end time of current schedule configuration, format like 10:30 (HH:MM).
* **startTime**: string (Required): User has to set the start time of current schedule configuration, format like 10:30 (HH:MM).

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
* **url**: string (Required): Url of the script file.

## SecretReference
### Properties
* **keyVaultObjectName**: string (Required): Object identifier name of the secret in key vault.
* **referenceName**: string (Required): Reference name of the secret to be used in service configs.
* **type**: 'Certificate' | 'Key' | 'Secret' | string (Required): Type of key vault object: secret, key or certificate.
* **version**: string: Version of the secret in key vault.

## SecretsProfile
### Properties
* **keyVaultResourceId**: string (Required): Name of the user Key Vault where all the cluster specific user secrets are stored.
* **secrets**: [SecretReference](#secretreference)[]: Properties of Key Vault secret.

## SparkMetastoreSpec
### Properties
* **dbName**: string (Required): The database name.
* **dbPasswordSecretName**: string (Required): The secret name which contains the database user password.
* **dbServerHost**: string (Required): The database server host.
* **dbUserName**: string (Required): The database user name.
* **keyVaultId**: string (Required): The key vault resource id.
* **thriftUrl**: string: The thrift url.

## SparkProfile
### Properties
* **defaultStorageUrl**: string: The default storage URL.
* **metastoreSpec**: [SparkMetastoreSpec](#sparkmetastorespec): The metastore specification for Spark cluster.
* **userPluginsSpec**: [SparkUserPlugins](#sparkuserplugins): Spark user plugins spec

## SparkUserPlugin
### Properties
* **path**: string (Required): Fully qualified path to the folder containing the plugins.

## SparkUserPlugins
### Properties
* **plugins**: [SparkUserPlugin](#sparkuserplugin)[]: Spark user plugins.

## SshConnectivityEndpoint
### Properties
* **endpoint**: string (Required): SSH connectivity endpoint.

## SshProfile
### Properties
* **count**: int (Required): Number of ssh pods per cluster.
* **podPrefix**: string (ReadOnly): Prefix of the pod names. Pod number will be appended to the prefix. The ingress URLs for the pods will be available at <clusterFqdn>/<sshBasePath>/<prefix>-<number>

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
* **hivecatalogName**: string: Hive Catalog name used to mount external tables on the logs written by trino, if not specified there tables are not created.
* **hivecatalogSchema**: string: Schema of the above catalog to use, to mount query logs as external tables, if not specified tables will be mounted under schema trinologs.
* **partitionRetentionInDays**: int: Retention period for query log table partitions, this doesn't have any affect on actual data.
* **path**: string: Azure storage location of the blobs.

## TrinoUserPlugin
### Properties
* **enabled**: bool: Denotes whether the plugin is active or not.
* **name**: string: This field maps to the sub-directory in trino plugins location, that will contain all the plugins under path.
* **path**: string: Fully qualified path to the folder containing the plugins.

## TrinoUserPlugins
### Properties
* **plugins**: [TrinoUserPlugin](#trinouserplugin)[]: Trino user plugins.

## TrinoUserTelemetry
### Properties
* **storage**: [TrinoTelemetryConfig](#trinotelemetryconfig): Trino user telemetry definition.

## TrinoWorker
### Properties
* **debug**: [TrinoDebugConfig](#trinodebugconfig): Trino debug configuration.

