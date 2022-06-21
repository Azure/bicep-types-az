# Microsoft.Billing @ 2018-03-01-preview

## Resource Microsoft.Billing/billingPeriods@2018-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingPeriodProperties](#billingperiodproperties) (ReadOnly): A billing period.
* **type**: 'Microsoft.Billing/billingPeriods' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/enrollmentAccounts@2018-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): An enrollment account.
* **type**: 'Microsoft.Billing/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/invoices@2018-03-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-03-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **type**: 'Microsoft.Billing/invoices' (ReadOnly, DeployTimeConstant): The resource type

## BillingPeriodProperties
### Properties
* **billingPeriodEndDate**: string (ReadOnly): The end of the date range covered by the billing period.
* **billingPeriodStartDate**: string (ReadOnly): The start of the date range covered by the billing period.
* **invoiceIds**: string[] (ReadOnly): Array of invoice ids that associated with.

## DownloadUrl
### Properties
* **expiryTime**: string (ReadOnly): The time in UTC at which this download URL will expire.
* **url**: string (ReadOnly): The URL to the PDF file.

## EnrollmentAccountProperties
### Properties
* **principalName**: string (ReadOnly): The account owner's principal name.

## InvoiceProperties
### Properties
* **billingPeriodIds**: string[] (ReadOnly): Array of billing period ids that the invoice is attributed to.
* **downloadUrl**: [DownloadUrl](#downloadurl): A secure link to download the PDF version of an invoice. The link will cease to work after its expiry time is reached.
* **invoicePeriodEndDate**: string (ReadOnly): The end of the date range covered by the invoice.
* **invoicePeriodStartDate**: string (ReadOnly): The start of the date range covered by the invoice.

