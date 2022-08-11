# Microsoft.Quota @ 2021-03-15-preview

## Resource Microsoft.Quota/quotas@2021-03-15-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the specified resource, based on the API called, Quotas or Usages.
* **type**: 'Microsoft.Quota/quotas' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Quota/usages@2021-03-15-preview (ReadOnly)
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-03-15-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [UsagesProperties](#usagesproperties) (ReadOnly): Usage properties for the specified resource.
* **type**: 'Microsoft.Quota/usages' (ReadOnly, DeployTimeConstant): The resource type

## LimitJsonObject
* **Discriminator**: limitObjectType

### Base Properties

### LimitObject
#### Properties
* **limitObjectType**: 'LimitValue' (Required): The limit object type.
* **limitType**: 'Independent' | 'Shared' | string: The quota or usages limit types.
* **value**: int (Required): The quota/limit value


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
* **resourceType**: string: Resource type name.
* **unit**: string (ReadOnly): The quota units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

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
* **resourceType**: string: The name of the resource type.
* **unit**: string (ReadOnly): The units for the quota usage, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.
* **usages**: [UsagesObject](#usagesobject): The quota limit properties for this resource.

