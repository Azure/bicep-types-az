# Microsoft.Quota @ 2023-06-01-preview

## Resource Microsoft.Quota/groupQuotas@2023-06-01-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotasEntityBase](#groupquotasentitybase): Properties and filters for ShareQuota. The request parameter is optional, if there are no filters specified.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/groupQuotaLimits@2023-06-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaDetails](#groupquotadetails): Group Quota properties for the specified resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/groupQuotaLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/quotaAllocations@2023-06-01-preview
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionQuotaDetails](#subscriptionquotadetails): Quota properties for the specified resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/quotaAllocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptionRequests@2023-06-01-preview (ReadOnly)
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionIdProperties](#groupquotasubscriptionidproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptionRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptions@2023-06-01-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2023-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionIdProperties](#groupquotasubscriptionidproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## AdditionalAttributes
### Properties
* **environment**: 'NonProduction' | 'Production' | string: Environment name.
* **groupId**: [GroupingId](#groupingid) (Required): The grouping Id for the group quota. It can be management Group Id or ServiceTreeId if applicable.

## AssignedToSubscription
### Properties
* **quotaAllocated**: int: The amount of quota allocated to this subscriptionId from the GroupQuotasEntity.
* **subscriptionId**: string: An Azure subscriptionId.

## GroupingId
### Properties
* **groupingIdType**: 'BillingId' | 'ServiceTreeId' | string: GroupingId type. It is a required property. More types of groupIds can be supported in future. MGID is already in the URI, so it's not needed.'
* **value**: string: GroupId value based on the groupingType selected - management Group Id or ServiceTreeId.

## GroupQuotaDetails
### Properties
* **assignedToSubscriptions**: [AssignedToSubscription](#assignedtosubscription)[] (ReadOnly): Assigned Group Quota to subscriptions.
* **availableLimit**: int (ReadOnly): The available Group Quota Limit at the MG level. This Group quota can be assigned to subscription(s).
* **comment**: string: Any comment related to quota request.
* **limit**: int: The current Group Quota Limit at the parentId level.
* **name**: [GroupQuotaDetailsName](#groupquotadetailsname): Name of the resource provided by the resource Provider. This property is already included in the request URI, so it is a readonly property returned in the response.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **unit**: string (ReadOnly): The usages units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## GroupQuotaDetailsName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string (ReadOnly): Resource name.

## GroupQuotasEntityBase
### Properties
* **additionalAttributes**: [AdditionalAttributes](#additionalattributes): Additional attributes to allow subscription, which can be added to the subscriptionIds.
* **displayName**: string: Display name of the GroupQuota entity.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Provisioning state of the operation.

## GroupQuotaSubscriptionIdProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Status of this subscriptionId being associated with the GroupQuotasEntity.
* **subscriptionId**: string (ReadOnly): An Azure subscriptionId.

## SubscriptionGroupQuotaAssignment
### Properties
* **managementGroupId**: string: The management group id of the quota source.
* **quotaAllocated**: int: The amount of quota allocated to this subscriptionId from the quota source.

## SubscriptionQuotaDetails
### Properties
* **limit**: int (ReadOnly): The total quota limit for the subscription.
* **nonShareableQuota**: int (ReadOnly): The non shareable quota for the subscription.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **quotaSources**: [SubscriptionGroupQuotaAssignment](#subscriptiongroupquotaassignment)[]: Assigned Group Quota to subscriptions.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

