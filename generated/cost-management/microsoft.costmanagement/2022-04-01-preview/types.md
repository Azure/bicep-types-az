# Microsoft.CostManagement @ 2022-04-01-preview

## Resource Microsoft.CostManagement/scheduledActions@2022-04-01-preview
* **Valid Scope(s)**: Unknown
### Properties
* **apiVersion**: '2022-04-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **eTag**: string (ReadOnly): Resource Etag.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **kind**: 'Email': Kind of the scheduled action.
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ScheduledActionProperties](#scheduledactionproperties): The properties of the scheduled action.
* **systemData**: [SystemData](#systemdata) (ReadOnly): Metadata pertaining to creation and last modification of the resource.
* **type**: 'Microsoft.CostManagement/scheduledActions' (ReadOnly, DeployTimeConstant): The resource type

## ScheduledActionProperties
### Properties
* **displayName**: string (Required): Scheduled action name.
* **fileDestination**: [FileDestination](#filedestination): Destination of the view data. Currently only csv format is supported.
* **notification**: [NotificationProperties](#notificationproperties) (Required): The properties of the scheduled action notification.
* **schedule**: [ScheduleProperties](#scheduleproperties) (Required): The properties of the schedule.
* **scope**: string: Cost Management scope like 'subscriptions/{subscriptionId}' for subscription scope, 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for Department scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}' for BillingProfile scope, 'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}' for InvoiceSection scope, '/providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for ExternalBillingAccount scope, and '/providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for ExternalSubscription scope.
* **status**: 'Disabled' | 'Enabled' (Required): Status of the scheduled action.
* **viewId**: string (Required): Cost analysis viewId used for scheduled action. For example, '/providers/Microsoft.CostManagement/views/swaggerExample'

## FileDestination
### Properties
* **fileFormats**: 'Csv'[]: Destination of the view data. Currently only csv format is supported.

## NotificationProperties
### Properties
* **message**: string: Optional message to be added in the email. Length is limited to 250 characters.
* **subject**: string (Required): Subject of the email. Length is limited to 70 characters.
* **to**: string[] (Required): Array of email addresses.

## ScheduleProperties
### Properties
* **dayOfMonth**: int: UTC day on which cost analysis data will be emailed. Must be between 1 and 31. This property is applicable when frequency is Monthly and overrides weeksOfMonth or daysOfWeek.
* **daysOfWeek**: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'[]: Day names in english on which cost analysis data will be emailed. This property is applicable when frequency is Weekly or Monthly.
* **endDate**: string (Required): The end date and time of the scheduled action (UTC).
* **frequency**: 'Daily' | 'Monthly' | 'Weekly' (Required): Frequency of the schedule.
* **hourOfDay**: int: UTC time at which cost analysis data will be emailed.
* **startDate**: string (Required): The start date and time of the scheduled action (UTC).
* **weeksOfMonth**: 'First' | 'Fourth' | 'Last' | 'Second' | 'Third'[]: Weeks in which cost analysis data will be emailed. This property is applicable when frequency is Monthly and used in combination with daysOfWeek.

## SystemData
### Properties
* **createdAt**: string: The timestamp of resource creation (UTC).
* **createdBy**: string: The identity that created the resource.
* **createdByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
* **lastModifiedAt**: string: The timestamp of resource last modification (UTC)
* **lastModifiedBy**: string: The identity that last modified the resource.
* **lastModifiedByType**: 'Application' | 'Key' | 'ManagedIdentity' | 'User': The type of identity that created the resource.
