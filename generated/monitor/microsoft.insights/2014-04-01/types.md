# Microsoft.Insights @ 2014-04-01

## Resource Microsoft.Insights/autoscalesettings@2014-04-01
* **Valid Scope(s)**: ResourceGroup
### Properties
* **apiVersion**: '2014-04-01' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **location**: string (Required): Resource location
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AutoscaleSetting](#autoscalesetting) (Required): The autoscale setting of the resource.
* **tags**: [ResourceTags](#resourcetags): Resource tags
* **type**: 'Microsoft.Insights/autoscalesettings' (ReadOnly, DeployTimeConstant): The resource type

## AutoscaleNotification
### Properties
* **email**: [EmailNotification](#emailnotification): the email notification.
* **operation**: 'Scale' (Required): the operation associated with the notification and its value must be "scale"
* **webhooks**: [WebhookNotification](#webhooknotification)[]: the collection of webhook notifications.

## AutoscaleProfile
### Properties
* **capacity**: [ScaleCapacity](#scalecapacity) (Required): the number of instances that can be used during this profile.
* **fixedDate**: [TimeWindow](#timewindow): the specific date-time for the profile. This element is not used if the Recurrence element is used.
* **name**: string (Required): the name of the profile.
* **recurrence**: [Recurrence](#recurrence): the repeating times at which this profile begins. This element is not used if the FixedDate element is used.
* **rules**: [ScaleRule](#scalerule)[] (Required): the collection of rules that provide the triggers and parameters for the scaling action. A maximum of 10 rules can be specified.

## AutoscaleSetting
### Properties
* **enabled**: bool: the enabled flag. Specifies whether automatic scaling is enabled for the resource. The default value is 'false'.
* **name**: string: the name of the autoscale setting.
* **notifications**: [AutoscaleNotification](#autoscalenotification)[]: the collection of notifications.
* **profiles**: [AutoscaleProfile](#autoscaleprofile)[] {maxLength: 20} (Required): the collection of automatic scaling profiles that specify different scaling parameters for different time periods. A maximum of 20 profiles can be specified.
* **targetResourceLocation**: string: the location of the resource that the autoscale setting should be added to.
* **targetResourceUri**: string: the resource identifier of the resource that the autoscale setting should be added to.

## EmailNotification
### Properties
* **customEmails**: string[]: the custom e-mails list. This value can be null or empty, in which case this attribute will be ignored.
* **sendToSubscriptionAdministrator**: bool: a value indicating whether to send email to subscription administrator.
* **sendToSubscriptionCoAdministrators**: bool: a value indicating whether to send email to subscription co-administrators.

## MetricTrigger
### Properties
* **dimensions**: [ScaleRuleMetricDimension](#scalerulemetricdimension)[]: List of dimension conditions. For example: [{"DimensionName":"AppName","Operator":"Equals","Values":["App1"]},{"DimensionName":"Deployment","Operator":"Equals","Values":["default"]}].
* **dividePerInstance**: bool: a value indicating whether metric should divide per instance.
* **metricName**: string (Required): the name of the metric that defines what the rule monitors.
* **metricNamespace**: string: the namespace of the metric that defines what the rule monitors.
* **metricResourceLocation**: string: the location of the resource the rule monitors.
* **metricResourceUri**: string (Required): the resource identifier of the resource the rule monitors.
* **operator**: 'Equals' | 'GreaterThan' | 'GreaterThanOrEqual' | 'LessThan' | 'LessThanOrEqual' | 'NotEquals' (Required): the operator that is used to compare the metric data and the threshold.
* **statistic**: 'Average' | 'Count' | 'Max' | 'Min' | 'Sum' (Required): the metric statistic type. How the metrics from multiple instances are combined.
* **threshold**: int (Required): the threshold of the metric that triggers the scale action.
* **timeAggregation**: 'Average' | 'Count' | 'Last' | 'Maximum' | 'Minimum' | 'Total' (Required): time aggregation type. How the data that is collected should be combined over time. The default value is Average.
* **timeGrain**: string (Required): the granularity of metrics the rule monitors. Must be one of the predefined values returned from metric definitions for the metric. Must be between 12 hours and 1 minute.
* **timeWindow**: string (Required): the range of time in which instance data is collected. This value must be greater than the delay in metric collection, which can vary from resource-to-resource. Must be between 12 hours and 5 minutes.

## Recurrence
### Properties
* **frequency**: 'Day' | 'Hour' | 'Minute' | 'Month' | 'None' | 'Second' | 'Week' | 'Year' (Required): the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
* **schedule**: [RecurrentSchedule](#recurrentschedule) (Required): the scheduling constraints for when the profile begins.

## RecurrentSchedule
### Properties
* **days**: string[] (Required): the collection of days that the profile takes effect on. Possible values are Sunday through Saturday.
* **hours**: int[] (Required): A collection of hours that the profile takes effect on. Values supported are 0 to 23 on the 24-hour clock (AM/PM times are not supported).
* **minutes**: int[] (Required): A collection of minutes at which the profile takes effect at.
* **timeZone**: string (Required): the timezone for the hours of the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time

## ResourceTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ScaleAction
### Properties
* **cooldown**: string (Required): the amount of time to wait since the last scaling action before this action occurs. It must be between 1 week and 1 minute in ISO 8601 format.
* **direction**: 'Decrease' | 'Increase' | 'None' (Required): the scale direction. Whether the scaling action increases or decreases the number of instances.
* **type**: 'ChangeCount' | 'ExactCount' | 'PercentChangeCount' | 'ServiceAllowedNextValue' (Required): the type of action that should occur when the scale rule fires.
* **value**: string: the number of instances that are involved in the scaling action. This value must be 1 or greater. The default value is 1.

## ScaleCapacity
### Properties
* **default**: string (Required): the number of instances that will be set if metrics are not available for evaluation. The default is only used if the current instance count is lower than the default.
* **maximum**: string (Required): the maximum number of instances for the resource. The actual maximum number of instances is limited by the cores that are available in the subscription.
* **minimum**: string (Required): the minimum number of instances for the resource.

## ScaleRule
### Properties
* **metricTrigger**: [MetricTrigger](#metrictrigger) (Required): the trigger that results in a scaling action.
* **scaleAction**: [ScaleAction](#scaleaction) (Required): the parameters for the scaling action.

## ScaleRuleMetricDimension
### Properties
* **DimensionName**: string (Required): Name of the dimension.
* **Operator**: 'Equals' | 'NotEquals' | string (Required): the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
* **Values**: string[] (Required): list of dimension values. For example: ["App1","App2"].

## TimeWindow
### Properties
* **end**: string (Required): the end time for the profile in ISO 8601 format.
* **start**: string (Required): the start time for the profile in ISO 8601 format.
* **timeZone**: string: the timezone of the start and end times for the profile. Some examples of valid time zones are: Dateline Standard Time, UTC-11, Hawaiian Standard Time, Alaskan Standard Time, Pacific Standard Time (Mexico), Pacific Standard Time, US Mountain Standard Time, Mountain Standard Time (Mexico), Mountain Standard Time, Central America Standard Time, Central Standard Time, Central Standard Time (Mexico), Canada Central Standard Time, SA Pacific Standard Time, Eastern Standard Time, US Eastern Standard Time, Venezuela Standard Time, Paraguay Standard Time, Atlantic Standard Time, Central Brazilian Standard Time, SA Western Standard Time, Pacific SA Standard Time, Newfoundland Standard Time, E. South America Standard Time, Argentina Standard Time, SA Eastern Standard Time, Greenland Standard Time, Montevideo Standard Time, Bahia Standard Time, UTC-02, Mid-Atlantic Standard Time, Azores Standard Time, Cape Verde Standard Time, Morocco Standard Time, UTC, GMT Standard Time, Greenwich Standard Time, W. Europe Standard Time, Central Europe Standard Time, Romance Standard Time, Central European Standard Time, W. Central Africa Standard Time, Namibia Standard Time, Jordan Standard Time, GTB Standard Time, Middle East Standard Time, Egypt Standard Time, Syria Standard Time, E. Europe Standard Time, South Africa Standard Time, FLE Standard Time, Turkey Standard Time, Israel Standard Time, Kaliningrad Standard Time, Libya Standard Time, Arabic Standard Time, Arab Standard Time, Belarus Standard Time, Russian Standard Time, E. Africa Standard Time, Iran Standard Time, Arabian Standard Time, Azerbaijan Standard Time, Russia Time Zone 3, Mauritius Standard Time, Georgian Standard Time, Caucasus Standard Time, Afghanistan Standard Time, West Asia Standard Time, Ekaterinburg Standard Time, Pakistan Standard Time, India Standard Time, Sri Lanka Standard Time, Nepal Standard Time, Central Asia Standard Time, Bangladesh Standard Time, N. Central Asia Standard Time, Myanmar Standard Time, SE Asia Standard Time, North Asia Standard Time, China Standard Time, North Asia East Standard Time, Singapore Standard Time, W. Australia Standard Time, Taipei Standard Time, Ulaanbaatar Standard Time, Tokyo Standard Time, Korea Standard Time, Yakutsk Standard Time, Cen. Australia Standard Time, AUS Central Standard Time, E. Australia Standard Time, AUS Eastern Standard Time, West Pacific Standard Time, Tasmania Standard Time, Magadan Standard Time, Vladivostok Standard Time, Russia Time Zone 10, Central Pacific Standard Time, Russia Time Zone 11, New Zealand Standard Time, UTC+12, Fiji Standard Time, Kamchatka Standard Time, Tonga Standard Time, Samoa Standard Time, Line Islands Standard Time

## WebhookNotification
### Properties
* **properties**: [WebhookNotificationProperties](#webhooknotificationproperties): a property bag of settings. This value can be empty.
* **serviceUri**: string: the service address to receive the notification.

## WebhookNotificationProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

