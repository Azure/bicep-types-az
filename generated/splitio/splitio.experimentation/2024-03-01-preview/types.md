# SplitIO.Experimentation @ 2024-03-01-preview

## Resource SplitIO.Experimentation/experimentationWorkspaces@2024-03-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 5, maxLength: 50, pattern: "^[a-zA-Z0-9](?!.*--)[a-zA-Z0-9-]*[a-zA-Z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ExperimentationWorkspaceProperties](#experimentationworkspaceproperties): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'SplitIO.Experimentation/experimentationWorkspaces' (ReadOnly, DeployTimeConstant): The resource type

## Function exchangeToken (SplitIO.Experimentation/experimentationWorkspaces/dataPlaneApplications@2024-03-01-preview)
* **Resource**: SplitIO.Experimentation/experimentationWorkspaces/dataPlaneApplications
* **ApiVersion**: 2024-03-01-preview
* **Input**: [ExchangeTokenParameters](#exchangetokenparameters)
* **Output**: [ExchangeTokenResult](#exchangetokenresult)

## AccessPolicy
### Properties
* **applicationId**: string (Required): Application id used for access to the experimentation workspace.
* **dataPlaneEndpoint**: string (ReadOnly): Endpoint used for access to the experimentation workspace.

## DataSource
### Properties
* **logAnalytics**: [LogAnalytics](#loganalytics): Log Analytics data source.

## ExchangeTokenParameters
### Properties
* **resource**: string (Required): The resource of Split.IO data plane authentication token.
* **token**: string {sensitive} (Required): The bearer token that is used for exchanging Split.IO data plane authentication token.

## ExchangeTokenResult
### Properties
* **token**: string {sensitive} (Required, ReadOnly): The bearer token that is used for Split.IO data plane authentication.

## ExperimentationWorkspaceProperties
### Properties
* **accessPolicy**: [AccessPolicy](#accesspolicy) (Required): Access policy for an experimentation workspace.
* **dataSource**: [DataSource](#datasource): Data source that telemetry data required for experimentation will be retrieved from.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## LogAnalytics
### Properties
* **enabled**: bool (Required): Controls whether data flow from the configured Log Analytics workspace into the experimentation workspace is enabled.
* **resourceId**: string (Required): Resource id of the Log Analytics workspace.
* **storageAccountResourceId**: string (Required): Resource id of the storage account associated with the Log Analytics workspace.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## Sku
### Properties
* **capacity**: int: If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
* **family**: string: If the service has different generations of hardware, for the same SKU, then that can be captured here.
* **name**: string (Required): The name of the SKU. E.g. P3. It is typically a letter+number code
* **size**: string: The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
* **tier**: 'Basic' | 'Free' | 'Premium' | 'Standard': This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.

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

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

