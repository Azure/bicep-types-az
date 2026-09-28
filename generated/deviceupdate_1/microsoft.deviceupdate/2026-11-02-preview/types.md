# Microsoft.DeviceUpdate @ 2026-11-02-preview

## Resource Microsoft.DeviceUpdate/updateInstances@2026-11-02-preview
* **Readable Scope(s)**: ResourceGroup
* **Writable Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2026-11-02-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **identity**: [ManagedServiceIdentity](#managedserviceidentity): The managed service identities assigned to this resource.
* **location**: string (Required): The geo-location where the resource lives
* **name**: string {minLength: 3, maxLength: 36, pattern: "^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [UpdateInstanceProperties](#updateinstanceproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **tags**: [TrackedResourceTags](#trackedresourcetags): Resource tags.
* **type**: 'Microsoft.DeviceUpdate/updateInstances' (ReadOnly, DeployTimeConstant): The resource type

## Function checkNameAvailability (Microsoft.DeviceUpdate@2026-11-02-preview)
* **Resource**: Microsoft.DeviceUpdate
* **ApiVersion**: 2026-11-02-preview
* **Input**: [CheckNameAvailabilityRequest](#checknameavailabilityrequest)
* **Output**: [CheckNameAvailabilityResponse](#checknameavailabilityresponse)

## Function linkInitiate (Microsoft.DeviceUpdate/updateInstances@2026-11-02-preview)
* **Resource**: Microsoft.DeviceUpdate/updateInstances
* **ApiVersion**: 2026-11-02-preview
* **Input**: [LinkInitiateRequest](#linkinitiaterequest)
* **Output**: [AccountLinking](#accountlinking)

## Function linkNotify (Microsoft.DeviceUpdate/updateInstances@2026-11-02-preview)
* **Resource**: Microsoft.DeviceUpdate/updateInstances
* **ApiVersion**: 2026-11-02-preview
* **Input**: [LinkNotifyRequest](#linknotifyrequest)
* **Output**: [AccountLinking](#accountlinking)

## Function linkPreflight (Microsoft.DeviceUpdate/updateInstances@2026-11-02-preview)
* **Resource**: Microsoft.DeviceUpdate/updateInstances
* **ApiVersion**: 2026-11-02-preview
* **Input**: [LinkPreflightRequest](#linkpreflightrequest)
* **Output**: [LinkPreflightResponse](#linkpreflightresponse)

## Function linkUpdate (Microsoft.DeviceUpdate/updateInstances@2026-11-02-preview)
* **Resource**: Microsoft.DeviceUpdate/updateInstances
* **ApiVersion**: 2026-11-02-preview
* **Input**: [LinkUpdateRequest](#linkupdaterequest)
* **Output**: [UpdateInstanceLinkUpdateResponse](#updateinstancelinkupdateresponse)

## AccountLinking
### Properties
* **linkingState**: 'InProgress' | 'Orphaned' | 'Succeeded' | string (Required): The current linking state. Absent before any link attempt (logical NotLinked state).
See AccountLinkingState for the full state machine and transition rules.
* **namespaceResourceId**: string (Required): The ARM resource ID of the linked Azure Device Registry namespace.

## CheckNameAvailabilityRequest
### Properties
* **name**: string: The name of the resource for which availability needs to be checked.
* **type**: string: The resource type.

## CheckNameAvailabilityResponse
### Properties
* **message**: string: Detailed reason why the given name is available.
* **nameAvailable**: bool: Indicates if the resource name is available.
* **reason**: 'AlreadyExists' | 'Invalid' | string: The reason why the given name is not available.

## ErrorAdditionalInfo
### Properties
* **info**: any (ReadOnly): The additional info.
* **type**: string (ReadOnly): The additional info type.

## ErrorDetail
### Properties
* **additionalInfo**: [ErrorAdditionalInfo](#erroradditionalinfo)[] (ReadOnly): The error additional info.
* **code**: string (ReadOnly): The error code.
* **details**: [ErrorDetail](#errordetail)[] (ReadOnly): The error details.
* **message**: string (ReadOnly): The error message.
* **target**: string (ReadOnly): The error target.

## InboundCallerIdentity
### Properties
* **type**: 'None' | 'SystemAssigned' | 'SystemAssigned,UserAssigned' | 'UserAssigned' | string (Required): The type of managed identity.
* **userAssignedIdentity**: string: ARM resource ID of the user-assigned managed identity. Required when type is "UserAssigned".

## LinkedResourceMetadata
### Properties
* **deviceCount**: int: Total number of devices in the hub.

## LinkInitiateRequest
### Properties
* **dataAddress**: string (Required): Data-plane address of the ADR namespace.
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity) (Required): Managed Identity the resource should use for ADR communication.
* **namespaceResourceId**: string (Required): ARM resource ID of the namespace.
* **namespaceUuid**: string (Required): Globally unique namespace identifier for backend operations.

## LinkNotifyRequest
### Properties
* **action**: 'commit' | 'fail' | 'namespaceDeleted' | string (Required): The action to perform on the linking state.
* **errorCode**: string: Error code describing the failure. Required when action is "fail"; ignored otherwise.
Tracked on ADR's LRO for diagnostics.
* **reason**: string: Human-readable reason for the failure. Required when action is "fail"; ignored otherwise.
Tracked on ADR's LRO for diagnostics.

## LinkPreflightRequest
### Properties
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity) (Required): Managed Identity the resource should use for ADR communication.
* **namespaceResourceId**: string (Required): ARM resource ID of the namespace. Resource stores this for ARM property visibility and optional best-effort deletion notification.
* **namespaceUuid**: string (Required): Globally unique namespace identifier for backend operations.

## LinkPreflightResponse
### Properties
* **errors**: [ErrorDetail](#errordetail)[]: Array of blocking conditions when status is NotReady.
* **metadata**: [LinkedResourceMetadata](#linkedresourcemetadata): Resource-defined sub-object for resource-internal data not available via ARM GET.
* **status**: 'NotReady' | 'Ready' | string (Required): Ready if all readiness checks pass, NotReady if any blocking error exists.
* **warnings**: [ErrorDetail](#errordetail)[]: Array of non-blocking conditions ADR surfaces to the customer (e.g., edge/module presence per C3). May appear with either Ready or NotReady.

## LinkUpdateRequest
### Properties
* **dataAddress**: string: ADR data-plane address for the namespace. Resource uses this for post-link runtime communication (device sync, provisioning).
* **inboundCallerIdentity**: [InboundCallerIdentity](#inboundcalleridentity): User or Managed Identity for inbound calls from Azure Device Registry.
* **namespaceResourceId**: string: ARM resource ID of the namespace.
* **namespaceUuid**: string: Globally unique namespace identifier for backend operations.

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

## UpdateInstanceLinkUpdateResponse
### Properties
* **state**: string (Required): Placeholder state for the 200 response. This value is only a placeholder to satisfy the response contract and does not represent backend operation state.

## UpdateInstanceProperties
### Properties
* **linking**: [AccountLinking](#accountlinking) (ReadOnly): Account linking state. Absent until first /link/initiate.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Creating' | 'Deleting' | 'Failed' | 'Succeeded' | string (ReadOnly): Provisioning state.
* **serviceAddress**: string (ReadOnly): Service-facing address for ADR→ADU communication.

## UserAssignedIdentity
### Properties
* **clientId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The client ID of the assigned identity.
* **principalId**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (ReadOnly): The principal ID of the assigned identity.

