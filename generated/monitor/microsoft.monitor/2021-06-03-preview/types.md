# Microsoft.Monitor @ 2021-06-03-preview

## Resource Microsoft.Monitor/accounts@2021-06-03-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2021-06-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): Resource entity tag (ETag)
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^(?!-)[a-zA-Z0-9-]+[^-]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AzureMonitorWorkspaceResourceProperties](#azuremonitorworkspaceresourceproperties): Resource properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Monitor/accounts' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorWorkspaceDefaultIngestionSettings
### Properties
* **dataCollectionEndpointResourceId**: string (ReadOnly): The Azure resource Id of the default data collection endpoint for this Azure Monitor Workspace.
* **dataCollectionRuleResourceId**: string (ReadOnly): The Azure resource Id of the default data collection rule for this Azure Monitor Workspace.

## AzureMonitorWorkspaceMetrics
### Properties
* **internalId**: string (ReadOnly): An internal identifier for the metrics container. Only to be used by the system
* **prometheusQueryEndpoint**: string (ReadOnly): The Prometheus query endpoint for the Azure Monitor Workspace

## AzureMonitorWorkspaceResourceProperties
### Properties
* **accountId**: string (ReadOnly): The immutable Id of the Azure Monitor Workspace. This property is read-only.
* **defaultIngestionSettings**: [AzureMonitorWorkspaceDefaultIngestionSettings](#azuremonitorworkspacedefaultingestionsettings) (ReadOnly): The Data Collection Rule and Endpoint used for ingestion by default.
* **metrics**: [AzureMonitorWorkspaceMetrics](#azuremonitorworkspacemetrics) (ReadOnly): Properties related to the metrics container in the Azure Monitor Workspace
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the Azure Monitor Workspace. Set to Succeeded if everything is healthy.

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

