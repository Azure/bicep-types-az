# microsoft.insights @ 2017-10-01

## microsoft.insights/components/pricingPlans
### Properties
* **apiVersion**: '2017-10-01' (ReadOnly, DeployTimeConstant)
* **dependsOn**: resourceref[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PricingPlanProperties
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

