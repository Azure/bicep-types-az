# Microsoft.DurableTask @ 2025-04-01-preview

## Resource Microsoft.DurableTask/schedulers@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchedulerProperties](#schedulerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DurableTask/schedulers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/retentionPolicies@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RetentionPolicyProperties](#retentionpolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/retentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/taskHubs@2025-04-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TaskHubProperties](#taskhubproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/taskHubs' (ReadOnly, DeployTimeConstant): The resource type

## RetentionPolicyDetails
### Properties
* **orchestrationState**: 'Canceled' | 'Completed' | 'Failed' | 'Terminated' | string: The orchestration state to which this policy applies. If omitted, the policy applies to all purgeable orchestration states.
* **retentionPeriodInDays**: int (Required): The retention period in days after which the orchestration will be purged automatically

## RetentionPolicyProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation
* **retentionPolicies**: [RetentionPolicyDetails](#retentionpolicydetails)[]: The orchestration retention policies

## SchedulerProperties
### Properties
* **endpoint**: string (ReadOnly): URL of the durable task scheduler
* **ipAllowlist**: string[] (Required): IP allow list for durable task scheduler. Values can be IPv4, IPv6 or CIDR
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation
* **sku**: [SchedulerSku](#schedulersku) (Required): SKU of the durable task scheduler

## SchedulerSku
### Properties
* **capacity**: int: The SKU capacity. This allows scale out/in for the resource and impacts zone redundancy
* **name**: string (Required): The name of the SKU
* **redundancyState**: 'None' | 'Zone' | string (ReadOnly): Indicates whether the current SKU configuration is zone redundant

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TaskHubProperties
### Properties
* **dashboardUrl**: string (ReadOnly): URL of the durable task scheduler dashboard
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

