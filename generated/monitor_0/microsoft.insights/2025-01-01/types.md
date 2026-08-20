# Microsoft.Insights @ 2025-01-01

## Function fetchDataCollectionRuleConfigurationMetadata (Microsoft.Insights/locations@2025-01-01)
* **Resource**: Microsoft.Insights/locations
* **ApiVersion**: 2025-01-01
* **Input**: [DataCollectionRuleConfigurationMetadataRequest](#datacollectionruleconfigurationmetadatarequest)
* **Output**: [DataCollectionRuleConfigurationMetadataResponse](#datacollectionruleconfigurationmetadataresponse)

## ConfigurationMetadata
### Properties
* **platformTelemetry**: [PlatformTelemetryMetadata](#platformtelemetrymetadata): Platform telemetry configuration metadata.

## DataCollectionRuleConfigurationMetadataRequest
### Properties
* **dcrKind**: string: DCR Kind for which metadata is being requested (e.g., PlatformTelemetry).
* **resourceType**: string: Optional resource type filter (e.g., Microsoft.Compute/virtualMachines). If specified, returns configuration metadata for that resource type.
* **withStreamMetadata**: bool: When true, returns detailed stream metadata in the response. Defaults to false.

## DataCollectionRuleConfigurationMetadataResponse
### Properties
* **configurationMetadata**: [ConfigurationMetadata](#configurationmetadata): The configuration metadata for platform telemetry.

## LogsSpecification
### Properties
* **displayName**: string: The display name of the logs stream.
* **groups**: string[]: Categorization groups for the logs stream.
* **name**: string: The name of the logs stream.

## MetricsSpecification
### Properties
* **aggregationType**: string: The aggregation type for the metric.
This value is provided by the service and is manifest-driven; the set of possible values may evolve over time.
Example: "Total".
* **description**: string: Description of the metric.
* **displayName**: string: The display name of the metric.
* **groups**: string[]: Categorization groups for the metric.
* **name**: string: The name of the metric.
* **unit**: string: The unit of measurement for the metric.
This value is provided by the service and is manifest-driven; the set of possible values may evolve over time.
Example: "Count".

## PlatformTelemetryMetadata
### Properties
* **platformLogs**: [TelemetryTypeMetadata](#telemetrytypemetadata): Configuration metadata for platform logs.
* **platformMetrics**: [TelemetryTypeMetadata](#telemetrytypemetadata): Configuration metadata for platform metrics.

## StreamDetailMetadata
### Properties
* **logsSpecification**: [LogsSpecification](#logsspecification): Specification for logs stream.
* **metricsSpecification**: [MetricsSpecification](#metricsspecification): Specification for metrics stream.

## StreamMetadata
### Properties
* **metadata**: [StreamDetailMetadata](#streamdetailmetadata): Additional metadata about the stream.
* **streamId**: string: The unique identifier for the stream.

## TelemetryTypeMetadata
### Properties
* **supportedDestinations**: string[]: List of supported destination resource types.
* **supportedResourceTypes**: string[]: List of supported source resource types.
* **supportedStreams**: [StreamMetadata](#streammetadata)[]: Detailed stream information. Only returned when withStreamMetadata is true in the request.

