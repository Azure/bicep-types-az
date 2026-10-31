# Microsoft.App @ 2026-07-01

## Resource Microsoft.App/agents@2026-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]{0,30}[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentProperties](#agentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/agents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/agents/connectors@2026-07-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]{0,30}[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentConnectorProperties](#agentconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/agents/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectorsWithSecrets (Microsoft.App/agents@2026-07-01)
* **Resource**: Microsoft.App/agents
* **ApiVersion**: 2026-07-01
* **Output**: [AgentConnectorWithSecretsCollection](#agentconnectorwithsecretscollection)

## Function listSecrets (Microsoft.App/agents/connectors@2026-07-01)
* **Resource**: Microsoft.App/agents/connectors
* **ApiVersion**: 2026-07-01
* **Output**: [AgentConnectorWithSecrets](#agentconnectorwithsecrets)

## Function start (Microsoft.App/agents@2026-07-01)
* **Resource**: Microsoft.App/agents
* **ApiVersion**: 2026-07-01
* **Output**: [Agent](#agent)

## Function stop (Microsoft.App/agents@2026-07-01)
* **Resource**: Microsoft.App/agents
* **ApiVersion**: 2026-07-01
* **Output**: [Agent](#agent)

## ActionConfiguration
### Properties
* **accessLevel**: 'High' | 'Low' | string: The access level of the action
* **identity**: string: The identity used by the action
* **mode**: 'Autonomous' | 'ReadOnly' | 'Review' | string: The mode of the action

## Agent
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AgentProperties](#agentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AgentConnectorProperties
### Properties
* **dataConnectorType**: string: The type of the data connector
* **dataSource**: string {sensitive} (WriteOnly): Data source connection string or endpoint supplied when creating or updating a connector.
* **deploymentError**: string (ReadOnly): Deployment error message if provisioning failed
* **endpoint**: string: Endpoint of the connector
* **extendedProperties**: [AgentConnectorPropertiesExtendedProperties](#agentconnectorpropertiesextendedproperties): Additional properties for the data connector which can be used to store custom key-value pairs
* **identity**: string: Identity used to access the data source
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the connector

## AgentConnectorPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AgentConnectorPropertiesWithSecrets
### Properties
* **dataConnectorType**: string: The type of the data connector.
* **dataSource**: string {sensitive}: Data source connection string or endpoint.
* **deploymentError**: string (ReadOnly): Deployment error message if provisioning failed
* **endpoint**: string: Endpoint of the connector
* **extendedProperties**: [AgentConnectorPropertiesWithSecretsExtendedProperties](#agentconnectorpropertieswithsecretsextendedproperties): Additional properties for the data connector which can be used to store custom key-value pairs
* **identity**: string: Identity used to access the data source
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the connector

## AgentConnectorPropertiesWithSecretsExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AgentConnectorWithSecrets
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AgentConnectorPropertiesWithSecrets](#agentconnectorpropertieswithsecrets): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AgentConnectorWithSecretsCollection
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [AgentConnectorWithSecrets](#agentconnectorwithsecrets)[] (Required): The AgentConnectorWithSecrets items on this page

## AgentIdentity
### Properties
* **clientId**: string (ReadOnly): Client ID (GUID) for the agent identity
* **enabled**: bool (ReadOnly): Indicates whether the agent identity is enabled
* **initialSponsorGroupId**: string (Required): Initial sponsor group ID (required for agent identity)

## AgentProperties
### Properties
* **actionConfiguration**: [ActionConfiguration](#actionconfiguration): Configuration for action
* **agentEndpoint**: string (ReadOnly): The endpoint of the Agent
* **agentIdentity**: [AgentIdentity](#agentidentity): Agent identity configuration for accessing resources
* **defaultModel**: [DefaultModel](#defaultmodel): Default AI model configuration for the agent
* **incidentManagementConfiguration**: [IncidentManagementConfiguration](#incidentmanagementconfiguration): Incident management configurations
* **knowledgeGraphConfiguration**: [KnowledgeGraphConfiguration](#knowledgegraphconfiguration): Knowledge graph configuration for agent
* **logConfiguration**: [LogConfiguration](#logconfiguration): Log configurations
* **outboundIpAddresses**: string[] (ReadOnly): Outbound IP addresses reported for the Agent's provisioned networking resources.
* **powerState**: 'Running' | 'Stopped' | string (ReadOnly): The power state of the Agent
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Agent
* **runningState**: string (ReadOnly): The running state of the Agent
* **sandboxConfiguration**: [SandboxConfiguration](#sandboxconfiguration): Desired sandbox configuration. PUT represents the complete desired configuration and does not preserve an existing
value when this property is omitted.
Use PATCH to preserve the stored configuration while updating other properties.
* **upgradeChannel**: 'Preview' | 'Stable' | string: The upgrade channel of the agent
* **vnetConfiguration**: [VnetConfiguration](#vnetconfiguration): Desired virtual network configuration. A subnet and AzureVNet egress mode must be configured together.
Use PATCH for selective updates. Omitting networking settings from PUT can clear them or fail validation.

## ApplicationInsightsConfiguration
### Properties
* **appId**: string: The Application ID for the Application Insights resource
* **connectionString**: string {sensitive} (WriteOnly): The connection string supplied when creating or updating the Application Insights configuration.

## DefaultModel
### Properties
* **name**: string: Model name (e.g., gpt-5, claude-opus-4-5, claude-sonnet-4-5)
* **provider**: string: AI provider name (e.g., MicrosoftFoundry, Anthropic)

## IncidentManagementConfiguration
### Properties
* **connectionKey**: string {sensitive} (WriteOnly): The key supplied when creating or updating the connection.
* **connectionName**: string: The name of the connection
* **connectionUrl**: string: The URL of the connection
* **oboUser**: string: The user for the connection
* **type**: string: The type of incident management system

## KnowledgeGraphConfiguration
### Properties
* **identity**: string: The identity used to access the knowledge graph
* **managedResources**: string[]: The list of resources managed by agent

## LogConfiguration
### Properties
* **applicationInsightsConfiguration**: [ApplicationInsightsConfiguration](#applicationinsightsconfiguration): Application Insights Configuration

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

## SandboxConfiguration
### Properties
* **egress**: [SandboxEgressConfiguration](#sandboxegressconfiguration): Sandbox egress configuration. In PATCH, omission preserves egress and JSON merge-patch null clears it.
Clearing egress is invalid while a subnet remains configured.
* **packages**: [SandboxPackageSpec](#sandboxpackagespec)[] {maxLength: 200}: Packages to preinstall in the sandbox. In PATCH, omission preserves the package list.
A supplied array replaces the entire list; JSON merge-patch null clears it. An empty array selects no packages.
Each supplied package must include its name and package manager.

## SandboxEgressConfiguration
### Properties
* **allowedCodeRepositories**: string[]: Code repository provider identifiers allowed on the managed network path. Values are matched case-sensitively.
Known values are 'Github', 'GithubEnterprise', 'AzureDevOps' and 'GitLab'. The service validates the values.
In PATCH, omission preserves the list, a supplied array replaces it, and JSON merge-patch null clears it.
* **allowedHosts**: (string {minLength: 1, maxLength: 253, pattern: "^(\*\.(?=[^.]+\.))?[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$"})[] {maxLength: 100}: Additional hostnames allowed on the managed network path.
Entries are DNS hostnames or leading wildcard patterns such as '*.example.com'; a bare '*' is invalid.
Each entry has at most 253 characters and each DNS label at most 63 characters.
Wildcard patterns must contain at least two labels after '*.'.
In PATCH, omission preserves the list, a supplied array replaces it, and JSON merge-patch null clears it.
* **allowedRegistries**: string[]: Package registry identifiers allowed on the managed network path. Values are matched without regard to case.
Known values are 'pypi', 'npmjs', 'nuget-org' and 'ubuntu'. The service validates the values.
In PATCH, omission preserves the list, a supplied array replaces it, and JSON merge-patch null clears it.
* **allowHttpMcpServerNetworkAccess**: bool: Whether remote HTTP MCP servers can use the managed network path.
In PATCH, omission preserves the setting and JSON merge-patch null clears it.
* **httpProxy**: [SandboxHttpProxyConfiguration](#sandboxhttpproxyconfiguration): Forward-proxy configuration for sandbox outbound requests.
Used only when forward-proxy support is enabled for the Agent and the egress mode is AzureVNet.
Supplying this configuration does not enable forward-proxy support.
In PATCH, omission preserves the configuration, JSON merge-patch null clears it, and a supplied object merges its members.
The resulting proxy configuration must include httpsUrl.
* **mode**: 'AzureVNet' | 'Limited' | 'Unrestricted' | string: Sandbox egress mode. AzureVNet requires a subnet, and a configured subnet requires AzureVNet.
In PATCH, omission preserves the mode and JSON merge-patch null clears it.
Clearing the mode is invalid while a subnet remains configured.
No unconditional default applies.

## SandboxHttpProxyConfiguration
### Properties
* **httpsUrl**: string: Proxy endpoint used for HTTPS destinations and CONNECT tunneling. Required whenever a proxy configuration is stored.
The proxy URL itself must use http:// for CONNECT tunneling and must be an origin with a host.
Credentials, paths other than '/', query strings, fragments, and ports 0, 80, and 443 are not supported.
In PATCH, omission preserves the endpoint.
* **httpUrl**: string: Optional proxy endpoint used for HTTP destinations. When set, it must be the same proxy origin as httpsUrl;
different HTTP and HTTPS proxies are not supported.
The value must be an absolute http:// origin with a host. Credentials, paths other than '/', query strings,
fragments, and ports 0, 80, and 443 are not supported.
In PATCH, omission preserves the endpoint and JSON merge-patch null clears it.
* **noProxy**: (string {minLength: 1})[]: Additional destinations that bypass the forward proxy.
Entries can be DNS hostnames, leading-dot or '*.' suffix patterns, or exact IPv4 addresses.
CIDR blocks, IPv6 addresses, ports, empty entries, and a bare '*' are invalid.
In PATCH, omission preserves the list, a supplied array replaces it, and JSON merge-patch null clears it.

## SandboxPackageSpec
### Properties
* **name**: string {minLength: 1, maxLength: 214, pattern: "^@?[A-Za-z0-9][A-Za-z0-9._-]*(/[A-Za-z0-9][A-Za-z0-9._-]*)?$"} (Required): Package name, optionally including a scope or namespace prefix.
* **packageManager**: 'npm' | 'nuget' | 'pip' | string (Required): Package manager used to install the package. Values are case-sensitive.
* **version**: string {minLength: 1, maxLength: 64, pattern: "^[A-Za-z0-9._+\-~^<>=,*\[\]()]+$"}: Optional package version or version constraint. Omit it to leave the version unspecified.

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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

## VnetConfiguration
### Properties
* **subnetResourceId**: string: Azure resource ID of the subnet used with AzureVNet egress mode.
In PATCH, omission preserves the subnet and JSON merge-patch null clears it.
Setting or replacing a subnet requires the resulting egress mode to be AzureVNet.
When clearing the subnet, also update sandbox egress in the same PATCH request so the resulting mode is not AzureVNet.
The detach example explicitly selects Limited.

