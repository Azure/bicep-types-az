# Microsoft.Billing @ 2019-10-01-preview

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **address**: AddressDetails (WriteOnly)
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **displayName**: string (WriteOnly)
* **enabledAzurePlans**: AzurePlan[] (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **invoiceEmailOptIn**: bool (WriteOnly)
* **name**: string (Required, DeployTimeConstant)
* **poNumber**: string (WriteOnly)
* **properties**: BillingProfileProperties (ReadOnly)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InstructionProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **displayName**: string (WriteOnly)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: InvoiceSectionProperties (ReadOnly)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: PolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/customers/policies@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: CustomerPolicyProperties
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/departments/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/departments/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments@2019-10-01-preview
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2019-10-01-preview' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: BillingRoleAssignmentProperties
* **type**: 'Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments' (ReadOnly, DeployTimeConstant)

## AddressDetails
### Properties
* **addressLine1**: string (WriteOnly)
* **addressLine2**: string (WriteOnly)
* **addressLine3**: string (WriteOnly)
* **city**: string (WriteOnly)
* **companyName**: string (WriteOnly)
* **country**: string (WriteOnly)
* **firstName**: string (WriteOnly)
* **lastName**: string (WriteOnly)
* **postalCode**: string (WriteOnly)
* **region**: string (WriteOnly)

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly, WriteOnly)
* **skuId**: string (WriteOnly)

## BillingProfileProperties
### Properties
* **address**: AddressDetails (ReadOnly)
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' (ReadOnly)
* **currency**: string (ReadOnly)
* **displayName**: string (ReadOnly)
* **enabledAzurePlans**: AzurePlan[] (ReadOnly)
* **indirectRelationshipInfo**: IndirectRelationshipInfo (ReadOnly)
* **invoiceDay**: int (ReadOnly)
* **invoiceEmailOptIn**: bool (ReadOnly)
* **invoiceSections**: InvoiceSection[] (ReadOnly)
* **poNumber**: string (ReadOnly)
* **spendingLimit**: 'Off' | 'On' (ReadOnly)
* **status**: any (ReadOnly)
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' (ReadOnly)
* **targetClouds**: 'USGov' | 'USNat' | 'USSec'[] (ReadOnly)

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string (ReadOnly)
* **billingProfileName**: string (ReadOnly)
* **displayName**: string (ReadOnly)

## InvoiceSection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: InvoiceSectionProperties (ReadOnly)
* **type**: string (ReadOnly)

## InvoiceSectionProperties
### Properties
* **displayName**: string (ReadOnly)
* **state**: 'Active' | 'Restricted' (ReadOnly)
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' (ReadOnly)

## InstructionProperties
### Properties
* **amount**: int (Required)
* **creationDate**: string
* **endDate**: string (Required)
* **startDate**: string (Required)

## PolicyProperties
### Properties
* **marketplacePurchases**: 'AllAllowed' | 'NotAllowed' | 'OnlyFreeAllowed'
* **reservationPurchases**: 'Allowed' | 'NotAllowed'
* **viewCharges**: 'Allowed' | 'NotAllowed'

## BillingRoleAssignmentProperties
### Properties
* **createdByPrincipalId**: string (ReadOnly)
* **createdByPrincipalTenantId**: string (ReadOnly)
* **createdByUserEmailAddress**: string (ReadOnly)
* **createdOn**: string (ReadOnly)
* **name**: string (ReadOnly)
* **principalId**: string
* **principalTenantId**: string
* **roleDefinitionId**: string
* **scope**: string (ReadOnly)
* **userAuthenticationType**: string
* **userEmailAddress**: string

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed'

