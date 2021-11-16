# Microsoft.Addons @ 2018-03-01

## Resource Microsoft.Addons/supportProviders/supportPlanTypes@2018-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Advanced' | 'Essential' | 'Standard' (Required, DeployTimeConstant): The resource name
* **properties**: [CanonicalSupportPlanProperties](#canonicalsupportplanproperties) (ReadOnly): The properties of the Canonical support plan.
* **type**: 'Microsoft.Addons/supportProviders/supportPlanTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listSupportPlanInfo (Microsoft.Addons/supportProviders@2018-03-01)
* **Resource**: Microsoft.Addons/supportProviders
* **ApiVersion**: 2018-03-01
* **Output**: [CanonicalSupportPlanInfoDefinition](#canonicalsupportplaninfodefinition)[]

## CanonicalSupportPlanProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Cancelling' | 'Downgrading' | 'Failed' | 'Purchasing' | 'Succeeded' | 'Upgrading' (ReadOnly): The provisioning state of the resource.

## CanonicalSupportPlanInfoDefinition
### Properties
* **enabled**: bool (ReadOnly): Flag to indicate if this support plan type is currently enabled for the subscription.
* **oneTimeCharge**: 'no' | 'onEnabled' | 'onReenabled' (ReadOnly): The one time charge status for the subscription.
* **supportPlanType**: 'advanced' | 'essential' | 'standard' (ReadOnly): Support plan type.

