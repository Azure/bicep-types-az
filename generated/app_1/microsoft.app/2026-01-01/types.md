# Microsoft.App @ 2026-01-01

## Resource Microsoft.App/agents@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]{0,30}[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentProperties](#agentproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/agents' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/agents/connectors@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]{0,30}[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentConnectorProperties](#agentconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/agents/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/agentSpaces@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentSpaceProperties](#agentspaceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.App/agentSpaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.App/agentSpaces/connectors@2026-01-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-01-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[A-Za-z]([-A-Za-z0-9]{0,30}[A-Za-z0-9])$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentSpaceConnectorProperties](#agentspaceconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.App/agentSpaces/connectors' (ReadOnly, DeployTimeConstant): The resource type

## Function listConnectorsWithSecrets (Microsoft.App/agentSpaces@2026-01-01)
* **Resource**: Microsoft.App/agentSpaces
* **ApiVersion**: 2026-01-01
* **Output**: [AgentSpaceConnectorCollection](#agentspaceconnectorcollection)

## Function listConnectorsWithSecrets (Microsoft.App/agents@2026-01-01)
* **Resource**: Microsoft.App/agents
* **ApiVersion**: 2026-01-01
* **Output**: [AgentConnectorCollection](#agentconnectorcollection)

## Function listSecrets (Microsoft.App/agentSpaces/connectors@2026-01-01)
* **Resource**: Microsoft.App/agentSpaces/connectors
* **ApiVersion**: 2026-01-01
* **Output**: [AgentSpaceConnector](#agentspaceconnector)

## Function listSecrets (Microsoft.App/agents/connectors@2026-01-01)
* **Resource**: Microsoft.App/agents/connectors
* **ApiVersion**: 2026-01-01
* **Output**: [AgentConnector](#agentconnector)

## ActionConfiguration
### Properties
* **accessLevel**: 'High' | 'Low' | string: The access level of the action
* **identity**: string: The identity used by the action
* **mode**: 'Autonomous' | 'ReadOnly' | 'Review' | string: The mode of the action

## AgentConnector
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AgentConnectorProperties](#agentconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AgentConnectorCollection
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [AgentConnector](#agentconnector)[] (Required): The AgentConnector items on this page

## AgentConnectorProperties
### Properties
* **dataConnectorType**: string: The type of the data connector
* **dataSource**: string {sensitive}: Data source connection string or endpoint
* **deploymentError**: string (ReadOnly): Deployment error message if provisioning failed
* **endpoint**: string: Endpoint of the connector
* **extendedProperties**: [AgentConnectorPropertiesExtendedProperties](#agentconnectorpropertiesextendedproperties): Additional properties for the data connector which can be used to store custom key-value pairs
* **identity**: string: Identity used to access the data source
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the connector
* **source**: string (ReadOnly): Source of the data connector - "Agent" when directly stored in agent, "AgentSpace" when inherited

## AgentConnectorPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

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
* **agentSpaceId**: string: The agent space ID referenced by the agent
* **defaultModel**: [DefaultModel](#defaultmodel): Default AI model configuration for the agent
* **incidentManagementConfiguration**: [IncidentManagementConfiguration](#incidentmanagementconfiguration): Incident management configurations
* **knowledgeGraphConfiguration**: [KnowledgeGraphConfiguration](#knowledgegraphconfiguration): Knowledge graph configuration for agent
* **logConfiguration**: [LogConfiguration](#logconfiguration): Log configurations
* **powerState**: 'Running' | 'Stopped' | string (ReadOnly): The power state of the Agent
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Agent
* **runningState**: string (ReadOnly): The running state of the Agent
* **upgradeChannel**: 'Preview' | 'Stable' | string: The upgrade channel of the agent

## AgentSpaceComplianceStatus
### Properties
* **complianceIssues**: string[] (ReadOnly): List of compliance issues found in the Agent Space
* **isCompliant**: bool (Required, ReadOnly): Indicates whether the Agent Space is compliant
* **lastComplianceCheck**: string (ReadOnly): Timestamp of the last compliance check

## AgentSpaceConnector
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [AgentSpaceConnectorProperties](#agentspaceconnectorproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## AgentSpaceConnectorCollection
### Properties
* **nextLink**: string: The link to the next page of items
* **value**: [AgentSpaceConnector](#agentspaceconnector)[] (Required): The AgentSpaceConnector items on this page

## AgentSpaceConnectorProperties
### Properties
* **dataConnectorType**: string: The type of the data connector
* **dataSource**: string {sensitive}: Data source connection string or endpoint
* **deploymentError**: string (ReadOnly): Deployment error message if provisioning failed
* **endpoint**: string: Endpoint of the connector
* **extendedProperties**: [AgentSpaceConnectorPropertiesExtendedProperties](#agentspaceconnectorpropertiesextendedproperties): Additional properties for the data connector which can be used to store custom key-value pairs
* **identity**: string: Identity used to access the data source
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the connector

## AgentSpaceConnectorPropertiesExtendedProperties
### Properties
### Additional Properties
* **Additional Properties Type**: any

## AgentSpacePolicies
### Properties
* **genevaActionsConfiguration**: [GenevaActionsPolicy](#genevaactionspolicy): Configuration for Geneva Actions policy

## AgentSpaceProperties
### Properties
* **complianceStatus**: [AgentSpaceComplianceStatus](#agentspacecompliancestatus) (ReadOnly): Compliance status of the Agent Space
* **currentAgentCount**: int (ReadOnly): Current number of agents in the Agent Space
* **description**: string: Description of the Agent Space
* **lastPolicyPropagation**: string (ReadOnly): Timestamp of the last policy propagation to agents in this Agent Space
* **maxAgentCount**: int: Maximum number of agents allowed in the Agent Space
* **memberAgents**: string[] (ReadOnly): List of agents referencing the Agent Space
* **policies**: [AgentSpacePolicies](#agentspacepolicies): Policy configurations for the Agent Space
* **provisioningState**: 'Canceled' | 'Deleting' | 'Failed' | 'InProgress' | 'Succeeded' | string (ReadOnly): Provisioning state of the Agent Space
* **serviceTreeId**: string: Universal unique ID (UUID) of the Service Tree associated with this Agent Space

## ApplicationInsightsConfiguration
### Properties
* **appId**: string: The Application ID for the Application Insights resource
* **connectionString**: string {sensitive}: The connection string for the Application Insights resource

## DefaultModel
### Properties
* **name**: string: Model name (e.g., gpt-5, claude-opus-4-5, claude-sonnet-4-5)
* **provider**: string: AI provider name (e.g., MicrosoftFoundry, Anthropic)

## GenevaActionConfig
### Properties
* **actionName**: string: Name of the Geneva action
* **actionParameters**: [GenevaActionParameter](#genevaactionparameter)[]: Parameters for the Geneva action
* **approvalRequired**: bool: Indicates whether approval is required for this action
* **extension**: string: Extension associated with the action

## GenevaActionParameter
### Properties
* **name**: string: Name of the parameter
* **type**: string: Type of the parameter

## GenevaActionsPolicy
### Properties
* **acisEndpoint**: string: ACIS (Azure Container Instance Service) endpoint URL
* **allowedActions**: [GenevaActionConfig](#genevaactionconfig)[]: Collection of allowed Geneva actions
* **authenticationMode**: 'OAuth' | 'WS-Trust' | string: Authentication mode for Geneva Actions
* **certificateSubjectAlternativeName**: string (ReadOnly): Subject alternative name of the certificate used for authentication
* **certificateSubjectName**: string: Subject name of the certificate used for authentication
* **clientId**: string: Client ID for authentication
* **extensionName**: string (Required): Name of the Geneva extension

## IncidentManagementConfiguration
### Properties
* **connectionKey**: string {sensitive}: The key for the connection
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

