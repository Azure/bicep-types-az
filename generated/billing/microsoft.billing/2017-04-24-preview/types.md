# Microsoft.Billing @ 2017-04-24-preview

## Resource Microsoft.Billing/billingPeriods@2017-04-24-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-04-24-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingPeriodProperties](#billingperiodproperties) (ReadOnly): The properties of the billing period.
* **type**: 'Microsoft.Billing/billingPeriods' (ReadOnly, DeployTimeConstant): The resource type

## BillingPeriodProperties
### Properties
* **billingPeriodEndDate**: string (ReadOnly): The end of the date range covered by the billing period.
* **billingPeriodStartDate**: string (ReadOnly): The start of the date range covered by the billing period.
* **invoiceIds**: string[] (ReadOnly): Array of invoice ids that associated with.

