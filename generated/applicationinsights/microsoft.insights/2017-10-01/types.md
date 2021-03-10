# microsoft.insights @ 2017-10-01

## Resource microsoft.insights/components/pricingPlans@2017-10-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PricingPlanProperties](#pricingplanproperties)
* **type**: 'microsoft.insights/components/pricingPlans' (ReadOnly, DeployTimeConstant)

## PricingPlanProperties
### Properties
* **cap**: int
* **maxHistoryCap**: int (ReadOnly)
* **planType**: string
* **resetHour**: int (ReadOnly)
* **stopSendNotificationWhenHitCap**: bool
* **stopSendNotificationWhenHitThreshold**: bool
* **warningThreshold**: int

