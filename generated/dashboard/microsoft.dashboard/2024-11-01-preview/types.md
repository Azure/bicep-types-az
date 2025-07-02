# Microsoft.Dashboard @ 2024-11-01-preview

## Resource Microsoft.Dashboard/dashboards@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedDashboardProperties](#manageddashboardproperties): Properties specific to the managed dashboard resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Dashboard/dashboards' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Dashboard/grafana@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-z0-9A-Z-]{0,28}[a-z0-9A-Z]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedGrafanaProperties](#managedgrafanaproperties): Properties specific to the grafana resource.
* **sku**: [ResourceSku](#resourcesku): The Sku of the grafana resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Dashboard/grafana' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Dashboard/grafana/integrationFabrics@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z][a-z0-9A-Z-]{0,18}[a-z0-9A-Z]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IntegrationFabricProperties](#integrationfabricproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Dashboard/grafana/integrationFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Dashboard/grafana/managedPrivateEndpoints@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ManagedPrivateEndpointModelProperties](#managedprivateendpointmodelproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.Dashboard/grafana/managedPrivateEndpoints' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Dashboard/grafana/privateEndpointConnections@2024-11-01-preview
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Dashboard/grafana/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Dashboard/grafana/privateLinkResources@2024-11-01-preview (ReadOnly)
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2024-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Dashboard/grafana/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## AzureMonitorWorkspaceIntegration
### Properties
* **azureMonitorWorkspaceResourceId**: string: The resource Id of the connected Azure Monitor Workspace.

## EnterpriseConfigurations
### Properties
* **marketplaceAutoRenew**: 'Disabled' | 'Enabled' | string: The AutoRenew setting of the Enterprise subscription
* **marketplacePlanId**: string: The Plan Id of the Azure Marketplace subscription for the Enterprise plugins

## GrafanaConfigurations
### Properties
* **security**: [Security](#security): Grafana security settings
* **smtp**: [Smtp](#smtp): Email server settings.
https://grafana.com/docs/grafana/v9.0/setup-grafana/configure-grafana/#smtp
* **snapshots**: [Snapshots](#snapshots): Grafana Snapshots settings
* **unifiedAlertingScreenshots**: [UnifiedAlertingScreenshots](#unifiedalertingscreenshots): Grafana Unified Alerting Screenshots settings
* **users**: [Users](#users): Grafana users settings

## GrafanaIntegrations
### Properties
* **azureMonitorWorkspaceIntegrations**: [AzureMonitorWorkspaceIntegration](#azuremonitorworkspaceintegration)[]

## GrafanaPlugin
### Properties
* **pluginId**: string (ReadOnly): Grafana plugin id

## IntegrationFabricProperties
### Properties
* **dataSourceResourceId**: string: The resource Id of the Azure resource which is used to configure Grafana data source. E.g., an Azure Monitor Workspace, an Azure Data Explorer cluster, etc.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **scenarios**: string[]: A list of integration scenarios covered by this integration fabric
* **targetResourceId**: string: The resource Id of the Azure resource being integrated with Azure Managed Grafana. E.g., an Azure Kubernetes Service cluster.

## ManagedDashboardProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.

## ManagedGrafanaProperties
### Properties
* **apiKey**: 'Disabled' | 'Enabled' | string: The api key setting of the Grafana instance.
* **autoGeneratedDomainNameLabelScope**: 'TenantReuse' | string: Scope for dns deterministic name hash calculation.
* **deterministicOutboundIP**: 'Disabled' | 'Enabled' | string: Whether a Grafana instance uses deterministic outbound IPs.
* **endpoint**: string (ReadOnly): The endpoint of the Grafana instance.
* **enterpriseConfigurations**: [EnterpriseConfigurations](#enterpriseconfigurations): Enterprise settings of a Grafana instance
* **grafanaConfigurations**: [GrafanaConfigurations](#grafanaconfigurations): Server configurations of a Grafana instance
* **grafanaIntegrations**: [GrafanaIntegrations](#grafanaintegrations): GrafanaIntegrations is a bundled observability experience (e.g. pre-configured data source, tailored Grafana dashboards, alerting defaults) for common monitoring scenarios.
* **grafanaMajorVersion**: string: The major Grafana software version to target.
* **grafanaPlugins**: [ManagedGrafanaPropertiesGrafanaPlugins](#managedgrafanapropertiesgrafanaplugins): Installed plugin list of the Grafana instance. Key is plugin id, value is plugin definition.
* **grafanaVersion**: string (ReadOnly): The Grafana software version.
* **outboundIPs**: string[] (ReadOnly): List of outbound IPs if deterministicOutboundIP is enabled.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): The private endpoint connections of the Grafana instance.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Indicate the state for enable or disable traffic over the public interface.
* **zoneRedundancy**: 'Disabled' | 'Enabled' | string: The zone redundancy setting of the Grafana instance.

## ManagedGrafanaPropertiesGrafanaPlugins
### Properties
### Additional Properties
* **Additional Properties Type**: [GrafanaPlugin](#grafanaplugin)

## ManagedPrivateEndpointConnectionState
### Properties
* **description**: string (ReadOnly): Gets or sets the reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Disconnected' | 'Pending' | 'Rejected' | string (ReadOnly): The approval/rejection status of managed private endpoint connection.

## ManagedPrivateEndpointModelProperties
### Properties
* **connectionState**: [ManagedPrivateEndpointConnectionState](#managedprivateendpointconnectionstate) (ReadOnly): The state of managed private endpoint connection.
* **groupIds**: string[]: The group Ids of the managed private endpoint.
* **privateLinkResourceId**: string: The ARM resource ID of the resource for which the managed private endpoint is pointing to.
* **privateLinkResourceRegion**: string: The region of the resource to which the managed private endpoint is pointing to.
* **privateLinkServicePrivateIP**: string (ReadOnly): The private IP of private endpoint after approval. This property is empty before connection is approved.
* **privateLinkServiceUrl**: string: The URL of the data store behind the private link service. It would be the URL in the Grafana data source configuration page without the protocol and port.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **requestMessage**: string: User input request message of the managed private endpoint.

## ManagedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
* **userAssignedIdentities**: [UserAssignedIdentities](#userassignedidentities): The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests.

## PrivateEndpoint
### Properties
* **id**: string (ReadOnly): The ARM identifier for Private Endpoint

## PrivateEndpointConnection
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
* **name**: string (ReadOnly): The name of the resource
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## PrivateEndpointConnectionProperties
### Properties
* **groupIds**: string[]: The private endpoint connection group ids.
* **privateEndpoint**: [PrivateEndpoint](#privateendpoint): The resource of private end point.
* **privateLinkServiceConnectionState**: [PrivateLinkServiceConnectionState](#privatelinkserviceconnectionstate) (Required): A collection of information about the state of the connection between service consumer and provider.
* **provisioningState**: 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the private endpoint connection resource.

## PrivateLinkResourceProperties
### Properties
* **groupId**: string (ReadOnly): The private link resource group id.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleted' | 'Deleting' | 'Failed' | 'NotSpecified' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the resource.
* **requiredMembers**: string[] (ReadOnly): The private link resource required member names.
* **requiredZoneNames**: string[]: The private link resource Private link DNS zone name.

## PrivateLinkServiceConnectionState
### Properties
* **actionsRequired**: string: A message indicating if changes on the service provider require any updates on the consumer.
* **description**: string: The reason for approval/rejection of the connection.
* **status**: 'Approved' | 'Pending' | 'Rejected' | string: Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.

## ResourceSku
### Properties
* **name**: string (Required): The name of the SKU.

## Security
### Properties
* **csrfAlwaysCheck**: bool: Set to true to execute the CSRF check even if the login cookie is not in a request (default false).

## Smtp
### Properties
* **enabled**: bool: Enable this to allow Grafana to send email. Default is false
* **fromAddress**: string: Address used when sending out emails
https://pkg.go.dev/net/mail#Address
* **fromName**: string: Name to be used when sending out emails. Default is "Azure Managed Grafana Notification"
https://pkg.go.dev/net/mail#Address
* **host**: string: SMTP server hostname with port, e.g. test.email.net:587
* **password**: string {sensitive}: Password of SMTP auth. If the password contains # or ;, then you have to wrap it with triple quotes
* **skipVerify**: bool: Verify SSL for SMTP server. Default is false
https://pkg.go.dev/crypto/tls#Config
* **startTLSPolicy**: 'MandatoryStartTLS' | 'NoStartTLS' | 'OpportunisticStartTLS' | string: The StartTLSPolicy setting of the SMTP configuration
https://pkg.go.dev/github.com/go-mail/mail#StartTLSPolicy
* **user**: string: User of SMTP auth

## Snapshots
### Properties
* **externalEnabled**: bool: Set to false to disable external snapshot publish endpoint

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

## UnifiedAlertingScreenshots
### Properties
* **captureEnabled**: bool: Set to false to disable capture screenshot in Unified Alert due to performance issue.

## UserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [UserAssignedIdentity](#userassignedidentity)

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## Users
### Properties
* **editorsCanAdmin**: bool: Set to true so editors can administrate dashboards, folders and teams they create.
* **viewersCanEdit**: bool: Set to true so viewers can access and use explore and perform temporary edits on panels in dashboards they have access to. They cannot save their changes.

