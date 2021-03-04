# microsoft.insights @ 2015-04-01

## Resource microsoft.insights/autoscalesettings@2015-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2015-04-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **location**: string (Required)
* **name**: string (Required, DeployTimeConstant)
* **properties**: AutoscaleSetting (Required)
* **tags**: ResourceTags
* **type**: 'microsoft.insights/autoscalesettings' (ReadOnly, DeployTimeConstant)

## AutoscaleSetting
### Properties
* **enabled**: bool
* **name**: string
* **notifications**: AutoscaleNotification[]
* **profiles**: AutoscaleProfile[] (Required)
* **targetResourceUri**: string

## AutoscaleNotification
### Properties
* **email**: EmailNotification
* **webhooks**: WebhookNotification[]

## EmailNotification
### Properties
* **customEmails**: string[]
* **sendToSubscriptionAdministrator**: bool
* **sendToSubscriptionCoAdministrators**: bool

## WebhookNotification
### Properties
* **properties**: WebhookNotificationProperties
* **serviceUri**: string

## WebhookNotificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## AutoscaleProfile
### Properties
* **capacity**: ScaleCapacity (Required)
* **fixedDate**: TimeWindow
* **name**: string (Required)
* **recurrence**: Recurrence
* **rules**: ScaleRule[] (Required)

## ScaleCapacity
### Properties
* **default**: string (Required)
* **maximum**: string (Required)
* **minimum**: string (Required)

## TimeWindow
### Properties
* **end**: string (Required)
* **start**: string (Required)
* **timeZone**: string

## Recurrence
### Properties
* **schedule**: RecurrentSchedule (Required)

## RecurrentSchedule
### Properties
* **days**: string[] (Required)
* **hours**: int[] (Required)
* **minutes**: int[] (Required)
* **timeZone**: string (Required)

## ScaleRule
### Properties
* **metricTrigger**: MetricTrigger (Required)
* **scaleAction**: ScaleAction (Required)

## MetricTrigger
### Properties
* **dimensions**: ScaleRuleMetricDimension[]
* **metricName**: string (Required)
* **metricNamespace**: string
* **metricResourceUri**: string (Required)
* **threshold**: int (Required)
* **timeGrain**: any (Required)
* **timeWindow**: any (Required)

## ScaleRuleMetricDimension
### Properties
* **dimensionName**: string (Required)
* **operator**: 'Equals' | 'NotEquals' (Required)
* **values**: string[] (Required)

## ScaleAction
### Properties
* **cooldown**: any (Required)
* **value**: string

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

