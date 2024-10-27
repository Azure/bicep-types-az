# Microsoft.Insights @ 2023-12-01

## Resource Microsoft.Insights/scheduledQueryRules@2023-12-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-12-01' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [Identity](#identity): The identity of the resource.
* **kind**: 'LogAlert' | 'LogToMetric' | string: Indicates the type of scheduled query rule. The default is LogAlert.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^#<>%&:\?/{}*]{1,260}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledQueryRuleProperties](#scheduledqueryruleproperties) (Required): The rule properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): SystemData of ScheduledQueryRule.
* **tags**: [ScheduledQueryRuleResourceTags](#scheduledqueryruleresourcetags): Resource tags.
* **type**: 'Microsoft.Insights/scheduledQueryRules' (ReadOnly, DeployTimeConstant): The resource type

## Actions
### Properties
* **actionGroups**: string[]: Action Group resource Ids to invoke when the alert fires.
* **actionProperties**: [ActionsActionProperties](#actionsactionproperties): The properties of an action properties.
* **customProperties**: [ActionsCustomProperties](#actionscustomproperties): The properties of an alert payload.

## ActionsActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ActionsCustomProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Condition
### Properties
* **dimensions**: [Dimension](#dimension)[]: List of Dimensions conditions
* **failingPeriods**: [ConditionFailingPeriods](#conditionfailingperiods): The minimum number of violations required within the selected lookback time window required to raise an alert. Relevant only for rules of the kind LogAlert.
* **metricMeasureColumn**: string: The column containing the metric measure number. Relevant only for rules of the kind LogAlert.
* **metricName**: string: The name of the metric to be sent. Relevant and required only for rules of the kind LogToMetric.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | string: The criteria operator. Relevant and required only for rules of the kind LogAlert.
* **query**: string: Log query alert
* **resourceIdColumn**: string: The column containing the resource id. The content of the column must be a uri formatted as resource id. Relevant only for rules of the kind LogAlert.
* **threshold**: int: the criteria threshold value that activates the alert. Relevant and required only for rules of the kind LogAlert.
* **timeAggregation**: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total' | string: Aggregation type. Relevant and required only for rules of the kind LogAlert.

## ConditionFailingPeriods
### Properties
* **minFailingPeriodsToAlert**: int: The number of violations to trigger an alert. Should be smaller or equal to numberOfEvaluationPeriods. Default value is 1
* **numberOfEvaluationPeriods**: int: The number of aggregated lookback points. The lookback time window is calculated based on the aggregation granularity (windowSize) and the selected number of aggregated points. Default value is 1

## Dimension
### Properties
* **name**: string (Required): Name of the dimension
* **operator**: 'Exclude' | 'Include' | string (Required): Operator for dimension values
* **values**: string[] (Required): List of dimension values

## Identity
### Properties
* **principalId**: string (ReadOnly): The principal ID of resource identity.
* **tenantId**: string (ReadOnly): The tenant ID of resource.
* **type**: 'None' | 'SystemAssigned' | 'UserAssigned' (Required): Type of managed service identity.
* **userAssignedIdentities**: [IdentityUserAssignedIdentities](#identityuserassignedidentities): The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.

## IdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserIdentityProperties](#useridentityproperties)

## RuleResolveConfiguration
### Properties
* **autoResolved**: bool: The flag that indicates whether or not to auto resolve a fired alert.
* **timeToResolve**: string: The duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.

## ScheduledQueryRuleCriteria
### Properties
* **allOf**: [Condition](#condition)[]: A list of conditions to evaluate against the specified scopes

## ScheduledQueryRuleProperties
### Properties
* **actions**: [Actions](#actions): Actions to invoke when the alert fires.
* **autoMitigate**: bool: The flag that indicates whether the alert should be automatically resolved or not. The default is true. Relevant only for rules of the kind LogAlert.
* **checkWorkspaceAlertsStorageConfigured**: bool: The flag which indicates whether this scheduled query rule should be stored in the customer's storage. The default is false. Relevant only for rules of the kind LogAlert.
* **createdWithApiVersion**: string (ReadOnly): The api-version used when creating this alert rule
* **criteria**: [ScheduledQueryRuleCriteria](#scheduledqueryrulecriteria): The rule criteria that defines the conditions of the scheduled query rule.
* **description**: string: The description of the scheduled query rule.
* **displayName**: string: The display name of the alert rule
* **enabled**: bool: The flag which indicates whether this scheduled query rule is enabled. Value should be true or false
* **evaluationFrequency**: string: How often the scheduled query rule is evaluated represented in ISO 8601 duration format. Relevant and required only for rules of the kind LogAlert.
* **isLegacyLogAnalyticsRule**: bool (ReadOnly): True if alert rule is legacy Log Analytic rule
* **isWorkspaceAlertsStorageConfigured**: bool (ReadOnly): The flag which indicates whether this scheduled query rule has been configured to be stored in the customer's storage. The default is false.
* **muteActionsDuration**: string: Mute actions for the chosen period of time (in ISO 8601 duration format) after the alert is fired. Relevant only for rules of the kind LogAlert.
* **overrideQueryTimeRange**: string: If specified then overrides the query time range (default is WindowSize*NumberOfEvaluationPeriods). Relevant only for rules of the kind LogAlert.
* **resolveConfiguration**: [RuleResolveConfiguration](#ruleresolveconfiguration): Defines the configuration for resolving fired alerts. Relevant only for rules of the kind LogAlert.
* **scopes**: string[]: The list of resource id's that this scheduled query rule is scoped to.
* **severity**: int: Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. Relevant and required only for rules of the kind LogAlert.
* **skipQueryValidation**: bool: The flag which indicates whether the provided query should be validated or not. The default is false. Relevant only for rules of the kind LogAlert.
* **targetResourceTypes**: string[]: List of resource type of the target resource(s) on which the alert is created/updated. For example if the scope is a resource group and targetResourceTypes is Microsoft.Compute/virtualMachines, then a different alert will be fired for each virtual machine in the resource group which meet the alert criteria. Relevant only for rules of the kind LogAlert
* **windowSize**: string: The period of time (in ISO 8601 duration format) on which the Alert query will be executed (bin size). Relevant and required only for rules of the kind LogAlert.

## ScheduledQueryRuleResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UserIdentityProperties
### Properties
* **clientId**: string (ReadOnly): The client id of user assigned identity.
* **principalId**: string (ReadOnly): The principal id of user assigned identity.

