# Microsoft.NetworkSecurity @ 2026-10-01-preview

## Resource Microsoft.NetworkSecurity/neuroShields@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): If eTag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {pattern: "^[a-zA-Z0-9]([a-zA-Z0-9._-]{0,62}[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeuroShieldProperties](#neuroshieldproperties) (Required): Properties of the NeuroShield resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.NetworkSecurity/neuroShields' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/neuroShields/protectedResources@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9]([a-zA-Z0-9._-]{0,62}[a-zA-Z0-9])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeuroShieldProtectedResourceProperties](#neuroshieldprotectedresourceproperties) (Required): Properties of the protected resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkSecurity/neuroShields/protectedResources' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/neuroShields/protectedResources/findings@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-zA-Z]([0-9a-zA-Z_.-]{0,126}[0-9a-zA-Z_])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeuroShieldFindingProperties](#neuroshieldfindingproperties) (ReadOnly): Properties of the finding resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkSecurity/neuroShields/protectedResources/findings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-zA-Z]([0-9a-zA-Z_.-]{0,126}[0-9a-zA-Z_])?$"} (Required, DeployTimeConstant): The resource name
* **properties**: [NeuroShieldMitigationProperties](#neuroshieldmitigationproperties) (ReadOnly): Properties of the mitigation resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.NetworkSecurity/neuroShields/summary@2026-10-01-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [NeuroShieldSummaryProperties](#neuroshieldsummaryproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.NetworkSecurity/neuroShields/summary' (ReadOnly, DeployTimeConstant): The resource type

## Function execute (Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations@2026-10-01-preview)
* **Resource**: Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations
* **ApiVersion**: 2026-10-01-preview
* **Output**: [NeuroShieldMitigation](#neuroshieldmitigation)

## Function mitigate (Microsoft.NetworkSecurity/neuroShields/protectedResources/findings@2026-10-01-preview)
* **Resource**: Microsoft.NetworkSecurity/neuroShields/protectedResources/findings
* **ApiVersion**: 2026-10-01-preview
* **Output**: [NeuroShieldMitigationActionResult](#neuroshieldmitigationactionresult)

## Function rollback (Microsoft.NetworkSecurity/neuroShields/protectedResources/findings@2026-10-01-preview)
* **Resource**: Microsoft.NetworkSecurity/neuroShields/protectedResources/findings
* **ApiVersion**: 2026-10-01-preview
* **Output**: [NeuroShieldMitigationActionResult](#neuroshieldmitigationactionresult)

## Function rollback (Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations@2026-10-01-preview)
* **Resource**: Microsoft.NetworkSecurity/neuroShields/protectedResources/mitigations
* **ApiVersion**: 2026-10-01-preview
* **Output**: [NeuroShieldMitigation](#neuroshieldmitigation)

## Function triggerInventoryUpload (Microsoft.NetworkSecurity/neuroShields/protectedResources@2026-10-01-preview)
* **Resource**: Microsoft.NetworkSecurity/neuroShields/protectedResources
* **ApiVersion**: 2026-10-01-preview
* **Output**: [NeuroShieldInventoryUploadRequestResult](#neuroshieldinventoryuploadrequestresult)

## NeuroShieldAgentHealth
### Properties
* **lastSeenTime**: string (ReadOnly): The most recent time a liveness signal was observed. The value is absent until the first signal is received.

## NeuroShieldFindingProperties
### Properties
* **cveId**: string (Required, ReadOnly): Common Vulnerabilities and Exposures (CVE) identifier associated with this finding.
* **description**: string (Required, ReadOnly): Description of the finding.
* **detectedTime**: string (ReadOnly): Detection timestamp for the finding.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the service-generated finding. A successfully materialized
finding reports Succeeded, independently of its runtime operational status.
* **reason**: string (Required, ReadOnly): Explanation of why the virtual machine is affected, including the matching evidence.
* **severity**: 'Critical' | 'High' | 'Low' | 'Medium' | string (Required, ReadOnly): Severity of the finding.
* **status**: 'Active' | 'AwaitingApproval' | 'Mitigated' | 'MitigationInProgress' | 'MitigationsExhausted' | 'Skipped' | 'Unreachable' | string (Required, ReadOnly): Runtime operational status of the finding.
* **virtualMachineArmId**: string (Required, ReadOnly): Fully qualified Azure Resource Manager resource ID of the affected virtual machine or virtual machine scale set instance.

## NeuroShieldInventoryUploadRequestMetadata
### Properties
* **expiresAt**: string (Required, ReadOnly): The time after which Neuron agents must stop observing the request.
* **requestedAt**: string (Required, ReadOnly): The time when the resource provider accepted the request.
* **requestId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, ReadOnly): The stable identifier for the request.

## NeuroShieldInventoryUploadRequestResult
### Properties
* **deduplicated**: bool (Required): Indicates whether an existing unexpired request was reused.
* **expiresAt**: string (Required): The time when the request expires.
* **requestedAt**: string (Required): The time when the resource provider accepted the request.
* **requestId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required): The stable identifier for the accepted request.

## NeuroShieldMitigation
### Properties
* **id**: string (ReadOnly): Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
* **name**: string (ReadOnly): The name of the resource
* **properties**: [NeuroShieldMitigationProperties](#neuroshieldmitigationproperties) (Required): Properties of the mitigation resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: string (ReadOnly): The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"

## NeuroShieldMitigationActionResult
### Properties
* **value**: [NeuroShieldMitigation](#neuroshieldmitigation)[] (Required): The complete set of mitigations updated by the action.

## NeuroShieldMitigationProperties
### Properties
* **appliedTime**: string (ReadOnly): Timestamp when the mitigation was applied.
* **commandsSummary**: string (Required, ReadOnly): User-friendly description of the commands executed by this mitigation.
* **cveId**: string (Required, ReadOnly): Common Vulnerabilities and Exposures (CVE) identifier addressed by this mitigation.
* **findingId**: string (Required, ReadOnly): Resource identifier of the associated finding.
* **isRollbackable**: bool (Required, ReadOnly): Indicates whether rollback is available for this mitigation.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the service-generated mitigation. A successfully materialized
mitigation reports Succeeded, independently of its runtime execution or rollback status.
* **rank**: int {minValue: 1} (Required, ReadOnly): Relative recommendation priority among mitigations for the same finding.
Rank 1 has the highest priority, followed by consecutive ranks 2, 3, and so on.
Ranks are assigned across all sibling mitigations before pagination or filtering,
with ties broken by ordinal mitigation resource name. A mitigation has the same
rank in GET, list, and action responses for an unchanged set of sibling priorities.
Ranks can change when sibling priorities or membership change. Rank is not a
confidence measure or a guarantee of mitigation safety or success.
* **status**: 'AwaitingApproval' | 'Failed' | 'InProgress' | 'Queued' | 'RollbackFailed' | 'RollbackInProgress' | 'RolledBack' | 'Skipped' | 'Succeeded' | string (Required, ReadOnly): Runtime operational status of the mitigation.
* **statusDetails**: string (ReadOnly): Human-readable details for the current mitigation status.
* **virtualMachineArmId**: string (Required, ReadOnly): Fully qualified Azure Resource Manager resource ID of the virtual machine targeted by this mitigation.

## NeuroShieldProperties
### Properties
* **description**: string {maxLength: 512, pattern: "^(?![\s\S]*[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F])[\s\S]*$"}: Human-readable description of the NeuroShield resource. Omission in a full
PUT request resolves to an empty string. Control characters other than tab,
line feed, and carriage return are not allowed.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the NeuroShield resource.
* **resourceGuid**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): System-generated globally unique identifier (GUID) for the NeuroShield resource.
* **responseMode**: 'Auto' | 'Manual' | string (Required): Response mode that controls mitigation serving behavior. A full create or
update (PUT) request must specify Auto or Manual; there is no default.
Omitting responseMode from a PATCH request preserves the existing mode.
* **severityThreshold**: 'Critical' | 'High' | 'Low' | 'Medium' | string: Minimum severity level for mitigation generation. Omission in a full PUT
request resolves to Low; omission in PATCH preserves the value.

## NeuroShieldProtectedResourceIdentity
### Properties
* **principalId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Microsoft Entra service principal ID of the target's system-assigned identity.
A nonzero value is required for SystemAssigned; omit for UserAssigned.
* **tenantId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Microsoft Entra tenant ID of the target's system-assigned identity.
A nonzero value is required for SystemAssigned; omit for UserAssigned.
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): Type of the target identity. None, SystemAssigned, and UserAssigned are supported.
The declared combined system/user-assigned value is rejected by the operation.
There is no default when an identity object is supplied.
* **userAssignedIdentities**: [NeuroShieldProtectedResourceIdentityUserAssignedIdentities](#neuroshieldprotectedresourceidentityuserassignedidentities): User-assigned identities keyed by Azure Resource Manager resource ID.
For UserAssigned, supply exactly one non-null entry with a nonblank key and
nonzero principalId and clientId. Other identity kinds reject a nonempty map.

## NeuroShieldProtectedResourceIdentityUserAssignedIdentities
### Properties
### Additional Properties
* **Additional Properties Type**: [NeuroShieldProtectedResourceUserAssignedIdentity](#neuroshieldprotectedresourceuserassignedidentity)

## NeuroShieldProtectedResourceProperties
### Properties
* **agentHealth**: [NeuroShieldAgentHealth](#neuroshieldagenthealth) (ReadOnly): Approximate health of the Neuron agent, derived from its most recent authenticated data-plane signal.
* **inventoryUploadRequest**: [NeuroShieldInventoryUploadRequestMetadata](#neuroshieldinventoryuploadrequestmetadata) (ReadOnly): The current on-demand inventory upload request, when one is active.
* **provisioningState**: 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | 'Updating' | string (ReadOnly): Provisioning state of the protected resource.
* **targetIdentity**: [NeuroShieldProtectedResourceIdentity](#neuroshieldprotectedresourceidentity): The optional customer VM or VMSS identity used by the Neuron agent. Omission
and explicit None are accepted on create. SystemAssigned requires nonzero
principalId and tenantId; UserAssigned requires exactly one non-null dictionary
entry with nonzero principalId and clientId and no top-level IDs. The declared
combined identity kind is rejected. Caller-supplied identifiers are returned
on read; service-side verification of their association with the target remains
required. Omission on update preserves the stored identity; a supplied identity
must be unchanged. Explicit None cannot clear an existing identity. Changing
identity requires deleting and recreating the protected resource.
* **targetResourceId**: string (Required): Azure Resource Manager resource ID of the target virtual machine or virtual machine scale set.

## NeuroShieldProtectedResourceUserAssignedIdentity
### Properties
* **clientId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Microsoft Entra client ID of the target's user-assigned identity.
A non-null, nonzero value is required when using UserAssigned.
* **principalId**: string {pattern: "^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"}: Microsoft Entra service principal ID of the target's user-assigned identity.
A non-null, nonzero value is required when using UserAssigned.

## NeuroShieldSummaryProperties
### Properties
* **activeFindings**: int {minValue: 0} (Required): Number of active findings.
* **awaitingApprovalMitigations**: int {minValue: 0} (Required): Number of mitigations awaiting customer approval.
* **criticalFindings**: int {minValue: 0} (Required): Number of active critical-severity findings.
* **failedMitigations**: int {minValue: 0} (Required): Number of mitigations whose execution or rollback failed.
* **highFindings**: int {minValue: 0} (Required): Number of active high-severity findings.
* **inProgressMitigations**: int {minValue: 0} (Required): Number of mitigations whose execution is in progress.
* **lowFindings**: int {minValue: 0} (Required): Number of active low-severity findings.
* **mediumFindings**: int {minValue: 0} (Required): Number of active medium-severity findings.
* **protectedCount**: int {minValue: 0} (Required): Number of protected resources.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state of the computed summary resource. A successful read reports
Succeeded; this does not represent the status of the findings or mitigations counted.
* **queuedMitigations**: int {minValue: 0} (Required): Number of mitigations queued for execution.
* **rollbackInProgressMitigations**: int {minValue: 0} (Required): Number of mitigations whose rollback is in progress.
* **scannedProtectedCount**: int {minValue: 0} (Required): Number of protected resources with a current agent assessment.
* **succeededMitigations**: int {minValue: 0} (Required): Number of mitigations that completed successfully.
* **unreachableFindings**: int {minValue: 0} (Required): Number of findings blocked by agent communication failures.

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

