# Microsoft.Billing @ 2020-05-01

## Resource Microsoft.Billing/billingAccounts/billingProfiles@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [BillingProfileProperties](#billingprofileproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/instructions@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InstructionProperties](#instructionproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/instructions' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/billingProfiles/policies@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [PolicyProperties](#policyproperties)
* **type**: 'Microsoft.Billing/billingAccounts/billingProfiles/policies' (ReadOnly, DeployTimeConstant)

## Resource Microsoft.Billing/billingAccounts/customers/policies@2020-05-01
* **Valid Scope(s)**: Tenant
### Properties
* **apiVersion**: '2020-05-01' (ReadOnly, DeployTimeConstant)
* **id**: string (ReadOnly, DeployTimeConstant)
* **name**: string (Required, DeployTimeConstant)
* **properties**: [CustomerPolicyProperties](#customerpolicyproperties)
* **type**: 'Microsoft.Billing/billingAccounts/customers/policies' (ReadOnly, DeployTimeConstant)

## BillingProfileProperties
### Properties
* **billingRelationshipType**: 'CSPPartner' | 'Direct' | 'IndirectCustomer' | 'IndirectPartner' (ReadOnly)
* **billTo**: [AddressDetails](#addressdetails)
* **currency**: string (ReadOnly)
* **displayName**: string
* **enabledAzurePlans**: [AzurePlan](#azureplan)[]
* **hasReadAccess**: bool (ReadOnly)
* **indirectRelationshipInfo**: [IndirectRelationshipInfo](#indirectrelationshipinfo) (ReadOnly)
* **invoiceDay**: int (ReadOnly)
* **invoiceEmailOptIn**: bool
* **invoiceSections**: [InvoiceSectionsOnExpand](#invoicesectionsonexpand)
* **poNumber**: string
* **spendingLimit**: 'Off' | 'On' (ReadOnly)
* **status**: 'Active' | 'Disabled' | 'Warned' (ReadOnly)
* **statusReasonCode**: 'PastDue' | 'SpendingLimitExpired' | 'SpendingLimitReached' (ReadOnly)
* **systemId**: string (ReadOnly)
* **targetClouds**: 'USGov' | 'USNat' | 'USSec'[] (ReadOnly)

## AddressDetails
### Properties
* **addressLine1**: string (Required)
* **addressLine2**: string
* **addressLine3**: string
* **city**: string
* **companyName**: string
* **country**: string (Required)
* **district**: string
* **email**: string
* **firstName**: string
* **lastName**: string
* **phoneNumber**: string
* **postalCode**: string
* **region**: string

## AzurePlan
### Properties
* **skuDescription**: string (ReadOnly)
* **skuId**: string

## IndirectRelationshipInfo
### Properties
* **billingAccountName**: string
* **billingProfileName**: string
* **displayName**: string

## InvoiceSectionsOnExpand
### Properties
* **hasMoreResults**: bool (ReadOnly)
* **value**: [InvoiceSection](#invoicesection)[]

## InvoiceSection
### Properties
* **id**: string (ReadOnly)
* **name**: string (ReadOnly)
* **properties**: [InvoiceSectionProperties](#invoicesectionproperties)
* **type**: string (ReadOnly)

## InvoiceSectionProperties
### Properties
* **displayName**: string
* **labels**: [Dictionary<string,String>](#dictionarystringstring)
* **state**: 'Active' | 'Restricted' (ReadOnly)
* **systemId**: string (ReadOnly)
* **targetCloud**: 'USGov' | 'USNat' | 'USSec' (ReadOnly)

## Dictionary<string,String>
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## CustomerPolicyProperties
### Properties
* **viewCharges**: 'Allowed' | 'NotAllowed'

