# Microsoft.Capacity @ 2019-07-19-preview

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimits@2019-07-19-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaProperties](#quotaproperties): Quota properties for the resource.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimits' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests@2019-07-19-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-07-19-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [QuotaRequestProperties](#quotarequestproperties) (ReadOnly): The quota request details.
* **type**: 'Microsoft.Capacity/resourceProviders/locations/serviceLimitsRequests' (ReadOnly, DeployTimeConstant): The resource type

## QuotaProperties
### Properties
* **currentValue**: int (ReadOnly): The current resource usages information.
* **limit**: int: The quota limit.
* **name**: [ResourceName](#resourcename): Name of the resource provide by the resource Provider. Please use this name property for quotaRequests.
* **properties**: any: Additional properties for the specific resource provider.
* **quotaPeriod**: string (ReadOnly): The quota period over which the usage values are summarized, such as - P1D (Per one day), PT1M (Per one minute), PT1S (Per one second). This parameter is optional because, for some resources like compute, the period doesn’t matter.
* **resourceType**: 'dedicated' | 'lowPriority' | 'serviceSpecific' | 'shared' | 'standard' | string: The Resource Type Name.
* **unit**: string: The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response.

## QuotaRequestProperties
### Properties
* **message**: string (ReadOnly): User friendly status message.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string: The quota request status.
* **requestSubmitTime**: string (ReadOnly): The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
* **value**: [SubRequest](#subrequest)[]: The quotaRequests.

## ResourceName
### Properties
* **localizedValue**: string (ReadOnly): Resource display name.
* **value**: string: Resource name.

## SubRequest
### Properties
* **limit**: int (ReadOnly): The Resource limit.
* **message**: string (ReadOnly): User friendly status message.
* **name**: [ResourceName](#resourcename): The Resource name.
* **provisioningState**: 'Accepted' | 'Failed' | 'InProgress' | 'Invalid' | 'Succeeded' | string: The quota request status.
* **resourceType**: string (ReadOnly): Resource type for which the quota check was made.
* **subRequestId**: string (ReadOnly): Sub request id for individual request.
* **unit**: string: The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response.

