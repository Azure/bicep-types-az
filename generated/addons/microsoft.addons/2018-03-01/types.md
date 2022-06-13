# Microsoft.Addons @ 2018-03-01

## Resource Microsoft.Addons/supportProviders/supportPlanTypes@2018-03-01
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'Advanced' | 'Essential' | 'Standard' | string (Required, DeployTimeConstant): The resource name
* **properties**: [CanonicalSupportPlanProperties](#canonicalsupportplanproperties) (ReadOnly): Describes Canonical support plan type and status.
* **type**: 'Microsoft.Addons/supportProviders/supportPlanTypes' (ReadOnly, DeployTimeConstant): The resource type

## Function listSupportPlanInfo (Microsoft.Addons/supportProviders@2018-03-01)
* **Resource**: Microsoft.Addons/supportProviders
* **ApiVersion**: 2018-03-01
* **Output**: [CanonicalSupportPlanInfoDefinition](#canonicalsupportplaninfodefinition)[]

## CanonicalSupportPlanInfoDefinition
### Properties
* **enabled**: bool (ReadOnly): Flag to indicate if this support plan type is currently enabled for the subscription.
* **oneTimeCharge**: 'no' | 'onEnabled' | 'onReenabled' | string (ReadOnly): The one time charge status for the subscription.
* **supportPlanType**: 'advanced' | 'essential' | 'standard' | string (ReadOnly): Support plan type.

## CanonicalSupportPlanProperties
### Properties
* **provisioningState**: 'Cancelled' | 'Cancelling' | 'Downgrading' | 'Failed' | 'Purchasing' | 'Succeeded' | 'Upgrading' | string (ReadOnly): The provisioning state of the resource.

