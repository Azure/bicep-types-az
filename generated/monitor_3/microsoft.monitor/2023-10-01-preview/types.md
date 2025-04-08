# Microsoft.Monitor @ 2023-10-01-preview

## Resource Microsoft.Monitor/accounts@2023-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorWorkspaceProperties](#azuremonitorworkspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/pipelineGroups@2023-10-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The extended location for given pipeline group.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,10}[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PipelineGroupProperties](#pipelinegroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/pipelineGroups' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorWorkspaceLogsApiConfig
### Properties
* **dataCollectionEndpointUrl**: string {pattern: "^(https?)://[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"} (Required): Data collection endpoint ingestion url.
* **dataCollectionRule**: string {pattern: "^(?!-)[a-zA-Z0-9.-]{1,1000}[^-]$"} (Required): Data Collection Rule (DCR) immutable id.
* **schema**: [SchemaMap](#schemamap) (Required): The schema mapping for incoming data.
* **stream**: string {pattern: "^(?!-)[a-zA-Z0-9._-]{1,1000}[^-]$"} (Required): Stream name in destination. Azure Monitor stream is related to the destination table.

## AzureMonitorWorkspaceLogsExporter
### Properties
* **api**: [AzureMonitorWorkspaceLogsApiConfig](#azuremonitorworkspacelogsapiconfig) (Required): API configurations for Azure Monitor workspace exporter.
* **cache**: [CacheConfiguration](#cacheconfiguration): Cache configurations.
* **concurrency**: [ConcurrencyConfiguration](#concurrencyconfiguration): Concurrency configuration for the exporter.

## AzureMonitorWorkspaceProperties
### Properties
* **accountId**: string (ReadOnly): The immutable ID of the Azure Monitor workspace. This property is read-only.
* **defaultIngestionSettings**: [IngestionSettings](#ingestionsettings) (ReadOnly): The Data Collection Rule and Endpoint used for ingestion by default.
* **metrics**: [Metrics](#metrics): Information about metrics for the Azure Monitor workspace
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Azure Monitor workspace. Set to Succeeded if everything is healthy.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string (ReadOnly): Gets or sets allow or disallow public network access to workspace

## AzureResourceManagerCommonTypesExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | 'EdgeZone' | string (Required): The type of the extended location.

## BatchProcessor
### Properties
* **batchSize**: int {minValue: 10, maxValue: 100000}: Size of the batch.
* **timeout**: int {minValue: 10, maxValue: 60000}: Timeout in milliseconds.

## CacheConfiguration
### Properties
* **maxStorageUsage**: int: Max storage usage in megabytes.
* **retentionPeriod**: int: Retention period in minutes.

## ConcurrencyConfiguration
### Properties
* **batchQueueSize**: int: Size of the queue for log batches.
* **workerCount**: int: Number of parallel workers processing the log queues.

## Exporter
### Properties
* **azureMonitorWorkspaceLogs**: [AzureMonitorWorkspaceLogsExporter](#azuremonitorworkspacelogsexporter): Azure Monitor Workspace Logs specific configurations.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of exporter.
* **tcp**: [TcpExporter](#tcpexporter): TCP based exporter. Used for pipelineGroup exporter.
* **type**: 'AzureMonitorWorkspaceLogs' | 'PipelineGroup' | string (Required): The type of exporter.

## IngestionSettings
### Properties
* **dataCollectionEndpointResourceId**: string (ReadOnly): The Azure resource Id of the default data collection endpoint for this workspace.
* **dataCollectionRuleResourceId**: string (ReadOnly): The Azure resource Id of the default data collection rule for this workspace.

## Metrics
### Properties
* **internalId**: string (ReadOnly): An internal identifier for the metrics container. Only to be used by the system
* **prometheusQueryEndpoint**: string (ReadOnly): The Prometheus query endpoint for the workspace

## NetworkingConfiguration
### Properties
* **externalNetworkingMode**: 'LoadBalancerOnly' | string (Required): External networking mode.
* **host**: string {pattern: "^[a-zA-Z0-9-\.]+$"}: The address exposed on the cluster. Example: azuremonitorpipeline.contoso.com.
* **routes**: [NetworkingRoute](#networkingroute)[] (Required): Networking routes configuration.

## NetworkingRoute
### Properties
* **path**: string {pattern: "^[a-zA-Z0-9-/\.]+$"}: Route path.
* **port**: int {minValue: 1, maxValue: 65535}: The port that will be configured externally. If not specified, it will use the port from the receiver definition.
* **receiver**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of the previously defined receiver.
* **subdomain**: string {pattern: "^[a-zA-Z0-9-\.]+$"}: Route subdomain.

## OtlpReceiver
### Properties
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): OTLP GRPC endpoint definition. Example: 0.0.0.0:<port>.

## PersistenceConfigurations
### Properties
* **persistentVolumeName**: string (Required): The name of the mounted persistent volume.

## Pipeline
### Properties
* **exporters**: string[] (Required): Reference to exporters configured for the pipeline.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): Name of the pipeline.
* **processors**: string[]: Reference to processors configured for the pipeline.
* **receivers**: string[] (Required): Reference to receivers configured for the pipeline.
* **type**: 'logs' | string (Required): The type of pipeline

## PipelineGroupProperties
### Properties
* **exporters**: [Exporter](#exporter)[] (Required): The exporters specified for a pipeline group instance.
* **networkingConfigurations**: [NetworkingConfiguration](#networkingconfiguration)[]: Networking configurations for the pipeline group instance.
* **processors**: [Processor](#processor)[] (Required): The processors specified for a pipeline group instance.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy.
* **receivers**: [Receiver](#receiver)[] (Required): The receivers specified for a pipeline group instance.
* **replicas**: int: Defines the amount of replicas of the pipeline group instance.
* **service**: [Service](#service) (Required): The service section for a given pipeline group instance.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## Processor
### Properties
* **batch**: [BatchProcessor](#batchprocessor): Batch processor configurations.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of processor.
* **type**: 'Batch' | string (Required): The type of processor.

## Receiver
### Properties
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of receiver.
* **otlp**: [OtlpReceiver](#otlpreceiver): OTLP receiver configurations. This field is mandatory for OTLP and pipelineGroup receivers.
* **syslog**: [SyslogReceiver](#syslogreceiver): Syslog configurations. This field is mandatory for syslog type receivers.
* **type**: 'Ama' | 'OTLP' | 'PipelineGroup' | 'Syslog' | 'UDP' | string (Required): The type of receiver.
* **udp**: [UdpReceiver](#udpreceiver): UDP receiver configurations. This field is mandatory for UDP receivers.

## RecordMap
### Properties
* **from**: string (Required): Record Map Key.
* **to**: string (Required): Record Map Value.

## ResourceMap
### Properties
* **from**: string (Required): Resource Map Key.
* **to**: string (Required): Resource Map Value.

## SchemaMap
### Properties
* **recordMap**: [RecordMap](#recordmap)[] (Required): Record Map.
* **resourceMap**: [ResourceMap](#resourcemap)[]: Resource Map captures information about the entity for which telemetry is recorded. For example, metrics exposed by a Kubernetes container can be linked to a resource that specifies the cluster, namespace, pod, and container name.Resource may capture an entire hierarchy of entity identification. It may describe the host in the cloud and specific container or an application running in the process.
* **scopeMap**: [ScopeMap](#scopemap)[]: A scope map is a logical unit of the application code with which the emitted telemetry can be associated.

## ScopeMap
### Properties
* **from**: string (Required): Scope Map Key.
* **to**: string (Required): Scope Map Value.

## Service
### Properties
* **persistence**: [PersistenceConfigurations](#persistenceconfigurations): Persistence options to all pipelines in the instance.
* **pipelines**: [Pipeline](#pipeline)[] (Required): Pipelines belonging to a given pipeline group.

## SyslogReceiver
### Properties
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): Syslog receiver endpoint definition. Example: 0.0.0.0:<port>.
* **protocol**: 'rfc3164' | 'rfc5424' | string: Protocol to parse syslog messages. Default rfc3164

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TcpExporter
### Properties
* **url**: string {pattern: "^(https?)://[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"} (Required): TCP url to export.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UdpReceiver
### Properties
* **encoding**: 'ascii' | 'big5' | 'nop' | 'utf-16be' | 'utf-16le' | 'utf-8' | string: The encoding of the stream being received.
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): TCP endpoint definition. Example: 0.0.0.0:<port>.
* **readQueueLength**: int {minValue: 100, maxValue: 100000}: Max read queue length.

