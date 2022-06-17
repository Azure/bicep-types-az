# Microsoft.WorkloadMonitor @ 2018-08-31-preview

## Resource Microsoft.WorkloadMonitor/components@2018-08-31-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ComponentProperties](#componentproperties) (ReadOnly): Properties of the component.
* **type**: 'Microsoft.WorkloadMonitor/components' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.WorkloadMonitor/monitorInstances@2018-08-31-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorInstanceProperties](#monitorinstanceproperties) (ReadOnly): Properties of the monitor instance.
* **type**: 'Microsoft.WorkloadMonitor/monitorInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.WorkloadMonitor/monitors@2018-08-31-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [MonitorProperties](#monitorproperties) (ReadOnly): Properties of monitor instance
* **type**: 'Microsoft.WorkloadMonitor/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.WorkloadMonitor/notificationSettings@2018-08-31-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-08-31-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' | string (Required, DeployTimeConstant): The resource name
* **properties**: [NotificationSettingProperties](#notificationsettingproperties) (ReadOnly): Properties of Notification Settings
* **type**: 'Microsoft.WorkloadMonitor/notificationSettings' (ReadOnly, DeployTimeConstant): The resource type

## Component
### Properties
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [ComponentProperties](#componentproperties) (ReadOnly): Properties of the component.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## ComponentProperties
### Properties
* **aggregateProperties**: [ComponentPropertiesAggregateProperties](#componentpropertiesaggregateproperties) (ReadOnly): Properties requested in aggregation queries.
* **children**: [Component](#component)[] (ReadOnly): component children.
* **componentName**: string (ReadOnly): Name of the component.
* **componentTypeGroupCategory**: string (ReadOnly): Component type group category. Classification of component type groups into a logical category. e.g. Network, Disk, Memory, CPU.
* **componentTypeId**: string (ReadOnly): ID of the component type.
* **componentTypeName**: string (ReadOnly): Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc.
* **healthState**: 'Error' | 'Success' | 'Uninitialized' | 'Unknown' | 'Warning' (ReadOnly): Health state of the component.
* **healthStateCategory**: 'CustomGroup' | 'Identity' | string (ReadOnly): Category of component's health state.
* **healthStateChangesEndTime**: string (ReadOnly): End time for health state changes.
* **healthStateChangesStartTime**: string (ReadOnly): Start time for health state changes.
* **lastHealthStateChangeTime**: string (ReadOnly): Time of last health state change.
* **solutionId**: string (ReadOnly): ID of the OMS solution this component belong to.
* **vmId**: string (ReadOnly): ID of the VM this component belongs to.
* **vmName**: string (ReadOnly): Name of the VM this component belongs to.
* **vmTags**: [ComponentPropertiesVmTags](#componentpropertiesvmtags) (ReadOnly): Tags on the VM this component belongs to.
* **workloadType**: 'Apache' | 'BaseOS' | 'IIS' | 'SQL' | string (ReadOnly): Type of the workload.
* **workspaceId**: string (ReadOnly): ID of the workspace.

## ComponentPropertiesAggregateProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComponentPropertiesVmTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## HealthStateChange
### Properties
* **healthState**: 'Error' | 'Success' | 'Uninitialized' | 'Unknown' | 'Warning' (ReadOnly): Health state of monitor instance.
* **healthStateChangeTime**: string (ReadOnly): Time at which this Health state was reached.

## MonitorCriteria
### Properties
* **comparisonOperator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (ReadOnly): Comparison enum on threshold of this criteria
* **healthState**: 'Error' | 'Success' | 'Uninitialized' | 'Unknown' | 'Warning' (ReadOnly): Target health state of the criteria
* **threshold**: int (ReadOnly): Threshold value for this criteria

## MonitorInstance
### Properties
* **etag**: string (ReadOnly): For optimistic concurrency control.
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [MonitorInstanceProperties](#monitorinstanceproperties) (ReadOnly): Properties of the monitor instance.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## MonitorInstanceProperties
### Properties
* **aggregateProperties**: [MonitorInstancePropertiesAggregateProperties](#monitorinstancepropertiesaggregateproperties) (ReadOnly): Properties requested in aggregation queries.
* **alertGeneration**: 'Disabled' | 'Enabled' | string (ReadOnly): Generates alert or not.
* **children**: [MonitorInstance](#monitorinstance)[] (ReadOnly): Health instance children.
* **componentId**: string (ReadOnly): ID of the component.
* **componentName**: string (ReadOnly): Name of the component.
* **componentTypeId**: string (ReadOnly): ID of the component type.
* **componentTypeName**: string (ReadOnly): Name of the component type. Qualifies the type of component such as whether it is a SQL database, logical disk, website, etc.
* **healthState**: 'Error' | 'Success' | 'Uninitialized' | 'Unknown' | 'Warning' (ReadOnly): Health state of monitor instance.
* **healthStateCategory**: 'CustomGroup' | 'Identity' | string (ReadOnly): Category of monitor instance's health state.
* **healthStateChanges**: [HealthStateChange](#healthstatechange)[] (ReadOnly): Health state changes.
* **healthStateChangesEndTime**: string (ReadOnly): End time for health state changes.
* **healthStateChangesStartTime**: string (ReadOnly): Start time for health state changes.
* **lastHealthStateChangeTime**: string (ReadOnly): Time of last health state change.
* **monitorCategory**: 'AvailabilityHealth' | 'Configuration' | 'EntityHealth' | 'PerformanceHealth' | 'Security' (ReadOnly): Monitor type category. Indicates the attribute of the component that the health criteria monitors such as Performance, Availability, etc.
* **monitorId**: string (ReadOnly): ID of the monitor instance.
* **monitorName**: string (ReadOnly): Name of the monitor.
* **monitorType**: 'Aggregate' | 'Dependency' | 'Unit' (ReadOnly): Type of the monitor. The qualifier for the health criteria depending on the functionality it performs such as Unit, Aggregate, Dependency.
* **solutionId**: string (ReadOnly): ID of the OMS solution this health instance belong to.
* **workloadType**: 'Apache' | 'BaseOS' | 'IIS' | 'SQL' | string (ReadOnly): Type of the workload.
* **workspaceId**: string (ReadOnly): ID of the workspace.

## MonitorInstancePropertiesAggregateProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MonitorProperties
### Properties
* **alertGeneration**: 'Disabled' | 'Enabled' | string (ReadOnly): Generates alerts or not
* **componentTypeDisplayName**: string (ReadOnly): Component Type Display Name of the monitor
* **componentTypeId**: string (ReadOnly): Component Type Id of monitor
* **componentTypeName**: string (ReadOnly): Component Type Name of monitor
* **criteria**: [MonitorCriteria](#monitorcriteria)[] (ReadOnly): Collection of MonitorCriteria. For PATCH calls, instead of partial list, complete list of expected criteria should be passed for proper updating.
* **description**: string (ReadOnly): Description of the monitor
* **documentationURL**: string (ReadOnly): URL pointing to the documentation of the monitor
* **frequency**: int (ReadOnly): Frequency at which monitor condition is evaluated
* **lookbackDuration**: int (ReadOnly): The duration in minutes in the past during which the monitor is evaluated
* **monitorCategory**: 'AvailabilityHealth' | 'Configuration' | 'EntityHealth' | 'PerformanceHealth' | 'Security' (ReadOnly): Category of the monitor
* **monitorDisplayName**: string (ReadOnly): User friendly display name of the monitor
* **monitorId**: string (ReadOnly): ID of the monitor
* **monitorName**: string (ReadOnly): Name of the monitor
* **monitorState**: 'Disabled' | 'Enabled' (ReadOnly): Is the monitor state enabled or disabled
* **monitorType**: 'Aggregate' | 'Dependency' | 'Unit' (ReadOnly): Type of the monitor
* **parentMonitorDisplayName**: string (ReadOnly): User friendly display name of the parent monitor
* **parentMonitorName**: string (ReadOnly): Name of the parent monitor
* **signalName**: string (ReadOnly): Name of the signal on which this monitor is configured.
* **signalType**: string (ReadOnly): Type of the signal on which this monitor is configured.

## NotificationSettingProperties
### Properties
* **actionGroupResourceIds**: string[] (ReadOnly): List of action group resource ids to be notified

