# Microsoft.NetworkSecurity @ 2026-11-03-preview

## Resource Microsoft.NetworkSecurity/agentFabrics@2026-11-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identity assigned to this fabric. The service uses it to reach the
clusters associated with the fabric on the customer's behalf.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,256}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentFabricProperties](#agentfabricproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/agentFabrics/clusterAssociations@2026-11-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,256}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [ClusterAssociationProperties](#clusterassociationproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics/clusterAssociations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/agentFabrics/egressTrustBundles@2026-11-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [EgressTrustBundleProperties](#egresstrustbundleproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics/egressTrustBundles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/agentFabrics/members@2026-11-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,256}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MemberProperties](#memberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/policyGroups@2026-11-03-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-03-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,256}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyGroupProperties](#policygroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/policyGroups' (ReadOnly, DeployTimeConstant): The resource type

## AgentFabricProperties
### Properties
* **contentInspectionProfile**: [ContentInspectionProfile](#contentinspectionprofile): The connection to the customer's Azure Content Safety account. For a new
fabric created with API version `2026-10-07-preview` or later, omitting this profile or supplying {}
requests no inspection capability and uses no platform-owned account or shared-key fallback.

For an existing fabric, omitting the profile from PUT, including requests from older clients,
or supplying {} preserves its customer-owned connection, legacy regional connection, or absence
of connection. The empty object is a request for no connection change, not a stored replacement
profile. Neither omission nor {} removes, probes, or creates a connection or cancels a pending
connection update. Other Fabric fields and policy compatibility rules still apply.
A nonempty request profile requires both endpoint and apiKey, even at the unchanged endpoint.
PUT can rotate the key or replace the endpoint by supplying the complete pair. Tags- or
identity-only PATCH requests cannot change this profile.

Existing legacy fabrics without a profile retain their regional Content Safety endpoint and
authentication path. Omission or {} triggers no connection probe, account-management call, key
retrieval, or credential requirement. Supplying a complete profile explicitly configures a
customer-owned connection; there is no automatic conversion or failed-connection fallback
to regional credentials.

The customer owns, pays for, and operates the account. The service does not create, reserve,
manage, or delete it. The service validates new or changed endpoint/credential configuration
and the required Content Safety API before activation; configuration alone does not indicate
readiness or active policy enforcement. Unchanged configuration, GET, and list do not trigger
a new validation request. A failed replacement preserves the existing connection and credential,
including a legacy regional connection.
* **defaultPolicyGroups**: string[]: The default policy groups to apply to all members of this fabric. A fabric without a configured
inspection connection cannot reference a group containing any ContentInspection policy,
even when that policy's selectors currently match no traffic.
For an existing fabric, compatibility uses the stored configuration when PUT omits
contentInspectionProfile or supplies an empty object. Existing legacy fabrics retain their regional
Content Safety connection, which satisfies the inspection prerequisite without new probes.
A connection still being validated is not an absent connection. Removing a group
reference remains allowed, subject to other validation.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **resourceGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The unique identifier (GUID) assigned to the agent fabric by the resource provider when it is created.
* **trustDomain**: string {maxLength: 253, pattern: "^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$"}: The trust domain that scopes this fabric's member identities. It is the leading component of
each member's identity, which takes the form `<trustDomain>/<agentFabricName>/<memberName>`.
Set at creation and immutable thereafter; when omitted, the shared default trust domain
`microsoft.agentfabric` is used.

## AgentFabricSandboxEndpoint
### Properties
* **name**: string (Required): The name of the endpoint.
* **protocol**: string (Required): The network protocol used by the endpoint.
* **servicePort**: int {minValue: 1, maxValue: 65535} (Required): The port exposed by the service.
* **targetPort**: int {minValue: 1, maxValue: 65535} (Required): The port on the workload targeted by the service.

## AgentFabricSandboxImage
### Properties
* **digest**: string: The image content digest used to pin an exact image version.
* **pullPolicy**: 'Always' | 'IfNotPresent' | string: The policy controlling when the image is pulled.
* **uri**: string (Required): The image reference URI (e.g., registry/repository:tag).

## AgentFabricSandboxResources
### Properties
* **cpu**: string (Required): The amount of CPU to allocate to the workload.
* **disk**: string: The amount of disk to allocate to the workload.
* **memory**: string (Required): The amount of memory to allocate to the workload.

## AgentIdentity
### Properties
* **agentId**: string (Required): The Entra agent ID representing the workload's identity.
* **blueprintId**: string: The Entra agent blueprint ID that this agent identity was instantiated from. The blueprint
describes the agent's declared capabilities and is used to scope the policies applied to the
workload.
* **tenantId**: string (Required): The Azure tenant ID that owns the agent identity.

## AksWorkloadPortMapping
### Properties
* **name**: string (Required): The name of the port mapping.
* **protocol**: string (Required): The network protocol used by the endpoint.
* **servicePort**: int {minValue: 1, maxValue: 65535} (Required): The port exposed by the service.
* **targetPort**: int {minValue: 1, maxValue: 65535} (Required): The port on the workload targeted by the service.

## AksWorkloadReference
### Properties
* **apiVersion**: string (Required): The API group and version of the workload, for example `apps/v1`.
* **kind**: string (Required): The kind of the workload, for example `Deployment`.
* **name**: string {maxLength: 253, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$"} (Required): The name of the workload.
* **namespace**: string {maxLength: 63, pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$"} (Required): The namespace the workload runs in.

## ClusterAssociationProperties
### Properties
* **clusterResourceId**: string (Required): The AKS managed cluster or ACI SandboxGroup to enroll. The resource must be
in the same subscription as the AgentFabric; a different resource group is
allowed. Set at creation and immutable thereafter; to enroll a different
resource, delete and recreate the association. AF rejects the request if
the resource is already associated with another fabric.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **sku**: 'Premium' | 'Standard' | string: Determines which AgentFabric components are deployed to the cluster.
Defaults to Standard when omitted at creation. An update may upgrade
Standard to Premium but cannot downgrade Premium to Standard. The SKU
remains unchanged when omitted during an update.
* **status**: [ClusterAssociationStatus](#clusterassociationstatus) (ReadOnly): Error code and message for a failed association. A failed association is
retained rather than deleted, so the failure can be inspected and retried.
Read-only.
* **workloadClusterGatewayIp**: string (WriteOnly): The IPv4 or IPv6 address of the workload cluster gateway used for
internal Agent Fabric routing. The resource provider validates the value.

## ClusterAssociationStatus
### Properties
* **code**: string (ReadOnly): Stable, machine-readable error code.
* **message**: string (ReadOnly): Human-readable description of the failure.

## ContentInspectionPolicySource
* **Discriminator**: type

### Base Properties

### ContentInspectionPolicyAddressPrefixesSource
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the source(s).
* **type**: 'AddressPrefixes' (Required): The type of source selector.

### ContentInspectionPolicyWorkloadIdPatternsSource
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the source(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of source selector.


## ContentInspectionProfile
### Properties
* **apiKey**: string {sensitive, minLength: 1} (WriteOnly): The nonempty API key for the specified account. Required together with endpoint in every
nonempty request profile, even when the endpoint is unchanged. Supplying a different key
with the endpoint on PUT rotates the stored credential. A missing key in a nonempty profile
is rejected without retrieving a saved key or comparing with the saved endpoint to permit omission.
Null and empty values are rejected, not treated as removal. The key is never returned in
resource, list, or long-running operation responses.
* **endpoint**: string {pattern: "^https://[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.cognitiveservices\.(azure\.com|azure\.us|azure\.cn)/?$"}: The HTTPS account endpoint, for example `https://contoso.cognitiveservices.azure.com/`.
Only Azure Content Safety account endpoints in the service's supported Azure cloud are
accepted. Credentials must not be forwarded to other destinations, including redirects.
Required together with apiKey in a nonempty request profile, including key rotation.
Changing the endpoint requires a key for the new account; the stored key is not reused.

## EgressTrustBundleCertificate
### Properties
* **certificateId**: string (Required, ReadOnly): Stable identifier of this anchor, unique within the bundle. Derived from the
certificate itself, so it is identical wherever the same anchor is served.
* **notAfter**: string (Required, ReadOnly): The time after which the certificate is no longer valid.
* **notBefore**: string (Required, ReadOnly): The time from which the certificate is valid.
* **pem**: string (Required, ReadOnly): The PEM-encoded X.509 public certificate. This never contains private key material.
* **thumbprintSha256**: string (Required, ReadOnly): Lowercase hexadecimal SHA-256 fingerprint of the certificate's DER encoding.

## EgressTrustBundleProperties
### Properties
* **bundleVersion**: string (Required, ReadOnly): Opaque identifier of this bundle's content. It changes whenever the set of anchors
changes and is stable otherwise, so a caller can record what a sandbox was provisioned
with and detect drift without comparing certificate bytes.
* **cacheExpiresAt**: string (Required, ReadOnly): The absolute deadline matching `cacheValiditySeconds`. A cached copy must not be used
after this instant without re-reading. Reaching it means the earlier refresh was missed
or failing; a caller that cannot obtain an acceptable bundle must fail or retry
bring-up rather than silently skip anchor installation.
* **cacheValiditySeconds**: int {minValue: 60} (Required, ReadOnly): How long, in seconds, a caller may serve this bundle from its own cache. This is a
ceiling, not a target: refresh well before it elapses, at roughly half this value, so a
transient failure still leaves time to retry before the cached copy must be discarded.
The service sets this value and may change it to steer how often callers re-read, so
honour the value returned rather than hard-coding an interval. Callers are expected to
cache; a synchronous dependency on this operation during every sandbox launch is not
intended.
* **certificates**: [EgressTrustBundleCertificate](#egresstrustbundlecertificate)[] (Required, ReadOnly): The public certificate authority anchors that make up the bundle, ordered with the
currently signing anchor first. Always contains at least one entry.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource. This resource is computed rather than
provisioned, so a successful read always reports `Succeeded`.

## FqdnFilteringDestination
* **Discriminator**: type

### Base Properties

### FqdnFilteringFqdnsDestination
#### Properties
* **fqdns**: string[] (Required): The fully qualified domain names that identify the destination(s).
* **type**: 'Fqdns' (Required): The type of destination selector.


## FqdnFilteringSource
* **Discriminator**: type

### Base Properties

### FqdnFilteringAddressPrefixesSource
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the source(s).
* **type**: 'AddressPrefixes' (Required): The type of source selector.

### FqdnFilteringWorkloadIdPatternsSource
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the source(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of source selector.


## McpArgumentMatching
### Properties
* **matchCase**: 'CaseInsensitive' | 'CaseSensitive' | string: Whether the comparison is case-sensitive. The default is CaseSensitive.
* **matchType**: 'Contains' | 'ExactMatch' | 'NotContains' | 'NotExactMatch' | string (Required): How the string is compared with the values.
* **path**: string {minLength: 2, maxLength: 256, pattern: "^\$\.[A-Za-z_][A-Za-z0-9_-]*(\.[A-Za-z_][A-Za-z0-9_-]*|\[\*\])*$"}: A JSONPath into the request's params.arguments object, which is `$`: 1 to 8 segments,
the first `.name` and the others `.name` or `[*]` (at most once), for example
`$.repoName` or `$.paths[*]`. With a path, a missing key (also in an array element), a key
that differs only in case, or a value of the wrong type on the way is a mismatch: an Allow
condition holds only when there is none and every selected value passes, and a Deny
condition also holds when there is one, when the path selects nothing, or when a selected
value is not a string or boolean. Without a path every string or boolean argument value and
every object key is compared; this is allowed only for ExactMatch or Contains in a Deny
rule and for NotExactMatch or NotContains in an Allow rule.
* **values**: (string {maxLength: 1024})[] {minLength: 1, maxLength: 64} (Required): The values to compare with: 1 to 64, or 1 to 16 non-empty values for Contains and NotContains.

## McpPolicyDestination
* **Discriminator**: type

### Base Properties

### McpPolicyAddressPrefixesDestination
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the destination(s).
* **type**: 'AddressPrefixes' (Required): The type of destination selector.

### McpPolicyFqdnsDestination
#### Properties
* **fqdns**: string[] (Required): The fully qualified domain names that identify the destination(s).
* **type**: 'Fqdns' (Required): The type of destination selector.

### McpPolicyWorkloadIdPatternsDestination
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the destination(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of destination selector.


## McpPolicySource
* **Discriminator**: type

### Base Properties

### McpPolicyAddressPrefixesSource
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the source(s).
* **type**: 'AddressPrefixes' (Required): The type of source selector.

### McpPolicyWorkloadIdPatternsSource
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the source(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of source selector.


## McpPromptMatching
### Properties
* **arguments**: [McpArgumentMatching](#mcpargumentmatching): Compared with the arguments of a prompts/get request.
* **descriptions**: [McpStringMatching](#mcpstringmatching): Compared with the description of each prompt in a prompts/list response. Needs methods List alone.
* **methods**: ('Get' | 'List' | string)[] {minLength: 1, maxLength: 2}: The prompt methods to match. Omitted means Get. Names and arguments need Get alone. Titles
and descriptions need List alone.
* **names**: [McpStringMatching](#mcpstringmatching): Compared with the prompt name of a prompts/get request.
* **responseContents**: [McpStringMatching](#mcpstringmatching): Compared with the text of each message, result.messages[].content.text, of a prompts/get
response.
* **titles**: [McpStringMatching](#mcpstringmatching): Compared with the title of each prompt in a prompts/list response. Needs methods List alone.

## McpRule
### Properties
* **action**: 'Allow' | 'Deny' | string: The action to take for the specified MCP tools.
* **matchingConditions**: [McpRuleMatchingConditions](#mcprulematchingconditions): The conditions of the rule. A rule without an action uses defaultAction.
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9_.-]*$"}: The name of the rule: 1 to 63 ASCII letters, digits, '_', '.' or '-', starting with a
letter or digit, and unique within the policy ignoring case. Flow logs report the rule
that decided as `mcp-<n>/<name>`.
* **priority**: int {minValue: 1}: The priority of the rule, unique within the policy. Rules are tried from the lowest value
and the first rule that matches decides; a policy has 1 to 5 rules. When none
matches, defaultAction applies to every MCP request except session requests (initialize,
ping, notifications, the list methods, JSON-RPC responses, and requests with no body such
as GET and DELETE), which pass.
* **tools**: string[]: Deprecated. Legacy MCP tool names retained for compatibility; use matchingConditions.destinations.toolMatching.names for new rules.

## McpRuleDestinationMatching
### Properties
* **promptMatching**: [McpPromptMatching](#mcppromptmatching): Conditions on prompt requests.
* **protocolVersions**: [McpStringMatching](#mcpstringmatching): Compared with params.protocolVersion of an initialize request, the protocol version such as
2025-06-18 that a client names when it starts a session. A request that names no protocol
version does not match the rule, so a Deny rule blocks sessions that start with a listed version.
* **serverFqdns**: string[] {minLength: 1, maxLength: 16}: The MCP servers: exact names or one leading `*.`, each inside the policy destination.
Omitted means every server of the policy destination.
* **toolMatching**: [McpToolMatching](#mcptoolmatching): Conditions on tool requests.

## McpRuleMatchingConditions
### Properties
* **destinations**: [McpRuleDestinationMatching](#mcpruledestinationmatching) (Required): The servers and requests the rule matches.

## McpStringMatching
### Properties
* **matchCase**: 'CaseInsensitive' | 'CaseSensitive' | string: Whether the comparison is case-sensitive. The default is CaseSensitive.
* **matchType**: 'Contains' | 'ExactMatch' | 'NotContains' | 'NotExactMatch' | string (Required): How the string is compared with the values.
* **values**: (string {maxLength: 1024})[] {minLength: 1, maxLength: 64} (Required): The values to compare with: 1 to 64, or 1 to 16 non-empty values for Contains and NotContains.

## McpToolMatching
### Properties
* **callArguments**: [McpArgumentMatching](#mcpargumentmatching): Compared with the arguments of a tools/call request.
* **descriptions**: [McpStringMatching](#mcpstringmatching): Compared with the description of each tool in a tools/list response. Needs methods List alone.
* **methods**: ('Call' | 'List' | string)[] {minLength: 1, maxLength: 2}: The tool methods to match. Omitted means Call. Names and callArguments need Call alone.
Titles and descriptions need List alone.
* **names**: [McpStringMatching](#mcpstringmatching): Compared with the tool name of a tools/call request.
* **responseContents**: [McpStringMatching](#mcpstringmatching): Compared with the text of each content item, result.content[].text, of a tools/call response.
* **titles**: [McpStringMatching](#mcpstringmatching): Compared with the title of each tool in a tools/list response. Needs methods List alone.

## MemberProperties
### Properties
* **fqdn**: string: The customer-provided fully qualified domain name associated with the member.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **spiffeId**: string (ReadOnly): The SPIFFE ID that identifies this member's workload identity, system-assigned by the service
at creation time. It takes the form `spiffe://<trustDomain>/<agentFabricName>/<memberName>`,
using the owning fabric's trust domain (or the default `microsoft.agentfabric` when unset), with
all segments lower-cased to conform to the SPIFFE ID scheme. Read-only.
* **workload**: [WorkloadBase](#workloadbase): The workload configuration of the member. Set at creation and immutable
thereafter; to change the workload, delete and recreate the member.

## NetworkSecurityPolicyBase
* **Discriminator**: type

### Base Properties

### ContentInspectionPolicy
#### Properties
* **promptInjectionProtection**: [PromptInjectionProtection](#promptinjectionprotection): The prompt injection protection configuration.
* **source**: [ContentInspectionPolicySource](#contentinspectionpolicysource) (Required): The source details for the policy.
* **type**: 'ContentInspection' (Required): The network security policy type.

### FqdnFilteringPolicy
#### Properties
* **destination**: [FqdnFilteringDestination](#fqdnfilteringdestination): The destination details for the policy.
* **direction**: 'Both' | 'Inbound' | 'Outbound' | string: The direction of traffic for the policy.
* **name**: string: The name of the policy.
* **ports**: int[]: The ports for the policy.
* **priority**: int: The priority of the policy.
* **source**: [FqdnFilteringSource](#fqdnfilteringsource) (Required): The source details for the policy.
* **type**: 'FqdnFiltering' (Required): The network security policy type.

### McpPolicy
#### Properties
* **defaultAction**: 'Allow' | 'Deny' | string (Required): The default action to take when no rule in the policy matches.
* **destination**: [McpPolicyDestination](#mcppolicydestination) (Required): The MCP server(s) that this policy applies to.
* **rules**: [McpRule](#mcprule)[] (Required): The list of MCP rules.
* **source**: [McpPolicySource](#mcppolicysource) (Required): The source(s) that this policy applies to.
* **type**: 'Mcp' (Required): The network security policy type.

### TlsInspectionPolicy
#### Properties
* **certificate**: [TlsInspectionCertificateBase](#tlsinspectioncertificatebase) (Required): The certificate configuration used for TLS inspection.
* **defaultAction**: 'Bypass' | 'Inspect' | string: The action for TLS connections that no rule matches, and for rules without an action. If omitted, Inspect.
* **rules**: [TlsInspectionRule](#tlsinspectionrule)[] {maxLength: 1}: The TLS inspection rules. At most one rule is supported.
* **source**: [TlsInspectionPolicySource](#tlsinspectionpolicysource) (Required): The source details for the policy.
* **type**: 'TlsInspection' (Required): The network security policy type.

### UrlFilteringPolicy
#### Properties
* **defaultAction**: 'Allow' | 'Deny' | string (Required): The action for a request to a host that one of the policy's rules names when no rule matches,
and the action of a rule that has none. Requests to other hosts are not decided by this policy.
* **destination**: [UrlFilteringDestination](#urlfilteringdestination): The destination details for the policy.
* **rules**: [UrlFilteringRule](#urlfilteringrule)[] (Required): The list of URL filtering rules. Service validation may limit rules-based policies to 1 to 5
rules; the schema retains the earlier array shape for compatibility. Rules are evaluated in
ascending priority order and the first matching rule decides; rule priorities must be unique
within the policy. A rule without an action uses the policy defaultAction. When no rule matches
a request to a host that a rule names, the policy defaultAction applies. Requests to other
hosts are not decided by this policy.
* **source**: [UrlFilteringSource](#urlfilteringsource) (Required): The source details for the policy.
* **type**: 'UrlFiltering' (Required): The network security policy type.


## PolicyGroupProperties
### Properties
* **description**: string: The description of the policy group.
* **displayName**: string: The display name of the policy group.
* **networkSecurityPolicies**: [NetworkSecurityPolicyBase](#networksecuritypolicybase)[]: The list of network security policies. A PUT introducing a ContentInspection
policy is incompatible if any associated fabric has no configured inspection connection,
regardless of whether selectors currently match traffic. The request is rejected before
persisting or distributing the proposed changes, preserving the previously
accepted policies; mixed compatible and incompatible associations cannot partially apply
changes or silently skip inspection. An unattached group, or one attached only to compatible
fabrics, may contain ContentInspection policies. Removing ContentInspection policies remains allowed,
subject to other validation.
* **priority**: int: The priority of the policy group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

## PromptInjectionProtection
### Properties
* **onDetection**: 'Alert' | 'BlockAndAlert' | 'Sanitize' | string (Required): The action to take when prompt injection is detected.
* **promptLocations**: string[]: The JSONPath expressions selecting the parts of the request body to scan for prompt injection.
* **responseLocations**: string[]: The JSONPath expressions selecting the parts of the response body to scan for prompt injection.
* **sensitivity**: 'High' | 'Low' | 'Medium' | string: The sensitivity level of prompt injection detection.

## SystemAssignedServiceIdentity
### Properties
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **tenantId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
* **type**: 'None' | 'SystemAssigned' | string (Required): Type of managed service identity (either system assigned, or none).

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## TlsInspectionCertificateBase
* **Discriminator**: mode

### Base Properties

### AzureManagedCaCertificate
#### Properties
* **mode**: 'AzureManagedCA' (Required): The source mode of the TLS inspection certificate.


## TlsInspectionPolicySource
* **Discriminator**: type

### Base Properties

### TlsInspectionPolicyWorkloadIdPatternsSource
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the source(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of source selector.


## TlsInspectionRule
### Properties
* **action**: 'Bypass' | 'Inspect' | string: The action for TLS connections that match the rule. If omitted, the rule takes the policy's defaultAction, so it only matters for rule ordering.
* **destinations**: [TlsInspectionRuleDestination](#tlsinspectionruledestination)[] {minLength: 1, maxLength: 1} (Required): The destinations that the rule matches. A connection matches the rule when it matches any of them. At most one destination is supported.
* **name**: string {minLength: 1, maxLength: 63, pattern: "^[A-Za-z0-9][A-Za-z0-9_.-]*$"} (Required): The name of the rule, unique within the policy ignoring case.
* **priority**: int {minValue: 1} (Required): The priority of the rule, unique within the policy. Rules are evaluated in ascending priority order and the first match applies.

## TlsInspectionRuleDestination
* **Discriminator**: type

### Base Properties

### TlsInspectionRuleFqdnsDestination
#### Properties
* **fqdns**: string[] {minLength: 1, maxLength: 100} (Required): The fully qualified domain names. Each is an exact name, or a name after one leading '*.', which matches that name and any subdomain of it. Matching ignores case and one trailing dot.
* **type**: 'Fqdns' (Required): The type of destination selector.


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

## UrlFilteringDestination
* **Discriminator**: type

### Base Properties

### UrlFilteringAddressPrefixesDestination
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the destination(s).
* **type**: 'AddressPrefixes' (Required): The type of destination selector.

### UrlFilteringFqdnsDestination
#### Properties
* **fqdns**: string[] (Required): The fully qualified domain names that identify the destination(s).
* **type**: 'Fqdns' (Required): The type of destination selector.

### UrlFilteringWorkloadIdPatternsDestination
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the destination(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of destination selector.


## UrlFilteringRule
### Properties
* **action**: 'Allow' | 'Deny' | string: The action to take when the rule matches. If omitted, the rule uses the policy defaultAction.
* **hostname**: string: The hostname matched by the rule, such as api.contoso.com or *.contoso.com, with no scheme,
port or path. Optional in the schema for compatibility; specify it for rules-based authoring.
* **method**: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | string: The HTTP method matched by the rule. If omitted, the rule matches any method.
* **name**: string (Required): The name of the rule.
* **paths**: string[]: The URL paths matched by the rule. If omitted, the rule matches any path.
* **priority**: int (Required): The priority of the rule. Rules are evaluated in ascending priority order.

## UrlFilteringSource
* **Discriminator**: type

### Base Properties

### UrlFilteringAddressPrefixesSource
#### Properties
* **prefixes**: string[] (Required): The IP address prefixes, in CIDR notation, that identify the source(s).
* **type**: 'AddressPrefixes' (Required): The type of source selector.

### UrlFilteringWorkloadIdPatternsSource
#### Properties
* **patterns**: string[] (Required): The workload ID patterns that identify the source(s).
* **type**: 'WorkloadIdPatterns' (Required): The type of source selector.


## WorkloadBase
* **Discriminator**: type

### Base Properties
* **memberGuid**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: The unique identifier (GUID) assigned to the member when it is created. For most workload
types this is assigned by the resource provider and is read-only. Starting in API version
`2026-10-07-preview`, ACI workloads instead supply this value at creation: the ACI resource
provider generates the GUID for the sandbox and this field is immutable afterward. Starting in
API version `2026-11-02-preview`, the ACI member resource name is this GUID: the service sets
memberGuid from the member name, and a value supplied in the request must match the member name.

### AciWorkload
#### Properties
* **agentIdentity**: [AgentIdentity](#agentidentity): The Entra agent identity associated with the workload.
* **resourceId**: string (Required): The Azure Resource Manager resource ID of the Azure Container Instances (ACI)
resource backing this member's sandbox. Starting in API version
`2026-10-07-preview`, this identifies the parent SandboxGroup -- the enrollment
boundary associated with the fabric through a ClusterAssociation -- rather than
the individual container group.
* **type**: 'ACI' (Required): The workload type.
* **workloadId**: string {minLength: 1} (Required): The human-readable name of the ACI sandbox. The ACI resource provider supplies it at creation.
It must be unique within the agent fabric and cannot be changed after the member is created.
The member resource name is the sandbox GUID, not this name.

### AgentFabricSandboxWorkload
#### Properties
* **agentIdentity**: [AgentIdentity](#agentidentity): The Entra agent identity associated with the workload.
* **domain**: string (Required): The resolvable DNS name assigned to the workload.
* **endpoints**: [AgentFabricSandboxEndpoint](#agentfabricsandboxendpoint)[]: The network endpoints exposed by the workload.
* **image**: [AgentFabricSandboxImage](#agentfabricsandboximage) (Required): The container image to run for the workload.
* **resources**: [AgentFabricSandboxResources](#agentfabricsandboxresources) (Required): The compute resources allocated to the workload.
* **type**: 'AgentFabricSandbox' (Required): The workload type.
* **workloadId**: string (ReadOnly): The unique identifier assigned to the workload by the resource provider.

### AksWorkload
#### Properties
* **clusterAssociationId**: string (Required): The Azure Resource Manager resource ID of the cluster association through which this member's workload is enrolled.
* **clusterResourceId**: string (Required): The Azure Resource Manager resource ID of the managed cluster that hosts the workload.
* **endpoints**: [AksWorkloadPortMapping](#aksworkloadportmapping)[]: The network endpoints exposed by the workload.
* **type**: 'AKS' (Required): The workload type.
* **workload**: [AksWorkloadReference](#aksworkloadreference) (Required): The Kubernetes workload enrolled as this member. Reported when the workload is discovered in the enrolled cluster; member identity derives from the fabric and member name alone.
* **workloadId**: string (ReadOnly): The unique identifier assigned to the workload by the resource provider.


