# Microsoft.Insights @ 2026-01-01

## Resource Microsoft.Insights/activityLogAlerts@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string: The location of the resource. Azure Activity Log Alert rules are supported on Global, West Europe and North Europe regions.
* **name**: string {pattern: "^[-\w\._\(\)]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AlertRuleProperties](#alertruleproperties): The Activity Log Alert rule properties of the resource.
* **tags**: [AzureResourceTags](#azureresourcetags): The tags of the resource.
* **type**: 'Microsoft.Insights/activityLogAlerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Insights/metricAlerts@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [MicrosoftCommonIdentity](#microsoftcommonidentity): The identity of the resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MetricAlertProperties](#metricalertproperties) (Required): The alert rule properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/metricAlerts' (ReadOnly, DeployTimeConstant): The resource type

## ActionGroup
### Properties
* **actionGroupId**: string (Required): The resource ID of the Action Group. This cannot be null or empty.
* **actionProperties**: [ActionGroupActionProperties](#actiongroupactionproperties): Predefined list of properties and configuration items for the action group.
* **webhookProperties**: [ActionGroupWebhookProperties](#actiongroupwebhookproperties): the dictionary of custom properties to include with the post operation. These data are appended to the webhook payload.

## ActionGroupActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActionGroupWebhookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActionList
### Properties
* **actionGroups**: [ActionGroup](#actiongroup)[]: The list of the Action Groups.

## AlertRuleAllOfCondition
### Properties
* **allOf**: [AlertRuleAnyOfOrLeafCondition](#alertruleanyoforleafcondition)[] (Required): The list of Activity Log Alert rule conditions.

## AlertRuleAnyOfOrLeafCondition
### Properties
* **anyOf**: [AlertRuleLeafCondition](#alertruleleafcondition)[]: An Activity Log Alert rule condition that is met when at least one of its member leaf conditions are met.
* **containsAny**: string[]: The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
* **equals**: string: The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
* **field**: string: The name of the Activity Log event's field that this condition will examine.
The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.

## AlertRuleLeafCondition
### Properties
* **containsAny**: string[]: The value of the event's field will be compared to the values in this array (case-insensitive) to determine if the condition is met.
* **equals**: string: The value of the event's field will be compared to this value (case-insensitive) to determine if the condition is met.
* **field**: string: The name of the Activity Log event's field that this condition will examine.
The possible values for this field are (case-insensitive): 'resourceId', 'category', 'caller', 'level', 'operationName', 'resourceGroup', 'resourceProvider', 'status', 'subStatus', 'resourceType', or anything beginning with 'properties'.

## AlertRuleProperties
### Properties
* **actions**: [ActionList](#actionlist) (Required): The actions that will activate when the condition is met.
* **condition**: [AlertRuleAllOfCondition](#alertruleallofcondition) (Required): The condition that will cause this alert to activate.
* **description**: string: A description of this Activity Log Alert rule.
* **enabled**: bool: Indicates whether this Activity Log Alert rule is enabled. If an Activity Log Alert rule is not enabled, then none of its actions will be activated.
* **scopes**: string[]: A list of resource IDs that will be used as prefixes. The alert will only apply to Activity Log events with resource IDs that fall under one of these prefixes. This list must include at least one item.
* **tenantScope**: string: The tenant GUID. Must be provided for tenant-level and management group events rules.

## AzureResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DynamicThresholdFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int (Required): The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods.
* **numberOfEvaluationPeriods**: int (Required): The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points.

## MetricAlertAction
### Properties
* **actionGroupId**: string: The id of the action group to use.
* **webHookProperties**: [MetricAlertActionWebHookProperties](#metricalertactionwebhookproperties): This field allows specifying custom properties, which would be appended to the alert payload sent as input to the webhook.

## MetricAlertActionWebHookProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertCriteria
* **Discriminator**: odata.type

### Base Properties

### MetricAlertMultipleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MultiMetricCriteria](#multimetriccriteria)[]: The list of multiple metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### PromQLCriteria
#### Properties
* **allOf**: [MultiPromQLCriteria](#multipromqlcriteria)[]: The list of promQL criteria. Alert will be raised when all conditions are met.
* **failingPeriods**: [QueryFailingPeriods](#queryfailingperiods): Configuration for failing periods in query-based alerts.
* **odata.type**: 'Microsoft.Azure.Monitor.PromQLCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### MetricAlertSingleResourceMultipleMetricCriteria
#### Properties
* **allOf**: [MetricCriteria](#metriccriteria)[]: The list of metric criteria for this 'all of' operation.
* **odata.type**: 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned

### WebtestLocationAvailabilityCriteria
#### Properties
* **componentId**: string (Required): The Application Insights resource Id.
* **failedLocationCount**: int (Required): The number of failed locations.
* **odata.type**: 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria' (Required): Specifies the type of the alert criteria. Previously undocumented values might be returned
* **webTestId**: string (Required): The Application Insights web test Id.


## MetricAlertProperties
### Properties
* **actionProperties**: [MetricAlertPropertiesActionProperties](#metricalertpropertiesactionproperties): The properties of an action properties.
* **actions**: [MetricAlertAction](#metricalertaction)[]: The array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **autoMitigate**: bool: The flag that indicates whether the alert should be auto resolved or not. The default is true.
* **criteria**: [MetricAlertCriteria](#metricalertcriteria) (Required): Defines the specific alert criteria information.
* **customProperties**: [MetricAlertPropertiesCustomProperties](#metricalertpropertiescustomproperties): The properties of an alert payload.
* **description**: string: The description of the metric alert that will be included in the alert email.
* **enabled**: bool (Required): The flag that indicates whether the metric alert is enabled.
* **evaluationFrequency**: string (Required): How often the metric alert is evaluated represented in ISO 8601 duration format.
* **isMigrated**: bool (ReadOnly): The value indicating whether this alert rule is migrated.
* **lastUpdatedTime**: string (ReadOnly): Last time the rule was updated in ISO8601 format.
* **resolveConfiguration**: [ResolveConfiguration](#resolveconfiguration): The configuration for how the alert is resolved. Applicable for PromQLCriteria.
* **scopes**: string[] (Required): The list of resource id's that this metric alert is scoped to. You cannot change the scope of a metric rule based on logs.
* **severity**: int (Required): Alert severity {0, 1, 2, 3, 4}
* **targetResourceRegion**: string: The region of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **targetResourceType**: string: The resource type of the target resource(s) on which the alert is created/updated. Mandatory if the scope contains a subscription, resource group, or more than one resource.
* **windowSize**: string: The period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.

## MetricAlertPropertiesActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricAlertPropertiesCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MetricCriteria
### Properties
* **criterionType**: 'DynamicThresholdCriterion' | 'StaticThresholdCriterion' | string (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): The criteria operator. Previously undocumented values might be returned
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **threshold**: int (Required): The criteria threshold value that activates the alert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): The criteria time aggregation types. Previously undocumented values might be returned
### Additional Properties
* **Additional Properties Type**: any

## MetricDimension
### Properties
* **name**: string (Required): Name of the dimension.
* **operator**: string (Required): The dimension operator. Only 'Include' and 'Exclude' are supported
* **values**: string[] (Required): List of dimension values.

## MicrosoftCommonIdentity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity.
* **userAssignedIdentities**: [MicrosoftCommonIdentityUserAssignedIdentities](#microsoftcommonidentityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## MicrosoftCommonIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [MicrosoftCommonUserIdentityProperties](#microsoftcommonuseridentityproperties)

## MicrosoftCommonUserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client ID of resource identity.
* **principalId**: string (ReadOnly): The principal ID of resource identity.

## MultiMetricCriteria
* **Discriminator**: criterionType

### Base Properties
* **dimensions**: [MetricDimension](#metricdimension)[]: List of dimension conditions.
* **metricName**: string (Required): Name of the metric.
* **metricNamespace**: string: Namespace of the metric.
* **name**: string (Required): Name of the criteria.
* **skipMetricValidation**: bool: Allows creating an alert rule on a custom metric that isn't yet emitted, by causing the metric validation to be skipped.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string (Required): The criteria time aggregation types. Previously undocumented values might be returned

### DynamicMetricCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' | string (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. Previously undocumented values might be returned
* **criterionType**: 'DynamicThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **failingPeriods**: [DynamicThresholdFailingPeriods](#dynamicthresholdfailingperiods) (Required): The minimum number of violations required within the selected lookback time window required to raise an alert.
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' | string (Required): The operator used to compare the metric value against the threshold. Previously undocumented values might be returned

### MetricCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string (Required): The criteria operator. Previously undocumented values might be returned
* **threshold**: int (Required): The criteria threshold value that activates the alert.


## MultiPromQLCriteria
* **Discriminator**: criterionType

### Base Properties
* **name**: string (Required): Name of the criteria.
* **query**: string (Required): The query used to evaluate the alert rule

### DynamicPromQLCriteria
#### Properties
* **alertSensitivity**: 'High' | 'Low' | 'Medium' | string (Required): The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern. Previously undocumented values might be returned
* **criterionType**: 'DynamicThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned
* **ignoreDataBefore**: string: Use this option to set the date from which to start learning the metric historical data and calculate the dynamic thresholds (in ISO8601 format)
* **operator**: 'GreaterOrLessThan' | 'GreaterThan' | 'LessThan' | string (Required): The operator used to compare the metric value against the threshold. Previously undocumented values might be returned

### StaticPromQLCriteria
#### Properties
* **criterionType**: 'StaticThresholdCriterion' (Required): Specifies the type of threshold criteria. Previously undocumented values might be returned


## QueryFailingPeriods
### Properties
* **for**: string (Required): The amount of time (in ISO 8601 duration format) alert must be active before firing.

## ResolveConfiguration
### Properties
* **autoResolved**: bool (Required): Indicates whether the alert should be auto resolved
* **timeToResolve**: string: The time (in ISO 8601 duration format) after which the alert should be auto resolved

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

