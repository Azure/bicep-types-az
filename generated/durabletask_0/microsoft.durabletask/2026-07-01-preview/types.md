# Microsoft.DurableTask @ 2026-07-01-preview

## Resource Microsoft.DurableTask/schedulers@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SchedulerProperties](#schedulerproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DurableTask/schedulers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/detectors@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DetectorProperties](#detectorproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/detectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/failoverInstances@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [FailoverInstanceProperties](#failoverinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/failoverInstances' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/privateEndpointConnections@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/privateLinkResources@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/retentionPolicies@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [RetentionPolicyProperties](#retentionpolicyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/retentionPolicies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/taskHubs@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TaskHubProperties](#taskhubproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/taskHubs' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/taskHubs/taskQueues@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,64}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [TaskQueueProperties](#taskqueueproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/taskHubs/taskQueues' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.DurableTask/schedulers/transparentDataEncryptions@2026-07-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [TransparentDataEncryptionProperties](#transparentdataencryptionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.DurableTask/schedulers/transparentDataEncryptions' (ReadOnly, DeployTimeConstant): The resource type

## Function failover (Microsoft.DurableTask/schedulers/failoverInstances@2026-07-01-preview)
* **Resource**: Microsoft.DurableTask/schedulers/failoverInstances
* **ApiVersion**: 2026-07-01-preview
* **Output**: [FailoverInstance](#failoverinstance)

## Function forceFailoverAllowDataLoss (Microsoft.DurableTask/schedulers/failoverInstances@2026-07-01-preview)
* **Resource**: Microsoft.DurableTask/schedulers/failoverInstances
* **ApiVersion**: 2026-07-01-preview
* **Output**: [FailoverInstance](#failoverinstance)

## Function restart (Microsoft.DurableTask/schedulers@2026-07-01-preview)
* **Resource**: Microsoft.DurableTask/schedulers
* **ApiVersion**: 2026-07-01-preview
* **Output**: any

## DetectorDataset
### Properties
* **renderingProperties**: [DetectorRenderingProperties](#detectorrenderingproperties) (ReadOnly): The rendering information for the tabular data.
* **table**: [DetectorTable](#detectortable) (ReadOnly): The tabular data produced by the detector.

## DetectorMetadata
### Properties
* **analysisTypes**: string[] (ReadOnly): The analysis identifiers for which the detector is enabled.
* **author**: string (ReadOnly): The author of the detector when available for the caller.
* **category**: string (ReadOnly): The category of the detector.
* **description**: string (ReadOnly): A description of the detector.
* **id**: string (ReadOnly): The unique identifier of the detector.
* **name**: string (ReadOnly): The display name of the detector.
* **score**: int (ReadOnly): The match score when the detector is returned from a search.
* **supportTopicList**: string[] (ReadOnly): The case-submission support topic identifiers for which the detector is enabled.
* **type**: 'Analysis' | 'CategoryOverview' | 'Detector' | string (ReadOnly): The kind of diagnostic response.

## DetectorProperties
### Properties
* **dataset**: [DetectorDataset](#detectordataset)[] (ReadOnly): The datasets produced when the detector runs.
* **metadata**: [DetectorMetadata](#detectormetadata) (ReadOnly): Metadata that identifies and describes the detector.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the detector.
* **status**: [DetectorStatus](#detectorstatus) (ReadOnly): The overall result of the detector.

## DetectorRenderingProperties
### Properties
* **description**: string (ReadOnly): The optional description of the rendering block.
* **title**: string (ReadOnly): The optional title of the rendering block.
* **type**: int (ReadOnly): The rendering type for the dataset.

## DetectorStatus
### Properties
* **message**: string (ReadOnly): The optional message describing the detector result.
* **statusId**: int (ReadOnly): The status of the detector result.

## DetectorTable
### Properties
* **columns**: [DetectorTableColumn](#detectortablecolumn)[] (ReadOnly): The column definitions for the table.
* **rows**: any[][] (ReadOnly): The rows in the table. Values use the types specified by their columns.
* **tableName**: string (ReadOnly): The name of the table.

## DetectorTableColumn
### Properties
* **columnName**: string (ReadOnly): The name of the column.
* **columnType**: string (ReadOnly): The optional semantic classification of the column.
* **dataType**: string (ReadOnly): The data type of values in the column.

## FailoverInstance
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [FailoverInstanceProperties](#failoverinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## FailoverInstanceProperties
### Properties
* **failoverState**: 'Failed' | 'InProgress' | 'None' | 'Succeeded' | string (ReadOnly): The current state of the failover operation
* **partnerSchedulerLocation**: string (ReadOnly): The location of the partner scheduler in the failover configuration
* **partnerSchedulerResourceId**: string (Required): The resource ID of the partner scheduler in the failover configuration
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation
* **replicationRole**: 'Primary' | 'Secondary' | string (ReadOnly): The replication role of the parent scheduler

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [ManagedServiceIdentityUserAssignedIdentities](#managedserviceidentityuserassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## ManagedServiceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for private endpoint.

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[] (ReadOnly): The group ids for the private endpoint resource.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The private endpoint resource.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

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
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The private endpoints exposed by this resource
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Allow or disallow public network access to durable task scheduler
* **sku**: [SchedulerSku](#schedulersku) (Required): SKU of the durable task scheduler

## SchedulerSku
### Properties
* **capacity**: int: The SKU capacity. This allows scale out/in for the resource and impacts zone redundancy
* **name**: 'Consumption' | 'Dedicated' | string (Required): The name of the SKU
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
* **capabilities**: string[]: A set of Task Hub capabilities that can be enabled or disabled for a Task Hub
* **dashboardUrl**: string (ReadOnly): URL of the durable task scheduler dashboard
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation

## TaskQueueProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation
* **throughput**: [TaskQueueThroughput](#taskqueuethroughput): The throughput configuration of the Task Queue

## TaskQueueThroughput
### Properties
* **actionsPerSecond**: int: The rate of work-item handouts per second

## TrackedResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TransparentDataEncryptionProperties
### Properties
* **autoRotationEnabled**: bool: Indicates whether auto-rotation of the customer-managed keys is enabled for transparent data encryption
* **keySource**: 'CustomerManaged' | 'MicrosoftManaged' | string (Required): The key source for the transparent data encryption
* **keyVaultKeyUri**: string: The URI of the key in Key Vault to be used for transparent data encryption
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The status of the last operation

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

