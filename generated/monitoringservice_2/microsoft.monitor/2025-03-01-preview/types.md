# Microsoft.Monitor @ 2025-03-01-preview

## Resource Microsoft.Monitor/pipelineGroups@2025-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **extendedLocation**: [AzureResourceManagerCommonTypesExtendedLocation](#azureresourcemanagercommontypesextendedlocation): The complex type of the extended location.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required, DeployTimeConstant): The resource name
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

## AzureResourceManagerCommonTypesExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | 'EdgeZone' | string (Required): The type of the extended location.

## BatchProcessor
### Properties
* **batchSize**: int {minValue: 10, maxValue: 100000}: Size of the batch.
* **timeout**: int {minValue: 10, maxValue: 300000}: Timeout in milliseconds.

## CacheConfiguration
### Properties
* **maxStorageUsage**: int: Max storage usage in megabytes.
* **retentionPeriod**: int: Retention period in minutes.

## CertificateSource
### Properties
* **location**: string (Required): Location of the certificate source.
* **subLocation**: string (Required): Sub-location within the certificate source.
* **type**: 'kubernetesConfigMap' | 'kubernetesSecret' | string (Required): The type of certificate source.

## CertificateWithKey
### Properties
* **certificate**: [CertificateSource](#certificatesource) (Required): Source configuration for the TLS certificate.
* **privateKey**: [PrivateKeySource](#privatekeysource) (Required): Source configuration for the private key. Private keys must be stored in Kubernetes secrets for security reasons.

## ConcurrencyConfiguration
### Properties
* **batchQueueSize**: int: Size of the queue for log batches.
* **workerCount**: int: Number of parallel workers processing the log queues.

## DistributionPolicy
### Properties
* **maxInstancesPerHost**: int: Maximum number of instances allowed per compute unit (node/VM). If not specified, default scheduling applies.

## ExecutionPlacement
### Properties
* **constraints**: [PlacementConstraint](#placementconstraint)[]: A list of placement constraints to guide where pipelineGroup instances should run.
* **distribution**: [DistributionPolicy](#distributionpolicy): Distribution policy for spreading instances across compute units (nodes/VMs).

## Exporter
### Properties
* **azureMonitorWorkspaceLogs**: [AzureMonitorWorkspaceLogsExporter](#azuremonitorworkspacelogsexporter): Azure Monitor Workspace Logs specific configurations.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of exporter.
* **type**: 'AzureMonitorWorkspaceLogs' | string (Required): The type of exporter.

## JsonArrayMapper
### Properties
* **destinationField**: [JsonMapperDestinationField](#jsonmapperdestinationfield): Define a destination field to which the parsed output will be written. The output is a map, it's keys is the given keys array and the matching values are the parsed json array elements.
* **keys**: string[] (Required): Define the names of the keys in the resulting map. The input json array elements are mapped in order, one for every key.
* **sourceField**: [JsonMapperSourceField](#jsonmappersourcefield): Define a source field from which a json array will be read and parsed to it's elements. The number of elements in the json array is expected to be the same as the length of keys.

## JsonMapperDestinationField
### Properties
* **destination**: 'attributes' | 'body' | string: Define the destination's element. The element is the body or the attributes of the message, to which the json array mapper will write the output map.
* **fieldName**: string: Define a destination field name under the given element. Leaving this empty, means the root of the element. In case element=attributes and fieldName is empty, the object's attributes themselves will contain the key value output pairs.

## JsonMapperSourceField
### Properties
* **fieldName**: string: Define a source field name from which the json array mapper will read the json array. Leaving this empty, means reading the body of the message itself.

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
* **type**: 'Logs' | string (Required): The type of pipeline

## PipelineGroupProperties
### Properties
* **executionPlacement**: [ExecutionPlacement](#executionplacement): Constraints for guiding the execution environment of the pipeline group.
* **exporters**: [Exporter](#exporter)[] (Required): The exporters specified for a pipeline group instance.
* **processors**: [Processor](#processor)[] (Required): The processors specified for a pipeline group instance.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of a pipeline group instance. Set to Succeeded if everything is healthy.
* **receivers**: [Receiver](#receiver)[] (Required): The receivers specified for a pipeline group instance.
* **replicas**: int: Defines the amount of replicas of the pipeline group instance.
* **service**: [Service](#service) (Required): The service section for a given pipeline group instance.
* **tlsConfigurations**: [TlsConfiguration](#tlsconfiguration)[]: TLS configurations for the pipeline group instance.

## PlacementConstraint
### Properties
* **capability**: string (Required): The capability or attribute key used to match compute unit properties.
* **operator**: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn' | string (Required): The match operator, e.g., In, NotIn, Exists, DoesNotExist.
* **values**: string[]: The values to match against. Not required for Exists/DoesNotExist.

## PrivateKeySource
### Properties
* **location**: string (Required): Location of the private key source.
* **subLocation**: string (Required): Sub-location within the private key source.
* **type**: 'kubernetesSecret' | string (Required): The type of private key source. Only kubernetesSecret is supported for security reasons.

## Processor
### Properties
* **batch**: [BatchProcessor](#batchprocessor): Batch processor configurations.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of processor.
* **transformLanguage**: [TransformLanguageProcessor](#transformlanguageprocessor): Transform language processor configurations.
* **type**: 'Batch' | 'MicrosoftCommonSecurityLog' | 'MicrosoftSyslog' | 'TransformLanguage' | string (Required): The type of processor.

## Receiver
### Properties
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of receiver.
* **otlp**: [OtlpReceiver](#otlpreceiver): OTLP receiver configurations. This field is mandatory for OTLP receivers.
* **syslog**: [SyslogReceiver](#syslogreceiver): Syslog configurations. This field is mandatory for syslog type receivers.
* **tlsConfiguration**: string: Reference to a named TLS configuration. If not specified, default TLS configuration is used.
* **type**: 'OTLP' | 'Syslog' | 'UDP' | string (Required): The type of receiver.
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
* **allowSkipPriHeader**: bool: Configure the receiver to allow parsing of messages without the PRI header. Default false.
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): Syslog receiver endpoint definition. Example: 0.0.0.0:<port>.
* **protocol**: 'rfc3164' | 'rfc5424' | string: Protocol to parse syslog messages. Default rfc3164
* **transportProtocol**: 'tcp' | 'udp' | string: Transport protocol. Default tcp.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TlsConfiguration
### Properties
* **clientCa**: [CertificateSource](#certificatesource): Certificate source configuration for the client CA certificate for validating client certificates. If not specified, default CA certificates are used.
* **mode**: 'disabled' | 'mutualTls' | 'serverOnly' | string: The TLS security mode for receivers using this configuration. Default is 'mutualTls'.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of the TLS configuration.
* **tlsCertificate**: [CertificateWithKey](#certificatewithkey): TLS certificate and its private key. If not specified, default TLS certificate is used.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransformLanguageProcessor
### Properties
* **transformStatement**: string {minLength: 1, maxLength: 10000} (Required): Transform statement to execute over the data passing through the processor.

## UdpReceiver
### Properties
* **encoding**: 'ascii' | 'big5' | 'nop' | 'utf-16be' | 'utf-16le' | 'utf-8' | string: The encoding of the stream being received.
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): TCP endpoint definition. Example: 0.0.0.0:<port>.
* **jsonArrayMapper**: [JsonArrayMapper](#jsonarraymapper): Json array mapper - allows this udp receiver to parse a value from a given source field as a json array, match a key to each parsed value and output the key-value map to a given output field.
* **readQueueLength**: int {minValue: 100, maxValue: 100000}: Max read queue length.

