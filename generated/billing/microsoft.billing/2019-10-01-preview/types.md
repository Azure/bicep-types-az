# Microsoft.Billing @ 2019-10-01-preview

## Resource Microsoft.Billing/billingAccounts@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingAccountProperties](#billingaccountproperties) (ReadOnly): The properties of the billing account.
* **type**: 'Microsoft.Billing/billingAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/agreements@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [AgreementProperties](#agreementproperties) (ReadOnly): The properties of an agreement.
* **type**: 'Microsoft.Billing/billingAccounts/agreements' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **address**: [AddressDetails](#addressdetails) (WriteOnly): Billing address.
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[] (WriteOnly): Enabled azure plans for the billing profile.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **invoiceEmailOptIn**: bool (WriteOnly): Flag controlling whether the invoices for the billing profile are sent through email.
* **name**: string (Required, DeployTimeConstant): The resource name
* **poNumber**: string (WriteOnly): The purchase order name that will appear on the invoices generated for the billing profile.
* **properties**: [BillingProfileProperties](#billingprofileproperties) (ReadOnly): The properties of the billing profile.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/availableBalance@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [AvailableBalanceProperties](#availablebalanceproperties) (ReadOnly): The properties of available balance.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/availableBalance' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstructionProperties](#instructionproperties): A billing instruction used during invoice generation.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoices@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The name of the invoice section.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties) (ReadOnly): The properties of an invoice section.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties) (ReadOnly): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingSubscriptions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The billing properties of a subscription.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/products@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductProperties](#productproperties) (ReadOnly): The properties of a product.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of a policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/transactions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [TransactionProperties](#transactionproperties) (ReadOnly): The properties of a transaction.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/transactions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleDefinitions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingSubscriptions/invoices@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **type**: 'Microsoft.Billing/billingAccounts/billingSubscriptions/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerProperties](#customerproperties) (ReadOnly): The customer.
* **type**: 'Microsoft.Billing/billingAccounts/customers' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/billingSubscriptions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingSubscriptionProperties](#billingsubscriptionproperties) (ReadOnly): The billing properties of a subscription.
* **type**: 'Microsoft.Billing/billingAccounts/customers/billingSubscriptions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): The properties of a customer's policy.
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/products@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [ProductProperties](#productproperties) (ReadOnly): The properties of a product.
* **type**: 'Microsoft.Billing/billingAccounts/customers/products' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [DepartmentProperties](#departmentproperties) (ReadOnly): A department.
* **type**: 'Microsoft.Billing/billingAccounts/departments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties) (ReadOnly): The properties of an enrollment account.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleDefinitionProperties](#billingroledefinitionproperties) (ReadOnly): The properties of the a role definition.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/invoices@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceProperties](#invoiceproperties) (ReadOnly): An invoice.
* **type**: 'Microsoft.Billing/billingAccounts/invoices' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingProperty@2019-10-01-preview (ReadOnly)
* **Valid Scope(s)**: Subscription
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [BillingPropertyProperties](#billingpropertyproperties) (ReadOnly): A billing property.
* **type**: 'Microsoft.Billing/billingProperty' (ReadOnly, DeployTimeConstant): The resource type

## Function listInvoiceSectionsWithCreateSubscriptionPermission (Microsoft.Billing/billingAccounts@2019-10-01-preview)
* **Resource**: Microsoft.Billing/billingAccounts
* **ApiVersion**: 2019-10-01-preview
* **Output**: [InvoiceSectionListWithCreateSubPermissionResult](#invoicesectionlistwithcreatesubpermissionresult)

## AddressDetails
### Properties
* **addressLine1**: string: Address line 1.
* **addressLine2**: string: Address line 2.
* **addressLine3**: string: Address line 3.
* **city**: string: Address city.
* **companyName**: string: Company name.
* **country**: string: Country code uses ISO2, 2-digit format.
* **firstName**: string: First name.
* **lastName**: string: Last name.
* **postalCode**: string: Postal code.
* **region**: string: Address region.

## AgreementProperties
### Properties
* **acceptanceMode**: 'ClickToAccept' | 'ESignEmbedded' | 'ESignOffline' | string (ReadOnly): The mode of acceptance for an agreement.
* **agreementLink**: string (ReadOnly): The URL to download the agreement.
* **category**: 'AffiliatePurchaseTerms' | 'MicrosoftCustomerAgreement' | 'Other' | string (ReadOnly): The category of the agreement signed by a customer.
* **effectiveDate**: string (ReadOnly): The date from which the agreement is effective.
* **expirationDate**: string (ReadOnly): The date when the agreement expires.
* **participants**: [Participants](#participants)[]: The list of participants that participates in acceptance of an agreement.
* **status**: string (ReadOnly): The current status of the agreement.

## Amount
### Properties
* **currency**: string (ReadOnly): The currency for the amount value.
* **value**: int: Amount value.

## AvailableBalanceProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): Balance amount.

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.

## BillingAccountProperties
### Properties
* **accountType**: 'Enterprise' | 'Individual' | 'Partner' | string (ReadOnly): The type of customer.
* **address**: [AddressDetails](#addressdetails): The address associated with the billing account.
* **agreementType**: 'EnterpriseAgreement' | 'MicrosoftCustomerAgreement' | 'MicrosoftOnlineServicesProgram' | 'MicrosoftPartnerAgreement' | string (ReadOnly): The type of agreement.
* **billingProfiles**: [BillingProfile](#billingprofile)[]: The billing profiles associated with the billing account. By default this is not populated, unless it's specified in $expand.
* **customerType**: 'Enterprise' | 'Individual' | 'Partner' | string (ReadOnly): The type of customer.
* **departments**: [Department](#department)[]: The departments associated to the enrollment.
* **displayName**: string (ReadOnly): The billing account name.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[]: The accounts associated to the enrollment.
* **enrollmentDetails**: [Enrollment](#enrollment) (ReadOnly): The details about the associated legacy enrollment. By default this is not populated, unless it's specified in $expand.
* **organizationId**: string (ReadOnly): Organization id.

## BillingPermissionsProperties
### Properties
* **actions**: string[] (ReadOnly): The set of actions that the caller is allowed to perform.
* **notActions**: string[] (ReadOnly): The set of actions that the caller is not allowed to perform.

## BillingProfile
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [BillingProfileProperties](#billingprofileproperties): The properties of the billing profile.
* **type**: string (ReadOnly): Resource type.

## BillingProfileProperties
### Properties
* **address**: [AddressDetails](#addressdetails): Billing address.
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' | string (ReadOnly): Identifies which services and purchases are paid by a billing profile.
* **currency**: string (ReadOnly): The currency in which the charges for the billing profile are billed.
* **displayName**: string: The name of the billing profile.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Information about the enabled azure plans.
* **indirectRelationshipInfo**: [IndirectRelationshipInfo](#indirectrelationshipinfo) (ReadOnly): Identifies the billing profile that is linked to another billing profile in indirect purchase motion.
* **invoiceDay**: int (ReadOnly): The day of the month when the invoice for the billing profile is generated.
* **invoiceEmailOptIn**: bool: Flag controlling whether the invoices for the billing profile are sent through email.
* **invoiceSections**: [InvoiceSection](#invoicesection)[]: The invoice sections associated to the billing profile.
* **poNumber**: string: The purchase order name that will appear on the invoices generated for the billing profile.
* **spendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **status**: 'Active' | 'Disabled' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | string (ReadOnly): Reason for the specified billing profile status.
* **targetClouds**: 'USGov' | 'USNat' | 'USSec' | string[] (ReadOnly): Identifies the cloud environments that are associated with a billing profile. This is a system managed optional field and gets updated as the billing profile gets associated with accounts in various clouds.

## BillingPropertyProperties
### Properties
* **billingAccountDisplayName**: string (ReadOnly): The name of the billing account to which the subscription is billed.
* **billingAccountId**: string (ReadOnly): The ID of the billing account to which the subscription is billed.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile to which the subscription is billed.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile to which the subscription is billed.
* **billingProfileSpendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **billingProfileStatus**: 'Active' | 'Disabled' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **billingProfileStatusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | string (ReadOnly): Reason for the specified billing profile status.
* **billingTenantId**: string (ReadOnly): The Azure AD tenant ID of the billing account for the subscription.
* **costCenter**: string (ReadOnly): The cost center applied to the subscription.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section to which the subscription is billed.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section to which the subscription is billed.
* **productId**: string (ReadOnly): The product ID of the Azure plan.
* **productName**: string (ReadOnly): The product name of the Azure plan.
* **skuDescription**: string (ReadOnly): The sku description of the Azure plan for the subscription.
* **skuId**: string (ReadOnly): The sku ID of the Azure plan for the subscription.

## BillingRoleAssignmentProperties
### Properties
* **createdByPrincipalId**: string (ReadOnly): The principal Id of the user who created the role assignment.
* **createdByPrincipalTenantId**: string (ReadOnly): The tenant Id of the user who created the role assignment.
* **createdByUserEmailAddress**: string (ReadOnly): The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **createdOn**: string (ReadOnly): The date the role assignment was created.
* **name**: string (ReadOnly): The name of the role assignment.
* **principalId**: string: The principal id of the user to whom the role was assigned.
* **principalTenantId**: string: The principal tenant id of the user to whom the role was assigned.
* **roleDefinitionId**: string: The ID of the role definition.
* **scope**: string (ReadOnly): The scope at which the role was assigned.
* **userAuthenticationType**: string: The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
* **userEmailAddress**: string: The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.

## BillingRoleDefinitionProperties
### Properties
* **description**: string (ReadOnly): The role description
* **permissions**: [BillingPermissionsProperties](#billingpermissionsproperties)[]: The billingPermissions the role has
* **roleName**: string (ReadOnly): The name of the role

## BillingSubscriptionProperties
### Properties
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile to which the subscription is billed.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile to which the subscription is billed.
* **customerDisplayName**: string (ReadOnly): The name of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing account.
* **customerId**: string (ReadOnly): The ID of the customer for whom the subscription was created. The field is applicable only for Microsoft Partner Agreement billing account.
* **displayName**: string (ReadOnly): The name of the subscription.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section to which the subscription is billed.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section to which the subscription is billed.
* **lastMonthCharges**: [Amount](#amount) (ReadOnly): The last month charges.
* **monthToDateCharges**: [Amount](#amount) (ReadOnly): The current month to date charges.
* **reseller**: [Reseller](#reseller) (ReadOnly): Reseller for this subscription.
* **skuDescription**: string (ReadOnly): The sku description of the Azure plan for the subscription.
* **skuId**: string: The sku ID of the Azure plan for the subscription.
* **subscriptionBillingStatus**: 'Abandoned' | 'Active' | 'Deleted' | 'Inactive' | 'Warning' | string: The current billing status of the subscription.
* **subscriptionId**: string (ReadOnly): The ID of the subscription.

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

## CustomerProperties
### Properties
* **displayName**: string: The name of the customer.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Azure plans enabled for the customer.
* **resellers**: [Reseller](#reseller)[]: The list of resellers for which an Azure plan is enabled for the customer.

## Department
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [DepartmentProperties](#departmentproperties): A department.
* **type**: string (ReadOnly): Resource type.

## DepartmentProperties
### Properties
* **costCenter**: string: The cost center associated with the department.
* **departmentName**: string: The name of the department.
* **enrollmentAccounts**: [EnrollmentAccount](#enrollmentaccount)[]: Associated enrollment accounts. By default this is not populated, unless it's specified in $expand.
* **status**: string: The status of the department.

## Document
### Properties
* **documentNumbers**: string[] (ReadOnly): Document numbers for an Enterprise Agreement invoice.
* **kind**: 'CreditNote' | 'Invoice' | 'TaxReceipt' | 'VoidNote' | string (ReadOnly): The type of the document.
* **url**: string (ReadOnly): Document URL.

## Enrollment
### Properties
* **billingCycle**: string (ReadOnly): The billing cycle for the enrollment.
* **channel**: string (ReadOnly): The channel type of the enrollment.
* **countryCode**: string (ReadOnly): The country code of the enrollment.
* **currency**: string (ReadOnly): The billing currency for the enrollment.
* **endDate**: string: The end date of the enrollment.
* **language**: string (ReadOnly): The language for the enrollment.
* **policies**: [EnrollmentPolicies](#enrollmentpolicies) (ReadOnly): The policies for Enterprise Agreement enrollments.
* **startDate**: string: The start date of the enrollment.
* **status**: string (ReadOnly): The current status of the enrollment.

## EnrollmentAccount
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [EnrollmentAccountProperties](#enrollmentaccountproperties): The properties of an enrollment account.
* **type**: string (ReadOnly): Resource type.

## EnrollmentAccountProperties
### Properties
* **accountName**: string: The name of the enrollment account.
* **accountOwner**: string: The owner of the enrollment account.
* **costCenter**: string: The cost center associated with the enrollment account.
* **department**: [Department](#department): Associated department. By default this is not populated, unless it's specified in $expand.
* **endDate**: string: The end date of the enrollment account.
* **startDate**: string: The start date of the enrollment account.
* **status**: string: The status of the enrollment account.

## EnrollmentPolicies
### Properties
* **accountOwnerViewCharges**: bool (ReadOnly): The policy that controls whether Account Owners can view charges.
* **departmentAdminViewCharges**: bool (ReadOnly): The policy that controls whether Department Administrators can view charges.
* **marketplacesEnabled**: bool (ReadOnly): The policy that controls whether Azure marketplace purchases are allowed in the enrollment.
* **reservedInstancesEnabled**: bool (ReadOnly): The policy that controls whether Azure reservation purchases are allowed in the enrollment.

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string: The billing account name of the partner or the customer for an indirect motion.
* **billingProfileName**: string: The billing profile name of the partner or the customer for an indirect motion.
* **displayName**: string: The display name of the partner or customer for an indirect motion.

## InstructionProperties
### Properties
* **amount**: int (Required): The amount budgeted for this billing instruction.
* **creationDate**: string: The date this billing instruction was created.
* **endDate**: string (Required): The date this billing instruction is no longer in effect.
* **startDate**: string (Required): The date this billing instruction goes into effect.

## InvoiceProperties
### Properties
* **amountDue**: [Amount](#amount) (ReadOnly): The amount due as of now.
* **azurePrepaymentApplied**: [Amount](#amount) (ReadOnly): The amount of Azure prepayment applied to the charges. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **billedAmount**: [Amount](#amount) (ReadOnly): The total charges for the invoice billing period.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile for which the invoice is generated.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile for which the invoice is generated.
* **creditAmount**: [Amount](#amount) (ReadOnly): The total refund for returns and cancellations during the invoice billing period. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **documents**: [Document](#document)[] (ReadOnly): List of documents available to download such as invoice and tax receipt.
* **dueDate**: string (ReadOnly): The due date for the invoice.
* **freeAzureCreditApplied**: [Amount](#amount) (ReadOnly): The amount of free Azure credits applied to the charges. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **invoiceDate**: string (ReadOnly): The date when the invoice was generated.
* **invoicePeriodEndDate**: string (ReadOnly): The end date of the billing period for which the invoice is generated.
* **invoicePeriodStartDate**: string (ReadOnly): The start date of the billing period for which the invoice is generated.
* **invoiceType**: 'AzureMarketplace' | 'AzureService' | 'AzureSupport' | string (ReadOnly): Invoice type.
* **isMonthlyInvoice**: bool (ReadOnly): Specifies if the invoice is generated as part of monthly invoicing cycle or not. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **payments**: [PaymentProperties](#paymentproperties)[] (ReadOnly): List of payments.
* **purchaseOrderNumber**: string (ReadOnly): An optional purchase order number for the invoice.
* **rebillDetails**: [InvoiceRebillDetails](#invoicerebilldetails): Rebill details of an Enterprise Agreement invoice.
* **status**: 'Due' | 'OverDue' | 'Paid' | 'Void' | string (ReadOnly): The current status of the invoice.
* **subscriptionId**: string (ReadOnly): The ID of the subscription for which the invoice is generated.
* **subTotal**: [Amount](#amount) (ReadOnly): The pre-tax amount due. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **taxAmount**: [Amount](#amount) (ReadOnly): The amount of tax charged for the billing period. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.
* **totalAmount**: [Amount](#amount) (ReadOnly): The amount due when the invoice was generated. This field is applicable to billing accounts with agreement type Microsoft Customer Agreement.

## InvoiceRebillDetails
### Properties
* **latestInvoiceId**: string (ReadOnly): The ID of the latest invoice generated when an Enterprise Agreement invoice is rebilled.
* **rebillDocumentType**: 'Credit' | 'Original' | 'Rebill' | string: The type of the document generated when an Enterprise Agreement invoice is rebilled.
* **rebilledInvoiceId**: string (ReadOnly): The ID of the invoice generated when an Enterprise Agreement invoice is rebilled.

## InvoiceSection
### Properties
* **id**: string (ReadOnly): Resource Id.
* **name**: string (ReadOnly): Resource name.
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties): The properties of an invoice section.
* **type**: string (ReadOnly): Resource type.

## InvoiceSectionListWithCreateSubPermissionResult
### Properties
* **nextLink**: string (ReadOnly): The link (url) to the next page of results.
* **value**: [InvoiceSectionWithCreateSubPermission](#invoicesectionwithcreatesubpermission)[]: The list of invoice section properties with create subscription permission.

## InvoiceSectionProperties
### Properties
* **displayName**: string: The name of the invoice section.
* **state**: 'Active' | 'Restricted' | string (ReadOnly): Identifies the state of an invoice section.
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' | string (ReadOnly): Identifies the cloud environments that are associated with an invoice section. This is a system managed optional field and gets updated as the invoice section gets associated with accounts in various clouds.

## InvoiceSectionWithCreateSubPermission
### Properties
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile for the invoice section.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile for the invoice section.
* **billingProfileSpendingLimit**: 'Off' | 'On' | string (ReadOnly): The billing profile spending limit.
* **billingProfileStatus**: 'Active' | 'Disabled' | 'Warned' | string (ReadOnly): The status of the billing profile.
* **billingProfileStatusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' | string (ReadOnly): Reason for the specified billing profile status.
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]: Enabled azure plans for the associated billing profile.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section.

## Participants
### Properties
* **email**: string (ReadOnly): The email address of the participant.
* **status**: string (ReadOnly): The acceptance status of the participant.
* **statusDate**: string (ReadOnly): The date when the status got changed.

## PaymentProperties
### Properties
* **amount**: [Amount](#amount) (ReadOnly): The paid amount.
* **date**: string (ReadOnly): The date when the payment was made.
* **paymentMethodFamily**: 'CheckWire' | 'CreditCard' | 'Credits' | 'None' | string: The family of payment method.
* **paymentMethodType**: string (ReadOnly): The type of payment method.
* **paymentType**: string (ReadOnly): The type of payment.

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed' | string: The policy that controls whether Azure marketplace purchases are allowed for a billing profile.
* **reservationPurchases**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether Azure reservation purchases are allowed for a billing profile.
* **viewCharges**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether users with Azure RBAC access to a subscription can view its charges.

## ProductProperties
### Properties
* **availabilityId**: string (ReadOnly): The availability of the product.
* **billingFrequency**: 'Monthly' | 'OneTime' | 'UsageBased' | string: The frequency at which the product will be billed.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile to which the product is billed.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile to which the product is billed.
* **customerDisplayName**: string (ReadOnly): The name of the customer for whom the product was purchased. The field is applicable only for Microsoft Partner Agreement billing account.
* **customerId**: string (ReadOnly): The ID of the customer for whom the product was purchased. The field is applicable only for Microsoft Partner Agreement billing account.
* **displayName**: string (ReadOnly): The display name of the product.
* **endDate**: string (ReadOnly): The date when the product will be renewed or canceled.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section to which the product is billed.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section to which the product is billed.
* **lastCharge**: [Amount](#amount) (ReadOnly): The last month charges.
* **lastChargeDate**: string (ReadOnly): The date of the last charge.
* **parentProductId**: string (ReadOnly): Parent product Id.
* **productType**: string (ReadOnly): The description of the type of product.
* **productTypeId**: string (ReadOnly): The ID of the type of product.
* **purchaseDate**: string (ReadOnly): The date when the product was purchased.
* **quantity**: int (ReadOnly): The quantity purchased for the product.
* **reseller**: [Reseller](#reseller) (ReadOnly): Reseller for this product.
* **skuDescription**: string (ReadOnly): The sku description of the product.
* **skuId**: string (ReadOnly): The sku ID of the product.
* **status**: 'Active' | 'AutoRenew' | 'Cancelled' | 'Disabled' | 'Expired' | 'Expiring' | 'Inactive' | 'PastDue' | string: The current status of the product.
* **tenantId**: string (ReadOnly): The id of the tenant in which the product is used.

## Reseller
### Properties
* **description**: string (ReadOnly): The name of the reseller.
* **resellerId**: string (ReadOnly): The MPN ID of the reseller.

## TransactionProperties
### Properties
* **azureCreditApplied**: [Amount](#amount) (ReadOnly): The amount of any Azure credits automatically applied to this transaction.
* **billingCurrency**: string (ReadOnly): The ISO 4217 code for the currency in which this transaction is billed.
* **billingProfileDisplayName**: string (ReadOnly): The name of the billing profile which will be billed for the transaction.
* **billingProfileId**: string (ReadOnly): The ID of the billing profile which will be billed for the transaction.
* **customerDisplayName**: string (ReadOnly): The name of the customer for which the transaction took place. The field is applicable only for Microsoft Partner Agreement billing account.
* **customerId**: string (ReadOnly): The ID of the customer for which the transaction took place. The field is applicable only for Microsoft Partner Agreement billing account.
* **date**: string (ReadOnly): The date of transaction.
* **discount**: int (ReadOnly): The percentage discount, if any, applied to this transaction.
* **effectivePrice**: [Amount](#amount) (ReadOnly): The price of the product after applying any discounts.
* **exchangeRate**: int (ReadOnly): The exchange rate used to convert charged amount to billing currency, if applicable.
* **invoice**: string (ReadOnly): Invoice on which the transaction was billed or 'pending' if the transaction is not billed.
* **invoiceSectionDisplayName**: string (ReadOnly): The name of the invoice section which will be billed for the transaction.
* **invoiceSectionId**: string (ReadOnly): The ID of the invoice section which will be billed for the transaction.
* **kind**: 'all' | 'reservation' | string: The kind of transaction. Options are all or reservation.
* **marketPrice**: [Amount](#amount) (ReadOnly): The retail price of the product.
* **orderId**: string (ReadOnly): The order ID of the reservation. The field is only applicable for transaction of kind reservation.
* **orderName**: string (ReadOnly): The name of the reservation order. The field is only applicable for transactions of kind reservation.
* **pricingCurrency**: string (ReadOnly): The ISO 4217 code for the currency in which the product is priced.
* **productDescription**: string (ReadOnly): The description of the product for which the transaction took place.
* **productFamily**: string (ReadOnly): The family of the product for which the transaction took place.
* **productType**: string (ReadOnly): The type of the product for which the transaction took place.
* **productTypeId**: string (ReadOnly): The ID of the product type for which the transaction took place.
* **quantity**: int (ReadOnly): The quantity purchased in the transaction.
* **servicePeriodEndDate**: string (ReadOnly): The end date of the product term, or the end date of the month in which usage ended.
* **servicePeriodStartDate**: string (ReadOnly): The date of the purchase of the product, or the start date of the month in which usage started.
* **subscriptionId**: string (ReadOnly): The ID of the subscription that was used for the transaction. The field is only applicable for transaction of kind reservation.
* **subscriptionName**: string (ReadOnly): The name of the subscription that was used for the transaction. The field is only applicable for transaction of kind reservation.
* **subTotal**: [Amount](#amount) (ReadOnly): The pre-tax charged amount for the transaction.
* **tax**: [Amount](#amount) (ReadOnly): The tax amount applied to the transaction.
* **transactionAmount**: [Amount](#amount) (ReadOnly): The charge associated with the transaction.
* **transactionType**: 'Purchase' | 'Usage Charge' | string: The type of transaction.
* **unitOfMeasure**: string (ReadOnly): The unit of measure used to bill for the product. For example, compute services are billed per hour.
* **units**: int (ReadOnly): The number of units used for a given product.
* **unitType**: string (ReadOnly): The description for the unit of measure for a given product.

