# Microsoft.WorkloadMonitor @ 2020-01-13-preview

## Resource Microsoft.WorkloadMonitor/monitors@2020-01-13-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthMonitorProperties](#healthmonitorproperties) (ReadOnly): Properties of the monitor's health status.
* **type**: 'Microsoft.WorkloadMonitor/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.WorkloadMonitor/monitors/history@2020-01-13-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthMonitorStateChangeProperties](#healthmonitorstatechangeproperties) (ReadOnly): Properties of the monitor's state change.
* **type**: 'Microsoft.WorkloadMonitor/monitors/history' (ReadOnly, DeployTimeConstant): The resource type

## HealthMonitorProperties
### Properties
* **currentMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): Current health state of the monitor.
* **currentStateFirstObservedTimestamp**: string: Timestamp of the monitor's last health state change.
* **evaluationTimestamp**: string: Timestamp of the monitor's last health evaluation.
* **evidence**: any: Evidence validating the monitor's current health state.
* **lastReportedTimestamp**: string: Timestamp of the monitor's last reported health state.
* **monitorConfiguration**: any: The configuration settings at the time of the monitor's health evaluation.
* **monitoredObject**: string: Dynamic monitored object of the monitor.
* **monitorName**: string: Human-readable name of the monitor.
* **monitorType**: string: Type of the monitor.
* **parentMonitorName**: string: Name of the parent monitor.
* **previousMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): Previous health state of the monitor.

## HealthMonitorStateChangeProperties
### Properties
* **currentMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): Current health state of the monitor.
* **currentStateFirstObservedTimestamp**: string: Timestamp of the monitor's last health state change.
* **evaluationTimestamp**: string: Timestamp of the monitor's last health evaluation.
* **evidence**: any: Evidence validating the monitor's current health state.
* **monitorConfiguration**: any: The configuration settings at the time of the monitor's health evaluation.
* **monitoredObject**: string: Dynamic monitored object of the monitor.
* **monitorName**: string: Human-readable name of the monitor.
* **monitorType**: string: Type of the monitor.
* **previousMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): Previous health state of the monitor.

