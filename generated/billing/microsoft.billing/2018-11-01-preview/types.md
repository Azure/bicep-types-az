# Microsoft.Billing @ 2018-11-01-preview

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BillingProfileProperties](#billingprofileproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [PolicyProperties](#policyproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties)
* **type**: 'Microsoft.Billing/billingAccounts/invoiceSections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: 'default' (Required, DeployTimeConstant)
* **properties**: [LineOfCreditProperties](#lineofcreditproperties)
* **type**: 'Microsoft.Billing/billingAccounts/lineOfCredit' (ReadOnly, DeployTimeConstant)

## BillingProfileProperties
### Properties
* **address**: [Address](#address)
* **currency**: string (ReadOnly)
* **displayName**: string
* **enabledAzureSKUs**: [EnabledAzureSKUs](#enabledazureskus)[]
* **invoiceDay**: int (ReadOnly)
* **invoiceEmailOptIn**: bool (ReadOnly)
* **invoiceSections**: [InvoiceSection](#invoicesection)[]
* **isClassic**: bool (ReadOnly)
* **poNumber**: string

## Address
### Properties
* **addressLine1**: string
* **addressLine2**: string
* **addressLine3**: string
* **city**: string
* **companyName**: string
* **country**: string
* **firstName**: string
* **lastName**: string
* **postalCode**: string
* **region**: string

## EnabledAzureSKUs
### Properties
* **skuDescription**: string (ReadOnly)
* **skuId**: string

## InvoiceSection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties)
* **type**: string (ReadOnly)

## InvoiceSectionProperties
### Properties
* **billingProfiles**: [BillingProfile](#billingprofile)[]
* **displayName**: string

## BillingProfile
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [BillingProfileProperties](#billingprofileproperties)
* **type**: string (ReadOnly)

## PolicyProperties
### Properties
* **marketplacePurchasesAllowed**: bool
* **reservationPurchasesAllowed**: bool
* **subscriptionOwnerCanViewCharges**: bool

## LineOfCreditProperties
### Properties
* **creditLimit**: [Amount](#amount)
* **reason**: string (ReadOnly)
* **remainingBalance**: [Amount](#amount) (ReadOnly)
* **status**: 'Approved' | 'Rejected'

## Amount
### Properties
* **currency**: string (ReadOnly)
* **value**: int

