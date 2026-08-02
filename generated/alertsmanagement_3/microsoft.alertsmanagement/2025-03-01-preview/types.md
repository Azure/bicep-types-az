# Microsoft.AlertsManagement @ 2025-03-01-preview

## Resource Microsoft.AlertsManagement/issues@2025-03-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2025-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z0-9][A-Za-z0-9-]+[A-Za-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IssueProperties](#issueproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AlertsManagement/issues' (ReadOnly, DeployTimeConstant): The resource type

## Function addOrUpdateAlerts (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [RelatedAlerts](#relatedalerts)
* **Output**: [RelatedAlerts](#relatedalerts)

## Function addOrUpdateResources (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [RelatedResources](#relatedresources)
* **Output**: [RelatedResources](#relatedresources)

## Function fetchInvestigationResult (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [FetchInvestigationResultParameters](#fetchinvestigationresultparameters)
* **Output**: [InvestigationResult](#investigationresult)

## Function listAlerts (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedAlert](#pagedrelatedalert)

## Function listResources (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [ListParameter](#listparameter)
* **Output**: [PagedRelatedResource](#pagedrelatedresource)

## Function startInvestigation (Microsoft.AlertsManagement/issues@2025-03-01-preview)
* **Resource**: Microsoft.AlertsManagement/issues
* **ApiVersion**: 2025-03-01-preview
* **Input**: [StartInvestigationParameters](#startinvestigationparameters)
* **Output**: [InvestigationMetadata](#investigationmetadata)

## AbnormalEventAnomalyInsight
### Properties
* **abnormalEventType**: 'Dependency' | 'Exception' | 'Request' | string (Required): The type of abnormal event
* **analysisEndTime**: string (Required): The end time of the analysis (in UTC)
* **analysisStartTime**: string (Required): The start time of the analysis (in UTC)
* **anomalyTime**: string (Required): The time when the anomaly was detected (in UTC)
* **cloudRoleName**: string (Required): The cloud role name for which the log was made
* **description**: string: The description of the abnormal event
* **examples**: string[] (Required): Examples of the abnormal event
* **exceptionPatternAnomalies**: [ExceptionPatternAnomaly](#exceptionpatternanomaly)[] (Required): The exception pattern anomalies
* **failedCount**: int: The count of failed log entries
* **target**: string (Required): The source of the detected anomaly, for example: target URI of a dependency, name of a failed operation, or type of an exception
* **totalCount**: int: The total count of log entries analyzed
* **tracePatternAnomalies**: [TracePatternAnomaly](#tracepatternanomaly)[] (Required): The trace pattern anomalies
* **transactionPatternAnomalies**: [TransactionPatternAnomaly](#transactionpatternanomaly)[] (Required): The transaction pattern anomalies

## AbnormalEventData
### Properties
* **kqlFilter**: string (Required): The kql filter to display

## AnomalyRange
### Properties
* **end**: string (Required): The end time of the range (in UTC)
* **start**: string (Required): The start time of the range (in UTC)

## AzureMetricAnomalyInsight
### Properties
* **anomalyDirection**: 'Decrease' | 'Increase' | 'IncreaseAndDecrease' | string (Required): The direction of the anomaly
* **anomalyScanRange**: [AnomalyRange](#anomalyrange) (Required): The range of that was scanned for anomalies
* **anomalyTime**: string (Required): The time of the anomaly (in UTC)
* **thresholds**: [BaselineRange](#baselinerange) (Required): The baseline range for the metric

## AzureMetricData
### Properties
* **dimensions**: [AzureMetricDataDimensions](#azuremetricdatadimensions) (Required): The dimensions of the metric
* **metricAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'None' | 'Total' | 'Unique' | string (Required): The aggregation type of the metric
* **metricInterval**: string (Required): The interval at which the metric is collected
* **metricName**: string (Required): The name of the metric
* **metricNamespace**: string (Required): The namespace of the metric
* **scanRange**: [AnomalyRange](#anomalyrange) (Required): The range for anomaly scanning

## AzureMetricDataDimensions
### Properties
### Additional Properties
* **Additional Properties Type**: string[]

## BaselineRange
### Properties
* **high**: int (Required): The highest value of the range
* **low**: int (Required): The lowest value of the range

## DetailsBase
* **Discriminator**: detailsType

### Base Properties
* **category**: 'Alert' | 'Diagnostics' | 'Investigation' | 'Log' | 'Metric' | 'ResourceHealth' | string (Required): The details category
* **resourceIds**: string[]: The resource ids related to the anomaly

### AbnormalEventDetails
#### Properties
* **data**: [AbnormalEventData](#abnormaleventdata) (Required): The details data, which could be user generated or system generated
* **detailsType**: 'AbnormalEvent' (Required): The type of details
* **insight**: [AbnormalEventAnomalyInsight](#abnormaleventanomalyinsight) (Required): Insight about the anomaly, this is system generated

### AzureMetricDetails
#### Properties
* **data**: [AzureMetricData](#azuremetricdata) (Required): The details data, which could be user generated or system generated
* **detailsType**: 'AzureMetric' (Required): The type of details
* **insight**: [AzureMetricAnomalyInsight](#azuremetricanomalyinsight) (Required): Insight about the anomaly, which is system generated

### DiagnosticsSolutionDetails
#### Properties
* **detailsType**: 'Diagnostics' (Required): The type of details
* **insight**: [DiagnosticsInsight](#diagnosticsinsight) (Required): Insight about the anomaly, this is system generated

### InvestigationDetails
#### Properties
* **data**: [StartInvestigationParameters](#startinvestigationparameters) (Required): The parameters used for this investigation execution
* **detailsType**: 'Investigation' (Required): The type of details

### RelatedAlertDetails
#### Properties
* **data**: [RelatedAlertData](#relatedalertdata) (Required): The details data, which could be user generated or system generated
* **detailsType**: 'RelatedAlert' (Required): The type of details
* **insight**: [RelatedAlertAnomalyInsight](#relatedalertanomalyinsight) (Required): Insight about the anomaly, this is system generated

### ResourceHealthDetails
#### Properties
* **detailsType**: 'ResourceHealth' (Required): The type of details
* **insight**: [ResourceHealthInsight](#resourcehealthinsight) (Required): Insight about the anomaly, this is system generated


## DiagnosticsInsight
### Properties
* **content**: string (Required): The diagnostics HTML content
* **solutionId**: string (Required): The diagnostics solution Id

## ExceptionPatternAnomaly
### Properties
* **count**: int (Required): The count of the exception occurrences
* **generatedMessage**: string (Required): The generated message for the exception
* **itemId**: string (Required): The exception's item ID, from the Application Insights telemetry data model
* **problemId**: string (Required): The problem ID of the exception, from the Application Insights telemetry data model

## FetchInvestigationResultParameters
### Properties
* **investigationId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation

## InvestigationEntity
### Properties
* **children**: [InvestigationEntity](#investigationentity)[]: The children of this investigation entity
* **createdAt**: string (Required): The creation time of the entity (in UTC)
* **details**: [DetailsBase](#detailsbase): The details of the entity
* **entityType**: 'Evidence' | 'Finding' | 'Investigation' | string (Required): The type of the entity
* **execution**: [InvestigationExecution](#investigationexecution) (Required): The execution details of the entity
* **healthState**: 'Healthy' | 'Unhealthy' | 'Unknown' | string (Required): The health state of the entity
* **id**: string (Required): The identifier of the entity
* **lastModifiedAt**: string (Required): The last update time of the entity (in UTC)
* **origin**: [Origin](#origin) (Required): The origin of the entity
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string: The relevance of the entity
* **summary**: [Summary](#summary): The summary of the entity

## InvestigationExecution
### Properties
* **completedAt**: string (Required): The time at which the investigation execution completed (in UTC)
* **runState**: 'Canceled' | 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (Required, ReadOnly): The state of the investigation execution

## InvestigationMetadata
### Properties
* **createdAt**: string (Required): The creation time of the investigation (in UTC)
* **execution**: [InvestigationExecution](#investigationexecution) (Required): The execution details of the investigation
* **id**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The unique identifier of the investigation
* **runParameters**: [RunParameters](#runparameters) (Required): The parameters that were used to start the investigation

## InvestigationResult
### Properties
* **children**: [InvestigationEntity](#investigationentity)[] (Required): The children of this investigation, findings and evidences
* **createdAt**: string (Required): The creation time of the investigation (in UTC)
* **entityType**: 'Evidence' | 'Finding' | 'Investigation' | string (Required): The type of the investigation
* **execution**: [InvestigationExecution](#investigationexecution) (Required): The execution details of the investigation
* **id**: string (Required): The identifier of the investigation
* **lastModifiedAt**: string (Required): The last update time of the investigation (in UTC)
* **origin**: [Origin](#origin) (Required): The origin of the investigation
* **runParameters**: [RunParameters](#runparameters) (Required): The parameters used to run the investigation

## InvestigationScope
### Properties
* **id**: string (Required): The ID of the scope of the investigation - either an Azure alert ID or an Azure resource ID
* **origin**: [Origin](#origin) (Required): The origin of the scope
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string: The relevance of the scope

## IssueProperties
### Properties
* **impactTime**: string (Required): The issue impact time (in UTC)
* **investigations**: [InvestigationMetadata](#investigationmetadata)[] (Required, ReadOnly): The list of investigations in the issue
* **investigationsCount**: int (Required, ReadOnly): The number of investigations in the issue
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **severity**: string (Required): The issue severity
* **status**: 'Canceled' | 'Closed' | 'InProgress' | 'Mitigated' | 'New' | string (Required): The issue status
* **title**: string (Required): The issue title

## ListParameter
### Properties
* **filter**: string: The filter to apply on the operation. For example, to filter by relevance, use "$filter=relevance eq 'Relevant'"

## Origin
### Properties
* **addedBy**: string (Required): The ID of the origin - for example, in case of 'Manual', the object ID of the identity, and in case of 'Automatic', the name of the automatic system
* **addedByType**: 'Automatic' | 'Manual' | string (Required): The source of the origin - Manual or Automatic

## PagedRelatedAlert
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedAlert](#relatedalert)[] (Required): The RelatedAlert items on this page

## PagedRelatedResource
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [RelatedResource](#relatedresource)[] (Required): The RelatedResource items on this page

## RelatedAlert
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The alert ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the alert to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The alerts's relevance status

## RelatedAlertAnomalyInsight
### Properties
* **anomalyTime**: string (Required): The time when the anomaly was detected (in UTC)
* **firedTime**: string (Required): The time when the alert was fired (in UTC)

## RelatedAlertData
### Properties
* **firedAlertId**: string (Required): The fired alert id

## RelatedAlerts
### Properties
* **value**: [RelatedAlert](#relatedalert)[] (Required): A list of related alerts

## RelatedResource
### Properties
* **addedAt**: string (Required, ReadOnly): The time this relation was added to the issue (in UTC)
* **id**: string (Required): The resource ID
* **lastModifiedAt**: string (Required, ReadOnly): The last update time of this relation (in UTC)
* **origin**: [Origin](#origin) (Required, ReadOnly): The source that related the resource to the issue
* **relevance**: 'Irrelevant' | 'None' | 'Relevant' | string (Required): The resource's relevance status

## RelatedResources
### Properties
* **value**: [RelatedResource](#relatedresource)[] (Required): A list of related resources

## ResourceHealthInsight
### Properties
* **availabilityState**: 'Available' | 'Degraded' | 'Unavailable' | 'Unknown' | 'UserInitiated' | string (Required): The availability state of the resource
* **occurredTime**: string (Required): The time when the resource health event occurred (in UTC)
* **summary**: string (Required): The summary of the resource health event
* **title**: string (Required): The title of the resource health event

## RunParameters
### Properties
* **alerts**: [InvestigationScope](#investigationscope)[] (Required): The alerts used to run the investigation
* **impactTime**: string (Required): The impact time to investigate (in UTC)
* **resources**: [InvestigationScope](#investigationscope)[] (Required): The resources used to run the investigation

## StartInvestigationParameters
### Properties
* **impactTime**: string: The impact time to use for this investigation - by default, the impact time from the issue is used (in UTC)
* **investigationScopes**: [InvestigationScope](#investigationscope)[] (Required): The scope of the investigation (resources and alerts) - by default, the resources and alerts related to the issue are used

## Summary
### Properties
* **possibleExplanation**: string (Required): Possible explanation of the entity
* **title**: string (Required): The title of the entity
* **whatCanBeDoneNext**: string (Required): Suggestions for next steps
* **whatHappened**: string (Required): Description of what happened

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TracePatternAnomaly
### Properties
* **count**: int (Required): The count of the trace occurrences
* **generatedMessage**: string (Required): A generated message that describes the anomalous trace pattern
* **pattern**: string (Required): The anomalous trace pattern that was detected in the Application Insights traces table
* **sampleEvent**: string (Required): The sample event of the trace pattern

## TransactionEdge
### Properties
* **end**: string (Required): The textual identifier of the end node of the edge
* **metadata**: [TransactionEdgeMetadata](#transactionedgemetadata) (Required): The edge's metadata
* **start**: string (Required): The textual identifier of the start node of the edge

## TransactionEdgeMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransactionNode
### Properties
* **id**: string (Required): The textual identifier of the transaction participant's node
* **metadata**: [TransactionNodeMetadata](#transactionnodemetadata) (Required): The node's metadata

## TransactionNodeMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransactionPatternAnomaly
### Properties
* **edges**: [TransactionEdge](#transactionedge)[] (Required): The edges of the transaction pattern
* **generatedMessage**: string (Required): A generated message that describes the anomalous transaction pattern
* **name**: string (Required): The name of the transaction pattern
* **nodes**: [TransactionNode](#transactionnode)[] (Required): The nodes of the transaction pattern
* **targetNode**: string (Required): The textual identifier of the target of the anomalous transaction

