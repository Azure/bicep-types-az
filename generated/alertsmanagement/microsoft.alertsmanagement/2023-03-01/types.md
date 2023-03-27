# Microsoft.AlertsManagement @ 2023-03-01

## Resource Microsoft.AlertsManagement/prometheusRuleGroups@2023-03-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2023-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[^:@/#{}%&+*<>?]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrometheusRuleGroupProperties](#prometheusrulegroupproperties) (Required): The Prometheus rule group properties of the resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.AlertsManagement/prometheusRuleGroups' (ReadOnly, DeployTimeConstant): The resource type

## PrometheusRule
### Properties
* **actions**: [PrometheusRuleGroupAction](#prometheusrulegroupaction)[]: Actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
* **alert**: string: Alert rule name.
* **annotations**: [PrometheusRuleAnnotations](#prometheusruleannotations): The annotations clause specifies a set of informational labels that can be used to store longer additional information such as alert descriptions or runbook links. The annotation values can be templated.
* **enabled**: bool: Enable/disable rule.
* **expression**: string (Required): The PromQL expression to evaluate. https://prometheus.io/docs/prometheus/latest/querying/basics/. Evaluated periodically as given by 'interval', and the result recorded as a new set of time series with the metric name as given by 'record'.
* **for**: string: The amount of time alert must be active before firing.
* **labels**: [PrometheusRuleLabels](#prometheusrulelabels): Labels to add or overwrite before storing the result.
* **record**: string: Recorded metrics name.
* **resolveConfiguration**: [PrometheusRuleResolveConfiguration](#prometheusruleresolveconfiguration): Defines the configuration for resolving fired alerts. Only relevant for alerts.
* **severity**: int: The severity of the alerts fired by the rule. Must be between 0 and 4.

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
* **clusterName**: string: Apply rule to data from a specific cluster.
* **description**: string: Rule group description.
* **enabled**: bool: Enable/disable rule group.
* **interval**: string: The interval in which to run the Prometheus rule group represented in ISO 8601 duration format. Should be between 1 and 15 minutes
* **rules**: [PrometheusRule](#prometheusrule)[] (Required): Defines the rules in the Prometheus rule group.
* **scopes**: string[] (Required): Target Azure Monitor workspaces resource ids. This api-version is currently limited to creating with one scope. This may change in future.

## PrometheusRuleLabels
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PrometheusRuleResolveConfiguration
### Properties
* **autoResolved**: bool: Enable alert auto-resolution.
* **timeToResolve**: string: Alert auto-resolution timeout.

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

