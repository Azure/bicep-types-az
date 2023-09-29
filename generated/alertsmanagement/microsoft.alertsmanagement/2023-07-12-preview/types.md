# Microsoft.AlertsManagement @ 2023-07-12-preview

## Resource Microsoft.AlertsManagement/alerts@2023-07-12-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-07-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertProperties](#alertproperties) (ReadOnly): Alert property bag
* **type**: 'Microsoft.AlertsManagement/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.AlertsManagement/alerts/enrichments@2023-07-12-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2023-07-12-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AlertEnrichmentProperties](#alertenrichmentproperties) (ReadOnly): Properties of the alert enrichment item.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.AlertsManagement/alerts/enrichments' (ReadOnly, DeployTimeConstant): The resource type

## ActionStatus
### Properties
* **isSuppressed**: bool: Value indicating whether alert is suppressed.

## AlertEnrichmentItem
* **Discriminator**: type

### Base Properties
* **description**: string (Required): The enrichment description.
* **errorMessage**: string: The error message. Will be present only if the status is 'Failed'.
* **status**: 'Failed' | 'Succeeded' | string (Required): The status of the evaluation of the enrichment.
* **title**: string (Required): The enrichment title.

### PrometheusInstantQuery
#### Properties
* **datasources**: string[] (Required): An array of the azure monitor workspace resource ids.
* **grafanaExplorePath**: string (Required): Partial link to the Grafana explore API.
* **linkToApi**: string (Required): Link to Prometheus query API (Url format).
* **query**: string (Required): The Prometheus expression query.
* **time**: string (Required): The date and the time of the evaluation.
* **type**: 'PrometheusInstantQuery' (Required): The enrichment type.

### PrometheusRangeQuery
#### Properties
* **datasources**: string[] (Required): An array of the azure monitor workspace resource ids.
* **end**: string (Required): The end evaluation date and time in ISO8601 format.
* **grafanaExplorePath**: string (Required): Partial link to the Grafana explore API.
* **linkToApi**: string (Required): Link to Prometheus query API (Url format).
* **query**: string (Required): The Prometheus expression query.
* **start**: string (Required): The start evaluation date and time in ISO8601 format.
* **step**: string (Required): Query resolution step width in ISO8601 format.
* **type**: 'PrometheusRangeQuery' (Required): The enrichment type.


## AlertEnrichmentProperties
### Properties
* **alertId**: string (ReadOnly): Unique Id (GUID) of the alert for which the enrichments are being retrieved.
* **enrichments**: [AlertEnrichmentItem](#alertenrichmentitem)[]: Enrichment details

## AlertProperties
### Properties
* **context**: any (ReadOnly): Information specific to the monitor service that gives more contextual details about the alert.
* **egressConfig**: any (ReadOnly): Config which would be used for displaying the data in portal.
* **essentials**: [Essentials](#essentials): This object contains consistent fields across different monitor services.

## Essentials
### Properties
* **actionStatus**: [ActionStatus](#actionstatus): Action status
* **alertRule**: string (ReadOnly): Rule(monitor) which fired alert instance. Depending on the monitor service,  this would be ARM id or name of the rule.
* **alertState**: 'Acknowledged' | 'Closed' | 'New' | string (ReadOnly): Alert object state, which can be modified by the user.
* **description**: string: Alert description.
* **lastModifiedDateTime**: string (ReadOnly): Last modification time(ISO-8601 format) of alert instance.
* **lastModifiedUserName**: string (ReadOnly): User who last modified the alert, in case of monitor service updates user would be 'system', otherwise name of the user.
* **monitorCondition**: 'Fired' | 'Resolved' | string (ReadOnly): Condition of the rule at the monitor service. It represents whether the underlying conditions have crossed the defined alert rule thresholds.
* **monitorConditionResolvedDateTime**: string (ReadOnly): Resolved time(ISO-8601 format) of alert instance. This will be updated when monitor service resolves the alert instance because the rule condition is no longer met.
* **monitorService**: 'ActivityLog Administrative' | 'ActivityLog Autoscale' | 'ActivityLog Policy' | 'ActivityLog Recommendation' | 'ActivityLog Security' | 'Application Insights' | 'Log Analytics' | 'Nagios' | 'Platform' | 'Resource Health' | 'SCOM' | 'ServiceHealth' | 'SmartDetector' | 'VM Insights' | 'Zabbix' | string (ReadOnly): Monitor service on which the rule(monitor) is set.
* **severity**: 'Sev0' | 'Sev1' | 'Sev2' | 'Sev3' | 'Sev4' | string (ReadOnly): Severity of alert Sev0 being highest and Sev4 being lowest.
* **signalType**: 'Log' | 'Metric' | 'Unknown' | string (ReadOnly): The type of signal the alert is based on, which could be metrics, logs or activity logs.
* **smartGroupId**: string (ReadOnly): Unique Id of the smart group
* **smartGroupingReason**: string (ReadOnly): Verbose reason describing the reason why this alert instance is added to a smart group
* **sourceCreatedId**: string (ReadOnly): Unique Id created by monitor service for each alert instance. This could be used to track the issue at the monitor service, in case of Nagios, Zabbix, SCOM etc.
* **startDateTime**: string (ReadOnly): Creation time(ISO-8601 format) of alert instance.
* **targetResource**: string: Target ARM resource, on which alert got created.
* **targetResourceGroup**: string: Resource group of target ARM resource, on which alert got created.
* **targetResourceName**: string: Name of the target ARM resource name, on which alert got created.
* **targetResourceType**: string: Resource type of target ARM resource, on which alert got created.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

