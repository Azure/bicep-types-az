# Microsoft.Billing @ 2018-03-01-preview

## Resource Microsoft.Billing/billingPeriods@2018-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingPeriodProperties](#billingperiodproperties) (ReadOnly): The properties of the billing period.
* **type**: 'Microsoft.Billing/billingPeriods' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/enrollmentAccounts@2018-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): The properties of the enrollment account.
* **type**: 'Microsoft.Billing/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## BillingPeriodProperties
### Properties
* **billingPeriodEndDate**: string (ReadOnly): The end of the date range covered by the billing period.
* **billingPeriodStartDate**: string (ReadOnly): The start of the date range covered by the billing period.
* **invoiceIds**: string[] (ReadOnly): Array of invoice ids that associated with.

## EnrollmentAccountProperties
### Properties
* **principalName**: string (ReadOnly): The account owner's principal name.

