# Microsoft.WorkloadMonitor @ 2020-01-13-preview

## Resource Microsoft.WorkloadMonitor/monitors@2020-01-13-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthMonitorProperties](#healthmonitorproperties) (ReadOnly): Properties of the monitor.
* **type**: 'Microsoft.WorkloadMonitor/monitors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.WorkloadMonitor/monitors/history@2020-01-13-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2020-01-13-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [HealthMonitorStateChangeProperties](#healthmonitorstatechangeproperties) (ReadOnly): Properties of the monitor.
* **type**: 'Microsoft.WorkloadMonitor/monitors/history' (ReadOnly, DeployTimeConstant): The resource type

## HealthMonitorProperties
### Properties
* **currentMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): One of health states - healthy, critical, warning, unknown, none, disabled.
* **currentStateFirstObservedTimestamp**: string (ReadOnly): Timestamp of the monitor's last health state change.
* **evaluationTimestamp**: string (ReadOnly): Timestamp of the monitor's last health evaluation.
* **evidence**: any (ReadOnly): Any object
* **lastReportedTimestamp**: string (ReadOnly): Timestamp of the monitor's last reported health state.
* **monitorConfiguration**: any (ReadOnly): Any object
* **monitoredObject**: string (ReadOnly): Dynamic monitored object of the monitor.
* **monitorName**: string (ReadOnly): Human-readable name of the monitor.
* **monitorType**: string (ReadOnly): Type of the monitor.
* **parentMonitorName**: string (ReadOnly): Name of the parent monitor.
* **previousMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): One of health states - healthy, critical, warning, unknown, none, disabled.

## HealthMonitorStateChangeProperties
### Properties
* **currentMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): One of health states - healthy, critical, warning, unknown, none, disabled.
* **currentStateFirstObservedTimestamp**: string (ReadOnly): Timestamp of the monitor's last health state change.
* **evaluationTimestamp**: string (ReadOnly): Timestamp of the monitor's last health evaluation.
* **evidence**: any (ReadOnly): Any object
* **monitorConfiguration**: any (ReadOnly): Any object
* **monitoredObject**: string (ReadOnly): Dynamic monitored object of the monitor.
* **monitorName**: string (ReadOnly): Human-readable name of the monitor.
* **monitorType**: string (ReadOnly): Type of the monitor.
* **previousMonitorState**: 'Critical' | 'Disabled' | 'Healthy' | 'None' | 'Unknown' | 'Warning' | string (ReadOnly): One of health states - healthy, critical, warning, unknown, none, disabled.

