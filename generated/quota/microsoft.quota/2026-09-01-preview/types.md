# Microsoft.Quota @ 2026-09-01-preview

## Resource Microsoft.Quota/groupQuotas@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotasEntityProperties](#groupquotasentityproperties): Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/groupQuotaRequests@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubmittedResourceRequestStatusProperties](#submittedresourcerequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/groupQuotaRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/groupQuotaLimits@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaLimitListProperties](#groupquotalimitlistproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/groupQuotaLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/locationSettings@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotasEnforcementStatusProperties](#groupquotasenforcementstatusproperties)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/locationSettings' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocationRequests@2026-09-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaAllocationRequestStatusProperties](#quotaallocationrequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocationRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocations@2026-09-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionQuotaAllocationsListProperties](#subscriptionquotaallocationslistproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptionRequests@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionRequestStatusProperties](#groupquotasubscriptionrequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptionRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptions@2026-09-01-preview
* **Readable Scope(s)**: ManagementGroup
* **Writable Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionIdProperties](#groupquotasubscriptionidproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/incomingQuotaTransfers@2026-09-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [IncomingQuotaTransferProperties](#incomingquotatransferproperties) (ReadOnly): Properties of the incoming quota transfer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/incomingQuotaTransfers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/quotaRequests@2026-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaRequestProperties](#quotarequestproperties) (ReadOnly): Quota request details.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/quotaRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/quotas@2026-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the specified resource, based on the API called, Quotas or Usages.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/quotaTransfers@2026-09-01-preview
* **Readable Scope(s)**: Extension
* **Writable Scope(s)**: Extension
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **etag**: string (ReadOnly): "If etag is provided in the response body, it may also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.")
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-zA-Z0-9][a-zA-Z0-9._-]{2,62}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaTransferProperties](#quotatransferproperties): Properties of the quota transfer.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/quotaTransfers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/usages@2026-09-01-preview
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-09-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UsagesProperties](#usagesproperties) (ReadOnly): Usage properties for the specified resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/usages' (ReadOnly, DeployTimeConstant): The resource type

## AllocatedQuotaToSubscriptionList
### Properties
* **value**: [AllocatedToSubscription](#allocatedtosubscription)[]: List of Group Quota Limit allocated to subscriptions.

## AllocatedToSubscription
### Properties
* **quotaAllocated**: int: The amount of quota allocated to this subscriptionId from the GroupQuotasEntity.
* **subscriptionId**: string: An Azure subscriptionId.

## ApprovalRecord
### Properties
* **actor**: string (Required): Principal that performed the approval (typically a UPN or service principal id).
* **comment**: string {maxLength: 500}: Optional free-text comment supplied by the approver.
* **occurredAt**: string (Required): Timestamp at which the approval was recorded.

## CancellationRecord
### Properties
* **actor**: string (Required): Principal that performed the cancellation.
* **occurredAt**: string (Required): Timestamp at which the cancellation was recorded.
* **reason**: string {maxLength: 500}: Optional free-text reason supplied by the donor when cancelling.

## GroupQuotaDetailsName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string (ReadOnly): Resource name.

## GroupQuotaLimit
### Properties
* **properties**: [GroupQuotaLimitProperties](#groupquotalimitproperties): Group Quota properties for the specified resource.

## GroupQuotaLimitListProperties
### Properties
* **nextLink**: string (ReadOnly): The URL to use for getting the next set of results.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **value**: [GroupQuotaLimit](#groupquotalimit)[]: List of Group Quota Limit details.

## GroupQuotaLimitProperties
### Properties
* **allocatedToSubscriptions**: [AllocatedQuotaToSubscriptionList](#allocatedquotatosubscriptionlist) (ReadOnly): Quota allocated to subscriptions
* **availableLimit**: int (ReadOnly): The available Group Quota Limit at the MG level. This Group quota can be allocated to subscription(s).
* **comment**: string: Any comment related to quota request.
* **limit**: int: The current Group Quota Limit at the parentId level.
* **name**: [GroupQuotaDetailsName](#groupquotadetailsname) (ReadOnly): Name of the resource provided by the resource provider. This property is already included in the request URI, so it is a readonly property returned in the response.
* **resourceName**: string: The resource name, such as SKU name.
* **unit**: string (ReadOnly): The usages units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## GroupQuotaRequestBase
### Properties
* **properties**: [GroupQuotaRequestBaseProperties](#groupquotarequestbaseproperties)

## GroupQuotaRequestBaseProperties
### Properties
* **comments**: string: GroupQuota Request comments and details for request. This is optional paramter to provide more details related to the requested resource.
* **limit**: int: The new quota limit for the subscription. The incremental quota will be allocated from pre-approved group quota.
* **name**: [GroupQuotaRequestBasePropertiesName](#groupquotarequestbasepropertiesname) (ReadOnly): Name of the resource provided by the resource provider. This property is already included in the request URI, so it is a readonly property returned in the response.
* **region**: string: Location/Azure region for the quota requested for resource.

## GroupQuotaRequestBasePropertiesName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string (ReadOnly): Resource name.

## GroupQuotasEnforcementStatusProperties
### Properties
* **enforcedGroupName**: string (ReadOnly): The name of the group that is enforced.
* **enforcementEnabled**: 'Disabled' | 'Enabled' | 'NotAvailable' | string: Is the GroupQuota Enforcement enabled for the Azure region.
* **faultCode**: string (ReadOnly): Details of the failure.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.

## GroupQuotasEntityProperties
### Properties
* **displayName**: string: Display name of the GroupQuota entity.
* **groupType**: 'AllocationGroup' | 'EnforcedGroup' | string (ReadOnly): Type of the group.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Provisioning state of the operation.

## GroupQuotaSubscriptionIdProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Status of this subscriptionId being associated with the GroupQuotasEntity.
* **subscriptionId**: string: An Azure subscriptionId.

## GroupQuotaSubscriptionRequestStatusProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Status of this subscriptionId being associated with the GroupQuotasEntity.
* **requestSubmitTime**: string: The request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ
* **subscriptionId**: string: The subscription Id

## IncomingQuotaTransferProperties
### Properties
* **amount**: int (ReadOnly): Amount being transferred in the resource's native unit.
* **approval**: [ApprovalRecord](#approvalrecord) (ReadOnly): Approval record. Populated when `transferStatus` is `Accepted` or `Completed`.
Mutually exclusive with `rejection`.
* **billingAccountId**: string (ReadOnly): Billing account id both donor and recipient subscriptions roll up to.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the underlying ARM resource operation.
* **rejection**: [RejectionRecord](#rejectionrecord) (ReadOnly): Rejection record. Populated when `transferStatus` is `Rejected`.
Mutually exclusive with `approval`.
* **resourceName**: string (ReadOnly): The quota dimension being moved.
* **sourceEtag**: string (ReadOnly): ETag of the donor-side source document at the time the inbox entry was projected. Used
as the If-Match value on approve and reject requests.
* **sourceSubscriptionId**: string (ReadOnly): Donor subscription id. The recipient subscription is the one in the request URI.
* **sourceTenantId**: string (ReadOnly): Donor tenant id, resolved by the service from the donor subscription.
* **transferId**: string (ReadOnly): Server-generated identifier of the transfer (matches the URI key).
* **transferRef**: string (ReadOnly): Fully qualified ARM resource id of the donor-side quotaTransfers resource.
* **transferStatus**: 'Accepted' | 'Cancelled' | 'Completed' | 'Expired' | 'Failed' | 'Pending' | 'Rejected' | string (ReadOnly): The business status of the transfer.

## LimitJsonObject
* **Discriminator**: limitObjectType

### Base Properties

### LimitObject
#### Properties
* **limitObjectType**: 'LimitValue' (Required): The limit object type.
* **limitType**: 'Independent' | 'Shared' | string: The quota or usages limit types.
* **value**: int (Required): The quota/limit value


## QuotaAllocationRequestBase
### Properties
* **properties**: [QuotaAllocationRequestBaseProperties](#quotaallocationrequestbaseproperties)

## QuotaAllocationRequestBaseProperties
### Properties
* **limit**: int: The new quota limit for the subscription. The incremental quota will be allocated from pre-approved group quota.
* **name**: [QuotaAllocationRequestBasePropertiesName](#quotaallocationrequestbasepropertiesname) (ReadOnly): Name of the resource provided by the resource provider. This property is already included in the request URI, so it is a readonly property returned in the response.
* **region**: string: The location for which the subscription is allocated

## QuotaAllocationRequestBasePropertiesName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string (ReadOnly): Resource name.

## QuotaAllocationRequestStatusProperties
### Properties
* **faultCode**: string (ReadOnly): Details of the failure.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **requestedResource**: [QuotaAllocationRequestBase](#quotaallocationrequestbase): The new quota request allocated to subscription.
* **requestSubmitTime**: string (ReadOnly): The request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ

## QuotaProperties
### Properties
* **isQuotaApplicable**: bool (ReadOnly): States if quota can be requested for this resource.
* **limit**: [LimitJsonObject](#limitjsonobject): Resource quota limit properties.
* **name**: [ResourceName](#resourcename): Resource name provided by the resource provider. Use this property name when requesting quota.
* **properties**: any: Additional properties for the specific resource provider.
* **quotaPeriod**: string (ReadOnly): The time period over which the quota usage values are summarized. For example:
*P1D (per one day)
*PT1M (per one minute)
*PT1S (per one second).
This parameter is optional because, for some resources like compute, the period is irrelevant.
* **resourceType**: string: The name of the resource type. Optional field.
* **unit**: string (ReadOnly): The quota units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## QuotaRequestProperties
### Properties
* **error**: [ServiceErrorDetail](#serviceerrordetail): Error details of the quota request.
* **message**: string (ReadOnly): User-friendly status message.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): The quota request status.
* **requestSubmitTime**: string (ReadOnly): The quota request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ
* **value**: [SubRequest](#subrequest)[]: Quota request details.

## QuotaTransferProperties
### Properties
* **amount**: int {minValue: 1} (Required): Amount to transfer in the resource's native unit (e.g. vCPU count).
* **approval**: [ApprovalRecord](#approvalrecord) (ReadOnly): Approval record. Populated when `transferStatus` is `Accepted` or `Completed`.
Mutually exclusive with `cancellation`.
* **autoApprove**: bool: Same-tenant one-shot opt-in. When true, the donor PUT admission-checks recipient-side
RBAC and cap at submit time and drives the transfer to terminal Completed within the
same LRO, with no recipient approve required. The outcome is reflected by
`transferStatus`: `Completed` means the auto path committed; `Pending` means it did
not (e.g. cross-tenant, missing RBAC, cap exceeded) and the recipient must approve.
* **billingAccountId**: string (Required): Billing account id both donor and recipient subscriptions must roll up to.
* **cancellation**: [CancellationRecord](#cancellationrecord) (ReadOnly): Cancellation record. Populated when `transferStatus` is `Cancelled`.
Mutually exclusive with `approval`.
* **comment**: string {maxLength: 500}: Donor-supplied free-text rationale captured at submit time.
* **createdAt**: string (ReadOnly): Time the transfer was created.
* **createdBy**: string (ReadOnly): Principal that created the transfer.
* **destinationSubscriptionId**: string (Required): Recipient subscription id. Must differ from the donor subscription.
* **destinationTenantId**: string (ReadOnly): Recipient tenant id, resolved by the service from the recipient subscription.
* **displayName**: string {maxLength: 80} (Required): Human-friendly label surfaced on customer GET responses and recipient inbox listings.
* **expiresAt**: string (ReadOnly): Time at which a Pending transfer expires if the recipient has not approved or rejected it.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The status of the underlying ARM resource operation.
* **resourceName**: string (Required): The quota dimension being moved, scoped by the URI's target provider
(for example, `standardDv5Family` under Microsoft.Compute).
* **transferId**: string (ReadOnly): Server-generated identifier the recipient uses to address the transfer on the
incomingQuotaTransfers URI.
* **transferStatus**: 'Accepted' | 'Cancelled' | 'Completed' | 'Expired' | 'Failed' | 'Pending' | 'Rejected' | string (ReadOnly): The business status of the transfer.

## RejectionRecord
### Properties
* **actor**: string (Required): Principal that performed the rejection.
* **occurredAt**: string (Required): Timestamp at which the rejection was recorded.
* **reason**: string {maxLength: 500}: Optional free-text reason supplied by the recipient when rejecting.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

## ServiceErrorDetail
### Properties
* **code**: string (ReadOnly): Error code.
* **message**: string (ReadOnly): Error message.

## SubmittedResourceRequestStatusProperties
### Properties
* **faultCode**: string (ReadOnly): Details of the failure.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **requestedResource**: [GroupQuotaRequestBase](#groupquotarequestbase): Requested Resource.
* **requestSubmitTime**: string (ReadOnly): The request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ

## SubRequest
### Properties
* **limit**: [LimitJsonObject](#limitjsonobject): Resource quota limit properties.
* **message**: string (ReadOnly): User-friendly status message.
* **name**: [ResourceName](#resourcename): Resource name.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): The quota request status.
* **resourceType**: string (ReadOnly): Resource type for which the quota properties were requested.
* **subRequestId**: string (ReadOnly): Quota request ID.
* **unit**: string: Quota limit units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## SubscriptionQuotaAllocations
### Properties
* **properties**: [SubscriptionQuotaAllocationsProperties](#subscriptionquotaallocationsproperties): Quota properties for the specified resource.

## SubscriptionQuotaAllocationsListProperties
### Properties
* **nextLink**: string (ReadOnly): The URL to use for getting the next set of results.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Escalated' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **value**: [SubscriptionQuotaAllocations](#subscriptionquotaallocations)[]: Subscription quota list.

## SubscriptionQuotaAllocationsProperties
### Properties
* **limit**: int: The total quota limit for the subscription.
* **name**: [SubscriptionQuotaDetailsName](#subscriptionquotadetailsname) (ReadOnly): Name of the resource provided by the resource provider. This property is already included in the request URI, so it is a readonly property returned in the response.
* **resourceName**: string: The resource name, such as SKU name.
* **shareableQuota**: int (ReadOnly): The shareable quota for the subscription.

## SubscriptionQuotaDetailsName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string (ReadOnly): Resource name.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## UsagesObject
### Properties
* **usagesType**: 'Combined' | 'Individual' | string: The quota or usages limit types.
* **value**: int (Required): The usages value.

## UsagesProperties
### Properties
* **isQuotaApplicable**: bool (ReadOnly): States if quota can be requested for this resource.
* **name**: [ResourceName](#resourcename): Resource name provided by the resource provider. Use this property name when requesting quota.
* **properties**: any: Additional properties for the specific resource provider.
* **quotaPeriod**: string (ReadOnly): The time period for the summary of the quota usage values. For example:
*P1D (per one day)
*PT1M (per one minute)
*PT1S (per one second).
This parameter is optional because it is not relevant for all resources such as compute.
* **resourceType**: string: The name of the resource type. Optional field.
* **unit**: string (ReadOnly): The units for the quota usage, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.
* **usages**: [UsagesObject](#usagesobject): The quota limit properties for this resource.

