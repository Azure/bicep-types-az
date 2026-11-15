# Microsoft.ApiManagement @ 2026-11-01

## Resource Microsoft.ApiManagement/aigateways@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,22}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayProperties](#aigatewayproperties) (Required): The resource-specific properties for this resource.
* **sku**: [Sku](#sku): The SKU (Stock Keeping Unit) assigned to this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.ApiManagement/aigateways' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/apiKeys@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayApiKeyProperties](#aigatewayapikeyproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/apiKeys' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/privateEndpointConnections@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateEndpointConnectionProperties](#privateendpointconnectionproperties): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/privateEndpointConnections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/privateLinkResources@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z][a-zA-Z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PrivateLinkResourceProperties](#privatelinkresourceproperties) (ReadOnly): Resource properties.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/privateLinkResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^default$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayWorkspaceProperties](#aigatewayworkspaceproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces/aliases@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_.-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayAliasProperties](#aigatewayaliasproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces/aliases' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces/modelProviders@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayModelProviderProperties](#aigatewaymodelproviderproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces/modelProviders' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces/modelProviders/models@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayModelProperties](#aigatewaymodelproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces/modelProviders/models' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces/telemetryExporters@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9_-]+$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayTelemetryExporterProperties](#aigatewaytelemetryexporterproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces/telemetryExporters' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ApiManagement/aigateways/workspaces/toolServers@2026-11-01
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AiGatewayToolServerProperties](#aigatewaytoolserverproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ApiManagement/aigateways/workspaces/toolServers' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.ApiManagement/locations@2026-11-01)
* **Resource**: Microsoft.ApiManagement/locations
* **ApiVersion**: 2026-11-01
* **Input**: [AiGatewayCheckNameAvailabilityRequest](#aigatewaychecknameavailabilityrequest)
* **Output**: [AiGatewayCheckNameAvailabilityResponse](#aigatewaychecknameavailabilityresponse)

## Function getOauth2LoginLinks (Microsoft.ApiManagement/aigateways/workspaces/toolServers@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/workspaces/toolServers
* **ApiVersion**: 2026-11-01
* **Input**: [AiGatewayToolServerLoginLinksRequest](#aigatewaytoolserverloginlinksrequest)
* **Output**: [AiGatewayToolServerOauth2LoginLinks](#aigatewaytoolserveroauth2loginlinks)

## Function listSecrets (Microsoft.ApiManagement/aigateways/apiKeys@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/apiKeys
* **ApiVersion**: 2026-11-01
* **Output**: [AiGatewayApiKeyValues](#aigatewayapikeyvalues)

## Function listSecrets (Microsoft.ApiManagement/aigateways/workspaces/modelProviders@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/workspaces/modelProviders
* **ApiVersion**: 2026-11-01
* **Output**: [AiGatewayModelProviderSecrets](#aigatewaymodelprovidersecrets)

## Function listSecrets (Microsoft.ApiManagement/aigateways/workspaces/toolServers@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/workspaces/toolServers
* **ApiVersion**: 2026-11-01
* **Output**: [AiGatewayToolServerSecrets](#aigatewaytoolserversecrets)

## Function regeneratePrimaryKey (Microsoft.ApiManagement/aigateways/apiKeys@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/apiKeys
* **ApiVersion**: 2026-11-01
* **Output**: any

## Function regenerateSecondaryKey (Microsoft.ApiManagement/aigateways/apiKeys@2026-11-01)
* **Resource**: Microsoft.ApiManagement/aigateways/apiKeys
* **ApiVersion**: 2026-11-01
* **Output**: any

## AiGatewayAgentHook
### Properties
* **authentication**: [AiGatewayAgentHookAuthentication](#aigatewayagenthookauthentication): Hook authentication settings.
* **endpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Hook destination URL.
* **headers**: [AiGatewayNameValuePair](#aigatewaynamevaluepair)[]: Literal, non-secret HTTP headers, returned by read operations.
* **mode**: 'failClosed' | 'failOpen' | string: Failure mode when the hook call fails.

## AiGatewayAgentHookAuthentication
### Properties
* **headers**: [AiGatewaySecretHeader](#aigatewaysecretheader)[]: Secret HTTP headers injected when calling the hook endpoint.
* **managedIdentity**: [AiGatewayManagedIdentityAuthentication](#aigatewaymanagedidentityauthentication): Managed identity configuration for the hook endpoint.

## AiGatewayAgentHooks
### Properties
* **postModelCall**: [AiGatewayAgentHook](#aigatewayagenthook): Hook invoked after calling a model.
* **postToolCall**: [AiGatewayAgentHook](#aigatewayagenthook): Hook invoked after calling a tool.
* **preModelCall**: [AiGatewayAgentHook](#aigatewayagenthook): Hook invoked before calling a model.
* **preToolCall**: [AiGatewayAgentHook](#aigatewayagenthook): Hook invoked before calling a tool.

## AiGatewayAliasFailureRule
### Properties
* **excludeFor**: string: Optional ISO 8601 duration or duration-valued @cel(...) expression for excluding the failed backend.
* **retryAttempts**: int {minValue: 0}: Maximum additional attempts on the same backend; defaults to zero.
* **when**: string (Required): Boolean @cel(...) expression evaluated against the current routing failure.

## AiGatewayAliasProperties
### Properties
* **aliasName**: string: Client-facing routing name sent in the request model field.
* **autoModelSelection**: [AiGatewayModelSelection](#aigatewaymodelselection): Automatic model selection settings used with the autoModelSelection stage.
* **backendModels**: [AiGatewayAliasTarget](#aigatewayaliastarget)[] {minLength: 1, maxLength: 30} (Required): Ordered target models used for routing.
* **description**: string {maxLength: 1024}: Description of the alias.
* **failures**: [AiGatewayAliasFailureRule](#aigatewayaliasfailurerule)[]: Ordered failure rules; only the first matching rule is applied.
* **gatewayEndpoints**: [AiGatewayEndpoint](#aigatewayendpoint)[] (ReadOnly): Invocation endpoints, when endpoint metadata is enabled for this gateway.
* **maxRetryAttempts**: int {minValue: 0}: Maximum additional backend attempts after the first request.
* **policies**: [AiGatewayPolicy](#aigatewaypolicy)[]: Inline policies applied to requests routed through the alias.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **selectionOrder**: ('autoModelSelection' | 'priority' | 'sessionBackendPreference' | string)[]: Ordered routing stages.
* **sessionBackendPreference**: [AiGatewaySessionBackendPreference](#aigatewaysessionbackendpreference): Stateless backend preference using an existing caller session key.
* **supportedEndpoints**: string[] (ReadOnly): Native endpoints common to every target model; translated endpoints are excluded.

## AiGatewayAliasTarget
### Properties
* **priority**: int {minValue: 0, maxValue: 100}: Routing priority. Lower values are preferred; the effective default is zero.
* **resourceId**: string (Required): Azure resource identifier of the target model in the default workspace.
* **selectorModelName**: string {minLength: 1}: Unversioned canonical model name grouping equivalent serving deployments.
* **weight**: int {minValue: 1, maxValue: 100}: Relative selection weight within a priority group. The effective default is one.
* **when**: string: Optional Boolean CEL expression wrapped in @cel(...) controlling eligibility for new backend selections.

## AiGatewayApiKeyProperties
### Properties
* **createdDate**: string (ReadOnly): Creation time.
* **displayName**: string: Display name of the key.
* **expirationDate**: string: Optional expiration time.
* **primaryKey**: string {sensitive} (WriteOnly): Primary key value. Omitted from ordinary read responses.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **secondaryKey**: string {sensitive} (WriteOnly): Secondary key value. Omitted from ordinary read responses.
* **state**: string: Subscription state.

## AiGatewayApiKeyValues
### Properties
* **primaryKey**: string {sensitive} (Required): Primary API key value.
* **secondaryKey**: string {sensitive} (Required): Secondary API key value.

## AiGatewayApplicationInsightsConfiguration
### Properties
* **connectionString**: string {sensitive} (WriteOnly): Application Insights connection string. Required when creating this exporter kind.
* **resourceId**: string: Azure resource identifier of the Application Insights component.

## AiGatewayBackend
### Properties
* **subnet**: [AiGatewaySubnet](#aigatewaysubnet): Subnet through which the AI Gateway reaches backends.

## AiGatewayCheckNameAvailabilityRequest
### Properties
* **name**: string {minLength: 3, maxLength: 24, pattern: "^[a-z0-9][a-z0-9-]{1,22}[a-z0-9]$"} (Required): Name to validate and check for availability.
* **type**: 'Microsoft.ApiManagement/aigateways' (Required): Resource type to check.

## AiGatewayCheckNameAvailabilityResponse
### Properties
* **message**: string: Additional information about the availability result.
* **nameAvailable**: bool (Required): Whether the name is valid and available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: Reason for the availability result.

## AiGatewayCostLimitOverride
### Properties
* **amount**: int (Required): Override budget in US dollars.
* **apiKeyResourceId**: string: Azure resource identifier of the API key selecting this override.
* **claims**: [AiGatewayNameValuePair](#aigatewaynamevaluepair)[]: Authenticated token claims that must all match; claim names are case-sensitive.

## AiGatewayCustomProviderConfiguration
### Properties
* **endpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint) (Required): Provider base endpoint.

## AiGatewayDestinationEndpoint
### Properties
* **url**: string (Required): Destination HTTPS or HTTP URL.

## AiGatewayEndpoint
### Properties
* **api**: string (ReadOnly): API identifier relative to the provider prefix, when metadata is enabled.
* **baseUrl**: string (ReadOnly): HTTPS base URL for SDKs that construct operation paths, when metadata is enabled.
* **url**: string (Required, ReadOnly): Complete HTTPS invocation URL.

## AiGatewayFallbackTarget
### Properties
* **modelId**: string (Required): Resource identifier of a model in the same workspace.

## AiGatewayFoundryProviderConfiguration
### Properties
* **endpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Foundry endpoint.
* **resourceIds**: string[] (Required): Cognitive Services account resource identifiers available to this provider.

## AiGatewayFrontend
### Properties
* **defaultHostname**: string (ReadOnly): Default hostname used to invoke the AI Gateway.

## AiGatewayGitHubAppAuthentication
### Properties
* **appId**: string: GitHub App identifier.
* **installationId**: string: GitHub App installation identifier.
* **privateKey**: string {sensitive} (WriteOnly): GitHub App private key. Omitted from ordinary read responses.

## AiGatewayManagedIdentityAuthentication
### Properties
* **clientId**: string: Client ID of a user-assigned managed identity; omit for system-assigned identity.
* **resource**: string: Target Entra resource or audience URI requested for managed identity authentication.

## AiGatewayMcpUrlConfiguration
### Properties
* **endpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint) (Required): Backend MCP server endpoint.
* **transport**: 'streamableHttp' | string: MCP transport.

## AiGatewayModelDeployment
### Properties
* **modelName**: string (Required): Provider-side model name.
* **modelVersion**: string: Provider-side model version.
* **resourceId**: string: ARM resource identifier of the provider deployment.

## AiGatewayModelEndpoint
### Properties
* **api**: string (Required): Canonical AI Gateway API identifier (for example, v1/chat/completions, v1/responses, v1/messages, or v1/embeddings).
* **path**: string (Required): Backend path relative to the model provider's base endpoint, starting with '/'.

## AiGatewayModelProperties
### Properties
* **deployment**: [AiGatewayModelDeployment](#aigatewaymodeldeployment) (Required): Provider deployment details.
* **description**: string: Description of the model.
* **displayName**: string (Required): Display name of the model.
* **endpoints**: [AiGatewayModelEndpoint](#aigatewaymodelendpoint)[]: API-to-backend-path mappings served by this model.
* **policies**: [AiGatewayPolicy](#aigatewaypolicy)[]: Inline policies applied to this model.
* **providerKind**: 'Custom' | 'Foundry' | 'GitHub' | string (ReadOnly): Parent model provider type.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **supportedEndpoints**: string[]: Runtime endpoints supported by this model.

## AiGatewayModelProviderAuthentication
### Properties
* **githubApp**: [AiGatewayGitHubAppAuthentication](#aigatewaygithubappauthentication): GitHub App credentials when modelProviderType is GitHub.
* **headers**: [AiGatewaySecretHeader](#aigatewaysecretheader)[]: Secret HTTP headers injected when calling the model provider.
* **managedIdentity**: [AiGatewayManagedIdentityAuthentication](#aigatewaymanagedidentityauthentication): Managed identity configuration when modelProviderType is Foundry.

## AiGatewayModelProviderProperties
### Properties
* **authentication**: [AiGatewayModelProviderAuthentication](#aigatewaymodelproviderauthentication): Outbound authentication configuration.
* **custom**: [AiGatewayCustomProviderConfiguration](#aigatewaycustomproviderconfiguration): Custom provider configuration. Required when modelProviderType is Custom.
* **description**: string: Description of the model provider.
* **displayName**: string (Required): Display name of the model provider.
* **foundry**: [AiGatewayFoundryProviderConfiguration](#aigatewayfoundryproviderconfiguration): Foundry configuration. Required when modelProviderType is Foundry.
* **modelProviderType**: 'Custom' | 'Foundry' | 'GitHub' | string (Required): Model provider type. This value cannot be changed after creation.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

## AiGatewayModelProviderSecretAuthentication
### Properties
* **githubApp**: [AiGatewayModelProviderSecretGitHubAppAuthentication](#aigatewaymodelprovidersecretgithubappauthentication): GitHub App credentials when modelProviderType is GitHub.
* **headers**: [AiGatewaySecretHeaderValue](#aigatewaysecretheadervalue)[]: Secret HTTP headers injected when calling the model provider.
* **managedIdentity**: [AiGatewayManagedIdentityAuthentication](#aigatewaymanagedidentityauthentication): Managed identity configuration when modelProviderType is Foundry.

## AiGatewayModelProviderSecretGitHubAppAuthentication
### Properties
* **appId**: string: GitHub App identifier.
* **installationId**: string: GitHub App installation identifier.
* **privateKey**: string {sensitive}: GitHub App private key.

## AiGatewayModelProviderSecrets
### Properties
* **authentication**: [AiGatewayModelProviderSecretAuthentication](#aigatewaymodelprovidersecretauthentication): Outbound authentication configuration including secret values.

## AiGatewayModelSelection
### Properties
* **allowedRequestOverrides**: ('filterModelsForToolCompatibility' | 'model' | 'objective' | string)[]: Allowed per-request behaviors. Omitting the property or sending an empty array denies overrides and disables function-tool compatibility filtering.
* **objective**: 'Balanced' | 'Cost' | 'Quality' | string (Required): Configured quality/cost objective.

## AiGatewayNameValuePair
### Properties
* **name**: string (Required): Entry name.
* **value**: string (Required): Entry value.

## AiGatewayOpenApiConfiguration
### Properties
* **specSource**: [AiGatewayOpenApiSpecSource](#aigatewayopenapispecsource) (Required): OpenAPI document source.

## AiGatewayOpenApiSpecSource
### Properties
* **contentBase64**: string {sensitive} (WriteOnly): Base64-encoded OpenAPI document. Required when type is inline.
* **type**: 'inline' | 'url' | string (Required): Source type.
* **url**: string: URL of the OpenAPI document. Required when type is url.

## AiGatewayOpenTelemetryConfiguration
### Properties
* **logsEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Full OTLP logs endpoint URL, used without appending a signal path.
* **metricsEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Full OTLP metrics endpoint URL, used without appending a signal path.
* **tracesEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Full OTLP traces endpoint URL, used without appending a signal path.

## AiGatewayPolicy
### Properties
* **action**: 'Allow' | 'Deny' | string: IP filtering action.
* **allowCredentials**: bool: Whether browsers may send credentials.
* **allowedHeaders**: string[]: HTTP headers allowed by a CORS policy.
* **allowedMethods**: string[]: HTTP methods allowed by a CORS policy.
* **allowedOrigins**: string[]: Origins allowed by a CORS policy.
* **amount**: int: Cost budget in US dollars.
* **authentication**: [AiGatewayAgentHookAuthentication](#aigatewayagenthookauthentication): Default outbound authentication for agent hooks.
* **cidrRanges**: string[]: CIDR ranges to allow or deny.
* **count**: int {minValue: 1}: Token or request count allowed during a tokenLimit or requestRateLimit period.
* **counterKey**: ('identity' | 'ipAddress' | string)[]: Unique public dimensions used to partition a token, cost, or request counter.
* **endpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): Default destination URL for agent hooks.
* **exposeHeaders**: string[]: Response headers exposed to the browser.
* **fallbackTargets**: [AiGatewayFallbackTarget](#aigatewayfallbacktarget)[]: Ordered fallback model targets.
* **hateSeverity**: 'High' | 'Low' | 'Medium' | 'None' | string: Hate-content severity threshold.
* **headers**: [AiGatewayNameValuePair](#aigatewaynamevaluepair)[]: Literal non-secret default HTTP headers for agent hooks.
* **hooks**: [AiGatewayAgentHooks](#aigatewayagenthooks): Lifecycle hooks; requires agent-hook authoring to be enabled on the gateway.
* **id**: string: Stable identifier, required for costLimit and agentHooks policies.
* **mode**: 'failClosed' | 'failOpen' | string: Default failure mode for agent hooks.
* **overrides**: [AiGatewayCostLimitOverride](#aigatewaycostlimitoverride)[]: Ordered cost-budget overrides; supported only for counterKey [identity]. The first match wins.
* **period**: 'day' | 'hour' | 'minute' | 'month' | 'week' | 'year' | string: Counter period. Token limits support minute/hour/day; request rate limits support minute/hour/day or whole-second ISO 8601 durations (e.g., PT37S); cost limits support hour/day/week/month/year.
* **postInvocation**: bool: Whether to check tool responses for threats.
* **preflightResultMaxAge**: int: Browser preflight cache duration in seconds.
* **preInvocation**: bool: Whether to check tool requests for threats.
* **scope**: 'resource' | 'workspace' | string: Policy scope. Workspace counter policies use workspace; other policies use resource. Agent hooks require an explicit resource scope.
* **selfHarmSeverity**: 'High' | 'Low' | 'Medium' | 'None' | string: Self-harm-content severity threshold.
* **sexualSeverity**: 'High' | 'Low' | 'Medium' | 'None' | string: Sexual-content severity threshold.
* **terminateUnmatchedRequest**: bool: Whether unmatched CORS requests are terminated.
* **threshold**: int: Consecutive failure count that opens a fallback circuit.
* **tripDurationSeconds**: int: Duration for which the fallback circuit remains open.
* **type**: 'agentHooks' | 'contentSafety' | 'cors' | 'costLimit' | 'fallback' | 'ipFilter' | 'requestRateLimit' | 'tokenLimit' | 'toolThreatProtection' | string (Required): Policy type.
* **violenceSeverity**: 'High' | 'Low' | 'Medium' | 'None' | string: Violence-content severity threshold.

## AiGatewayProperties
### Properties
* **backend**: [AiGatewayBackend](#aigatewaybackend): Backend networking configuration.
* **frontend**: [AiGatewayFrontend](#aigatewayfrontend) (ReadOnly): Frontend configuration of the AI Gateway.
* **privateEndpointConnections**: [PrivateEndpointConnection](#privateendpointconnection)[] (ReadOnly): Private endpoint connections associated with the AI Gateway.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **publicNetworkAccess**: 'Disabled' | 'Enabled' | string: Whether public network access is allowed for the AI Gateway.

## AiGatewaySecretHeader
### Properties
* **name**: string (Required): HTTP header name.
* **value**: string {sensitive} (WriteOnly): Secret HTTP header value. Omitted from ordinary read responses.

## AiGatewaySecretHeaderValue
### Properties
* **name**: string (Required): HTTP header name.
* **value**: string {sensitive}: Secret HTTP header value.

## AiGatewaySessionBackendPreference
### Properties
* **key**: string (Required): CEL expression returning the caller session key.

## AiGatewaySubnet
### Properties
* **id**: string (Required): Resource identifier of the subnet. The subnet must be delegated to Microsoft.App/environments and be in the same region as the AI Gateway.

## AiGatewayTelemetryAttributeMapping
### Properties
* **signals**: ('logs' | 'metrics' | 'traces' | string)[] {minLength: 1}: Distinct signals to enrich. Omit to select all configured signals.
* **source**: [AiGatewayTelemetryAttributeSource](#aigatewaytelemetryattributesource) (Required): Claim source. Source claim names must be unique across mappings.

## AiGatewayTelemetryAttributeSource
### Properties
* **kind**: 'claims' (Required): Source kind. Only claims is currently supported.
* **value**: string {minLength: 1} (Required): Nonempty, case-sensitive claim name.

## AiGatewayTelemetryAuthentication
### Properties
* **headers**: [AiGatewaySecretHeader](#aigatewaysecretheader)[]: Secret HTTP headers sent with export requests.
* **managedIdentity**: [AiGatewayTelemetryManagedIdentity](#aigatewaytelemetrymanagedidentity): Managed identity authentication for export requests.

## AiGatewayTelemetryConfiguration
### Properties
* **attributes**: [AiGatewayTelemetryAttributeMapping](#aigatewaytelemetryattributemapping)[]: Observed-claim mappings; an empty array removes existing mappings.

## AiGatewayTelemetryExporterProperties
### Properties
* **applicationInsights**: [AiGatewayApplicationInsightsConfiguration](#aigatewayapplicationinsightsconfiguration): Configuration required for the ApplicationInsights exporter type.
* **authentication**: [AiGatewayTelemetryAuthentication](#aigatewaytelemetryauthentication): Outbound authentication for OpenTelemetry export requests.
* **openTelemetry**: [AiGatewayOpenTelemetryConfiguration](#aigatewayopentelemetryconfiguration): Configuration required for the OpenTelemetry exporter type. At least one signal endpoint is required.
* **payloadCapture**: bool: Capture prompts, completions, and tool input/output; no built-in PII redaction is applied.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **telemetry**: [AiGatewayTelemetryConfiguration](#aigatewaytelemetryconfiguration): Optional observed-claim mappings, supported on native AI Gateway OpenTelemetry exporters.
* **telemetryExporterType**: 'ApplicationInsights' | 'OpenTelemetry' | string (Required): Exporter type, which cannot change after creation.

## AiGatewayTelemetryManagedIdentity
### Properties
* **clientId**: string: User-assigned managed identity client ID; omit for the system-assigned identity.
* **resource**: string: Token audience requested for the managed identity.

## AiGatewayToolServerAuthentication
### Properties
* **headers**: [AiGatewaySecretHeader](#aigatewaysecretheader)[]: Static headers injected when calling the endpoint.
* **managedIdentity**: [AiGatewayToolServerManagedIdentityAuthentication](#aigatewaytoolservermanagedidentityauthentication): Managed identity configuration.
* **oauth2**: [AiGatewayToolServerOauth2Authentication](#aigatewaytoolserveroauth2authentication): OAuth 2.0 configuration.

## AiGatewayToolServerEndpoint
### Properties
* **authentication**: [AiGatewayToolServerAuthentication](#aigatewaytoolserverauthentication): Backend authentication configuration.
* **id**: string: Stable endpoint identifier. Up to 64 alphanumeric characters or hyphens, starting and ending with an alphanumeric character. Generated when omitted.
* **kind**: 'mcp' | 'openApi' | string (Required): Endpoint type.
* **mcp**: [AiGatewayMcpUrlConfiguration](#aigatewaymcpurlconfiguration): Backend MCP configuration. Required when kind is mcp.
* **mode**: 'failClosed' | 'failOpen' | string: Failure mode when the endpoint fails. Defaults to failOpen.
* **namespace**: string: Optional namespace used to prefix tool names.
* **openApi**: [AiGatewayOpenApiConfiguration](#aigatewayopenapiconfiguration): OpenAPI configuration. Required when kind is openApi.
* **tools**: string[]: Upstream tool names or glob patterns to expose.

## AiGatewayToolServerFederation
### Properties
* **appCredential**: [AiGatewayToolServerFederationAppCredential](#aigatewaytoolserverfederationappcredential): Credential used to authenticate the federation application.
* **applicationId**: string: Application (client) ID of the customer-owned federation application.

## AiGatewayToolServerFederationAppCredential
### Properties
* **clientId**: string: Client ID of a user-assigned managed identity available to this AI Gateway.
* **type**: 'userAssignedManagedIdentity' | string (Required): Federation application credential type.

## AiGatewayToolServerLoginLinksRequest
### Properties
* **endpointId**: string (Required): Identifier of the endpoint configured on the tool server.

## AiGatewayToolServerManagedIdentityAuthentication
### Properties
* **clientId**: string: Client ID of a user-assigned managed identity.
* **resource**: string: Token audience for managed identity authentication.

## AiGatewayToolServerOauth2Authentication
### Properties
* **authorizationEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): OAuth authorization endpoint.
* **authorizationParameters**: [AiGatewayToolServerOauth2Parameter](#aigatewaytoolserveroauth2parameter)[]: Additional authorization endpoint parameters.
* **clientId**: string: OAuth client identifier.
* **clientSecret**: string {sensitive} (WriteOnly): OAuth client secret.
* **grantType**: 'authorizationCode' | 'clientCredentials' | string: OAuth grant type.
* **issuer**: string: Expected OAuth authorization-server issuer for remote MCP discovery.
* **loginLink**: string (ReadOnly): Login link used to complete interactive authorization.
* **scopes**: string[]: OAuth scopes to request.
* **status**: string (ReadOnly): Current OAuth connection status.
* **statusUpdatedUtc**: string (ReadOnly): UTC timestamp of the last OAuth connection-status transition.
* **tokenEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): OAuth token endpoint.
* **tokenExchange**: [AiGatewayToolServerTokenExchange](#aigatewaytoolservertokenexchange): Chained token-exchange configuration.
* **tokenParameters**: [AiGatewayToolServerOauth2Parameter](#aigatewaytoolserveroauth2parameter)[]: Additional token endpoint parameters.

## AiGatewayToolServerOauth2LoginLinks
### Properties
* **expiresUtc**: string (Required): UTC expiry of the signed start capability.
* **loginLink**: string {sensitive}: Gateway URL to open to begin consent; includes an expiring signed capability.
* **redirectUri**: string: Gateway callback URI to register with the identity provider.

## AiGatewayToolServerOauth2Parameter
### Properties
* **name**: string (Required): OAuth parameter name.
* **value**: string (Required): OAuth parameter value.

## AiGatewayToolServerProperties
### Properties
* **accessState**: 'active' | 'blocked' | string: Whether the tool server is available to callers.
* **allowList**: string[]: Tool names or patterns explicitly allowed.
* **blockList**: string[]: Tool names or patterns explicitly blocked.
* **description**: string: Description of the tool server.
* **displayName**: string: Display name of the tool server.
* **endpoints**: [AiGatewayToolServerEndpoint](#aigatewaytoolserverendpoint)[]: Endpoint configurations exposed by this tool server.
* **gatewayEndpoints**: [AiGatewayEndpoint](#aigatewayendpoint)[] (ReadOnly): Read-only invocation URLs, with optional SDK metadata when endpoint enrichment is enabled.
* **path**: string: Runtime path for the tool server.
* **policies**: [AiGatewayPolicy](#aigatewaypolicy)[]: Inline policies applied to this tool server.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.
* **subscriptionRequired**: bool: Whether a subscription is required to invoke the tool server.
* **toolServerType**: 'connector' | 'mcp' | 'openApi' | string (Required): Tool server type.
* **versions**: string[]: Runtime API versions exposed by this tool server.

## AiGatewayToolServerSecret
### Properties
* **authentication**: [AiGatewayToolServerSecretAuthentication](#aigatewaytoolserversecretauthentication): Endpoint authentication including secret values.
* **id**: string (Required): Stable endpoint identifier.
* **openApi**: [AiGatewayToolServerSecretOpenApiConfiguration](#aigatewaytoolserversecretopenapiconfiguration): OpenAPI configuration including inline content.

## AiGatewayToolServerSecretAuthentication
### Properties
* **headers**: [AiGatewaySecretHeaderValue](#aigatewaysecretheadervalue)[]: Static headers injected when calling the endpoint.
* **managedIdentity**: [AiGatewayToolServerManagedIdentityAuthentication](#aigatewaytoolservermanagedidentityauthentication): Managed identity configuration.
* **oauth2**: [AiGatewayToolServerSecretOauth2Authentication](#aigatewaytoolserversecretoauth2authentication): OAuth 2.0 configuration.

## AiGatewayToolServerSecretOauth2Authentication
### Properties
* **authorizationEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): OAuth authorization endpoint.
* **authorizationParameters**: [AiGatewayToolServerOauth2Parameter](#aigatewaytoolserveroauth2parameter)[]: Additional authorization endpoint parameters.
* **clientId**: string: OAuth client identifier.
* **clientSecret**: string {sensitive}: OAuth client secret.
* **grantType**: 'authorizationCode' | 'clientCredentials' | string: OAuth grant type.
* **issuer**: string: Expected OAuth authorization-server issuer for remote MCP discovery.
* **loginLink**: string (ReadOnly): Login link used to complete interactive authorization.
* **scopes**: string[]: OAuth scopes to request.
* **status**: string (ReadOnly): Current OAuth connection status.
* **statusUpdatedUtc**: string (ReadOnly): UTC timestamp of the last OAuth connection-status transition.
* **tokenEndpoint**: [AiGatewayDestinationEndpoint](#aigatewaydestinationendpoint): OAuth token endpoint.
* **tokenExchange**: [AiGatewayToolServerTokenExchange](#aigatewaytoolservertokenexchange): Chained token-exchange configuration.
* **tokenParameters**: [AiGatewayToolServerOauth2Parameter](#aigatewaytoolserveroauth2parameter)[]: Additional token endpoint parameters.

## AiGatewayToolServerSecretOpenApiConfiguration
### Properties
* **specSource**: [AiGatewayToolServerSecretOpenApiSpecSource](#aigatewaytoolserversecretopenapispecsource) (Required): OpenAPI document source.

## AiGatewayToolServerSecretOpenApiSpecSource
### Properties
* **contentBase64**: string {sensitive}: Base64-encoded OpenAPI document. Required when type is inline.
* **type**: 'inline' | 'url' | string (Required): Source type.
* **url**: string: URL of the OpenAPI document. Required when type is url.

## AiGatewayToolServerSecrets
### Properties
* **endpoints**: [AiGatewayToolServerSecret](#aigatewaytoolserversecret)[] (Required): Endpoint secret values.

## AiGatewayToolServerTokenExchange
### Properties
* **federatedClientApplication**: [AiGatewayToolServerFederation](#aigatewaytoolserverfederation): Customer-owned federated client application identity.
* **profile**: 'entraOnBehalfOf' | string (Required): Token-exchange profile.
* **scopes**: string[]: Delegated scopes requested from the target tool server resource.

## AiGatewayWorkspaceProperties
### Properties
* **description**: string (Required, ReadOnly): Description of the workspace.
* **displayName**: string (Required, ReadOnly): Display name of the workspace.
* **policies**: [AiGatewayPolicy](#aigatewaypolicy)[]: Inline governance policies for the default workspace.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the resource.

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

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

