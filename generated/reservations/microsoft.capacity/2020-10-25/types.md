# Microsoft.Capacity @ 2020-10-25

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2020-10-25
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-25' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the resource.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests@2020-10-25 (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2020-10-25' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaRequestProperties](#quotarequestproperties) (ReadOnly): Quota request details.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly): Current usage value for the resource.
* **limit**: int: Quota properties.
* **name**: [ResourceName](#resourcename): Name of the resource provide by the resource provider. Use this property for quotaRequests resource operations.
* **properties**: any: Additional properties for the specified resource provider.
* **quotaPeriod**: string (ReadOnly): The time period over which the quota usage values are summarized. For example, P1D (per one day), PT1M (per one minute), and PT1S (per one second). This parameter is optional because, for some resources such as compute, the time period is irrelevant.
* **resourceType**: 'dedicated' | 'lowPriority' | 'serviceSpecific' | 'shared' | 'standard' | string: The name of the resource type.
* **unit**: string: The limit units, such as **count** and **bytes**. Use the unit field provided in the response of the GET quota operation.

## QuotaRequestProperties
### Properties
* **message**: string (ReadOnly): User friendly status message.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string: The quota request status.
* **requestSubmitTime**: string (ReadOnly): The time when the quota request was submitted using format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
* **value**: [SubRequest](#subrequest)[]: The quotaRequests.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display localized name.
* **value**: string: Resource name.

## SubRequest
### Properties
* **limit**: int (ReadOnly): Quota (resource limit).
* **message**: string (ReadOnly): User-friendly status message.
* **name**: [ResourceName](#resourcename): The resource name.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string: The quota request status.
* **resourceType**: string (ReadOnly): Resource type for which the quota check was made.
* **subRequestId**: string (ReadOnly): Sub request ID for individual request.
* **unit**: string: The limit units, such as **count** and **bytes**. Use the unit field provided in the response of the GET quota operation.

