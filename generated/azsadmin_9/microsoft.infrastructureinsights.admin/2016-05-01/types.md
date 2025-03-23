# Microsoft.InfrastructureInsights.Admin @ 2016-05-01

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [RegionHealthModel](#regionhealthmodel) (ReadOnly): Contains information related to the health of a region.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths/alerts@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AlertModel](#alertmodel) (ReadOnly): Contains information related to alerts.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths/alerts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths/serviceHealths@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ServiceHealthModel](#servicehealthmodel) (ReadOnly): Holds information about the health of a service.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths/serviceHealths' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.InfrastructureInsights.Admin/regionHealths/serviceHealths/resourceHealths@2016-05-01 (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2016-05-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (ReadOnly): The Azure Region where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ResourceHealthModel](#resourcehealthmodel) (ReadOnly): Health information related to a resource.
* **tags**: [TrackedResourceTags](#trackedresourcetags) (ReadOnly): Resource tags.
* **type**: 'Microsoft.InfrastructureInsights.Admin/regionHealths/serviceHealths/resourceHealths' (ReadOnly, DeployTimeConstant): The resource type

## AlertModel
### Properties
* **alertId**: string: Gets or sets the ID of the alert.
* **alertProperties**: [AlertModelAlertProperties](#alertmodelalertproperties): Properties of the alert.
* **closedByUserAlias**: string: User alias who closed the alert.
* **closedTimestamp**: string: Timestamp when the alert was closed.
* **createdTimestamp**: string: Timestamp when the alert was created.
* **description**: [Dictionary](#dictionary)[]: Description of the alert.
* **faultId**: string: Gets or sets the fault ID of the alert.
* **faultTypeId**: string: Gets or sets the fault type ID of the alert.
* **hasValidRemediationAction**: bool: Indicates if the alert can be remediated.
* **impactedResourceDisplayName**: string: Display name for the impacted item.
* **impactedResourceId**: string: Gets or sets the Resource ID for the impacted item.
* **lastUpdatedTimestamp**: string: Timestamp when the alert was last updated.
* **remediation**: [Dictionary](#dictionary)[]: Gets or sets the admin friendly remediation instructions for the alert.
* **resourceProviderRegistrationId**: string: Gets or sets the registration ID of the service the alert belongs to.
* **resourceRegistrationId**: string: Gets or sets the registration ID of the resource associated with the alert. If the alert is not associated with a resource, the resource registration ID is null.
* **severity**: string: Severity of the alert.
* **state**: string: State of the alert.
* **title**: string: Gets or sets the Resource ID for the impacted item.

## AlertModelAlertProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AlertSummary
### Properties
* **criticalAlertCount**: int: The number of critical alerts for the service.
* **warningAlertCount**: int: The number of warning alerts for the service.

## Dictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Dictionary
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Metrics
### Properties
* **maCounterName**: string: Name of the counter.
* **name**: string: Name of the usage metric.
* **observedTimestamp**: string: Time counter was observed.
* **sourceName**: 'PhysicalNode' | 'ResourceProvider' | 'VirtualMachine' | string: Name of the source.
* **sourceType**: string: Type of the source.
* **unit**: 'B' | 'GB' | 'KB' | 'MB' | 'One' | 'Percentage' | 'TB' | string: Unit for the metric.
* **value**: int: Name of the usage metric.

## RegionHealthModel
### Properties
* **alertSummary**: [AlertSummary](#alertsummary): Summary of alerts.
* **usageMetrics**: [UsageMetrics](#usagemetrics)[]: List of usage metrics for the region.

## ResourceHealthModel
### Properties
* **alertSummary**: [AlertSummary](#alertsummary): Alert summary.
* **healthState**: string: Health state.
* **namespace**: string: Namespace of the health resource.
* **registrationId**: string: Registration ID.
* **resourceDisplayName**: string: Resource display name.
* **resourceLocation**: string: Resource location.
* **resourceName**: string: Resource name.
* **resourceType**: string: Resource type.
* **resourceURI**: string: Gets or sets the resource URI.
* **routePrefix**: string: Route prefix.
* **rpRegistrationId**: string: Gets or sets the resource provider registration ID.
* **usageMetrics**: [UsageMetrics](#usagemetrics)[]: Usage metrics.

## ServiceHealthModel
### Properties
* **alertSummary**: [AlertSummary](#alertsummary): Alert summary.
* **displayName**: string: Name of the service.
* **healthState**: string: Health state.
* **infraURI**: string: The route prefix to the service.
* **namespace**: string: Namespace of the health resource.
* **registrationId**: string: Registration ID.
* **routePrefix**: string: Route prefix.
* **serviceLocation**: string: Location of the service.

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## UsageMetrics
### Properties
* **metricsValue**: [Metrics](#metrics)[]: List of usage metrics.
* **name**: string: Name of the usage metric.

