# Microsoft.Addons @ 2018-03-01

## Resource Microsoft.Addons/supportProviders/supportPlanTypes@2018-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Advanced' | 'Essential' | 'Standard' (Required, DeployTimeConstant): The resource name
* **properties**: [CanonicalSupportPlanProperties](#canonicalsupportplanproperties) (ReadOnly): The properties of the Canonical support plan.
* **type**: 'Microsoft.Addons/supportProviders/supportPlanTypes' (ReadOnly, DeployTimeConstant): The resource type

## CanonicalSupportPlanProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Cancelling' | 'Downgrading' | 'Failed' | 'Purchasing' | 'Succeeded' | 'Upgrading' (ReadOnly): The provisioning state of the resource.

