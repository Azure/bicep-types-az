# Microsoft.Billing @ 2018-11-01-preview

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfileProperties](#billingprofileproperties): A billing profile.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The InvoiceSection.
* **type**: 'Microsoft.Billing/billingAccounts/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [LineOfCreditProperties](#lineofcreditproperties): A line of credit.
* **type**: 'Microsoft.Billing/billingAccounts/lineOfCredit' (ReadOnly, DeployTimeConstant): The resource type

## Address
### Properties
* **addressLine1**: string: Address Line1.
* **addressLine2**: string: Address Line2.
* **addressLine3**: string: Address Line3.
* **city**: string: Address City.
* **companyName**: string: Company Name.
* **country**: string: Country code uses ISO2, 2-digit format.
* **firstName**: string: First Name.
* **lastName**: string: Last Name.
* **postalCode**: string: Address Postal Code.
* **region**: string: Address Region.

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int: Amount value.

## BillingProfile
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [BillingProfileProperties](#billingprofileproperties): A billing profile.
* **type**: string (ReadOnly): Resource type.

## BillingProfileProperties
### Properties
* **address**: [Address](#address): Billing address.
* **currency**: string (ReadOnly): The currency associated with the billing profile.
* **displayName**: string: The billing profile name.
* **enabledAzureSKUs**: [EnabledAzureSKUs](#enabledazureskus)[]: Information about the product.
* **invoiceDay**: int (ReadOnly): Invoice day.
* **invoiceEmailOptIn**: bool (ReadOnly): If the billing profile is opted in to receive invoices via email.
* **invoiceSections**: [InvoiceSection](#invoicesection)[]: The invoice sections associated to the billing profile.
* **isClassic**: bool (ReadOnly): Is OMS bootstrapped billing profile.
* **poNumber**: string: Purchase order number.

## EnabledAzureSKUs
### Properties
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.

## InvoiceSection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The InvoiceSection.
* **type**: string (ReadOnly): Resource type.

## InvoiceSectionProperties
### Properties
* **billingProfiles**: [BillingProfile](#billingprofile)[]: The billing profiles associated to the billing account.
* **displayName**: string: The name of the InvoiceSection.

## LineOfCreditProperties
### Properties
* **creditLimit**: [Amount](#amount): The current credit limit.
* **reason**: string (ReadOnly): The reason for the line of credit status when not approved.
* **remainingBalance**: [Amount](#amount) (ReadOnly): Remaining balance.
* **status**: 'Approved' | 'Rejected' | string: The line of credit status.

## PolicyProperties
### Properties
* **marketplacePurchasesAllowed**: bool: The marketplacePurchasesAllowed flag.
* **reservationPurchasesAllowed**: bool: The reservationPurchasesAllowed flag.
* **subscriptionOwnerCanViewCharges**: bool: The subscriptionOwnerCanViewCharges flag.

