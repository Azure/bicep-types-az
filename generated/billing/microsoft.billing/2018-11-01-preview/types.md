# Microsoft.Billing @ 2018-11-01-preview

## Resource Microsoft.Billing/billingAccounts@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingAccountProperties](#billingaccountproperties) (ReadOnly): The properties of the billing account.
* **type**: 'Microsoft.Billing/billingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/agreements@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties) (ReadOnly): The properties of the agreement.
* **type**: 'Microsoft.Billing/billingAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2018-11-01-preview (Async)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfileProperties](#billingprofileproperties): The properties of the billing profile.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/availableBalance@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableBalanceProperties](#availablebalanceproperties) (ReadOnly): The properties of available balance.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/availableBalance' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoices@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSummaryProperties](#invoicesummaryproperties) (ReadOnly): The properties of the invoice.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperties](#customerproperties) (ReadOnly): The properties of a customer.
* **type**: 'Microsoft.Billing/billingAccounts/customers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/billingSubscriptions@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The usage context properties.
* **type**: 'Microsoft.Billing/billingAccounts/customers/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DepartmentProperties](#departmentproperties) (ReadOnly): The properties of the department.
* **type**: 'Microsoft.Billing/billingAccounts/departments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): The properties of the account.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview (Async)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The properties of an InvoiceSection.
* **type**: 'Microsoft.Billing/billingAccounts/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoiceSections/billingSubscriptions@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The usage context properties.
* **type**: 'Microsoft.Billing/billingAccounts/invoiceSections/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoiceSections/products@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductSummaryProperties](#productsummaryproperties) (ReadOnly): The properties of the product summary.
* **type**: 'Microsoft.Billing/billingAccounts/invoiceSections/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview (Async)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [LineOfCreditProperties](#lineofcreditproperties): The properties of the line of credit.
* **type**: 'Microsoft.Billing/billingAccounts/lineOfCredit' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingRoleAssignments@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the a role assignment.
* **type**: 'Microsoft.Billing/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingRoleDefinitions@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## BillingAccountProperties
### Properties
* **accountType**: 'Enrollment' | 'Organization' (ReadOnly): The billing account Type.
* **address**: [Address](#address) (ReadOnly): Address details.
* **billingProfiles**: [BillingProfile](#billingprofile)[] (ReadOnly): The billing profiles associated to the billing account. By default this is not populated, unless it's specified in $expand.
* **company**: string (ReadOnly): Company Name.
* **country**: string (ReadOnly): Country Name.
* **departments**: [Department](#department)[] (ReadOnly): The departments associated to the enrollment.
* **displayName**: string (ReadOnly): The billing account name.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[] (ReadOnly): The accounts associated to the enrollment.
* **enrollmentDetails**: [Enrollment](#enrollment) (ReadOnly): Current entity level details
* **hasReadAccess**: bool (ReadOnly): Specifies whether the user has read access on billing account.
* **invoiceSections**: [InvoiceSection](#invoicesection)[] (ReadOnly): The invoice sections associated to the billing account. By default this is not populated, unless it's specified in $expand.

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

## BillingProfile
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [BillingProfileProperties](#billingprofileproperties): The properties of the billing profile.
* **type**: string (ReadOnly): Resource type.

## BillingProfileProperties
### Properties
* **address**: [Address](#address): Address details.
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
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The properties of an InvoiceSection.
* **type**: string (ReadOnly): Resource type.

## InvoiceSectionProperties
### Properties
* **billingProfiles**: [BillingProfile](#billingprofile)[]: The billing profiles associated to the billing account.
* **displayName**: string: The name of the InvoiceSection.

## Department
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [DepartmentProperties](#departmentproperties) (ReadOnly): The properties of the department.
* **type**: string (ReadOnly): Resource type.

## DepartmentProperties
### Properties
* **costCenter**: string (ReadOnly): The cost center name.
* **departmentName**: string (ReadOnly): The name for department.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[] (ReadOnly): Associated enrollment accounts. By default this is not populated, unless it's specified in $expand.
* **status**: string (ReadOnly): The status for department.

## EnrollmentAccount
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): The properties of the account.
* **type**: string (ReadOnly): Resource type.

## EnrollmentAccountProperties
### Properties
* **accountName**: string (ReadOnly): The account name.
* **accountOwner**: string (ReadOnly): The account owner
* **costCenter**: string (ReadOnly): The cost center name.
* **department**: [Department](#department) (ReadOnly): A department resource.
* **endDate**: string (ReadOnly): Account End Date
* **startDate**: string (ReadOnly): Account Start Date
* **status**: string (ReadOnly): The status for account.

## Enrollment
### Properties
* **billingCycle**: string (ReadOnly): Enrollment billing cycle
* **channel**: string (ReadOnly): The channel for Enrollment
* **countryCode**: string (ReadOnly): The countryCode for Enrollment
* **currency**: string (ReadOnly): The currency associated with enrollment
* **endDate**: string (ReadOnly): Enrollment End Date
* **language**: string (ReadOnly): The language for Enrollment
* **policies**: [EnrollmentPolicies](#enrollmentpolicies) (ReadOnly): The attributes associated with legacy enrollment
* **startDate**: string (ReadOnly): Enrollment Start Date
* **status**: string (ReadOnly): Enrollment status

## EnrollmentPolicies
### Properties
* **accountOwnerViewCharges**: bool (ReadOnly): The accountOwnerViewCharges flag for Enrollment
* **departmentAdminViewCharges**: bool (ReadOnly): The departmentAdminViewCharges flag for Enrollment
* **marketplacesEnabled**: bool (ReadOnly): The marketplaces flag for Enrollment
* **reservedInstancesEnabled**: bool (ReadOnly): The reserved instances flag for Enrollment

## AgreementProperties
### Properties
* **agreementLink**: string (ReadOnly): The link to the agreement.
* **effectiveDate**: string (ReadOnly): Effective date.
* **expirationDate**: string (ReadOnly): Expiration date.
* **participants**: [Participants](#participants)[] (ReadOnly): Participants or signer of the agreement.
* **status**: string (ReadOnly): The agreement status

## Participants
### Properties
* **email**: string (ReadOnly): The email address of the participant or signer.
* **status**: string (ReadOnly): The signing status
* **statusDate**: string (ReadOnly): The date when status got changed.

## AvailableBalanceProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): The Amount.

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int: Amount value.

## InvoiceSummaryProperties
### Properties
* **amountDue**: [Amount](#amount) (ReadOnly): The Amount.
* **billedAmount**: [Amount](#amount) (ReadOnly): The Amount.
* **billingProfileId**: string (ReadOnly): The billing profile id this invoice belongs to.
* **billingProfileName**: string (ReadOnly): The profile name this invoice belongs to.
* **documentUrls**: [DownloadProperties](#downloadproperties)[] (ReadOnly): List of document urls available to download including invoice and tax documents.
* **dueDate**: string (ReadOnly): The due date for invoice.
* **invoiceDate**: string (ReadOnly): The date when invoice was created.
* **invoicePeriodEndDate**: string (ReadOnly): The end date of the billing period.
* **invoicePeriodStartDate**: string (ReadOnly): The start date of the billing period.
* **payments**: [PaymentProperties](#paymentproperties)[] (ReadOnly): List of payments.
* **purchaseOrderNumber**: string (ReadOnly): The purchase identifier for the invoice.
* **status**: 'Due' | 'Paid' | 'PastDue' | 'Void' (ReadOnly): Invoice status.

## DownloadProperties
### Properties
* **kind**: 'CreditNote' | 'Invoice' | 'Receipt' | 'VoidNote' (ReadOnly): Document type.
* **url**: string (ReadOnly): Document URL.

## PaymentProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): The Amount.
* **date**: string (ReadOnly): The date of the payment.
* **paymentType**: string (ReadOnly): The type of payment.

## PolicyProperties
### Properties
* **marketplacePurchasesAllowed**: bool: The marketplacePurchasesAllowed flag.
* **reservationPurchasesAllowed**: bool: The reservationPurchasesAllowed flag.
* **subscriptionOwnerCanViewCharges**: bool: The subscriptionOwnerCanViewCharges flag.

## CustomerProperties
### Properties
* **displayName**: string (ReadOnly): The name of the customer.
* **enabledAzureSKUs**: [EnabledAzureSKUs](#enabledazureskus)[] (ReadOnly): Information about the product.
* **resellers**: [Reseller](#reseller)[] (ReadOnly): The resellers which are allowed to provide service to this customer.

## Reseller
### Properties
* **description**: string (ReadOnly): A description of the reseller.
* **resellerId**: string (ReadOnly): The reseller id.

## BillingSubscriptionProperties
### Properties
* **billingProfileId**: string (ReadOnly): Billing Profile id to which this product belongs.
* **billingProfileName**: string (ReadOnly): Billing Profile name to which this product belongs.
* **customerDisplayName**: string (ReadOnly): Display name of customer to which this product belongs.
* **customerId**: string (ReadOnly): Customer id to which this product belongs.
* **displayName**: string (ReadOnly): display name.
* **invoiceSectionId**: string (ReadOnly): Invoice section id to which this product belongs.
* **invoiceSectionName**: string (ReadOnly): Invoice section name to which this product belongs.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): The Amount.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): The Amount.
* **reseller**: [Reseller](#reseller) (ReadOnly): Details about a reseller.
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string (ReadOnly): The sku id.
* **subscriptionBillingStatus**: 'Abandoned' | 'Active' | 'Deleted' | 'Inactive' | 'Warning' (ReadOnly): Subscription billing status.
* **subscriptionId**: string (ReadOnly): Subscription Id.

## ProductSummaryProperties
### Properties
* **availabilityId**: string (ReadOnly): Availability Id.
* **billingFrequency**: 'Monthly' | 'OneTime' | 'UsageBased' (ReadOnly): Billing frequency.
* **billingProfileId**: string (ReadOnly): Billing Profile id to which this product belongs.
* **billingProfileName**: string (ReadOnly): Billing Profile name to which this product belongs.
* **displayName**: string (ReadOnly): The display name of the product.
* **endDate**: string (ReadOnly): end date.
* **invoiceSectionId**: string (ReadOnly): Invoice section id to which this product belongs.
* **invoiceSectionName**: string (ReadOnly): Invoice section name to which this product belongs.
* **lastCharge**: [Amount](#amount) (ReadOnly): The Amount.
* **lastChargeDate**: string (ReadOnly): The date of the last charge.
* **parentProductId**: string (ReadOnly): Parent Product Id.
* **productType**: string (ReadOnly): The type of product.
* **productTypeId**: string (ReadOnly): The product type id.
* **purchaseDate**: string (ReadOnly): The date of purchase.
* **quantity**: int (ReadOnly): The purchased product quantity.
* **skuDescription**: string (ReadOnly): Sku description.
* **skuId**: string (ReadOnly): Sku Id.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Disabled' | 'Expired' | 'Expiring' | 'Inactive' | 'PastDue' (ReadOnly): Product status.

## LineOfCreditProperties
### Properties
* **creditLimit**: [Amount](#amount): The Amount.
* **reason**: string (ReadOnly): The reason for the line of credit status when not approved.
* **remainingBalance**: [Amount](#amount) (ReadOnly): The Amount.
* **status**: 'Approved' | 'Rejected': The line of credit status.

## BillingRoleAssignmentProperties
### Properties
* **createdByPrincipalId**: string (ReadOnly): the creator's principal Id
* **createdByPrincipalTenantId**: string (ReadOnly): the creator's tenant Id
* **createdOn**: string (ReadOnly): the date the role assignment is created
* **name**: string (ReadOnly): the name of the role assignment
* **principalId**: string (ReadOnly): The user's principal id that the role gets assigned to
* **roleDefinitionName**: string (ReadOnly): The role definition id
* **scope**: string (ReadOnly): The scope the role get assigned to

## BillingRoleDefinitionProperties
### Properties
* **description**: string (ReadOnly): The role description
* **permissions**: [BillingPermissionsListResult](#billingpermissionslistresult) (ReadOnly): Result of list billingPermissions a caller has on a billing account.
* **roleName**: string (ReadOnly): The name of the role

## BillingPermissionsListResult
### Properties
* **value**: [BillingPermissionsProperties](#billingpermissionsproperties)[] (ReadOnly): The list OF billingPermissions a caller has on a billing account.

## BillingPermissionsProperties
### Properties
* **actions**: string[] (ReadOnly): The set of actions that the caller is allowed to do
* **notActions**: string[] (ReadOnly): The set of actions the caller is not allowed to do

