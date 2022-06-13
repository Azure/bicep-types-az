# microsoft.insights @ 2017-10-01

## Resource microsoft.insights/components/pricingPlans@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'current' (Required, DeployTimeConstant): The resource name
* **properties**: [PricingPlanProperties](#pricingplanproperties): The properties of the suppression.
* **type**: 'microsoft.insights/components/pricingPlans' (ReadOnly, DeployTimeConstant): The resource type

## PricingPlanProperties
### Properties
* **cap**: int: Daily data volume cap in GB.
* **maxHistoryCap**: int (ReadOnly): Maximum daily data volume cap that the user can set for this component.
* **planType**: string: Pricing Plan Type Name.
* **resetHour**: int (ReadOnly): Daily data volume cap UTC reset hour.
* **stopSendNotificationWhenHitCap**: bool: Do not send a notification email when the daily data volume cap is met.
* **stopSendNotificationWhenHitThreshold**: bool: Reserved, not used for now.
* **warningThreshold**: int: Reserved, not used for now.

