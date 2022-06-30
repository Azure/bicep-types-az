# Microsoft.CostManagement @ 2022-06-01-preview

## Resource Microsoft.CostManagement/scheduledActions@2022-06-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-06-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Email' | 'InsightAlert' | string: Kind of the scheduled action.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The properties of the scheduled action.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Azure Resource Manager metadata containing createdBy and modifiedBy information.
* **type**: 'Microsoft.CostManagement/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## FileDestination
### Properties
* **fileFormats**: 'Csv' | string[]: Destination of the view data. Currently only csv format is supported.

## NotificationProperties
### Properties
* **message**: string: Optional message to be added in the email. Length is limited to 250 characters.
* **subject**: string (Required): Subject of the email. Length is limited to 70 characters.
* **to**: string[] (Required): Array of email addresses.

## ScheduledActionProperties
### Properties
* **displayName**: string (Required): Scheduled action name.
* **fileDestination**: [FileDestination](#filedestination): Destination format of the view data. This is optional.
* **notification**: [NotificationProperties](#notificationproperties) (Required): Notification properties based on scheduled action kind.
* **schedule**: [ScheduleProperties](#scheduleproperties) (Required): Schedule of the scheduled action.
* **scope**: string: Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
* **status**: 'Disabled' | 'Enabled' | string (Required): Status of the scheduled action.
* **viewId**: string (Required): Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'

## ScheduleProperties
### Properties
* **dayOfMonth**: int: UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday' | string[]: Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
* **endDate**: string (Required): The end date and time of the scheduled action (UTC).
* **frequency**: 'Daily' | 'Monthly' | 'Weekly' | string (Required): Frequency of the schedule.
* **hourOfDay**: int: UTC time at which cost analysis data will be emailed.
* **startDate**: string (Required): The start date and time of the scheduled action (UTC).
* **weeksOfMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third' | string[]: Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User' | string: The type of identity that last modified the resource.

