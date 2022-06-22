# Microsoft.Billing @ 2018-11-01-preview

## Resource Microsoft.Billing/billingAccounts@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingAccountProperties](#billingaccountproperties) (ReadOnly): A billing account.
* **type**: 'Microsoft.Billing/billingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/agreements@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties) (ReadOnly): An agreement.
* **type**: 'Microsoft.Billing/billingAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingProfileProperties](#billingprofileproperties): A billing profile.
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
* **properties**: [InvoiceSummaryProperties](#invoicesummaryproperties) (ReadOnly): An invoice.
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
* **properties**: [CustomerProperties](#customerproperties) (ReadOnly): The customer.
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
* **properties**: [DepartmentProperties](#departmentproperties) (ReadOnly): A department.
* **type**: 'Microsoft.Billing/billingAccounts/departments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): An account.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoiceSections@2018-11-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The InvoiceSection.
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

## Resource Microsoft.Billing/billingAccounts/lineOfCredit@2018-11-01-preview
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [LineOfCreditProperties](#lineofcreditproperties): A line of credit.
* **type**: 'Microsoft.Billing/billingAccounts/lineOfCredit' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingRoleAssignments@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The role assignment the caller has
* **type**: 'Microsoft.Billing/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingRoleDefinitions@2018-11-01-preview (ReadOnly)
* **Valid Scope(s)**: Extension
### Properties
* **apiVersion**: '2018-11-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The role definition for a role.
* **type**: 'Microsoft.Billing/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

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

## AgreementProperties
### Properties
* **agreementLink**: string (ReadOnly): The link to the agreement.
* **effectiveDate**: string (ReadOnly): Effective date.
* **expirationDate**: string (ReadOnly): Expiration date.
* **participants**: [Participants](#participants)[]: Participants or signer of the agreement.
* **status**: string (ReadOnly): The agreement status

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int: Amount value.

## AvailableBalanceProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): Balance Amount.

## BillingAccountProperties
### Properties
* **accountType**: 'Enrollment' | 'Organization' | string (ReadOnly): The billing account Type.
* **address**: [Address](#address): The address associated with billing account.
* **billingProfiles**: [BillingProfile](#billingprofile)[]: The billing profiles associated to the billing account. By default this is not populated, unless it's specified in $expand.
* **company**: string (ReadOnly): Company Name.
* **country**: string (ReadOnly): Country Name.
* **departments**: [Department](#department)[]: The departments associated to the enrollment.
* **displayName**: string (ReadOnly): The billing account name.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[]: The accounts associated to the enrollment.
* **enrollmentDetails**: [Enrollment](#enrollment) (ReadOnly): The details about the associated legacy enrollment. By default this is not populated, unless it's specified in $expand.
* **hasReadAccess**: bool (ReadOnly): Specifies whether the user has read access on billing account.
* **invoiceSections**: [InvoiceSection](#invoicesection)[]: The invoice sections associated to the billing account. By default this is not populated, unless it's specified in $expand.

## BillingPermissionsListResult
### Properties
* **value**: [BillingPermissionsProperties](#billingpermissionsproperties)[] (ReadOnly): The list OF billingPermissions a caller has on a billing account.

## BillingPermissionsProperties
### Properties
* **actions**: string[] (ReadOnly): The set of actions that the caller is allowed to do
* **notActions**: string[] (ReadOnly): The set of actions the caller is not allowed to do

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
* **permissions**: [BillingPermissionsListResult](#billingpermissionslistresult): The billingPermissions the role has
* **roleName**: string (ReadOnly): The name of the role

## BillingSubscriptionProperties
### Properties
* **billingProfileId**: string (ReadOnly): Billing Profile id to which this product belongs.
* **billingProfileName**: string (ReadOnly): Billing Profile name to which this product belongs.
* **customerDisplayName**: string (ReadOnly): Display name of customer to which this product belongs.
* **customerId**: string (ReadOnly): Customer id to which this product belongs.
* **displayName**: string (ReadOnly): display name.
* **invoiceSectionId**: string (ReadOnly): Invoice section id to which this product belongs.
* **invoiceSectionName**: string (ReadOnly): Invoice section name to which this product belongs.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): Last month charges.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): Month to date charges.
* **reseller**: [Reseller](#reseller) (ReadOnly): Reseller for this subscription.
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.
* **subscriptionBillingStatus**: 'Abandoned' | 'Active' | 'Deleted' | 'Inactive' | 'Warning' | string: Subscription billing status.
* **subscriptionId**: string (ReadOnly): Subscription Id.

## CustomerProperties
### Properties
* **displayName**: string: The name of the customer.
* **enabledAzureSKUs**: [EnabledAzureSKUs](#enabledazureskus)[]: Information about the product.
* **resellers**: [Reseller](#reseller)[]: The resellers which are allowed to provide service to this customer.

## Department
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [DepartmentProperties](#departmentproperties): A department.
* **type**: string (ReadOnly): Resource type.

## DepartmentProperties
### Properties
* **costCenter**: string: The cost center name.
* **departmentName**: string: The name for department.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[]: Associated enrollment accounts. By default this is not populated, unless it's specified in $expand.
* **status**: string: The status for department.

## DownloadProperties
### Properties
* **kind**: 'CreditNote' | 'Invoice' | 'Receipt' | 'VoidNote' | string (ReadOnly): Document type.
* **url**: string (ReadOnly): Document URL.

## EnabledAzureSKUs
### Properties
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.

## Enrollment
### Properties
* **billingCycle**: string (ReadOnly): Enrollment billing cycle
* **channel**: string (ReadOnly): The channel for Enrollment
* **countryCode**: string (ReadOnly): The countryCode for Enrollment
* **currency**: string (ReadOnly): The currency associated with enrollment
* **endDate**: string: Enrollment End Date
* **language**: string (ReadOnly): The language for Enrollment
* **policies**: [EnrollmentPolicies](#enrollmentpolicies) (ReadOnly): The attributes associated with legacy enrollment.
* **startDate**: string: Enrollment Start Date
* **status**: string (ReadOnly): Enrollment status

## EnrollmentAccount
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties): An account.
* **type**: string (ReadOnly): Resource type.

## EnrollmentAccountProperties
### Properties
* **accountName**: string: The account name.
* **accountOwner**: string: The account owner
* **costCenter**: string: The cost center name.
* **department**: [Department](#department): Associated department. By default this is not populated, unless it's specified in $expand.
* **endDate**: string: Account End Date
* **startDate**: string: Account Start Date
* **status**: string: The status for account.

## EnrollmentPolicies
### Properties
* **accountOwnerViewCharges**: bool (ReadOnly): The accountOwnerViewCharges flag for Enrollment
* **departmentAdminViewCharges**: bool (ReadOnly): The departmentAdminViewCharges flag for Enrollment
* **marketplacesEnabled**: bool (ReadOnly): The marketplaces flag for Enrollment
* **reservedInstancesEnabled**: bool (ReadOnly): The reserved instances flag for Enrollment

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

## InvoiceSummaryProperties
### Properties
* **amountDue**: [Amount](#amount) (ReadOnly): Amount due.
* **billedAmount**: [Amount](#amount) (ReadOnly): Amount billed.
* **billingProfileId**: string (ReadOnly): The billing profile id this invoice belongs to.
* **billingProfileName**: string (ReadOnly): The profile name this invoice belongs to.
* **documentUrls**: [DownloadProperties](#downloadproperties)[] (ReadOnly): List of document urls available to download including invoice and tax documents.
* **dueDate**: string (ReadOnly): The due date for invoice.
* **invoiceDate**: string (ReadOnly): The date when invoice was created.
* **invoicePeriodEndDate**: string (ReadOnly): The end date of the billing period.
* **invoicePeriodStartDate**: string (ReadOnly): The start date of the billing period.
* **payments**: [PaymentProperties](#paymentproperties)[] (ReadOnly): List of payments.
* **purchaseOrderNumber**: string (ReadOnly): The purchase identifier for the invoice.
* **status**: 'Due' | 'Paid' | 'PastDue' | 'Void' | string (ReadOnly): Invoice status.

## LineOfCreditProperties
### Properties
* **creditLimit**: [Amount](#amount): The current credit limit.
* **reason**: string (ReadOnly): The reason for the line of credit status when not approved.
* **remainingBalance**: [Amount](#amount) (ReadOnly): Remaining balance.
* **status**: 'Approved' | 'Rejected' | string: The line of credit status.

## Participants
### Properties
* **email**: string (ReadOnly): The email address of the participant or signer.
* **status**: string (ReadOnly): The signing status
* **statusDate**: string (ReadOnly): The date when status got changed.

## PaymentProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): The paid amount.
* **date**: string (ReadOnly): The date of the payment.
* **paymentType**: string (ReadOnly): The type of payment.

## PolicyProperties
### Properties
* **marketplacePurchasesAllowed**: bool: The marketplacePurchasesAllowed flag.
* **reservationPurchasesAllowed**: bool: The reservationPurchasesAllowed flag.
* **subscriptionOwnerCanViewCharges**: bool: The subscriptionOwnerCanViewCharges flag.

## ProductSummaryProperties
### Properties
* **availabilityId**: string (ReadOnly): Availability Id.
* **billingFrequency**: 'Monthly' | 'OneTime' | 'UsageBased' | string: Billing frequency.
* **billingProfileId**: string (ReadOnly): Billing Profile id to which this product belongs.
* **billingProfileName**: string (ReadOnly): Billing Profile name to which this product belongs.
* **displayName**: string (ReadOnly): The display name of the product.
* **endDate**: string (ReadOnly): end date.
* **invoiceSectionId**: string (ReadOnly): Invoice section id to which this product belongs.
* **invoiceSectionName**: string (ReadOnly): Invoice section name to which this product belongs.
* **lastCharge**: [Amount](#amount) (ReadOnly): Last month charges.
* **lastChargeDate**: string (ReadOnly): The date of the last charge.
* **parentProductId**: string (ReadOnly): Parent Product Id.
* **productType**: string (ReadOnly): The type of product.
* **productTypeId**: string (ReadOnly): The product type id.
* **purchaseDate**: string (ReadOnly): The date of purchase.
* **quantity**: int (ReadOnly): The purchased product quantity.
* **skuDescription**: string (ReadOnly): Sku description.
* **skuId**: string (ReadOnly): Sku Id.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Disabled' | 'Expired' | 'Expiring' | 'Inactive' | 'PastDue' | string: Product status.

## Reseller
### Properties
* **description**: string (ReadOnly): A description of the reseller.
* **resellerId**: string (ReadOnly): The reseller id.

