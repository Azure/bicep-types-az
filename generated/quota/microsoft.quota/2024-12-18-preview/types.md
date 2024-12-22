# Microsoft.Quota @ 2024-12-18-preview

## Resource Microsoft.Quota/groupQuotas@2024-12-18-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 3, maxLength: 63, pattern: "^[a-z][a-z0-9]*$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotasEntityProperties](#groupquotasentityproperties): Properties
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/groupQuotaRequests@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [SubmittedResourceRequestStatusProperties](#submittedresourcerequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/groupQuotaRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/groupQuotaLimits@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaLimitListProperties](#groupquotalimitlistproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/groupQuotaLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocationRequests@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaAllocationRequestStatusProperties](#quotaallocationrequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocationRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocations@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 1} (Required, DeployTimeConstant): The resource name
* **properties**: [SubscriptionQuotaAllocationsListProperties](#subscriptionquotaallocationslistproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/resourceProviders/quotaAllocations' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptionRequests@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionRequestStatusProperties](#groupquotasubscriptionrequeststatusproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptionRequests' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/groupQuotas/subscriptions@2024-12-18-preview
* **Valid Scope(s)**: ManagementGroup
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {minLength: 36, maxLength: 36, pattern: "^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GroupQuotaSubscriptionIdProperties](#groupquotasubscriptionidproperties) (ReadOnly)
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.Quota/groupQuotas/subscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/quotas@2024-12-18-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the specified resource, based on the API called, Quotas or Usages.
* **type**: 'Microsoft.Quota/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/usages@2024-12-18-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2024-12-18-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UsagesProperties](#usagesproperties) (ReadOnly): Usage properties for the specified resource.
* **type**: 'Microsoft.Quota/usages' (ReadOnly, DeployTimeConstant): The resource type

## AllocatedQuotaToSubscriptionList
### Properties
* **value**: [AllocatedToSubscription](#allocatedtosubscription)[]: List of Group Quota Limit allocated to subscriptions.

## AllocatedToSubscription
### Properties
* **quotaAllocated**: int: The amount of quota allocated to this subscriptionId from the GroupQuotasEntity.
* **subscriptionId**: string: An Azure subscriptionId.

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
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

## GroupQuotasEntityProperties
### Properties
* **displayName**: string: Display name of the GroupQuota entity.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Provisioning state of the operation.

## GroupQuotaSubscriptionIdProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Status of this subscriptionId being associated with the GroupQuotasEntity.
* **subscriptionId**: string: An Azure subscriptionId.

## GroupQuotaSubscriptionRequestStatusProperties
### Properties
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Status of this subscriptionId being associated with the GroupQuotasEntity.
* **requestSubmitTime**: string: The request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ
* **subscriptionId**: string: The subscription Id

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
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
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

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

## SubmittedResourceRequestStatusProperties
### Properties
* **faultCode**: string (ReadOnly): Details of the failure.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
* **requestedResource**: [GroupQuotaRequestBase](#groupquotarequestbase): Requested Resource.
* **requestSubmitTime**: string (ReadOnly): The request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ

## SubscriptionQuotaAllocations
### Properties
* **properties**: [SubscriptionQuotaAllocationsProperties](#subscriptionquotaallocationsproperties): Quota properties for the specified resource.

## SubscriptionQuotaAllocationsListProperties
### Properties
* **nextLink**: string (ReadOnly): The URL to use for getting the next set of results.
* **provisioningState**: 'Accepted' | 'Canceled' | 'Created' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string (ReadOnly): Request status.
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

