# Microsoft.Addons @ 2017-05-15

## Resource Microsoft.Addons/supportProviders/supportPlanTypes@2017-05-15
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-05-15' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Advanced' | 'Essential' | 'Standard' | string (Required, DeployTimeConstant): The resource name
* **properties**: [CanonicalSupportPlanProperties](#canonicalsupportplanproperties) (ReadOnly): Describes Canonical support plan type and status.
* **type**: 'Microsoft.Addons/supportProviders/supportPlanTypes' (ReadOnly, DeployTimeConstant): The resource type

## CanonicalSupportPlanProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Cancelling' | 'Downgrading' | 'Failed' | 'Purchasing' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state of the resource.

