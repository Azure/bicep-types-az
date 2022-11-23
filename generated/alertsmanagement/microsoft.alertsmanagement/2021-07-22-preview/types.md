# Microsoft.AlertsManagement @ 2021-07-22-preview

## Resource Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrometheusRuleGroupProperties](#prometheusrulegroupproperties) (Required): The Prometheus rule group properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AlertsManagement/prometheusRuleGroups' (ReadOnly, DeployTimeConstant): The resource type

## PrometheusRule
### Properties
* **actions**: [PrometheusRuleGroupAction](#prometheusrulegroupaction)[]: The array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved. Only relevant for alerts.
* **alert**: string: the name of the alert rule.
* **annotations**: [PrometheusRuleAnnotations](#prometheusruleannotations): annotations for rule group. Only relevant for alerts.
* **enabled**: bool: the flag that indicates whether the Prometheus rule is enabled.
* **expression**: string (Required): the expression to run for the rule.
* **for**: string: the amount of time alert must be active before firing. Only relevant for alerts.
* **labels**: [PrometheusRuleLabels](#prometheusrulelabels): labels for rule group. Only relevant for alerts.
* **record**: string: the name of the recording rule.
* **resolveConfiguration**: [PrometheusRuleResolveConfiguration](#prometheusruleresolveconfiguration): defines the configuration for resolving fired alerts. Only relevant for alerts.
* **severity**: int: the severity of the alerts fired by the rule. Only relevant for alerts.

## PrometheusRuleAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleGroupAction
### Properties
* **actionGroupId**: string: The resource id of the action group to use.
* **actionProperties**: [PrometheusRuleGroupActionProperties](#prometheusrulegroupactionproperties): The properties of an action group object.

## PrometheusRuleGroupActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleGroupProperties
### Properties
* **clusterName**: string: the cluster name of the rule group evaluation.
* **description**: string: the description of the Prometheus rule group that will be included in the alert email.
* **enabled**: bool: the flag that indicates whether the Prometheus rule group is enabled.
* **interval**: string: the interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
* **rules**: [PrometheusRule](#prometheusrule)[] (Required): defines the rules in the Prometheus rule group.
* **scopes**: string[] (Required): the list of resource id's that this rule group is scoped to.

## PrometheusRuleLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleResolveConfiguration
### Properties
* **autoResolved**: bool: the flag that indicates whether or not to auto resolve a fired alert.
* **timeToResolve**: string: the duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format. Should be between 1 and 15 minutes

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

