# Microsoft.AlertsManagement @ 2021-07-22-preview

## Resource Microsoft.AlertsManagement/prometheusRuleGroups@2021-07-22-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-07-22-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrometheusRuleGroupProperties](#prometheusrulegroupproperties) (Required): An alert rule.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AlertsManagement/prometheusRuleGroups' (ReadOnly, DeployTimeConstant): The resource type

## PrometheusRuleGroupProperties
### Properties
* **description**: string: the description of the Prometheus rule group that will be included in the alert email.
* **interval**: string: the interval in which to run the Prometheus rule group represented in ISO 8601 duration format.
* **rules**: [PrometheusRule](#prometheusrule)[] (Required): defines the rules in the Prometheus rule group.
* **scopes**: string[] (Required): the list of resource id's that this rule group is scoped to.

## PrometheusRule
### Properties
* **actions**: [PrometheusRuleGroupAction](#prometheusrulegroupaction)[]: the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **alert**: string: the name of the alert rule.
* **annotations**: [PrometheusRuleAnnotations](#prometheusruleannotations): annotations for rule group
* **expression**: string: the expression to run for the rule.
* **for**: string: the amount of time alert must be active before firing.
* **labels**: [PrometheusRuleLabels](#prometheusrulelabels): labels for rule group
* **record**: string: the name of the recording rule.
* **resolveConfiguration**: [PrometheusRuleResolveConfiguration](#prometheusruleresolveconfiguration): Specifies the Prometheus alert rule configuration.
* **severity**: int: the severity of the alerts fired by the rule.

## PrometheusRuleGroupAction
### Properties
* **actionGroupId**: string: the id of the action group to use.
* **actionProperties**: [PrometheusRuleGroupActionProperties](#prometheusrulegroupactionproperties): The properties of an action group object.

## PrometheusRuleGroupActionProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleAnnotations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleResolveConfiguration
### Properties
* **autoResolved**: bool: the flag that indicates whether or not to auto resolve a fired alert.
* **timeToResolve**: string: the duration a rule must evaluate as healthy before the fired alert is automatically resolved represented in ISO 8601 duration format.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

