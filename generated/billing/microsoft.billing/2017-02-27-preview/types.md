# Microsoft.Billing @ 2017-02-27-preview

## Resource Microsoft.Billing/invoices@2017-02-27-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2017-02-27-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): The properties of the invoice.
* **type**: 'Microsoft.Billing/invoices' (ReadOnly, DeployTimeConstant): The resource type

## DownloadUrl
### Properties
* **expiryTime**: string (ReadOnly): The time in UTC at which this download URL will expire.
* **url**: string (ReadOnly): The URL to the PDF file.

## InvoiceProperties
### Properties
* **downloadUrl**: [DownloadUrl](#downloadurl): A secure link to download the PDF version of an invoice. The link will cease to work after its expiry time is reached.
* **invoicePeriodEndDate**: string (ReadOnly): The end of the date range covered by the invoice.
* **invoicePeriodStartDate**: string (ReadOnly): The start of the date range covered by the invoice.

