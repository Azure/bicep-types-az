# Microsoft.Monitor @ 2025-05-03-preview

## Resource Microsoft.Monitor/accounts@2025-05-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorWorkspace](#azuremonitorworkspace): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Monitor/accounts/metricsContainers@2025-05-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2025-05-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MacMetricsContainer](#macmetricscontainer): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Monitor/accounts/metricsContainers' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorWorkspace
### Properties
* **accountId**: string (ReadOnly): The immutable Id of the Azure Monitor Workspace. This property is read-only.
* **defaultIngestionSettings**: [AzureMonitorWorkspaceDefaultIngestionSettings](#azuremonitorworkspacedefaultingestionsettings) (ReadOnly): The Data Collection Rule and Endpoint used for ingestion by default.
* **metrics**: [AzureMonitorWorkspaceMetrics](#azuremonitorworkspacemetrics) (ReadOnly): Properties related to the metrics container in the Azure Monitor Workspace
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): List of private endpoint connections
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Azure Monitor Workspace. Set to Succeeded if everything is healthy.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Gets or sets allow or disallow public network access to Azure Monitor Workspace

## AzureMonitorWorkspaceDefaultIngestionSettings
### Properties
* **dataCollectionEndpointResourceId**: string (ReadOnly): The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
* **dataCollectionRuleImmutableId**: string (ReadOnly): The immutable Id of the default data collection rule for this Azure Monitor Workspace.
* **dataCollectionRuleResourceId**: string (ReadOnly): The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.
* **ingestionEndpoints**: [IngestionEndpoints](#ingestionendpoints) (ReadOnly): The ingestion endpoints for this Azure Monitor Workspace.

## AzureMonitorWorkspaceMetrics
### Properties
* **enableAccessUsingResourcePermissions**: bool: Flag that indicates whether to enable access using resource permissions.
* **internalId**: string (ReadOnly): An internal identifier for the metrics container. Only to be used by the system.
* **prometheusQueryEndpoint**: string (ReadOnly): The Prometheus query endpoint for the Azure Monitor Workspace

## IngestionEndpoints
### Properties
* **metrics**: string (ReadOnly): The metrics ingestion endpoint for this Azure Monitor Workspace.

## MacMetricsContainer
### Properties
* **limits**: [MacMetricsLimits](#macmetricslimits): Geneva Metrics limits.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the metrics container.

## MacMetricsLimits
### Properties
* **maxActiveTimeSeries**: int: Maximum number of active time series allowed on the metrics containers.
* **maxEventsPerMinute**: int: Maximum rate (events per minute) that can be processed on the metrics containers.

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

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

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

