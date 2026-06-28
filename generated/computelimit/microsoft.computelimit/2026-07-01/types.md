# Microsoft.ComputeLimit @ 2026-07-01

## Resource Microsoft.ComputeLimit/locations/features@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [FeatureProperties](#featureproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/features' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/guestSubscriptions@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [GuestSubscriptionProperties](#guestsubscriptionproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/guestSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/sharedLimitCaps@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedLimitCapProperties](#sharedlimitcapproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/sharedLimitCaps' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/sharedLimitCaps/memberCapOverrides@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[0-9a-fA-F]{8}(-[0-9a-fA-F]{4}){3}-[0-9a-fA-F]{12}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [MemberCapOverrideProperties](#membercapoverrideproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/sharedLimitCaps/memberCapOverrides' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/sharedLimits@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: Subscription
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [SharedLimitProperties](#sharedlimitproperties): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/sharedLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.ComputeLimit/locations/vmFamilies@2026-07-01
* **Readable Scope(s)**: Subscription
* **Writable Scope(s)**: None
### Properties
* **apiVersion**: '2026-07-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string {pattern: "^[a-zA-Z0-9-]{3,24}$"} (Required, DeployTimeConstant): The resource name
* **properties**: [VmFamilyProperties](#vmfamilyproperties) (ReadOnly): The resource-specific properties for this resource.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.ComputeLimit/locations/vmFamilies' (ReadOnly, DeployTimeConstant): The resource type

## FeatureProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **state**: 'Disabled' | 'Enabled' | string: The current state of the feature (for example, Enabled, Disabled).

## GuestSubscriptionProperties
### Properties
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## LimitName
### Properties
* **localizedValue**: string (ReadOnly): The localized limit name.
* **value**: string (Required): The limit name.

## MemberCapOverrideProperties
### Properties
* **cap**: int {minValue: 0} (Required): The cap value in count units for this member subscription.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## SharedLimitCapProperties
### Properties
* **defaultMemberCap**: int {minValue: 0}: The default member cap value (in count units).
Set to a non-negative integer to apply a cap to all member subscriptions
that do not have a per-member override. Omit the property to leave no
default cap in effect.
* **isBoundedCap**: bool (Required): Controls whether the service validates the aggregate cap against the
group limit for the VM family.

SUM(caps) is the sum of all per-member overrides' cap values plus
`defaultMemberCap` multiplied by the number of member subscriptions without an override.

When true, the service rejects any configuration where SUM(caps)
exceeds the group limit. When false, SUM(caps) is permitted to exceed
the group limit.

Enabling this flag is rejected if the current configuration already breaches the group limit;
reduce caps first, then enable.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

## SharedLimitProperties
### Properties
* **limit**: int (ReadOnly): The maximum permitted usage of the resource.
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.
* **resourceName**: [LimitName](#limitname) (ReadOnly): The limit name properties.
* **unit**: string (ReadOnly): The quota units, such as Count.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

## VmFamilyProperties
### Properties
* **category**: string: The category of the VM family (for example, GeneralPurpose, ComputeOptimized).
* **provisioningState**: 'Canceled' | 'Failed' | 'Succeeded' | string (ReadOnly): The provisioning state of the resource.

