# Microsoft.Impact @ 2024-05-01-preview

## Resource Microsoft.Impact/connectors@2024-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ConnectorProperties](#connectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Impact/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Impact/impactCategories@2024-05-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9.]*[a-zA-Z0-9]{3,180}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ImpactCategoryProperties](#impactcategoryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Impact/impactCategories' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Impact/workloadImpacts@2024-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9-:]*[a-zA-Z0-9]{3,120}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [WorkloadImpactProperties](#workloadimpactproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Impact/workloadImpacts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Impact/workloadImpacts/insights@2024-05-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2024-05-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9][a-zA-Z0-9.]*[a-zA-Z0-9]{3,180}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [InsightProperties](#insightproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Impact/workloadImpacts/insights' (ReadOnly, DeployTimeConstant): The resource type

## ClientIncidentDetails
### Properties
* **clientIncidentId**: string: Client incident id. ex : id of the incident created to investigate and address the impact if any.
* **clientIncidentSource**: 'AzureDevops' | 'ICM' | 'Jira' | 'Other' | 'ServiceNow' | string: Client incident source. ex : source system name where the incident is created

## Connectivity
### Properties
* **port**: int: Port number for the connection
* **protocol**: 'FTP' | 'HTTP' | 'HTTPS' | 'Other' | 'RDP' | 'SSH' | 'TCP' | 'UDP' | string: Protocol used for the connection
* **source**: [SourceOrTarget](#sourceortarget): Source from which the connection was attempted
* **target**: [SourceOrTarget](#sourceortarget): target which connection was attempted

## ConnectorProperties
### Properties
* **connectorId**: string (Required, ReadOnly): unique id of the connector.
* **connectorType**: 'AzureMonitor' | string (Required): connector type
* **lastRunTimeStamp**: string (Required, ReadOnly): last run time stamp of this connector in UTC time zone
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **tenantId**: string (Required, ReadOnly): tenant id of this connector

## Content
### Properties
* **description**: string (Required): Description of the insight
* **title**: string (Required): Title of the insight

## ErrorDetailProperties
### Properties
* **errorCode**: string: ARM Error code associated with the impact.
* **errorMessage**: string: ARM Error Message associated with the impact

## ExpectedValueRange
### Properties
* **max**: int (Required): Max threshold value for the metric
* **min**: int (Required): Min threshold value for the metric

## ImpactCategoryProperties
### Properties
* **categoryId**: string {pattern: "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"} (Required): Unique ID of the category
* **description**: string: Description of the category
* **parentCategoryId**: string {pattern: "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"}: Unique ID of the parent category
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **requiredImpactProperties**: [RequiredImpactProperties](#requiredimpactproperties)[]: The workloadImpact properties which are required when reporting with the impact category

## ImpactDetails
### Properties
* **endTime**: string: Time at which impact was ended according to reported impact.
* **impactedResourceId**: string (Required): List of impacted Azure resources.
* **impactId**: string (Required): Azure Id of the impact.
* **startTime**: string (Required): Time at which impact was started according to reported impact.

## InsightProperties
### Properties
* **additionalDetails**: any: additional details of the insight.
* **category**: string (Required): category of the insight.
* **content**: [Content](#content) (Required): Contains title & description for the insight
* **eventId**: string: Identifier of the event that has been correlated with this insight. This can be used to aggregate insights for the same event.
* **eventTime**: string: Time of the event, which has been correlated the impact.
* **groupId**: string: Identifier that can be used to group similar insights.
* **impact**: [ImpactDetails](#impactdetails) (Required): details of of the impact for which insight has been generated.
* **insightUniqueId**: string (Required): unique id of the insight.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **status**: string: status of the insight. example resolved, repaired, other.

## Performance
### Properties
* **actual**: int: Observed value for the metric
* **expected**: int: Threshold value for the metric
* **expectedValueRange**: [ExpectedValueRange](#expectedvaluerange): Max and Min Threshold values for the metric
* **metricName**: string: Name of the Metric examples:  Disk, IOPs, CPU, GPU, Memory, details can be found from /impactCategories API
* **unit**: 'ByteSeconds' | 'Bytes' | 'BytesPerSecond' | 'Cores' | 'Count' | 'CountPerSecond' | 'MilliCores' | 'MilliSeconds' | 'NanoCores' | 'Other' | 'Percent' | 'Seconds' | string: Unit of the metric ex: Bytes, Percentage, Count, Seconds, Milliseconds, Bytes/Second, Count/Second, etc.., Other

## RequiredImpactProperties
### Properties
* **allowedValues**: string[]: Allowed values values for the property
* **name**: string (Required): Name of the property

## SourceOrTarget
### Properties
* **azureResourceId**: string {pattern: "(\/[0-9a-zA-Z]+)*"}: Azure resource id, example /subscription/{subscription}/resourceGroup/{rg}/Microsoft.compute/virtualMachine/{vmName}

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## Workload
### Properties
* **context**: string: the scenario for the workload
* **toolset**: 'ARM' | 'Ansible' | 'Chef' | 'Other' | 'Portal' | 'Puppet' | 'SDK' | 'Shell' | 'Terraform' | string: Tool used to interact with Azure. SDK, AzPortal, etc.., Other

## WorkloadImpactProperties
### Properties
* **additionalProperties**: any: Additional fields related to impact, applicable fields per resource type are list under /impactCategories API
* **armCorrelationIds**: string[]: The ARM correlation ids, this is important field for control plane related impacts
* **clientIncidentDetails**: [ClientIncidentDetails](#clientincidentdetails): Client incident details ex: incidentId , incident source
* **confidenceLevel**: 'High' | 'Low' | 'Medium' | string: Degree of confidence on the impact being a platform issue
* **connectivity**: [Connectivity](#connectivity): Details about connectivity issue. Applicable when root resource causing the issue is not identified. For example, when a VM is impacted due to a network issue, the impacted resource is identified as the VM, but the root cause is the network. In such cases, the connectivity field will have the details about the network issue
* **endDateTime**: string: Time at which impact has ended
* **errorDetails**: [ErrorDetailProperties](#errordetailproperties): ARM error code and error message associated with the impact
* **impactCategory**: string (Required): Category of the impact,  details can found from /impactCategories API
* **impactDescription**: string: A detailed description of the impact
* **impactedResourceId**: string (Required): Azure resource id of the impacted resource
* **impactGroupId**: string: Use this field to group impacts
* **impactUniqueId**: string {pattern: "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"} (ReadOnly): Unique ID of the impact (UUID)
* **performance**: [Performance](#performance)[]: Details about performance issue. Applicable for performance impacts.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Resource provisioning state.
* **reportedTimeUtc**: string (ReadOnly): Time at which impact is reported
* **startDateTime**: string (Required): Time at which impact was observed
* **workload**: [Workload](#workload): Information about the impacted workload

