# Microsoft.Monitor @ 2026-04-01

## Resource Microsoft.Monitor/pipelineGroups@2026-04-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-04-01' (ReadOnly, DeployTimeConstant): The resource api version
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
* **persistence**: [ExporterPersistenceConfiguration](#exporterpersistenceconfiguration): Persistence options for the exporter.

## AzureResourceManagerCommonTypesExtendedLocation
### Properties
* **name**: string (Required): The name of the extended location.
* **type**: 'CustomLocation' | 'EdgeZone' | string (Required): The type of the extended location.

## BatchProcessor
### Properties
* **batchSize**: int {minValue: 10, maxValue: 100000}: Size of the batch.
* **timeout**: int {minValue: 10, maxValue: 300000}: Timeout in milliseconds.

## CertificateSource
### Properties
* **location**: string (Required): Location of the certificate source.
* **subLocation**: string (Required): Sub-location within the certificate source.
* **type**: 'kubernetesConfigMap' | 'kubernetesSecret' | string (Required): The type of certificate source.

## CertificateWithKey
### Properties
* **certificate**: [CertificateSource](#certificatesource) (Required): Source configuration for the TLS certificate.
* **privateKey**: [PrivateKeySource](#privatekeysource) (Required): Source configuration for the private key. Private keys must be stored in Kubernetes secrets for security reasons.

## DistributionPolicy
### Properties
* **maxInstancesPerHost**: int {minValue: 1}: Maximum number of instances allowed per compute unit (node/VM). If not specified, default scheduling applies.

## ExecutionPlacement
### Properties
* **constraints**: [PlacementConstraint](#placementconstraint)[]: A list of placement constraints to guide where pipelineGroup instances should run.
* **distribution**: [DistributionPolicy](#distributionpolicy): Distribution policy for spreading instances across compute units (nodes/VMs).

## Exporter
### Properties
* **azureMonitorWorkspaceLogs**: [AzureMonitorWorkspaceLogsExporter](#azuremonitorworkspacelogsexporter): Azure Monitor Workspace Logs specific configurations.
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]{3,32}[^-]$"} (Required): The name of exporter.
* **type**: 'AzureMonitorWorkspaceLogs' | string (Required): The type of exporter.

## ExporterPersistenceConfiguration
### Properties
* **maxStorageUsage**: int {minValue: 1}: Max storage usage in gigabytes.
* **retentionPeriod**: int {minValue: 1}: Retention period in minutes.

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
* **replicas**: int {minValue: 1}: Defines the amount of replicas of the pipeline group instance.
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
* **type**: 'OTLP' | 'Syslog' | string (Required): The type of receiver.

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
* **allowedFormats**: ('all' | 'cefRfc3164' | 'cefRfc5424' | 'rawCef' | 'syslogRfc3164' | 'syslogRfc5424' | string)[]: List of allowed message formats for syslog/CEF ingestion. Default 'all'.
* **allowSkipPriHeader**: bool: Configure the receiver to allow parsing of messages without the PRI header. Default false.
* **endpoint**: string {pattern: "^[a-zA-Z0-9-\.]+:[0-9]+$"} (Required): Syslog receiver endpoint definition. Example: 0.0.0.0:<port>.
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

