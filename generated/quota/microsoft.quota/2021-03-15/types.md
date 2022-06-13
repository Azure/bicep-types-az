# Microsoft.Quota @ 2021-03-15

## Resource Microsoft.Quota/quotaLimits@2021-03-15
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2021-03-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the specified resource.
* **type**: 'Microsoft.Quota/quotaLimits' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly): Usage information for the current resource.
* **isQuotaApplicable**: bool (ReadOnly): States if quota can be requested for this resource.
* **limit**: int: Quota limit.
* **name**: [ResourceName](#resourcename): Resource name provided by the resource provider. Use this property name when requesting quota.
* **properties**: any: Additional properties for the specific resource provider.
* **quotaPeriod**: string (ReadOnly): The time period over which the quota usage values are summarized. For example:
*P1D (per one day)
*PT1M (per one minute)
*PT1S (per one second).
This parameter is optional because, for some resources like compute, the period is irrelevant.
* **resourceType**: 'dedicated' | 'lowPriority' | 'serviceSpecific' | 'shared' | 'standard' | string: Resource type name.
* **unit**: string (ReadOnly): The quota limit units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

