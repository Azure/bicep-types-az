# Microsoft.Billing @ 2019-10-01-preview

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

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InstructionProperties](#instructionproperties): A billing instruction used during invoice generation.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **displayName**: string (WriteOnly): The name of the invoice section.
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties) (ReadOnly): The properties of an invoice section.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [PolicyProperties](#policyproperties): The properties of a policy.
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: 'default' (Required, DeployTimeConstant): The resource name
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties): The properties of a customer's policy.
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant): The resource api version
* **id**: string (ReadOnly, DeployTimeConstant): The resource id
* **name**: string (Required, DeployTimeConstant): The resource name
* **properties**: [BillingRoleAssignmentProperties](#billingroleassignmentproperties): The properties of the role assignment.
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant): The resource type

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

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly): The sku description.
* **skuId**: string: The sku id.

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

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether the users in customer's organization can view charges at pay-as-you-go prices.

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

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed' | string: The policy that controls whether Azure marketplace purchases are allowed for a billing profile.
* **reservationPurchases**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether Azure reservation purchases are allowed for a billing profile.
* **viewCharges**: 'Allowed' | 'NotAllowed' | string: The policy that controls whether users with Azure RBAC access to a subscription can view its charges.

