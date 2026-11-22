# Microsoft.NetworkSecurity @ 2026-07-21-preview

## Resource Microsoft.NetworkSecurity/agentFabrics@2026-07-21-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [SystemAssignedServiceIdentity](#systemassignedserviceidentity): The managed service identity assigned to this fabric. The service uses it to reach the
clusters associated with the fabric on the customer's behalf.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [AgentFabricProperties](#agentfabricproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/agentFabrics/members@2026-07-21-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MemberProperties](#memberproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/agentFabrics/members' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/policyGroups@2026-07-21-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-07-21-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyGroupProperties](#policygroupproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/policyGroups' (ReadOnly, DeployTimeConstant): The resource type

## AgentFabricProperties
### Properties
* **defaultPolicyGroups**: string[]: The default policy groups to apply to all members of this fabric.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
* **trustDomain**: string {maxLength: 253, pattern: "^[a-z0-9]([a-z0-9.-]*[a-z0-9])?$"}: The trust domain that scopes this fabric's member identities. It is the leading component of
each member's identity, which takes the form `<trustDomain>/<agentFabricName>/<memberName>`.
Set at creation and immutable thereafter; when omitted, the shared default trust domain
`microsoft.agentfabric` is used.

## AgentFabricSandboxEndpoint
### Properties
* **name**: string (Required): The name of the endpoint.
* **port**: int (Required): The port the endpoint listens on.

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
* **tenantId**: string (Required): The Azure tenant ID that owns the agent identity.

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


## McpRule
### Properties
* **action**: 'Allow' | 'Deny' | string (Required): The action to take for the specified MCP tools.
* **tools**: string[] (Required): The MCP tool names that the rule applies to.

## MemberProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.
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
* **source**: [TlsInspectionPolicySource](#tlsinspectionpolicysource) (Required): The source details for the policy.
* **type**: 'TlsInspection' (Required): The network security policy type.

### UrlFilteringPolicy
#### Properties
* **defaultAction**: 'Allow' | 'Deny' | string (Required): The default action to take when no rule in the policy matches.
* **destination**: [UrlFilteringDestination](#urlfilteringdestination): The destination details for the policy.
* **rules**: [UrlFilteringRule](#urlfilteringrule)[] (Required): The list of URL filtering rules.
* **source**: [UrlFilteringSource](#urlfilteringsource) (Required): The source details for the policy.
* **type**: 'UrlFiltering' (Required): The network security policy type.


## PolicyGroupProperties
### Properties
* **description**: string: The description of the policy group.
* **displayName**: string: The display name of the policy group.
* **networkSecurityPolicies**: [NetworkSecurityPolicyBase](#networksecuritypolicybase)[]: The list of network security policies.
* **priority**: int: The priority of the policy group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Deleting' | 'Failed' | 'Provisioning' | 'Succeeded' | 'Updating' | string (ReadOnly): The provisioning state of the resource.

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
* **action**: 'Allow' | 'Deny' | string (Required): The action to take when the rule matches.
* **hostname**: string: The hostname matched by the rule. If omitted, the rule matches any hostname.
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
* **workloadId**: string (ReadOnly): The unique identifier assigned to the workload by the resource provider.

### AciWorkload
#### Properties
* **resourceId**: string (Required): The Azure Resource Manager resource ID of the Azure Container Instances (ACI)
resource backing this member's sandbox. Starting in API version
`2026-10-07-preview`, this identifies the parent SandboxGroup -- the enrollment
boundary associated with the fabric through a ClusterAssociation -- rather than
the individual container group.
* **type**: 'ACI' (Required): The workload type.

### AgentFabricSandboxWorkload
#### Properties
* **agentIdentity**: [AgentIdentity](#agentidentity): The Entra agent identity associated with the workload.
* **domain**: string (Required): The resolvable DNS name assigned to the workload.
* **endpoints**: [AgentFabricSandboxEndpoint](#agentfabricsandboxendpoint)[]: The network endpoints exposed by the workload.
* **image**: [AgentFabricSandboxImage](#agentfabricsandboximage) (Required): The container image to run for the workload.
* **resources**: [AgentFabricSandboxResources](#agentfabricsandboxresources) (Required): The compute resources allocated to the workload.
* **type**: 'AgentFabricSandbox' (Required): The workload type.


